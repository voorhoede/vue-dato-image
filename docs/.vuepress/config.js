const pkg = require('../../package.json')

module.exports = {
    title: `${pkg.name}`,
    description: pkg.description,
    dest: `dist/`,
    themeConfig: {
        search: false,
        navbar: false
    },
    plugins: [
        ['@vuepress/register-components', {
            componentsDir: `${__dirname}/../../src/`
        }],
        ['demo-code', {
            onlineBtns: { codepen: false, jsfiddle: false, codesandbox: false },
        }]
    ]
}