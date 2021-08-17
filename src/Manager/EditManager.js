/* eslint-disable no-restricted-globals */
import './newmanager.css'
import './info.css'
import './editManager.css'

import {useEffect,useState} from 'react';
import axios from 'axios';

const EditManager =(props)=>{

    const [editInfo, setInfo] =useState({
        "first":props.location.state.details.first_name,
        "last":props.location.state.details.last_name,
        "location":props.location.state.details.city,
        "phone":props.location.state.details.id,
        "email":props.location.state.details.email_id,
        "id":props.location.state.details.id,
    });

    const [input, setInput]=useState("");
    const [file,setFile] =useState(
        { preview: '', raw: '' }
    )


    const imageChanged = (event) => {
        console.log('Image Objects', URL.createObjectURL(event.target.files[0]));
        setFile({
          preview: URL.createObjectURL(event.target.files[0]),
          raw: event.target.files[0],
        });
      };
    
      useEffect(() => {
        console.log(file);
      }, [file]);
    

    useEffect(()=>{
     
        console.log(editInfo)
    },[input])

    const updateValue = (e)=>{
        console.log(e.target.id, e.target.value)
        setInput(e.target.value);
        var info = editInfo;
        info[e.target.id]= e.target.value;
        console.log(info)
        setInfo(info);
    }


    const postUpdates =()=>{

    if(confirm("Are You Sure?\nYou want to save changes")){

    
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4NjU2NDE2LCJleHAiOjE2MjkyNjEyMTYsIm5iZiI6MTYyODY1NjQxNiwianRpIjoickJ0cU1VOU8yUDhjR0NSbSIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.K4SFNnms19OBamp5W6qsO7CFbcjpWl6DIeOQgW0F5F8";
            console.log(editInfo["first"], editInfo.id)
        const formData = new FormData()
        const data={"first_name":editInfo["first"],
                    "last_name":editInfo["last"],
                    "city":editInfo["location"],
                    "email_id":editInfo["email"],}

        formData.append('data',JSON.stringify(data))
        formData.append('profile_pic',file.raw)
        axios({
            method:"post",
            url:`https://fanwins.in/api/updatePromoterManager/${editInfo.id}`,
            data:formData,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            props.history.push('/');
            console.log(response);
       
        });

    }
    }

    return (
        <div >
    <div class="new-manager-profile container p-0 text-center"  style={{height:"400px",marginTop:"70px"}}>
    <div class="row" style={{marginTop:"10px"}}>
    <div className="col-6 m-auto text-center p-0">

    <div className="row main-width">
    <div className="col-12 text-left">
        <div id="active-profile" >
        <div id="images-and-input-area" style={{"marginTop":"0px"}}>
        <div style={{"height":"100px","width":"100px","borderRadius":"50%","backgroundColor":"rgb(216, 216, 216)","overflow":"visible","display":"inline-block","marginLeft":"0px"}}>
        <img src="https://fanwins.in/images/promoters/123.jpg" alt="" className="m-auto d-block" style={{"objectFit":"cover","width":"100px","height":"100px","borderRadius":"50%"}}/>

        </div>
        <div>
        <div className="input-container">
        <input type="text"  placeholder="FIRST NAME" id="first" onChange={(e)=>updateValue(e)} className="first-and-last-name"  value={editInfo["first"]}/>
        <img src="https://avp-tournament.herokuapp.com/static/media/icons-x-input.5470df21.svg" alt="" style={{"cursor":"pointer"}}/>
        </div>
        <div>
        <input type="text" placeholder="LAST NAME"  id="last" onChange={(e)=>updateValue(e)} className="first-and-last-name" value={editInfo["last"]}/>
        <img src="https://avp-tournament.herokuapp.com/static/media/icons-x-input.5470df21.svg" alt="" style={{"cursor":"pointer"}}/>
        </div>

        </div>

</div>


        <div className="text-center col-12">
            <label for="file-input" style={{ color:"black", fontSize:"10px", float:"left",paddingLeft:"19px"}}>EDIT PHOTO</label>
            <input id="file-input" to="file-input" onChange={(e)=>imageChanged(e)} accept="image/png, image/jpeg" type="file" style={{display:"none"}}/>
        </div>


    <div id="contact">
    <div className="contact-title" style={{paddingLeft:"0px"}} >Contact</div>
    <div className="box">

        <div className="">
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-orange-map.b401d872.svg" alt=""/>
        <div className="first-div col-5">Location</div>
        <div className="last-div ml-auto mr-3">
        <input type="text" className="form-control profile-form p-0" placeholder="Place" id="location"  onChange={(e)=>updateValue(e)} value={editInfo["location"]}/>
        </div>
        </div>


        <div className="" style={{"height":"32px"}}>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-orange-phone.bd8e69b5.svg" alt=""/>
        <div className="first-div col-8" >Phone</div>
        <div className="last-div ml-auto mr-3">
        <input inputmode="numeric" maxLength="10"  placeholder="Phone no." 
        className="form-control p-0 ml-2 usa-number-format text-right" 
        name="leagueCost" type="text"  id="phone" 
        onChange={(e)=>updateValue(e)}  value={editInfo["phone"]} 
        style={{"height":"inherit",textAlign:"center",width:"80px", "fontSize":"14px","outline":"none","border":"0px","boxShadow":"0px 0px 0px 0px","fontFamily":"FuturaMedium","fontWeight":"500"}}/>
        </div>
        </div>

        <div className="" style={{"height":"32px"}}>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-orange-mail.46caefc0.svg" alt=""/>
        <div className="first-div col-2">Email</div>
        <div className="last-div email_div ml-auto mr-3">
        <input   type="text" className="form-control profile-form p-0" placeholder="email id" 
                 onChange={(e)=>updateValue(e)}  id="email" value={editInfo["email"]}/>
        </div>
        </div>


    </div>

    <div>
    <button type="button" onClick={()=>postUpdates()}  class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right",marginTop:"10px", margin:"1px"}}>Save</button>
    <button type="button" onClick={()=>confirm("Are You sure?\n")?props.history.push('/'):""}  class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right",marginTop:"10px",margin:"1px", backgroundColor:"white"}}>Cancel</button>

    </div>

    </div>


    </div>

    </div>

    </div>

    </div>


    </div>
    </div>


    {/* <button type="button" onClick={()=>console.log("Cancel")} class="btn btn-warning">Cancel</button> */}
            {/* <button onClick={()=>postUpdates()}>Save</button>
            <button onClick={()=>console.log("Cancel")}>Cancel</button> */}



        </div>




    );


}

export default EditManager; 