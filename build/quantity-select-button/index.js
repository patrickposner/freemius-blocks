(()=>{"use strict";var e,l={480:()=>{const e=window.wp.blocks,l=window.wp.blockEditor,t=window.wp.components,n=window.wp.element,i=window.ReactJSXRuntime,{useSelect:s,useDispatch:a}=wp.data,{TextControl:r,Button:o}=wp.components,{__}=wp.i18n,u=e=>{let l=s((l=>l("core/editor").getEditedPostAttribute("meta")?.[e.meta_key]));l||(l=[]);const{editPost:t}=a("core/editor",[l]);return(0,i.jsxs)(i.Fragment,{children:[Array.isArray(l)&&l.map(((n,s)=>(0,i.jsxs)("div",{style:{marginBottom:"30px"},children:[(0,i.jsxs)("strong",{children:[__("Pricing Plan","freemius-blocks")," ",s+1]}),(0,i.jsx)(r,{label:__("Set Quantity","freemius-blocks"),value:l[s].label,type:"number",onChange:n=>{l=l.map(((e,l)=>l===s?{...e,label:n}:e)),t({meta:{[e.meta_key]:l}})}}),(0,i.jsx)(r,{label:__("Set Price","freemius-blocks"),value:l[s].value,type:"number",onChange:n=>{l=l.map(((e,l)=>l===s?{...e,value:n}:e)),t({meta:{[e.meta_key]:l}})}}),s>0&&(0,i.jsxs)(o,{isLink:!0,isDestructive:!0,onClick:()=>{l=l.filter(((e,l)=>l!==s)),t({meta:{[e.meta_key]:l}})},children:[__("Remove Pricing Plan","freemius-blocks")," ",s+1]})]}))),(0,i.jsx)(o,{style:{marginBottom:"30px"},variant:"secondary",onClick:()=>{l.push({}),l=l.splice(0),t({meta:{[e.meta_key]:l}})},children:__("Add Pricing Plan","freemius-blocks")})]})},{__:c}=wp.i18n,m=JSON.parse('{"UU":"freemius-blocks/quantity-select-button"}');(0,e.getBlockType)("freemius-blocks/quantity-select-button")||(0,e.registerBlockType)(m.UU,{edit:function({attributes:e,setAttributes:s}){const a=(0,l.useBlockProps)(),{plugin_name:r,plugin_id:o,plan_id:m,billing_cycle:p,buttonLabel:b,currency:d,description:f}=e,[h,v]=(0,n.useState)(1),[y,x]=(0,n.useState)(0),[g,k]=(0,n.useState)([]);return(0,n.useEffect)((()=>{b||s({buttonLabel:c("Buy Now","freemius-blocks")}),(()=>{let e=wp.data.select("core/editor").getEditedPostAttribute("meta").freemius_quantity;if(e){k(e);let l=e.find((e=>1==e.label));x(l.value),v(l.label)}})()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.InspectorControls,{children:(0,i.jsxs)(t.PanelBody,{title:c("SDK Settings","freemius-blocks"),initialOpen:!0,children:[(0,i.jsx)(t.TextControl,{...a,label:c("Plugin Name","freemius-blocks"),onChange:e=>{s({plugin_name:e})},value:r,id:"freemius-plugin-name"}),(0,i.jsx)(t.TextareaControl,{...a,label:c("Description","freemius-blocks"),onChange:e=>{s({description:e})},value:f,id:"freemius-plugin-description"}),(0,i.jsx)(t.TextControl,{...a,label:c("Plugin ID","freemius-blocks"),onChange:e=>{s({plugin_id:e})},type:"number",value:o,id:"freemius-plugin-id"}),(0,i.jsx)(t.TextControl,{...a,label:c("Plan ID","freemius-blocks"),onChange:e=>{s({plan_id:e})},type:"number",value:m,id:"freemius-plan-id"}),(0,i.jsx)(u,{meta_key:"freemius_quantity"}),(0,i.jsx)(t.SelectControl,{label:c("Billing Cycle","freemius-blocks"),value:p,options:[{label:"Annual",value:"annual"},{label:"Monthly",value:"monthly"},{label:"Lifetime",value:"lifetime"}],onChange:e=>{s({billing_cycle:e})}}),(0,i.jsx)(t.TextControl,{...a,label:c("Button Label","freemius-blocks"),onChange:e=>{s({buttonLabel:e})},value:b,defaultValue:c("Buy Now","freemius-blocks")})]})}),(0,i.jsx)("div",{...(0,l.useBlockProps)(),children:o&&m&&p&&options.public_key?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"freemius-price-value",children:[d,y]}),(0,i.jsxs)("span",{className:"freemius-interval",children:["lifetime"===p?" One-time payment":"","annual"===p?" per year":"","monthly"===p?" per month":""]}),(0,i.jsx)("p",{children:f}),(0,i.jsx)(t.SelectControl,{label:"Number of websites",value:y,options:g,onChange:e=>{x(e);let l=g.find((l=>l.value==e));v(l.label)}}),(0,i.jsx)(t.Button,{variant:"primary",id:`ps-${r}-${o}-${m}-${p}-${h}`,className:"freemius-buy-button",children:b})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"freemius-price-value",children:[d,y]}),(0,i.jsxs)("span",{className:"freemius-interval",children:["lifetime"===p?" One-time payment":"","annual"===p?" per year":"","monthly"===p?" per month":""]}),(0,i.jsx)("p",{className:"freemius-short-description",children:f}),(0,i.jsx)(t.SelectControl,{label:"Number of websites",value:y,options:g,onChange:e=>{x(e);let l=g.find((l=>l.value==e));v(l.label)}}),(0,i.jsx)(t.Button,{variant:"primary",className:"freemius-buy-button",children:b})]})})]})},save:()=>null})}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return l[e](s,s.exports,n),s.exports}n.m=l,e=[],n.O=(l,t,i,s)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],i=e[c][1],s=e[c][2];for(var r=!0,o=0;o<t.length;o++)(!1&s||a>=s)&&Object.keys(n.O).every((e=>n.O[e](t[o])))?t.splice(o--,1):(r=!1,s<a&&(a=s));if(r){e.splice(c--,1);var u=i();void 0!==u&&(l=u)}}return l}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,i,s]},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={643:0,723:0};n.O.j=l=>0===e[l];var l=(l,t)=>{var i,s,a=t[0],r=t[1],o=t[2],u=0;if(a.some((l=>0!==e[l]))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(o)var c=o(n)}for(l&&l(t);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},t=self.webpackChunkfreemius_blocks=self.webpackChunkfreemius_blocks||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var i=n.O(void 0,[723],(()=>n(480)));i=n.O(i)})();