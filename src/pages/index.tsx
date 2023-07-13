import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { Wallet } from "ethers";
import { Client } from "@xmtp/xmtp-js";
import styles from "./index.module.css";

export default function Index() {
  const [loggedStrings, setLoggedStrings] = useState([]); // state variable to store logged strings

  const handleLog = (x) => {
    x = JSON.stringify(x); //now scape this characters
    x = x.replace(/\\n/g, " "); // replace \n with space
    //replace also " and \ with nothing
    x = x.replace(/"/g, "");
    setLoggedStrings((oldLogs) => [...oldLogs, x]); // log function that updates state
    console.log(x); // also log to console
  };
  const [textareaValue, setTextareaValue] = useState("log('x')"); // new state variable
  const log = (x) => console.log(x);
  const scope = { log: handleLog, LiveProvider, styles, Wallet, Client };
  const handleTextareaChange = (event) => {
    // new function to handle the textarea value change
    setTextareaValue(event.target.value);
  };

  const code2 = `
  const XMTPCODE = (props) => {
    const [count, setCount] = React.useState<number>(0)
    
    const doSomething = () => {
      // User-provided code will go here
      ${textareaValue}
    }
    const defaultValue = "${loggedStrings.join("\\n")}";

  
    return (
      <div>
        <button onClick={doSomething}>  ▶️ RUN </button>
        <textarea className={styles.test} defaultValue={defaultValue} />
      </div>
    )
  }
  
  render(
    <div>
      <XMTPCODE />
    </div>
  )
  `;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.test}>
          <textarea
            value={textareaValue} // set textarea value from state
            onChange={handleTextareaChange} // update state when textarea value changes
            className={styles.test} // make the textarea full width  <LiveEditor />
          />
        </div>
        <div className={styles.test}>
          <LiveProvider code={code2} scope={scope} noInline={true}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.test}>
          <textarea
            value={textareaValue} // set textarea value from state
            onChange={handleTextareaChange} // update state when textarea value changes
            className={styles.test} // make the textarea full width  <LiveEditor />
          />
        </div>
        <div className={styles.test}>
          <LiveProvider code={code2} scope={scope} noInline={true}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </div>
    </div>
  );
}
