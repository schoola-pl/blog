import { CategoriesList, Wrapper } from './Categories.styles';
import { Category } from '../../../components/atoms/Category/Category';
import { CategoriesType } from '../../../components/organisms/Articles/Articles.types';
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
        {categories.map((category) => (
          <Category onClick={() => setCategory(category)} key={category} categoryType={category} />
        ))}
      </CategoriesList>
    </Wrapper>
  );
};

export default React.memo(CategoriesSection);
