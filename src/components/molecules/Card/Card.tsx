import React from 'react';
import { ArticleBody } from '../../organisms/Articles/Articles.types';

const Card: React.FC<{ article: ArticleBody }> = ({ article: { title, description, category, thumbnail } }) => {
  return (
    <article>
      <header>
        <img src={thumbnail.url} width={250} height={250} />
        <h1>
          {title} | #{category.title}
        </h1>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default Card;
