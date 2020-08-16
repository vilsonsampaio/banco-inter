import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Button from '../../../components/Button';


export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-width: 26.4rem;
    max-height: 60rem;  

    padding: 2.4rem;

    background: ${theme.colors.background};

    border-radius: ${theme.radius.default};

    box-shadow: ${theme.shadows.default};
  `}
`;

export const AmountInvested = styled(Button)`
  && {
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;

      width: 100%;

      margin: 0.8rem 0;

      background: linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);
      color: ${theme.colors.lightGrey};

      font-size: ${theme.fontSizes.small};

      :hover {
        transform: scale(1.005);
        box-shadow: 0 0.4rem 0.4rem ${transparentize(0.72, theme.colors.secondary)};
      }
    `};
  }
`;