import React from "react";

const ExampleContainer = props => {
  const { title, children } = props;

  return (
    <div className="example-container">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ExampleContainer;
