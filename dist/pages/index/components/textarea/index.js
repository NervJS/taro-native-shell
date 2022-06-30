import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import Textarea from '@tarojs/components-rn/dist/components/Textarea';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
Dimensions.get('window').width;

var indexScssStyleSheet = StyleSheet.create({});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){_classCallCheck(this,Index);return _super.apply(this,arguments);}_createClass(Index,[{key:"render",value:function render(){return jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{children:"\u8F93\u5165\u533A\u57DF\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761"}),jsx(Textarea,{style:{"backgroundColor":"#f00","width":"100%","minHeight":280,"paddingTop":0,"paddingRight":30,"paddingBottom":0,"paddingLeft":30},autoHeight:true}),jsx(Text,{children:"\u8FD9\u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u52A8\u805A\u7126\u7684 textarea"}),jsx(Textarea,{style:{"backgroundColor":"#fff","width":"100%","height":80,"paddingTop":0,"paddingRight":30,"paddingBottom":0,"paddingLeft":30},autoFocus:true})]});}}]);return Index;}(Component);

export { Index as default };
