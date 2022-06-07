
import './App.css';
import myanime from "./berserk.jpg";
import './style.css';
import React from 'react';
import videos from "./video/Attack.mp4";




function App() {
  return (
    <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red ">Malek</h1>
    <br />
    <img src={myanime} alt ='myImage' width={400} height={400}/>
    <br />
    <img src="/Eren Yeager.jpg" alt='img not found' width={500} height={400} />
  </div>
  <video width={320} height={240} controls>
    <source src={videos} type="video/mp4" />
  </video>





</>
  );
}

export default App;
