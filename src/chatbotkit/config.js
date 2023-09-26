import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import EnrollBtn from "./EnrollBtn";

const config = {
  botName: "Student Info System",
  initialMessages: [
    createChatBotMessage("Enter into Student Info System", {
      widget: "enrollBtn",
    }),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "enrollBtn",
      widgetFunc: (props) => <EnrollBtn />,
    },
  ],
};

export default config;
