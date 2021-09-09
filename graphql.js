import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      greet: String
      part(id: Int!): Part
      photo(part_id: Int!): Photo
  }

  type Part {
    id: Int
    win: String
    lose1: String
    lose2: String
    lose3: String
  }

  type Photo {
    id: Int
    part_id: Int
    filename: String
  }

`);

export const root = {
    greet: () => {
        return "Hello Satan!"
    },
    part: async (args) => {
        const r = await query("select * from parts where id = ?", [args.id]);
        return r[0];
    },
    photo: async (args) => {
        const r = await query("select * from photos where part_id = ?", [args.part_id]);
        return r[0];
    }
};

export default {
    schema,
    root
}