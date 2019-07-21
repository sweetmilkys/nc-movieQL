const danah = {
  name: "Danah",
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => danah
  }
};

export default resolvers;
