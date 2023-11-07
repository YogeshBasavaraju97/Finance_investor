import React from 'react';
import { Link } from 'react-router-dom';
import hero from './hero.png';
import './Hero.css';

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="">
        <div className="f">
          <h1 className="">Financial data with no news.</h1>
          <p className="">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="">
            <Link to="/search" className="">
              Get Started
            </Link>
          </div>
        </div>
        <div className="">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
