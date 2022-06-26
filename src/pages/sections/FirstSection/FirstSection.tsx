import { Wrapper, HeadingSection, ImageSection } from './FirstSection.styles';
import Image from 'next/image';
import Waves from '../../../assets/icons/Waves.svg';

const FirstSection = () => {
  return (
    <Wrapper>
      <HeadingSection>
        <h1>Unowocześnij swoją szkołę.</h1>
        <div>
          <p>Co dwa tygodnie znajdziesz tutaj wpis, jak prowadzić placówkę edukacyjną nowej generacji!</p>
          <a href="#categories">Zobacz jak!</a>
        </div>
      </HeadingSection>
      <ImageSection>
        <Image width="500" height="600" layout="responsive" alt="waves" src={Waves} />
      </ImageSection>
    </Wrapper>
  );
};

export default FirstSection;
