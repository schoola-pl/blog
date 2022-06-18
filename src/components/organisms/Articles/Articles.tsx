import React, { useState } from 'react';
import { ArticlesType, CategoriesType } from './Articles.types';

const Articles: React.FC<{ articles: ArticlesType; categories: CategoriesType }> = ({ articles, categories }) => {
  const [category, setCategory] = useState('all');

  return (
    <section>
      <header>
        <h1>Artykuły idealne dla ciebie.</h1>
        <nav>
          <div>
            <button onClick={() => setCategory('all')}>Wszystkie kategorie</button>
            {categories.map((category) => (
              <button key={`id-${category}-${Math.floor(Math.random() * 100)}`} onClick={() => setCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </nav>
      </header>
      {articles[category].map(({ title }) => (
        <p key={`id-${title}-${Math.floor(Math.random() * 100)}`}>{title}</p>
      ))}
    </section>
  );
};

export default Articles;
