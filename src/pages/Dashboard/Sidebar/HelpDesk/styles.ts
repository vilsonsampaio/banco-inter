import styled, { css } from 'styled-components';

import { transparentize } from 'polished';

import { Container as ButtonContainer } from '../../../../components/Button/styles';


export const Container = styled.aside`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-top: 2.4rem;
    padding: 2rem 2.4rem;

    background: ${transparentize(0.92, theme.colors.grey)};

    border-radius: ${theme.radius.default};

    > img {
      width: 3.2rem;
      height: 3.2rem;

      margin-right: 0.8rem;
      
      background: ${theme.colors.background};
      
      border-radius: 50%;
    }

    > span {
      font-size: ${theme.fontSizes.small};
    }
  `}
`;

export const HelpButton = styled(ButtonContainer)`
  flex-grow: 0;

  margin-left: auto;
  padding: 0.8rem;

  border-radius: 50%;
`;