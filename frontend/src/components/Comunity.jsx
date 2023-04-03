import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Comunity.css';

//icons
import { GiFullPizza } from 'react-icons/gi'

export function Comunity() {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/comunity')
      .then(res => {
        setCommunityData(res.data.data);
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='Comunity'>
      <Link className='btn-home' to='/home'>Home</Link>
      <h1>
        <GiFullPizza className='pizza-icon' />
        <h6 className='title'>Comunity</h6>
      </h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {communityData.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
