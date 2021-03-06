import _ from "mithril";
import {required, within} from "validatex";
import {UI} from "./../base.js";
import {modalPool} from "./pool.js";


const sizeMap = ["small", "large", "fullscreen"];

export class ModalHeader extends UI {
	getClassList ({attrs}) {
		return ["header"];
	}

	view ({attrs, children, state}) {
		return _("div", attrs.rootAttrs, children);
	}
}

export const modalHeader = new ModalHeader();


export class ModalContent extends UI {
	attrSchema = {
		image: [required(false), within([true, false])]
	}

	getClassList ({attrs}) {
		return [
			attrs.image && "image",
			"content"
		];
	}

	view ({attrs, children, state}) {
		return _("div", attrs.rootAttrs, children);
	}
}

export const modalContent = new ModalContent();


export class ModalActions extends UI {
	getClassList ({attrs}) {
		return [
			"actions"
		];
	}

	view ({attrs, children, state}) {
		return _("div", attrs.rootAttrs, children);
	}
}

export const modalActions = new ModalActions();


export class Modal extends UI {
	attrSchema = {
		basic: [required(false), within([true, false])],
		size: [required(false), within(sizeMap)],
		scrolling: [required(false), within([true, false])]
	}

	remove () {
		modalPool.shift();
	}

	onremove (vdom) {
		this.remove();
	}

	getClassList ({attrs}) {
		return [
			"ui",
			attrs.basic && "basic",
			attrs.size,
			attrs.scrolling && "scrolling",
			"modal visible active"
		];
	}

	view ({attrs, children, state}) {
		return _("div", attrs.rootAttrs, children);
	}
}


export const modal = new Modal();
