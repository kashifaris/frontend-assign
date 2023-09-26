import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatbotkit/config';
import MessageParser from './chatbotkit/MessageParser';
import ActionProvider from './chatbotkit/ActionProvider';
import './App.css';




function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
