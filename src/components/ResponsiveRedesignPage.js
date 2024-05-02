import React from 'react';
import "../styles.css";


const ResponsiveRedesignPage = () => {
    return (
        <div className="case-study-container">
          <h1 className="container-title">Responsive Redesign</h1>
    
          <section className="container-content">
            <h2 className="container-header">Introduction</h2>
            <p className="container-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          
          <section className="container-content">
            <h2 className="container-header">Final Product</h2>
            <p className="container-body">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.
            </p>
          </section>
    
          <section className="container-content">
            <h2 className="container-header">Key Takeaways</h2>
            <ul>
              <li><b>lorem ipsum...</b></li>
              <li><b>lorem ipsum...</b></li>
            </ul>
          </section>
        </div>
      );
};

export default ResponsiveRedesignPage;
