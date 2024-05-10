import React , {useState} from 'react'
function Form() {
  let  [formData,setFormData] = useState({
    fullName:"",
    email :"",
    password:"",
  })
  // const handlenameChange = (event) => {
  //   setName(event.target.value);
  // }
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // }
  // console.log(name);
  // console.log(email);
  let handleFormSubmit = (event) => {
     event.preventDefault();
     console.log(formData);
     setFormData({
      fullName:"",
      email :"",  
      password:"",
     })
  }
  let handleInputChange = (event) => {
    // let FieldName = event.target.name;
    // let newVal = event.target.value;
    // console.log(FieldName , newVal);
    setFormData((currentData) => {
      // currentData[FieldName] = newVal;
    return {...currentData , [event.target.name]:event.target.value};
    })

  } 
  return (
    <>
      <h1>Forms In React :</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Name:</label>
        <input id='username' type="text" placeholder="Enter your name :" value={formData.fullName} onChange={handleInputChange} name='fullName'/>
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input id='email' type="email" placeholder="Enter your email :" value={formData.email} 
        onChange={handleInputChange} name='email'/>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input id='password' type="password" placeholder="Enter your password :" value={formData.password} 
        onChange={handleInputChange} name='password'/>
        <button>Submit</button>
      </form>
    </>
  )
}
export default Form




