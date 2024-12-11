class NavElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let a = document.createElement('a');
        a.innerHTML = this.getAttribute("name");
        a.href = this.getAttribute("url");
        a.style.color = "inherit";
        a.style.textDecoration = "none";

        if (this.getAttribute("url").includes('#')) {
            this.onclick = () => {
                let navbar = document.querySelector('.navbarAdaptive');
                if (navbar.classList.contains('active')) {
                    navbar.classList.toggle('active');
                }
            }
        }

        this.append(a);
    }

    static get observedAttributes() {
        return ['name', 'url'];
    }
}

customElements.define("nav-element", NavElement);