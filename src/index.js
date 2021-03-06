import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
class MyComponent extends LitElement {
  @property()
  text = 'Change Me';

  static get styles() {
    return css`
      .my-class {
        color: red;
      }
    `;
  }

  render() {
    return html`<span class="my-class">${this.text}</span>`;
  }
}

export default MyComponent;
