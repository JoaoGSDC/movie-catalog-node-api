import { ObjectId } from 'mongodb';

export interface MoviesDTO {
  _id: ObjectId;
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  image: string;
  movie_banner: string;
}
