import styled from 'styled-components';

export const Heading = styled.h1`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
