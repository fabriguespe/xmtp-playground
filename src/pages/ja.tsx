
const XMTPCODE = (props) => {
    const [count, setCount] = React.useState<number>(0)
    
    const doSomething = () => {
      // User-provided code will go here
      ${textareaValue}
    }
  
    return (
      <div>
        <button onClick={doSomething}>  ▶️ RUN </button>
        
      <textarea className={styles.test} >`{_isSigner:true,address:0x138B9B74c1cEC817430811929e9c25599A0dB7CC,provider:null}`</textarea>
      </div>
    )
  }
  
  render(
    <div>
      <XMTPCODE />
    </div>
  )