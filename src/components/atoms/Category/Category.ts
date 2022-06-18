import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { Categories } from '../../../types';

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

export const Category = styled.button<{ categoryType: string }>`
  ${() => {
    const baseColor = Math.floor(Math.random() * 360);
    return `
      background-color: hsl(${baseColor}, 55%, 65%);
      color: hsl(${baseColor}, 55%, 25%);
    `;
  }}
  opacity: 0.8;
  cursor: pointer;
  border: 0;
  transform: scale(0.9);
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  min-width: 10rem;
  padding: 1rem;
  border-radius: 3rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: '#${({ categoryType }) => categoryType}';
  }

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1);
  }
`;
