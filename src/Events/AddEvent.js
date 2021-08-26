
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

const AddEvent= (props)=>{
 
    const objects= {
        "pool_template_id":["4 pools of 5 on 4 courts","HCTM pool division","KKR pool 12",'AICTE','64Team','test 32 teams','asdfg',
                'asdfghjkl','asdfghjklo','azxsdcvfgb','qaswedfrtg','rgreghghjfgc','erewertgerrty','gfgdfgdfsgdgd',
                ],
        "point_template_id":["AVP Pro","AVPNext Gold","AVPNext"," AVPA-Open","AVPA-A","AVPA-AA","AVPA-B","AVPA-BB",
                "4 Star 18U","4 Star 16U","4 Star 14U","4 Star 12U",],
        "season_id":["Tournament Season", "Winter Volley","NewOne Volley","Player Volley","Friends Volley"],
        "seeding_method_id":["Tournament Seeding","Seeding Method 1","Seeding Method 2","Seeding Method 3","Seeding Method 4","Seeding Method 5"],
        "scoresheet_id" : ["Tournament Scoresheet","Winter Volley","NewOne Volley","Player Volley","Friends Volley"],
        "court":[],
        "yesorno":["yes","no"],
        "surface_type":["Sand","Grass","Other"],
        "team_listing":["Registration","Point Wise"],
    }
 
    const [changedValues, setValues]=useState({
            "name":"",
            "court_id":493,
            "start_date":null,
            "end_date":null,
            "start_time":"00:00:00",
            "end_time":"13:00:00",
            "registration_cap":"yes",
            "team_size":"4",
            "closes_on":null,
            "ends_at":"00:00:00",
            "pool_id":14,
            "season_id":2,
            "seeding_method_id":2,
            "host_clinic":"yes",
            "show_entries":"yes",
            "director_id":"16"
            ,"main_contact":"19",
            "online_pay":"no",
            "membership":"gold",
            "team_listing":1,
            "purse_amount":"8",
            "signature":"yes",
            "org_id":798,
            "description":"hello jasdhaefewf",
            "pool_template_id":14,
            "point_template_id":1,
            "surface_type":0,
            "sets":3,"match_time":60,
            "max_point_per_set":21,
            "no_of_playoff":"2",
            "playoff_team1":4,
            "playoff_team2":"","playoff_team3":"",
            "playoff_team4":"","template_id":"",
            "age_bracket":"","div_name":"",
            "early_bird_amount":"","late_amount":"",
            "registration_amount":"",
            "age_range":[],"gender":[],"skill_level":[],
            "discount_applied":1,
            "discount_voucher":1,"format":"",
            "save_as_template":"","early_bird":"Yes",
            "early_bird_date":"2021-08-25",
            "donation_text":"534534",
            "donation_amounts":"54,4,3",
            "discount_amount":"","discount_text":"",
            "division":[],
            "template":[{"template_id":1}],
            "template_id":""
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
    
    const [courtList,setCourts] = useState([{"court_name":"hello"}]);
    const [courtId, setCourtId] = useState(0);

    const [division, setDivision] = useState([]);
    const [managers, setManagers] = useState([]);

    const [pdfValue, setPdfValue] = useState({ preview: '', raw: '',name:"" });
    const [coverPhoto, setCoverPhoto] = useState({ preview: '', raw: '',name:"" });
    const [tournamentPhoto, setTourPhoto] = useState({ preview: '', raw: '',name:"" });
    
    const [startTime, setStartTime] = useState('00:00:00');
    const [endTime, setEndTime] = useState('00:00:00');
    const [endsAt, setEndsAt] = useState('00:00:00');
   
    const onCoverChange = (event) => {
        setInput(event.target.files[0].name);
        console.log(event.target.files[0].name)
        console.log("cover Photo")
        setCoverPhoto({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0],
            name:event.target.files[0].name,
        });
    };
    const tourChange = (event) => {
         setInput(event.target.files[0].name);
         console.log("tour Photo")
       setTourPhoto({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0],
            name:event.target.files[0].name,
        });
    };
     const pdfChange = (event) => {
          console.log("pdf Photo")
            setInput(event.target.files[0].name);
        setPdfValue({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0],
            name:event.target.files[0].name,
        });
    };




    const getCourts =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI5NzgwMjExLCJleHAiOjE2MzAzODUwMTEsIm5iZiI6MTYyOTc4MDIxMSwianRpIjoidWQ2U09FNktBV2R2UzFUZyIsInN1YiI6MTAwMDA5NTY3LCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTU2NywiZW1haWwiOiJkYW1vbkBnbWFpbC5jb20ifQ.4jHbOIeRzrtwKcvNpCEY42iVFviXbkuhPCmTT0_yitA";
        const formData = new FormData()
        formData.append('zip',JSON.stringify(''))
        axios({
            method:"get",
            url:`https://fanwins.in/api/getCourts?zip=`,
            data:formData,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            console.log(response.data.courtList);
            setCourts(response.data.courtList);
        });    
    }
    const getDropDowns =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI5NzgwMjExLCJleHAiOjE2MzAzODUwMTEsIm5iZiI6MTYyOTc4MDIxMSwianRpIjoidWQ2U09FNktBV2R2UzFUZyIsInN1YiI6MTAwMDA5NTY3LCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTU2NywiZW1haWwiOiJkYW1vbkBnbWFpbC5jb20ifQ.4jHbOIeRzrtwKcvNpCEY42iVFviXbkuhPCmTT0_yitA";
    
        axios({
            method:"get",
            url:`https://fanwins.in/api/eventDropDowns`,
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{

            console.log(response.data)
            setDivision(response.data.divisionTemplates)
            setManagers(response.data.managers);
        });    
    }
   function formatDate (d) {
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

  

  
  

   const addEvent =()=>{
            const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI5ODY5Njc2LCJleHAiOjE2MzA0NzQ0NzYsIm5iZiI6MTYyOTg2OTY3NiwianRpIjoiS1QxbXZmOGVVSGRBSzZ6TSIsInN1YiI6MTAwMDA5NTY3LCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTU2NywiZW1haWwiOiJkYW1vbkBnbWFpbC5jb20ifQ.PUHlQ1gzj9NOG-nWaq4Wr7mdLff7uXBsPBUQ4SgkCN8";
        
            const data = changedValues;
            // dates
            data.end_date = formatDate(data.end_date);
            data.closes_on = formatDate(data.closes_on);
            data.start_date = formatDate(data.start_date);
            data.start_time = startTime.toString()+":00";
            data.end_time= endTime.toString()+":00";
            data.ends_at = endsAt.toString()+":00";


            console.log(data)
            const formData = new FormData()
            formData.append('data',JSON.stringify(data))
            formData.append('tournament_pic',tournamentPhoto.raw)    
            formData.append('cover_photo',coverPhoto.raw)    
            formData.append('tournament_doc',pdfValue.raw)
            
            console.log(formData)
            axios({
                method:"post",
                url:`https://fanwins.in/api/createTournament`,
                data:formData,
                headers:{
                    "Authorization":"Bearer " + token,
                    "Content-type":"multipart/form-data"
                }
            }).then(response=>{

            props.history.push('/')
            console.log("Success ");
            });    
    }
    useEffect(()=>{
        getDropDowns();
        getCourts();
 
    },[props])

  

    //for redering on all changes
    useEffect(()=>{
        console.log(tournamentPhoto.preview)
        console.log(input + "input" +startTime);
    },[input,startTime])


   //All value updates
    const updateValue = (e)=>{
        console.log(e.target.id, e.target.value)
        setInput(e.target.value);
        var info = changedValues;
        info[e.target.id]= e.target.value;
       setValues(info);
    }
    const UpdateNameId = (e)=>{
        console.log(e.target.id, e.target.value)
        setInput(e.target.value);

        var info = changedValues;
        var index = objects[e.target.id].findIndex((element)=>element==e.target.value)
        info[e.target.id]= index;
        console.log(info)
        setValues(info);
    }

   //dates
    const start_dates = (date)=>{
        setInput(date);
        var info = changedValues;
        info["start_date"]=date;
        setValues(info);
    }
    const end_dates = (date)=>{
        setInput(date);
        var info = changedValues;
        info["end_date"]=date;
        setTournament(info);
    }
    const close_dates = (date)=>{
        setInput(date);
        var info = changedValues;
        info["closes_on"]=date;
        setValues(info);
    }

    const donationsValue = (e)=>{
       console.log(e.target.id, e.target.value)
        setInput(e.target.value);
        var info = changedValues;
        var s = info["donation_amounts"].split(',');

        if(e.target.id ==='don1')
            s[0]=e.target.value;
           
        if(e.target.id ==='don2')
            s[1]=e.target.value;

        if(e.target.id ==='don3')
            s[2]=e.target.value;

        var t=s.join(',');
        console.log(s,t);
        info["donation_amounts"] = t;
        setValues(info);

    }
    //courts
    const changeCourt = (e)=>{
        var indexs;
        var found =  courtList.find((element,index)=>{ indexs =index;
                                       return element.court_id==e.target.value});
        found!==undefined?setCourtId(indexs):setCourtId(courtId);
    }
    useEffect(()=>{
        console.log("Court changed" + courtId)
    },[courtId])

    


    return (
        <div >
       
        <div className="new-event-profile container p-0">
        <div className="row mx-0" style={{marginTop:"142px"}}>
        <div className="col-6 m-auto text-center p-0">
        
        <div className="row main-width" style={{paddingBottom:"80px"}}>
        <div className="col-12">
        <div className="row" style={{color:"rgb(255, 32, 114)"}}>
       
        
        <div className="col-12 text-right p-0">
       

        </div>
        <div className="col-4 p-0 text-left">
         <div className="text-center col-12">
                 <img src="https://fanwins.in/images/tournaments/1614754559-cartoon10.jpg" alt="" style={{width: "100px", height: "100px", borderRadious: "50px",}}/>
            <label for="file-input" style={{ color:"black", fontSize:"10px",paddingLeft:"19px"}}>EDIT PHOTO</label>
            <input id="file-input" to="file-input" onChange={(e)=>tourChange(e)} accept="image/png, image/jpeg" type="file" style={{display:"none"}}/>
        </div>
        </div>
        <div className="col-8 m-auto mr-0 p-0">
        <div className="saved-event-name text-left p-0" style={{borderBottom:"1px solid rgb(151, 151, 151)",}}>
            <input id="name" onChange={(e)=>updateValue(e)} value={changedValues.name} style={{ textAlign:"center",outline:"none",border:"white 2px solid" ,weight:"700"}} placeholder="Event Name"></input></div>
        </div>
        </div>
        </div>
        
        <div class="col-12 p-0" style={{marginTop:"24px"}} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
        <div class="container" style={{padding:"0px"}}> 
        <div class="row">
        <div class="d-flex flex-column">

        </div>
        <div class="col-12 address-title text-left" style={{float:"left", textAlign:"left"}}>Address</div>
        <div>
            <select onChange={e=>changeCourt(e)}>
            {courtList.map(value =>{
                 return ( <option value ={value.court_id}>{value.court_name}</option>);
             })}
            </select>
        </div>

        </div></div>

        <input type="text" class="form-control address-full" placeholder={"court name"} value={courtList[courtId]!==undefined?courtList[courtId].court_name:""}/>
        <input type="text" class="form-control address-full" placeholder={"street address"} value={courtList[courtId]!==undefined?courtList[courtId].street_address:""}/>
        <div class="container">
        <div class="row">
        <div class="col-2 p-0 ">
        <label class="Country_label" >Country</label>
        </div>
        <div class="col-3 pl-1 pr-1" >
        <div class="form-control address-full d-flex align-items-center justify-content-between" >
        {courtList[courtId]!==undefined?courtList[courtId].country:""}
        <a href="#/" id="points-hamburger" class="tri_top_hidden">
        <div>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-chevron-down.d37aeda2.svg" alt="" class="ml-2" style={{width:"16px",height:"16px",marginTop:"5px"}} />
        </div></a>
        </div>
        
        </div>
        <div class="col-4 p-0 pr-1"  >
        <input type="text" placeholder={"zip"} class="form-control address-full" value={courtList[courtId]!==undefined?courtList[courtId].zip:""}/>
        </div>
        <div class="col-3 p-0">
        <input type="number" placeholder="number" class="form-control address-full webkit_spinner_none" min="1" value="40"/>
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
        <div className="col-5 p-0 text-left box-shadow-text mt-auto mb-auto pl-2 text-truncate pr-3">Division </div>
        <div className="col-6 p-0 text-right m-auto box-shadow-text text-truncate" id="division_overflow" style={{display:"inline"}}>
        <select  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {division.map(value=>{
              return( <option value={value.name}>{value.name}</option>);
          })} 
          {/* id="season" onChange={e=>UpdateNameId(e)} value={objects.season[tournament.season.id]}    */}
        </select>
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
            selected={changedValues.start_date}
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
            selected={changedValues.end_date}
            style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} 
            onChange={date=>end_dates(date)} //only when value has changed
            />
            </div>
        </div>
        </div>
        </div>
        
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_4} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Closing on</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <div  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
            <DatePicker
                startDate={new Date()}
                endDate={changedValues.start_date}
                selected={changedValues.closes_on}
                onChange={date=>close_dates(date)} 
            />
        </div></div>
        </div>
        </div>

        </div>
        </div>
       
        {/* end */}

         {/* start */}
         <div className="col-12 p-0 " style={{marginTop:"24px"}}>
        <div className="text-left address-title">Time</div>

        <div className="shadow-box-saved-screen">
        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_5} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Start</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
            <div style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                 <TimePicker
                 id="start_time"
                onChange={setStartTime}
                value={startTime}
                />
            </div>
        
        </div>
        </div>
        </div>

        <div className="container">
        <div className="row box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_5} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Ends</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
            <div style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <TimePicker
                 id="end_time"
                onChange={setEndTime}
                value={endTime}
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

            <select id="registration_cap" value={tournament.registration_cap} onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="yes">Yes</option>
                <option value="no">No</option>

            </select>
        </div>
    
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
                 id="ends_at"
                onChange={setEndsAt}
                value={endsAt}
                />
            </div>
        
        </div>
        </div>
        </div>

        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Team Size</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="team_size" onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>

            </select>
        </div>
        </div></div>


        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">No. of sets</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="" style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        
        
        </div>
        </div></div>

        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Match Time</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="match_time" onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="70">70 Minutes</option>
                <option value="60">60 Minutes</option>
                <option value="50">50 Minutes</option>
                <option value="40">40 Minutes</option>

            </select>
        </div>
        </div></div>

        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_6} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">No. of playoffs</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="no_of_playoff" onChange={e=>{updateValue(e)}} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        
        </div>
        </div></div>

        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div><div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Max points per set</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" pattern="[0-9]*" placeholder="max points"  class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

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
        <select id="pool_template_id" onChange={e=>UpdateNameId(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}} >
                {objects.pool_template_id.map(value=>{
                return( <option value={value}>{value}</option>);
            })} 

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
        <select id="season_id" onChange={e=>UpdateNameId(e)}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.season_id.map(value=>{
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
        <select id="point_template_id" onChange={e=>UpdateNameId(e)}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.point_template_id.map(value=>{
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
        <select id="seeding_method_id" onChange={e=>UpdateNameId(e)}    style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
          {objects.seeding_method_id.map(value=>{
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
        <select id="surface_type" onChange={e=>UpdateNameId(e)}   style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
        <select id="host_clinic"  onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
        <select id="show_entries"   onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
        <select id="team_listing" onChange={e=>UpdateNameId(e)}  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
                    <select id="director_id"  onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                          {managers.map(value=>(<option value={value.id}>{value.promoter_name}</option>))}  
                    </select>
                    </div></div></div>
                    
                    <div className="container">
                    <div className="row box-saved-screen">
                    <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
                    <img src={img_1} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Main Contact</div>
                    <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
                    <select id="main_contact"  onChange={e=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                          {managers.map(value=>(<option value={value.id}>{value.promoter_name}</option>))}  
                    </select>
                    </div>
                    </div></div>
                    </div>
                    </div>
        
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
        <select id="online_pay" onChange={(e)=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Purse Amount</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <input inputmode="numeric" pattern="[0-9]*" placeholder="$" id="purse_amount" onChange={(e)=>updateValue(e)}  class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen" style={{overflow:"hidden"}}>
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation Text</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric"  id="donation_text" onChange={(e)=>updateValue(e)}  placeholder="Enter Donation Text" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>
        </div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 1</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" id="don1" onChange={e=>donationsValue(e)} pattern="[0-9]*"   placeholder="$" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>
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
        <input inputmode="numeric" pattern="[0-9]*" id="don2" onChange={e=>donationsValue(e)}   placeholder="$" class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div><div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Donation 3</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 text-capitalize">
        <input inputmode="numeric" pattern="[0-9]*" id="don3" onChange={e=>donationsValue(e)} placeholder="$"  class="form-control p-0 event-number-input" name="leagueCost" type="text" style= {{ textAlign:"right",fontSize:"12px",height:"inherit"}}/>

        </div>
        </div></div>
        
        <div className="container">
        <div className="row mt-0 box-saved-screen">
        <div className="col-1 p-0 text-left pl-2 m-auto pb-1">
        <img src={img_1} alt="" className="img-fluid"/>
        </div>
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Allow Membership</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1 ">
        
        <select  style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>

            </select>
        </div>
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
        <select id="signature" onChange={(e)=>updateValue(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
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
        <div className="col-4 p-0 text-left box-shadow-text mt-auto mb-auto pl-2">Score Sheet</div>
        <div className="col-7 text-right m-auto saved-shadow-data mr-2 pr-1">
        <select id="scoresheet_id" onChange={e=>UpdateNameId(e)} style={{outline:"none", border:"none",fontSize:"12px",height:"inherit"}}>
        {objects.scoresheet_id.map(value=>{
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
       
        
        <label for="file-input-pdf"> <p id="pdfname" style={{fontSize:"10px",float:"left"}}>{pdfValue.name}</p>
        <img  src="https://avp-tournament.herokuapp.com/static/media/icon-menu-upload.6c121dfa.svg" alt=""/>
        </label>
        <input onChange={(e)=>pdfChange(e)} id="file-input-pdf"  type="file"/>

        </div>
        </div></div></div></div>
        
        <div className="col-12 p-0" style={{marginTop:"24px"}}>
        <div className="text-left address-title">Description</div>
        
        <div className="container">
        <div className="row shadow-box-saved-screen mt-0 " style={{height:"172px"}}>
        <div className="col-12 p-0 pr-1 pl-2 pb-1 textarea-style bg-white" style={{height: "172px"}}>
        <textarea className="form-control p-0 textarea-style bg-white"  rows="3" maxlength="1000" disabled="" style={{height:"160px",resize:"none"}} id="description"   onChange={(e)=>updateValue(e)}>new event  .....</textarea>
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
        <label for="file-input-1">
        <p style={{fontSize:"10px",float:"left"}}>{coverPhoto.name}</p>
        <img src="https://avp-tournament.herokuapp.com/static/media/icon-menu-upload.6c121dfa.svg" alt=""/>
        </label>
        <input  onChange={(e)=>onCoverChange(e)}  id="file-input-1"  type="file"/>
            {/* <input id="file-input" to="file-input" onChange={(e)=>tourChange(e)} accept="image/png, image/jpeg" type="file" /> */}

        </div>
       
       </div></div></div>
        </div>
        <div>
            <button type="button" onClick={()=>addEvent()} class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right", margin:"1px",marginTop:"10px",marginBottom:"20px",}}>Save</button>
            <button type="button"   class="btn btn-warning" style={{borderRadius:"10px",width:"70px", float:"right",margin:"1px",marginTop:"10px",marginBottom:"20px", backgroundColor:"white"}}>Cancel</button>

        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
}


export default AddEvent;