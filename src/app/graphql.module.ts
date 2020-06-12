import { NgModule } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getOperationAST } from "graphql";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink } from "apollo-link";

import { environment } from "src/environments/environment";

const uri = environment.graphqlApiUri;
export function createApollo(httpLink: HttpLink) {
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token =
      localStorage.getItem(environment.authTokenKey) ||
      sessionStorage.getItem(environment.authTokenKey) ||
      "";

    if (token) {
      operation.setContext({
        headers: new HttpHeaders().set("Authorization", `Bearer ${token}`),
      });
    }
    return forward(operation);
  });

  const http = httpLink.create({ uri });

  const ws = new WebSocketLink({
    uri: uri.replace("http", "ws"),
    options: {
      reconnect: true,
      connectionParams: () => {
        const token =
          localStorage.getItem(environment.authTokenKey) ||
          sessionStorage.getItem(environment.authTokenKey) ||
          "";

        if (token) {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        }
      },
    },
  });

  return {
    link: ApolloLink.split(
      (operation) => {
        const operationAST = getOperationAST(
          operation.query,
          operation.operationName
        );
        return !!operationAST && operationAST.operation === "subscription";
      },
      ws,
      authMiddleware.concat(http)
    ),
    cache: new InMemoryCache(),
    defaultOptions: {
      mutate: {
        errorPolicy: "all",
      },
      query: {
        errorPolicy: "all",
        fetchPolicy: "network-only",
      },
    },
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
