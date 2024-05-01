
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";


const IterativeDevelopmentPage = () => {
    return (
        <div className="firstContainer">
          <h1>Iterative Design</h1>
    
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              lorem ipsum...
            </p>
            
            <img className="image" src="./assets/original_page.png" alt="Original Page" />
          </section>
    
          {/* More sections follow... */}
          
          <section id="final-product">
            <h2>Final Product</h2>
            <p>lorem ipsum...</p>
            <img className="mockup" src="./assets/mockup.jpg" alt="Final Product Mockup" />
          </section>
    
          <section id="key-takeaways">
            <h2>Key Takeaways</h2>
            <ul>
              <li><b>lorem ipsum...</b></li>
              <li><b>lorem ipsum...</b></li>
            </ul>
          </section>
        </div>
      );
    };
export default IterativeDevelopmentPage;
