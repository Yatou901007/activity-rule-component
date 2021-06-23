/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ActivityRule} from '../activity-rule.js';

import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('activity-rule', () => {
  test('is defined', () => {
    const el = document.createElement('activity-rule');
    assert.instanceOf(el, ActivityRule);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<activity-rule></activity-rule>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<activity-rule name="Test"></activity-rule>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<activity-rule></activity-rule>`)) as ActivityRule;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<activity-rule></activity-rule>`)) as ActivityRule;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
