import React from 'react';
import { FaRegPaperPlane, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Resetlink = () => {
  let navigate = useNavigate()

  const save =()=> {
    alert("welcome");
    navigate("/app")
  }
  return (
    <>
        <div className='bigdiv'>
            <div className='smalldiv'> 
            <div className='time'> <FaTimes/> </div>
                    <h1 className='h1'>Password reset link</h1>
                    <div >
                    <FaRegPaperPlane className='icon'/>
                    </div>
                    <h5>A password reset link has been sent to the email address you gave previously <br />To gain access to your inbox, click on the button below.</h5>
                    <button className='btn' onClick={save}>Go to mail</button>
            </div>
        </div>
    </>
  )
}

export default Resetlink