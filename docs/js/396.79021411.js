"use strict";(self["webpackChunkhaoke_dome"]=self["webpackChunkhaoke_dome"]||[]).push([[396],{6396:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"我的出租","left-arrow":""},on:{"click-left":t.onClickLeft}}),t.list.length?e("div",t._l(t.list,(function(n,s){return e("van-card",{key:s,attrs:{price:n.price,desc:n.desc,title:n.title,thumb:"http://liufusong.top:8080"+n.houseImg},on:{click:function(e){return t.fangzi(n)}},scopedSlots:t._u([{key:"tags",fn:function(){return t._l(n.tags,(function(n){return e("van-tag",{key:n,attrs:{plain:"",type:"danger"}},[t._v(t._s(n))])}))},proxy:!0}],null,!0)})})),1):e("van-loading",{attrs:{size:"24px",vertical:""}},[t._v("加载中...")])],1)},a=[],r=n(6326),i={data(){return{list:[]}},created(){this.getauserhouses()},methods:{onClickLeft(){this.$router.back()},async getauserhouses(){const t=await(0,r.wG)(this.$store.state.user);console.log(t),this.list=t.data.body}}},o=i,l=n(1001),u=(0,l.Z)(o,s,a,!1,null,"7f768eb6",null),c=u.exports}}]);
//# sourceMappingURL=396.79021411.js.map