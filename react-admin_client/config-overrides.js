const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({ javascriptEnabled: true, modifyVars: { '@primary-color': '#1DA57A' }, }),
)