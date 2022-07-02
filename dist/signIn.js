/*! For license information please see signIn.js.LICENSE.txt */
(() => {
    'use strict'
    var e = {
        './src/js/utils.js': (e, t, o) => {
            o.r(t), o.d(t, {
                checkUserData:      () => i,
                disableFormButton:  () => n,
                isUserExist:        () => r,
                isUserLoggedIn:     () => l,
                logout:             () => a,
                redirectToHome:     () => c,
                toggleInputWarning: () => s,
            }), window.appUsers = [{ email: 'art@gmail.com', password: '123456' }]
            let n = function (e, t) {
                t.disabled = !e.checkValidity()
            }, s  = function (e, t) {
                let o = document.querySelector(t).querySelector('.text-warning')
                e.checkValidity() ? o.classList.remove('show') : o.classList.add('show')
            }, r  = function (e) {
                return localStorage.getItem('email') === e
            }, i  = function (e, t) {
                if (!0 === r(e)) return localStorage.getItem('password') === t
            }, a  = function () {
                document.querySelector('.btn-logout').addEventListener('click', (function () {
                    localStorage.clear(), window.location.replace('./index.html')
                }))
            }, l  = function () {
                setTimeout((function () {
                    'logged-in' === localStorage.getItem('status') && c()
                }), 0)
            }, c  = function () {
                window.location.replace('./home.html')
            }
        },
    }, t  = {}

    function o(n)
    {
        var s = t[n]
        if (void 0 !== s) return s.exports
        var r = t[n] = { exports: {} }
        return e[n](r, r.exports, o), r.exports
    }

    o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
    }
    var n = {};
    (() => {
        o.r(n)
        var e = o('./src/js/utils.js')
        let t = document.forms['sign-in'], s = t.elements['user-email'], r = t.elements['user-password'],
            i = t.elements['authorization-button']
        t.addEventListener('input', (function () {
            (0, e.disableFormButton)(this, i)
        })), s.addEventListener('change', (function () {
            (0, e.toggleInputWarning)(this, '.input-email')
        })), r.addEventListener('change', (function () {
            (0, e.toggleInputWarning)(this, '.input-password')
        })), t.addEventListener('submit', (function (t) {
            t.preventDefault()
            let o = document.querySelector('.log-in')
            o.classList.remove('show'), o.innerHTML = ''
            let n = s.value, i = r.value
            if (console.log(n), (0, e.isUserExist)(n)) !0 === (0, e.checkUserData)(n, i) ? (o.classList.remove('text-warning'), o.innerHTML = 'You are successfully logged in!', o.classList.add('show'), localStorage.setItem('status', 'logged-in'), setTimeout((() => {
                (0, e.redirectToHome)()
            }), 1e3)) : (o.innerHTML = 'Oops, something wrong with yours email or password!', o.classList.add('text-warning'), o.classList.add('show')) else {
                let e = document.querySelector('.text-warning')
                e.innerHTML = 'A user with such email address does not exist', e.classList.add('show')
            }
        })), (0, e.isUserLoggedIn)()
    })()
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDUkMsRUFBQUEsRUFBQUEsb0JBQ0EsT0FHSG1DLEVBQWFDLFVBQVksc0RBQ3pCRCxFQUFhbkQsVUFBVUUsSUFBSSxnQkFDM0JpRCxFQUFhbkQsVUFBVUUsSUFBSSxhQWpCRCxDQUM5QixJQUFJTCxFQUFVQyxTQUFTQyxjQUFjLGlCQUNyQ0YsRUFBUXVELFVBQVksZ0RBQ3BCdkQsRUFBUUcsVUFBVUUsSUFBSSxhQW1COUJZLEVBQUFBLEVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXYtc3RvcmUvLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F2LXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXYtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdi1zdG9yZS8uL3NyYy9qcy9zaWduLWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hcHBVc2VycyA9IFtcclxuICAgIHtcclxuICAgICAgICBlbWFpbDogJ2FydEBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2J1xyXG4gICAgfVxyXG5dO1xyXG5cclxubGV0IGRpc2FibGVGb3JtQnV0dG9uID0gZnVuY3Rpb24gKGZvcm0sIGJ1dHRvbkluRm9ybSkge1xyXG4gICAgYnV0dG9uSW5Gb3JtLmRpc2FibGVkID0gIWZvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG59XHJcblxyXG5sZXQgdG9nZ2xlSW5wdXRXYXJuaW5nID0gZnVuY3Rpb24gKGlucHV0RmllbGQsIHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZmluZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuICAgIGxldCB3YXJuaW5nID0gZmluZElucHV0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXdhcm5pbmcnKTtcclxuICAgIGlmICghaW5wdXRGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgaXNFbWFpbEV4aXN0SW5Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbn1cclxuXHJcbmxldCBpc1Bhc3N3b3JkRXhpc3RJbkxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcclxufVxyXG5cclxubGV0IGlzVXNlckV4aXN0ID0gZnVuY3Rpb24gKGVtYWlsVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaXNFbWFpbEV4aXN0SW5Mb2NhbFN0b3JhZ2UoKSA9PT0gZW1haWxWYWx1ZTtcclxufVxyXG5cclxubGV0IGNoZWNrVXNlckRhdGEgPSBmdW5jdGlvbiAoZW1haWxWYWx1ZSwgcGFzc3dvcmRWYWx1ZSkge1xyXG4gICAgaWYgKGlzVXNlckV4aXN0KGVtYWlsVmFsdWUpID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc3dvcmRFeGlzdEluTG9jYWxTdG9yYWdlKCkgPT09IHBhc3N3b3JkVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBsb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1sb2dvdXQnKTtcclxuICAgIGxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLi9pbmRleC5odG1sJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgaXNVc2VyTG9nZ2VkSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdXNlclN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0dXMnKVxyXG4gICAgICAgIGlmICh1c2VyU3RhdHVzID09PSAnbG9nZ2VkLWluJykge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDApXHJcbn1cclxuXHJcbmxldCByZWRpcmVjdFRvSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcuL2hvbWUuaHRtbCcpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbixcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyxcclxuICAgIGlzVXNlckV4aXN0LFxyXG4gICAgY2hlY2tVc2VyRGF0YSxcclxuICAgIGxvZ291dCxcclxuICAgIGlzVXNlckxvZ2dlZEluLFxyXG4gICAgcmVkaXJlY3RUb0hvbWVcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc2FibGVGb3JtQnV0dG9uLCBpc1VzZXJFeGlzdCwgdG9nZ2xlSW5wdXRXYXJuaW5nLCBjaGVja1VzZXJEYXRhLCBpc1VzZXJMb2dnZWRJbiwgcmVkaXJlY3RUb0hvbWUgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbmxldCBzaWduSW5Gb3JtID0gZG9jdW1lbnQuZm9ybXNbJ3NpZ24taW4nXTtcclxubGV0IHVzZXJFbWFpbCA9IHNpZ25JbkZvcm0uZWxlbWVudHNbJ3VzZXItZW1haWwnXTtcclxubGV0IHVzZXJQYXNzd29yZCA9IHNpZ25JbkZvcm0uZWxlbWVudHNbJ3VzZXItcGFzc3dvcmQnXTtcclxubGV0IGxvZ2luQnV0dG9uID0gc2lnbkluRm9ybS5lbGVtZW50c1snYXV0aG9yaXphdGlvbi1idXR0b24nXTtcclxuXHJcbnNpZ25JbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNhYmxlRm9ybUJ1dHRvbih0aGlzLCBsb2dpbkJ1dHRvbilcclxufSk7XHJcblxyXG51c2VyRW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdG9nZ2xlSW5wdXRXYXJuaW5nKHRoaXMsICcuaW5wdXQtZW1haWwnKVxyXG59KVxyXG5cclxudXNlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZ2dsZUlucHV0V2FybmluZyh0aGlzLCAnLmlucHV0LXBhc3N3b3JkJylcclxufSlcclxuXHJcbnNpZ25JbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGxvZ2luTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2ctaW4nKVxyXG4gICAgbG9naW5NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIGxvZ2luTWVzc2FnZS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgbGV0IHVzZXJFbWFpbFZhbHVlID0gdXNlckVtYWlsLnZhbHVlO1xyXG4gICAgbGV0IHVzZXJQYXNzd29yZFZhbHVlID0gdXNlclBhc3N3b3JkLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codXNlckVtYWlsVmFsdWUpXHJcbiAgICBpZiAoIWlzVXNlckV4aXN0KHVzZXJFbWFpbFZhbHVlKSkge1xyXG4gICAgICAgIGxldCB3YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtd2FybmluZycpO1xyXG4gICAgICAgIHdhcm5pbmcuaW5uZXJIVE1MID0gXCJBIHVzZXIgd2l0aCBzdWNoIGVtYWlsIGFkZHJlc3MgZG9lcyBub3QgZXhpc3RcIjtcclxuICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgfSBlbHNlICB7XHJcbiAgICAgICAgaWYgKGNoZWNrVXNlckRhdGEodXNlckVtYWlsVmFsdWUsIHVzZXJQYXNzd29yZFZhbHVlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsb2dpbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC13YXJuaW5nJylcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgYXJlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hJ1xyXG4gICAgICAgICAgICBsb2dpbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdHVzJywgJ2xvZ2dlZC1pbicpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICByZWRpcmVjdFRvSG9tZSgpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5pbm5lckhUTUwgPSAnT29wcywgc29tZXRoaW5nIHdyb25nIHdpdGggeW91cnMgZW1haWwgb3IgcGFzc3dvcmQhJ1xyXG4gICAgICAgICAgICBsb2dpbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndGV4dC13YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIGxvZ2luTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuaXNVc2VyTG9nZ2VkSW4oKVxyXG4iXSwibmFtZXMiOlsid2luZG93IiwiYXBwVXNlcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzYWJsZUZvcm1CdXR0b24iLCJmb3JtIiwiYnV0dG9uSW5Gb3JtIiwiZGlzYWJsZWQiLCJjaGVja1ZhbGlkaXR5IiwidG9nZ2xlSW5wdXRXYXJuaW5nIiwiaW5wdXRGaWVsZCIsInNlbGVjdG9yIiwid2FybmluZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlzVXNlckV4aXN0IiwiZW1haWxWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGVja1VzZXJEYXRhIiwicGFzc3dvcmRWYWx1ZSIsImxvZ291dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhciIsImxvY2F0aW9uIiwicmVwbGFjZSIsImlzVXNlckxvZ2dlZEluIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG9Ib21lIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJzaWduSW5Gb3JtIiwiZm9ybXMiLCJ1c2VyRW1haWwiLCJlbGVtZW50cyIsInVzZXJQYXNzd29yZCIsImxvZ2luQnV0dG9uIiwidGhpcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2dpbk1lc3NhZ2UiLCJpbm5lckhUTUwiLCJ1c2VyRW1haWxWYWx1ZSIsInVzZXJQYXNzd29yZFZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
