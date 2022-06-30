import _extends from '@babel/runtime/helpers/extends';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import ScrollView from '@tarojs/components-rn/dist/components/ScrollView';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import Slider from '@tarojs/components-rn/dist/components/Slider';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "progress-item": {
    "marginBottom": scalePx2dp(10)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.colors={activeColor:'#123',backgroundColor:'#abc',blockColor:'#9d1'};_this.commonTestCase=[{testTitle:'无任何参数',testComment:'就是单纯的一条线，最小值为0，最大值为100',testConfig:{}},{testTitle:'min showValue (以下都是showValue)',testComment:'设置最小值为50',testConfig:{min:50,showValue:true}},{testTitle:'max',testComment:'设置最大值为10',testConfig:{max:10,showValue:true}},{testTitle:'min, max',testComment:'最小值为20，最大值为60',testConfig:{min:20,max:60,showValue:true}},{testTitle:'step',testComment:'设置步长为10',testConfig:{step:10,showValue:true}},{testTitle:'disabled',testComment:'设置为禁用模式，无法修改步长',testConfig:{disabled:true,showValue:true}},{testTitle:'value',testComment:'设置值为20，怎么滑都不可改变',testConfig:{value:20,showValue:true}},{testTitle:'color',testComment:'背景条颜色为黄色',testConfig:{backgroundColor:'yellow',showValue:true}},{testTitle:'activeColor backgroundColor',testComment:'设置已选择的颜色为蓝色, 背景条颜色为abc',testConfig:{activeColor:'blue',backgroundColor:'#abc',showValue:true}},{testTitle:'blockColor',testComment:'设置滑块颜色为红色',testConfig:{blockColor:'red',showValue:true}},{testTitle:'onChanging',testComment:'当滑动时，打印信息',testConfig:{onChanging:function onChanging(e){console.log(e);},showValue:true}}];_this.state={addProcess:0,values:[0,50,0,20,0,0,20,10,0,0,0,0],colors:{activeColor:'#123',backgroundColor:'#abc',blockColor:'#9d1'}};return _this;}_createClass(Index,[{key:"onValueChange",value:function onValueChange(value,index){var tmpValues=_toConsumableArray(this.state.values);tmpValues[index]=value;this.setState({values:_toConsumableArray(tmpValues)});}},{key:"render",value:function render(){var _this2=this;return jsxs(ScrollView,{children:[jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u5B98\u7F51\u7528\u4F8B \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{children:"\u8BBE\u7F6E step"}),jsx(Slider,{step:1,value:50}),jsx(Text,{children:"\u663E\u793A\u5F53\u524D value"}),jsx(Slider,{step:1,value:50,showValue:true}),jsx(Text,{children:"\u8BBE\u7F6E\u6700\u5C0F/\u6700\u5927\u503C"}),jsx(Slider,{step:1,value:100,showValue:true,min:50,max:200})]})})]}),jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:this.commonTestCase.map(function(item,i){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Slider,_extends({value:_this2.state.values[i]},item.testConfig,{onChange:function(e){return _this2.onValueChange(e.detail.value,i);}.bind(_this2)}))]})})]},item.testComment);})})})]});}}]);return Index;}(Component);

export { Index as default };
