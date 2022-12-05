import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="title-container">
          <h2 className="home-title">Flash Cards</h2>
          <h3>Create flash cards as a study aid!</h3>
        </div>
        <Link
          to="edit"
          className="home-nav-link"
        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Get Started
        </Link>

      </div>
      <Footer />
    </>
  );
};

export default Home;
