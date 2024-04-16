export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dining/a.png","dining/b.png","dining/c.png","dining/d.png","dining/e.png","dining/f.png","dining/g.png","dining/h.png","dining/i.png","dining/j.png","dining/k.png","dining/l.png","dining/m.png","dining/n.png","dining/o.png","favicon.png","img/4.png","img/Dining options 1.png","img/title.png","img/toc.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CmraXbyO.js","app":"_app/immutable/entry/app.4_mPQ0ju.js","imports":["_app/immutable/entry/start.CmraXbyO.js","_app/immutable/chunks/entry.BcmNoOoK.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/entry/app.4_mPQ0ju.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
				id: "/contents",
				pattern: /^\/contents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dining",
				pattern: /^\/dining\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/intro",
				pattern: /^\/intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
