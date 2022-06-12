import styled from 'styled-components';

enum Categories {
  prawoOswiatowe,
  edukacja,
  usprawnienia,
  praca,
  hajs
}

const categoriesStyles = (fontColor: string, backgroundColor: string) => {
  switch (fontColor || backgroundColor) {
    case Categories.prawoOswiatowe:
      return {
        fontColor: `${({ theme }) => theme.colors.darkRed} `
      };
  }
};

export const Category = styled.li<{ type: Categories }>`
  background-color: #ba79db;
  color: black;
  height: 4rem;
  width: 8rem;
  border-radius: 2.5rem;
  margin: 0.5rem;
  color: #5b2079;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
`;
