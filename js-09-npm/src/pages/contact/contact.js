import "./contact.css";
import "/src/css/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
bootstrap

import { insertMainFooter } from "/src/modules/footer/footer";
import { insertMainHeader } from "/src/modules/header/header";

window.addEventListener("load", async () => document.getElementById("app").innerHTML = `
    ${insertMainHeader()} 
    <main class="container text-center my-4">
      <h1>Contáctanos</h1>
    </main>
    ${insertMainFooter()}
`
);