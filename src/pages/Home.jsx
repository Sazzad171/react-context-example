import React, { useContext } from 'react';
import Section from './Section';
// context
import ColorContext from '../context/ColorContext';

export default function Home() {
  return (
    <div>
      <h3>Home component</h3>
      <Section />
    </div>
  )
}
