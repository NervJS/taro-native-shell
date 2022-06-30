import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import VirtualList from '@tarojs/components-rn/dist/components/VirtualList';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
Dimensions.get('window').width;

var indexScssStyleSheet = StyleSheet.create({
  "list-item": {
    "flexDirection": "row",
    "display": "flex"
  }
});

function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else {result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getClassName(){var className=[];var args=arguments[0];var type=Object.prototype.toString.call(args).slice(8,-1).toLowerCase();if(type==='string'){args=args.trim();args&&className.push(args);}else if(type==='array'){args.forEach(function(cls){cls=_getClassName(cls).trim();cls&&className.push(cls);});}else if(type==='object'){for(var k in args){k=k.trim();if(k&&args.hasOwnProperty(k)&&args[k]){className.push(k);}}}return className.join(' ').trim();}function _getStyle(classNameExpression){var className=_getClassName(classNameExpression);var classNameArr=className.split(/\s+/);var style={};classNameArr.reduce((sty,cls)=>Object.assign(sty,_styleSheet[cls.trim()]),style);return style;}function _mergeEleStyles(){return [].concat.apply([],arguments).reduce((pre,cur)=>Object.assign(pre,cur),{});}var _styleSheet=indexScssStyleSheet;function buildData(){var offset=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return Array(100).fill(0).map(function(_,i){return i+offset;});}var Row=React.memo(function(_ref){var index=_ref.index,style=_ref.style,data=_ref.data;return jsxs(View,{style:_mergeEleStyles(_getStyle("list-item "+(index%2?"ListItemOdd":"ListItemEven")),style),children:["Row ",index," : ",data[index]]});});var PageView=function(_React$Component){_inherits(PageView,_React$Component);var _super=_createSuper(PageView);function PageView(){var _this;_classCallCheck(this,PageView);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={data:buildData(0)};_this.$ref=React.createRef();_this.onScroll=function(data){console.log(data);};_this.onScrollNative=function(e){console.log(e);};return _this;}_createClass(PageView,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;console.log(this.$ref);setTimeout(function(){_this2.$ref.current.scrollTo({offset:200});},3000);}},{key:"render",value:function render(){var data=this.state.data;var dataLen=data.length;return jsxs(View,{style:_styleSheet["components-page"],children:[jsx(View,{style:_styleSheet["components-page__header"],children:jsx(Text,{children:"\u865A\u62DF\u5217\u8868"})}),jsx(VirtualList,{style:{backgroundColor:'yellow'},height:300,ref:this.$ref,width:"100%",itemData:data,itemCount:dataLen,itemSize:100,overscanCount:10,scrollWithAnimation:true,children:Row})]});}}]);return PageView;}(React.Component);

export { PageView as default };
