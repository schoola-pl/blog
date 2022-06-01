import { Wrapper } from './PageTemplate.styles';
import Navbar from '../../organisms/Navbar/Navbar';

const PageTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageTemplate;
