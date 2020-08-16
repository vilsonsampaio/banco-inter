import styled, { css } from 'styled-components';

import Button from '../../../../components/Button';

export const Container = styled(Button)`
  && {
    ${({ theme }) => css`
      width: 100%;

      justify-content: flex-start;
      
      padding: 1.6rem 0;

      color: ${theme.colors.grey};

      font-size: ${theme.fontSizes.default};

      border-radius: 0;

      :not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGrey};
      }

      > div {
        :first-child {
          width: 3.2rem;
          height: 3.2rem;

          display: flex;
          justify-content: center;
          align-items: center;

          margin-right: 1.2rem;

          background: ${theme.colors.lightGrey};

          border-radius: 50%;
        }
      }

      
      > svg {
        margin-left: auto;
      }
    `}
  }
`;
