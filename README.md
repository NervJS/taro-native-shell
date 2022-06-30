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

## 附：Taro 原生依赖明细表

> 由 [feat-add-dep-analysis-scripte](https://github.com/wuba/taro-react-native/tree/feat-add-dep-analysis-scripte) 脚本生成，如需裁剪壳工程，可参考此附录。

### taro-rn

```js
{
  authorize: Set(3) {
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1',
    'expo-location@~14.0.2'
  },
  chooseImage: Set(2) {
    'react-native-syan-image-picker@0.5.3',
    'react-native-safe-area-context@~3.4.1'
  },
  chooseVideo: Set(4) {
    '@react-native-community/cameraroll@~4.1.2',
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1',
    'react-native-safe-area-context@~3.4.1'
  },
  clearStorage: Set(1) { '@react-native-async-storage/async-storage@~1.15.11' },
  compressImage: Set(1) { 'react-native-image-resizer@~1.4.5' },
  createCameraContext: Set(1) { 'expo-camera@~12.2.0' },
  createInnerAudioContext: Set(1) { 'expo-av@~11.2.3' },
  downloadFile: Set(1) { 'expo-file-system@~14.0.0' },
  getClipboardData: Set(1) { '@react-native-community/clipboard@~1.5.1' },
  getFileInfo: Set(1) { 'expo-file-system@~14.0.0' },
  getLocation: Set(2) {
    '@react-native-community/geolocation@~2.0.2',
    'expo-location@~14.0.2'
  },
  getNetworkType: Set(1) { '@react-native-community/netinfo@~7.1.2' },
  getRecorderManager: Set(2) { 'expo-av@~11.2.3', 'expo-file-system@~14.0.0' },
  getSavedFileInfo: Set(1) { 'expo-file-system@~14.0.0' },
  getSavedFileList: Set(1) { 'expo-file-system@~14.0.0' },
  getScreenBrightness: Set(1) { 'expo-brightness@~10.2.0' },
  getSetting: Set(3) {
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1',
    'expo-location@~14.0.2'
  },
  getStorage: Set(1) { '@react-native-async-storage/async-storage@~1.15.11' },
  getStorageInfo: Set(1) { '@react-native-async-storage/async-storage@~1.15.11' },
  getSystemInfo: Set(2) {
    'react-native-safe-area-context@~3.4.1',
    'react-native-device-info@~8.4.8'
  },
  getSystemInfoSync: Set(2) {
    'react-native-safe-area-context@~3.4.1',
    'react-native-device-info@~8.4.8'
  },
  offAccelerometerChange: Set(1) { 'expo-sensors@~11.2.0' },
  offDeviceMotionChange: Set(1) { 'expo-sensors@~11.2.0' },
  offGyroscopeChange: Set(1) { 'expo-sensors@~11.2.0' },
  offLocationChange: Set(1) { '@react-native-community/geolocation@~2.0.2' },
  offNetworkStatusChange: Set(1) { '@react-native-community/netinfo@~7.1.2' },
  onAccelerometerChange: Set(1) { 'expo-sensors@~11.2.0' },
  onDeviceMotionChange: Set(1) { 'expo-sensors@~11.2.0' },
  onGyroscopeChange: Set(1) { 'expo-sensors@~11.2.0' },
  onLocationChange: Set(1) { '@react-native-community/geolocation@~2.0.2' },
  onNetworkStatusChange: Set(1) { '@react-native-community/netinfo@~7.1.2' },
  openSetting: Set(3) {
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1',
    'expo-location@~14.0.2'
  },
  previewImage: Set(4) {
    '@react-native-community/cameraroll@~4.1.2',
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1',
    'expo-file-system@~14.0.0'
  },
  removeSavedFile: Set(1) { 'expo-file-system@~14.0.0' },
  removeStorage: Set(1) { '@react-native-async-storage/async-storage@~1.15.11' },
  saveFile: Set(1) { 'expo-file-system@~14.0.0' },
  saveImageToPhotosAlbum: Set(3) {
    '@react-native-community/cameraroll@~4.1.2',
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1'
  },
  saveVideoToPhotosAlbum: Set(3) {
    '@react-native-community/cameraroll@~4.1.2',
    'expo-camera@~12.2.0',
    'expo-image-picker@~13.1.1'
  },
  scanCode: Set(5) {
    'react-native-safe-area-context@~3.4.1',
    'expo-camera@~12.2.0',
    'expo-barcode-scanner@~11.3.0',
    '@react-native-community/cameraroll@~4.1.2',
    'expo-image-picker@~13.1.1'
  },
  setClipboardData: Set(1) { '@react-native-community/clipboard@~1.5.1' },
  setKeepScreenOn: Set(1) { 'expo-keep-awake@~10.1.1' },
  setScreenBrightness: Set(1) { 'expo-brightness@~10.2.0' },
  setStorage: Set(1) { '@react-native-async-storage/async-storage@~1.15.11' },
  showActionSheet: Set(1) { 'react-native-safe-area-context@~3.4.1' },
  startAccelerometer: Set(1) { 'expo-sensors@~11.2.0' },
  startDeviceMotionListening: Set(1) { 'expo-sensors@~11.2.0' },
  startGyroscope: Set(1) { 'expo-sensors@~11.2.0' },
  startLocationUpdate: Set(1) { '@react-native-community/geolocation@~2.0.2' },
  stopAccelerometer: Set(1) { 'expo-sensors@~11.2.0' },
  stopDeviceMotionListening: Set(1) { 'expo-sensors@~11.2.0' },
  stopGyroscope: Set(1) { 'expo-sensors@~11.2.0' },
  stopLocationUpdate: Set(1) { '@react-native-community/geolocation@~2.0.2' },
  uploadFile: Set(1) { 'expo-file-system@~14.0.0' }
}
```

### taro-components-rn

```js
{
  Camera: Set(3) {
    'expo@~45.0.2',
    'expo-camera@~12.2.0',
    'expo-barcode-scanner@~11.3.0'
  },
  Image: Set(1) { 'react-native-svg@~12.1.1' },
  Picker: Set(1) { '@react-native-picker/picker@~2.2.1' },
  PickerView: Set(1) { '@react-native-picker/picker@~2.2.1' },
  RichText: Set(1) { 'react-native-webview@~11.14.3' },
  Slider: Set(1) { '@react-native-community/slider@~4.1.12' },
  Swiper: Set(1) { 'react-native-pager-view@~5.4.9' },
  Video: Set(3) {
    'expo@~45.0.2',
    'expo-av@~11.2.3',
    'react-native-svg@~12.1.1'
  },
  CoverImage: Set(1) { 'react-native-svg@~12.1.1' },
  WebView: Set(1) { 'react-native-webview@~11.14.3' }
}
```