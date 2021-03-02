import { useState, useEffect } from "react"

const useUpdate = (fn, dep) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(X => X + 1)
  }, [dep])
  useEffect(() => {
    if (count > 1) {
      fn()
    }
  }, [count, fn]) // fn加在这里是为了消除警告
}

export default useUpdate