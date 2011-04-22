﻿/* http://keith-wood.name/gChart.html
   Google Chart interface extensions for jQuery v1.4.0.
   See API details at http://code.google.com/apis/chart/.
   Written by Keith Wood (kbwood{at}iinet.com.au) September 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(o($){$.w($.7.O,{X:Y,r:6,C:[],P:\'1o\',B:[\'1p\',\'1q\'],D:6,E:6});$.w($.7.1r,{1s:\'Q\',z:\'z\',19:\'t\',Z:\'11\',12:\'F\',13:\'s\',14:\'v\',11:\'11\',F:\'F\',s:\'s\',t:\'t\',Q:\'Q\',v:\'v\'});$.w($.7.1t,{z:\'z\',F:\'F\',t:\'z\',Q:\'1u\'});$.w($.7.1v.1w,{1x:[-1a,-20,1b,1c],1y:[-15,1b,1d,1z],1A:[-1B,1C,-10,1D],1E:[1F,-25,1G,1e],1H:[5,-1I,1d,-1e],1J:[-1c,-1K,15,-1a],13:o(a,b,c,d,e){8(!$.n(b)){e=b;d=6;c=6;b=6}R 8(p b[0]!=\'16\'){e=d;d=c;c=b;b=6}8(c&&!$.n(c)){e=c;d=6;c=6}9 f=[[],[],[]];G(9 i=0;i<a.A;i++){f[0][i]=a[i][0];f[1][i]=a[i][1];f[2][i]=a[i][2]||1f}b=b||[];e=e||{};8(c){e.S={1L:c.H(\'|\')}}8(d){d=$.z(d,o(v,i){u $.7.I(v)});$.w(e.S,{17:d.H(\'|\')})}u $.w({},e,{J:\'13\',T:(b.A>=2?\'1M\':\'U\'),q:[(b.A>=2?$.7.q(f[0],b[0],b[1]):$.7.q(f[0])),(b.A>=4?$.7.q(f[1],(b[2]!=6?b[2]:b[0]),(b[3]!=6?b[3]:b[1])):$.7.q(f[1])),$.7.q(f[2])]})},14:o(a,b,c,d,e,f,g,h){u $.w({},h||{},{J:\'14\',q:[$.7.q([a,b,c,d,e,f,g])]})},Z:o(a,b,c,d,e,f,g){8(p a!=\'V\'&&!$.n(a)){g=f;f=e;e=d;d=c;c=b;b=a;a=\'\'}8(p c!=\'16\'){g=f;f=e;e=d;d=c;c=6}8(!$.n(d)){g=f;f=e;e=d;d=6}8(!$.n(e)){g=f;f=e;e=6}8(!$.n(f)){g=f;f=6}b=($.n(b)?b:[b]);9 h=Y;G(9 i=0;i<b.A;i++){h=h||$.n(b[i])}9 j=(h?[]:[$.7.q(b)]);8(h){G(9 i=0;i<b.A;i++){j.1N($.7.q($.n(b[i])?b[i]:[b[i]]))}}b=j;8(d){9 k=\'\';$.1g(d,o(i,v){k+=\',\'+$.7.I(v)});d=k.W(1)}8(f){9 l=[\'\',\'\'];$.1g(f,o(i,v){v=($.n(v)?v:[v]);l[0]+=\'|\'+$.7.I(v.1O(0,3).H(\',\'));l[1]+=\'|\'+(v[3]||15)});f=l[0].W(1)+l[1]}9 m=(e&&e.A?$.7.1P(\'y\',e):6);u $.w({},g||{},{J:\'Z\',1Q:c||1f,q:b,18:($.n(a)?a:[a||\'\'])},(d?{S:{17:d}}:{}),(m?{1R:[m]}:{}),(f?{S:{1S:f}}:{}))},z:o(a,b,c,d,e,f,g){8(p a!=\'1T\'){g=f;f=e;e=d;d=c;c=b;b=a;a=Y}8(p b==\'K\'&&!$.n(b)){g=f;f=e;e=d;d=c;c=b;b=6}8(p d==\'K\'){g=d;f=6;e=6;d=6}R 8(p e==\'K\'&&!$.n(e)){g=e;f=6;e=6}R 8(p f==\'K\'){g=f;f=6}9 h=[];9 j=[];9 i=0;G(9 k 1U c){h[i]=k.1V(/1h/g,\'-\');j[i]=c[k];i++}8(p b==\'16\'){b=[b,b,b,b]}u $.w({},g||{},{J:(p b==\'V\'?\'19\':\'z\'),X:a,r:b,C:h,P:d||$.7.O.P,B:($.n(e)?e:[e||$.7.O.B[0],f||$.7.O.B[1]]),q:[$.7.q(\'\',j)]})},12:o(a,b,c,d){9 e={};8(p a==\'K\'){e=a}R{e={18:[a],T:b,D:c,E:d}}e.J=\'12\';8(e.U){e.18=[e.U];e.U=6}u e},1W:o(a,b){9 c=1i[\'1h\'+a.T+\'1X\']||1i[\'1Y\'];9 d=\'\';G(9 i=0;i<a.B.A;i++){d+=\',\'+$.7.I(a.B[i])}u(p a.r==\'V\'?\'&1Z=\'+a.r:(a.r?(a.X?\':21=\':\':22=\')+($.n(a.r)?a.r.H(\',\'):a.r+\',\'+a.r+\',\'+a.r+\',\'+a.r):\'\'))+\'&23=\'+c.24($.7,[a])+(a.C&&a.C.A?\'&1j=\'+a.C.H(p a.r==\'V\'?\'\':\'|\'):\'\')+\'&17=\'+$.7.I(a.P)+d},26:o(a,b){u $.7.27(\'&28=\',a.T)+(a.D||a.E?\'&1j=\'+(a.D?a.D.29(0):\'l\')+(a.E!=6?\'|\'+a.E:\'\'):\'\')+(b?\'&1k=\'+b.W(1):\'\')},2a:o(a,b){u\'&1k=\'+b.W(1)},2b:o(a,b){9 c=(a==\'z\'||a==\'t\'?2c:2d);b.L=M.1l(10,M.1m(b.L,c));b.N=M.1l(10,M.1m(b.N,c));8(b.L*b.N>1n){b.N=M.2e(1n/b.L)}u\'2f=\'+b.L+\'x\'+b.N}})})(2g);',62,141,'||||||null|gchart|if|var||||||||||||||isArray|function|typeof|series|mapArea|||return||extend|||map|length|mapColors|mapRegions|qrECLevel|qrMargin|qr|for|join|color|type|object|width|Math|height|_defaults|mapDefaultColor|tx|else|extension|encoding|text|string|substr|mapLatLong|false|meter||gom|qrCode|scatter|venn||number|chco|dataLabels|mapOriginal|35|40|55|75|50|100|each|_|this|chld|chl|max|min|300000|bebebe|blue|red|_chartTypes|formula|_typeOptions|no|_prototype|prototype|mapAfrica|mapAsia|180|mapAustralia|45|110|155|mapEurope|33|73|mapNorthAmerica|175|mapSouthAmerica|85|chdl|scaled|push|slice|axis|maxValue|axes|chls|boolean|in|replace|mapOptions|Encoding|_textEncoding|chtm||fixed|auto|chd|apply||qrOptions|_include|choe|charAt|noOptions|addSize|600|1000|floor|chs|jQuery'.split('|'),0,{}))