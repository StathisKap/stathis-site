import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from './index-d4538545.js';
import { L as Logo } from './Logo-46e00a85.js';

const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pages = ["Contact"];
  let links = {
    "GH.svg": "https://github.com/StathisKap",
    "Youtube.svg": "https://www.youtube.com/channel/UCWKcP-sabZ7XJpHVsqA1Ikg/videos",
    "THM.svg": "https://tryhackme.com/p/St.K"
  };
  return `<div class="${"flex flex-col fixed top-0 left-0 min-h-screen w-40 bg-stone-900 m-0 shadow-2xl"}"><nav class="${"text-center text-slate-200 text-lg "}"><div class="${"shadow-2xl"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
		<div class="${"flex flex-col flex-0.5 min-h-screen justify-center border-t-2 border-zinc-800"}"><hr class="${"border-t-2 border-zinc-800"}">
			${each(pages, (page) => {
    return `<a href="${"/" + escape(page.toLowerCase(), true)}"><div class="${"border-b-2 border-zinc-800 hover:text-teal-300"}"><div class="${"m-3 leading-8"}">${escape(page)}
						</div></div>
				</a>`;
  })}
			<div class="${"h-40"}"></div>
			<div class="${"flex self-center relative bottom-1/4"}">${each(Object.entries(links), ([svg, link]) => {
    return `<div class="${"pr-2"}"><a${add_attribute("href", link, 0)}><img src="${"/" + escape(svg, true)}"${add_attribute("alt", link, 0)} class="${"w-full justify-center h-6 bg-slate-100 rounded-full shadow-2xl border-2 border-neutral-400 hover:border-teal-200 hover:bg-teal-200"}"></a>
					</div>`;
  })}</div></div></nav></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { is_mounted = false } = $$props;
  if ($$props.is_mounted === void 0 && $$bindings.is_mounted && is_mounted !== void 0)
    $$bindings.is_mounted(is_mounted);
  return `${$$result.head += `<!-- HEAD_svelte-2zdmkn_START -->${$$result.title = `<title>Stathis Kapnidis</title>`, ""}<link rel="${"stylesheet"}" href="${"https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"}"><link rel="${"stylesheet"}" href="${"/src/output.css"}"><!-- HEAD_svelte-2zdmkn_END -->`, ""}

<div class="${"flex"}"><div class="${"w-36 min-h-screen relative"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>

	${is_mounted ? `<main class="${"bg-zinc-900 flex-1 min-h-screen text-slate-300 pl-10 pt-5"}">${slots.default ? slots.default({}) : ``}</main>` : ``}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a8e02da7.js.map
