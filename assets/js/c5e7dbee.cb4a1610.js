"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,c=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3,title:"Bookings & Hotels",description:"Available Hotel and Booking endpoints"},r=void 0,i={unversionedId:"available-endpoints/bookings",id:"available-endpoints/bookings",title:"Bookings & Hotels",description:"Available Hotel and Booking endpoints",source:"@site/docs/available-endpoints/bookings.md",sourceDirName:"available-endpoints",slug:"/available-endpoints/bookings",permalink:"/docs/available-endpoints/bookings",draft:!1,editUrl:"https://github.com/statetechnologies/h-docs/docs/available-endpoints/bookings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Bookings & Hotels",description:"Available Hotel and Booking endpoints"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/available-endpoints/authentication"},next:{title:"Users",permalink:"/docs/available-endpoints/users"}},s={},p=[{value:"<code>/bookings/</code>",id:"bookings",level:3},{value:"<code>/bookings/{id}/</code>",id:"bookingsid",level:3},{value:"<code>/hotels/</code>",id:"hotels",level:3},{value:"<code>/hotels/{id}/</code>",id:"hotelsid",level:3},{value:"<code>/hotels/{id}/book/</code>",id:"hotelsidbook",level:3},{value:"<code>/hotels/{id}/rate/</code>",id:"hotelsidrate",level:3},{value:"<code>/hotels/{id}/feedback/</code>",id:"hotelsidfeedback",level:3}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"bookings"},(0,o.kt)("inlineCode",{parentName:"h3"},"/bookings/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Requires auth")),(0,o.kt)("p",null,"Get details of bookings for a specific user"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed Methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 200 OK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "hotel": {\n      "name": "",\n      "ratings": "",\n      "location": ""\n    },\n    "booked_date": "",\n    "no_of_guests": 1\n  }\n]\n')),(0,o.kt)("h3",{id:"bookingsid"},(0,o.kt)("inlineCode",{parentName:"h3"},"/bookings/{id}/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Requires auth")),(0,o.kt)("p",null,"Get or Updates details of a specific booking for a specific user"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed Methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET"),(0,o.kt)("li",{parentName:"ul"},"PUT"),(0,o.kt)("li",{parentName:"ul"},"PATCH")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 200 OK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "hotel": {\n    "name": "",\n    "ratings": "",\n    "location": ""\n  },\n  "booked_date": "",\n  "no_of_guests": 1\n}\n')),(0,o.kt)("h3",{id:"hotels"},(0,o.kt)("inlineCode",{parentName:"h3"},"/hotels/")),(0,o.kt)("p",null,"Get details of the available hotels"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed Methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Query Params (Optional)"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"search")," -> it searches on the name of the hotel, returns an empty array if not hotel found"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"location")," -> filters hotels according to the specified location"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ratings")," -> filters hotels according to their ratings"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"query params")," you can append one or more than one queries you want for example ",(0,o.kt)("inlineCode",{parentName:"p"},"?location=Dodoma")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"?search=Serena&location=Tanga")," respectively at the end of the endpoint so the final endpoint would look like ",(0,o.kt)("inlineCode",{parentName:"p"},"https://bookings.mrshanas.com/api/hotels/?search=Blue+Pearl&ratings=4.2"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 200 OK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "name": "",\n    "location": "",\n    "ratings": 4.5,\n    "feedback": [\n      {\n        "comment": "",\n        "user": 1\n      }\n    ]\n  }\n]\n')),(0,o.kt)("h3",{id:"hotelsid"},(0,o.kt)("inlineCode",{parentName:"h3"},"/hotels/{id}/")),(0,o.kt)("p",null,"Get details or updates a specific hotel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed Methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET"),(0,o.kt)("li",{parentName:"ul"},"PATCH"),(0,o.kt)("li",{parentName:"ul"},"PUT")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 200 OK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "name": "",\n  "location": "",\n  "ratings": 4.5,\n  "feedback": [\n    {\n      "comment": "",\n      "user": 1\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"hotelsidbook"},(0,o.kt)("inlineCode",{parentName:"h3"},"/hotels/{id}/book/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Requires auth")),(0,o.kt)("p",null,"Allows a user to book a hotel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed Methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Body data object"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "no_of_guest":number,\n        "start_date":"date in ISO string",\n        "end_date":"date in ISO string"\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 201 CREATED"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "detail": "Hotel booked successfully"\n}\n')),(0,o.kt)("h3",{id:"hotelsidrate"},(0,o.kt)("inlineCode",{parentName:"h3"},"/hotels/{id}/rate/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Requires auth")),(0,o.kt)("p",null,"Allows a user to rate an hotel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Body data object"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "ratings":number\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response HTTP 200 OK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "detail": "Thanks for your ratings"\n}\n')),(0,o.kt)("h3",{id:"hotelsidfeedback"},(0,o.kt)("inlineCode",{parentName:"h3"},"/hotels/{id}/feedback/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Requires auth")),(0,o.kt)("p",null,"Allows an user to give feedback to the hotel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Allowed methods"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Body data object"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "comment": "Your hotel sucks"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Response -> HTTP 201 CREATED"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "detail": "Thanks for the feedback"\n}\n')))}k.isMDXComponent=!0}}]);