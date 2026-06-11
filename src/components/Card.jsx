import React from 'react'

const Card = ({ data, id, handleDelete, setEdit, setName, setEmail, setImage, setPhoneNumber, setGen }) => {
  
  const overlayStyle = {
    backgroundImage: `url(https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-500 flex flex-col items-center md:h-30 w-full bg-white rounded-sm md:flex md:flex-row md:items-center
    md:justify-between p-3 text-xl text-black font-semibold border border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]">
      <div style={overlayStyle}  className="h-25 w-25 rounded-full bg-blue-500">
        <img
          src={data.Image}
          alt=""
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      <h2 className='text-center md:wrap-anywhere md:w-40'>{data.Name}</h2>
      <p className="text-center md:wrap-anywhere md:w-70">{data.Email}</p>
      <p className="text-center md:wrap-anywhere md:w-50">{data.PhoneNumber}</p>
      <div className="flex gap-4">

        <button onClick={() => handleDelete(id)} className="text-red-500 text-4xl cursor-pointer active:scale-97">
        <i className="ri-delete-bin-fill"></i>
      </button >
      <button onClick={() => {
        setName(data.Name);
        setEmail(data.Email);
        setImage(data.Image);
        setPhoneNumber(data.PhoneNumber);
        setEdit(id);
        setGen(true);
      }} className="text-green-500 text-4xl cursor-pointer active:scale-97">
        <i className="ri-edit-box-fill"></i>
      </button>
      </div>
      
    </div>
  );
}

export default Card