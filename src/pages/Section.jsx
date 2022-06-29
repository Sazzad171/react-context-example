import React, { useContext } from 'react';
// context
import ColorContext from '../context/ColorContext';

export default function Section() {

  // use context
  const colorValue = useContext(ColorContext);
  
  return (
    <h1 style={{ color: colorValue }}>Section</h1>
  )
}