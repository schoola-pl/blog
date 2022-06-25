import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 12rem;
  overflow: hidden;
  border-radius: 1rem;
  margin: 2rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 2rem 2rem 2rem;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  border: 1px solid black;
  border-radius: 5rem;
  overflow: hidden;
`;
