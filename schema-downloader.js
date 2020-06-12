const {
  introspectionQuery,
  buildClientSchema,
  printSchema
} = require("graphql");
const { ApolloClient } = require("apollo-client");
const { createHttpLink } = require("apollo-link-http");
const { InMemoryCache } = require("apollo-cache-inmemory");
const gql = require("graphql-tag");
const fetch = require("node-fetch");

(async () => {
  console.log(transform(await download()));
})();

async function download() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      fetch,
      headers: {
        "x-hasura-admin-secret": "myadminsecretkey"
      },
      uri: "http://localhost:8080/v1/graphql"
    })
  });

  return client
    .query({
      query: gql`
        ${introspectionQuery}
      `
    })
    .then(data => printSchema(buildClientSchema(data.data)))
    .catch(err => console.error(err));
}

function transform(schema) {
  schema = schema.replace("type query_root", "extend type Query");
  schema = schema.replace("type mutation_root", "extend type Mutation");
  schema = schema.replace("type subscription_root", "extend type Subscription");

  schema = schema.replace("query: query_root", "query: Query");
  schema = schema.replace("mutation: mutation_root", "mutation: Mutation");
  schema = schema.replace(
    "subscription: subscription_root",
    "subscription: Subscription"
  );

  schema = schema.replace(/"""[\w\W]*?"""\n?/g, "");

  return schema.replace(/\uFFFD/gu, "");
}
