import React from 'react';

import { User } from './Header';

import Button from '../Button';
import AccountDropdown from './AccountDropdown';

import { BancoInter } from '../../assets/images';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import Gradient from './Gradient';


const Header: React.FC = () => {
  const user: User = { name: 'Vilson Sampaio' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter /> 
          Internet Banking
        </LeftNav>

        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>

          <AccountDropdown user={user} />
        </RightNav> 
      </Wrapper>
      
      <Gradient />
    </Container>
  );
}

export default Header;
