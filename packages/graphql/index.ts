import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import config from './config';
import getContext from './utils/getContext';

const server = new ApolloServer({
	schema,
	context: getContext,
	engine: {
		apiKey: config.engine.apiKey,
		schemaTag: config.engine.schemaTag
	},
	playground: { version: '1.7.20' },
	introspection: true
});
const PORT = process.env.PORT || 8081;
server.listen(PORT).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
