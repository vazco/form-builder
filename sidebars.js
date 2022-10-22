/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Form Builder Documentation',
      link: {
        type: 'doc',
        id: 'intro',
      },
      collapsed: false,
      collapsible: false,
      items: [
        'form-definition',
        'supported-stack',
        'technical-requirements',
        'translations',
        'custom-components',
      ],
    },
  ],
};

module.exports = sidebars;
