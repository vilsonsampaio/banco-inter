import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: ${({ theme }) => theme.spacing.large};

  > img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;