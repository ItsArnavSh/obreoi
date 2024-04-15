export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/4.png","img/Dining options 1.png","img/Table of Contents.png","img/title.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BvTBpife.js","app":"_app/immutable/entry/app.CBZqONBP.js","imports":["_app/immutable/entry/start.BvTBpife.js","_app/immutable/chunks/entry.DxNFV1_z.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CBZqONBP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.SI4Zq0WL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/intro",
				pattern: /^\/intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
