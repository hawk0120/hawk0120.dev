export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.webp","photo-me.webp"]),
	mimeTypes: {".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.1f9f7d9f.js","app":"_app/immutable/entry/app.07c18e06.js","imports":["_app/immutable/entry/start.1f9f7d9f.js","_app/immutable/chunks/scheduler.90206c9b.js","_app/immutable/chunks/singletons.4b781ac8.js","_app/immutable/entry/app.07c18e06.js","_app/immutable/chunks/scheduler.90206c9b.js","_app/immutable/chunks/index.c8376b31.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[id]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
