import Card from '../../components/molecules/Card/Card';
import { ArticleBody } from '../../components/organisms/Articles/Articles.types';

const PostSection: React.FC<{ articles: ArticleBody[] }> = ({ articles }) => {
  return (
    <section>
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </section>
  );
};

export default PostSection;
