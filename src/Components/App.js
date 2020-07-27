import React from 'react';
import './App.css';
import Navbar from '../Components/UI/Navbar/Navbar';

function App() {
  return (
    <section>
      <div className="container">  
        
        <img className=""></img>

        <div className="column">
          <div className="col App-col-1">
            <h2 className="heading-tertiary--main">
              What is Lorem Ipsum?
            </h2>
            <p className="heading-tertiary--sub">It is a long established fact that a reader will 
              be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            </p>
          </div>

          <div className="col App-col-2">
            <div role="button" className="btn btn-primary ">Hello</div>
          </div>
        </div>       
        </div>
    </section>
  );
}

export default App;
