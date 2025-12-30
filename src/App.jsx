import { useState } from "react";

export default function Person() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const fullName = firstName + " " + lastName
  return (
    <>
    <div>
      <label htmlFor="firstName"></label>
      <input type="text" id="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value) }}/>
    </div>
    <div>
    <label htmlFor="firstName"></label>
    <input type="text" id="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value) }}/>
    </div>
    
      <h1>{fullName}</h1>
    </>
  ) 
}