import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import Icon from '@tarojs/components-rn/dist/components/Icon';
import Text from '@tarojs/components-rn/dist/components/Text';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
Dimensions.get('window').width;

var indexScssStyleSheet = StyleSheet.create({});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var commonTestCase=[{testTitle:"success",testComment:"成功图标，默认23px，默认颜色",testConfig:{type:"success"}},{testTitle:"success",testComment:"成功图标，黑色",testConfig:{type:"success",color:"black"}},{testTitle:"success",testComment:"成功图标，设置60px，紫色",testConfig:{type:"success",size:"60",color:"#9714d8"}},{testTitle:"success_no_circle",testComment:"成功图标，无圈圈",testConfig:{type:"success_no_circle",size:"60"}},{testTitle:"info",testComment:"信息图标",testConfig:{type:"info",size:"60"}},{testTitle:"warn",testComment:"警告图标",testConfig:{type:"warn",size:"60"}},{testTitle:"waiting",testComment:"等待图标",testConfig:{type:"waiting",size:"60"}},{testTitle:"cancel",testComment:"取消图标",testConfig:{type:"cancel",size:"60"}},{testTitle:"download",testComment:"下载图标",testConfig:{type:"download",size:"60"}},{testTitle:"search",testComment:"搜索图标",testConfig:{type:"search",size:"60"}},{testTitle:"clear",testComment:"清除图标",testConfig:{type:"clear",size:"60"}}];var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){_classCallCheck(this,Index);return _super.apply(this,arguments);}_createClass(Index,[{key:"render",value:function render(){return jsx(ScrollView,{children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" ","\u2014\u2014 ",item.testTitle," \u2014\u2014"," "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Icon,_extends({},item.testConfig))]})})]},item.testComment);})})})});}}]);return Index;}(Component);

export { Index as default };
