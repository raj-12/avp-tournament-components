import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Audio =()=>{
    return (
        <div>
           <audio >
           <source src="horse.mp3" type="audio/mpeg"/>
                <i style={{padding:"10px",height:"20px",fontSize:"1.5rem"}} class="fa fa-volume-up" aria-hidden="true"></i>
      </audio>
 
        </div>
    )
}

export default function Toggle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      { props.array.map((value,index) => {
        console.log(value, index)
        let value1 = " Call-"+Number(value)+" 27/07/2021-17:00PM"
      return (
        
        <Accordion>
        <AccordionSummary
        // onClick={<ExpandMoreIcon/>}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Audio/>}
            label={value1}
          />
        </AccordionSummary>
        <AccordionDetails>
         
        <div style={{backgroundColor:"blue"}}>
          
          <h6>Follow Up Required Yes/No: Yes</h6>
          <h6 >Abusive Language Used Yes/No : Yes</h6>
          <h6>Time Line : 01-08-2021</h6>
          <h6>Remarks : Address Not found</h6>
        </div>
        </AccordionDetails>
      </Accordion>)
      })
      
      }


{/* 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Audio/>}
            label=" Call-2 27/07/2021-17:00PM"
          />
        </AccordionSummary>
        <AccordionDetails>
         
        <div style={{backgroundColor:"blue"}}>
          
          <h6>Follow Up Required Yes/No: Yes</h6>
          <h6 >Abusive Language Used Yes/No : Yes</h6>
          <h6>Time Line : 01-08-2021</h6>
          <h6>Remarks : Address Not found</h6>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        // onClick={<ExpandMoreIcon/>}
          expandIcon={<ExpandMoreIcon />}
          

          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Audio/>}
            label=" Call-3 27/07/2021-17:00PM"
          />
        </AccordionSummary>
        <AccordionDetails>
         
        <div style={{backgroundColor:"blue"}}>
          
          <h6>Follow Up Required Yes/No: Yes</h6>
          <h6 >Abusive Language Used Yes/No : Yes</h6>
          <h6>Time Line : 01-08-2021</h6>
          <h6>Remarks : Address Not found</h6>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        // onClick={<ExpandMoreIcon/>}
          expandIcon={<ExpandMoreIcon />}
          

          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Audio/>}
            label=" Call-4 27/07/2021-17:00PM"
          />
        </AccordionSummary>
        <AccordionDetails>
         
        <div style={{backgroundColor:"blue"}}>
          
          <h6>Follow Up Required Yes/No: Yes</h6>
          <h6 >Abusive Language Used Yes/No : Yes</h6>
          <h6>Time Line : 01-08-2021</h6>
          <h6>Remarks : Address Not found</h6>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        // onClick={<ExpandMoreIcon/>}
          expandIcon={<ExpandMoreIcon />}
          

          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Audio/>}
            label=" Call-5 27/07/2021-17:00PM"
          />
        </AccordionSummary>
        <AccordionDetails>
         
        <div style={{backgroundColor:"blue"}}>
          
          <h6>Follow Up Required Yes/No: Yes</h6>
          <h6 >Abusive Language Used Yes/No : Yes</h6>
          <h6>Time Line : 01-08-2021</h6>
          <h6>Remarks : Address Not found</h6>
        </div>
        </AccordionDetails>
      </Accordion>
  */}
  </div>
  );
}
