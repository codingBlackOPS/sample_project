import React from "react";
import { useState } from "react";

const Components = () => {
  return (
    <>
      <Hello />
      <Mybutton />
      <About />
      <Image />
      <Aass />
      <Click />
      
    </>
  );
};

export default Components;

const item = { image : 'https://i.imgur.com/lICfvbD.jpg'}

const user = {
  name: "Balan Uchiha",
  logo: "https://i.imgur.com/yXOvdOSs.jpg",
  size: "90px",
};

const Mybutton = () => {
  function fun(){
    alert('Go ahead !');
  }
  return <button className="button" onclick="">Login</button>;
};



function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello Uchiha, <br /> Are you ready for fight !
      </p>
    </>
  );
}

function Image() {
  return (
    <>
      <div className="color">Muzan !</div>
    </>
  );
}

function Aass() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="logo"
        src={user.logo}
        alt={"photo of " + user.name}
        style={{ height: user.size, width: user.size }}
      ></img>
    </>
  );
}

/*const True = () => {
  return (
    <>
      <h5>ZIP ZAP ZOM .....</h5>
    </>
  );
};

const False = () => {
  return (
    <>
      <h5>HIP HIP HIPOOOO .....</h5>
    </>
  );
};

let Content = () => {
  return (
    <>
      if (isLoggedIn) {Content = <True />}
      else{ Content = <False />}
    </>
  );
};*/

function  Click (){
  const [count,setcount] = useState(0);
  function Mcount (){
    setcount(count+1)
      
  }
  return(
  <button className="click" onClick={Mcount}>{count} clicked</button>);
}

export function Blackops () {
  return(
    <>
      <img src={item.image} alt="BlackOPS"></img>
    </>
  );
}


