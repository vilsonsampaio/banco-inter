import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

const variants = {
  secondary: css`
    background: transparent;

    border: 0.1rem solid ${({ theme }) => theme.colors.secondary}
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2.4rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};

  border: 0;
  border-radius: 0.4rem;

  ${({ variant }) => variant 
    ? variants[variant]
    : '' 
  };
`;