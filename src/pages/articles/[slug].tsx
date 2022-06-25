import { Category } from '../../components/atoms/Category/Category';
import { Wrapper, ImageWrapper, ContentWrapper, InfoWrapper } from './articles.styles';
import { ArticleExtendedBody, ArticlesType } from '../../components/organisms/Articles/Articles.types';
import { GetStaticProps } from 'next';
import WeraPhoto from '../../assets/icons/WeraPhoto.png';
import Footer from '../../components/organisms/Footer/Footer';
import Image from 'next/image';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';
import Head from 'next/head';
import axios from 'axios';

const Article: React.FC<{ article: ArticleExtendedBody }> = ({ article: { title, content, slug, thumbnail, category, description, id, seo } }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image.url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://blog.communite.pl/articles/${slug}`} />
        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:site" content="@communite__" />
        <meta name="twitter:creator" content="@communite__" />
      </Head>
      <PageTemplate>
        <Wrapper>
          <ImageWrapper>
            <Image src={seo.image.url} alt={title} layout="fill" />
          </ImageWrapper>
          <ContentWrapper>
            <h1>{title}</h1>
            <Category categoryType={category.title} />
            <p>{content}</p>

            <InfoWrapper>
              <Image src={WeraPhoto} alt="author" layout="responsive" width="100" height="100" />
            </InfoWrapper>
            <h1>Autor: Weronika Latala</h1>
            <p>data</p>
          </ContentWrapper>
        </Wrapper>
      </PageTemplate>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const {
    data: { data: articles }
  } = await axios.get<{ data: ArticlesType }>(`http://localhost:3000/api/articles`);
  const allArticles = articles['all'];
  const paths = allArticles.map((article) => ({ params: { slug: article.slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const {
    data: { data: article }
  } = await axios.get<{ data: ArticleExtendedBody }>(`http://localhost:3000/api/articles?slug=${slug}`);

  return {
    props: {
      article
    }
  };
};

export default Article;
