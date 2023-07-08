const targets = ['vue3', 'solid', 'svelte', 'react'];
const options = {};
for (const target of targets) {
  options[target] = options[target] ?? {};
  options[target].typescript = true;
}

/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/**',
  targets,
  options,
};
