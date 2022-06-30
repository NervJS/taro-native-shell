import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import { showToast } from '@tarojs/taro-rn/dist/lib/showToast';
import { showModal } from '@tarojs/taro-rn/dist/lib/showModal';
import Image from '@tarojs/components-rn/dist/components/Image';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

var miniIcon = require('../../../../assets/test-d1e4b84c.jpeg');

var img = require('../../../../assets/index-3a6bbee0.png');

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "control-list": {
    "marginTop": scalePx2dp(10)
  },
  "bug-title": {
    "marginTop": scalePx2dp(10),
    "marginRight": scalePx2dp(10),
    "marginBottom": scalePx2dp(10),
    "marginLeft": scalePx2dp(10)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var commonTestCase=[{testTitle:"src - 网络地址",testComment:"图像来自网络地址",testConfig:{src:"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67",style:{height:100}}},{testTitle:"src - 本地1",testComment:"图像来自本地",testConfig:{src:miniIcon,style:{height:100}}},{testTitle:"src - 本地2",testComment:"图像来自本地，通过alias引入",testConfig:{src:img,style:{height:100}}},{testTitle:"mode - scaleToFill",testComment:"缩放模式「默认值」，不保持纵横比缩放图片，使图片的宽高完全拉伸填满image元素",testConfig:{src:img,style:{height:100},mode:"scaleToFill"}},{testTitle:"mode - aspectFit",testComment:"缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来",testConfig:{src:img,style:{height:100},mode:"aspectFit"}},{testTitle:"mode - aspectFill",testComment:"缩放模式，保持纵横比缩放图片，只保证短边能完全显示出来",testConfig:{src:img,style:{height:100},mode:"aspectFill"}},{testTitle:"mode - widthFix",testComment:"缩放模式，宽度不变，高度自动变化，保持原图宽高比不变",testConfig:{src:img,style:{height:100},mode:"widthFix"}},{testTitle:"onError",testComment:"加载一个不存在的地址时，会触发onError",testConfig:{src:"http://www.baidu.com",style:{height:100},onError:function onError(e){return showToast({title:"加载失败："+JSON.stringify(e)});}}},{testTitle:"onLoad",testComment:"加载一个图片时，会触发onLoad",testConfig:{src:img,style:{height:100},onLoad:function onLoad(e){return alert("加载中："+JSON.stringify(e));}}}];var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={height:0,width:0};return _this;}_createClass(Index,[{key:"render",value:function render(){var _this2=this;return jsx(View,{children:jsx(View,{style:_styleSheet["test-item"],children:jsxs(View,{style:_styleSheet["components-page"],children:[commonTestCase.map(function(item){return jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsxs(Text,{style:_styleSheet["test-block-hd__text"],children:[" ","\u2014\u2014 ",item.testTitle," \u2014\u2014"," "]})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:item.testComment}),jsx(Image,_extends({},item.testConfig))]})})]},item.testTitle);}),jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u8C03\u8BD5\u4E13\u7528 \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsxs(Text,{style:{"paddingBottom":10},children:["\u56FE\u50CF\u5BBD",this.state.width,"px, \u9AD8",this.state.height,"px"]}),jsx(Image,{src:"https://wx.qlogo.cn/mmhead/Q3auHgzwzM5YgORGicr7hLS5tuYno7QWuibt0fTFo1nJYZInMqUWN6SA/64",mode:"widthFix",onError:function onError(e){return showModal({content:"\u62A5\u9519\u5566\uFF1A"+JSON.stringify(e)});},onLoad:function onLoad(e){var _e$detail,_e$detail2;_this2.setState({height:e==null?void 0:(_e$detail=e.detail)==null?void 0:_e$detail.height,width:e==null?void 0:(_e$detail2=e.detail)==null?void 0:_e$detail2.width});}})]})})]})]})})});}}]);return Index;}(Component);

export { Index as default };
