self.webpackChunk(["mode/htmlmixed"],{5:function(a,b,c){(function(a){a(c(0),c(3),c(4),c(2))})(function(a){"use strict";function b(a,b,c){var d=a.current(),e=d.search(b);return-1<e?a.backUp(d.length-e):d.match(/<\/?$/)&&(a.backUp(d.length),!a.match(b,!1)&&a.match(d)),c}function c(a){var b=i[a];return b?b:i[a]=new RegExp("\\s+"+a+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")}function d(a,b){var d=a.match(c(b));return d?/^\s*(.*?)\s*$/.exec(d[2])[1]:""}function e(a,b){return new RegExp((b?"^":"")+"</s*"+a+"s*>","i")}function f(a,b){for(var c in a)for(var d=b[c]||(b[c]=[]),e=a[c],f=e.length-1;0<=f;f--)d.unshift(e[f])}function g(a,b){for(var c,e=0;e<a.length;e++)if(c=a[e],!c[0]||c[1].test(d(b,c[0])))return c[2]}var h={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},i={};a.defineMode("htmlmixed",function(c,d){function j(d,f){var h,i=k.token(d,f.htmlState),m=/\btag\b/.test(i);if(m&&!/[<>\s\/]/.test(d.current())&&(h=f.htmlState.tagName&&f.htmlState.tagName.toLowerCase())&&l.hasOwnProperty(h))f.inTag=h+" ";else if(f.inTag&&m&&/>$/.test(d.current())){var n=/^([\S]+) (.*)/.exec(f.inTag);f.inTag=null;var o=">"==d.current()&&g(l[n[1]],n[2]),p=a.getMode(c,o),q=e(n[1],!0),r=e(n[1],!1);f.token=function(a,c){return a.match(q,!1)?(c.token=j,c.localState=c.localMode=null,null):b(a,r,c.localMode.token(a,c.localState))},f.localMode=p,f.localState=a.startState(p,k.indent(f.htmlState,""))}else f.inTag&&(f.inTag+=d.current(),d.eol()&&(f.inTag+=" "));return i}var k=a.getMode(c,{name:"xml",htmlMode:!0,multilineTagIndentFactor:d.multilineTagIndentFactor,multilineTagIndentPastTag:d.multilineTagIndentPastTag}),l={},m=d&&d.tags,n=d&&d.scriptTypes;if(f(h,l),m&&f(m,l),n)for(var o=n.length-1;0<=o;o--)l.script.unshift(["type",n[o].matches,n[o].mode]);return{startState:function(){var b=a.startState(k);return{token:j,inTag:null,localMode:null,localState:null,htmlState:b}},copyState:function(b){var c;return b.localState&&(c=a.copyState(b.localMode,b.localState)),{token:b.token,inTag:b.inTag,localMode:b.localMode,localState:c,htmlState:a.copyState(k,b.htmlState)}},token:function(a,b){return b.token(a,b)},indent:function(b,c,d){return!b.localMode||/^\s*<\//.test(c)?k.indent(b.htmlState,c):b.localMode.indent?b.localMode.indent(b.localState,c,d):a.Pass},innerMode:function(a){return{state:a.localState||a.htmlState,mode:a.localMode||k}}}},"xml","javascript","css"),a.defineMIME("text/html","htmlmixed")})}});
//# sourceMappingURL=htmlmixed.js.map