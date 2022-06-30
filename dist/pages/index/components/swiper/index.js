import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import Swiper from '@tarojs/components-rn/dist/components/Swiper';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import Button from '@tarojs/components-rn/dist/components/Button';
import SwiperItem from '@tarojs/components-rn/dist/components/SwiperItem';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "flex-item": {
    "width": scalePx2dp(25),
    "height": scalePx2dp(50)
  },
  "demo-text-1": {
    "backgroundColor": "rebeccapurple"
  },
  "demo-text-2": {
    "backgroundColor": "rgb(216, 132, 132)"
  },
  "demo-text-3": {
    "backgroundColor": "rgb(74, 192, 157)"
  },
  "blue-block": {
    "backgroundColor": "rgb(192, 192, 238)"
  },
  "test-h": {
    "height": scalePx2dp(150),
    "backgroundColor": "chocolate"
  },
  "test-third": {
    "height": scalePx2dp(150),
    "backgroundColor": "darkblue"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var commonTestCase=[{testTitle:"默认",testComment:"不显示面板指示点，不自动切换，从第一个滑块开始显示",testConfig:{}}];var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={current:0};return _this;}_createClass(Index,[{key:"componentDidMount",value:function componentDidMount(){}},{key:"componentWillUnmount",value:function componentWillUnmount(){}},{key:"componentDidShow",value:function componentDidShow(){}},{key:"componentDidHide",value:function componentDidHide(){}},{key:"render",value:function render(){var _this2=this;return jsxs(View,{children:[jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" ","\u2014\u2014 \u5B98\u7F51\u7528\u4F8B:\u652F\u6301\u65E0\u9650\u6ED1\u52A8 \u2014\u2014"," "]})}),jsxs(Swiper,{current:this.state.current,indicatorColor:"#999",indicatorActiveColor:"#333",vertical:true,circular:true,indicatorDots:true,autoplay:true,style:_styleSheet["test-h"],children:[jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-1"],children:"1"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-2"],children:"2"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-3"],children:"3"})})]})]}),jsxs(View,{children:[jsx(Button,{onClick:function onClick(){return _this2.setState({current:0});},children:"\u5207\u6362\u52301"}),jsx(Button,{onClick:function onClick(){return _this2.setState({current:1});},children:"\u5207\u6362\u52302"}),jsx(Button,{onClick:function onClick(){return _this2.setState({current:2});},children:"\u5207\u6362\u52303"})]}),commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" ","\u2014\u2014 ",item.testTitle," \u2014\u2014"," "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsxs(Swiper,_extends({},item.testConfig,{style:_mergeEleStyles(_styleSheet["test-h"],{height:100}),children:[jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-1"],children:"1"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-2"],children:"2"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-3"],children:"3"})})]}))]})})]},item.testComment);}),jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u53EF\u8C03\u8BD5\u7528\u4F8B \u2014\u2014 "})}),jsxs(Swiper,{indicatorColor:"#999",indicatorActiveColor:"#333",circular:true,indicatorDots:true,autoplay:true,current:2,style:_styleSheet["test-third"],children:[jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-1"],children:"1"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-2"],children:"2"})}),jsx(SwiperItem,{children:jsx(View,{style:_styleSheet["demo-text-3"],children:"3"})})]})]})]});}}]);return Index;}(Component);

export { Index as default };
