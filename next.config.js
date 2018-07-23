const path = require('path')
const glob = require('glob')

module.exports = {
	webpack: (config, { dev }) => {
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				loader: 'babel-loader!raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'babel-loader!raw-loader!sass-loader'
			},
			{
				test: /\.s(a|c)ss$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader',
					{ 
						loader: 'sass-loader',
						options: {
						includePaths: ['styles', 'node_modules']
							.map((d) => path.join(__dirname, d))
							.map((g) => glob.sync(g))
							.reduce((a, c) => a.concat(c), [])
						}
					}
				]
			}
		)
		/*
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
		)
		*/
		return config
	}, 
	exportPathMap() {
		return {
			'/': { page: '/' },
			'/configuration': { page: '/configuration' },
			'/mybets': { page: '/mybets' },
			'/login/account-locked': { page: '/login/account-locked'}, 
			'/login/change-provider': { page: '/login/change-provider'},
			'/login/faqs': { page: '/login/faqs'},
			'/login/install-metamask': { page: '/login/install-metamask'},
			'/login/sign-up': { page: '/login/sign-up'},
			'/betting/': { page: '/betting/'}, 
			'/betting/3-4-position': { page: '/betting/3-4-position'},
			'/betting/final': { page: '/betting/final'},
			'/betting/group-stage': { page: '/betting/group-stage'},
			'/betting/octaves': { page: '/betting/octaves'},
			'/betting/quarter-finals': { page: '/betting/quarter-finals'},
			'/betting/semifinals': { page: '/betting/semifinals'}
		}
	}
}