import pad from './pad.ico'
import './call.css'
const Call=(props)=> {
  console.log(props)
  return (
    <div className="App">
      <div className="col-12 d-flex  flex-column">
                <div style={{ fontSize: '1.5rem', color: '#fff' }} className=" d-flex justify-content-center mt-1">
                  <span>Raj</span>
                  <span>Tawari</span>
                </div>
                <div></div>
                <div
                  className="d-flex justify-content-center"
                  style={{ fontSize: '1.2rem', color: '#fff' }}
                >
                  01:02
                </div>
              </div>

            <div className="Options">

              <div
              className="col-12 d-flex justify-content-center"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              
                  <span className="icon" >
                    <img
                      alt=""
                      src={pad}
                      style={{ height: '35px', width: '35px' }}
                    ></img>
                  </span>
               
                
                  <span className="">
                    <i className="fas fa-volume-up icon"></i>
                  </span>
                
                  <span>
                    <i className="fas fa-microphone-slash icon"></i>
                  </span>
                </div>
              
              <div className="col-12 d-flex justify-content-center">
                  <span>
                    <i className="fas fa-phone-volume icon"></i>
                  </span>
               
                  <span>
                    <i className="fas fa-pause icon"></i>
                  </span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            
            <span 
              id="cancel"
              style={{
                height: '4rem',
                width: '4rem',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.6rem',
                color: '#fff',
              
                backgroundColor: 'rgb(253, 14, 14)',
              }}
              className=" d-flex justify-content-center align-items-center "
              onClick={()=>props.history.goBack()}
            >
              <i className="fas fa-phone-slash"></i>
            </span>
            </div>

            {/* form */}
            <form style={{marginTop:"10px"}}>
                <input type="text" placeholder="Follow Up Required : If Yes Enter Date"></input><br/>
                <input type="text" placeholder="Abusive Language Used : Yes/No"></input><br/>
                <input type="text" placeholder="Time Line to Pay Pending Dues"></input><br/>
                <input type="text" placeholder="Remarks : "></input><br/>
                <button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Submit</button>

            </form>
    </div>
  );
}

export default Call;
