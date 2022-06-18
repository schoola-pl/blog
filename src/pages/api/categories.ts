// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CategoriesType } from '../../components/organisms/Articles/Articles.types';

const query = `
{
  allCategories {
    title
  }
  _allCategoriesMeta {
    count
  }
}
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: CategoriesType; count: number } | { error: unknown }>) {
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

    const categories = data.allCategories.map(({ title }: { title: string }) => title);
    res.status(200).json({ data: categories, count: data['_allCategoriesMeta'].count });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
