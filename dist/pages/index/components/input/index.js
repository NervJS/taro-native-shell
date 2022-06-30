import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import React from 'react';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import Input from '@tarojs/components-rn/dist/components/Input';
import Button from '@tarojs/components-rn/dist/components/Button';
import { showToast } from '@tarojs/taro-rn/dist/lib/showToast';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "components-page__body": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "example": {
    "marginBottom": scalePx2dp(10)
  },
  "example-header": {
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(5),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(5)
  },
  "example-body": {
    "marginTop": 0,
    "marginRight": "auto",
    "marginBottom": 0,
    "marginLeft": "auto",
    "width": "80%",
    "backgroundColor": "white",
    "borderColor": "lightgray",
    "borderWidth": 1,
    "borderStyle": "solid"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var PageInput=function(_React$Component){_inherits(PageInput,_React$Component);var _super=_createSuper(PageInput);function PageInput(){var _this;_classCallCheck(this,PageInput);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={value:""};_this.ref=React.createRef();_this.onInput=function(e){_this.setState({value:e.detail.value});};return _this;}_createClass(PageInput,[{key:"showStatus",value:function showStatus(){var _that$ref,_that$ref$current;that=this;showToast({title:(_that$ref=that.ref)!=null&&(_that$ref$current=_that$ref.current)!=null&&_that$ref$current.isFocused!=null&&_that$ref$current.isFocused()?'focus状态':'blur状态'});}},{key:"render",value:function render(){var _this2=this;return jsxs(ScrollView,{style:_styleSheet["components-page"],children:[jsx(View,{style:_styleSheet["components-page__header"]}),jsxs(View,{style:_styleSheet["components-page__body"],children:[jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u53EF\u4EE5\u81EA\u52A8\u805A\u7126\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"text",placeholder:"\u5C06\u4F1A\u83B7\u53D6\u7126\u70B9",autoFocus:true})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u63A7\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"text",placeholder:"\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E3A10",maxlength:10,onFocus:function onFocus(val){console.log('聚焦',val);},onBlur:function onBlur(val){console.log('失焦',val);}})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u5B9E\u65F6\u83B7\u53D6\u8F93\u5165\u503C"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"text",placeholder:"\u8F93\u5165\u540C\u6B65\u5230view\u4E2D",value:this.state.value,onInput:this.onInput})}),this.state.value]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u6570\u5B57\u8F93\u5165\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"number",placeholder:"\u8FD9\u662F\u4E00\u4E2A\u6570\u5B57\u8F93\u5165\u6846"})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u5BC6\u7801\u8F93\u5165\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"password",password:true,placeholder:"\u8FD9\u662F\u4E00\u4E2A\u5BC6\u7801\u8F93\u5165\u6846"})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u8EAB\u4EFD\u8BC1\u8F93\u5165\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"idcard",placeholder:"\u8EAB\u4EFD\u8BC1\u8F93\u5165\u952E\u76D8"})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u63A7\u5236\u5360\u4F4D\u7B26\u989C\u8272\u7684input"}),jsx(View,{style:_styleSheet["example-body"],children:jsx(Input,{type:"text",placeholder:"\u5360\u4F4D\u7B26\u5B57\u4F53\u662F\u7EA2\u8272\u7684",placeholderTextColor:"#ff00ff"})})]}),jsxs(View,{style:_mergeEleStyles(_styleSheet["components-page__body-example"],_styleSheet["example"]),children:[jsx(View,{style:_styleSheet["example-header"],children:"\u4F7F\u7528ref\u8C03\u7528 .focus() .blur() .clear() .isFocused()"}),jsxs(View,{style:_styleSheet["example-body"],children:[jsx(Input,{ref:this.ref,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),jsx(Button,{type:"primary",onClick:function onClick(){var _this2$ref,_this2$ref$current;(_this2$ref=_this2.ref)==null?void 0:(_this2$ref$current=_this2$ref.current)==null?void 0:_this2$ref$current.focus==null?void 0:_this2$ref$current.focus();_this2.showStatus();setTimeout(function(){var _this2$ref2,_this2$ref2$current;(_this2$ref2=_this2.ref)==null?void 0:(_this2$ref2$current=_this2$ref2.current)==null?void 0:_this2$ref2$current.blur==null?void 0:_this2$ref2$current.blur();_this2.showStatus();},3000);},children:"\u8C03\u7528 .focus() 3s\u540Eblur"}),jsx(Button,{type:"warn",onClick:function onClick(){var _this2$ref3,_this2$ref3$current;return (_this2$ref3=_this2.ref)==null?void 0:(_this2$ref3$current=_this2$ref3.current)==null?void 0:_this2$ref3$current.blur==null?void 0:_this2$ref3$current.blur();},children:"\u8C03\u7528 .blur()"}),jsx(Button,{type:"primary",onClick:function onClick(){var _this2$ref4,_this2$ref4$current;return (_this2$ref4=_this2.ref)==null?void 0:(_this2$ref4$current=_this2$ref4.current)==null?void 0:_this2$ref4$current.clear==null?void 0:_this2$ref4$current.clear();},children:"\u8C03\u7528 .clear()"}),jsx(Button,{type:"warn",onClick:function onClick(){var _this2$ref5,_this2$ref5$current;if((_this2$ref5=_this2.ref)!=null&&(_this2$ref5$current=_this2$ref5.current)!=null&&_this2$ref5$current.isFocused!=null&&_this2$ref5$current.isFocused()){alert('Yes!');}else {alert('Nooooo!');}},children:"\u8C03\u7528 .isFocused()"})]})]})]})]});}}]);return PageInput;}(React.Component);

export { PageInput as default };
