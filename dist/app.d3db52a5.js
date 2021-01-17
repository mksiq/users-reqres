parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RRF8":[function(require,module,exports) {
var n="https://reqres.in/api";function r(r){var t="".concat(n,"/users?page=").concat(r);return fetch(t).then(function(n){if(!n.ok)throw new Error("API returned error code ".concat(n.status));return n.json()}).then(function(n){return n.data}).catch(function(n){return console.log(n),null})}module.exports.load=r;
},{}],"mrdb":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var r=function(){function n(t,r){e(this,n),this.imgUrl=t,this.name=r}return t(n,[{key:"render",value:function(){var e=new Image;return e.src=this.imgUrl,e.alt=this.name,e.title=this.name,e.className="profile-avatar",e.width=128,e.height=128,e}}]),n}();module.exports=r;
},{}],"l7h7":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}module.exports=function(){function n(r){e(this,n),this.name=r}return r(n,[{key:"render",value:function(){var e=document.createElement("h2");return e.innerText=this.name,e.className="profile-name",e}}]),n}();
},{}],"FjWZ":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}module.exports=function(){function n(t){e(this,n),this.email=t}return t(n,[{key:"render",value:function(){var e=document.createElement("a");e.href="mailto:".concat(this.email),e.innerHTML=this.email;var n=document.createElement("h3");return n.className="profile-email",n.appendChild(e),n}}]),n}();
},{}],"z606":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&n(e.prototype,r),a&&n(e,a),e}var a=require("./name"),t=require("./email");module.exports=function(){function n(r,a){e(this,n),this.name=r,this.email=a}return r(n,[{key:"render",value:function(){var e=document.createElement("div");e.className="user-info";var n=new a(this.name),r=new t(this.email);return e.appendChild(n.render()),e.appendChild(r.render()),e}}]),n}();
},{"./name":"l7h7","./email":"FjWZ"}],"oXYt":[function(require,module,exports) {
function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&r(e.prototype,n),a&&r(e,a),e}var a=require("./avatar"),t=require("./user-info"),i=function(){function r(n,a,t,i){e(this,r),this.id=n,this.name=a,this.email=t,this.avatarUrl=i}return n(r,[{key:"render",value:function(){var e=$("<section></section>");e.attr({id:"profile_".concat(this.id),class:"profile-card"});var r=new a(this.avatarUrl,this.name),n=new t(this.name,this.email);return e.append(r.render()),e.append(n.render()),e}}]),r}();module.exports=i;
},{"./avatar":"mrdb","./user-info":"z606"}],"vZyd":[function(require,module,exports) {
var a=require("./users"),e=a.load,r=require("./components/profile-card");function n(){$("#forward").click(function(){$("main").empty();var a=$("#page"),e=a.text();console.log(e),e++,a.text(e),t()}),$("#back").click(function(){$("main").empty();var a=$("#page"),e=a.text();console.log(e),e>0&&(e--,a.text(e),t())}),t()}function t(){var a=$("main");o(),e($("#page").text()).then(function(e){e&&Array.isArray(e)||(a.innerHTML="Unable to load user data at this time"),e.forEach(function(e){var n=e.id,t=e.email,o=e.avatar,i=e.first_name+" "+e.last_name,c=new r(n,i,t,o);a.append(c.render())})}).catch(function(a){return console.log(a)})}function o(){var a=$("#page").text();"1"===a?($("#back").prop("disabled",!0),$("#forward").prop("disabled",!1)):"2"===a&&($("#forward").prop("disabled",!0),$("#back").prop("disabled",!1))}$(document).ready(n);
},{"./users":"RRF8","./components/profile-card":"oXYt"}]},{},["vZyd"], null)
//# sourceMappingURL=/app.d3db52a5.js.map