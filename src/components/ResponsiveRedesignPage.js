import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import redesign from '../images/redesign.png';
import beauceron from '../images/beauceron.png';
import speed_sketch from '../images/speed-sketch.png'
import final_sketch from '../images/final-sketch.png'
import CustomCursor from './CustomCursor';
import "../styles.css";

const ResponsiveRedesignPage = () => {
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



          <h1 className="container-title">Responsive Redesign</h1>
    
          <section className="container-content">
            <h2 className="container-header">Introduction</h2>
            <p className="container-body">
              The goal for this project was to identify a webpage that was deficient
              in usability and accessibility standards so that I could improve upon 
              it. After browsing the internet, I found this page and knew that I had 
              to do it as I adore dogs. <b>Click on the image below in order to view the 
              webpage for the French National Club for the Beauceron breed.</b> This website
              is dedicated to the Beauceron dog breed as it provides not only insightful
              information about the breed and where you can adopt them, but also 
              shares how the club hosts competitions and exhibitions as well. I 
              chose this website because of how the text is cluttered with little 
              to no structure and because of how busy it is with its color choices 
              and repeating background images.
            </p>

            <a href="https://amisdubeauceron.org/club/club-presentation.html" target="_blank" rel="noopener noreferrer">
            <img 
              className="mockup"
              src={beauceron} 
              alt="Original Beauceron Webpage"
            />
          </a>
          </section>
          

          <section className="container-content">
            <h2 className="container-header">Problem Context</h2>
            <p className="container-body">
              The National Club's webpage presents significant challenges that are 
              hurdles for a user to have a good experience with the webpage. This can
              be attributed to the page's lack of <b>learnability, memorability, and efficiency</b>. 
            </p>
            
            <ul className='responsive-bullets'>
                <li className='responsive-bullets'><b>Learnability:</b> New users are likely to find the layout overwhelming
                because it has multiple columns and sections along with a high density of 
                text and images that lack a clear visual hierarchy and consistent formatting. 
                This makes it difficult for them to quickly discern important information. </li>

                <li className='responsive-bullets'><b>Memorability:</b> Casual users may also struggle with the page's 
                memorability as the non-intuitive design requires a user to relearn the 
                interface upon each visit. This can be seen through the absence of logically 
                arranged links and text, which makes it hard to recall the location of specific 
                information. </li>

                <li className='responsive-bullets'><b>Efficiency:</b> The efficiency of the site is compromised by the use of various text 
                colors to differentiate links, section titles, and dividers, with some overlap 
                in color usage. This, combined with an abundance of links and lists forces even 
                experienced users to tediously navigate through the content for what should be 
                straightforward tasks. </li>

            </ul>

          </section>

          <section className="container-content">
            <h2 className="container-header">Accessibility Issues</h2>
            <p className="container-body">
              Using WebAim Wave, I identified several critical accessibility issues:
            </p>
            <ul className="centered-bullets">
              <li><b>Lack of Heading Structure:</b> Absence of structured headings hindered
                    navigation for users relying on assistive technologies.</li>

              <li><b>Missing Alt Text for Images:</b> Without alt text, visually impaired
                    users received no information about key visual content.</li>

              <li><b>Poor Color Contrast:</b> The use of red text to highlight important
                    information failed to accommodate users with color perception challenges.</li>
            </ul>
          </section>

          <section className="container-content">
            <h2 className="container-header">Redesign Process</h2>
            <h3 className="container-header3">Sketches</h3>
            <p className="container-body">
            To improve the user experience, I began my redesign by taking nine minutes 
            to create nine different sketches (using one minute per sketch) so that I could 
            come up with a wide variety of ideas. Once I was finished with the sketches, 
            I created a final sketch that incorporated my favorite ideas from the previous 
            exercise which would serve as the groundwork for my redesign.
            </p>
            <div className="sketches-container">
              <img 
                className="RRmockup"
                src={speed_sketch} 
                alt="Speed Sketch Image"
              />
              <img 
                className="RRmockup"
                src={final_sketch} 
                alt="Final Sketch Image"
              />
            </div>


            <h3 className="container-header3">Lo-Fi Mockups</h3>
              <p>
                With the Lo-Fi mockup, I wanted to address some of the shortcomings of the original webpage. 
                This can be seen with the menu bar at the top which would remove a lot of the clutter, an icon 
                to hide the menu bar to accommodate different screensizes, and a very clear visual heirarchy. 
              </p>
            <div className="figma-embed-row">
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTgNqGwdQ4COa3sAVhnumqj%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dgh0F4fjjs8fcoTy4-1"
                allowFullScreen
                alt="lofi phone mockup"></iframe>                
              </div>
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9heHooAeF9juHRExZmPeJs%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DES9i89zHgNvawsfz-1"
                allowFullScreen
                alt="lofi tablet mockup"></iframe>                
              </div>
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fhcbg02nvjBLHnj93VRFVWG%2FUntitled%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dxn9FqQXaynRDjE3L-1"
                allowFullScreen
                alt="lofi laptop mockup"></iframe>                
              </div>
            </div>
          </section>

          <section className="container-content">
            <h3 className="container-header3">Hi-Fi Mockups</h3>
              <p className="container-body">
                Transitioning to the Hi-Fi mockup, I made the following changes:
              </p>
                <ul className="takeaway-centered-bullets">
                <li>Included a subtitle in the main section which was important 
                  so that people knew the purpose of the page. </li>

                <li>I moved the sister organizations from the column with all 
                  of the links into the body in a card format since the original 
                  long list with the moving graphics created extra clutter. </li>

                <li>Added a menu and quick scroll icons that took the place of the 
                  menu bar and quick scroll links respectively when the screen size 
                  became too small.</li>

                <li>The other major change I made to make the page more accessible to 
                  different screens was to make the cards and flags become side scrollable 
                  items to increase efficiency. </li>
              </ul>
            <div className="figma-embed-row">
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdeTek0y0l6pveo2X8qhMtv%2FHigh-fi-Website%3Ftype%3Ddesign%26node-id%3D173%253A1527%26mode%3Ddesign%26t%3DUteUftAx4KBLoeI8-1"
                allowFullScreen
                alt="hifi phone mockup"></iframe>                
              </div>
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdeTek0y0l6pveo2X8qhMtv%2FHigh-fi-Website%3Ftype%3Ddesign%26node-id%3D164%253A1307%26mode%3Ddesign%26t%3DUteUftAx4KBLoeI8-1"
                allowFullScreen
                alt="hifi tablet mockup"></iframe>                
              </div>
              <div className="figma-embed-container">
                <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="350" height="450" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdeTek0y0l6pveo2X8qhMtv%2FHigh-fi-Website%3Ftype%3Ddesign%26node-id%3D1%253A2%26mode%3Ddesign%26t%3DUteUftAx4KBLoeI8-1"
                allowFullScreen
                alt="hifi laptop mockup"></iframe>                
              </div>
            </div>
          </section>

          <section className="container-content">
            <h2 className="container-header">Final Product</h2>
            <p className="container-body">
            Below is my final redesign! <b>The deployed website can be accessed by 
            clicking on the image below.</b> The notable change from the high fidelity
             mockup is that I removed the quickscroll menu when using a mobile 
             device such as a phone or tablet. I made this decision because when 
             I was testing the page on my phone, I found that the screen was too
              cluttered. Accessibility-wise, I made some slight variations to 
              further improve my webpage. The first of which was to change the 
              menu bar so that the background was black to make it easier to read
               the items. The next change I made was to use clickable buttons 
               instead of hyperlinks in the main body of the page. The last of 
               the accessibility modifications was to add external ink icons to 
               the flags and cards which would let a user know that they are clickable.
            </p>


            <a href="https://matthewmurakami.github.io/ResponsiveRedesign/" target="_blank" rel="noopener noreferrer">
              <img
                class="mockup"
                src={redesign} 
                alt="Redesigned webpage"
              />
          </a>
            
          </section>




          

          
          <section className="container-content">
            <h2 className="container-header">Key Takeaways</h2>

            <ul className="takeaway-centered-bullets">
              <li><b>Don't be too attached to your design.</b> While I was implementing
                     my webpage, there were design elements that I thought would be good
                     but ended up not being practical for the goals that I was trying to 
                     achieve and so I learned that the design process is constantly 
                     happening and that I must adapt as issues come along.</li>

              <li><b>Replicating the design system to redesign a webpage from scratch is
                     a fun challenge!</b> While I have worked on html projects in the past,
                     I never had to go through the design process which was great as I learned 
                     how to leverage applications like Figma and use more complicated CSS techniques.</li>
            </ul>
          </section>
        </div>
      );
};

export default ResponsiveRedesignPage;
