const ExtractTextPlugin = require("extract-text-webpack-plugin");
//disable: process.env.NODE_ENV === "development"
//css输出目录
const extractSASS = new ExtractTextPlugin("css/[name]-[hash]-sass.css");
const extractCSS = new ExtractTextPlugin("css/[name]-[hash]-css.css");
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack')
module.exports={
	mode:'development',
	devServer:
			{
				contentBase: __dirname+"/dist",
				compress: true, //gzip
				port: 10005,
				stats: "errors-only", //only show the error message in terminal
				open: true,//will open a new browser widow when the dev server for the the first sound
				hot:true,
				inline:true
			},
	entry:
		{
			main:__dirname+'/project/js/main.js',
			navbar:__dirname+'/project/js/nav.js',
			index:__dirname+'/project/js/index.js',
			allTechShow:__dirname+'/project/js/all-tech-show.js',
			article:__dirname+'/project/js/article.js',
			apply:__dirname+'/project/js/apply.js'
		},
	output:
			{
				//js输出目录
				path:__dirname+'/dist',
				filename:'js/[name]-[hash].js',
				publicPath:'../'
			},
	module:
			{
				rules:
						[
							{
								test:/\.js$/,
								use:
										{
											loader:'babel-loader'
										},
								exclude:/node_modules/
								
							},
							{
								test: /\.css$/,
								use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
							},
							{
								test: /\.scss$/i,
								use: extractSASS.extract([ 'css-loader', 'sass-loader' ])
							},
							{
								test:/\.(png|jpg|gif)$/,
								use:
									[
										{
											loader:'url-loader',
											options:{
														limit:1000,
														name:'images/[name][hash].[ext]',
													}
										}
									],
								exclude:/node_modules/
							},
							{
								test:/\.(eot|svg|ttf|woff|woff2)$/,
								use:
									[
										{
											loader:'url-loader',
											options:{
														limit:0,
														name:'fonts/[name][hash].[ext]'
													}
										}
									],
								exclude:/node_modules/
							},
							{
								test:/\.(mp3|ogg)$/,
								use:
									[
										{
											loader:'url-loader',
											options:{
														limit:0,
														name:'music/[name][hash].[ext]'
													}
										}
									],
								exclude:/node_modules/
							},
							{
								test:/\.pug$/,
								use:
									[
										{
											loader:'html-loader'
										},
										{
											loader:'pug-html-loader',
											options:{
												pretty:false,
												data:
													{
														navbar:
															{
																header:
																		{
																			href:"./apply.html",
																			text:"招聘相关"
																		},
																items:
																	[
																		{
																			href:"./myself.html",
																			text:"个人简介"
																		
																		},
																		{
																			href:"https://pan.baidu.com/s/1vitUBBDVE2pS6RIAYaZ_9Q",
																			text:"网页源码下载"
																		
																		},
																		{
																			href:"./declare.html",
																			text:"网页声明"
																		
																		},
																		{
																			href:"javascript:;",
																			text:"我的技术",
																			dropdownmenuItems:
																								[
																									{
																										href:"allTechShow.html",
																										text:"总览"
																									},
																									{
																										href:"./nodejs.html",
																										text:"nodejs",
																									},
																									{
																										href:"divider"
																									},
																									{
																										href:"./java.html",
																										text:"java"
																									},
																										{
																										href:"./groovy.html",
																										text:"groovy",
																									},
																									{
																										href:"./scala.html",
																										text:"scala",
																									},
																									{
																										href:'divider'
																									},
																									{
																										href:"./mysql.html",
																										text:"mysql数据库"
																									},
																									{
																										href:'divider'
																									},
																									{
																										href:"./project.html",
																										text:"小项目"
																									}
																								]
																		},
																		{
																			href:"index.html",
																			text:"返回"
																		}
																	]
															},
															javahref:"./java.html",
															groovyhref:"./groovy.html",
															scalahref:"./scala.html",
															gohref:"./go.html",
															nodehref:"./nodejs.html",
															mysqlhref:"./mysql.html",
															projecthref:"./project.html"
													}
											}
										}
									],
								exclude:/node_modules/
							}
						]
			},
	plugins:
			[
			//jquery依赖
			new webpack.ProvidePlugin({
				"$": "jquery",
				"jQuery": "jquery",
				"window.jQuery": "jquery"
			}),
			new webpack.HotModuleReplacementPlugin(),
			//disable: process.env.NODE_ENV === "development"
				extractCSS,
				extractSASS,
			//html文件目录
				new HtmlWebpackPlugin({
				filename:'html/navbar.html',
				template:'project/html/navbar.pug',
				chunks:['navbar'],
				inject:'head'
				}),
				new HtmlWebpackPlugin({
				filename:'html/index.html',
				template:'project/html/index.pug',
				chunks:['index'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/allTechShow.html',
				template:'project/html/allTechShow.pug',
				chunks:['allTechShow'],
				inject:'head'
				}),
				new HtmlWebpackPlugin({
				filename:'html/nodejs.html',
				template:'project/html/nodejs.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/groovy.html',
				template:'project/html/groovy.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/java.html',
				template:'project/html/java.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/go.html',
				template:'project/html/go.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/scala.html',
				template:'project/html/scala.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/mysql.html',
				template:'project/html/mysql.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/declare.html',
				template:'project/html/declare.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/project.html',
				template:'project/html/project.pug',
				chunks:['article'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/apply.html',
				template:'project/html/apply.pug',
				chunks:['apply'],
				inject:'body'
				}),
				new HtmlWebpackPlugin({
				filename:'html/myself.html',
				template:'project/html/myself.pug',
				chunks:['article'],
				inject:'body'
				})
			]
}