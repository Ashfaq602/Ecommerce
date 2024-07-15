import React from 'react';
import { useState } from 'react';
import Chatbot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import './App.css';

function ChatBot() {
    
  {/*const [isModalOpen, setModal] = useState();

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };*/}
  const steps = [
    {
      id:"Hello",
      message:"Hi,Welcome to Thunder Buddies",
      trigger:"Ask Name"
    },
    {
      id:"Ask Name",
      message:"Please enter your name",
      trigger:"waiting"
    },
    {
      id:"waiting",
      user:true,
      trigger:"Name",
    },
    {
      id:"Name",
      message:"Hi,{previousValue}, Please select your issue",
      trigger:"issues",
    },
    {
      id:"issues",
      options:[
        {value:"Login",label:"Login",trigger:"Login"},
        {value:"otp",label:"otp",trigger:"otp"},
       
      ],
    },
    {
      id:"Login", message:"Login to your Account",end:true
    },
    {
      id:"otp",message:"See your Details",end:true
    },
   
  ];
  return (
    <div className="App" >
        
            
      <Segment floated = 'right'>
      <Chatbot steps={steps}/>
      </Segment>
     
    </div>
  );
}

export default ChatBot;