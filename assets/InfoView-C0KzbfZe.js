import{i,d as g,f as p,c as f,a as t,t as u,b as n,o as y}from"./index-CmJ9Rvnk.js";const w=a=>{let o,l,s,r;return o=new Date(a*1e3),o=o.toISOString(),l=o.substring(11,19),s=Math.floor(a/3600),a=a%3600,r=Math.floor(a/60),a=a%60,{time:o,str:l,hours:s,minutes:r,seconds:a}},b=["href"],v={color:"red"},S={__name:"InfoView",setup(a){const o=i(),l=g(),s=p(()=>o.getInfo),r=(m,e)=>{let d=s.value[m];return Object.keys(d)[e-1]||null};return(m,e)=>(y(),f("div",null,[t("table",null,[e[4]||(e[4]=t("thead",null,null,-1)),t("tbody",null,[t("tr",null,[e[0]||(e[0]=t("td",null,"id",-1)),t("td",null,u(n(l).game.videoId),1)]),t("tr",null,[e[1]||(e[1]=t("td",null,"link youtube",-1)),t("td",null,[t("a",{href:`https://www.youtube.com/watch?v=${n(l).game.videoId}`,target:"_blank"},u(`https://www.youtube.com/watch?v=${n(l).game.videoId}`),9,b)])]),t("tr",null,[e[2]||(e[2]=t("td",null,"modality",-1)),t("td",null,u(n(l).game.modality),1)]),e[3]||(e[3]=t("tr",null,[t("td"),t("td")],-1))])]),t("p",null,u(n(l).game.title),1),t("p",null,u(r("teams",n(l).game.teams))+" vs "+u(r("teams",n(l).game.teams)),1),t("p",v,"Duración "+u(n(w)(n(l).game.duration).str),1)]))}};export{S as default};