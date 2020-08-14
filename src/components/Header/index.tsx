import React from 'react';

import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import { BancoInter } from '../../assets/images';
import { User } from './Header';

import { Container, Wrapper, LeftNav, RightNav } from './styles';


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
    </Container>
  );
}

export default Header;
