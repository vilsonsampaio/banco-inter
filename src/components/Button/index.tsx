import React from 'react';

import { ButtonProps } from './Button';

import { Container } from './styles';


const Button: React.FC<ButtonProps> = ({ children, variant, type, ...rest }) => {
  return (
    <Container type={type || 'button'} variant={variant} {...rest}>
      Simulador Renda Fixa
    </Container>
  );  
}

export default Button;
