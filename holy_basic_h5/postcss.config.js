module.exports = {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8"
          ]
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        // 根据设计图尺寸写，在375px的设计稿为37.5,在750px的设计稿为750
        propList: ['*'], // 需要被转换的属性
        selectorBlackList: [] // 不进行px转换的选择器
      }
    }
}