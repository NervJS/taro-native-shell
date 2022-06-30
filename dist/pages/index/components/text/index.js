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
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
Dimensions.get('window').width;

var indexScssStyleSheet = StyleSheet.create({
  "text-color-red": {
    "color": "red"
  },
  "text-color": {
    "color": "black"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getClassName(){var className=[];var args=arguments[0];var type=Object.prototype.toString.call(args).slice(8,-1).toLowerCase();if(type==='string'){args=args.trim();args&&className.push(args);}else if(type==='array'){args.forEach(function(cls){cls=_getClassName(cls).trim();cls&&className.push(cls);});}else if(type==='object'){for(var k in args){k=k.trim();if(k&&args.hasOwnProperty(k)&&args[k]){className.push(k);}}}return className.join(' ').trim();}function _getStyle(classNameExpression){var className=_getClassName(classNameExpression);var classNameArr=className.split(/\s+/);var style={};classNameArr.reduce((sty,cls)=>Object.assign(sty,_styleSheet[cls.trim()]),style);return style;}var _styleSheet=indexScssStyleSheet;var content='我是一段文本，后面有三个空格，大概这么长 ___ ：   我是一段文本，我是一段文本，我是一段文本，我是一段文本，我是一段文本';var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){var _this;_classCallCheck(this,Index);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={style:false};_this.commonTestCase=[{testTitle:'无任何参数',testComment:'文本默认不可选',testConfig:{}},{testTitle:'selectable',testComment:'长按复制（ios全部复制，安卓可选择复制）',testConfig:{selectable:true}},{testTitle:'onClick',testComment:'点击文本弹出toast, 并变色',testConfig:{onClick:function onClick(){_this.setState({style:!_this.state.style});showToast({title:'你点击了文本诶',icon:'none',duration:2000});}}}];return _this;}_createClass(Index,[{key:"render",value:function render(){var teststyle="text-color"+(this.state.style===true?"-red":"");return jsx(ScrollView,{children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:this.commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Text,_extends({},item.testConfig,{style:_getStyle(teststyle),children:content}))]})})]},item.testComment);})})})});}}]);return Index;}(Component);

export { Index as default };
