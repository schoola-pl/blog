import { CategoriesList, Wrapper } from './Categories.styles';
import { Category } from '../../components/atoms/Category/Category';
import { CategoriesType } from '../../components/organisms/Articles/Articles.types';
import React from 'react';

const CategoriesSection: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: CategoriesType;
}> = ({ setCategory, categories }) => {
  return (
    <Wrapper>
      <h1>
        Kategorie <span>postów</span>
      </h1>
      <CategoriesList>
        <Category onClick={() => setCategory('all')} categoryType="Wszystkie" />
        {categories.map((category) => (
          <Category onClick={() => setCategory(category)} key={`id-${category}-${Math.floor(Math.random() * 100)}`} categoryType={category} />
        ))}
      </CategoriesList>
    </Wrapper>
  );
};

export default React.memo(CategoriesSection);
