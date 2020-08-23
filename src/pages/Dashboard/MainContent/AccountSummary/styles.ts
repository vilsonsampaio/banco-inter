import styled, { css } from 'styled-components';

import { Theme } from '../../../../styles/styled';

type HeaderType = {
  iconStroke?: boolean;
};

type DataValueType = {
  income?: boolean;
  outcome?: boolean;
};

type CustomTooltipType = {
  rightArrow?: boolean;
}

const getData = 
  (colors: Theme['colors'], { income, outcome }: DataValueType): string => {
    if (income) return colors.success;
    if (outcome) return colors.error;
    return colors.darkGrey;
  }
;


export const Container = styled.section`
  height: 100%;

  max-height: 17.6rem;
  
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 2.4rem;

  margin: 2.4rem 0;
`;

export const Card = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    
    max-width: 26.4rem;
    
    display: flex;
    flex-direction: column;
    
    padding: 1.6rem 2.4rem;
    
    background: ${theme.colors.background};
    
    border-radius: ${theme.radius.default};
    
    box-shadow: ${theme.shadows.flat};
  `}
`;

export const Header = styled.div<HeaderType>`
  ${({ theme, iconStroke }) => css`
    display: flex;
    justify-content: flex-start;

    margin-bottom: 0.8rem;

    > svg {
      width: auto;
      height: 1.6rem;

      margin-right: 0.8rem;

      stroke: ${iconStroke ? theme.colors.primary : 'none'};
    }

    > h3 {
      color: ${theme.colors.darkGrey};

      font-size: ${theme.fontSizes.small};
      font-weight: 400;
    }

    > button {
      margin: -0.8rem -1.6rem 0 auto;
      padding: 0.8rem 1.6rem;

      svg {
        stroke-width: 1.5;

        stroke: ${theme.colors.grey};
      }
    }
  `}
`;

export const DataWrapper = styled.div`
  flex: 1;
  
  width: 100%;

  display: flex;
  align-items: center;
  
  margin-top: auto;
`;

export const LeftData = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-width: 55%;
    max-height: 9.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 0.8rem;

    > img {
      width: auto;
      height: 8.4rem;
    }

    svg text {
      font-family: inherit !important;
      font-size: ${theme.fontSizes.tiny} !important;
      fill: ${theme.colors.grey} !important;
    }
  `}
`;

export const CustomTooltip = styled.div<CustomTooltipType>`
  ${({ theme, rightArrow }) => css`
    padding: 0.4rem 0.8rem;

    background: ${theme.colors.lightGrey};
    
    font-size: ${theme.fontSizes.tiny};
    
    border-radius: ${theme.radius.small};
    
    box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.28);

    text-align: center;
    
    :before {
      content: '';

      position: absolute;
      left: ${rightArrow ? `100%` : `50%`};
      bottom: -50%;

      height: 0;

      display: block;

      border-width: 0.8rem;
      border-style: solid;
      border-color: ${rightArrow
        ? `transparent transparent transparent ${theme.colors.lightGrey}`
        : `${theme.colors.lightGrey} transparent transparent
        transparent`
      };
      
      transform: ${rightArrow 
        ? `translate3d(0, -175%, 0)`
        : `translate3d(-50%, 25%, 0)`
      };
    }
    
    :after {
      content: '';

      display: block;
    }
  `}
`;

export const RightData = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};

    > span:not(:only-child):last-of-type {
      display: block;

      margin-top: 0.8rem;
    }
  `}
`;

export const DataValue = styled.div<DataValueType>`
  ${({ theme, income, outcome }) => css`
    color: ${getData(theme.colors, { income, outcome })};
  `}
`;