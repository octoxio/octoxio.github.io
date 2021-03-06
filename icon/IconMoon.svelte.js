/* src/icon/IconMoon.svelte generated by Svelte v3.48.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let svg;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "fill", "none");
			attr(svg, "stroke", "currentColor");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
			attr(svg, "stroke-width", "2");
			attr(svg, "viewBox", "0 0 24 24");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

class IconMoon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default IconMoon;