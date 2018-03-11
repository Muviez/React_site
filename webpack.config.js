const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
	watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' && 'cheap-source-map',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(NODE_ENV)
			}
        }),
    ],
    devServer: {
        historyApiFallback: true
    }
};