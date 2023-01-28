"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===o&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".mmi-modal{align-items:center;box-sizing:border-box;display:flex;height:100vh;justify-content:center;width:100wh}.mmi-modal-overlay{background-color:rgba(7,41,79,.4);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9990}.mmi-modal-container{background-color:#fff;border-radius:20px;box-shadow:0 5px 15px rgba(0,0,0,.3);display:flex;flex-direction:column;max-width:70wh;min-width:400px;padding:25px;position:relative;z-index:9999}.mmi-modal-header{display:flex;justify-content:space-between;padding:20px 0 10px}.mmi-modal-title{font-size:1.6rem;font-weight:700}.mmi-modal-closeBtn{background-color:transparent;border:none;border-radius:50%;color:grey;cursor:pointer;font-size:15px;font-weight:700;height:30px;position:absolute;right:15px;top:15px;width:30px}.mmi-modal-closeBtn:hover{color:#000}.mmi-modal-body{font-size:1.2rem;padding:10px 0}.mmi-modal-footer{align-items:center;display:flex;flex:20%;gap:20px;justify-content:center;padding-top:15px}.mmi-modal-callToActionBtn,.mmi-modal-cancelBtn{border:none;border-radius:5px;cursor:pointer;font-weight:1.2rem;font-weight:700;min-width:100px;padding:10px 20px}.mmi-modal-cancelBtn{background-color:transparent;box-shadow:inset 0 0 0 2px rgba(211,47,47,.5);color:#d32f2f}.mmi-modal-cancelBtn:hover{background-color:rgba(211,47,47,.05);box-shadow:inset 0 0 0 2px rgba(211,47,47,.65)}.mmi-modal-callToActionBtn{background-color:#1874d0;color:#fff}.mmi-modal-callToActionBtn:hover{background-color:#1565c0}");exports.Modal=({showModal:t,setShowModal:a,title:l,body:n,cancel:i,cancelAction:d,callToAction:m,callToActionText:r="Confirm",callToActionAction:c,autoClose:s,autoCloseDelay:f=1e4})=>(e.useEffect((()=>{s&&setTimeout((()=>{a(!1)}),f)}),[]),o.default.createElement(o.default.Fragment,null,t&&o.default.createElement("div",{className:"mmi-modal"},o.default.createElement("div",{className:"mmi-modal-overlay",onClick:()=>a(!1)}),o.default.createElement("div",{className:"mmi-modal-container"},o.default.createElement("button",{className:"mmi-modal-closeBtn",onClick:()=>a(!1)},"X"),o.default.createElement("header",{className:"mmi-modal-header"},o.default.createElement("div",{className:"mmi-modal-title"},l)),o.default.createElement("div",{className:"mmi-modal-body"},n),o.default.createElement("footer",{className:"mmi-modal-footer"},i&&o.default.createElement("button",{className:"mmi-modal-cancelBtn",onClick:d},"CANCEL"),m&&o.default.createElement("button",{className:"mmi-modal-callToActionBtn",onClick:c},r.toUpperCase()))))));
