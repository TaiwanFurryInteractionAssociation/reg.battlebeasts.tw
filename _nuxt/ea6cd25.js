(window.webpackJsonp=window.webpackJsonp||[]).push([[54,23],{406:function(t,e,n){"use strict";n.r(e);var o={props:["logo"]},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m:16|8 cursor:pointer border-bottom:1px|solid|transparent border-bottom:1px|solid|black:hover color:black",on:{click:function(e){return t.$emit("click")}}},[t.logo?e("i",{class:"mdi mdi-"+t.logo}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},506:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(22),n(463),n(73)),c={name:"page-verify-account",layout:"auth",data:function(){return{loading:!0,sent:!1,account_verification_token:this.$route.params.token}},mounted:function(){this.verifyAccount(),this.$store.commit("auth/setTitle",this.$t("auth.titles.verify"))},methods:{verifyAccount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$post("/api/auth/register/verify",{account_verification_token:t.account_verification_token}).then((function(e){r.a.showSnackbar({message:t.$t("auth.messages.account_verified"),colorType:"positive",duration:5e3,position:"top"}),t.$router.push(t.localePath("/auth/login"))})).catch((function(t){r.a.showRequestError(t)}));case 3:t.sent=!0,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},l=n(28),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-center font-weight:bold flex-direction:column"},[e("Loading",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}}),t._v(" "),t.sent?t._e():e("span",[t._v(t._s(t.$t("auth.messages.verifing")))]),t._v(" "),e("TextButton",{on:{click:function(e){t.$router.push(t.localePath("/auth/resendVerificationEmail"))}}},[t._v("\n    "+t._s(t.$t("auth.buttons.resend_verification")))]),t._v(" "),e("TextButton",{on:{click:function(e){t.$router.push(t.localePath("/auth/login"))}}},[t._v("\n    "+t._s(t.$t("auth.buttons.back_to_login")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(178).default,TextButton:n(406).default})}}]);