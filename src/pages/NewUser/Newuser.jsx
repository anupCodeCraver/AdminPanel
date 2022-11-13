import React from 'react'
import './newuser.css';
export default function Newuser() {
    return (
        <div className='newuser'>
            <h3 className='newuserTitle'>New User</h3>
            <form className="newuserForm">
                <div className="LblInputDiv">
                    <label>Username</label>
                    <input type="text" className='inputUser' placeholder='JonDeo1' />

                </div>
                <div className="LblInputDiv">
                    <label>Full Name</label>
                    <input type="text" className='inputUser' placeholder='Jon Deo' />
                </div>
                <div className="LblInputDiv">
                    <label>Email</label>
                    <input type="email" className='inputUser' placeholder='jon@gmail.com' />
                </div>
                <div className="LblInputDiv">
                    <label>Password</label>
                    <input type="password" className='inputUser' placeholder='password' />
                </div>
                <div className="LblInputDiv">
                    <label>Phone</label>
                    <input type="number" className='inputUser' placeholder='Phone' />
                </div>
                <div className="LblInputDiv">
                    <label>Address</label>
                    <input type="text" className='inputUser' placeholder='Address' />
                </div>
                <div className='radiodiv'>
                    <label className='gender'>Gender</label>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label className='labelpush' for="male">Male</label>
                    <input className='labelpush' type="radio" id="female" name="gender" value="female" />
                    <label className='labelpush' for="female">Female</label>
                    <input className='labelpush' type="radio" id="other" name="gender" value="other" />
                    <label className='labelpush' for="other">Other</label>
                </div>
                <div className="SelectDiv">
                <span className='activeLabel'>Active</span>
                    <select className='newUserSelect' name="active" id="active">    
                        <option value="yes">Yes</option>    
                        <option value="no">No</option>

                    </select>
                </div>
                <button className="newUserbtn1">Create</button>
            </form>
        </div>
    )   
}
