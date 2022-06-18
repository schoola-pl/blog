import React, { useState } from 'react';
import { ArticlesType, CategoriesType } from './Articles.types';
import CategoriesSection from '../../../views/CategoriesSection/CategoriesSection';
import PostsSection from '../../../views/PostsSection/PostsSection';

const Articles: React.FC<{ articles: ArticlesType; categories: CategoriesType }> = ({ articles, categories }) => {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <article>
        <header>
          <nav>
            <CategoriesSection categories={categories} setCategory={setCategory} />
          </nav>
        </header>
        <PostsSection articles={articles[category]} />
      </article>
    </div>
  );
};

export default Articles;
