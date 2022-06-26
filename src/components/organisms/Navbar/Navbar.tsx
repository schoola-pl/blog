import { Wrapper } from './Navbar.styles';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <p onClick={() => router.push(`/`)}>Blog</p>
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
