export type Product = {
  name: string;
  slug: string;
  category: string;
  productType?: string;
  description?: string;
  image?: string;
  featured?: boolean;
  active?: boolean;
};
