"use strict";(self["webpackChunkhaoke_dome"]=self["webpackChunkhaoke_dome"]||[]).push([[202],{2202:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-nav-bar",{attrs:{title:"城市列表","left-arrow":""},on:{"click-left":e.onClickLeft}}),t("van-index-anchor",{staticClass:"asdf",attrs:{index:"#"}},[e._v("当前城市")]),t("van-cell",{staticClass:"fsfa",attrs:{title:e.$store.state.chengshi.name}}),t("van-index-bar",{attrs:{"index-list":e.indexList,sticky:!1,"highlight-color":"#21b97a"}},e._l(e.cities,(function(s,a){return t("van-index-anchor",{key:a,attrs:{index:a}},[e._v(" "+e._s(a)+" "),e._l(s,(function(s,a){return t("van-cell",{key:a,attrs:{title:s.label},on:{click:function(t){return e.chengshi(s)}}})}))],2)})),1),t("van-popup",{attrs:{round:"","overlay-class":"my-class"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("暂时没有数据哦")])],1)},n=[],l=s(6326),i={name:"indexBar",data(){return{cities:{},indexList:["热门城市","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],show:!1}},mounted(){this.getIndexBar()},methods:{getIndexBar(){(0,l.ao)(1).then((e=>{const t=e.data.body,s={};this.indexList.forEach((e=>{s[e]=[],t.forEach((t=>{const a=t.short.substr(0,1),n=a.toLocaleUpperCase();n===e&&("北京"===t.label||"上海"===t.label||"深圳"===t.label||"广州"===t.label?s["热门城市"].push(t):s[e].push(t))}))}));for(const a in s)0===s[a].length&&s[a].push({label:"暂无数据"});this.cities=s}))},onClickLeft(){this.$router.back()},chengshi(e){if("北京"===e.label||"上海"===e.label||"深圳"===e.label||"广州"===e.label){const t={name:e.label,id:e.value};this.$store.commit("getchengshi",t),this.$router.back()}else this.show=!0,setInterval((()=>{this.show=!1}),1100)}}},o=i,r=s(1001),c=(0,r.Z)(o,a,n,!1,null,"4fe399ac",null),h=c.exports}}]);
//# sourceMappingURL=202.a164b75b.js.map