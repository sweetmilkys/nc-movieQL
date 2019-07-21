<div align="center">

# GraphQL([Nomad Academy](https://academy.nomadcoders.co/p/make-a-movie-api-with-graphql-and-nodejs-super-begginner?ref=map))

Learn the basics of GraphQL by making our own NodeJS + GraphQL Server using GraphQL Yoga  
and build an awesome Movie API.

</div>

## Goal

- **understanding**: graphQL 기본기
- **making**: graphQL를 활용한 간단한 서버

</br>

## Curriculum

- [x] [#1 Hello and Introduction](https://github.com/sweetmilkys/nc-graphQL/commit/c15e35b8e1715952e1ab36618b21a890928f518b)
- [x] [#2 Problems solved by GraphQL](https://github.com/sweetmilkys/nc-graphQL/commit/924c144ebce2b982e9c5f493b4b0d6a9789282d1)
- [x] [#3 Creating a GraphQL Server with GraphQL Yoga](https://github.com/sweetmilkys/nc-graphQL/commit/140dfd02d388c96de8098350ab29194044925a49)
- [ ] #4 Creating the first Query and Resolver
- [ ] #5 Extending the Schema
- [ ] #6 Extending the Schema part Two
- [ ] #7 Creating Queries with Arguments
- [ ] #8 Defining Mutations
- [ ] #9 Creating first Mutation
- [ ] #10 Delete Mutation
- [ ] #11 Wrapping a REST API with GraphQL Part One
- [ ] #12 Wrapping a REST API with GraphQL Part Two
- [ ] #13 Overview to the final API

</br>

## Stack

- NodeJS
- GraphQL

</br>

## Libray

**[graphql-yoga](https://github.com/prisma/graphql-yoga)**

Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience

```
yarn add graphql-yoga
```

**[nodemon](https://nodemon.io/)**

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

```
yarn global add nodemon
```

**[babel](https://babeljs.io/)**

Babel is a JavaScript compiler.

- [babel-cli](https://babeljs.io/docs/en/6.26.3/babel-cli): the CLI tool that runs @babel/core and helps with outputting to a directory, a file, stdout and more (also includes @babel/node cli).
- [babel-preset-env](https://babeljs.io/docs/en/6.26.3/babel-preset-env): A Babel preset for each environment.
- [babel-preset-stage-3](https://babeljs.io/docs/en/6.26.3/babel-preset-stage-3): The proposal is mostly finished and now needs feedback from implementations and users to progress further.

```
yarn global add babel-cli --ignore-engines
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```

</br>

## Reference

### GraphQL을 사용해서 해결 할 수 있는 문제

1. Over-fetching: 요청한 영역의 정보보다 많은 정보를 서버에서 받는 것
2. Under-fetching: 하나를 완성하려고 많은 소스를 요청하는 것
