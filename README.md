# Taro Native Shell

参考文档：[Taro React Native 端开发流程 - 分离模式](https://docs.taro.zone/docs/react-native#%E5%88%86%E7%A6%BB%E6%A8%A1%E5%BC%8F)

Taro 原生 React Native 壳工程，和 React Native init 的工程的区别如下：


0. 集成了 [expo](https://docs.expo.dev/bare/installing-expo-modules/)
1. 集成了 Taro 依赖的所有原生库
2. debug 方式变更: 在 JS 工程中 `yarn dev:rn` 启动 metro server
3. release 方式变更: 在 JS 工程中 `yarn buid:rn` 打包 jsbundle 并通过配置 `rn.output` 输出到壳工程

## 该仓库如何生成

1. 使用 `react-native` [初始化项目](https://reactnative.dev/docs/environment-setup)

```
npx react-native init taroDemo --version 0.68.1
```

2. 使用 `expo-cli` [自动安装 expo](https://docs.expo.dev/bare/installing-expo-modules/#automatic-installation)

```
npx install-expo-modules@latest
```

3. 修改部分代码以支持 Taro，此部分可以直接 cherry-pick
   - [scripts] 修改 `android`, `ios` 脚本，增加 `upgradePeerdeps` 脚本
   - [devDependencies] 增加 `install-peerdeps` 和 `pod-install`
   - [ios] 添加相关 APP 权限说明
   - [ios] 使用亮色主题
   - [android] 添加国内 maven 源
   - [android] 添加 gif 支持
   - [android] 注释原 react native 打包
   - [android] 使用亮色主题
   - [docs] 复制该 `README.md` 文件
   - [license] 复制 LICENSE 文件

4. 更新 Taro 需要的依赖（如果还没正式发布，则使用对应的 alpha 或 beta 版本）

```
yarn
yarn upgradePeerdeps
```

5. 添加打包脚本，此部分可以直接 cherry-pick
   - [fastlane] 添加 Android、iOS fastlane 配置
   - [actions] 添加 Android、iOS 打包脚本
   - [ios] 添加默认图标
   - [ios] 添加 ITSAppUsesNonExemptEncryption false
   - [ios] 添加 main.jsbundle assets 引用

## React Native 小版本更新

https://react-native-community.github.io/upgrade-helper/

## Taro 版本更新

> 使用 Taro 最新版，或者修改 `upgradePeerdeps` 指定 Taro 版本，再执行：

```
yarn upgradePeerdeps
```