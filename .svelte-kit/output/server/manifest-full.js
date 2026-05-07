export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["badge.js","favicon.webp","photo-me.webp"]),
	mimeTypes: {".js":"application/javascript",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.fccbbfcd.js","app":"_app/immutable/entry/app.6659fadd.js","imports":["_app/immutable/entry/start.fccbbfcd.js","_app/immutable/chunks/scheduler.dd196d9e.js","_app/immutable/chunks/singletons.1a660378.js","_app/immutable/entry/app.6659fadd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.dd196d9e.js","_app/immutable/chunks/index.08a51704.js"],"stylesheets":[],"fonts":[]},
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
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/rss.xml/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
