import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import { getLocation } from '@tarojs/taro-rn/dist/lib/getLocation';
import { jsx, jsxs } from 'react/jsx-runtime';

var SimpleText=function(_ref){var _ref$name=_ref.name,name=_ref$name===void 0?"MieMie":_ref$name;return jsx(View,{children:jsxs(Text,{style:{color:"blue",fontSize:30},onClick:function onClick(){return getLocation({type:"wgs84",success:function success(res){alert(JSON.stringify(res));}});},children:["Hahahah! My name is ",name]})});};

export { SimpleText as default };
