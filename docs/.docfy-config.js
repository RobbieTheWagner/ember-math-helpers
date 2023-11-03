const autolinkHeadings = require('remark-autolink-headings');
const highlight = require('remark-highlight.js');
const codeImport = require('remark-code-import');

module.exports = {
  remarkPlugins: [
    [autolinkHeadings, { behavior: 'wrap' }],
    codeImport,
    highlight,
  ],
};
