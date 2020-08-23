import styled, { css } from 'styled-components';

import { Container as ButtonContainer } from '../../../../components/Button/styles';

import ButtonBackground from '../../../../assets/images/illustrations/button-background.svg'

import { Navigation, Card } from '../NavigationCards/styles';


export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    
    max-height: 34.2rem;

    padding: 2.4rem;

    background: ${theme.colors.background};

    border-radius: ${theme.radius.default};

    box-shadow: ${theme.shadows.flat};

    > div {
      display: flex;
      justify-content: space-between;

      + div {
        height: 100%;

        margin-top: 2.4rem;
      }
    } 
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    flex: 1 0 100%;

    width: 100%;

    max-width: 35.2rem;

    justify-content: space-between;

    padding: 1.6rem 2.4rem;

    border-radius: ${theme.radius.default};

    svg:first-of-type {
      margin-left: 1.6rem;
    }

    > div {
      width: 100%;

      max-width: 12rem;

      margin-left: -4rem;

      color: ${theme.colors.grey};

      font-size: ${theme.fontSizes.small};

      text-align: left;

      > h3 {
        color: ${theme.colors.darkGrey};

        font-size: ${theme.fontSizes.large};
      }
    }
  `}
`;

export const Products = styled(Navigation)`
  flex-grow: 0;

  grid-template-columns: repeat(5, minmax(6.4rem, 1fr));
  
  margin: 0 -0.8rem 0 0.8rem;
`;

export const ProductCard = styled(Card)`
  ${({ theme }) => css`
    padding: 0;

    background: none;
    
    font-size: ${theme.fontSizes.small};
    
    box-shadow: none;

    > div {
      margin-bottom: auto;
    
      svg {
        stroke: none;
        
        path {
          fill: ${theme.colors.secondary} !important;
        }
      }
    }

    :nth-child(3) {
      > div {
        svg {
          margin: -0.4rem 0 0 -0.5rem;
        }
      }
    }
  `}
`;

export const EquitySection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-width: 38.4rem;
    max-height: 18.4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 1.6rem 2.4rem;

    background: url(${ButtonBackground}), ${theme.colors.primaryDark};
    color: ${theme.colors.yellow};

    border-radius: ${theme.radius.default};
    
    > h3 {
      font-size: ${theme.fontSizes.large};
    }

    > div {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      > ul {
        color: ${theme.colors.background};
        
        li {
          display: flex;
          align-items: center;

          svg {
            flex-grow: 0;

            margin-right: 0.8rem;
            
            stroke-width: 1.5;
          }
        }
      }

      > button {
        padding: 0.8rem 1.6rem;

        font-size: ${theme.fontSizes.small};
        font-weight: 700;
      }
    }
  `}
`;

export const LoanSection = styled(EquitySection)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    > h3 {
      text-align: left;

      > span {
        display: block;

        color: ${theme.colors.background};

        font-weight: 300;
      }
    }

    > div {
      > ul {
        li {
          align-items: flex-start;

          svg {
            margin-top: 0.3rem;
          }

          span {
            max-width: 12rem;
          }
        }
      }
    }
  `}
`;
