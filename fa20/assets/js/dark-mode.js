
// this is an easter egg so the code is intentionally messy
// it activates CS 61A Dark Mode: https://github.com/PerpetualPanda/lambda-dark

var a = '';
var b = -770055275;
document.addEventListener('keydown', function (e) {
    a += ("" + e.keyCode);
    if (a.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0) === b) {
        var node = document.createElement('style');
        node.innerHTML = 'body{background-color:#0c0c0c;color:#ddd}code,kbd,pre,samp{background-color:#222;border:0;color:#ddd !important}p,li,ul,cite{color:#ddd}input,select{color:#ddd !important;background-color:#222 !important;border:1px solid #333 !important}.dropdown-menu{background-color:#222 !important}.dropdown-menu a{color:#ddd !important}.dropdown-menu a:hover{background-color:#444 !important}.fc-today{background:#222 !important}#office-hours td,#weekly td{border:1px solid #333 !important}#office-hours th,#office-hours tr,#weekly th,#weekly tr{border:0}.resource tr,.resource td,.resource th{background-color:#111 !important;border:1px solid #333 !important}.table-bordered{background-color:#111 !important;border:1px solid #333 !important}h1,h2,h3,h4,.navbar{color:#ddd}h1{color:#fff}header h1{color:#fff}blockquote{background-color:rgba(123,241,252,0.15)}::selection{background:#009fc0}::-moz-selection{background:#009fc0}.forecast a{background-color:rgba(255,255,255,0.5)}.announcement .header{color:#ddd}.announcement .prev:hover,.announcement .next:hover{color:#ddd}.topic header .exam-header a{color:#ddd}.topic header .glyphicon{color:#ddd}.line{border:5.5px solid #222}.due{background-color:#333}.past .event,.active .event{color:#ddd}.staffer ul{color:#ddd}table#calendar td{border:1px solid #333}table#calendar tr:not(:first-child){background-color:#111}table#calendar td.even{background-color:#222}table#calendar tr:hover td:not(.weeknum){background-color:#222}.navbar .special-box.special-box:hover{background-color:#ddd}.sidebar li{background-color:transparent !important}.sidebar li>a{background-color:transparent !important}.btn-outline{background-color:transparent}.hljs{display:block;overflow-x:auto;background:inherit;-webkit-text-size-adjust:none}.hljs,.hljs-list .hljs-built_in{color:#0149a8}.hljs-header,.hljs-important,.hljs-javadoctag,.hljs-keyword,.hljs-request,.hljs-title{font-weight:bold}.hljs-chunk,.hljs-comment{color:#738191}.hljs-addition,.hljs-argument,.hljs-blockquote,.hljs-built_in,.hljs-filename,.hljs-header,.hljs-link_label,.hljs-literal,.hljs-name,.hljs-parent,.hljs-string,.hljs-tag,.hljs-title,.hljs-value{color:#4993fc}.hljs-attr_selector,.hljs-attribute,.hljs-bullet,.hljs-decorator,.hljs-deletion,.hljs-doctype,.hljs-javadoc,.hljs-link_url,.hljs-phony,.hljs-pi,.hljs-pragma,.hljs-preprocessor,.hljs-prompt,.hljs-regexp,.hljs-shebang,.hljs-sqbracket,.hljs-string .hljs-variable,.hljs-subst,.hljs-symbol,.hljs-xmlDocTag,.hljs-yardoctag{color:#497fcc}';
        document.body.appendChild(node);
    }
});


