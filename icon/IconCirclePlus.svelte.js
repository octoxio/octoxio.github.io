/* src/icon/IconCirclePlus.svelte generated by Svelte v3.48.0 */
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
	let circle;
	let line0;
	let line1;

	return {
		c() {
			svg = svg_element("svg");
			circle = svg_element("circle");
			line0 = svg_element("line");
			line1 = svg_element("line");
			attr(circle, "cx", "12");
			attr(circle, "cy", "12");
			attr(circle, "r", "10");
			attr(line0, "x1", "12");
			attr(line0, "y1", "8");
			attr(line0, "x2", "12");
			attr(line0, "y2", "16");
			attr(line1, "x1", "8");
			attr(line1, "y1", "12");
			attr(line1, "x2", "16");
			attr(line1, "y2", "12");
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
			append(svg, circle);
			append(svg, line0);
			append(svg, line1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

class IconCirclePlus extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default IconCirclePlus;