import { CalendarToday, EmailOutlined, LocationSearchingOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css"

export default function User() {
    return (
        <div className='userEdit'>
            <section className='userPanel'>
                <h3 className='usertitleEdit'>Edit User</h3>
                <Link to='/newuser'>
                <button className='userEditButton'>Create</button>
                </Link>
            </section>
            <div className="information">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className='UserImg' src="https://images6.fanpop.com/image/photos/43100000/Stylish-boy-fanpop-43135290-300-450.jpg" alt="" />
                        <div className='userinfoo'>
                            <span className="username">Jon Doe</span>
                            <span className="userfield">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="usertitle">Account Details</span>
                        <div className="actualinfo">
                            <PermIdentity className='userinfoIcon' />
                            <span className="userName">Jon Deo</span>
                        </div>  
                        <div className="actualinfo">
                            <CalendarToday className='userinfoIcon' />
                            <span className="userName">10.12.1999</span>
                        </div>
                        <span className="usertitle">Contact Details</span>

                        <div className="actualinfo">
                            <PhoneAndroid className='userinfoIcon' />
                            <span className="userName">+91 916 821 3969</span>
                        </div>
                        <div className="actualinfo">
                            <EmailOutlined className='userinfoIcon' />
                            <span className="userName">jon@gmail.com</span>
                        </div>
                        <div className="actualinfo">
                            <LocationSearchingOutlined className='userinfoIcon' />
                            <span className="userName">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userForm">
                        <div className="userUpdateL">
                            <div className="userUpdateItem">
                                <label className='userlable'>Username</label>
                                <input type="text" className='inputboxx' placeholder='jonDeo1' />
                            </div>
                            <div className="userUpdateItem">
                                <label className='userlable'>Full Name</label>
                                <input type="text" className='inputboxx' placeholder='jon Deo' />
                            </div>
                            <div className="userUpdateItem">
                                <label className='userlable'>Email</label>
                                <input type="text" className='inputboxx' placeholder='jon@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label className='userlable'>Phone</label>
                                <input type="text" className='inputboxx' placeholder='+91 916 821 3969' />
                            </div>
                            <div className="userUpdateItem">
                                <label className='userlable'>Address</label>
                                <input type="text" className='inputboxx' placeholder='New York | USA' />
                            </div>
                        </div>

                        <div className="imagediv">
                            <div className='imgdiv'>
                                <img className='userimgd' src="https://images6.fanpop.com/image/photos/43100000/Stylish-boy-fanpop-43135290-300-450.jpg" alt="" />
                                <label htmlFor='file'><Publish className='publishbtn'/></label>
                                <input style={{ display: 'none' }} type="file" id='file'></input>
                            </div>
                            <button className='updatebtn'>Update</button>
                        </div>
                    </form>

        
                </div>
            </div>

        </div>
    )
}
