const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["GH.png","GH.svg","Logo.svg","Menlo-Regular/Menlo-Regular.woff","Menlo-Regular/example.html","Menlo-Regular/style.css","Poppins/poppins-v20-latin-600.eot","Poppins/poppins-v20-latin-600.svg","Poppins/poppins-v20-latin-600.ttf","Poppins/poppins-v20-latin-600.woff","Poppins/poppins-v20-latin-600.woff2","Poppins/poppins-v20-latin-regular.eot","Poppins/poppins-v20-latin-regular.svg","Poppins/poppins-v20-latin-regular.ttf","Poppins/poppins-v20-latin-regular.woff","Poppins/poppins-v20-latin-regular.woff2","THM.svg","Youtube.svg","favicon.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".woff":"font/woff",".html":"text/html",".css":"text/css",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-8004aebe.js","imports":["_app/immutable/start-8004aebe.js","_app/immutable/chunks/index-b13d1939.js","_app/immutable/chunks/singletons-c9b832d5.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-4fa9b9af.js'),
			() => import('./chunks/1-d55f8648.js'),
			() => import('./chunks/2-b40240a9.js'),
			() => import('./chunks/3-d8a878cb.js'),
			() => import('./chunks/4-a5ed02a5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
