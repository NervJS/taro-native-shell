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
import Checkbox from '@tarojs/components-rn/dist/components/Checkbox';
import Label from '@tarojs/components-rn/dist/components/Label';
import { Dimensions, StyleSheet } from 'react-native';
import { jsx, jsxs } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "btn-item": {
    "marginBottom": scalePx2dp(10)
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var _styleSheet=indexScssStyleSheet;var Index=function(_Component){_inherits(Index,_Component);var _super=_createSuper(Index);function Index(props){var _this;_classCallCheck(this,Index);_this=_super.call(this,props);_this.state={checkItems:[{value:"china",text:"中国",checked:true,color:'#ff0000'},{value:"111",text:"我家",checked:true,color:'#0000ff'},{value:"222",text:"英国",checked:false},{value:"USA",text:"漂亮国",checked:false},{value:"franch",text:"发国",checked:true,disabled:true},{value:"aoCuntry",text:"澳村",checked:false}]};return _this;}_createClass(Index,[{key:"render",value:function render(){var _this2=this;var checkItems=this.state.checkItems;return jsx(ScrollView,{children:jsx(View,{style:_styleSheet["test-item"],children:jsx(View,{style:_styleSheet["components-page"],children:jsxs(View,{style:_styleSheet["test-item"],children:[jsx(View,{style:_styleSheet["test-block-hd"],children:jsx(Text,{style:_styleSheet["test-block-hd__text"],children:" \u2014\u2014 \u6D4B\u8BD5 \u2014\u2014 "})}),jsx(View,{style:_styleSheet["test-block-bd"],children:jsxs(View,{style:_styleSheet["components-page"],children:[jsx(Text,{style:{"paddingBottom":10},children:"\u6D4B\u8BD5\u770B\u770B"}),checkItems.map(function(item,index){return jsx(Label,{for:item.text,children:jsx(Checkbox,{onChange:function onChange(_ref){var checked=_ref.checked;checkItems[index].checked=checked;_this2.setState({checkItems:_toConsumableArray(checkItems)});},value:item.value,checked:item.checked,children:item.text,color:(item==null?void 0:item.color)||'#0f0',disabled:item==null?void 0:item.disabled})},item.value);})]})})]})})})});}}]);return Index;}(Component);

export { Index as default };
