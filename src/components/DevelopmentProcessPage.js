import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import speed_sketch from '../images/speed-sketch.png'
import final_sketch from '../images/final-sketch.png'
import development from '../images/development.png';
import CustomCursor from './CustomCursor';
import table from '../images/table.png';
import mcdonalds from '../images/mcdonalds.png'
import inout from '../images/inout.png'
import chilis from '../images/chilis.png'

import "../styles.css";

const DevelopmentProcessPage = () => {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="case-study-container">
          <CustomCursor></CustomCursor>

          <div className="button-container">
            <button className="rrd-btn" onClick={handleReturnHome}>
              <span className="rrd-circle">
                <span className="rrd-icon rrd-arrow"></span>
              </span>
              <span className="rrd-button-text">Return Home</span>
            </button>
          </div>



          <h1 className="container-title">Development</h1>
    
          <section className="container-content">
            <h2 className="container-header">Introduction</h2>
            <p className="container-body">
            This project is about the design and development process 
            where I created a restaurant webpage using React. The design
             for this webpage is a result of doing a competitive analysis 
             on three distinct websites McDonald’s, Chili’s, and In-N-Out. 
             Through this analysis, I have developed a webpage that uses 
             the strengths and addresses the weaknesses of each restaurant 
             thereby incorporating sorting, filtering, and data aggregation 
             to create an intuitive user experience.
            </p>
          </section>


          <section className="container-content">
            <h2 className="container-header">Competitive Analysis</h2>
            <p className="container-body">
            Below is the competitive analysis that was done for each of the 
            following restaurants. To guide my analysis, I observed how each
            sorted and filtered their information, displayed their items,
            and guided their users to see how their decisions would impact 
            the user experience. Below is the resulting table of the analysis 
            as well as a short description for each restaurant describing what 
            was and was not successful about their design decisions. <b>Click on a 
            restaurant's corresponding image to be taken to their webpage.</b>
            </p>

            <img
              class="mockup"
              src={table} 
              alt="Development"
            />
          </section>



          <h2 class="resteraunts">McDonald's</h2>
            <div class="content-container">
              <div class="text-content">
                <p>
                  <b>The most successful aspect of the McDonald's menu webpage is its convenience for obtaining
                  information.</b> This is because everything a user needs regarding an item's information,
                  such as allergens or nutrition, can be found on a single page through dropdown items.
                  The least successful design choice of the McDonald's webpage is the presence of an 
                  "Order Now" button that requires the user to download the McDonald's app or be redirected 
                  to another company's webpage. This is a weak point as it adds a substantial amount
                  of clicks to someone ordering food which can potentially lose customers
                  as it substantially decreases the efficiency of the page which is a design
                  principle learned in class.
                </p>
              </div>
              <div class="image-content">
                <a href="https://www.mcdonalds.com/us/en-us/full-menu/burgers.html">
                  <img 
                    class="mockup" 
                    src={mcdonalds}
                    alt="McDonald's Menu"
                    target="_blank" 
                    rel="noopener noreferrer">
                  </img>
                </a>
              </div>
            </div>

          <h2 class="resteraunts" >Chili's</h2>
          <div class="content-container">
            <div class="text-content">
              <p>
                <b>The biggest strength of the Chili's webpage is that it provides the
                essentials for each item on a card</b> by including the item's picture, 
                ingredients, caloric value, price, and an 'add to cart' button. 
                This is beneficial because it allows users to quickly assess whether
                they want the item which results in faster ordering. However, the main 
                weakness of this webpage is that nutritional facts and allergen 
                information are not only located on a different page but also in a separate 
                file that needs to be opened. This is problematic because first, users have
                to locate the small link to the information at the bottom of the item page
                which contradicts the design principle in class where text shouldn't be too
                small. Second, the PDF contains a crowded chart with information for the entire 
                menu, which can lead to mistakes when users try to find specific details.

              </p>
            </div>
            <div class="image-content">
              <a href="https://www.chilis.com/menu/big-mouth-burgers">
                <img class="mockup" src={chilis} alt="Chili's Menu"></img>
              </a>
            </div>
          </div>

          <h2 class="resteraunts" >In-N-Out</h2>
          <div class="content-container">
            <div class="text-content">
              <p>
                <b>The strength of In-N-Out's webpage lies in its straightforward design, 
                which makes it easy for users to navigate the menu.</b> This simplicity is
                a result of its few interactive elements such as a list of menu items, a 
                large image of each item, and a button that shows a popup of the ingredients
                for the item. However, the main drawback of this webpage is the lack of detailed
                information as it primarily relies on images to convey details which 
                goes against design principles discussed in class. This is a significant 
                disadvantage because it forces users to spend more time searching for what 
                they are looking for. Furthermore, since the webpage relies on images, it presents
                a challenge for users with low vision making it difficult for them to process the page.
              </p>
            </div>
            <div class="image-content">
              <a href="https://www.in-n-out.com/menu#doubledouble">
                <img class="mockup" src={inout} alt="In-N-Out Menu"></img>
              </a>
            </div>
          </div>


          <section className="container-content">
            <h2 className="container-header">Features to be Implemented</h2>
            <p class="container-body">After observing the websites and seeing what works and what could use improving. Below is the list 
            of features that I would like to implement in my own web page:</p>

            <ul className="bullets">
              <li>Have the menu items be displayed with an image allong with their title</li>
              <li>Each item will contain a description of it on their card</li>
              <li>The prices will be displayed on every card</li>
              <li>The list of ingredients for each item are shown when the information icon is clicked</li>
              <li>Allow users to add an item to the cart with 1-click where they will be aggregated</li>
              <li>A detailed nutritional component is shown when a user clicks the information icon</li>
              <li>A list of allergens contained in the item is shown when a user clicks the information icon</li>
              <li>Have the user reviews for an item be visable on the card</li>
            </ul>
          </section>

          <section className="container-content">
            <h2 className="container-header">Final Product</h2>
            <p className="container-body">
            Below is the deployed page! <b>Click the image below to be taken to the webpage.</b> The 
            webpage I created is a menu for a restaurant that aims to merge aspects from each 
            website I've observed. To incorporate filtering, I implemented buttons on the toolbar. 
            Clicking these buttons will filter items based on allergen factors and their vegan status. 
            Clicking the buttons again will revert the view to its original state. For sorting, I 
            included two dropdown menu items: the first orders items by alphabetical order, price, or 
            rating, while the second determines whether the order is ascending or descending. There is 
            also a 'Reset All' button that when clicked, will revert the page to the original state. 
            Finally, as it's an online menu for a restaurant, there is an 'Add to Cart' button that when 
            clicked will add the desired item to an easily accessible and modifiable cart. When viewing 
            the cart, it will allow a user to add or subtract current items, proceed with their purchase, 
            or restart the process.
            </p>

            <a href="https://development-swart.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                class="mockup"
                src={development} 
                alt="Redesigned image"
              />
            </a>

          </section>


          <section className="container-content">
            <h2 className="container-header">Key Takeaways</h2>

            <ul className="takeaway-centered-bullets">
              <li><b>User experience is vital.</b> Throughout the project, I learned how important 
              the user experience in web design is by analyzing restaurant websites to learn what works well and 
              what doesn't in terms of organizing information, providing essential details, and allowing smooth 
              user interactions. By focusing on the user experience, I aimed to create an ordering process that 
              gave every type of user a seamless process.</li>

              <li><b>The importance of learning new libraries.</b>  For this project, I had to quickly learn and adapt to React and one 
                of its open-source libraries, Material UI. While learning React and its libraries was challenging 
                to me, it not only expanded my skill set but also allowed me to use the pre-built components and 
                design systems effectively to streamline the development processes.</li>
            </ul>
          </section>

         
        </div>
      );
};

export default DevelopmentProcessPage;
