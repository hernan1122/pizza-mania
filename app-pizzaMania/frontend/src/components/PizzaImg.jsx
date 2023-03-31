import React from 'react';
import '../styles/PizzaImg.css'

export function PizzaImg(props) {
  return (
    <article>
      <h4>{ props.title }</h4>
      <img src={ props.image } alt={ props.title } />
    </article>
  );
}
