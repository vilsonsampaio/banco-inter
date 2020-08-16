import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Button from '../../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-height: 12rem;

    display: flex;

    > button:last-child {
      align-self: flex-end;

      max-width: 4rem;
      max-height: 4rem;

      width: 100%;
      height: 100%;

      margin-left: 2.4rem; 
      margin-bottom: 2.4rem; 
      padding: 0;

      background: ${transparentize(0.92, theme.colors.grey)};

      border-radius: 50%;

      svg {
        width: auto;
        height: 2.4rem;
      }
    }
  `}
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, minmax(10.4rem, 1fr));
  column-gap: 0.8rem;
`;

export const Card = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-width: 12rem;
    max-height: 12rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;

    background: ${theme.colors.background};
    color: ${theme.colors.grey};

    font-size: ${theme.fontSizes.default};

    border-radius: ${theme.radius.default};

    box-shadow: ${theme.shadows.default};

    div {
      max-width: 6.4rem;
      max-height: 6.4rem;

      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${theme.colors.lightGrey};

      border-radius: 50%;
    }
    
    svg {
      width: auto;
      height: 100%;
      
      max-height: 2.4rem;

      stroke: ${theme.colors.primary};
      
      stroke-width: 1.5;
    }

    :nth-child(2) {
      svg {
        stroke: none;
      }
    } 
  `}
`;