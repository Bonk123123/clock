import React, { useState, useEffect } from 'react';
import mountains from './images/pattern-hills.svg'
import stars from './images/bg-stars.svg'
import Part from './components/Part';

function App() {
  const [dateNow, setDate] = useState(getTime())


  
  useEffect( () => {
    setInterval(()=>{ 
      setDate(getTime())
    },1000)

  }, [])


  function getTime(){
    
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    
    
    return {hours, minutes, seconds}
  }
  

  return (
    <div className="bg-stars h-full w-full flex-col bg-gray-800 items-center space-y-60">
        <div className='w-full flex justify-center'><p className='uppercase text-2xl font-bold text-white'>we're launching soon</p></div>
        <div className='flex gap-5 justify-center'>
          <Part data={dateNow.hours} />
          <Part data={dateNow.hours}  />
          <Part data={dateNow.minutes}/>
          <Part data={dateNow.seconds}  />
        </div>
        <img className='' src={ mountains } alt="" />
    </div>
  );
}

export default App;
