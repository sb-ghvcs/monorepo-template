const buildEslintCommand = (filenames) => [
  `prettier --write ${filenames.join(' ')}`,
  `npm run lint ui ${filenames.join(' ')}`,
];

const buildPylintCommand = (filenames) => [
  `poetry run black ${filenames.join(' ')}`,
  `npm run lint server ${filenames.join(' ')}`,
];

/** @type {import('lint-staged').Config} */
module.exports = {
  '**/*.(js|jsx|ts|tsx)': buildEslintCommand,
  '**/*.(py)': buildPylintCommand,
};
