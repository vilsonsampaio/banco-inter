import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';

import { Container, HelpButton } from './styles';


const HelpDesk: React.FC = () => {
  return (
    <Container>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />

      <span>
        Olá, Vilson. 
        <br /> Posso Ajudar?
      </span>

      <HelpButton>
        <FiArrowRight size={24} />
      </HelpButton>
    </Container>
  );
}

export default HelpDesk;