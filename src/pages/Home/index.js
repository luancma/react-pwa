import React, { useState, useEffect } from 'react';
import { FaBinoculars } from 'react-icons/fa';
import Axios from 'axios';
import { CardList } from './styles';
import useFetch from '../../hooks/useFetch';

export default function Home() {
  const random = () =>
    Axios.get('https://db.ygoprodeck.com/api/v5/randomcard.php');

  const { values: cardsDetails } = useFetch(random);

  return (
    <CardList>
      {cardsDetails.map(value => (
        <li key={value.id}>
          <div>
            <img src={value.card_images[0].image_url} alt="Tune Warrior" />
          </div>

          <span style={{ padding: '5px' }}>
            <strong>Name: </strong>
            <span>{value.name}</span>
          </span>

          <span style={{ padding: '5px' }}>
            <strong>Type: </strong>
            <span>{value.type}</span>
          </span>

          <span style={{ padding: '5px' }}>
            <strong>Description: </strong>
            <p>{value.desc}</p>
          </span>

          <button type="button">
            <div>
              <FaBinoculars size={26} color="#FFF" />
            </div>

            <span>View Details</span>
          </button>
        </li>
      ))}
    </CardList>
  );
}
