import { EnumType } from "typescript";

enum Category{
  Produce = 'Produce',
  ReadyMade = 'Ready-made',
  Other = 'Other',
}

// types.ts
export interface Post {
    title: string;
    location: string;
    price: number;
    image: string;
    availability: Date;
    tag: Category;
  }
  