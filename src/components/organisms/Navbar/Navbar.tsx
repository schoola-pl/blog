import { Wrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <Wrapper>
      <a>Blog</a>
      <a href="https://schoola.pl" target="_blank" rel="noopener noreferrer">
        O nas
      </a>
      <a href="mailto:schoolacontact@gmail.com" target="_blank" rel="noopener noreferrer">
        Kontakt
      </a>
    </Wrapper>
  );
};

export default Navbar;
