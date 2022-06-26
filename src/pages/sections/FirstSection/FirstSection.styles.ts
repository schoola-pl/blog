import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 15vh;
  width: 100vw;

  @media (min-width: 1000px) {
    top: 5vh;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  padding: 0rem;
  width: 100%;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(-10%);
  padding: 2rem;
  position: absolute;
  z-index: 1;

  @media (min-width: 650px) {
    transform: translateY(10%);
  }

  @media (min-width: 1000px) {
    transform: translateY(-30%);
  }

  h1 {
    color: black;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    @media (min-width: 440px) {
      margin-top: 7.5rem;
    }

    @media (min-width: 600px) {
      font-size: 5rem;
      transform: translateY(20%);
    }

    @media (min-width: 700px) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media (min-width: 1000px) {
      font-size: 6.5rem;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 1000px) {
      transform: translateY(20%);
    }

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      color: white;
      height: 4.75rem;
      min-width: 13rem;
      border-radius: 2.5rem;
      margin-left: 5rem;

      @media (min-width: 700px) {
        height: 5rem;
        width: 15rem;
        margin-right: 2rem;
        font-size: ${({ theme }) => theme.fontSize.s};
      }

      @media (min-width: 1000px) {
        font-size: 1.8rem;
        margin-left: 20rem;
        min-width: 23rem;
      }
    }

    p {
      padding-top: 1rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: black;
      z-index: 99999;

      @media (min-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }

      @media (min-width: 440px) {
        font-size: 1.75rem;
      }

      @media (min-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
      @media (min-width: 700px) {
        font-size: 2.7rem;
      }
    }
  }
`;
