import { Wrapper, HeadingSection } from './FirstSection.styles';
import Image from 'next/image';
import Waves from '../../assets/icons/Waves.svg';

const FirstSection = () => {
  return (
    <Wrapper>
      <HeadingSection>
        <h1>Lorem ipsum dolor</h1>
        <div>
          <p>sitetur adipiscing elit sed diam non json json</p>
          <button>Explore</button>
        </div>
      </HeadingSection>
      <Image width="500" height="600" layout="responsive" alt="waves" src={Waves} />
    </Wrapper>
  );
};

export default FirstSection;
