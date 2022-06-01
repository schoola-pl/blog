import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;

  a {
    text-decoration: none;
    color: black;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  //   &.active {
  //     opacity: 1;
  //   }
`;
