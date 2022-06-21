import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 15vh;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
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

  h1 {
    color: black;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 30%;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      color: white;
      height: 4.75rem;
      width: 13rem;
      border-radius: 2.5rem;
      margin-left: 5rem;
    }

    p {
      padding-top: 1rem;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: black;
      z-index: 99999;
    }
  }
`;
