"use strict";(self["webpackChunkhaoke_dome"]=self["webpackChunkhaoke_dome"]||[]).push([[210,695],{9695:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",[e("van-search",{attrs:{"show-action":"",label:t.$store.state.chengshi.name,placeholder:"请输入搜索关键词",disabled:""},on:{click:t.onSearch1},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:function(e){return t.$router.push("/baidu")}}},[e("van-icon",{attrs:{name:"location-o"}})],1)]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},s=[],r={data(){return{value:""}},created(){this.chengshi=this.$route.query?this.$route.query:this.chengshi},methods:{onSearch1(){this.$router.push({name:"IndexBar"}),this.$emit("iddd",this.chengshi.id)}}},n=r,o=i(1001),c=(0,o.Z)(n,a,s,!1,null,"764256b6",null),h=c.exports},9210:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"gudingdingwei"},[e("van-nav-bar",{attrs:{"left-arrow":""}}),e("Search"),e("div",{staticClass:"flie"},[e("div",{ref:"show1"},[e("van-dropdown-menu",{attrs:{"active-color":"#21b97a"}},[e("van-dropdown-item",{ref:"item",attrs:{title:"区域"}},[e("div",[e("van-area",{attrs:{"area-list":t.areaList,"item-height":"35px"},on:{confirm:t.gethome,cancel:t.qqq}})],1)])],1)],1),e("div",{ref:"show2"},[e("van-dropdown-menu",{attrs:{"active-color":"#21b97a"}},[e("van-dropdown-item",{ref:"item",attrs:{title:"方式"}},[e("div",[e("van-area",{attrs:{"area-list":t.areaList1,"item-height":"35px"},on:{confirm:t.gethome1,cancel:t.qqq}})],1)])],1)],1),e("div",{ref:"show3"},[e("van-dropdown-menu",{attrs:{"active-color":"#21b97a"}},[e("van-dropdown-item",{ref:"item",attrs:{title:"租金"}},[e("div",[e("van-area",{attrs:{"area-list":t.areaList2,"item-height":"35px"},on:{confirm:t.gethome2,cancel:t.qqq}})],1)])],1)],1),e("van-dropdown-menu",{attrs:{"active-color":"#21b97a"}},[e("van-dropdown-item",{ref:"item",attrs:{title:"筛选"}})],1)],1)],1),e("div",{staticClass:"qwea"},t._l(t.list,(function(i,a){return e("van-card",{key:a,attrs:{price:i.price,desc:i.desc,title:i.title,thumb:"http://liufusong.top:8080"+i.houseImg},on:{click:function(e){return t.fangzi(i)}},scopedSlots:t._u([{key:"tags",fn:function(){return t._l(i.tags,(function(i){return e("van-tag",{key:i,attrs:{plain:"",type:"danger"}},[t._v(t._s(i))])}))},proxy:!0}],null,!0)})})),1)])},s=[],r=i(6326),n=i(9695),o={name:"gethome",data(){return{list:[],id:"",value:0,city_list1:110100,city_list2:120100,item:!1,areaList:{province_list:{11e4:"区域",12e4:"地铁"},city_list:{},county_list:{}},areaList1:{city_list:{}},areaList2:{city_list:{}},area:"",more:"",price:"null",rentType:"null",arr1:[],arr2:[],aa:"",bb:"",cc:""}},created(){this.areainfo(),this.housescondition(),this.gethouses()},methods:{qqq(){this.$refs.show1.click()},fangzi(t){console.log(t),this.$router.push({name:"HousingInformation",query:{item:t}})},gethome(t){this.$refs.show1.click(),t.forEach((t=>{void 0!==t.code&&(this.aa=t.name)})),console.log(this.aa),this.arr1.forEach((t=>{if(t.label===this.aa)return this.area=t.value;t.children&&t.children.forEach((t=>{if(t.label===this.aa)return this.area=t.value}))})),this.gethouses()},gethome1(t){this.$refs.show2.click(),t.forEach((t=>{void 0!==t&&("整租"===t.name?this.rentType="true":"合租"===t.name&&(this.rentType="false"))})),this.gethouses()},gethome2(t){this.$refs.show3.click(),this.arr2.forEach((e=>{e.label===t[1].name&&(this.price=e.value)})),this.gethouses()},async areainfo(){const t=await(0,r.YM)(this.$store.state.chengshi.name);console.log(t)},async housescondition(){const t=await(0,r.GN)(this.$store.state.chengshi.id);console.log(t),t.data.body.subway.children.forEach((t=>{this.arr1.push(t),this.areaList.city_list[this.city_list2+=100]=t.label,t.children&&t.children.forEach((t=>{this.areaList.county_list[this.city_list2++]=t.label}))})),t.data.body.area.children.forEach((t=>{this.arr1.push(t),this.areaList.city_list[this.city_list1+=100]=t.label,t.children&&t.children.forEach((t=>{this.areaList.county_list[this.city_list1++]=t.label}))})),t.data.body.rentType.forEach((t=>{this.areaList1.city_list[this.city_list1+=100]=t.label})),t.data.body.price.forEach((t=>{this.arr2.push(t),this.areaList2.city_list[this.city_list1+=100]=t.label}))},async gethouses(){const t=await(0,r.nh)({cityId:this.$store.state.chengshi.id,area:this.area,more:this.more,price:this.price,rentType:this.rentType});console.log(),this.list=t.data.body.list},onConfirm(){this.$refs.item.toggle()}},components:{Search:n["default"]}},c=o,h=i(1001),l=(0,h.Z)(c,a,s,!1,null,"a7feeeca",null),u=l.exports}}]);
//# sourceMappingURL=210.66eed887.js.map