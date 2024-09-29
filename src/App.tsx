import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  const [disableTransition, setDisableTransition] = useState(false);

  const clickHandler = useCallback((increase: boolean) => {
    setCount((prevCount) => {
      if (increase) {
        setDisableTransition(true);
      } else {
        setDisableTransition(false);
      }
      return increase ? prevCount + 1 : prevCount - 1;
    });
  }, []);

  return (
    <>
      <div className='container'>
        <h1>One way transition</h1>
        <h2>{count * 50}% width</h2>
        <button onClick={() => clickHandler(true)}>Increment</button>
        <button onClick={() => clickHandler(false)}>Decrement</button>

        <div className='indicator'><div className={"indicator-inner " + (disableTransition ? "no-transition" : "")} style={{ width: `${count * 50}%` }}></div></div>
      </div>
    </>
  )
}

export default App
