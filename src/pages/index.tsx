import type { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate/PageTemplate';
import FirstSection from './sections/FirstSection/FirstSection';
import Footer from '../components/organisms/Footer/Footer';
import Articles from '../components/organisms/Articles/Articles';
import axios from 'axios';
import { ArticlesType, CategoriesType } from '../components/organisms/Articles/Articles.types';

const Home: NextPage<{ articles: ArticlesType; categories: CategoriesType }> = ({ articles, categories }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <FirstSection />
        <Articles articles={articles} categories={categories} />
      </PageTemplate>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const {
    data: { data: articles }
  } = await axios.get('http://localhost:3000/api/articles');
  const {
    data: { data: categories }
  } = await axios.get('http://localhost:3000/api/categories');

  return {
    props: {
      articles,
      categories
    }
  };
};

export default Home;
