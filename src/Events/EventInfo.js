

import './styles/eventInfo.css';

import img_1 from './Media/1st.svg'
import img_2 from './Media/2nd.svg'
import img_3 from './Media/3rd.svg'
import img_4 from './Media/4th.svg'
import img_5 from './Media/5th.svg'
import img_6 from './Media/6th.svg'
import img_7 from './Media/7th.svg'
import img_8 from './Media/8th.svg'
import img_9 from './Media/9th.svg'
import img_10 from './Media/10th.svg'
import img_11 from './Media/11th.svg'
import img_12 from './Media/12th.svg'
import img_13 from './Media/13th.svg'
import img_14 from './Media/14th.svg'
import img_15 from './Media/15th.svg'
import img_16 from './Media/16th.svg'
import img_17 from './Media/17th.svg'
import img_18 from './Media/18th.svg'
import img_19 from './Media/19th.svg'
import img_20 from './Media/20th.svg'
import img_21 from './Media/21th.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';





const EventInfo = (props)=>{

    const [tournament, setTournament] = useState({});

    const getEvent =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI5NzgwMjExLCJleHAiOjE2MzAzODUwMTEsIm5iZiI6MTYyOTc4MDIxMSwianRpIjoidWQ2U09FNktBV2R2UzFUZyIsInN1YiI6MTAwMDA5NTY3LCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTU2NywiZW1haWwiOiJkYW1vbkBnbWFpbC5jb20ifQ.4jHbOIeRzrtwKcvNpCEY42iVFviXbkuhPCmTT0_yitA";
        console.log(props.location.state.id)
        axios({
            method:"get",
            url:`https://fanwins.in/api/getTournament?tournamentId=${props.location.state.id}`,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            console.log(response.data.tournament);
            setTournament(response.data.tournament);
        });    
    }

    useEffect(()=>{
        console.log()
        getEvent();
    },[props])
    


    return (
        <div style={{textAlign:"center"}}>

        <div className="new-event-profile container p-0">
        <div className="row mx-0" style={{marginTop:"142px"}}>
        <div className="col-6 m-auto text-center p-0">
        
        <div className="row main-width" style={{paddingBottom:"150px"}}>
        <div className="col-12">
        <div className="row" style={{color:"rgb(255, 32, 114)"}}>
        <div className="col-12 p-0 mb-2">
        <div className="m-0 col-auto mt-3 p-0">
        <div className="lower-back-button ml-auto" id="yellow-button-hover">
            <span className="lower-back-button-text">
            <label for="file-input-excel">UPLOAD RESULT</label>
            <input id="file-input-excel" type="file" accept=".xlsx" style={{display:"none"}}/>
            </span>
        </div></div></div>
        
        <div className="col-12 text-right p-0">
        <div class="btn-group" style={{float:"right", marginBottom:"15px",paddingBottom:"10px"}}>
  {/* <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> */}
    <img class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  src="https://avp-tournament.herokuapp.com/static/media/icon-menu-hamburger.76a23799.svg" alt="" />
    {/* </button> */}
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>props.history.push({ 
                                            pathname: '/EditEvent',
                                            state: {id:props.location.state.id}
                                            })} >Edit</a></li>

    <li><a class="dropdown-item" style={{color:"red"}}  >Delete</a></li>
  </ul>
