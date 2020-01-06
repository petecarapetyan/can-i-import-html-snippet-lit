import { LitElement, html, css, TemplateResult } from 'lit-element';

export class ProjectOne extends LitElement {
  static get properties() {
    return {
      htmlcontent: { type: TemplateResult },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: block;
        padding: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.htmlcontent = '<hr>';
    this._fileContents();
  }

  _fileContents() {
    fetch('../../../static/my.html', { mode: 'no-cors' })
      .then(response => response.text())
      .then(data => {
        console.log("THIS IS WHAT THE INNARDS OF THE FILE LOOKS LIKE:\n",data);
        this.htmlcontent = new TemplateResult([data], [], 'html');
      })
      .catch(error => console.error(error));
  }

  render() {
    return html`
      <h1>Demo of how a static file furnish an html snippet to a Lit WC</h1>
      <main>
        <p>The content below the horizontal line is fron an external HTML snippet.</p>
        <p>You can examine my.html file for the actual content, or read console.log</p>
        <hr>
        ${this.htmlcontent}
      </main>
    `;
  }
}
