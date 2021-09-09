import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema, root } from "./graphql.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const port = 5000;

app.get('/api', (req, res) => {
    const hello = "Hello World!";
    res.json(hello);
})

app.listen(port, () => console.log("Sever Listening on port " + port));