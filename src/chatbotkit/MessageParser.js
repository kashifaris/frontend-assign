import React from "react";
import { useDispatch, useSelector } from "react-redux";



const MessageParser = ({ children, actions }) => {
  console.log("data",children)
  const dispatch= useDispatch();
  const data= useSelector(state=>state.data);
  console.log(data);
  const parse = (message) => {
    if (children.props.state.checker === "age") {
      dispatch({
        type:"UPDATENAME",
        value:message
      })
      actions.ageMsg();
    }
    if (children.props.state.checker === "final") {
      dispatch({
        type:"UPDATEAGE",
        value:message
      })
      actions.finalMsg();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions, //these actions are passed to the components
        });
      })}
    </div>
  );
};

export default MessageParser;
