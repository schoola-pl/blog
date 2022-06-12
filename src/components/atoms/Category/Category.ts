import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

enum Categories {
  prawoOswiatowe,
  edukacja,
  usprawnienia,
  praca,
  hajs
}

const categoriesStyles = (category: Categories) => {
  switch (category) {
    case Categories.prawoOswiatowe:
      return {
        color: theme.colors.darkRed,
        backgroundColor: theme.colors.lightRed,
        categoryType: 'Prawo oświatowe'
      };
    case Categories.edukacja:
      return {
        color: theme.colors.darkBlue,
        backgroundColor: theme.colors.accentBlue,
        categoryType: 'Edukacja'
      };
    case Categories.usprawnienia:
      return {
        color: theme.colors.darkGreen,
        backgroundColor: theme.colors.lightGreen,
        categoryType: 'Usprawnienia'
      };
    case Categories.praca:
      return {
        color: theme.colors.darkPurple,
        backgroundColor: theme.colors.lightPurple,
        categoryType: 'Praca'
      };
    case Categories.hajs:
      return {
        color: theme.colors.darkYellow,
        backgroundColor: theme.colors.lightYellow,
        categoryType: 'Hajs'
      };
  }
};

export const Category = styled.li<{ categoryType: Categories }>`
  background-color: ${({ categoryType }) => categoriesStyles(categoryType).backgroundColor};
  color: ${({ categoryType }) => categoriesStyles(categoryType).color};
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  height: 5rem;
  width: 11rem;
  border-radius: 2.5rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: '${({ categoryType }) => categoriesStyles(categoryType).categoryType}';
  }
`;
