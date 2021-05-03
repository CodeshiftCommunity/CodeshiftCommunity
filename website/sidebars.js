module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['introduction', 'guiding-principles', 'faq', 'ecosystem'],
    },
    {
      type: 'category',
      label: 'Docs',
      collapsed: false,
      items: ['authoring', 'consuming', 'testing', 'contribution'],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/your-first-codemod',
        'guides/understanding-asts',
        'guides/when-not-to-codemod',
        'guides/prompting-for-human-input',
      ],
    },
    {
      type: 'category',
      label: 'Recipes',
      collapsed: false,
      items: ['recipes/import-manipulation', 'recipes/react'],
    },
  ],
};
