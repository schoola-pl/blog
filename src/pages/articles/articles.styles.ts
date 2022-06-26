import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 10rem;
  overflow: hidden;
  border-radius: 1rem;
  margin: 2rem;

  @media (min-width: 500px) {
    padding: 15rem;
  }

  @media (min-width: 750px) {
    padding: 22rem;
  }
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

export const PhotoWrapper = styled.div`
  position: relative;
  height: 9rem;
  width: 9rem;
  border-radius: 5rem;
  overflow: hidden;
`;

export const AuthorWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;

  p {
    transform: translateY(-20%);
    padding: 0;
  }
`;
