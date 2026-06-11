import React from 'react'
import { useState } from 'react'
import Card from './components/Card'
import {useEffect} from 'react'

const App = () => {
  const [Image, setImage] = useState('');
      const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [FormData, setFormData] = useState([])

  const [Gen, setGen] = useState(false)

  const [Edit, setEdit] = useState(null)

  
  function handleSubmit(e) {
        e.preventDefault();
        if (Edit !== null) {
          const Arr = [...FormData]
         
          Arr[Edit] = { Image, Name, Email, PhoneNumber }
          setFormData(Arr)
          setEdit(null)
          localStorage.setItem('contacts', JSON.stringify(Arr))
        }
        else {
          const newArr = [...FormData]
          newArr.push({ Image, Name, Email, PhoneNumber })
            setFormData(newArr);

          localStorage.setItem('contacts', JSON.stringify(newArr))
        }
      
        setImage("");
        setName("");
        setEmail("");
        setPhoneNumber("");
      }
  
  useEffect(() => {
    setFormData(JSON.parse(localStorage.getItem('contacts')) || []);
  },[])
  
  function handleDelete(index) {
    const newArr = [...FormData]
    const arr = newArr.filter((item, idx) => idx !== index)
    setFormData(arr)
    localStorage.setItem('contacts', JSON.stringify(arr))
      }
  
      const cardStyle = {
        // Note the backticks (``) and quotes inside the url() function
        backgroundImage: `url(https://i.pinimg.com/736x/4c/53/8e/4c538ec9949d43bb2de66b5b2f5ec64c.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
      };
  
  
  
  return (
    <div className="h-screen w-full flex flex-col bg-black md:flex-row gap-4 overflow-y-auto">
      <div className="h-full bg-black text-white w-full md:w-1/3" style={cardStyle}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 p-4 items-center justify-center h-full w-full"
        >
          <input
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            className="w-80 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Image url"
          />
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className=" w-80 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
          />
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-80 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            placeholder="Phone Number"
          />
          {Gen ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md active:scale-96 cursor-pointer"
              type="submit"
            >
              Save Changes
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md active:scale-96 cursor-pointer"
              type="submit"
            >
              Add Contact
            </button>
          )}
        </form>
      </div>
      <div className="h-full bg-black w-full md:w-2/3 flex flex-col py-5 gap-4 md:overflow-y-auto">
        {FormData.map((data, index) => (
          <Card
            key={index}
            data={data}
            id={index}
            handleDelete={handleDelete}
            setEdit={setEdit}
            setName={setName}
            setEmail={setEmail}
            setImage={setImage}
            setPhoneNumber={setPhoneNumber}
            Gen={Gen}
            setGen={setGen}
          />
        ))}
      </div>
    </div>
  );
}

export default App