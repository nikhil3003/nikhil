import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx';
import News from './News.jsx';
import Quote from './Quote.jsx';
import Fitness from './Fitness.jsx';
import Userinput from './Userinput.jsx'
import Workoutsuggestions from './Workoutsuggestions.jsx';
import PersonalizedDiet from './PersonalizedDiet.jsx';
import MovieRecommendations from './MovieRecommendations.jsx';
import Loading from './Loading.jsx';
import Wrecom from './Wrecom.jsx'
import Footer from './Footer.jsx'
import Login from './login.jsx'


const articles = [
  { title: "New Fitness Trends", content: "Explore the latest trends in fitness." },
  { title: "Healthy Eating Tips", content: "Tips for a balanced diet." },
];

const quoteData = {
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
};

const suggestions = [
  {name:'Nothing', description:'nothing'}
]

function App() {
  return (
    <Router basename="/nikhil">
      <Routes>
        <Route path="/" element={<><Navbar/><Fitness/><Welcome/><News articles={articles}/><Quote quote={quoteData.quote} author={quoteData.author}/><Footer/></>} />
        <Route path="/fitness" element={<><Navbar/><Userinput/><Wrecom/><Footer/></>} />
        <Route path="/nutrition-plans" element={<><Navbar/><Welcome/><PersonalizedDiet/><Footer/></>} />
        <Route path="/movie-recommendations" element={<><Navbar/><MovieRecommendations/><Footer/></>}/>
        <Route path="/community" element={<><Navbar/><Loading/><Footer/></>} />
        <Route path="/profile" element={<><Navbar/><Login/><Footer/></>} />
      </Routes>
    </Router>
  );
}

export default App;

