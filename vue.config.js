module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'common':'@/common',
                'network':'@/network',
                'views':'@/views',
            }
        },
    },
    lintOnSave:false,
    devServer: {
        overlay:{
            warning:false,
            errors:false
        },
 }
}