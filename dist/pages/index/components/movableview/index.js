import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Component } from 'react';
import View from '@tarojs/components-rn/dist/components/View';
import MovableArea from '@tarojs/components-rn/dist/components/MovableArea';
import MovableView from '@tarojs/components-rn/dist/components/MovableView';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "movable-area": {
    "width": scalePx2dp(110),
    "height": scalePx2dp(110),
    "backgroundColor": "blue",
    "marginTop": 0,
    "marginRight": "auto",
    "marginBottom": scalePx2dp(15),
    "marginLeft": "auto"
  },
  "movable-view": {
    "left": scalePx2dp(50),
    "width": scalePx2dp(50),
    "height": scalePx2dp(50),
    "borderRadius": scalePx2dp(25),
    "overflow": "hidden",
    "backgroundColor": "red",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "color": "#ffffff",
    "fontSize": scalePx2dp(30)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={checkItems:[{value:"china",text:"中国",checked:true,color:"#ff0000"},{value:"111",text:"我家",checked:true,color:"#0000ff"},{value:"222",text:"英国",checked:false},{value:"USA",text:"漂亮国",checked:false},{value:"franch",text:"发国",checked:true,disabled:true},{value:"aoCuntry",text:"澳村",checked:false}]};return _this;}_createClass(Index,[{key:"render",value:function render(){return jsx(View,{children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(MovableArea,{style:_styleSheet["movable-area"],children:jsx(MovableView,{style:_styleSheet["movable-view"],children:"\u9ED8\u8BA4\u4E0D\u79FB\u52A8"})}),jsx(MovableArea,{style:_styleSheet["movable-area"],children:jsx(MovableView,{direction:"all",style:_mergeEleStyles(_styleSheet["movable-view"],{backgroundColor:"white",color:"yellow"}),children:"direction: 'all'"})}),jsx(MovableArea,{style:_styleSheet["movable-area"],children:jsx(MovableView,{direction:"horizontal",style:_styleSheet["movable-view"],children:"direction: 'horizontal'"})}),jsx(MovableArea,{style:_styleSheet["movable-area"],children:jsx(MovableView,{direction:"vertical",style:_styleSheet["movable-view"],children:"direction: 'vertical'"})})]})})})})})});}}]);return Index;}(Component);

export { Index as default };
