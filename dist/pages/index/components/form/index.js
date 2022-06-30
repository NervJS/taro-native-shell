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
import Input from '@tarojs/components-rn/dist/components/Input';
import Label from '@tarojs/components-rn/dist/components/Label';
import Form from '@tarojs/components-rn/dist/components/Form';
import Button from '@tarojs/components-rn/dist/components/Button';
import Radio from '@tarojs/components-rn/dist/components/Radio';
import RadioGroup from '@tarojs/components-rn/dist/components/RadioGroup';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
Dimensions.get('window').width;

var indexScssStyleSheet = StyleSheet.create({});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={inputValue:"",checkValue:"female"};return _this;}_createClass(Index,[{key:"render",value:function render(){return jsx(ScrollView,{children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u8868\u5355 \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:"\u591A\u4E2A\u8868\u5355\u7EC4\u4EF6\u5171\u540C\u4F7F\u7528"}),jsxs(Form,{onSubmit:function onSubmit(e){console.log("onSubmit",e);showToast({title:JSON.stringify(e),icon:"none",duration:3000});},onReset:function onReset(e){return showToast({title:JSON.stringify(e),icon:"none",duration:3000});},children:[jsx(View,{style:_mergeEleStyles(_styleSheet["test-block-bd"],{margin:20}),children:jsx(Input,{name:"text",type:"text",placeholder:"\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E3A10",maxLength:-1})}),jsx(View,{style:{margin:20},children:jsxs(RadioGroup,{name:"checkbox",children:[jsx(Label,{for:"1",style:_styleSheet["checkbox-list__label"],children:jsx(Radio,{value:"female",checked:this.state.checkValue==="female",style:_styleSheet["checkbox-list__checkbox"],children:" 女"})},"1"),jsx(Label,{for:"2",style:_styleSheet["checkbox-list__label"],children:jsx(Radio,{value:"male",checked:this.state.checkValue==="male",style:_styleSheet["checkbox-list__checkbox"],children:" 男"})},"2")]})}),jsx(Button,{formType:"submit",type:"primary",children:"Submit"}),jsx(Button,{formType:"reset",type:"default",children:"Reset"})]})]})})]})})})});}}]);return Index;}(Component);

export { Index as default };
