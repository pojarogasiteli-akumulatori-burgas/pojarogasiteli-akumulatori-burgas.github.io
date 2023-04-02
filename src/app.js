import page from './lib/page.mjs';
import {html, render} from './lib/lit-html.js';

page('/', () => render(html`<h1>It Works!</h1>`, document.getElementById('content')));