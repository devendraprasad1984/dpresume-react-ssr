const template = document.createElement('template')

template.innerHTML = `
<style>
    h3{
        color: coral;
    }
</style>
<div>
    <img/>
    <div>
        <h3></h3>
    </div>
</div>
`

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerHTML=this.getAttribute('name')
        this.shadowRoot.querySelector('img').src=this.getAttribute('avatar')
    }
}

window.customElements.define('user-card', UserCard)