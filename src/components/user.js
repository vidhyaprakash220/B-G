import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './logout-button';
export default function User() {
    const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div style={{ display: 'block', padding: 0 }}>
        <h4>B-G Management System</h4>
        <Navbar bg="navbar navbar-dark bg-primary" variant="dark" width="1000px"> 
          <a className='navbar-brand' href="#home" style={{ color: 'blue', width : '100%' }}>
            <div className='row'>
            <div className='col-md-2'>
            <img
  src={user.picture} alt={user.name}
              alt="Sample Brand Logo"
              width="35"
              className="align-top d-inline-block"
              height="35"
            />
                </div>
                <div className='col-md-9'>
<h2 style={{
    color:"darkseagreen"
}}>{user.name}</h2>
                </div>
                <div className='col-md-1'>
                <LogoutButton/>
                </div>
            </div>
           
            
           
          </a>
        </Navbar>
      </div>

    //   <div>
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
    //   </div>
    )
  );
}
