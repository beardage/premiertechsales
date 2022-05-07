var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Contact_1
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12277b03 = require("../../chunks/index-12277b03.js");
const Contact = (0, import_index_12277b03.c)(($$result, $$props, $$bindings, slots) => {
  return `<form netlify netlify-honeypot="${"bot-field"}" name="${"contact-form"}" class="${"w-full mt-10"}"><div></div>
	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full md:w-1/2 px-3 mb-6 md:mb-0"}"><label class="${"block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"}" for="${"firstname"}">First Name
			</label>

			<input class="${"appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"firstname"}" name="${"firstname"}" type="${"text"}" placeholder="${"Jane"}"></div>

		<div class="${"w-full md:w-1/2 px-3"}"><label class="${"block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"}" for="${"lastname"}">Last Name
			</label>

			<input class="${"appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"lastname"}" name="${"lastname"}" type="${"text"}" placeholder="${"Doe"}"></div></div>

	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3"}"><label class="${"block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"}" for="${"email"}">E-mail
			</label>

			<input class="${"appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"email"}" name="${"email"}" type="${"email"}"></div></div>

	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3"}"><label class="${"block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"}" for="${"message"}">Message
			</label>

			<textarea class="${"no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"}" id="${"message"}" name="${"message"}"></textarea></div></div>

	<input class="${"hidden"}" type="${"text"}" name="${"bot-field"}">
	<div class="${"md:flex md:items-center"}"><div class="${"md:w-1/3"}"><button class="${"shadow bg-primary-500 hover:bg-primary-600 focus:shadow-outline text-primary-100 font-bold py-2 px-4 rounded"}" type="${"submit"}">Send
			</button></div>

		<div class="${"md:w-2/3"}"></div></div></form>`;
});
const Contact_1 = (0, import_index_12277b03.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-secondary-800 text-center text-4xl font-headline my-16"}">Contact</h1>
<div class="${"grid md:grid-cols-2 gap-8 mt-16"}"><div class="${"order-1 md:order-2 mb-4"}"><h4 class="${"font-headline text-2xl"}">Office</h4>
		<p class="${"mb-6"}">Office Phone: <a href="${"tel:123.123.1234"}">123.123.1234</a><br>
			Office Fax: <a href="${"fax:321.321.4321"}">321.321.4321</a><br>
			Office Email:
			<a href="${"mailto:emmccullough@premiertechsales.com"}">emccullough@premiertechsales.com</a></p>
		<h4 class="${"font-headline text-2xl"}">Jeff Beard</h4>
		<p>Phone: <a href="${"tel:602.799.8904"}">602.799.8904</a>
			<br>
			Email: <a href="${"mailto:jbeard@premiertechsales.com"}">jbeard@premiertechsales.com</a></p></div>
	<div class="${"order-2 md: order-1"}"><h2 class="${"text-2xl font-headline mb-2"}">Have an Inquiry?</h2>
		<p>Send us a message and we&#39;ll get back to you as soon as possible</p>
		${(0, import_index_12277b03.v)(Contact, "Contact").$$render($$result, {}, {}, {})}</div></div>`;
});
