import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

/**
 * @fires menu-opened - Fires when the hamburger menu is opened.
 * @fires menu-closed - Fires when the hamburger menu is closed.
 */
export class TopNavImpl extends LitElement {
  // Is the menu currently open or not
  @property({ type: Boolean, attribute: 'open' }) 
  isOpen = false;

  // The hamburger menu button
  @query('button')
  button!: HTMLButtonElement;

  // Toggle aria-expanded attribute
  private async __toggle() {
    // Get the aria-expanded attribute and check if the value is "false"
    // If it's "false", isOpen is true
    // If it's "true", isOpen is false
    this.isOpen = this.button.getAttribute('aria-expanded') === 'false';
    // Let the update finish before doing anything else
    await this.updateComplete;
    // Change the aria-expanded value accordingly
    this.button.setAttribute('aria-expanded', this.isOpen.toString());
    this.__dispatchMenuEvent();
  }

  // Allow users to close the menu by pressing the escape key
  private __keyupHandler(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      this.isOpen = false;
    }
  }

  private __dispatchMenuEvent() {
    const name = this.isOpen ? 'menu-opened' : 'menu-closed';
    const eventOptions = {
      bubbles: true,
      composed: true
    }

    this.dispatchEvent(new CustomEvent(name, eventOptions));
  }

  render() {
    return html`
      <nav id="main-nav" aria-label="Main" @keyup="${this.__keyupHandler}">
        <button @click=${this.__toggle} type="button" aria-expanded="${this.isOpen}" aria-label="Menu" aria-controls="main-nav" part="button">
          <svg width="24" height="24" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
          </svg>
        </button>
        <slot></slot>
      </nav>
    `;
  }
}