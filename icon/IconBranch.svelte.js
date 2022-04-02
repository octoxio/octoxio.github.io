/* src/icon/IconBranch.svelte generated by Svelte v3.48.0 */
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
	let line;
	let circle0;
	let circle1;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			line = svg_element("line");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			path = svg_element("path");
			attr(line, "x1", "6");
			attr(line, "y1", "3");
			attr(line, "x2", "6");
			attr(line, "y2", "15");
			attr(circle0, "cx", "18");
			attr(circle0, "cy", "6");
			attr(circle0, "r", "3");
			attr(circle1, "cx", "6");
			attr(circle1, "cy", "18");
			attr(circle1, "r", "3");
			attr(path, "d", "M18 9a9 9 0 0 1-9 9");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "fill", "none");
			attr(svg, "stroke", "currentcolor");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, line);
			append(svg, circle0);
			append(svg, circle1);
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

class IconBranch extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default IconBranch;