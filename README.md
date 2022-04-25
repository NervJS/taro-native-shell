# Taro Native Shell

参考文档：[Taro React Native 端开发流程 - 分离模式](https://docs.taro.zone/docs/react-native#%E5%88%86%E7%A6%BB%E6%A8%A1%E5%BC%8F)

Taro 原生 React Native 壳工程，和 React Native init 的工程的区别如下：


0. 集成了 [expo](https://docs.expo.dev/bare/installing-expo-modules/)
1. 集成了 Taro 依赖的所有原生库
2. debug 方式变更: 在 JS 工程中 `yarn dev:rn` 启动 metro server
3. release 方式变更: 在 JS 工程中 `yarn buid:rn` 打包 jsbundle 并通过配置 `rn.output` 输出到壳工程