</div>


        {/* <a herf="" className="tri_top_hidden" id="score-hamburger">
        <div><img src="/static/media/icon-menu-hamburger.76a23799.svg" alt=""/></div></a> */}
        </div>
        
        <div className="col-4 p-0 text-left">
        <img src="https://fanwins.in/images/tournaments/1614754559-cartoon10.jpg" alt="" className="img-fluid" style=  {{width: "100px", height: "100px", borderRadious: "50px",objectFit: "cover"}}/>
        </div>
        <div className="col-8 m-auto mr-0 p-0">
        <div className="saved-event-name text-left p-0" style={{borderBottom:"1px solid rgb(151, 151, 151)",}}>{tournament.name}</div>
        <div className="saved-event-date-and-time text-left p-0">{tournament.topDateformate}</div>
        </div></div></div>
        
        <div className="col-12 text-left p-0 saved-status">Reg Open<span className="dot" style= {{backgroundColor:"rgb(126, 211, 33)"}}></span></div>
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="container">
        <div className="row">
        <div className="col-10 text-left address-title m-0 p-0">Address</div>
        <div className="col-12 text-left p-0 ">
        <div className="saved-address-data">{tournament.court?tournament.court.court_id:""}</div>
        <div className="saved-address-data">{tournament.court?tournament.court.street_address:""}</div>
        <div className="saved-address-data">{tournament.court?tournament.court.city:""},{ tournament.court?tournament.court.zip:""}</div>
        </div></div></div></div>
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Division</div>

        <div className="container">
        <div className="row shadow-box mt-0" style={{overflow:"hidden"}}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 text-truncate pr-3">Division Tour Div New2</div>
        <div className="col-6 p-0 text-right m-auto box-shadow-text text-truncate" id="division_overflow" style={{display:"inline"}}>

        </div></div></div></div>

        <div className="col-12 p-0 " style={{marginTop:"24px"}}>
        <div className="text-left address-title">Registration</div>

        <div className="shadow-box-saved-screen">

        {/* start */}
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_2} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-1">Registration Cap</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-0 pr-0 text-capitalize">
               {tournament.registration_cap}
        </div>
     


        </div>
        </div>
        {/* end */}

        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_3} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Team Size</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.team_size}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_4} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Closes On</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.closes_on}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_5} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Ends At</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.ends_at}</div>
        </div></div></div></div>
        
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Details</div>

        <div className="shadow-box-saved-screen">
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Pools</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.pool?tournament.pool.name:""}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_7} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Season</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.season?tournament.season.name:""}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_8} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Placement Points</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.point?tournament.point.name:""}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_9} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Seeding Method</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.seeding_method?tournament.seeding_method.name:""}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_10} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Surface Type</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.surface_type}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_11} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Host Clinic</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">{tournament.host_clinic}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Show Entries</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">{tournament.show_entries}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Team Listing</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">{tournament.team_listing}</div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Contact</div>
        <div className="shadow-box-saved-screen">
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Director</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.director?tournament.director.first_name:""},{tournament.director?tournament.director.last_name:""}</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Main Contact</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">{tournament.main_contact?tournament.main_contact.first_name:""} {tournament.director?tournament.main_contact.last_name:""}</div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Finance</div>
        <div className="shadow-box-saved-screen">
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Online Pay</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">no</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Purse Amount</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">$1000</div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen" style={{overflow:"hidden"}}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation Text</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">Not Selected</div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 1</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize"></div>
        </div>
        </div>


        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 2</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize"></div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div><div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 3</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize"></div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Allow Membership</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 ">silver</div>
        </div>
        </div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Documents</div>
        <div className="shadow-box-saved-screen">
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1 ">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Signature Agreement</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">yes</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Score Sheet</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">Tournament Scoresheet</div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">PDF Instructions</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1"></div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Description</div>
        
        <div className="container">
        <div className="row shadow-box-saved-screen mt-0 " style={{height:"172px"}}>
        <div className="col-12 p-0 pr-1 pl-2 pb-1 textarea-style bg-white" style={{height: "172px"}}>
        <textarea className="form-control p-0 textarea-style bg-white" id="exampleFormControlTextarea1" rows="3" maxlength="1000" disabled="" style={{height:"160px",resize:"none"}} value={tournament.description}>{tournament.description}</textarea>
        <div className="text-right description-bottom">16/1000</div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Color Palette</div>
        
        <div className="container">
        <div className="row shadow-box mt-0 align-items-center">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/></div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 input-text">Choose Color</div>
        <div className="col-7">
        <div className="row p-0 m-0">
        <div className="col p-0 m-0">
        <div className="color-box white">

        </div><input type="checkbox" name="" id=""/></div>
        <div className="col p-0 m-0">
        <div className="color-box blue"></div>
        <input type="checkbox" name="" id=""/></div><div className="col p-0 m-0">
        <div className="color-box yellow"></div
        ><input type="checkbox" name="" id=""/></div>
        
        <div className="col p-0 m-0">
        <div className="color-box black">

        </div><input type="checkbox" name="" id=""/>
        </div></div></div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Image</div>
        
        <div className="container">
        <div className="row shadow-box-saved-screen box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/></div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Event Photo Corner</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">image</div></div></div></div>
        </div></div></div></div>

    
        </div>
        
    );
}


export default EventInfo;