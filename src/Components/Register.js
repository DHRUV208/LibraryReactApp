import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom';
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[role, setRole] = useState("");
  // const navigate = useNavigate();
  async function signup() {
    let item = { name, email, password, role };
    console.warn(item);
    let result = fetch("http://localhost:9000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    }).then(()=>{
      alert(' Register Successful')
    });
    result = await result;
    localStorage.setItem("user-info", JSON.stringify(result));

    //  if (result){
    //      navigate('/');
    //  }
  }

  return (
    <div>
      {/* <Header/> */}
      <h1>Register Page</h1>
      {/* <form action = "" onSubmit={submitForm}> */}
      <div className="col-sm-6">
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type="text"
          placeholder="name"
          className="form-control"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>  
      <div>
      <input
          type="text"
          placeholder="role"
          className="form-control"
          autoComplete="off"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      <div>
        {/* <label htmlFor='password'>Password</label> */}
        <input
          type="password"
          placeholder="password"
          value={password}
          className="form-control"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={signup} type="submit">
        Sign Up
      </button>
      {/* </form> */}
      {/* <div>
             {
                 allEntry.map((currElem ) =>{
                     return (
                         <div className='showDataStyle'>
                             <p>{currElem.email}</p>
                             <p>{currElem.password}</p>
     
                         </div>
                     )
                 })
             }
         </div> */}
    </div>
  );
}
