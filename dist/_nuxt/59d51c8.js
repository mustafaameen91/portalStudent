(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{643:function(t,e,n){"use strict";n.r(e);n(175);var o={data:function(){return{responsibleName:"",responsiblePhone:"",nationalityCertificateNumber:"",nationalNumber:"",religion:"مسلم",motherName:"",phones:[],studentId:this.$store.state.lastStudentRegistered,students:[]}},watch:{"$store.state.stepper":function(){this.fetchStudents()}},mounted:function(){this.fetchStudents()},methods:{fetchStudents:function(){var t=this;this.$axios.get("students").then((function(e){t.students=e.data}))},saveNumber:function(){var t={value:this.responsiblePhone,text:"رقم الهاتف"};this.phones.push(t),this.responsiblePhone=""},deleteNumber:function(i){this.phones.splice(i,1)},saveStudentResponsible:function(){for(var t=this,e=1*this.studentId,n=[],i=0;i<this.phones.length;i++){var o={responsibleName:this.responsibleName,responsiblePhone:this.phones[i].value,studentId:e};n.push(o)}try{this.$toast.show("جاري حفظ المعلومات...",{duration:3e3,position:"top-center"}),this.$axios.post("addManyResponsible",n),this.$toast.success("تم حفظ المعلومات",{duration:3e3,position:"top-center"})}catch(t){console.log(t)}this.$axios.post("addNationalityCertificate",{nationalityNumber:this.nationalityCertificateNumber,studentId:e}).then((function(){t.$toast.success("تم حفظ المعلومات",{duration:3e3,position:"top-center"})})).catch((function(t){console.log(t)})),this.$axios.post("addNationalInfo",{nationalNumber:this.nationalNumber,motherName:this.motherName,religion:this.religion,studentId:e}).then((function(){t.$toast.success("تم حفظ المعلومات",{duration:3e3,position:"top-center"}),t.$store.commit("set_stepper")})).catch((function(t){console.log(t)}))}}},l=n(52),c=n(56),r=n.n(c),d=n(128),v=n(435),m=n(705),h=n(425),f=n(706),x=n(203),N=n(204),_=n(127),C=n(707),w=n(584),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"6"}},[n("v-text-field",{attrs:{color:"accent",label:"اسم ولي الامر",outlined:""},model:{value:t.responsibleName,callback:function(e){t.responsibleName=e},expression:"responsibleName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-row",[n("v-col",{attrs:{cols:"11"}},[n("v-text-field",{attrs:{color:"accent",label:"رقم ولي الامر",outlined:""},model:{value:t.responsiblePhone,callback:function(e){t.responsiblePhone=e},expression:"responsiblePhone"}})],1),t._v(" "),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:"",color:"accent",depressed:""},on:{click:t.saveNumber}},[n("v-icon",[t._v("mdi-content-save")])],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{color:"accent",label:"رقم الجنسية",outlined:""},model:{value:t.nationalNumber,callback:function(e){t.nationalNumber=e},expression:"nationalNumber"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{color:"accent",label:"اسم الام",outlined:""},model:{value:t.motherName,callback:function(e){t.motherName=e},expression:"motherName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{color:"accent",label:"الديانة",outlined:""},model:{value:t.religion,callback:function(e){t.religion=e},expression:"religion"}})],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{color:"accent",label:"رقم شهادة الجنسية",outlined:""},model:{value:t.nationalityCertificateNumber,callback:function(e){t.nationalityCertificateNumber=e},expression:"nationalityCertificateNumber"}})],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card",{staticClass:"rounded-1 primary mt-10",attrs:{elevation:"0"}},t._l(t.phones,(function(e,o){return n("v-list",{key:o,attrs:{nav:"",dense:"",outlined:""}},[n("v-list-item",{on:{click:function(n){t.responsiblePhone=e.value}}},[n("div",{staticClass:"d-flex align-center justify-space-between",staticStyle:{width:"100%"}},[n("span",[t._v(t._s(e.text))]),t._v(" "),n("span",[t._v(t._s(e.value))])]),t._v(" "),n("v-btn",{staticClass:"mr-5",attrs:{icon:"",color:"accent",depressed:""},on:{click:function(e){return t.deleteNumber(o)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)})),1)],1),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"warning",large:""},on:{click:t.saveStudentResponsible}},[n("span",{staticClass:"secondary--text"},[t._v("حفظ المعلومات")])]),t._v(" "),n("v-btn",{staticClass:"mr-5 ml-5",attrs:{depressed:"",color:"accent",large:""},on:{click:function(e){return t.$store.commit("unset_stepper")}}},[n("span",{staticClass:"secondary--text"},[t._v("رجوع")])]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"accent",large:""},on:{click:function(e){return t.$store.commit("set_stepper")}}},[n("span",{staticClass:"secondary--text"},[t._v("تخطي")])])],1)}),[],!1,null,"52d3b44c",null);e.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VDivider:h.a,VForm:f.a,VIcon:x.a,VList:N.a,VListItem:_.a,VRow:C.a,VTextField:w.a})}}]);