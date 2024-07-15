import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Router, useNavigate } from 'react-router-dom'; // Correct import for v6
import "./Login.css"
import 'react-phone-input-2/lib/style.css';
import { TextField, Button } from '@mui/material';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import  auth  from "./setup";

export default function PhoneSignin() {
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); // Correct usage for v6

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
      console.log('OTP Sent:', confirmation);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = await user.confirm(otp);
      console.log('Verification successful:', credential);
      // Redirect to another page after successful verification
      navigate('/Home'); // Replace '/' with your desired route
    } catch (err) {
      console.error('Verification failed:', err);
    }
  };

  return (
    <div className='phone-signin'>
     
      <div className='phone-content'>
      <h3>Enter The Phone Number</h3>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={(phone) => setPhone('+' + phone)}
        />
        <Button onClick={sendOtp} sx={{ marginTop: '10px' }} variant='contained' color='primary'>
          Send OTP
        </Button>
        <div style={{ marginTop: '10px' }} id='recaptcha'></div>
        <br />
        <TextField
          onChange={(e) => setOtp(e.target.value)}
          sx={{ marginTop: '10px', width: '300px' }}
          variant='outlined'
          size='small'
          label='Enter Otp'
        />
        <br />
        <Button onClick={verifyOtp} sx={{ marginTop: '10px' }} variant='contained' color='secondary'>
          Verify OTP
        </Button>
      </div>
    </div>
   
  );
}
