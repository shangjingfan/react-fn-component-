
import React, { useState, useEffect } from "react"

function App() {
  const [childVisible, setChildVisible] = useState(true)
  // useEffect(() => {
  //   console.log("useEffect")
  // })
  const hide = () => {
    setChildVisible(false)
  }
  const show = () => {
    setChildVisible(true)
  }
  return (
    <div>
      {childVisible ? <button onClick={hide}>隐藏</button> : <button onClick={show}>显示</button>}
      {childVisible ? <Child /> : null}
    </div>
  );
}

const Child = props => {
  useEffect(() => {
    console.log("Child渲染或者变化了")
    return () => {
      console.log("Child销毁了")
    }
  })
  return (
    <div>Child</div>
  )
}

export default App;
