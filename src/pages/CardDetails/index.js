import React from 'react';

import { MdDelete } from 'react-icons/md';

import { Container, CardTable, Total } from './styles';

export default function index() {
  return (
    <Container>
      <CardTable>
        <thead>
          <tr>
            <th>IMG</th>
            <th>CARD NAME</th>
            <th>STARS</th>
            <th>ATK</th>
            <th>DEF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://storage.googleapis.com/ygoprodeck.com/pics/74093656.jpg"
                alt="Tune Warrior"
              />
            </td>
            <td>
              <span>Tune Warrior</span>
            </td>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>1600</span>
            </td>
            <td>
              <span>200</span>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="rgba(0, 0, 0, 0.8)" />
              </button>
            </td>
          </tr>
        </tbody>
      </CardTable>

      <footer>
        <button type="button">Salvar</button>

        <Total>
          <span>Total</span>
          <strong>xxx</strong>
        </Total>
      </footer>
    </Container>
  );
}
