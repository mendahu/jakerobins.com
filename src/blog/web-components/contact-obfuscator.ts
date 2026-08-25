export class ContactObfuscator extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener("click", (event) => {
      event.preventDefault();

      const hrefValue = this.getAttribute("href");

      if (!hrefValue) {
        return;
      }

      const hrefDecoded = atob(hrefValue);
      location.href = hrefDecoded;
    });
  }
}

customElements.define("contact-obfuscator", ContactObfuscator, {
  extends: "a",
});
