import { Wrapper, Header, InfoSection } from './Card.styles';
import { Category } from '../../atoms/Category/Category';
import { ArticleBody } from '../../organisms/Articles/Articles.types';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, slug, category, thumbnail } }) => {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.push(`/articles/${slug}`)}>
      <Header>
        <div>
          <Image src={thumbnail.url} alt="article photo" layout="responsive" height="200" width="370" />
        </div>
        <InfoSection>
          <h1>{title}</h1>
          <Category categoryType={`${category.title}`} small />
        </InfoSection>
      </Header>
    </Wrapper>
  );
};

export default Card;
