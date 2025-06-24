import React, { useState } from 'react'

const PracticeTask2 = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const displayData = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
    }
  return (
    <>
        <form action="" onSubmit={displayData}>
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)}/>
            <br /> <br />
            <label htmlFor="email">Enter Your Email:</label>
            <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
            <button>Submit</button>
        </form>
    </>
  )
}

export default PracticeTask2