import { ArticleBody } from '../../organisms/Articles/Articles.types';
import { useRouter } from 'next/router';

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, slug, description, category, thumbnail } }) => {
  const router = useRouter();

  return (
    <article onClick={() => router.push(`/articles/${slug}`)}>
      <header>
        <img src={thumbnail.url} alt="ksa" width={250} height={250} />
        <h1>
          {title} | #{category.title}
        </h1>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default Card;
