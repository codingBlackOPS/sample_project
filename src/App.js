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
      <Avatar />
      <Packing />
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

function Gallery(){
  return(
    <img src='https://i.imgur.com/lICfvbD.jpg' alt="Profile Pic"></img>
  );
}

export function Avatar(){
  return(
    <Gallery
    
    profile = {{name: 'SAM', imageID:'gh190'}}
    size={50}
    
    />
  );
}

// del tag used to strike out the word ! 
//{isPacked ? (<del> { name + ' ✔'} </del>) :( name)}  

// if condition can return null;

//&& operator is used assign right with left if true
//{name}{isPacked && '✔'}

function Item ({name,isPacked}) {
  
  let itemcontent = name; //let variable can reassign value

  if(isPacked){itemcontent= name + "✔"} //&& "✔" is not worked
  else{itemcontent = (<del>{name}</del>)}


  return(
    <li className="items">
      {itemcontent}
    </li>);
}

function Packing (){
  return(
    <>
      <h4>Purchased Items</h4>
      <ul>
      <Item 
      name="Fruits"
      isPacked={true}/>

      <Item 
      name="Snacks"
      isPacked={true}
      />

      <Item name="chocolates" isPacked={false}/>
      </ul>
      <button className="check" onClick={Item}>Check</button>
    </>
    
  );
}











