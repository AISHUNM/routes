import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
// import page3Animation from './page3-animation.jpg'; 

const Home = () => (
  <div className="page">
    <h1 className="page-title">Home Page</h1>
    <div className="flex-container">
      <Link to="/page1" className="back-link">
         ABOUT ME      </Link>
      <Link to="/page2" className="back-link">
         HOBBIES
      </Link>
      <Link to="/page3" className="back-link">
        PROJECTS
      </Link>
      <Link to="/page4" className="back-link">
        CERTIFICATIONS
      </Link>
    </div>
  </div>
);

const Page1 = () => (
  <div>
    <h1>ABOUT ME</h1>
    <p>
    "Hello there! I'm Aishwarya NM, currently in my third year at Kumaraguru College of Technology, where I'm pursuing an exciting and dynamic course in Artificial Intelligence and Data Science. My journey in this field has been a fascinating exploration of the intersection between cutting-edge technology and data-driven insights.
Throughout my studies, I've delved into a wide range of topics, from machine learning algorithms to data analysis techniques. This hands-on experience has equipped me with the skills to harness the power of data for informed decision-making and problem-solving. I am particularly intrigued by the potential of AI to revolutionize industries and improve lives on a global scale.
In addition to my academic pursuits, I'm an avid [mention a relevant interest or hobby], which further fuels my creativity and analytical thinking. As I progress in my studies, I'm excited to leverage my knowledge and skills to contribute meaningfully to the world of Artificial Intelligence and Data Science, whether through research, innovation, or real-world applications.
Thank you for taking the time to get to know me a little better. I'm enthusiastic about the opportunities that lie ahead and am committed to making a positive impact in this rapidly evolving field."

    </p>
    
   
    <div className="flex-container">
      <Link to="/" className="back-link">
        HOME PAGE
      </Link>
      <Link to="/page2" className="back-link">
        HOBBIES
      </Link>
      <Link to="/page3" className="back-link">PROJECTS</Link>
      <Link to="/page4" className="back-link">CERTIFICATIONS</Link>

    </div>
  </div>
);

const Page2 = () => (
  <div>
    <h1>HOBBIES</h1>
    <p>
    In my free time, I engage in a diverse range of hobbies that enrich both my creativity and relaxation. 
    One of my greatest passions is cooking, where I experiment with flavors and techniques to create delicious and satisfying meals. 
    Reading books transports me to different worlds and perspectives, allowing me to immerse myself in captivating stories and expand my knowledge. Baking is another avenue through which I channel my creativity, crafting intricate pastries and confections that delight both the eyes and the taste buds. Sports keep me active and energized, providing a healthy outlet for physical and mental well-being. Additionally, I cherish quality moments spent with my feline companions, as their presence brings joy and tranquility to my life. These hobbies collectively shape a well-rounded and fulfilling lifestyle that nurtures my mind, body, and soul.
    </p>


   

    <div className="flex-container">
      <Link to="/" className="back-link">
        HOME PAGE
      </Link>
      <Link to="/page1" className="back-link">
        ABOUT ME
      </Link>
      <Link to="/page3" className="back-link">PROJECTS</Link>
      <Link to="/page4"className="back-link">CERTIFICATIONS</Link>

    </div>
  </div>
);

const Page3 = () => (
  <div>
    <h1>PROJECTS</h1>
    <p>
    <ol>Here are some projects that I have done.
      <li> Sentiment Analysis for Product Reviews</li>
      <li> Fake News Detection</li>
      <li> Healthcare Analytics</li>

      </ol>
    </p>
    
  
    <div className="flex-container">
      <Link to="/" className="back-link">
        HOME PAGE
      </Link>
      <Link to="/page1" className="back-link">ABOUT ME</Link>

      <Link to="/page2" className="back-link">
      HOBBIES
      </Link>
      <Link to="/page4" className="back-link">CERTIFICATIONS</Link>

    </div>
  </div>
);

const Page4 = () => (
  <div>
    <h1>CERTIFICATIONS</h1>
    <ul>
      <li>Python Course </li>
      <li>Machine learning fundamentals</li>
      <li>Fundamentals of javascript</li>
      <li>Java Course</li>
    </ul>

    <div className="flex-container">
      <Link to="/" className="back-link">
        HOME PAGE
      </Link>
      <Link to="/page1" className="back-link">ABOUT ME</Link>

      <Link to="/page2" className="back-link">
       HOBBIES
      </Link>
      <Link to="/page3" className="back-link">PROJECTS</Link>

    </div>
  </div>
);

function App() {
  return (
    <Router>
  
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} /> 
          </Routes>
        </div>
    </Router>
  );
}


export default App;