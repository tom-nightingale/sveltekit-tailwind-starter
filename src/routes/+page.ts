import client from "../gql/apolloClient";
import type {GetQueryQuery} from '../gql/gen/codegen'
import { GetQueryDoc } from '../gql/gen/codegen'


export async function load() {
  const data = await client.query<GetQueryQuery>({
    query: GetQueryDoc,
  });

  return {
    result: data,
  };
}