import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setViewport } from '@web/test-runner-commands';
import { TopNav } from '../../../src/components/top-nav/top-nav.js';

describe('TopNav', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TopNav>(html`<top-nav></top-nav>`);

    await expect(el).shadowDom.to.be.accessible();
  });

  describe('mobile', () => {
    beforeEach(async () => {
      await setViewport({ width: 600, height: 1000 });
    });
  
    it('renders the menu icon', async () => {
      /* ... */
    });

    it('opens the menu by clicking the button', async () => {
      /* ... 
      const el = await fixture<TopNav>(html`<top-nav></top-nav>`);
      el.shadowRoot!.querySelector('button')!.click();
      expect(el.counter).to.equal(6);
      */
    });

    it('does not show the menu by default', async () => {
      const el = await fixture<TopNav>(html`<top-nav></top-nav>`);

      // TODO: This fails as isOpen is undefined but unsure why. Investigate
      expect(el.isOpen).to.equal(false);
    });

    it('can open the menu via an attribute', async () => {
        const el = await fixture<TopNav>(html`<top-nav open="true"></top-nav>`);

        // TODO: This fails as isOpen is undefined but unsure why. Investigate
        expect(el.isOpen).to.equal(true);
    });
  });

  describe('desktop', () => {
    beforeEach(async () => {
      await setViewport({ width: 1200, height: 1000 });
    });
  
    it('does not render the menu icon', async () => {
      /* ... */
    });
  });
});
