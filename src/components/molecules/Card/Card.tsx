import Image from 'next/image';
import { ArticleBody } from '../../organisms/Articles/Articles.types';
import { router } from 'next/client';

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, slug, description, category, thumbnail } }) => {
  return (
    <article onClick={() => router.push(`/articles/${slug}`)}>
      <header>
        <Image src={thumbnail.url} alt="ksa" width={250} height={250} />
        <h1>
          {title} | #{category.title}
        </h1>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default Card;
