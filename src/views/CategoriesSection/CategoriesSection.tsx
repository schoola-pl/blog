import { Wrapper, CategoriesList } from './Categories.styles';
import { Category } from '../../components/atoms/Category/Category';
import { Categories } from '../../types';

const CategoriesSection = () => {
  return (
    <Wrapper>
      <h1>Kategorie</h1>
      <CategoriesList>
        <Category categoryType={Categories.prawoOswiatowe} />
        <Category categoryType={Categories.edukacja} />
        <Category categoryType={Categories.praca} />
        <Category categoryType={Categories.hajs} />
        <Category categoryType={Categories.usprawnienia} />
      </CategoriesList>
    </Wrapper>
  );
};

export default CategoriesSection;
