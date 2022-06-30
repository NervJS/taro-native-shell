import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import { startGyroscope } from '@tarojs/taro-rn/dist/lib/startGyroscope';
import { onGyroscopeChange } from '@tarojs/taro-rn/dist/lib/onGyroscopeChange';
import { offGyroscopeChange } from '@tarojs/taro-rn/dist/lib/offGyroscopeChange';
import { stopGyroscope } from '@tarojs/taro-rn/dist/lib/stopGyroscope';
import { startAccelerometer } from '@tarojs/taro-rn/dist/lib/startAccelerometer';
import { onAccelerometerChange } from '@tarojs/taro-rn/dist/lib/onAccelerometerChange';
import { offAccelerometerChange } from '@tarojs/taro-rn/dist/lib/offAccelerometerChange';
import { stopAccelerometer } from '@tarojs/taro-rn/dist/lib/stopAccelerometer';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import Button from '@tarojs/components-rn/dist/components/Button';
import { Dimensions, StyleSheet } from 'react-native';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "one-block": {
    "marginBottom": scalePx2dp(15)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(){_classCallCheck(this,Index);return _super.apply(this,arguments);}_createClass(Index,[{key:"AlertData",value:function AlertData(data){console.log('1',data);}},{key:"AlertData2",value:function AlertData2(data){console.log('2',data);}},{key:"componentWillMount",value:function componentWillMount(){}},{key:"componentDidMount",value:function componentDidMount(){}},{key:"componentWillUnmount",value:function componentWillUnmount(){}},{key:"componentDidShow",value:function componentDidShow(){}},{key:"componentDidHide",value:function componentDidHide(){}},{key:"render",value:function render(){var _this=this;return jsxs(View,{style:_styleSheet["index"],children:[jsx(Text,{children:"Hello world!"}),jsx(Button,{type:"primary",onClick:function onClick(){startGyroscope({interval:'ui',success:function success(){return console.log("startGyroscope success");},fail:function fail(){return console.log("startGyroscope fail");},complete:function complete(){return console.log("startGyroscope complete");}});},children:"\u5F00\u59CB\u76D1\u542C"}),jsx(Button,{onClick:function onClick(){onGyroscopeChange(_this.AlertData);},children:"\u7ED1\u5B9A\u76D1\u542C\u4E8B\u4EF6A"}),jsx(Button,{type:"primary",onClick:function onClick(){onGyroscopeChange(_this.AlertData2);},children:"\u7ED1\u5B9A\u76D1\u542C\u4E8B\u4EF6B"}),jsx(Button,{onClick:function onClick(){offGyroscopeChange(_this.AlertData);},children:"\u53D6\u6D88\u76D1\u542C\u4E8B\u4EF6A"}),jsx(Button,{type:"primary",onClick:function onClick(){offGyroscopeChange(_this.AlertData2);},children:"\u53D6\u6D88\u76D1\u542C\u4E8B\u4EF6B"}),jsx(Button,{type:"primary",onClick:function onClick(){offGyroscopeChange();},children:"\u53D6\u6D88\u76D1\u542C\u5168\u90E8\u4E8B\u4EF6"}),jsx(Button,{type:"warn",onClick:function onClick(){stopGyroscope({success:function success(){return console.log("stopGyroscope success");},fail:function fail(){return console.log("stopGyroscope fail");},complete:function complete(){return console.log("stopGyroscope complete");}});},children:"\u53D6\u6D88\u76D1\u542C"}),jsx(View,{style:{margin:50},children:"\u52A0\u901F\u8BA1"}),jsx(Button,{type:"primary",onClick:function onClick(){startAccelerometer({interval:'ui',success:function success(){return console.log("start success");},fail:function fail(){return console.log("start fail");},complete:function complete(){return console.log("start complete");}});},children:"\u5F00\u59CB\u76D1\u542C"}),jsx(Button,{onClick:function onClick(){onAccelerometerChange(_this.AlertData);},children:"\u7ED1\u5B9A\u76D1\u542C\u4E8B\u4EF6A"}),jsx(Button,{type:"primary",onClick:function onClick(){onAccelerometerChange(_this.AlertData2);},children:"\u7ED1\u5B9A\u76D1\u542C\u4E8B\u4EF6B"}),jsx(Button,{onClick:function onClick(){offAccelerometerChange(_this.AlertData);},children:"\u53D6\u6D88\u76D1\u542C\u4E8B\u4EF6A"}),jsx(Button,{type:"primary",onClick:function onClick(){offAccelerometerChange(_this.AlertData2);},children:"\u53D6\u6D88\u76D1\u542C\u4E8B\u4EF6B"}),jsx(Button,{type:"primary",onClick:function onClick(){offAccelerometerChange();},children:"\u53D6\u6D88\u76D1\u542C\u5168\u90E8\u4E8B\u4EF6"}),jsx(Button,{type:"warn",onClick:function onClick(){stopAccelerometer({success:function success(){return console.log("stop success");},fail:function fail(){return console.log("stop fail");},complete:function complete(){return console.log("stop complete");}});},children:"\u53D6\u6D88\u76D1\u542C"})]});}}]);return Index;}(Component);

export { Index as default };
