const pkg = require('../../package.json')

module.exports = {
    title: `${pkg.name}`,
    description: pkg.description,
    dest: `www`,
    themeConfig: {
        search: false,
        nav: [
            { text: 'v1', link: '/' },
            { text: 'Code', link: 'https://github.com/voorhoede/vue-dato-image' },
        ]
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
                codepen: false,
                jsfiddle: false,
                codesandbox: false
            },
        }]
    ]
}