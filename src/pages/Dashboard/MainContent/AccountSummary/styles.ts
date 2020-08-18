import styled, { css } from 'styled-components';

import { Theme } from '../../../../styles/styled';

type HeaderType = {
  iconStroke?: boolean;
};

type DataValueType = {
  income?: boolean;
  outcome?: boolean;
};

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
    
    box-shadow: ${theme.shadows.default};
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
  width: 100%;

  max-width: 55%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-right: 0.8rem;

  > img {
    width: auto;
    height: 8.4rem;
  }
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

    font-size: ${theme.fontSizes.default};
  `}
`;