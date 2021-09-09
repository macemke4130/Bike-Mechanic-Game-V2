import { buildSchema } from 'graphql';
// import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      greet: String
  }
`);

export const root = {
    greet: () => {
        return "Hello Satan!"
    }
};

export default {
    schema,
    root
}