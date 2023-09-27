import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log(children);
  const parse = (message) => {
    if (children.props.state.checker === "age") {
      actions.ageMsg();
    }
    if (children.props.state.checker === "final") {
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
