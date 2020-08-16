import styled, { css } from 'styled-components';

import { Container as Button } from '../../../../components/Button/styles';


export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 7.2rem;

    padding: 1.6rem 0 1.6rem 2.4rem;

    background: ${theme.colors.lightGrey};

    border-radius: ${theme.radius.small};

    svg {
      stroke-width: 1.5;
    }

    ${Button} {
      &:hover {
        svg {
          transform: scale(1.02);
          stroke-width: 1.8;
        }
      }
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    flex: 1;
    
    > span {
      display: block;
      
      font-size: ${theme.fontSizes.small};

      :last-child {
        height: 2rem;
        
        max-width: 10rem;

        margin: 0.2rem 0;

        background: ${theme.colors.grey}b3;

        border-radius: ${theme.radius.tiny};
      }
    }

    > strong {
      margin-left: 0.4rem;

      color: ${theme.colors.darkGrey};
    }
  `}
`;

