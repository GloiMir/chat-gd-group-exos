import { useState } from "react";
import ChatContainer from "./ChatContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatContainer />
    </div>
  );
}

export default App;
