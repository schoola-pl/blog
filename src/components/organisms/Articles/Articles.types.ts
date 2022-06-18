export type ArticleBody = { id: number; title: string; description: string; thumbnail: { url: string }; category: { title: string } };

export type ArticlesType = { [k: string]: ArticleBody[] };
export type CategoriesType = string[];
