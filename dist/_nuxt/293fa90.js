(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{656:function(e,t,l){"use strict";l.r(t);l(19),l(54),l(9);var n={props:{studentId:{type:Number,required:!0}},data:function(){return{editable:!1,dobActivePicker:null,dobMenuModel:!1,studentRequierdFormRules:[function(e){return!!e||"حقل مطلوب . يرجى ادخال قيمة"}],studentRequierdForm:!1,studentName:"",studentEnglishName:"none",studentDob:null,studentGender:"",studentMail:"dijlah.student@duc.edu.iq",studentNationality:"عراقي",studentSection:"",studentStudyType:"",studentAcceptedType:"",studentLevel:"",studentRegisterYear:null,studentStatus:"",studentNote:"لا يوجد",selectGender:[{text:"ذكر",value:"0"},{text:"انثى",value:"1"}],selectStudyType:[{text:"صباحي",value:"1"},{text:"مسائي",value:"0"}],selectLevel:[{text:"المرحلة الاولى",value:1},{text:"المرحلة الثانية",value:2},{text:"المرحلة الثالثة",value:3},{text:"المرحلة الرابعة",value:4},{text:"المرحلة الخامسة",value:5}],selectSection:[],selectAcceptedType:[],selectRegisterYear:[],selectStatus:[],collegeNumber:"",studentLevelId:""}},watch:{dobMenuModel:function(e){var t=this;e&&setTimeout((function(){return t.dobActivePicker="YEAR"}))}},created:function(){var e=this;this.$axios.get("sections").then((function(section){e.selectSection=section.data})),this.$axios.get("acceptedTypes").then((function(t){e.selectAcceptedType=t.data})),this.$axios.get("yearStudies").then((function(t){e.selectRegisterYear=t.data})),this.$axios.get("studentsStatus").then((function(t){e.selectStatus=t.data})),this.initStudent()},methods:{saveDob:function(e){this.$refs.dobMenuRef.save(e)},initStudent:function(){var e=this;this.$axios.get("student/".concat(this.studentId)).then((function(t){var l=e.selectGender.filter((function(e){return Boolean(1*e.value)===Boolean(1*t.data.gender)})),n=e.selectStudyType.filter((function(e){return Boolean(1*e.value)===Boolean(1*t.data.studyType)}));e.studentName=t.data.studentName,e.studentEnglishName=t.data.englishName,e.studentMail=t.data.mail,e.studentDob=t.data.dob,e.studentSection=t.data.section,e.studentNationality=t.data.nationality,e.studentGender=l[0],e.studentStudyType=n[0],e.studentAcceptedType=t.data.acceptedType,e.studentRegisterYear=t.data.yearStudy,e.studentStatus=t.data.studentStatus,e.studentNote=t.data.note,e.collegeNumber=t.data.collegeNumber,e.studentLevel=t.data.studentLevel[0].level,e.studentLevelId=t.data.studentLevel[0].idStudentLevel})).catch((function(e){console.log(e)}))},updateStudent:function(){var e=this;if(this.$refs.studentRequierdForm.validate()){this.$toast.show("جاري تحديث الطالب",{duration:3e3,position:"top-center"});var t={studentName:this.studentName,englishName:this.studentEnglishName,mail:this.studentMail,dob:this.studentDob,sectionId:this.studentSection.idSection,nationality:this.studentNationality,gender:!!(1*this.studentGender),studyType:!!(1*this.studentStudyType),acceptedTypeId:1*this.studentAcceptedType.idAcceptedType,registerYearId:this.studentRegisterYear.idYearStudy,studentStatusId:this.studentStatus.idStudentStatus,note:this.studentNote,studentLevel:{idStudentLevel:this.studentLevelId,studentId:this.studentId,level:this.studentLevel,class:"A",yearStudyId:this.studentRegisterYear.idYearStudy}};this.$axios.put("student/".concat(this.studentId),t).then((function(t){e.$toast.success("تم تحديث الطالب بنجاح",{duration:3e3,position:"top-center"}),e.editable=!1})).catch((function(t){e.$toast.error("حدث خطأ في تحديث الطالب",{duration:3e3,position:"top-center"}),console.log(t.response)}))}}}},d=l(53),o=l(58),c=l.n(o),r=l(128),v=l(718),m=l(723),x=l(430),f=l(719),y=l(431),h=l(720),S=l(453),R=l(454),k=l(721),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-form",{ref:"studentRequierdForm",staticClass:"pt-3 pb-3",attrs:{"lazy-validation":""},model:{value:e.studentRequierdForm,callback:function(t){e.studentRequierdForm=t},expression:"studentRequierdForm"}},[l("v-row",[l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{outlined:"",color:"accent",label:"الرقم الاحصائي",dark:"",disabled:""},model:{value:e.collegeNumber,callback:function(t){e.collegeNumber=t},expression:"collegeNumber"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-text-field",{attrs:{outlined:"",color:"accent",label:"اسم الطالب",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentName,callback:function(t){e.studentName=t},expression:"studentName"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-text-field",{attrs:{outlined:"",color:"accent",label:"الاسم الانجليزي",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentEnglishName,callback:function(t){e.studentEnglishName=t},expression:"studentEnglishName"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-menu",{ref:"dobMenuRef",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,d=t.attrs;return[l("v-text-field",e._g(e._b({attrs:{outlined:"",color:"accent",label:"تاريخ الميلاد",dark:"",rules:e.studentRequierdFormRules,disabled:""},model:{value:e.studentDob,callback:function(t){e.studentDob=t},expression:"studentDob"}},"v-text-field",d,!1),n))]}}]),model:{value:e.dobMenuModel,callback:function(t){e.dobMenuModel=t},expression:"dobMenuModel"}},[e._v(" "),l("v-date-picker",{attrs:{"active-picker":e.dobActivePicker,max:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),min:"1950-01-01"},on:{"update:activePicker":function(t){e.dobActivePicker=t},"update:active-picker":function(t){e.dobActivePicker=t},change:e.saveDob},model:{value:e.studentDob,callback:function(t){e.studentDob=t},expression:"studentDob"}})],1)],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-text-field",{attrs:{outlined:"",color:"accent",label:"البريد الالكتروني",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentMail,callback:function(t){e.studentMail=t},expression:"studentMail"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"الجنسية",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable,items:["عراقي","مصري","سوري","اردني","سعودي","كويتي","ليبي"],"item-color":"accent"},model:{value:e.studentNationality,callback:function(t){e.studentNationality=t},expression:"studentNationality"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"الجنس",items:e.selectGender,"item-text":"text","item-value":"value","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentGender,callback:function(t){e.studentGender=t},expression:"studentGender"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"القسم",items:e.selectSection,"item-text":"sectionName","item-value":"idSection","item-color":"accent",dark:"","return-object":"",rules:e.studentRequierdFormRules,disabled:""},model:{value:e.studentSection,callback:function(t){e.studentSection=t},expression:"studentSection"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"نوع الدراسة",items:e.selectStudyType,"item-text":"text","item-value":"value","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentStudyType,callback:function(t){e.studentStudyType=t},expression:"studentStudyType"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"المرحلة",items:e.selectLevel,"item-text":"text","item-value":"value","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentLevel,callback:function(t){e.studentLevel=t},expression:"studentLevel"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"نوع القبول",items:e.selectAcceptedType,"item-text":"acceptedName","item-value":"idAcceptedType","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable,"return-object":""},model:{value:e.studentAcceptedType,callback:function(t){e.studentAcceptedType=t},expression:"studentAcceptedType"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"سنة القبول",items:e.selectRegisterYear,"item-text":"year","item-value":"idYearStudy","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable,"return-object":""},model:{value:e.studentRegisterYear,callback:function(t){e.studentRegisterYear=t},expression:"studentRegisterYear"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[l("v-select",{attrs:{outlined:"",color:"accent",label:"حالة الطالب",items:e.selectStatus,"item-text":"statusName","item-value":"idStudentStatus","item-color":"accent",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable,"return-object":""},model:{value:e.studentStatus,callback:function(t){e.studentStatus=t},expression:"studentStatus"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-textarea",{attrs:{outlined:"",color:"accent",label:"الملاحظات",dark:"",rules:e.studentRequierdFormRules,disabled:!e.editable},model:{value:e.studentNote,callback:function(t){e.studentNote=t},expression:"studentNote"}})],1)],1),e._v(" "),l("v-divider",{staticClass:"mb-5 mt-5"}),e._v(" "),l("v-btn",{attrs:{color:"warning",depressed:"",large:""},on:{click:function(t){e.editable=!e.editable}}},[l("span",[e._v(e._s(e.editable?"الغاء التحديث":"تحديث الطالب"))])]),e._v(" "),e.editable?l("v-btn",{staticClass:"mr-5",attrs:{depressed:"",color:"success",disabled:!e.studentRequierdForm,large:""},on:{click:function(t){return t.stopPropagation(),e.updateStudent.apply(null,arguments)}}},[l("span",{staticClass:"secondary--text"},[e._v("حفظ المعلومات")])]):e._e()],1)],1)}),[],!1,null,"4cd03f3c",null);t.default=component.exports;c()(component,{VBtn:r.a,VCol:v.a,VDatePicker:m.a,VDivider:x.a,VForm:f.a,VMenu:y.a,VRow:h.a,VSelect:S.a,VTextField:R.a,VTextarea:k.a})}}]);