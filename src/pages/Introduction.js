import React from 'react';
import Button from '../components/Button';
import './Introduction.css';

export default function Introduction(props) {
  return (
    <main className="introduction">
      <h1 className="title">Click The Number!</h1>
      <h2 className="subtitle">As fast as possible, click the numbers in ascending order.</h2>
      <Button onClick={props.startGame}>Start Game.</Button>
    </main>
  );
}

Introduction.propTypes = {
  startGame: React.PropTypes.func,
};
