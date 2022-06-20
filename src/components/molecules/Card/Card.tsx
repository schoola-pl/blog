import styled from 'styled-components';
import { Category } from '../../atoms/Category/Category';
import { ArticleBody } from '../../organisms/Articles/Articles.types';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Wrapper = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  border-radius: 2.5rem;
  max-width: 32rem;
  border: 1px solid red;
  margin-bottom: 2rem;
`;

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, slug, description, category, thumbnail } }) => {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.push(`/articles/${slug}`)}>
      <header>
        <Image src={thumbnail.url} alt="article photo" width={250} height={250} />
        <h1>
          {title} | <Category categoryType={`${category.title}`} />
        </h1>
      </header>
      <p>{description}</p>
    </Wrapper>
  );
};

export default Card;
