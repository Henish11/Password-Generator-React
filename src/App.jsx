import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

const App = () => {

  const checkData = [
    { title: "Include Uppercase Character", state: false },
    { title: "Include Lowercase Character", state: false },
    { title: "Include Number", state: false },
    { title: "Include Special Character", state: false }
  ];
  const [checkBoxData, setCheckBoxData] = useState(checkData);
  const [length, setLength] = useState(4);
  const [copy,setCopy] = useState(false)

  // Checkbox 
  const handleCheck = (i)=>{
     const updatedCheckData = [...checkBoxData]
     updatedCheckData[i].state = !updatedCheckData[i].state
     setCheckBoxData(updatedCheckData)
  }

  const {password,error,gereratePassword} = usePasswordGenerator()

  // Copy
  const handleCopy = () =>{
    navigator.clipboard.writeText(password)
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    },1000)
  }

  return (
    <div className="App">
      <div className="boxWrap">
        {password && <div className="topBar">
          <span>{password}</span>
          <button onClick={handleCopy}>
            {copy ? 'Copied' : 'Copy' }
          </button>
        </div>}
        <div className="slideRange">
          <input
            type="range"
            value={length}
            min="4"
            max="20"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <span>Password Character : {length}</span>
        </div>
        <div className="chechBox">
          {checkBoxData.map((item,index) => {
            return (
              <div key={index}>
                <input type="checkbox" checked={item.state} onChange={()=>{handleCheck(index)}}  />
                <label> {item.title}</label>
              </div>
            );
          })}
        </div>
        {error && <span className="error">{error}</span>}
        <button onClick={()=>gereratePassword(checkBoxData,length)}>Submit</button>
      </div>
    </div>
  );       
}

export default App