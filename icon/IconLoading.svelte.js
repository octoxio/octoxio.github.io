/* src/icon/IconLoading.svelte generated by Svelte v3.48.0 */
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
	let animateTransform;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			animateTransform = svg_element("animateTransform");
			attr(animateTransform, "attributeType", "xml");
			attr(animateTransform, "attributeName", "transform");
			attr(animateTransform, "type", "rotate");
			attr(animateTransform, "from", "0 25 25");
			attr(animateTransform, "to", "360 25 25");
			attr(animateTransform, "dur", "0.6s");
			attr(animateTransform, "repeatCount", "indefinite");
			attr(path, "d", "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "viewBox", "0 0 50 50");
			attr(svg, "fill", "currentcolor");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
			append(path, animateTransform);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

class IconLoading extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default IconLoading;