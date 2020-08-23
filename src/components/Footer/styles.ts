import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Wrapper as HeaderWrapper } from '../Header/styles'

type FooterSectionType = {
  background?: string;
}

export const Container = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSection = styled(Container)<FooterSectionType>`
  ${({ theme, background }) => css`
    background: ${background || transparentize(0.92, theme.colors.grey)};

    :last-of-type {
      ${Wrapper} {
        padding: 2.4rem 0;
      }
    }
  `}
`;

export const Wrapper = styled(HeaderWrapper)`
  ${({ theme }) => css`
    height: auto;
    
    align-items: center;

    padding: 1.6rem 0;

    h4 {
      color: ${theme.colors.secondary};

      font-size: ${theme.fontSizes.default};
    }

    span {
      display: block;

      font-size: ${theme.fontSizes.small};

      :first-of-type {
        margin-bottom: 0.8rem;
      }
    }

    > img {
      margin-top: 1.6rem;
    }
  `}
`;
