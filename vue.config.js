module.exports = {
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/\.svg$/)
            .use('html-loader')
            .loader('html-loader')
    },

    pluginOptions: {
        apollo: {
            enableMocks: false,
            enableEngine: false
        }
    }
}
