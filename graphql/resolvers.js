import { getMovies, getMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;
