
import React, { useState } from "react"
import useUpdate from "./useUpdate"

function App() {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(n + 1)
  }
  // 封装的模拟componentDidUpdate生命周期钩子，用useState和useEffect
  useUpdate(() => {
    console.log("n变了")
  }, n)

  return (
    <div className="App">
      App
      {n}
      <button onClick={(onClick)}>+1</button>
    </div>
  );
}

export default App;
