import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { Wallet } from "ethers";
import { Client } from "@xmtp/xmtp-js";

const scope = { Wallet, Client };

const code2 = `


const Counter = (props) => {

  const [count, setCount] = React.useState<number>(0)
  const doSomething = () => {
    // You'll want to replace this with a wallet from your application
    const wallet = Wallet.createRandom();
    console.log(wallet)
  }
  return (
    <div>
      <h3> {props.label}: {count} 🧮   </h3>
      <button onClick={doSomething}>  ▶️  </button>
    </div>
  )
}
render(
<div>
  <Counter label="Counter" />
  <Counter label="Counter" />
</div>
)
`;
export default function Index() {
  return (
    <div>
      <LiveProvider code={code2} noInline={true} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
}
