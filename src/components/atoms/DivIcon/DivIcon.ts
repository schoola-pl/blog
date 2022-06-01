import styled from 'styled-components';

export const DivIcon = styled.div<{ icon: string }>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 100%;
  background-position: center;
`;
