import styled from 'styled-components';
import { Category } from '../../components/atoms/Category/Category';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    &::after {
      content: ' postów';
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
  max-width: 80%;
  flex-wrap: wrap;
`;

const CategoriesSection = () => {
  return (
    <Wrapper>
      <h1>Kategorie</h1>
      <CategoriesList>
        <Category>Nauka</Category>
        <Category>Nauka</Category>
        <Category>Nauka</Category>
        <Category>Nauka</Category>
        <Category>Nauka</Category>
      </CategoriesList>
    </Wrapper>
  );
};

export default CategoriesSection;
