import View from '@tarojs/components-rn/dist/components/View';
import Text from '@tarojs/components-rn/dist/components/Text';
import { jsx, jsxs } from 'react/jsx-runtime';

var SimpleText=function(_ref){var _ref$name=_ref.name,name=_ref$name===void 0?"MieMie":_ref$name;return jsx(View,{children:jsxs(Text,{style:{color:"purple",fontSize:20},onClick:function onClick(){return alert(name);},children:["click ",name]})});};

export { SimpleText as default };
