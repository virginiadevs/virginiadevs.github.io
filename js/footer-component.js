// MY BRAND FOOTER

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">

        <style>
            footer {
                margin: 1rem 0; display: flex; justify-content: center; align-items: center;
            }
            footer .my-logo {
                --size: 40px; width: var(--size); height: var(--size);
            }
            footer .my-logo img { 
                width: 100%; 
            }
            footer p {
                font-family: 'Poppins', sans-serif;
                font-size: 12px; color: var(--grey); margin-top: 7px;
            }
        </style>
        <footer>
            <figure class="my-logo">
                <img src="img/virginiadevs-logo.webp" alt="Logo de VirginiaDevs">
            </figure>

            <p>Creado con <i class="fas fa-heart fa-sm"></i> por VirginiaDevs.</p>
        </footer>
        `;
    }
}

customElements.define("brand-footer", myFooter);