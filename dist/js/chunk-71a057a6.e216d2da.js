(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a057a6"],{"5ee4":function(e,r,s){},a1d4:function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{attrs:{id:"coupon"}},[s("pageTop"),s("div",{attrs:{id:"content"}},[s("div",{attrs:{id:"content_center"}},[s("div",{attrs:{id:"content_center_left"}},[e._m(0),e._m(1),s("div",{attrs:{id:"form_radio_one"}},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[s("el-radio",{staticClass:"radio1",staticStyle:{float:"left"},attrs:{label:"1"},model:{value:e.form.receivingAddress_default,callback:function(r){e.$set(e.form,"receivingAddress_default",r)},expression:"form.receivingAddress_default"}},[s("span",{staticStyle:{"padding-left":"8px"}},[e._v(e._s(e.$store.state.Personallnformation.Address.name))]),s("span",{staticStyle:{"padding-left":"10px"}},[e._v(e._s(e.$store.state.Personallnformation.Address.tel))]),s("br"),s("span",{staticStyle:{padding:"16px 0 0 32px",display:"block"}},[e._v("\n                                    "+e._s(e.$store.state.Personallnformation.Address.province)+"\n                                    "+e._s(e.$store.state.Personallnformation.Address.city)+"\n                                    "+e._s(e.$store.state.Personallnformation.Address.region)+"\n                                ")]),s("span"),s("p",[e._v(e._s(e.$store.state.Personallnformation.Address.detailed))])]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("el-radio",{attrs:{label:"2"},model:{value:e.form.receivingAddress_default,callback:function(r){e.$set(e.form,"receivingAddress_default",r)},expression:"form.receivingAddress_default"}},[e._v("使用新地址")]),s("div",{directives:[{name:"show",rawName:"v-show",value:1!=e.form.receivingAddress_default,expression:"form.receivingAddress_default == 1 ? false:true"}],attrs:{id:"new_address"}},[s("br"),s("br"),s("p",[s("span",[e._v("省")]),s("span",[e._v("市")]),s("span",[e._v("区")])]),s("p",[s("el-select",{staticStyle:{width:"240px","margin-right":"34px"},attrs:{placeholder:"省份/直辖市","popper-class":"dropDown_province"},on:{change:function(r){return e.$store.dispatch("City",e.form.receivingAddress_province)}},model:{value:e.form.receivingAddress_province,callback:function(r){e.$set(e.form,"receivingAddress_province",r)},expression:"form.receivingAddress_province"}},e._l(e.$store.state.OrderInformation.Province,function(e){return s("el-option",{key:e.id,attrs:{value:e.provinceid,label:e.province}})}),1),s("el-select",{staticStyle:{width:"240px","margin-right":"34px"},attrs:{placeholder:"市","popper-class":"dropDown_city110100"},on:{change:function(r){return e.$store.dispatch("Area",e.form.receivingAddress_city)}},model:{value:e.form.receivingAddress_city,callback:function(r){e.$set(e.form,"receivingAddress_city",r)},expression:"form.receivingAddress_city"}},e._l(e.$store.state.OrderInformation.City,function(e){return s("el-option",{key:e.id,attrs:{value:e.cityid,label:e.city}})}),1),s("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"县/区","popper-class":"dropDown_area"},model:{value:e.form.receivingAddress_area,callback:function(r){e.$set(e.form,"receivingAddress_area",r)},expression:"form.receivingAddress_area"}},e._l(e.$store.state.OrderInformation.Area,function(e){return s("el-option",{key:e.id,attrs:{value:e.areaid,label:e.area}})}),1)],1),s("br"),s("p",[s("span",[e._v("详细信息")])]),s("p",[s("el-input",{staticStyle:{width:"800px"},model:{value:e.form.receivingAddress_address,callback:function(r){e.$set(e.form,"receivingAddress_address",r)},expression:"form.receivingAddress_address"}})],1),s("p",[s("span",[e._v("收货人姓名")]),s("span",[e._v("收货人电话")])]),s("p",[s("el-input",{staticStyle:{width:"240px","margin-right":"34px"},model:{value:e.form.receivingAddress_name,callback:function(r){e.$set(e.form,"receivingAddress_name",r)},expression:"form.receivingAddress_name"}}),s("el-input",{staticStyle:{width:"240px"},model:{value:e.form.receivingAddress_tel,callback:function(r){e.$set(e.form,"receivingAddress_tel",r)},expression:"form.receivingAddress_tel"}})],1)]),s("br"),s("h5",[e._v("取件方式")]),s("el-radio",{attrs:{label:"1"},model:{value:e.form.radio_express,callback:function(r){e.$set(e.form,"radio_express",r)},expression:"form.radio_express"}},[s("span",[e._v("  顺丰快递")])]),s("br"),s("br"),s("h5",[e._v("顺丰上门取件，全国25元以内包邮")]),s("p",{attrs:{id:"coupon"}},[s("span",[e._v("2")]),s("span",[e._v("优惠券")])]),s("el-radio",{attrs:{label:"1"},model:{value:e.form.radio_coupon,callback:function(r){e.$set(e.form,"radio_coupon",r)},expression:"form.radio_coupon"}},[s("span",[e._v("暂无优惠券")])]),s("br"),s("br"),s("br"),s("br"),s("el-radio",{attrs:{label:"2"},model:{value:e.form.radio_coupon,callback:function(r){e.$set(e.form,"radio_coupon",r)},expression:"form.radio_coupon"}},[s("span",[e._v("使用优惠券")])]),s("br"),s("br"),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.form.radio_coupon,expression:"form.radio_coupon == 2 ? true:false"}]},[s("el-radio-group",{model:{value:e.form.radio_coupon_coupon,callback:function(r){e.$set(e.form,"radio_coupon_coupon",r)},expression:"form.radio_coupon_coupon"}},e._l(e.$store.state.Personallnformation.Coupon,function(r){return s("el-radio",{key:r.value,attrs:{label:r.id,value:r.discountName}},[e._v(e._s(r.discountName))])}),1)],1)],1)],1)]),s("div",{attrs:{id:"content_center_right"}},[s("div",{attrs:{id:"con_cen_rig_top"}},[s("div",[s("span",{model:{value:e.number_of_packages,callback:function(r){e.number_of_packages=r},expression:"number_of_packages"}},[e._v(e._s(e.number_of_packages))]),s("span",[e._v("件商品")])]),s("hr"),s("div",[s("img",{attrs:{src:e.img}}),s("p",[e._v("苹果Mac Pro 2015款")]),s("span",[e._v("数量:")]),s("span",[e._v("1")]),s("p",[s("span",[e._v("￥")]),s("span",{model:{value:e.money,callback:function(r){e.money=r},expression:"money"}},[e._v(e._s(e.money))])])]),s("hr"),s("div",[s("ul",[s("li",[s("p",[s("span",[e._v("商品总计")]),s("span",[e._v(e._s(e.money))])])]),s("li",[s("p",[s("span",[e._v("运费")]),s("span",{model:{value:e.freight,callback:function(r){e.freight=r},expression:"freight"}},[e._v(e._s(e.freight))])])]),s("li",[s("p",[s("span",[e._v("总计")]),s("span",[e._v(e._s(e.money))])])])])]),s("hr"),s("el-checkbox",{model:{value:e.checked,callback:function(r){e.checked=r},expression:"checked"}},[s("span",[e._v("提交订单表示同意《用户协议》及《隐私政策》")])]),s("br"),s("button",{on:{click:e.handleRouterSucc}},[e._v("提交订单")])],1)])])]),s("pageBottom")],1)},n=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{attrs:{id:"con_cen_left_top"}},[s("p",[e._v("手机号码")]),s("p",[e._v("我们将通过以下手机号码向您发送订单相关信息")]),s("p",[e._v("138****")])])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[s("span",[e._v("1")]),s("span",[e._v("取货地址")])])}],a=s("cf32"),t=s("71a2"),i={name:"coupon",props:{value:""},data:function(){return{form:{receivingAddress_default:"1",receivingAddress_province:"",receivingAddress_city:"",receivingAddress_area:"",receivingAddress_address:"",receivingAddress_name:"",receivingAddress_tel:"",radio_coupon:"1",radio_coupon_coupon:1},col:"black",number_of_packages:"2",img:"../assets/page-top/cart.png",money:"2510",freight:"免费",checked:!1}},methods:{handleRouterSucc:function(){this.$router.push({path:"/success"})}},mounted:function(){this.$store.dispatch("Address"),this.$store.dispatch("Province"),this.$store.dispatch("Coupon")},components:{pageTop:a["a"],pageBottom:t["a"]}},c=i,d=(s("ef23"),s("2877")),l=Object(d["a"])(c,o,n,!1,null,"a81e697e",null);r["default"]=l.exports},ef23:function(e,r,s){"use strict";var o=s("5ee4"),n=s.n(o);n.a}}]);
//# sourceMappingURL=chunk-71a057a6.e216d2da.js.map