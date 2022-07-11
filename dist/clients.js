/*! For license information please see clients.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/api/users.js":(e,t,n)=>{n.r(t),n.d(t,{fetchUsers:()=>o});async function o(){const e=await fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json",{method:"GET",headers:{"Accept-Language":"en-US,ge"}});return await e.json()}},"./src/js/utils.js":(e,t,n)=>{n.r(t),n.d(t,{createConfirmationModal:()=>p,createDeleteRowButton:()=>s,createSpecifiedDomElement:()=>l,disableFormButton:()=>r,extractRegistrationDateFromUser:()=>b,getMaxOfArray:()=>i,onCancel:()=>m,onConfirm:()=>u,redirectToHome:()=>c,redirectToLogin:()=>d,showNotification:()=>f,toggleInputWarning:()=>a});const o=document.querySelector("body");document.querySelector(".modal");const r=function(e,t){t.disabled=!e.checkValidity()},a=function(e,t){let n=document.querySelector(t).querySelector(".text-warning");e.checkValidity()?n.classList.remove("show"):n.classList.add("show")};let c=function(){return window.location.replace("./home.html")},d=function(){return window.location.replace("./index.html")};function i(e){return Math.max.apply(null,e)}function l(e,t,n){let o=document.createElement(e);return o.classList.add(t),o.innerHTML=n,o}const s=()=>{const e=l("button","btn","Delete");return e.classList.add("btn-danger"),e},u=()=>{let e=document.querySelector(".modal"),t=document.querySelector(".btn-danger");e.classList.remove("show"),e.remove(),t.parentElement.remove(),f("Client successfully deleted!")},m=()=>{document.querySelector(".modal").remove()};function p(e){let{onConfirm:t,onCancel:n}=e,r=l("div","modal","");r.classList.add("show");let a=l("h4","modal-header","Confirmation"),c=l("p","modal-body","Are you sure you want to delete?"),d=l("div","modal-footer",""),i=l("button","btn","Delete");i.classList.add("btn-danger","btn__delete"),i.addEventListener("click",(function(){t()}));let s=l("button","btn","Cancel");s.classList.add("btn-secondary","btn__cancel"),s.addEventListener("click",(function(){n()})),r.append(a),r.append(c),r.append(d),d.append(i),d.append(s),o.append(r)}function f(e){let t=document.createElement("div");t.classList.add("badge");let n=l("h4","notification__header",e);t.append(n);let r=document.createElement("button");t.append(r),r.classList.add("btn","btn-close"),r.addEventListener("click",(function(){t.remove()})),o.append(t),setTimeout((()=>t.remove()),5e3),document.querySelectorAll(".badge").length>1&&document.querySelector(".badge").remove()}const b=function(e,t){return new Date(e.substring(0,t))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o);var e=n("./src/js/api/users.js"),t=n("./src/js/utils.js");document.querySelector(".go__up").addEventListener("click",(function(){window.scrollTo(0,0)}));let r=0,a=0,c=[];const d=function(e,t){e||(t.style.background="gray")},i=function(e){if("male"===e)return r+=1,r},l=function(e){if("female"===e)return a+=1,a};document.addEventListener("DOMContentLoaded",(function(){(0,e.fetchUsers)().then((e=>{let n=document.querySelector("tbody");for(const r of e){let e=document.createElement("tr");e.classList.add("table__row");const a=(0,t.extractRegistrationDateFromUser)(r.registered,10),s=(0,t.createDeleteRowButton)();let u=(0,t.createSpecifiedDomElement)("td","user__name",r.name),m=(0,t.createSpecifiedDomElement)("td","user__company",r.company),p=(0,t.createSpecifiedDomElement)("td","user__email",r.email),f=(0,t.createSpecifiedDomElement)("td","user__phone",r.phone),b=(0,t.createSpecifiedDomElement)("td","user__balance",r.balance),y=(0,t.createSpecifiedDomElement)("td","user__registration-date",a.toLocaleDateString()),g=r.gender,S=r.isActive;n.append(e),e.append(u),e.append(m),e.append(p),e.append(f),e.append(b),e.append(y),e.append(s),s.addEventListener("click",(function(){(0,t.createConfirmationModal)({onCancel:t.onCancel,onConfirm:t.onConfirm})})),d(S,e),i(g),l(g),c.push((o=r.balance,parseFloat(o.substring(1).replace(",",""))))}var o;document.querySelector(".male__users").innerHTML=String(r),document.querySelector(".female__users").innerHTML=String(a),document.querySelector(".largest__balance").innerHTML="The largest amount on the client's account is $".concat((0,t.getMaxOfArray)(c),"!")}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ25DRyxFQUFpQkMsR0FDakJDLEVBQW1CRCxHQUNuQlAsRUFBY3FCLE1BNUNpQkMsRUE0Q2FWLEVBQUksUUEzQ2pEVyxXQUFXRCxFQUFnQm5ELFVBQVUsR0FBR3hDLFFBQVEsSUFBSyxPQUQvQixJQUFVMkYsRUFoQnJCNUcsU0FBU0MsY0FBYyxnQkFDL0IwQixVQUFZbUYsT0FBTzFCLEdBV1RwRixTQUFTQyxjQUFjLGtCQUMvQjBCLFVBQVltRixPQUFPekIsR0FRVnJGLFNBQVNDLGNBQWMscUJBQzdCMEIsVUFBZiwwREFBNkVSLEVBQUFBLEVBQUFBLGVBQWNtRSxHQUEzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2F2LXN0b3JlLy4vc3JjL2pzL2FwaS91c2Vycy5qcyIsIndlYnBhY2s6Ly9hdi1zdG9yZS8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdi1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F2LXN0b3JlLy4vc3JjL2pzL2NsaWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlcnNEYXRhID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vb0RBU0NvLzNmNDAxNGQyNGRjNzllMWUyOWI1OGJmYTk2YWZhYTFiL3Jhdy82Nzc1MTZlZTNiZDI3OGY3ZTNkODA1MTA4NTk2Y2E0MzFkMDBiNjI5L2RiLmpzb24nXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VycygpXHJcbntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVzZXJzRGF0YSwge1xyXG4gICAgICAgIG1ldGhvZDogICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbi1VUyxnZScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxyXG59XHJcbiIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5cclxuY29uc3QgZGlzYWJsZUZvcm1CdXR0b24gPSBmdW5jdGlvbiAoZm9ybSwgYnV0dG9uSW5Gb3JtKSB7XHJcbiAgICBidXR0b25JbkZvcm0uZGlzYWJsZWQgPSAhZm9ybS5jaGVja1ZhbGlkaXR5KCk7XHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUlucHV0V2FybmluZyA9IGZ1bmN0aW9uIChpbnB1dEZpZWxkLCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IGZpbmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICBsZXQgd2FybmluZyA9IGZpbmRJbnB1dC5xdWVyeVNlbGVjdG9yKCcudGV4dC13YXJuaW5nJyk7XHJcbiAgICBpZiAoIWlucHV0RmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIH1cclxufVxyXG5cclxubGV0IHJlZGlyZWN0VG9Ib21lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2hvbWUuaHRtbCcpXHJcbn1cclxuXHJcbmxldCByZWRpcmVjdFRvTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy4vaW5kZXguaHRtbCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1heE9mQXJyYXkobnVtQXJyYXkpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBudW1BcnJheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NOYW1lLCBpbm5lckhUTUwpIHtcclxuICAgIGxldCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcbiAgICByZXR1cm4gZG9tRWxlbWVudFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEZWxldGVSb3dCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVSb3dCdXR0b24gPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ0RlbGV0ZScpO1xyXG4gICAgZGVsZXRlUm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInKTtcclxuICAgIHJldHVybiBkZWxldGVSb3dCdXR0b247XHJcbn1cclxuXHJcbmNvbnN0IG9uQ29uZmlybSA9ICgpID0+IHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgbGV0IHJvd0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZGFuZ2VyJylcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgbW9kYWwucmVtb3ZlKClcclxuICAgIHJvd0RlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbignQ2xpZW50IHN1Y2Nlc3NmdWxseSBkZWxldGVkIScpO1xyXG59XHJcblxyXG5jb25zdCBvbkNhbmNlbCA9ICgpID0+IHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgbW9kYWwucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpcm1hdGlvbk1vZGFsKHsgb25Db25maXJtLCBvbkNhbmNlbCB9KSB7XHJcbiAgICBsZXQgbW9kYWwgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdkaXYnLCAnbW9kYWwnLCAnJyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgIGxldCBtb2RhbEhlYWRlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2g0JywgJ21vZGFsLWhlYWRlcicsICdDb25maXJtYXRpb24nLCAnJyk7XHJcbiAgICBsZXQgbW9kYWxCb2R5ID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgncCcsICdtb2RhbC1ib2R5JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JylcclxuICAgIGxldCBtb2RhbEZvb3RlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2RpdicsICdtb2RhbC1mb290ZXInLCAnJyk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgnYnV0dG9uJywgJ2J0bicsICdEZWxldGUnKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGFuZ2VyJywgJ2J0bl9fZGVsZXRlJylcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvbkNvbmZpcm0oKVxyXG4gICAgfSlcclxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCdidXR0b24nLCAnYnRuJywgJ0NhbmNlbCcpO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknLCAnYnRuX19jYW5jZWwnKTtcclxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvbkNhbmNlbCgpXHJcbiAgICB9KVxyXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsRm9vdGVyKTtcclxuICAgIG1vZGFsRm9vdGVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgbW9kYWxGb290ZXIuYXBwZW5kKGNhbmNlbEJ1dHRvbilcclxuICAgIGJvZHkuYXBwZW5kKG1vZGFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKHRleHQpIHtcclxuICAgIGxldCB3aW5kb3dOb3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbmRvd05vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xyXG4gICAgbGV0IG5vdGlmaWNhdGlvbkhlYWRlciA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ2g0JywgJ25vdGlmaWNhdGlvbl9faGVhZGVyJywgdGV4dCk7XHJcbiAgICB3aW5kb3dOb3RpZmljYXRpb24uYXBwZW5kKG5vdGlmaWNhdGlvbkhlYWRlcik7XHJcbiAgICBsZXQgY2xvc2VOb3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdpbmRvd05vdGlmaWNhdGlvbi5hcHBlbmQoY2xvc2VOb3RpZmljYXRpb24pXHJcbiAgICBjbG9zZU5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWNsb3NlJyk7XHJcbiAgICBjbG9zZU5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3dOb3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgYm9keS5hcHBlbmQod2luZG93Tm90aWZpY2F0aW9uKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgIHdpbmRvd05vdGlmaWNhdGlvbi5yZW1vdmUoKVxyXG4gICAgICAgICwgNTAwMCk7XHJcbiAgICBsZXQgYWxsTm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWRnZScpXHJcbiAgICBpZiAoYWxsTm90aWZpY2F0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhZGdlJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGV4dHJhY3RSZWdpc3RyYXRpb25EYXRlRnJvbVVzZXIgPSBmdW5jdGlvbiAocmVnaXN0cmF0aW9uRGF0ZSwgbnVtYmVyT2ZDaGFyYWN0ZXJzVG9Qcm9jZXNzKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUocmVnaXN0cmF0aW9uRGF0ZS5zdWJzdHJpbmcoMCwgbnVtYmVyT2ZDaGFyYWN0ZXJzVG9Qcm9jZXNzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbixcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyxcclxuICAgIHJlZGlyZWN0VG9Ib21lLFxyXG4gICAgcmVkaXJlY3RUb0xvZ2luLFxyXG4gICAgZXh0cmFjdFJlZ2lzdHJhdGlvbkRhdGVGcm9tVXNlcixcclxuICAgIGdldE1heE9mQXJyYXksXHJcbiAgICBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50LFxyXG4gICAgY3JlYXRlQ29uZmlybWF0aW9uTW9kYWwsXHJcbiAgICBjcmVhdGVEZWxldGVSb3dCdXR0b24sXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uLFxyXG4gICAgb25DYW5jZWwsXHJcbiAgICBvbkNvbmZpcm0sXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi9hcGkvdXNlcnMnXHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVDb25maXJtYXRpb25Nb2RhbCxcclxuICAgIGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQsXHJcbiAgICBleHRyYWN0UmVnaXN0cmF0aW9uRGF0ZUZyb21Vc2VyLFxyXG4gICAgY3JlYXRlRGVsZXRlUm93QnV0dG9uLFxyXG4gICAgZ2V0TWF4T2ZBcnJheSxcclxuICAgIG9uQ2FuY2VsLFxyXG4gICAgb25Db25maXJtLFxyXG59IGZyb20gJy4vdXRpbHMuanMnXHJcblxyXG5jb25zdCBnb1RvVG9wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvX191cCcpO1xyXG5nb1RvVG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbn0pO1xyXG5cclxubGV0IG1hbGVVc2Vyc0Ftb3VudCA9IDA7XHJcbmxldCBmZW1hbGVVc2Vyc0Ftb3VudCA9IDA7XHJcbmxldCB1c2Vyc0JhbGFuY2VzID0gW107XHJcblxyXG5jb25zdCBoaWdobGlnaHRJbmFjdGl2ZVVzZXJzID0gZnVuY3Rpb24gKHVzZXJTdGF0dXMsIHRhYmxlUm93KSB7XHJcbiAgICBpZiAoIXVzZXJTdGF0dXMpIHtcclxuICAgICAgICB0YWJsZVJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYWxlVXNlcnNDb3VudGVyID0gZnVuY3Rpb24gKHVzZXJHZW5kZXIpIHtcclxuICAgIGlmICh1c2VyR2VuZGVyID09PSAnbWFsZScpIHtcclxuICAgICAgICBtYWxlVXNlcnNBbW91bnQgKz0gMTtcclxuICAgICAgICByZXR1cm4gbWFsZVVzZXJzQW1vdW50XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlJbmZvQWJvdXRBbW91bnRPZk1hbGVVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1hbGVVc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWxlX191c2VycycpO1xyXG4gICAgbWFsZVVzZXJzLmlubmVySFRNTCA9IFN0cmluZyhtYWxlVXNlcnNBbW91bnQpO1xyXG59XHJcblxyXG5jb25zdCBmZW1hbGVVc2Vyc0NvdW50ZXIgPSBmdW5jdGlvbiAodXNlckdlbmRlcikge1xyXG4gICAgIGlmICh1c2VyR2VuZGVyID09PSAnZmVtYWxlJykge1xyXG4gICAgICAgICBmZW1hbGVVc2Vyc0Ftb3VudCArPSAxO1xyXG4gICAgICAgICByZXR1cm4gZmVtYWxlVXNlcnNBbW91bnRcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheUluZm9BYm91dEFtb3VudE9mRmVtYWxlVXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBmZW1hbGVVc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZW1hbGVfX3VzZXJzJyk7XHJcbiAgICBmZW1hbGVVc2Vycy5pbm5lckhUTUwgPSBTdHJpbmcoZmVtYWxlVXNlcnNBbW91bnQpO1xyXG59XHJcblxyXG5jb25zdCBjb252ZXJ0QmFsYW5jZUZyb21TdHJpbmcgPSBmdW5jdGlvbiAoYmFsYW5jZUluU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChiYWxhbmNlSW5TdHJpbmcuc3Vic3RyaW5nKDEpLnJlcGxhY2UoJywnLCAnJykpXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlJbmZvQWJvdXRMYXJnZXN0VXNlckJhbGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbGFyZ2VzdEJhbGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2VzdF9fYmFsYW5jZScpO1xyXG4gICAgbGFyZ2VzdEJhbGFuY2UuaW5uZXJIVE1MID0gYFRoZSBsYXJnZXN0IGFtb3VudCBvbiB0aGUgY2xpZW50J3MgYWNjb3VudCBpcyAkJHtnZXRNYXhPZkFycmF5KHVzZXJzQmFsYW5jZXMpfSFgXHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmV0Y2hVc2VycygpLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGUgPSBleHRyYWN0UmVnaXN0cmF0aW9uRGF0ZUZyb21Vc2VyKHVzZXJbJ3JlZ2lzdGVyZWQnXSwgMTApXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVJvd0J1dHRvbiA9IGNyZWF0ZURlbGV0ZVJvd0J1dHRvbigpXHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlck5hbWUgICAgICAgICAgICAgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCd0ZCcsICd1c2VyX19uYW1lJywgdXNlclsnbmFtZSddKTtcclxuICAgICAgICAgICAgbGV0IHVzZXJDb21wYW55ICAgICAgICAgID0gY3JlYXRlU3BlY2lmaWVkRG9tRWxlbWVudCgndGQnLCAndXNlcl9fY29tcGFueScsIHVzZXJbJ2NvbXBhbnknXSk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyRW1haWwgICAgICAgICAgICA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ3RkJywgJ3VzZXJfX2VtYWlsJywgdXNlclsnZW1haWwnXSk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyUGhvbmVOdW1iZXIgICAgICA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ3RkJywgJ3VzZXJfX3Bob25lJywgdXNlclsncGhvbmUnXSk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyQmFsYW5jZSAgICAgICAgICA9IGNyZWF0ZVNwZWNpZmllZERvbUVsZW1lbnQoJ3RkJywgJ3VzZXJfX2JhbGFuY2UnLCB1c2VyWydiYWxhbmNlJ10pO1xyXG4gICAgICAgICAgICBsZXQgdXNlclJlZ2lzdHJhdGlvbkRhdGUgPSBjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50KCd0ZCcsICd1c2VyX19yZWdpc3RyYXRpb24tZGF0ZScsIHVzZXJEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpKTtcclxuICAgICAgICAgICAgbGV0IHVzZXJHZW5kZXIgPSB1c2VyWydnZW5kZXInXTtcclxuICAgICAgICAgICAgbGV0IHVzZXJTdGF0dXMgPSB1c2VyWydpc0FjdGl2ZSddO1xyXG5cclxuICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZCh0YWJsZVJvdylcclxuICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kKHVzZXJOYW1lKTtcclxuICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kKHVzZXJDb21wYW55KTtcclxuICAgICAgICAgICAgdGFibGVSb3cuYXBwZW5kKHVzZXJFbWFpbCk7XHJcbiAgICAgICAgICAgIHRhYmxlUm93LmFwcGVuZCh1c2VyUGhvbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmQodXNlckJhbGFuY2UpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmQodXNlclJlZ2lzdHJhdGlvbkRhdGUpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5hcHBlbmQoZGVsZXRlUm93QnV0dG9uKVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlUm93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29uZmlybWF0aW9uTW9kYWwoeyBvbkNhbmNlbCwgb25Db25maXJtIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEluYWN0aXZlVXNlcnModXNlclN0YXR1cywgdGFibGVSb3cpXHJcbiAgICAgICAgICAgIG1hbGVVc2Vyc0NvdW50ZXIodXNlckdlbmRlcik7XHJcbiAgICAgICAgICAgIGZlbWFsZVVzZXJzQ291bnRlcih1c2VyR2VuZGVyKTtcclxuICAgICAgICAgICAgdXNlcnNCYWxhbmNlcy5wdXNoKGNvbnZlcnRCYWxhbmNlRnJvbVN0cmluZyh1c2VyWydiYWxhbmNlJ10pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGxheUluZm9BYm91dEFtb3VudE9mTWFsZVVzZXJzKClcclxuICAgICAgICBkaXNwbGF5SW5mb0Fib3V0QW1vdW50T2ZGZW1hbGVVc2VycygpXHJcbiAgICAgICAgZGlzcGxheUluZm9BYm91dExhcmdlc3RVc2VyQmFsYW5jZSgpXHJcbiAgICB9KVxyXG59KVxyXG4iXSwibmFtZXMiOlsiYXN5bmMiLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlRm9ybUJ1dHRvbiIsImZvcm0iLCJidXR0b25JbkZvcm0iLCJkaXNhYmxlZCIsImNoZWNrVmFsaWRpdHkiLCJ0b2dnbGVJbnB1dFdhcm5pbmciLCJpbnB1dEZpZWxkIiwic2VsZWN0b3IiLCJ3YXJuaW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVkaXJlY3RUb0hvbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJyZWRpcmVjdFRvTG9naW4iLCJnZXRNYXhPZkFycmF5IiwibnVtQXJyYXkiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJjcmVhdGVTcGVjaWZpZWREb21FbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlRGVsZXRlUm93QnV0dG9uIiwiZGVsZXRlUm93QnV0dG9uIiwib25Db25maXJtIiwibW9kYWwiLCJyb3dEZWxldGVCdXR0b24iLCJwYXJlbnRFbGVtZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsIm9uQ2FuY2VsIiwiY3JlYXRlQ29uZmlybWF0aW9uTW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsIm1vZGFsRm9vdGVyIiwiZGVsZXRlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbEJ1dHRvbiIsImFwcGVuZCIsInRleHQiLCJ3aW5kb3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25IZWFkZXIiLCJjbG9zZU5vdGlmaWNhdGlvbiIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZXh0cmFjdFJlZ2lzdHJhdGlvbkRhdGVGcm9tVXNlciIsInJlZ2lzdHJhdGlvbkRhdGUiLCJudW1iZXJPZkNoYXJhY3RlcnNUb1Byb2Nlc3MiLCJEYXRlIiwic3Vic3RyaW5nIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJzY3JvbGxUbyIsIm1hbGVVc2Vyc0Ftb3VudCIsImZlbWFsZVVzZXJzQW1vdW50IiwidXNlcnNCYWxhbmNlcyIsImhpZ2hsaWdodEluYWN0aXZlVXNlcnMiLCJ1c2VyU3RhdHVzIiwidGFibGVSb3ciLCJzdHlsZSIsImJhY2tncm91bmQiLCJtYWxlVXNlcnNDb3VudGVyIiwidXNlckdlbmRlciIsImZlbWFsZVVzZXJzQ291bnRlciIsInRoZW4iLCJ1c2VycyIsInRhYmxlQm9keSIsInVzZXIiLCJ1c2VyRGF0ZSIsInVzZXJOYW1lIiwidXNlckNvbXBhbnkiLCJ1c2VyRW1haWwiLCJ1c2VyUGhvbmVOdW1iZXIiLCJ1c2VyQmFsYW5jZSIsInVzZXJSZWdpc3RyYXRpb25EYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicHVzaCIsImJhbGFuY2VJblN0cmluZyIsInBhcnNlRmxvYXQiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9