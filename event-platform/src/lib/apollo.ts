import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4od2w9a1xmx01xxeznbd7q0/master",
    cache: new InMemoryCache()
})