
import './App.css';
import {useState} from 'react';
import pic from './me.png';



function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (e) => {
    if(counter === 0)
    {

      document.getElementById('head').innerText = `I'M SORRY`;
      document.getElementById('click').innerText = "CLICK AGAIN";
      setCounter(c=>c+1);
    }
    if(counter ===1 )
      {
        document.getElementById('head').innerText = "PLEASE FORGIVE ME 🙏🏻";
        document.getElementById('click').innerText = "CLICK AGAIN";
        setCounter(c=>c+1);
    }
    if(counter ===2)
      {
        document.getElementById('head').innerText = "I COULD BE A JERK SOMETIMES ☹️";
        document.getElementById('click').innerText = "CLICK HERE TO KNOW MORE ABUOT THIS";
        setCounter(c=>c+1);
    }
    if(counter ===3 )
      {
        document.getElementById('head').innerText = "BUT I REALLY LOVE YOU BABY ❤️";
        document.getElementById('click').innerText = "CLICK AGAIN IF YOU ARE STILL NOT SATISFIED";
        setCounter(c=>c+1);
    }
    if(counter ===4)
      {
        document.getElementById('head').innerText = "SORRY CHOTAAAAA... PLEASE FORGIVE ME 🥺";
        document.getElementById('click').innerText = "CLICK EVEN AGAIN IF YOU ARE YET NO SATISFIED";
        setCounter(c=>c+1);
    }
    if(counter ===5)
      {
        document.getElementById('pic').style.display = "block";
        document.getElementById('head').innerText = "SORYYYYYYYYYYY SHUNKAAAAAAAAAAAAAAA";
        document.getElementById('click').innerText = "NO MORE CLICKS.. JALDI BAHAR AAO ❤️";
        setCounter(c=>c+1);
    }
    
  }
  return (
    <div className="App">
      <img id="pic" src={pic} width="500px" alt="my-pic"/>
      <h1 className="heading" id="head">BABY</h1>
      <h2 className="clickHere" id="click" onClick = {handleClick}>CLICK HERE</h2>
    </div>
  );
}

export default App;
