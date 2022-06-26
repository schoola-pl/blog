import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    margin: 10vh 5rem 5rem 5rem;
  }

  @media (min-width: 1500px) {
    margin: 12vh 20rem 5rem 20rem;
  }
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
    padding: 20rem;
  }

  @media (min-width: 1000px) {
    padding: 28rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 2rem 2rem 2rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    @media (min-width: 700px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  height: 9rem;
  width: 9rem;
  border-radius: 100%;
  overflow: hidden;

  @media (min-width: 600px) {
    height: 11rem;
    width: 11rem;
    border-radius: 100%;
  }

  @media (min-width: 1000px) {
    height: 15rem;
    width: 15rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-content: center;

  p {
    transform: translateY(-20%);
    padding: 0;

    @media (min-width: 1000px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    @media (min-width: 1000px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  @media (min-width: 500px) {
    width: 75%;
  }

  @media (min-width: 700px) {
    width: 70%;
    margin-top: 5rem;
  }

  @media (min-width: 1100px) {
    width: 60%;
  }
`;
