import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      greet: String
      part(id: Int!): Part
  }

  type Part {
    id: Int
    win: String
    lose1: String
    lose2: String
    lose3: String
  }

`);

export const root = {
    greet: () => {
        return "Hello Satan!"
    },
    part: async (args) => {
        const r = await query("select * from parts where id = ?", [args.id]);
        return r[0];
    }
};

export default {
    schema,
    root
}