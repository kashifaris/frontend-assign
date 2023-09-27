import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const gotitmsg = ()=>{
    const message= createChatBotMessage("Got it!");
    console.log(message);
    const newmsg= {...message,type:"user"};
    updateState(newmsg,"calender");
  }

  const calenderStripMsg= ()=>{
    const message= createChatBotMessage("Pick a slot !",{
      widget:"calenderStrip"
    })
    updateState(message);
  }

  const selectedDateMsg= (date,time)=>{
    const message= createChatBotMessage(date+" "+time)
    console.log(message);
    const newmsg= {...message,type:"user"};
    updateState(newmsg,"name");
    const namemessage= createChatBotMessage("Enter Your Name");
    updateState(namemessage,"age");
  }

  const ageMsg=()=>{
    const message= createChatBotMessage("Enter Your Age");
    updateState(message,"final")
  }

  const finalMsg=()=>{
    const message= createChatBotMessage("Thank You, you will be redirected in 5 sec");
    updateState(message,"done")
  }
  
  
  const updateState= (message,checker)=>{
    setState((prev)=>({
      ...prev,
      messages:[...prev.messages,message],
      checker
    }))
  }
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {  //these actions are passed to the messageParser
            gotitmsg,
            calenderStripMsg, 
            selectedDateMsg,
            ageMsg,
            finalMsg,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;