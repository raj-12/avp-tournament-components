import { Button } from "bootstrap";
import { useState } from "react";
import axios from "axios";
// import {md5} from 'md5'

import email from './email.svg';
import pass from './pass.svg'
import head from './head.svg'


import './login.css'
const md5 = require('md5');



const Login = (props)=>{
    const [userName,setUser]=useState('');
    const [password,setPassword]=useState('');
    const [forgot,setForgot]=useState(false);
    const [loading, setLoading]=useState(false);
    const [validCred, setCred] = useState(true)


    const url="https://fanwins.in/api/loginPromoter";


    const updateUser = (e)=>{
        setUser(e.target.value);
    }
    const updatePass = (e)=>{
        setPassword(e.target.value);
    }

    const checkValues =(e)=>{

        e.preventDefault();
        setLoading(true);
        const pass =md5(password)
        console.log(pass)
        const data = {email:userName,password:pass};
        const formData = new FormData()
        formData.append('data',JSON.stringify(data))

        axios({
            method: "post",
            url: url,
            data: formData,
          }).then(function (response) {
          
            console.log(response);
            setCred(true)
            props.history.push('/pages')
            // setLoading(false);
          })
          .catch(function (response) {
            setLoading(false);
            setCred(false)
            console.log(response);
            
          });
         
    }

    const forgotPassword =(e)=>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData()
        formData.append('email_id',userName)

        axios({
            method: "post",
            url: "https://fanwins.in/api/forgotPassword",
            data: formData,
          }).then(function (response) {
         
            console.log(response);
            setLoading(false);
            setForgot(false)
          })
          .catch(function (response,data) {
            console.log(response);
            setLoading(false);
            setCred(false)
          });

         
    }
    return (
        <>
          
            <div id="sign-in" className="container-fluid" style={{"position":"relative","zIndex":"1000"}}>
            {/* <div className="sign-in-form">
            <img  src="https://avp-tournament.herokuapp.com/static/media/logo_login.cf06e2a2.svg" alt=""/>
            <div className="heading" style={{"fontFamily":"FuturaPTBold"}}>HELLO!</div>
            <h6  style={{display:"none", textAlign:"center", color:"rgb(255, 32, 114)", fontWeight:"700"}}></h6> */}

           {forgot!==true?
           (
               <>
            <div className="sign-in-form">
            <img  src={head} alt=""/>

            <div className="heading" style={{"fontFamily":"FuturaPTBold"}}>{validCred?"Hello!":"OOPS!"}</div>
            {/* <h6  style={{  display:'flex', alignContent:"center", justifyContent:"center", position:"absolute", color:"rgb(255, 32, 114)", fontWeight:"700"}}>
            {!validCred?"Error in credentials!":""}</h6>
                */}
            <div className="signin-inputs">
                <div className="signin-input email-input">
                    <img src={email} alt=""/>
                    <input type="email" name="email" id="email" onChange={updateUser}  placeholder="Email" required="" value={userName}/>
                </div>
                <div className="signin-input password-input"><img src={pass} alt=""/>
                    <input type="password" name="password" id="password" onChange={updatePass}  placeholder="Password" required="" value={password}/>
                </div>

                <div className="LoginButton" onClick={(e)=>checkValues(e)} style={{"cursor":"pointer"}}><div className="LoginButtonText"  >{loading?"Loading...":"Login"}</div></div>
            
            </div>
          <div id="forget-password" onClick={()=>setForgot(true)} style={{"cursor":"pointer","fontFamily":"FuturaPTBold"}}>Forgot Password?</div>
            </div>
         <div className="terms-signin" style={{"cursor":"pointer","fontFamily":"FuturaPTMedium","marginTop":"0px"}}>Terms and conditions / Privacy policy</div>
        </>

            ):
            ( 
                <div className="sign-in-form">
            <img  src={head} alt=""/>
            <div className="heading" style={{"fontFamily":"FuturaPTBold"}}>HELLO!</div>
            <h6  style={{display:"none", textAlign:"center", color:"rgb(255, 32, 114)", fontWeight:"700"}}>6</h6>

            <div className="signin-inputs">
                <div className="signin-input email-input">
                    <img src={email} alt=""/>
                    <input type="email" name="email" id="email" onChange={updateUser}  placeholder="Email" required="" value={userName}/>
                </div>
                <div className="LoginButton" onClick={(e)=>{forgotPassword(e);} } style={{"cursor":"pointer"}}><div className="LoginButtonText"  >{loading?"Loading...":"SEND PASSWORD"}</div></div>
            
            </div>
            </div>


              
            )}
         
            </div>
        </>
    );
}

export default Login;
