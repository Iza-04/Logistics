import React from "react";
// import ReactDOM from "react-dom/client";
// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Contacts />
      {/* <Services />
      <Types />
      <About />
      <More />
      <Request />
      <Team />
      <Clients />
      <News />
      <Tourist />
      <Footer /> */}
    </div>
  );
}

function Header() {
  const style = {
    color: "white",
    backgroundColor: "black",
    position: "absolute",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  // const style = {};
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.jpg"></img>
      </div>
      <button className="menu">MENU</button>
      <h1 style={styles} className="header">
        LOGISTIC EXPRESS
      </h1>
    </header>
  );
}

function Slider() {
  return (
    <main className="slider">
      <h2>
        Safe & Reliable Logistic Solutions
        <span>Since 1992!</span>
      </h2>
      <form>Your tracking ID</form>
      <input type="text" />
      <button>TRACK & TRACE</button>
      <h3>FOR ORDER STATUS INQUIRY</h3>
    </main>
  );
}

function Contacts() {
  return (
    <>
      <div className="Info">
        <p>Call Us Anytime</p>
        <h2>Office no: +971 42398637 +971 50 9365888</h2>
      </div>
      <div className="Time">
        <p>Sunday CLOSED</p>
        <h2>Mon - Sat 8.00 - 18.00</h2>
        <div className="place">
          <p>Dubai, SC 29201</p>
          <h2>UAE, DUBAI</h2>
          <p>Office location</p>
          <h2>
            Al bayan building near carrefour 6th floor Office number 658 Dip 1
            Dubai
          </h2>
        </div>
      </div>
    </>
  );
}

// function Services() {}

// function Types() {}

// function About() {}

// function More() {}

// function Request() {}

// function Team() {}

// function Clients() {}

// function News() {}

// function Tourist() {}

// function Footer() {}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );
