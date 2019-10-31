import React from 'react';
import { Link } from 'react-router-dom';
import { GiCardBurn } from 'react-icons/gi';
import { Container, Deck } from './styles';
import logo from '../../assets/images/logo.png';

export default function index() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Yu-gi-oh" />
      </Link>

      <Deck to="/details">
        <div>
          <strong>My deck</strong>
          <span>x cards</span>
        </div>
        <GiCardBurn size={36} color="#FFF" />
      </Deck>
    </Container>
  );
}
