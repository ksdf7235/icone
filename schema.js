import {loadFilesSync,mergeTypeDefs,mergeResolvers,makeExecutableSchema} from "graphql-tools"



const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolver = loadFilesSync(`${__dirname}/**/*.{queries,mutation}.js`);
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolver);


const schema = makeExecutableSchema({typeDefs,resolvers})
   

export default schema;