(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{416:function(t,e,n){var content=n(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0ddbce0c",content,!1,{sourceMap:!1})},417:function(t,e,n){var content=n(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("f0fcac38",content,!1,{sourceMap:!1})},418:function(t,e,n){var content=n(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6239357a",content,!1,{sourceMap:!1})},419:function(t,e,n){var content=n(502);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("14309ff2",content,!1,{sourceMap:!1})},494:function(t,e,n){"use strict";var r=n(416);n.n(r).a},495:function(t,e,n){(e=n(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},496:function(t,e,n){"use strict";var r=n(417);n.n(r).a},497:function(t,e,n){(e=n(12)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},498:function(t,e,n){"use strict";var r=n(418);n.n(r).a},499:function(t,e,n){(e=n(12)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0px 0px 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #3b5998;color:#3b5998;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#3b5998;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},500:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"3/17/2020","url":"https://www.pref.niigata.lg.jp/sec/kenko/bukan-haien.html","text":"新潟県の最新の発表"},{"date":"3/17/2020","url":"https://www.pref.niigata.lg.jp/sec/zaisei/020317koronakinkyutaisaku.html","text":"新潟県が新型コロナウイルス感染症の発生に伴う緊急的な対策を発表"}]}')},501:function(t,e,n){"use strict";var r=n(419);n.n(r).a},502:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-0a80a79e]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-0a80a79e]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-0a80a79e]{padding:4px 8px}}",""]),t.exports=e},505:function(t,e,n){"use strict";n.r(e);var r=n(408),o={props:{title:{type:String,required:!0,default:""},icon:{type:String,required:!1,default:""},date:{type:String,required:!1,default:""}},data:function(){return{formattedDate:Object(r.b)(this.date)}}},l=(n(494),n(5)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null).exports,d={props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(r.a)(t)}}},f=(n(496),Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports),m=n(107),h=n(111),x=n(109),w=n(108),v=n(110),_=n(11),k=n(35),C=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},N=function(t){function e(){return Object(m.a)(this,e),Object(x.a)(this,Object(w.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(h.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}}]),e}(k.c);C([Object(k.b)({default:"",required:!1})],N.prototype,"url",void 0),C([Object(k.b)({default:"",required:!1})],N.prototype,"text",void 0),C([Object(k.b)({default:"",required:!1})],N.prototype,"btnText",void 0);var y=N=C([k.a],N),W=(n(498),Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.isInternalLink(t.url)?"nuxt-link":"a",{tag:"component",staticClass:"StaticInfo",attrs:{to:t.isInternalLink(t.url)?t.url:"",href:t.isInternalLink(t.url)?"":t.url}},[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports),I=n(379),j=n(382),O=n(500),z=n(423),D=n(427),S=n(424),$=n(425),B=n(429),M=n(428),P={components:{PageHeader:c,WhatsNew:f,StaticInfo:W,ConfirmedCasesDetailsCard:z.a,ConfirmedCasesNumberCard:D.a,ConfirmedCasesAttributesCard:S.a,TestedNumberCard:$.a,TelephoneAdvisoryReportsNumberCard:B.a,ConsultationDeskReportsNumberCard:M.a},data:function(){var t=Object(j.a)(I.discharges_summary.data),data={Data:I,dischargesGraph:t,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向"),date:I.lastUpdate},newsItems:O.newsItems};return data},head:function(){return{title:this.$t("県内の最新感染動向")}}},T=(n(501),Object(l.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card")],1)],1)}),[],!1,null,"0a80a79e",null));e.default=T.exports}}]);