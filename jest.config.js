module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

process.env = Object.assign(process.env, {
  BASE_URL: 'https://ghibliapi.herokuapp.com/',
  MONGODB_URI:
    'mongodb+srv://joaogsdc:JXPlmnO673ahNBGn@cluster0.cqvsa.mongodb.net/joaogsdc?retryWrites=true&w=majority',
  MONGODB_DB: 'movies_test',
});
