import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import { showToast } from '@tarojs/taro-rn/dist/lib/showToast';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import Button from '@tarojs/components-rn/dist/components/Button';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "btn-item": {
    "marginBottom": scalePx2dp(10)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var commonTestCase=[{testTitle:'size - default',testComment:'按钮 - 默认大小',testConfig:{size:"default"}},{testTitle:'size - mini',testComment:'按钮 - 小尺寸',testConfig:{size:"mini"}},{testTitle:'type - default',testComment:'按钮 - 默认类型',testConfig:{type:"default"}},{testTitle:'type - primary',testComment:'按钮 - primary类型',testConfig:{type:"primary"}},{testTitle:'type - warn',testComment:'按钮 - 警告类型',testConfig:{type:"warn"}},{testTitle:'plain - false',testComment:'按钮 - 不镂空',testConfig:{type:"primary",plain:false}},{testTitle:'plain - true',testComment:'按钮 - 镂空',testConfig:{type:"primary",plain:true}},{testTitle:'disabled - true',testComment:'按钮 - 禁用',testConfig:{type:"warn",disabled:true}},{testTitle:'disabled - false',testComment:'按钮 - 不禁用',testConfig:{type:"warn",disabled:false}},{testTitle:'loading - true',testComment:'按钮 - 加载中',testConfig:{type:"primary",loading:true}},{testTitle:'hoverStyle - blue',testComment:'按钮 - 点击按钮时，按钮变为蓝色',testConfig:{type:"primary",hoverStyle:{backgroundColor:'blue'}}},{testTitle:'hoverStartTime - 2000ms',testComment:'按钮 - 点击按钮时，按住2秒后出现点击态',testConfig:{type:"primary",hoverStartTime:2000,hoverStyle:{backgroundColor:'blue'}}},{testTitle:'hoverStayTime - 2000ms',testComment:'按钮 - 点击按钮时，按一次按钮，点击态维持2秒',testConfig:{type:"primary",hoverStyle:{backgroundColor:'blue'},hoverStayTime:2000}},{testTitle:'hoverStartTime=1s, hoverStayTime=2s',testComment:'按钮 - 点击按钮时，按一次按钮，1秒后出现点击态，点击态维持2秒',testConfig:{type:"primary",hoverStyle:{backgroundColor:'blue'},hoverStayTime:2000,hoverStartTime:1000}},{testTitle:'onClick - 点击事件',testComment:'按钮 - 点击按钮时，弹出点击成功toast',testConfig:{type:"primary",hoverStyle:{backgroundColor:'blue'},onClick:function onClick(){showToast({title:'你点击了按钮'});}}}];var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={};return _this;}_createClass(Index,[{key:"render",value:function render(){return jsx(ScrollView,{children:jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["components-page"],children:commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Button,_extends({},item.testConfig,{style:_styleSheet["btn-item"],children:"\u6309\u94AE"}))]})})]},item.testTitle);})}),jsx(Button,{type:"warn",hoverStartTime:2000,hoverStyle:{backgroundColor:'blue'},plain:true,children:"\u70B9\u6211\u770B\u770B"})]})});}}]);return Index;}(Component);

export { Index as default };
