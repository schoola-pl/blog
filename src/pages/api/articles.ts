// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ArticleBody, ArticleExtendedBody, ArticlesType } from '../../components/organisms/Articles/Articles.types';

const query = `
{
  allArticles {
    id
    title
    slug
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

const extendedQuery = `
{
  allArticles {
    id
    title
    slug
    description
    content
    category {
      title
    }
    seo {
      title
      twitterCard
      description
      image {
        url
      }
    }
    _firstPublishedAt
  }

  _allArticlesMeta {
    count
  }
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: ArticlesType | ArticleExtendedBody; count: number } | { error: unknown }>
) {
  const isExtended = !!req.query.slug;
  const chosenQuery = isExtended ? extendedQuery : query;

  try {
    const {
      data: { data }
    } = await axios.post(
      'https://graphql.datocms.com/',
      {
        query: chosenQuery
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_READ_TOKEN}`
        }
      }
    );
    const allArticles = data.allArticles;
    if (!isExtended) {
      const categoriedArticles = allArticles.reduce((acc: ArticlesType, article: ArticleBody) => {
        const { category } = article;
        if (!acc[category.title]) {
          acc[category.title] = [];
        }
        acc[category.title].push(article);
        return acc;
      }, {});
      res.status(200).json({
        data: { all: allArticles, ...categoriedArticles },
        count: data['_allArticlesMeta'].count
      });
    } else {
      const result = allArticles.find((article: ArticleExtendedBody) => article.slug === req.query.slug);
      res.status(200).json({
        data: result || null,
        count: 1
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
