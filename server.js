const express = require('express');
const cors = require('cors');
// const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
const jsYaml = require('js-yaml');
const fs = require('fs');

// Read YAML file
// const yamlData = fs.readFileSync('data.yaml', 'utf8');
// const data = jsYaml.load(yamlData);

// Define GraphQL schema
// const schema = buildSchema(`
//   type MenuItem {
//     name: String
//     description: String
//     price: String
//   }

//   type MenuCategory {
//     category: String
//     items: [MenuItem]
//   }

//   type Query {
//     menu: [MenuCategory]
//   }
// `);

// Define resolvers
const root = {
  menu: () => menu.menu
};

const app = express();

app.use(cors());

app.get('/api/data', function(req, res) {
    const yamlData = fs.readFileSync('data.yaml', 'utf8');
    const data = jsYaml.load(yamlData);
    console.log(data.menu)
    // Check if query parameter 'category' is provided
    const category = req.query.category;

    // If category is provided and equals 'Starters', filter the data
    const categoryData = data.menu.find(item => item.category.toLowerCase() === category.toLowerCase());
    console.log(categoryData);
    const filteredData =  categoryData ? categoryData.items:[];
    
    res.json({ data: filteredData });
});

// GraphQL endpoint
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true // Enable GraphiQL for testing in browser
// }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
