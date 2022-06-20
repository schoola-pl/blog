import styled from 'styled-components';
import { Category } from '../../atoms/Category/Category';
import { ArticleBody } from '../../organisms/Articles/Articles.types';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Wrapper = styled.article`
  min-height: 30rem;
  width: 37rem;
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  margin-bottom: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

const Header = styled.header`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    padding: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, slug, category, thumbnail } }) => {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.push(`/articles/${slug}`)}>
      <Header>
        <Image src={thumbnail.url} alt="article photo" height="200" width="370" />
        <InfoSection>
          <h1>{title}</h1>
          <Category categoryType={`${category.title}`} small />
        </InfoSection>
      </Header>
    </Wrapper>
  );
};

export default Card;
