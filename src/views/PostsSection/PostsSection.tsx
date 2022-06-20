import styled from 'styled-components';
import Card from '../../components/molecules/Card/Card';
import { ArticleBody } from '../../components/organisms/Articles/Articles.types';

const ArticlesSection = styled.section`
  margin-top: 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const PostSection: React.FC<{ articles: ArticleBody[] }> = ({ articles }) => {
  return (
    <ArticlesSection>
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </ArticlesSection>
  );
};

export default PostSection;
