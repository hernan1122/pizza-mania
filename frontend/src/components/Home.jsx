import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PizzaImg } from './PizzaImg';
import '../styles/Home.css';

//icons
import { GiFullPizza } from 'react-icons/gi'

//images
import pizzaMargarita from '../images/Pizza-margherita.jpg'
import pizzaArgentina from '../images/pizza-argentina.jpg'
import pizzaJamonRucula from '../images/pizza-jamon.jpg'
import pizzaNapolitana from '../images/pizza-napolitana.jpg'
import pizza4Quesos from '../images/pizza-cuatro-quesos.avif'
import pizzaChampiñones from '../images/pizza-champiñones.jpg'
import pizza4Estaciones from '../images/Pizza-cuatro-estaciones.avif'
import pizzaMariana from '../images/pizza-marinara.jpg'
import pizzaFugazza from '../images/pizza-fugazza.webp'
import pizzaHawaiana from '../images/pizza-hawaiana.jpg'
import pizzaNeoyorquina from '../images/pizza-neoyorquina.jpeg'
import pizzaBarbacoa from '../images/pizza-barbacoa.jpg'

const pizza = [
  {
    title: 'Margarita pizza',
    image: `${pizzaMargarita}`
  },
  {
    title: 'Argentinian pizza',
    image: `${pizzaArgentina}`
  },
  {
    title: 'Ham and Arugula pizza',
    image: `${pizzaJamonRucula}`
  },
  {
    title: 'Neapolitan pizza',
    image: `${pizzaNapolitana}`
  },
  {
    title: 'Four cheese pizza',
    image:`${pizza4Quesos}`
  },
  {
    title: 'Mushroom pizza',
    image:`${pizzaChampiñones}`
  },
  {
    title: 'Four Seasons pizza',
    image:`${pizza4Estaciones}`
  },
  {
    title: 'Mariana pizza',
    image:`${pizzaMariana}`
  },
  {
    title: 'Fugazzetta pizza',
    image:`${pizzaFugazza}`
  },
  {
    title: 'Hawaiian pizza',
    image:`${pizzaHawaiana}`
  },
  {
    title: 'New York pizza',
    image:`${pizzaNeoyorquina}`
  },
  {
    title: 'Barbecue pizza',
    image:`${pizzaBarbacoa}`
  }
]

export function Home() {
  return (
    <div className='Home'>
      <Link className='btn-log-out' to='/'>Log out</Link>
      <Link className='btn-comunity' to='/comunity'>Community</Link>
      <h1>
        <GiFullPizza className='pizza-icon' />
        <h6 className='title'>Pizza Mania</h6>
      </h1>
      <h3>Images of the best known pizzas in the world.</h3>
      <div className='Home-container-pizza'>
        {
          pizza.map(({title, image}) => {
            return (
              <PizzaImg
                key={title}
                title={title}
                image={image}
              />
            )
          })
        }
      </div>
    </div>
  );
}
