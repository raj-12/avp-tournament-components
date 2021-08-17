/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */

import './info.css'
import location from './location.svg'
import phone from './phone.svg'
import email from './email.svg'
import goBack from './goBack.jpg'
import axios from 'axios'
import { useState } from 'react'
const Infos =(props)=>{

    // const [id,setId] = useState("");

    // useEffect(()=>{

    // },{props.location.state.details.id)

    const deleteProfile =()=>{
       if(confirm("Are you sure?\nYou want to delete manager")){

        console.log(props.location.state.details.id)
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4NjU2NDE2LCJleHAiOjE2MjkyNjEyMTYsIm5iZiI6MTYyODY1NjQxNiwianRpIjoickJ0cU1VOU8yUDhjR0NSbSIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.K4SFNnms19OBamp5W6qsO7CFbcjpWl6DIeOQgW0F5F8";
        const formData = new FormData()
        const data ={"status":"0"};
        formData.append('data',JSON.stringify(data))
        axios({
            method:"post",
            url:`https://fanwins.in/api/PromoterManagerStatus/${props.location.state.details.id}`,
            data:formData,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            props.history.push('/');
            console.log(response);
    
        });
    }
    else{
        console.log("NO");
    }
    }

    return (
    <div style={{height:"100vh"}}>
    <div onClick={()=>props.history.goBack()}><img alt="" src={goBack} style={{height:"35px", width:"40px"}}></img></div>
  
    <div  className="text-center justify-content d-flex" >
     <div className="manager-profile container p-0">
    <div className="row" style={{marginTop:"10px"}}>
    <div className="col-6 m-auto text-center p-0">
    <div className="row main-width">
    <div className="col-12 text-left">
    <div id="active-profile" style={{"marginBottom":"195px","marginTop":"80px"}}>
    <div tabindex="1" id="points-hamburger" className="tri_top_hidden" style={{outline:"0px"}} >
    <div>
    
    <div class="btn-group" style={{float:"right", marginBottom:"15px",paddingBottom:"10px"}}>
  {/* <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> */}
    <img class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  src="https://avp-tournament.herokuapp.com/static/media/icon-menu-hamburger.76a23799.svg" alt="" />
    {/* </button> */}
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" onClick={()=> {props.history.push(  { 
                                            pathname: '/editmanager',
                                            state: {details:props.location.state.details}
                                            }); } }>Edit</a></li>

    <li><a class="dropdown-item" style={{color:"red"}} 
    onClick={()=> {deleteProfile()} } >Delete</a></li>
  </ul>
</div>



    </div>
    
    
    </div>

    <div id="images-and-input-area" style={{"marginTop":"0px"}}>
    <div style={{"height":"100px","width":"100px","borderRadius":"50%","backgroundColor":"rgb(216, 216, 216)","overflow":"visible","display":"inline-block","marginLeft":"0px"}}>
    <img className="manager_profile_image" src={"https://fanwins.in/" +props.location.state.details.profile_pic} alt=""/>
    </div>
    <div>
    <div className="input-container">
    <div className="first-and-last-name" style={{"color":"rgb(74, 74, 74)"}}>{props.location.state.details.first_name}</div>
    </div>
    
    
    <div><div className="first-and-last-name" style={{"color":"rgb(74, 74, 74)"}}>{props.location.state.details.last_name}</div>
    </div></div></div>
    <div id="contact">
    <div className="contact-title">Contact</div>
    <div className="shadow-box"><div>
    <img src={location} alt=""/>
    <div className="first-div">Location</div>
    <div className="last-div ml-auto mr-3">
    <div className="form-control profile-form p-0">{props.location.state.details.city}</div></div></div><div>
    <img src={phone} alt=""/>
    <div className="first-div">Phone</div>
    <div className="last-div ml-auto mr-3"><div className="form-control profile-form p-0">  01</div>
    </div></div><div>
    <img src={email} alt=""/>
    <div className="first-div">Email</div><div className="last-div ml-auto mr-3">
    <div className="form-control profile-form p-0">{props.location.state.details.email_id}</div>
    </div>
    </div>
    </div></div>
    </div></div></div>
    </div></div>
    </div>
       
</div>

</div>);
}

export default Infos;

