const pkg = require('../../package.json')

module.exports = {
    title: `${pkg.name}`,
    description: pkg.description,
    dest: `www`,
    themeConfig: {
        search: false,
        navbar: false
    },
    plugins: [
        ['@vuepress/register-components', {
            componentsDir: `${__dirname}/../../src/`
        }],
        ['demo-code', {
            jsLibs: [
                // vue.js is automatically inserted by the plugin
                `https://unpkg.com/${pkg.name}@${pkg.version}/${pkg.unpkg}`
            ],
            onlineBtns: {
                codepen: true,
                jsfiddle: true,
                codesandbox: true
            },
        }]
    ]
}