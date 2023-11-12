import React from "react";
import CodeBlock from "../../CodeBlock";

function DelayedChild() {
  return (
    <CodeBlock>
      <p>
        <b>Parent component</b>
        <br />
        Input box: we need to enter a statement (ex. How are you?)
        <br />
        Button: When you click on this button, we need to pass the entered
        statement to child component.
        <br />
        <b>Child component</b>
        <br /> we need to receive the incoming statement and display the each
        word with 2sec delay on screen.
      </p>
    </CodeBlock>
  );
}

export default DelayedChild;
