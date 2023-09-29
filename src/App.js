import ChatbotPage from "./pages/ChatbotPage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ThanksPage from "./pages/ThanksPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/chatbot",
    element: <ChatbotPage></ChatbotPage>,
  },
  {
    path: "/thanks",
    element: <ThanksPage></ThanksPage>,
  },
]);

function App() {

  const dispatch= useDispatch();

  useEffect(()=>{
    const d = new Date();
    const arr=[10];
    d.setDate(d.getDate() - 1);
    for (let i = 0; i < 7; i++) {
      d.setDate(d.getDate() + 1);
      arr[i] = d.toString().slice(0, 10);
    }
    //console.log(arr);
    dispatch({
      type:"UPDATEDATES",
      value:arr
    })
},[dispatch])

  return (
    <div className="App">
      {<RouterProvider router={router} />}
    </div>
  );
}

export default App;
