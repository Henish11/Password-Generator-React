import React, { useEffect,useState } from 'react'

const ProgressComponent = ({value}) => {

  const [percentage, setPercentage] = useState(value);

  useEffect(()=>{
    setPercentage(Math.min(100,Math.max(0,value)))
  },[value])

  return (
    <>
      <span>Progressbar</span>
      <div className='progressBar'>
         <span className={percentage < 49 ? 'black value' : 'white value'}>{percentage.toFixed()}%</span>
         <div className='overlay' style={{ transform: `scaleX(${percentage / 100})`,transformOrigin:'left'}} />
      </div>       
    </>
  )
}

export default ProgressComponent