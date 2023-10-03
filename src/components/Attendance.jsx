import React, { useState } from 'react'
import axios from "axios"

const Attendance = () => {
const[attendaceData,setAttendaceData]=useState({
    date:"",
    name:"",
    regNo:"",
    present:false,
    absent:false
})


const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAttendaceData({
      ...attendaceData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(attendaceData);


    try {
      const response = await axios.post('YOUR_API_ENDPOINT', attendaceData);
      console.log(attendaceData);
      alert("succesful attendance submit");

      // If the response is successful, you can handle it here.
    } catch (error) {
      console.error('Error:', error);
      alert("some problem");
    }
    setAttendaceData("");
  };

  return (
    <>
      <h1>list of student</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={attendaceData.date}
            onChange={handleChange}
          />
        </label>
        </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={attendaceData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          regNo:
          <input
            type="number"
            name="regNo"
            value={attendaceData.regNo}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Present:
          <input
            type="checkbox"
            name="present"
            checked={attendaceData.present}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          absent:
          <input
            type="checkbox"
            name="absent"
            checked={attendaceData.absent}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>submit</button>
      </form>
      </div>


      
    </>
  )
}

export default Attendance
