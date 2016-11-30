import m from "mithril";
import {validate} from "validatex";
import omit from "lodash/omit.js";
import component from "mithril-componentx";


export const base = component({
	name: "UI",
	getDefaultAttrs (attrs) {
		return {root: "div"};
	},
  validateAttrs (attrs) {
    let errors = validate(attrs, this.attrSchema);
    if (errors) throw Error(JSON.stringify(errors));
  },
  view ({attrs, children, state}) {
    return m(attrs.root, attrs.rootAttrs, children);
  }
});
