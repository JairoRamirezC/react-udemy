// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
//   // presets: [
//   //   '@babel/preset-env',
//   //   '@babel/preset-react'
//   // ],
//   // plugins: [
//   //   '@babel/plugin-transform-modules-common.cjs'
//   // ]
// };

// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
// };

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {esmodules:true}}],
    ['@babel/preset-react', {runtime: 'automatic'}]
  ],
};