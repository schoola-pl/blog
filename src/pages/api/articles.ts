// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ArticleBody, ArticlesType } from '../../components/organisms/Articles/Articles.types';

const query = `
{
  allArticles {
    id
    title
    description
    category {
      title
    }
    thumbnail {
      url
    }
    _firstPublishedAt
  }

  _allArticlesMeta {
    count
  }
}
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: ArticlesType; count: number } | { error: unknown }>) {
  try {
    const {
      data: { data }
    } = await axios.post(
      'https://graphql.datocms.com/',
      {
        query
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`
        }
      }
    );

    const allArticles = data.allArticles;
    const categoriedArticles = allArticles.reduce((acc: ArticlesType, article: ArticleBody) => {
      const { category } = article;
      if (!acc[category.title]) {
        acc[category.title] = [];
      }
      acc[category.title].push(article);
      return acc;
    }, {});
    res.status(200).json({ data: { all: allArticles, ...categoriedArticles }, count: data['_allArticlesMeta'].count });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
