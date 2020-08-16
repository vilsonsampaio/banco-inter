import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;

  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 10.4rem;
  
  max-width: 113rem;

  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;

  > svg {
    max-width: 11.2rem;
    height: auto;

    margin-right: ${({ theme }) => theme.spacing.large};
  }

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`;

export const RightNav = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;