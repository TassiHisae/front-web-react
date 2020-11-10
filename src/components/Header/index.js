import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  const history = useHistory();
  return (
    <Container>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pacotes">Petshop</Link>
          </li>
        </ul>

        <button onClick={() => history.push('/Login')}>Entrar</button>
      </div>
    </Container>
  );
}

export default Header;
