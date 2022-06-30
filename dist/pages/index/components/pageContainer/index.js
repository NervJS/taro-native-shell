import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { showToast } from '@tarojs/taro-rn/dist/lib/showToast';
import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import Button from '@tarojs/components-rn/dist/components/Button';
import PageContainer from '@tarojs/components-rn/dist/components/PageContainer';
import Switch from '@tarojs/components-rn/dist/components/Switch';
import Radio from '@tarojs/components-rn/dist/components/Radio';
import RadioGroup from '@tarojs/components-rn/dist/components/RadioGroup';
import Label from '@tarojs/components-rn/dist/components/Label';
import { Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

var indexScssStyleSheet = StyleSheet.create({
  "setting-contain": {
    "marginTop": scalePx2dp(6),
    "marginRight": scalePx2dp(6),
    "marginBottom": scalePx2dp(6),
    "marginLeft": scalePx2dp(6),
    "paddingTop": scalePx2dp(12),
    "paddingRight": scalePx2dp(12),
    "paddingBottom": scalePx2dp(12),
    "paddingLeft": scalePx2dp(12),
    "borderWidth": scalePx2dp(5),
    "borderStyle": "solid",
    "borderColor": "rgb(207, 207, 207)"
  },
  "title": {
    "paddingTop": scalePx2dp(6),
    "paddingRight": scalePx2dp(6),
    "paddingBottom": scalePx2dp(6),
    "paddingLeft": scalePx2dp(6),
    "marginBottom": scalePx2dp(12),
    "backgroundColor": "white"
  },
  "radio-label": {
    "marginBottom": scalePx2dp(5)
  },
  "radio-item": {
    "marginLeft": scalePx2dp(5)
  }
});

var _styleSheet=indexScssStyleSheet;var positions=["bottom","top","center","right"];var PageContainerTest=function(){var _useState=useState({show:false,duration:300,overlay:true,position:"bottom",round:false,overlayStyle:undefined,customStyle:undefined}),_useState2=_slicedToArray(_useState,2),config=_useState2[0],setConfig=_useState2[1];return jsxs(View,{children:[jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u70B9\u51FB\u5F39\u51FA\u5BB9\u5668"}),jsx(View,{style:_styleSheet["content"],children:jsx(Button,{type:"primary",onClick:function openContainer(){setConfig(_extends({},config,{show:true}));},children:"\u5F39\u51FA"})})]}),jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),jsx(View,{style:_styleSheet["content"],children:jsx(Switch,{checked:config==null?void 0:config.overlay,onChange:function changeOverlay(val){var _val$detail$value2,_val$detail2;setConfig(_extends({},config,{overlay:(_val$detail$value2=val==null?void 0:(_val$detail2=val.detail)==null?void 0:_val$detail2.value)!=null?_val$detail$value2:true}));}})})]}),jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u5BB9\u5668\u663E\u793A\u4F4D\u7F6E\u8BBE\u7F6E"}),jsx(View,{style:_styleSheet["content"],children:jsx(RadioGroup,{onChange:function changePosition(val){var _val$detail$value3,_val$detail3;setConfig(_extends({},config,{position:(_val$detail$value3=val==null?void 0:(_val$detail3=val.detail)==null?void 0:_val$detail3.value)!=null?_val$detail$value3:"bottom"}));},children:positions.map(function(item){return jsx(Label,{for:item,style:_styleSheet["radio-label"],children:jsx(Radio,{value:item,style:_styleSheet["radio-item"],children:item})},item);})})})]}),jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u662F\u5426\u663E\u793A\u5706\u89D2"}),jsx(View,{style:_styleSheet["content"],children:jsx(Switch,{checked:config==null?void 0:config.round,onChange:function changeRound(val){var _val$detail$value4,_val$detail4;setConfig(_extends({},config,{round:(_val$detail$value4=val==null?void 0:(_val$detail4=val.detail)==null?void 0:_val$detail4.value)!=null?_val$detail$value4:false}));}})})]}),jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u8BBE\u7F6E\u906E\u7F69\u5C42\u6837\u5F0F"}),jsx(View,{style:_styleSheet["content"],children:jsx(Switch,{checked:!!(config!=null&&config.overlayStyle),onChange:function changeOverlayStyle(val){var _val$detail5;setConfig(_extends({},config,{overlayStyle:val!=null&&(_val$detail5=val.detail)!=null&&_val$detail5.value?{backgroundColor:"yellow"}:undefined}));}})})]}),jsxs(View,{style:_styleSheet["setting-contain"],children:[jsx(View,{style:_styleSheet["title"],children:"\u8BBE\u7F6E\u5F39\u5C42\u6837\u5F0F"}),jsx(View,{style:_styleSheet["content"],children:jsx(Switch,{checked:!!(config!=null&&config.customStyle),onChange:function changeCustomStyle(val){var _val$detail6;setConfig(_extends({},config,{customStyle:val!=null&&(_val$detail6=val.detail)!=null&&_val$detail6.value?{backgroundColor:"yellow"}:undefined}));}})})]}),jsxs(PageContainer,_extends({},config,{onRequestClose:function onRequestClose(){setConfig(_extends({},config,{show:false}));showToast({title:"onRequestClose 触发关闭",icon:"success",duration:2000});},onBeforeEnter:function onBeforeEnter(){console.log("onBeforeEnter: 1");showToast({title:"onBeforeEnter打开啦",icon:"success",duration:2000});},onEnter:function onEnter(){console.log("onEnter: 2");},onAfterEnter:function onAfterEnter(){console.log("onAfterEnter: 3");},onBeforeLeave:function onBeforeLeave(){console.log("onBeforeLeave: 4");},onLeave:function onLeave(){console.log("onLeave: 5");},onAfterLeave:function onAfterLeave(){console.log("onAfterLeave: 6");},children:[jsx(Text,{children:"\u6211\u7684\u5185\u5BB9"}),jsx(Button,{type:"primary",onClick:function closeContainer(){setConfig(_extends({},config,{show:false}));},style:_styleSheet["modal-btn"],children:"\u5173\u95ED"})]}))]});};

export { PageContainerTest as default };
