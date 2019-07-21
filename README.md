<div align="center">

# GraphQL API([Nomad Academy](https://academy.nomadcoders.co/p/make-a-movie-api-with-graphql-and-nodejs-super-begginner?ref=map))

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
- [x] [#4 Creating the first Query and Resolver](https://github.com/sweetmilkys/nc-graphQL/commit/61d45d4560aedbbe557086383fbf072f06b865ee)
- [x] [#5 Extending the Schema](https://github.com/sweetmilkys/nc-graphQL/commit/3c23ffc31a15e33299e2cf66481457cc27a1343e)
- [x] [#6 Extending the Schema part Two](https://github.com/sweetmilkys/nc-graphQL/commit/98549d5e0cde70dbb7d9c1f885d73d054d9108f1)
- [x] [#7 Creating Queries with Arguments](https://github.com/sweetmilkys/nc-graphQL/commit/830ea291ba761f2412261ccce24d19ce735ca848)
- [x] [#8 Defining Mutations](https://github.com/sweetmilkys/nc-graphQL/commit/c58c952f7bf444ea87bd7bb015d980c159d8c85f)
- [x] [#9 Creating first Mutation](https://github.com/sweetmilkys/nc-graphQL/commit/79c279e08ae3078cb83580c4013dc7f6bcf764f8)
- [x] #10 Delete Mutation
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

### schema

사용자에게 보내거나 받을 data에 대한 서술로 Node.js나 Database를 위한것이 아니라, 단지 Graphql을 위한 것으로 무엇을 주고 받을지 대한 설명
schema.graphql: 모든 쿼리

### Query

데이터베이스로부터 정보를 얻는 것

### Mutation

서버, 데이터베이스, 메모리에서 데이터를 바꾸는 작업을 하는 것
