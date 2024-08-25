import { EnumType } from "typescript";

enum Category{
  Produce = 'PRODUCE',
  ReadyMade = 'READY_MADE',
  Other = 'PRODUCE',
}

// types.ts
export interface Post {
    title: string;
    location: string;
    price: number;
    image: string;
    availability: Date;
    category: Category;
  }
  