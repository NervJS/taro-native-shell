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
import Progress from '@tarojs/components-rn/dist/components/Progress';
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

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.commonTestCase=[{testTitle:'无任何参数',testComment:'没有任何进度，灰灰的一条',testConfig:{}},{testTitle:'showInfo',testComment:'显示进度百分比',testConfig:{showInfo:true,percent:10}},{testTitle:'strokeWidth',testComment:'很宽的进度条',testConfig:{showInfo:true,percent:10,strokeWidth:20}},{testTitle:'activeColor & backgroundColor',testComment:'进度条的颜色为蓝色，背景色为粉色',testConfig:{showInfo:true,percent:10,activeColor:'blue',backgroundColor:'#ecb2da'}},{testTitle:'active',testComment:'重新加载时有动画哦',testConfig:{active:true,percent:80}}];_this.state={addProcess:0};return _this;}_createClass(Index,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;setInterval(function(){if(_this2.state.addProcess<100){_this2.setState({addProcess:_this2.state.addProcess+1});}},500);}},{key:"render",value:function render(){return jsxs(ScrollView,{children:[jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u5B98\u7F51\u7528\u4F8B \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Progress,{percent:20,showInfo:true,strokeWidth:2,style:_styleSheet["progress-item"]}),jsx(Progress,{percent:40,strokeWidth:2,active:true,style:_styleSheet["progress-item"]}),jsx(Progress,{percent:60,strokeWidth:2,active:true,style:_styleSheet["progress-item"]}),jsx(Progress,{percent:80,strokeWidth:2,active:true,activeColor:"blue",style:_styleSheet["progress-item"]})]})})]}),jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u8C03\u8BD5\u7528\u4F8B \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsx(View,{style:_styleSheet["components-page"],children:jsx(Progress,{percent:this.state.addProcess,showInfo:true,strokeWidth:10,style:_styleSheet["progress-item"]})})})]}),jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:this.commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" \u2014\u2014 ",item.testTitle," \u2014\u2014 "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Progress,_extends({},item.testConfig))]})})]},item.testComment);})})})]});}}]);return Index;}(Component);

export { Index as default };
