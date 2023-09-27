import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../chatbotkit/config';
import MessageParser from '../chatbotkit/MessageParser';
import ActionProvider from '../chatbotkit/ActionProvider';
import '../main.css';

function ChatbotPage() {
    return (  <div className="chat-bot">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>);
}

export default ChatbotPage;