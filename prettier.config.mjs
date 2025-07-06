import vercelPrettierOptions from '@vercel/style-guide/prettier';

/** @type {import('prettier').Config} */
const config = {
  ...vercelPrettierOptions,
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: [
    // Group: 'builtin' - Node.js builtins
    '^(assert|buffer|child_process|cluster|console|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|tty|url|util|v8|vm|zlib)(/.*)?$',

    // Group: 'external' - npm packages
    '^react$', // React prioritized
    '^next', // Next.js prioritized
    '^[a-z]', // Other external packages

    // Group: 'internal' - Your aliases (customize based on your setup)
    '^@/.*',

    // Group: 'parent' - ../ imports
    '^\\.\\.(?!/?$)',

    // Group: 'sibling' - ./ imports
    '^\\./(?!/?$)',

    // Group: 'index' - index files
    '^\\./?$',
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
