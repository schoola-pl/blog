import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    transform: translateY(-50%);
  }

  @media (min-width: 1500px) {
    padding: 5rem;
    transform: translateY(0%);
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    span {
      color: ${({ theme }) => theme.colors.mainBlue};
    }
  }
`;

export const CategoriesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  flex-wrap: wrap;
`;
