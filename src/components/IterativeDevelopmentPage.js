import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import redesign from '../images/redesign.png';
import sketches from '../images/it_sketch.png' 
import CustomCursor from './CustomCursor';
import final_iter from '../images/final_iter.png'
import iter1 from '../images/iter1.png'
import iter2 from '../images/iter2.png'

import "../styles.css";

const IterativeDevelopmentPage = () => {
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



          <h1 className="container-title">Iterative Design</h1>
    
          <section className="container-content">
            <h2 className="container-header">Introduction</h2>
            <p className="container-body">
            The goal of this assignment is to create a mobile app for Fonda technologies 
            that will empower business owners with real-time insights into their finances, 
            sales, and expenses. Instead of operating blindly and waiting for an 
            accountant to review their finances, our goal is to provide them with 
            immediate visibility and control over their financial data. Another important 
            aspect of this project was that we were able to experience real iteration where
            we would meet with the company's founder to get feedback on our design. This was also
            a group project where every step of the process besides the initial sketches were completed 
            by collaborating as team.
            </p>
          </section>



          <section className="container-content">
            <h2 className="container-header">Features to implement</h2>
              
            <ul className="it-bullets">
              <li>Real-Time Balance and Transaction Overview</li>
              <li>Statement Management</li>
              <li>Payee Management</li>
              <li>Seamless Money Transfers</li>
              <li>Detailed Account Information</li>
              <li>User-Friendly Interface</li>
              <li>Security and Compliance</li>
            </ul>
          </section>

          <h2 class="container-header" >Initial Sketches</h2>
          <div class="content-container">
            <div class="text-content">
              <p>
                When creating the initial sketches for the Mi Fonda Wallet app, 
                my goal was to design a user interface that would make information 
                easily accessible and viewable at a glance. This was crucial because 
                people in the restaurant business are always busy, and quick access 
                to information can streamline their decision-making process in day-to-day 
                tasks. To achieve this, I aimed to create a main dashboard page displaying 
                the user’s balance and important information below it, complemented by 
                either a donut graph for a breakdown of income or large navigable icons 
                to allow quick retrieval of specific information.
              </p>
            </div>
            <div class="image-content">
              <img class="mockup" src={sketches} alt="Initial Sketches"></img>
            </div>
          </div>

          <section className="container-content">
            <h2 className="container-header">First Iteration Wireframe</h2>
            <p className="container-body">
              From left to right, we have: home dashboard, full list of transactions, 
              and account details. Our first wireframes were an amalgamation of the sketches we all drew 
              and are common goal was to keep things simple and modern. The dashboard is supposed to be an
              “at a glance” view of the account. It displays the balance as well as a donut graph to show different 
              expenses. We later found out that this was not conducive of how a restaurant functions, so 
              we were forced to re-evaluate down the road. Our transactions page had another graph on it, 
              but we were not sure at this point what type of graph it would be. We knew we wanted to display 
              both the revenue and expenses and decided later on to use a bar graph. Finally, our account info 
              screen had space for us to add multiple different buttons in three categories, Personal, Security, 
              and Other. We wanted to keep this simple again since there is no need to complicate this crucial 
              aspect to the apps functionality.
            </p>

            <div class="image-content">
              <img class="mockup1" src={iter1} alt="Iteration 1"></img>
            </div>
          </section>

          <section className="container-content">
            <h2 className="container-header">Critique & Feedback</h2>
            <p className="container-body">
              <b>In a critique from peers in our clas we recieved the following feedback:</b>
            </p>
              
              <ul className="takeaway-centered-bullets">
                <li> To improve visual representation and understanding, it was recommended to 
                incorporate a bar chart, which could help restaurant owners better visualize financial data over 
                time. </li>

                <li> The use of more contrasting colors and distinct categories was suggested to make the information 
                more accessible and easier to differentiate at a glance.</li>

                <li> There was confusion regarding the function of the 
                donut chart, specifically whether it was indicating an addition or subtraction from the balance, pointing to 
                a need for clearer visual cues or labels. </li>

                <li> Clarity was also needed on how recent transactions are grouped, especially when they fall into the 
                same category, to facilitate quicker insights into spending patterns.  </li>
              </ul>   
                            
            <p className="container-body">
              <b>During a critique session with Professor Talie the following feedback was provide:</b>
            </p>
            <ul className="takeaway-centered-bullets">
                <li> She questioned about the app's unique selling points which differentiated from other apps particularly 
                      in terms of data utilization.</li>

                <li> She mentioned that the app should offer more in the way of aggregate statistics, providing more comprehensive 
                  insights into overall business performance, seasonal trends, and customer preferences.</li>
            </ul>   
            
            </section>

          <section className="container-content">
            <h2 className="container-header">Second Iteration Wireframe</h2>
            <p className="container-body">
              From left to right, we have: the login page, home dashboard, full list of transactions, account 
              details, list of payees, and a send money screen. On the second iteration of our wireframe, we took 
              into account the feedback of the founders, our fellow classmates, and our professor to improve our 
              design. From the feeback we made the following changes: </p>

              <ul className="takeaway-centered-bullets">
                <li> We removed the categorization of transactions as well as the donut as recommended by both Fonda 
                  and students as it wasn't clear whether or not the donut was showing income, expenses, or both and the categorization added confusion. </li>

                <li>We placed a small progress bar that would show how much money is left for a 
                    particular budget that the user determines for themselves.</li>

                <li> On the transactions page, we removed the button style for each transaction in favor of a unified background 
                     to also make the page more visually appealing as suggested by Fonda. </li>

                <li> Students mentioned that our navbar looked cluttered and so we removed the text for each item and improved the icon 
                     to make it more descriptive of where it would navigate to.  </li>
                
                <li>To address our Professor who suggested that we had a key selling feature, we redesigned our donut so 
                    that it only showed the different sources of income and if a user tapped on the donut, it would give the 
                    dollar amount for the source of income and would automatically filter the transactions list to show only 
                    income from that source making it more intuitive. </li>

              </ul>   
              


            <div class="image-content">
              <img class="mockup" src={iter2} alt="Iteration 2"></img>
            </div>

          </section>

          <section className="container-content">
            <h2 className="container-header">High Fidelity Prototype</h2>
            <p className="container-body">
              Our high fidelity prototype included a login screen, a home dashboard, a transaction 
              screen, a transaction details popup, a payee contact book, the send screen, a confirm 
              send screen, a payment method popup, and an account info page. Throughout the design 
              we used the Roboto font which aligned with the style guide given to us by Fonda. We 
              utilized the different heading and body text sizes to emphasize more important points, 
              such as the balance on the dashboard or the day of the week in transactions. We also 
              made sure to change our design to emphasize contrast of colors, since part of our feedback 
              was changing the transactions to have a light background instead of dark. We were able 
              to keep all things aligned properly using the grid functionality of figma and left adequate 
              spacing and white space to reduce clutter and keep that modern/simple flow.
            </p>
            
          </section>


          <div className="figma-content">
            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsmFDW40G2ZJQMbwjVZpp9M%2FFonda-Wallet%3Ftype%3Ddesign%26node-id%3D135-917%26t%3DXGIhyIlh5jY0Ahjf-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D135%253A917%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen=""></iframe>
          </div>


          <section className="container-content">
            <h2 className="container-header">Founder Feedback on Final Design</h2>
            <p className="container-body">
              During the final meeting with the founder of Fonda, we discussed several aspects of the app's design and functionality.
              From this meeting we recieved the following feedback:</p>

              <ul className="takeaway-centered-bullets">
                <li> The login feature was well-received, but it was noted that a sign-up option is 
              currently missing and should be included. Additionally, integrating biometric 
              verification such as face recognition could significantly enhance security and user 
              convenience. </li>

                <li> The dashboard's "budget" line was found to be not very intuitive; 
              renaming it to "goal" might better communicate its purpose, especially in the context 
              of managing restaurant finances.</li>

                <li> In the transactions section, it was suggested that 
              including dates would be beneficial, and changing the display from monthly to weekly 
              would allow restaurant owners to better observe spending trends and manage budgets more 
              effectively. This could be further supported by a swipe-through feature for different 
              views, allowing easier navigation and comparison.  </li>
                
                <li>The need for more robust analytical 
              tools was emphasized to help users gain deeper insights into their financial patterns 
              and make informed decisions.</li>

              <li> Finally, safety features were briefly discussed, highlighting 
              the importance of further enhancing this aspect in future updates to ensure the security 
              of sensitive financial data. </li>
              </ul>   
           
          </section>

          <section className="container-content">
            <h2 className="container-header">Final Design</h2>

            <p class="container-body"> 
              <b>Below is our final design.</b> After recieving the constructive critism, we were able to make one last adjustment to get a final design.
                This design addressed every point of critism starting with the login where we added biometric options in
                the form a button. We then changed the budget section so that it was now a goal and could be set by the user.
                The largest changes in this version where in the transactions section we added a side-scrollable bar chart
                that would let a user see historical data and could also set the time increments as well. As for the analytical
                tools, we added a feature where a user could tap on a portion of the donut and see a breakdown of its statistics.
            </p>


            <div class="image-content">
              

              <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCvvfY7hp6A7Pkigql30wRu%2FUntitled%3Ftype%3Ddesign%26node-id%3D1%253A8156%26mode%3Ddesign%26t%3DrrKEzHJrPnEdTn6X-1" allowfullscreen></iframe>
            </div>
          </section>

          
          <section className="container-content">
            <h2 className="container-header">Key Takeaways</h2>

            <ul className="takeaway-centered-bullets">
              <li><b>Lorem Ipsum.</b> .......</li>

              <li><b>Lorem Ipsum.</b> .......</li>
            </ul>
          </section>
        </div>
      );
};

export default IterativeDevelopmentPage;
