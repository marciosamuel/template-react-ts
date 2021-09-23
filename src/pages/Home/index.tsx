import React from 'react';
import logo from '../../assets/img/logo.svg';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" aria-hidden />
        <h1>Hello dev!</h1>
        <p>Thank you for using my template.</p>
      </header>
    </div>
  );
};

export default Home;
