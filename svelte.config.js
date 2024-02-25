// svelte.config.js
import adapter from '@jill64/sveltekit-adapter-aws';

const config = {
	// ...
	kit: {
		adapter: adapter({
			name: 'gentle-snowflake-3777_aws',
			deploy: true,
			architecture: 'lambda-s3'
			// ...
			// Other Adapter Options
			// ...
		})
	}
};

export default config;
