import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 15vh;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 70vh;
  }
`;

export const HeadingSection = styled.div`
  transform: translateY(-10%);
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  @media (min-width: 650px) {
    transform: translateY(5%);
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
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
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
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }

    p {
      padding-top: 1rem;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: black;
      z-index: 99999;

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
