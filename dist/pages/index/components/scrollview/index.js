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
    "height": scalePx2dp(150),
    "backgroundColor": "rgb(192, 192, 238)"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var showEventParams=function(event){return showToast({title:"\u4E8B\u4EF6\u53C2\u6570\uFF1A"+JSON.stringify(event),icon:'none',duration:2000});};var content='这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，';var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.commonTestCase=[{testTitle:'scrollTop & scrollWithAnimation',testComment:'竖直方向区域自动定位到中间的部分，有过渡动画',testConfig:{scrollWithAnimation:true,scrollTop:40},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\n";})},{testTitle:'scrollLeft & scrollWithAnimatio',testComment:'横向区域自动定位到中间的部分，有过渡动画',testConfig:{scrollX:true,scrollWithAnimation:true,scrollLeft:300},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF1B";})},{testTitle:'style',testComment:'黄色区域，默认竖直方向滚动',testConfig:{style:{backgroundColor:'yellow'}}},{testTitle:'scrollX',testComment:'区域可以横向滚动',testConfig:{scrollX:true}},{testTitle:'upperThreshold & onScrollToUpper',testComment:'距离顶部10px时，弹出提示框',testConfig:{upperThreshold:10,onScrollToUpper:showEventParams}},{testTitle:'upperThreshold & onScrollToUpper',testComment:'距离左边20px时，弹出提示框',testConfig:{scrollX:true,upperThreshold:20,onScrollToUpper:showEventParams}},{testTitle:'lowerThreshold & onScrollToLower',testComment:'距离底部10px时，弹出提示框',testConfig:{lowerThreshold:10,onScrollToLower:showEventParams}},{testTitle:'lowerThreshold & onScrollToLower',testComment:'距离右边20px时，弹出提示框',testConfig:{scrollX:true,lowerThreshold:20,onScrollToLower:showEventParams}},{testTitle:'scrollTop',testComment:'竖直方向区域自动定位到中间的部分（无动画）',testConfig:{scrollTop:40},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\n";})},{testTitle:'scrollLeft',testComment:'横向区域自动定位到中间的部分（无动画）',testConfig:{scrollX:true,scrollLeft:300},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF1B";})},{testTitle:'onScroll',testComment:"\u7AD6\u76F4\u65B9\u5411\u6EDA\u52A8\u65F6\uFF0C\u66F4\u65B0\u5750\u6807\u503C",testConfig:{onScroll:function onScroll(event){_this.setState({posY:event.detail});showToast({title:JSON.stringify(_this.state.posY),icon:'none',duration:2000});}},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\n";})},{testTitle:'onScroll & scrollX',testComment:"\u6A2A\u5411\u6EDA\u52A8\u65F6\uFF0C\u66F4\u65B0\u5750\u6807\u503C",testConfig:{scrollX:true,onScroll:function onScroll(event){_this.setState({posX:event.detail});showToast({title:JSON.stringify(_this.state.posX),icon:'none',duration:2000});}},testContext:Array.from(new Array(10).keys()).slice(-9).map(function(item){return item+"\u3001\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF1B";})}];_this.state={posX:'',posY:''};return _this;}_createClass(Index,[{key:"render",value:function render(){return jsx(ScrollView,{enableBackToTop:true,lowerThreshold:10,onScrollToLower:function onScrollToLower(){return showToast({title:'到底喽~',icon:'none',duration:2000});},children:jsx(View,{style:_styleSheet["test-item"],children:this.commonTestCase.map(function(item){var _item$testContext;return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(ScrollView,_extends({},item.testConfig,{style:_mergeEleStyles(_styleSheet["one-block"],_styleSheet["blue-block"]),children:jsx(Text,{style:_styleSheet["center-text"],children:(_item$testContext=item.testContext)!=null?_item$testContext:content})}))]})})]},item.testComment);})})});}}]);return Index;}(Component);

export { Index as default };
