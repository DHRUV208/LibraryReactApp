import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import Header from './Header';
export default function  LoginForm ()  {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [allEntry, setAllEntry] = useState([]);
    // const submitForm = (e) =>{
    //     e.preventDefault();

    //     const newEntry = {email:email, password:password};
    //     setAllEntry([...allEntry,newEntry]);
    //     console.log(allEntry);


    // }

   async function login (){
       console.warn(email,password)
        let item = {email,password};
        let result = fetch('http://localhost:9000/login',{
            method :'POST',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(item)
        }) .then(() =>{
            alert('Login Successful');
        })
        //     <Redirect to='/library/create'></Redirect>
        // });
        result =  await result;
        localStorage.setItem("user-info",JSON.stringify(result))
    }
    return (
   <div>
       {/* <Header/> */}
       <h1>Login Page</h1>
    {/* <form action = "" onSubmit={submitForm}> */}
        <div className='col-sm-6'>
            {/* <label htmlFor='email'>Email</label> */}
            <input type='text' placeholder='email' className='form-control' autoComplete='off' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            {/* <label htmlFor='password'>Password</label> */}
            <input type='password' placeholder='password' className='form-control' autoComplete='off'
             value={password}  
             onChange={(e) => setPassword(e.target.value)}

            />
        </div>

        <button className='btn btn-primary' onClick= {login} type='submit'>Login</button>
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
  )
}

