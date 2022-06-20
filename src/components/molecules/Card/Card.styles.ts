import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 33rem;
  width: 37rem;
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  margin-bottom: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const InfoSection = styled.div`
  height: 13rem;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    padding: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
