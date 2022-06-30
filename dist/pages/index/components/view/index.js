import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
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
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var commonTestCase=[{testTitle:'hoverStyle',testComment:'按下去时区域会变色',testConfig:{hoverStyle:{backgroundColor:'red'}}},{testTitle:'hoverStartTime',testComment:'按下去2秒后才会变色',testConfig:{hoverStyle:{backgroundColor:'red'},hoverStartTime:2000,hoverStayTime:2000}},{testTitle:'hoverStayTime',testComment:'按下去后变色会持续较长时间',testConfig:{hoverStyle:{backgroundColor:'red'},hoverStayTime:2000}}];var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){_classCallCheck(this,Index);return _super.apply(this,arguments);}_createClass(Index,[{key:"componentDidMount",value:function componentDidMount(){console.log('View componentDidMount');}},{key:"componentWillUnmount",value:function componentWillUnmount(){console.log('View componentWillUnmount');}},{key:"componentDidShow",value:function componentDidShow(){console.log('View componentDidShow');}},{key:"componentDidHide",value:function componentDidHide(){console.log('View componentDidHide');}},{key:"render",value:function render(){return jsxs(ScrollView,{children:[jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u5B98\u7F51\u7528\u4F8B \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{children:"flex-direction: row \u6A2A\u5411\u5E03\u5C40"}),jsxs(View,{style:_mergeEleStyles(_styleSheet["flex-wrp"],{"flexDirection":"row"}),children:[jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["demo-text-1"])}),jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["demo-text-2"])}),jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["demo-text-3"])})]}),jsx(Text,{children:"flex-direction: column \u7EB5\u5411\u5E03\u5C40"}),jsxs(View,{style:_mergeEleStyles(_styleSheet["flex-wrp"],{"flexDirection":"column"}),children:[jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["flex-item-V"],_styleSheet["demo-text-1"])}),jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["flex-item-V"],_styleSheet["demo-text-2"])}),jsx(View,{style:_mergeEleStyles(_styleSheet["flex-item"],_styleSheet["flex-item-V"],_styleSheet["demo-text-3"])})]})]})})]}),commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(View,_extends({},item.testConfig,{style:_mergeEleStyles(_styleSheet["one-block"],_styleSheet["blue-block"]),children:jsx(Text,{style:_styleSheet["center-text"],children:"\u70B9\u51FB\u8BD5\u8BD5"})}))]})})]},item.testComment);}),jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u53EF\u8C03\u8BD5\u7528\u4F8B \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsx(View,{hoverStyle:{backgroundColor:'#888'},style:_styleSheet["components-page"],children:jsx(View,{style:_mergeEleStyles(_styleSheet["one-block"],_styleSheet["blue-block"],{margin:30}),hoverStyle:{backgroundColor:'#fff'},children:jsx(Text,{style:_styleSheet["center-text"],children:"\u70B9\u51FB\u8BD5\u8BD5"})})})})]})]});}}]);return Index;}(Component);

export { Index as default };
