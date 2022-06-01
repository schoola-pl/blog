import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <h1>sadf</h1>
      </div>
    </Wrapper>
  );
};

export default Navbar;
