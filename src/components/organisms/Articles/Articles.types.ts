export type ArticleBody = { title: string; description: string; thumbnail: string; category: { title: string } };

export type ArticlesType = { [k: string]: ArticleBody[] };
export type CategoriesType = string[];
