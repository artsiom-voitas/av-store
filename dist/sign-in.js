/*! For license information please see sign-in.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/auth/auth.js":(e,t,n)=>{n.r(t),n.d(t,{assignHandlerToLogoutButton:()=>d,checkUserData:()=>l,getExistingUser:()=>c,getParsedUserList:()=>i,getUsersFromLocalStorage:()=>r,isAuthorizedUser:()=>u,setActiveStatusToUser:()=>a,setUsersToLocalStorage:()=>s});var o=n("./src/js/utils.js");const r=function(){return localStorage.getItem("users")},s=function(e){return localStorage.setItem("users",JSON.stringify(e))},a=function(e){return localStorage.setItem("active-user",e)},i=function(){return JSON.parse(localStorage.getItem("users"))},c=function(e){let t=i().find((t=>t.email===e));if(void 0!==t)return t},l=function(e,t){return c(e).password===t},d=function(){document.querySelector(".btn-logout").addEventListener("click",(function(){localStorage.removeItem("active-user"),(0,o.redirectToLogin)()}))},u=()=>Boolean(localStorage.getItem("active-user"))},"./src/js/utils.js":(e,t,n)=>{n.r(t),n.d(t,{createConfirmationModal:()=>g,createDeleteRowButton:()=>d,createSpecifiedDomElement:()=>l,disableFormButton:()=>r,extractRegistrationDateFromUser:()=>p,getMaxOfArray:()=>c,onCancel:()=>m,onConfirm:()=>u,redirectToHome:()=>a,redirectToLogin:()=>i,showNotification:()=>f,toggleInputWarning:()=>s});const o=document.querySelector("body");document.querySelector(".modal");const r=function(e,t){t.disabled=!e.checkValidity()},s=function(e,t){let n=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?n.classList.remove("show"):n.classList.add("show")};let a=function(){return window.location.replace("./home.html")},i=function(){return window.location.replace("./index.html")};function c(e){return Math.max.apply(null,e)}function l(e,t,n){let o=document.createElement(e);return o.classList.add(t),o.innerHTML=n,o}const d=()=>{const e=l("button","btn","Delete");return e.classList.add("btn-danger"),e},u=()=>{let e=document.querySelector(".modal"),t=document.querySelector(".btn-danger");e.classList.remove("show"),e.remove(),t.parentElement.remove(),f("Client successfully deleted!")},m=()=>{document.querySelector(".modal").remove()};function g(e){let{onConfirm:t,onCancel:n}=e,r=l("div","modal","");r.classList.add("show");let s=l("h4","modal-header","Confirmation"),a=l("p","modal-body","Are you sure you want to delete?"),i=l("div","modal-footer",""),c=l("button","btn","Delete");c.classList.add("btn-danger","btn__delete"),c.addEventListener("click",(function(){t()}));let d=l("button","btn","Cancel");d.classList.add("btn-secondary","btn__cancel"),d.addEventListener("click",(function(){n()})),r.append(s),r.append(a),r.append(i),i.append(c),i.append(d),o.append(r)}function f(e){let t=document.createElement("div");t.classList.add("badge");let n=l("h4","notification__header",e);t.append(n);let r=document.createElement("button");t.append(r),r.classList.add("btn","btn-close"),r.addEventListener("click",(function(){t.remove()})),o.append(t),setTimeout((()=>t.remove()),5e3),document.querySelectorAll(".badge").length>1&&document.querySelector(".badge").remove()}const p=function(e,t){return new Date(e.substring(0,t))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o);var e=n("./src/js/auth/auth.js"),t=n("./src/js/utils.js");let r=document.forms["sign-in"],s=r.elements["user-email"],a=r.elements["user-password"],i=r.elements["authorization-button"];r.addEventListener("input",(function(){(0,t.disableFormButton)(this,i)})),s.addEventListener("change",(function(){(0,t.toggleInputWarning)(this,".input-email")})),a.addEventListener("change",(function(){(0,t.toggleInputWarning)(this,".input-password")})),r.addEventListener("submit",(function(n){n.preventDefault();let o=document.querySelector(".log-in");o.classList.remove("show"),o.innerHTML="";let r=s.value,i=a.value;if((0,e.getExistingUser)(r))(0,e.checkUserData)(r,i)?(o.classList.remove("text-warning"),o.innerHTML="You are successfully logged in!",o.classList.add("show"),(0,e.setActiveStatusToUser)(r),setTimeout((()=>{(0,t.redirectToHome)()}),1e3)):(o.innerHTML="Oops, something wrong with yours email or password!",o.classList.add("text-warning"),o.classList.add("show"));else{let e=document.querySelector(".text-warning");e.innerHTML="A user with such email address does not exist",e.classList.add("show")}}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDZSxFQUFRZ0IsVUFBWSxnREFDcEJoQixFQUFRQyxVQUFVRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvYXV0aC9hdXRoLmpzIiwid2VicGFjazovL2F2LXN0b3JlLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvc2lnbi1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgcmVkaXJlY3RUb0hvbWUsXHJcbiAgICByZWRpcmVjdFRvTG9naW4sXHJcbn0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBnZXRVc2Vyc0Zyb21Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJzJylcclxufVxyXG5cclxuY29uc3Qgc2V0VXNlcnNUb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcnMnLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKVxyXG59XHJcblxyXG5jb25zdCBzZXRBY3RpdmVTdGF0dXNUb1VzZXIgPSBmdW5jdGlvbiAodXNlckVtYWlsKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZS11c2VyJywgdXNlckVtYWlsKVxyXG59XHJcblxyXG5jb25zdCBnZXRQYXJzZWRVc2VyTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VycycpKVxyXG59XHJcblxyXG5jb25zdCBnZXRFeGlzdGluZ1VzZXIgPSBmdW5jdGlvbiAoZW1haWxWYWx1ZSkge1xyXG4gICAgbGV0IHVzZXJzID0gZ2V0UGFyc2VkVXNlckxpc3QoKVxyXG4gICAgbGV0IHVzZXIgID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuZW1haWwgPT09IGVtYWlsVmFsdWUpXHJcbiAgICBpZiAodXNlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tVc2VyRGF0YSA9IGZ1bmN0aW9uIChlbWFpbFZhbHVlLCBwYXNzd29yZFZhbHVlKSB7XHJcbiAgICBsZXQgdXNlciA9IGdldEV4aXN0aW5nVXNlcihlbWFpbFZhbHVlKTtcclxuICAgIHJldHVybiB1c2VyWydwYXNzd29yZCddID09PSBwYXNzd29yZFZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBhc3NpZ25IYW5kbGVyVG9Mb2dvdXRCdXR0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1sb2dvdXQnKVxyXG4gICAgbG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY3RpdmUtdXNlcicpXHJcbiAgICAgICAgcmVkaXJlY3RUb0xvZ2luKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGlzQXV0aG9yaXplZFVzZXIgPSAoKSA9PiB7IHJldHVybiBCb29sZWFuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmUtdXNlcicpKSB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgYXNzaWduSGFuZGxlclRvTG9nb3V0QnV0dG9uLFxyXG4gICAgY2hlY2tVc2VyRGF0YSxcclxuICAgIGdldEV4aXN0aW5nVXNlcixcclxuICAgIGdldFBhcnNlZFVzZXJMaXN0LFxyXG4gICAgc2V0QWN0aXZlU3RhdHVzVG9Vc2VyLFxyXG4gICAgc2V0VXNlcnNUb0xvY2FsU3RvcmFnZSxcclxuICAgIGdldFVzZXJzRnJvbUxvY2FsU3RvcmFnZSxcclxuICAgIGlzQXV0aG9yaXplZFVzZXJcclxufVxyXG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuXHJcbmNvbnN0IGRpc2FibGVGb3JtQnV0dG9uID0gZnVuY3Rpb24gKGZvcm0sIGJ1dHRvbkluRm9ybSkge1xyXG4gICAgYnV0dG9uSW5Gb3JtLmRpc2FibGVkID0gIWZvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG59XHJcblxyXG5jb25zdCB0b2dnbGVJbnB1dFdhcm5pbmcgPSBmdW5jdGlvbiAoaW5wdXRGaWVsZCwgc2VsZWN0b3IpIHtcclxuICAgIGxldCBmaW5kSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4gICAgbGV0IHdhcm5pbmcgPSBmaW5kSW5wdXQucXVlcnlTZWxlY3RvcignLnRleHQtd2FybmluZycpO1xyXG4gICAgaWYgKCFpbnB1dEZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdhcm5pbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCByZWRpcmVjdFRvSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLi9ob21lLmh0bWwnKVxyXG59XHJcblxyXG5sZXQgcmVkaXJlY3RUb0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2luZGV4Lmh0bWwnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYXhPZkFycmF5KG51bUFycmF5KSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgbnVtQXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KHRhZ05hbWUsIGNsYXNzTmFtZSwgaW5uZXJIVE1MKSB7XHJcbiAgICBsZXQgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gICAgcmV0dXJuIGRvbUVsZW1lbnRcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRGVsZXRlUm93QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlUm93QnV0dG9uID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICdEZWxldGUnKTtcclxuICAgIGRlbGV0ZVJvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGFuZ2VyJyk7XHJcbiAgICByZXR1cm4gZGVsZXRlUm93QnV0dG9uO1xyXG59XHJcblxyXG5jb25zdCBvbkNvbmZpcm0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGxldCByb3dEZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRhbmdlcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIG1vZGFsLnJlbW92ZSgpXHJcbiAgICByb3dEZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oJ0NsaWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKTtcclxufVxyXG5cclxuY29uc3Qgb25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIG1vZGFsLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb25maXJtYXRpb25Nb2RhbCh7IG9uQ29uZmlybSwgb25DYW5jZWwgfSkge1xyXG4gICAgbGV0IG1vZGFsID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnZGl2JywgJ21vZGFsJywgJycpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdoNCcsICdtb2RhbC1oZWFkZXInLCAnQ29uZmlybWF0aW9uJywgJycpO1xyXG4gICAgbGV0IG1vZGFsQm9keSA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ3AnLCAnbW9kYWwtYm9keScsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpXHJcbiAgICBsZXQgbW9kYWxGb290ZXIgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdkaXYnLCAnbW9kYWwtZm9vdGVyJywgJycpO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2J1dHRvbicsICdidG4nLCAnRGVsZXRlJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRhbmdlcicsICdidG5fX2RlbGV0ZScpXHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25Db25maXJtKClcclxuICAgIH0pXHJcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICdDYW5jZWwnKTtcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5JywgJ2J0bl9fY2FuY2VsJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25DYW5jZWwoKVxyXG4gICAgfSlcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEhlYWRlcik7XHJcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxCb2R5KTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEZvb3Rlcik7XHJcbiAgICBtb2RhbEZvb3Rlci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIG1vZGFsRm9vdGVyLmFwcGVuZChjYW5jZWxCdXR0b24pXHJcbiAgICBib2R5LmFwcGVuZChtb2RhbClcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbih0ZXh0KSB7XHJcbiAgICBsZXQgd2luZG93Tm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3aW5kb3dOb3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnYmFkZ2UnKTtcclxuICAgIGxldCBub3RpZmljYXRpb25IZWFkZXIgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdoNCcsICdub3RpZmljYXRpb25fX2hlYWRlcicsIHRleHQpO1xyXG4gICAgd2luZG93Tm90aWZpY2F0aW9uLmFwcGVuZChub3RpZmljYXRpb25IZWFkZXIpO1xyXG4gICAgbGV0IGNsb3NlTm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB3aW5kb3dOb3RpZmljYXRpb24uYXBwZW5kKGNsb3NlTm90aWZpY2F0aW9uKVxyXG4gICAgY2xvc2VOb3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1jbG9zZScpO1xyXG4gICAgY2xvc2VOb3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Tm90aWZpY2F0aW9uLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICAgIGJvZHkuYXBwZW5kKHdpbmRvd05vdGlmaWNhdGlvbilcclxuICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICB3aW5kb3dOb3RpZmljYXRpb24ucmVtb3ZlKClcclxuICAgICAgICAsIDUwMDApO1xyXG4gICAgbGV0IGFsbE5vdGlmaWNhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFkZ2UnKVxyXG4gICAgaWYgKGFsbE5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBleHRyYWN0UmVnaXN0cmF0aW9uRGF0ZUZyb21Vc2VyID0gZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbkRhdGUsIG51bWJlck9mQ2hhcmFjdGVyc1RvUHJvY2Vzcykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHJlZ2lzdHJhdGlvbkRhdGUuc3Vic3RyaW5nKDAsIG51bWJlck9mQ2hhcmFjdGVyc1RvUHJvY2VzcykpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZGlzYWJsZUZvcm1CdXR0b24sXHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcsXHJcbiAgICByZWRpcmVjdFRvSG9tZSxcclxuICAgIHJlZGlyZWN0VG9Mb2dpbixcclxuICAgIGV4dHJhY3RSZWdpc3RyYXRpb25EYXRlRnJvbVVzZXIsXHJcbiAgICBnZXRNYXhPZkFycmF5LFxyXG4gICAgY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCxcclxuICAgIGNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsLFxyXG4gICAgY3JlYXRlRGVsZXRlUm93QnV0dG9uLFxyXG4gICAgc2hvd05vdGlmaWNhdGlvbixcclxuICAgIG9uQ2FuY2VsLFxyXG4gICAgb25Db25maXJtLFxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICAgIGNoZWNrVXNlckRhdGEsXHJcbiAgICBnZXRFeGlzdGluZ1VzZXIsXHJcbiAgICBzZXRBY3RpdmVTdGF0dXNUb1VzZXIsXHJcbn0gZnJvbSAnLi9hdXRoL2F1dGgnXHJcbmltcG9ydCB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbixcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyxcclxuICAgIHJlZGlyZWN0VG9Ib21lLFxyXG5cclxufSBmcm9tICcuL3V0aWxzLmpzJ1xyXG5cclxubGV0IHNpZ25JbkZvcm0gPSBkb2N1bWVudC5mb3Jtc1snc2lnbi1pbiddO1xyXG5sZXQgdXNlckVtYWlsID0gc2lnbkluRm9ybS5lbGVtZW50c1sndXNlci1lbWFpbCddO1xyXG5sZXQgdXNlclBhc3N3b3JkID0gc2lnbkluRm9ybS5lbGVtZW50c1sndXNlci1wYXNzd29yZCddO1xyXG5sZXQgbG9naW5CdXR0b24gPSBzaWduSW5Gb3JtLmVsZW1lbnRzWydhdXRob3JpemF0aW9uLWJ1dHRvbiddO1xyXG5cclxuc2lnbkluRm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRpc2FibGVGb3JtQnV0dG9uKHRoaXMsIGxvZ2luQnV0dG9uKVxyXG59KTtcclxuXHJcbnVzZXJFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0b2dnbGVJbnB1dFdhcm5pbmcodGhpcywgJy5pbnB1dC1lbWFpbCcpXHJcbn0pXHJcblxyXG51c2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdG9nZ2xlSW5wdXRXYXJuaW5nKHRoaXMsICcuaW5wdXQtcGFzc3dvcmQnKVxyXG59KVxyXG5cclxuc2lnbkluRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbG9naW5NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1pbicpXHJcbiAgICBsb2dpbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgbG9naW5NZXNzYWdlLmlubmVySFRNTCA9ICcnXHJcbiAgICBsZXQgdXNlckVtYWlsVmFsdWUgPSB1c2VyRW1haWwudmFsdWU7XHJcbiAgICBsZXQgdXNlclBhc3N3b3JkVmFsdWUgPSB1c2VyUGFzc3dvcmQudmFsdWU7XHJcbiAgICBpZiAoIWdldEV4aXN0aW5nVXNlcih1c2VyRW1haWxWYWx1ZSkpIHtcclxuICAgICAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgICB3YXJuaW5nLmlubmVySFRNTCA9IFwiQSB1c2VyIHdpdGggc3VjaCBlbWFpbCBhZGRyZXNzIGRvZXMgbm90IGV4aXN0XCI7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIH0gZWxzZSAge1xyXG4gICAgICAgIGlmIChjaGVja1VzZXJEYXRhKHVzZXJFbWFpbFZhbHVlLCB1c2VyUGFzc3dvcmRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2FybmluZycpXHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGFyZSBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluISdcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlU3RhdHVzVG9Vc2VyKHVzZXJFbWFpbFZhbHVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Ib21lKClcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmlubmVySFRNTCA9ICdPb3BzLCBzb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VycyBlbWFpbCBvciBwYXNzd29yZCEnXHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJnZXRVc2Vyc0Zyb21Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0VXNlcnNUb0xvY2FsU3RvcmFnZSIsIm9iamVjdCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0QWN0aXZlU3RhdHVzVG9Vc2VyIiwidXNlckVtYWlsIiwiZ2V0UGFyc2VkVXNlckxpc3QiLCJwYXJzZSIsImdldEV4aXN0aW5nVXNlciIsImVtYWlsVmFsdWUiLCJ1c2VyIiwiZmluZCIsImVtYWlsIiwidW5kZWZpbmVkIiwiY2hlY2tVc2VyRGF0YSIsInBhc3N3b3JkVmFsdWUiLCJhc3NpZ25IYW5kbGVyVG9Mb2dvdXRCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsInJlZGlyZWN0VG9Mb2dpbiIsImlzQXV0aG9yaXplZFVzZXIiLCJCb29sZWFuIiwiYm9keSIsImRpc2FibGVGb3JtQnV0dG9uIiwiZm9ybSIsImJ1dHRvbkluRm9ybSIsImRpc2FibGVkIiwiY2hlY2tWYWxpZGl0eSIsInRvZ2dsZUlucHV0V2FybmluZyIsImlucHV0RmllbGQiLCJzZWxlY3RvciIsIndhcm5pbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZWRpcmVjdFRvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldE1heE9mQXJyYXkiLCJudW1BcnJheSIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiZG9tRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVEZWxldGVSb3dCdXR0b24iLCJkZWxldGVSb3dCdXR0b24iLCJvbkNvbmZpcm0iLCJtb2RhbCIsInJvd0RlbGV0ZUJ1dHRvbiIsInBhcmVudEVsZW1lbnQiLCJzaG93Tm90aWZpY2F0aW9uIiwib25DYW5jZWwiLCJjcmVhdGVDb25maXJtYXRpb25Nb2RhbCIsIm1vZGFsSGVhZGVyIiwibW9kYWxCb2R5IiwibW9kYWxGb290ZXIiLCJkZWxldGVCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJhcHBlbmQiLCJ0ZXh0Iiwid2luZG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uSGVhZGVyIiwiY2xvc2VOb3RpZmljYXRpb24iLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImV4dHJhY3RSZWdpc3RyYXRpb25EYXRlRnJvbVVzZXIiLCJyZWdpc3RyYXRpb25EYXRlIiwibnVtYmVyT2ZDaGFyYWN0ZXJzVG9Qcm9jZXNzIiwiRGF0ZSIsInN1YnN0cmluZyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwic2lnbkluRm9ybSIsImZvcm1zIiwiZWxlbWVudHMiLCJ1c2VyUGFzc3dvcmQiLCJsb2dpbkJ1dHRvbiIsInRoaXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG9naW5NZXNzYWdlIiwidXNlckVtYWlsVmFsdWUiLCJ1c2VyUGFzc3dvcmRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=