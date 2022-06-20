import styled from 'styled-components';

export const Wrapper = styled.article`
  min-height: 30rem;
  width: 37rem;
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  margin-bottom: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.header`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    padding: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
