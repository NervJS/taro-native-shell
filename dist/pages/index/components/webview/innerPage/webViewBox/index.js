import WebView from '@tarojs/components-rn/dist/components/WebView';
import { jsx } from 'react/jsx-runtime';

var WebViewBox=function(){return jsx(WebView,{style:{height:600},src:"https://www.baidu.com/"});};

export { WebViewBox as default };
