import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import WebView from '@tarojs/components-rn/dist/components/WebView';
import Text from '@tarojs/components-rn/dist/components/Text';
import WebViewBox from '../webViewBox/index.js';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "title": {
    "marginTop": scalePx2dp(10),
    "marginRight": 0,
    "marginBottom": scalePx2dp(10),
    "marginLeft": 0
  },
  "webview-contain": {
    "marginTop": 0,
    "marginRight": scalePx2dp(5),
    "marginBottom": 0,
    "marginLeft": scalePx2dp(5),
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(5),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(5),
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "gray"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){_classCallCheck(this,Index);return _super.apply(this,arguments);}_createClass(Index,[{key:"componentDidMount",value:function componentDidMount(){}},{key:"componentWillUnmount",value:function componentWillUnmount(){}},{key:"componentDidShow",value:function componentDidShow(){}},{key:"componentDidHide",value:function componentDidHide(){}},{key:"handleMessage",value:function handleMessage(){alert('I got a message');}},{key:"render",value:function render(){return jsxs(View,{children:[jsx(Text,{style:_styleSheet["title"],children:"\u8BBE\u7F6Ewebview\u7684\u9AD8\u5EA6\uFF0C\u5C31\u4E0D\u8BBE\u7F6E\u5BB9\u5668\u7684\u9AD8\u5EA6"}),jsx(ScrollView,{style:_styleSheet["webview-contain"],children:jsx(WebView,{style:{height:200},src:"https://www.baidu.com/",onMessage:this.handleMessage})}),jsx(Text,{style:_styleSheet["title"],children:"\u8BBE\u7F6E\u5BB9\u5668\u7684\u9AD8\u5EA6\uFF0C\u5C31\u4E0D\u8BBE\u7F6Ewebview\u7684\u9AD8\u5EA6"}),jsx(View,{style:_mergeEleStyles(_styleSheet["webview-contain"],{height:200}),children:jsx(WebView,{src:"https://www.baidu.com/",onMessage:this.handleMessage})}),jsx(View,{style:_mergeEleStyles(_styleSheet["webview-contain"],{height:200}),children:jsx(WebViewBox,{})})]});}}]);return Index;}(Component);

export { Index as default };
