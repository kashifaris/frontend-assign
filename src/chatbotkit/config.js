import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./components/Avatar";
import GotitBtn from "./components/GotitBtn";
import CalenderStrip from "./calander/CalenderStrip";
import Timer from "./components/Timer";

const config = {
  botName: "Info System Bot",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      widget: "gotitBtn",
    }),
  ],
  customComponents: {
    //props are being passed to the component and then the component is returned
    botAvatar: (props) => <Avatar {...props} />, 
  },
  widgets: [
    {
      widgetName: "gotitBtn",
      widgetFunc: (props) => <GotitBtn {...props} />,
    },
    {
      widgetName: "calenderStrip",
      widgetFunc: (props) => <CalenderStrip {...props} />,
    },
    {
      widgetName: "timer",
      widgetFunc: (props) => <Timer {...props} />,
    },
  ],
  state:{
    checker:null
  }
};

export default config;
