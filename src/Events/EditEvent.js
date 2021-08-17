
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
import DatePicker from "react-datepicker";


import './styles/eventInfo.css';
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import Select from 'react-select';

const EditEvent= (props)=>{
 
    const objects= {
        "pool":["4 pools of 5 on 4 courts","HCTM pool division","KKR pool 12",'AICTE','64Team','test 32 teams','asdfg',
        'asdfghjkl',
        'asdfghjklo',
        'azxsdcvfgb',
        'qaswedfrtg',
        'rgreghghjfgc',
        'erewertgerrty',
        'gfgdfgdfsgdgd',
        ],
        "point":["AVP Pro",
            "AVPNext Gold",
            "AVPNext",
           " AVPA-Open",
            "AVPA-A",
            "AVPA-AA",
            "AVPA-B",
            "AVPA-BB",
            "4 Star 18U",
            "4 Star 16U",
            "4 Star 14U",
            "4 Star 12U",
            ],
        "season":["Tournament Season", "Winter Volley","NewOne Volley","Player Volley","Friends Volley"],
        "seeding_method":["Tournament Seeding","Seeding Method 1","Seeding Method 2","Seeding Method 3","Seeding Method 4","Seeding Method 5"],
        "scoresheet" : ["Tournament Scoresheet","Winter Volley","NewOne Volley","Player Volley","Friends Volley"],
        "court":[],
        "yesorno":["yes","no"],
        "surface_type":["Sand","Grass","Other"],
        "team_listing":["Registration","Point Wise"],

    }
    const [value, onChange] = useState('10:00');
    
    const [changedValues, setValues]=useState({
        "name": "Delhi event 1",
        "description": "new event  .....",
        "registration_cap":"yes",
        "season_id":2,
        "seeding_method":2,
        "host_clinic":"yes",
        "show_entries":"yes",
        "online_pay":"yes",
        "purse_amount":"5000",
        "signature":"yes",
        "score_sheet_id":"1",
        "surface_type":"1",
        "pool_id":2,
        "creator_id":12,
        "court_id":453,
        "start_date":"2020-10-01",
        "end_date":"2020-10-03",
        "start_time":"08:00:00",
        "end_time":"19:00:00",
        "team_size":16,
        "closes_on":"2020-09-29",
        "ends_at":"19:00:00",
    });
    const [tournament, setTournament] = useState({
        "id": 4196,
        "name": "Delhi event 1",
        "description": "new event  .....",
        "tournament_pic": "/images/tournaments/1614754559-cartoon10.jpg",
        "cover_photo": "/images/tournaments/1614754559-images6.jpg",
        "color": null,
        "team_size": 5,
        "team_listing": 1,
        "surface_type": "Grass",
        "membership": "silver",
        "host_clinic": "yes",
        "show_entries": "yes",
        "online_pay": "no",
        "purse_amount": 1000,
        "donation_amounts": "null,null,null",
        "donation_text": null,
        "signature": "yes",
        "tournament_doc": "",
        "registration_cap": "yes",
        "main_contact": {
            "id": 25,
            "first_name": "testUser13",
            "last_name": "userLN",
            "profile_pic": "images/promoters/_20190304_100156.jpg"
        },
        "status": 2,
        "sets": 3,
        "match_time": 60,
        "max_point_per_set": 21,
        "no_of_playoff": 1,
        "playoff_team1": null,
        "playoff_team2": null,
        "playoff_team3": null,
        "playoff_team4": null,
        "start_date": null,
        "end_date": null,
        "closes_on": null,
        "start_time": "4AM",
        "end_time": "8AM",
        "ends_at": "4:00 AM",
        "topDateformate": "AUG 18TH - AUG 19TH @ 4AM",
        "creator": {
            "id": 551,
            "first_name": "Ankit",
            "last_name": "rai",
            "profile_pic": null
        },
        "pool": {
            "id": 2,
            "name": "4 pools of 5 on 4 courts"
        },
        "point": {
            "id": 7,
            "name": "AVPA-B"
        },
        "season": {
            "id": 3,
            "name": "Friends Volley"
        },
        "seeding_method": {
            "id": 2,
            "name": "Seeding Method 1"
        },
        "scoresheet": {
            "id": 1,
            "name": "Tournament Scoresheet"
        },
        "director": {
            "id": 29,
            "first_name": "testUser14",
            "last_name": "userLN",
            "profile_pic": "images/promoters/_20190304_100156.jpg"
        },
        "court": {
            "court_id": 471,
            "court_name": "Juanita Beach",
            "street_address": "Kirkland",
            "number_of_court": 2,
            "city": "Kirkland",
            "state_code": "WA",
            "country": "US",
            "zip": "98034",
            "permanent_flag": 1
        },
        "templateDtl": [
            {
                "templateName": "Tour Div New2",
                "template_id": 2,
                "division": []
            }
        ]
    });

    const [input, setInput] = useState('');
    const [selectedDate, setDate] = useState(1);

    const getEvent =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4ODI4MDc0LCJleHAiOjE2Mjk0MzI4NzQsIm5iZiI6MTYyODgyODA3NCwianRpIjoiVnprdE5MVWNINWhmOFZkMyIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.pLPx8v7FN_PzMT-Q9TdiUjUDiRqncDPOjQ0ewvJAUhM";
    
        axios({
            method:"get",
            url:`https://fanwins.in/api/getTournament?tournamentId=${4988}`,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{

            var event = response.data.tournament;

            var parts =event.start_date.split('/');
            var parts1 = event.end_date.split('/');
            var parts2 = event.end_date.split('/');
            var mydate1 = new Date(parts[0], parts[1] - 1, parts[2]); 
            event.start_date=mydate1;
            var mydate2 = new Date(parts1[0], parts1[1] - 1, parts1[2]); 
            event.end_date=mydate2;
            var mydate3 = new Date(parts2[0], parts2[1] - 1, parts2[2]); 
            event.closes_on=mydate3;

            console.log(event)
            setTournament(event)
        });    
    }
    function formatDate(d) {
        // var d = new Date(date),
           var month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    const eventUpdated =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4ODI4MDc0LCJleHAiOjE2Mjk0MzI4NzQsIm5iZiI6MTYyODgyODA3NCwianRpIjoiVnprdE5MVWNINWhmOFZkMyIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.pLPx8v7FN_PzMT-Q9TdiUjUDiRqncDPOjQ0ewvJAUhM";
        console.log(changedValues)
        const data = changedValues;
        data.name = tournament.name;
        data.description = tournament.description;
        data.donation_text = tournament.donation_text;
        data.registration_cap = tournament.registration_cap;
        data.purse_amount = tournament.purse_amount;
        data.pool_id = tournament.pool.id;
        data.point_id = tournament.point.id;
        data.season_id = tournament.season.id;
        data.seeding_method = tournament.seeding_method.id;
        data.signature = tournament.signature;
        console.log(data)

        // dates
        data.ends_date = formatDate(tournament.end_date);
        data.closes_on = formatDate(tournament.closes_on);
        data.start_date = formatDate(tournament.start_date);

        // console.log(data)
        const formData = new FormData()
        formData.append('data',JSON.stringify(data))
        // formData.append('data',{})

        axios({
            method:"post",
            url:`https://fanwins.in/api/updateTournament/${4988}`,
            data:formData,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{

           props.history.push('/')
           console.log("Success ");
        });    
    }
        useEffect(()=>{
            console.log("Hellos")
            getEvent();
           console.log(new Date("11/08/21 8:30 AM"))
        },[props.id])
        
        useEffect(()=>{
            console.log(input + "input");

        },[input])

    const updateValue = (e)=>{
        console.log(e.target.id, e.target.value)
        setInput(e.target.value);
        var info = tournament;
        info[e.target.id]= e.target.value;
       setTournament(info);
    }

    const start_dates = (date)=>{
        setInput(date);
        var info = tournament;
        info["start_date"]=date;
        setTournament(info);
    }
    const end_dates = (date)=>{
        setInput(date);
        var info = tournament;
        info["end_date"]=date;
        setTournament(info);
    }
    const close_dates = (date)=>{
        setInput(date);
        var info = tournament;
        info["closes_on"]=date;
        setTournament(info);
    }

    const UpdateNameId = (e)=>{
        console.log(e.target.id, e.target.value)
        setInput(e.target.value);
        var info = tournament;

        var index = objects[e.target.id].findIndex((element)=>element==e.target.value)
        info[e.target.id]['id']= index;
        console.log(info)
        setTournament(info);
    }


    return (
        <div >
        {console.log("In return")}
        <div className="new-event-profile container p-0">
        <div className="row mx-0" style={{marginTop:"142px"}}>
        <div className="col-6 m-auto text-center p-0">
        
        <div className="row main-width" style={{paddingBottom:"80px"}}>
        <div className="col-12">
        <div className="row" style={{color:"rgb(255, 32, 114)"}}>
       
        
        <div className="col-12 text-right p-0">
       

        {/* <a herf="" className="tri_top_hidden" id="score-hamburger">
        <div><img src="/static/media/icon-menu-hamburger.76a23799.svg" alt=""/></div></a> */}
        </div>
        <div className="col-4 p-0 text-left">
        <img src="https://fanwins.in/images/tournaments/1614754559-cartoon10.jpg" alt="" className="img-fluid" style=  {{width: "100px", height: "100px", borderRadious: "50px",objectFit: "cover"}}/>
        </div>
        <div className="col-8 m-auto mr-0 p-0">
        <div className="saved-event-name text-left p-0" style={{borderBottom:"1px solid rgb(151, 151, 151)",}}><input id="name" onChange={(e)=>updateValue(e)} value={tournament.name} style={{ textAlign:"center",outline:"none",border:"white 2px solid" ,weight:"700"}}></input></div>
        </div></div></div>
        
        <div class="col-12 p-0" style={{marginTop:"24px"}} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
        <div class="container" style={{padding:"0px"}}> 
        <div class="row">
        <div class="d-flex flex-column">

        </div>
        <div class="col-12 address-title text-left" style={{float:"left", textAlign:"left"}}>Address</div>


        <div class="col-6 text-right " style={{textAlign:"right"}}>
        <div className="btn-group" >
                <img className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  src="https://avp-tournament.herokuapp.com/static/media/icon-menu-hamburger.76a23799.svg" alt="" />
            <ul className="dropdown-menu">
                <li><a className="dropdown-item">Edit</a></li>
                <li><a className="dropdown-item" style={{color:"red"}}  >Delete</a></li>
            </ul>
            </div>
        </div>
        </div></div>
        <input type="text" class="form-control address-full" placeholder={tournament.court.court_name} value={tournament.court.court_name}/>
        <input type="text" class="form-control address-full" placeholder={tournament.court.street_address} value={tournament.court.street_address}/>
        <div class="container">
        <div class="row">
        <div class="col-2 p-0 ">
        <label class="Country_label" >Country</label>
        </div>
        <div class="col-3 pl-1 pr-1" >
        <div class="form-control address-full d-flex align-items-center justify-content-between" >
        {tournament.court.country}
        <a href="#/" id="points-hamburger" class="tri_top_hidden">
        <div>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-chevron-down.d37aeda2.svg" alt="" class="ml-2" style={{width:"16px",height:"16px",marginTop:"5px"}} />
        </div></a>
        </div>
        
        </div>


        <div class="col-4 p-0 pr-1"  >
        <input type="text" placeholder={tournament.court.zip} class="form-control address-full" value={tournament.court.zip}/>
        </div>
        <div class="col-3 p-0">
        <input type="number" placeholder="40" class="form-control address-full webkit_spinner_none" min="1" value="40"/>
        </div></div></div>
        <div class="d-flex flex-column">
        <div class="text-left mt-2">
        <label class="DAS1checkbox DMensLabel m-0" for="AgeRangeInput2">
        <input class="form-control" id="AgeRangeInput1" name="isGoing2" type="checkbox" value="open" checked=""/>
        <span class="DAS1checkmark"></span>
        <span class="DAS1label " style={{color:'rgb(155, 155, 155)',fontSize:"10px"}} >Temporary Courts</span>
        </label></div>
        <div class="text-left mt-2">
        <label class="DAS1checkbox DMensLabel m-0" for="AgeRangeInput">
        <input class="form-control m-0" id="AgeRangeInput1" name="isGoing" type="checkbox" value="open"/>
        <span class="DAS1checkmark">

        </span><span class="DAS1label ">Save to List</span>
        </label></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Division</div>

        <div className="container">
        <div className="row shadow-box mt-0" style={{overflow:"hidden"}}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 text-truncate pr-3">Division Tour Div New2</div>
        <div className="col-6 p-0 text-right m-auto box-shadow-text text-truncate" id="division_overflow" style={{display:"inline"}}>

        </div></div></div>
        </div>
        

        {/* start */}
        <div className="col-12 p-0 " style={{marginTop:"24px"}}>
        <div className="text-left address-title">Date</div>

        <div className="col-12  shadow-box-saved-screen">
      
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_4} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Start</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <div style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
            <DatePicker
            id="start_date"
            selected={tournament.start_date}
            onChange={date=>start_dates(date)} //only when value has changed
            />
        </div></div>
        </div>
        </div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_4} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Ends</div>
        <div className="col-7 text-left m-auto saved-shadow-data" style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
            <div>
            <DatePicker 
            selected={tournament.end_date}
            style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} 
            onChange={date=>end_dates(date)} //only when value has changed
            />
            </div>
        </div>
        </div>
        </div>
        
        </div>
        </div>
       
        {/* end */}


        {/* start */}
        <div className="col-12 p-0 " style={{marginTop:"24px"}}>
        <div className="text-left address-title">Registration</div>

        <div className="shadow-box-saved-screen">

        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_2} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-1">Registration Cap</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-0 pr-0 text-capitalize">

        {/* <div class="col-12 p-0 text-right m-auto pr-2">
        Yes
        <a href="#/" id="score-hamburger" class="tri_top_event_hidden">
        <div>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-chevron-down.d37aeda2.svg" alt=""/>
        </div></a>
        </div> */}

            <select id="registration_cap" value={tournament.registration_cap} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="yes">Yes</option>
                <option value="no">No</option>

            </select>
        </div>
    
        </div>
        </div>
        {/* end */}

       
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_4} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Closing on</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <div  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
            <DatePicker
                startDate={tournament.start_date}
                endDate={tournament.end_date}
                selected={tournament.closes_on}
                onChange={date=>close_dates(date)} 
            />
        </div></div>
        </div>
        </div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_5} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Ends At</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
            <div style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <TimePicker
                onChange={onChange}
                value={value}
                />
            </div>
        
        </div>
        </div></div>
        
        </div>
        </div>
        {/* end */}
        
    
        
        
        {/* start */}
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Details</div>
       
        <div className="shadow-box-saved-screen">

        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Pools</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option>Yes</option>
                <option>No</option>

            </select>
        
        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_7} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Season</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="season" onChange={e=>UpdateNameId(e)} value={objects.season[tournament.season.id]}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.season.map(value=>{
              return( <option value={value}>{value}</option>);
          })} 
                
        </select>
        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_8} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Placement Points</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="point" onChange={e=>UpdateNameId(e)} value={objects.point[tournament.point.id]}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.point.map(value=>{
              return( <option value={value}>{value}</option>);
          })} 
                
        </select>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_9} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Seeding Method</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="seeding_method" onChange={e=>UpdateNameId(e)} value={objects.seeding_method[tournament.seeding_method.id]}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.seeding_method.map(value=>{
              return( <option value={value}>{value}</option>);
          })} 
                
        </select>

        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_10} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Surface Type</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="surface_type" onChange={e=>updateValue(e)} value={tournament.surface_type}  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
            {objects.surface_type.map(value=>{
                return( <option value={value}>{value}</option>);
            })} 
            </select>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_11} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Host Clinic</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <select id="host_clinic" value={tournament.host_clinic} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option value="yes">Yes</option>
                <option value="no">No</option>

            </select>
        
        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Show Entries</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <select id="show_entries" value={tournament.show_entries} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option value="yes">Yes</option>
                <option value="no">No</option>

        </select>
        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Team Listing</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <select id="team_listing" onChange={e=>updateValue(e)} value={tournament.team_listing}  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
            {objects.team_listing.map(value=>{
                return( <option value={value}>{value}</option>);
            })} 
            </select>
        </div>
        </div></div></div>
        
        </div>
         {/* end */}


        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Contact</div>
        <div className="shadow-box-saved-screen">
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Director</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="director.first_name" value={tournament.director.first_name} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option value="Test Name">TestName</option>
                <option value="Hellos">Hells</option>

        </select>
        
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Main Contact</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">testUser13 userLN</div>
        </div></div></div></div>
        {/* start */}
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Finance</div>
        <div className="shadow-box-saved-screen">
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Online Pay</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <select style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option>Yes</option>
                <option>No</option>

            </select>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Purse Amount</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <input inputmode="numeric" pattern="[0-9]*" placeholder="$" id="purse_amount" onChange={(e)=>updateValue(e)} value={tournament.purse_amount} class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen" style={{overflow:"hidden"}}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation Text</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" value={tournament.donation_text} id="donation_text" onClick={(e)=>updateValue(e)}  placeholder="Enter Donation Text" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>
        </div>
        </div></div>
        
        {/* <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 1</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" pattern="[0-9]*"  value={tournament.donation_amounts.split(',')[0]} placeholder="$" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>
        </div>
        </div>
        </div>


        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 2</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" pattern="[0-9]*" value={tournament.donation_amounts.split(',')[1]} placeholder="$" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div> */}
        
        {/* <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div><div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 3</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" pattern="[0-9]*" placeholder="$" value={tournament.donation_amounts.split(',')[2]} class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div> */}
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Allow Membership</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 ">silver</div>
        </div>
        </div></div></div>
        
        {/* end */}
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Documents</div>
        <div className="shadow-box-saved-screen">
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1 ">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Signature Agreement</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <select style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option>Yes</option>
                <option>No</option>

            </select>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Score Sheet</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="scoresheet" value={objects.scoresheet[tournament.scoresheet.id]} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
        {objects.scoresheet.map(value=>{
                return( <option value={value}>{value}</option>);
            })} 
        </select>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">PDF Instructions</div>
        <div className="col-7 text-right m-auto pdf-upload pr-1"   style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}>
        <label for="file-input-pdf"><img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-upload.6c121dfa.svg" alt=""/></label>
        <input  id="file-input-pdf"  type="file"/>

        </div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Description</div>
        
        <div className="container">
        <div className="row shadow-box-saved-screen mt-0 " style={{height:"172px"}}>
        <div className="col-12 p-0 pr-1 pl-2 pb-1 textarea-style bg-white" style={{height: "172px"}}>
        <textarea className="form-control p-0 textarea-style bg-white" id="exampleFormControlTextarea1" rows="3" maxlength="1000" disabled="" style={{height:"160px",resize:"none"}} id="description" value={tournament.description}  onChange={(e)=>updateValue(e)}>new event  .....</textarea>
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
        <div className="col-7 text-right m-auto pdf-upload pr-1"   style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}>
        <label for="file-input-pdf"><img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-upload.6c121dfa.svg" alt=""/></label>
        <input  id="file-input-pdf"  type="file"/>

        </div>
       
       </div></div></div>
        
        </div>

        <div>
            <button type="button" onClick={()=>eventUpdated()} class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right", margin:"1px",marginTop:"10px",marginBottom:"20px",}}>Save</button>
            <button type="button"   class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right",margin:"1px",marginTop:"10px",marginBottom:"20px", backgroundColor:"white"}}>Cancel</button>

        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
}


export default EditEvent;