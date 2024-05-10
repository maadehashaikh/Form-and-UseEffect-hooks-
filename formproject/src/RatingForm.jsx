import React , {useState} from 'react'
function RatingForm() {
  let [formData,setFormData] = useState({
    username:"",
    remarks:"",
    ratings:"",
  })
const handleFormData = (event) => {
     setFormData((currData) => {
      return {...currData , [event.target.name]:event.target.value}
     })
}
const submitForm = (event) => {
  console.log(formData);
  event.preventDefault();
  setFormData({
    username:"",
    remarks:"",
    ratings:"",
  })
}  
  return (
    <>
      <h1>Its Our Rating Form !!  </h1>
      <form onSubmit={submitForm}>
      <label htmlFor="username">UseeName : </label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
      <br/><br />
      <label htmlFor="remarks">Enter Your Remarks About Our Product :</label>
      <br/>
      <textarea name="remarks" id="remarks" cols="50" rows="10" onChange={handleFormData} value={formData.remarks}
      placeholder='Add your remarks !'></textarea>
      <br/>
      <label htmlFor="ratings">Rate Our Product : </label>
      <input type="number" name="ratings" id="ratings" onChange={handleFormData} value={formData.ratings} min={1} max={5}/>
      <br /><br />
      <button type="submit">Add Comment</button>
      </form>
    </>
  )
}

export default RatingForm
