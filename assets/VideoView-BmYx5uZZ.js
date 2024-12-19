import{d as R,r as k,e as O,f as C,c as d,a as l,t as E,F as N,g as P,h as S,n as _,o as i,_ as U,u as F,i as H,w as M,j,b as y,k as b,l as z,m as K,p as w,V as B,q,s as J,v as Q,x as W}from"./index-DzXQen_S.js";const X={class:"timelapse"},Z={class:"timelapse__label"},ee={style:{"font-family":"inherit"}},te=["data-label","data-time","onClick"],ae=["onClick"],L={__name:"timeLapseComponent",props:{color:{type:String,default:"green"},label:{type:String,default:""},duration:{type:Number,default:0},times:{type:Array,default:new Array},time:{type:Number,default:0},interval:{type:Number,default:0},timer:{type:Boolean,default:!1}},setup(n){const a=R(),V=async c=>{a.current=await c.time},t={white:"#f2f2f2",pink:"#f368e0",orange:"#ff9f43",red:"#ee5253",blue:"#0abde3",green:"#10ac84",indigo:"#2e86de",purple:"#341f97"},u=n,m=k(u.color);O(()=>{if(u.color=="random"){const c=Math.floor(Math.random()*t.length)+1;m.value=t[c]}else m.value=t[u.color]});const $=C(()=>u.times.map(c=>({time:c,percentage:c/u.duration*100}))),T=C(()=>{const c=parseInt(u.duration/u.interval);let g=[],r=0;for(let v=0;v<=c;v++){let p=r/u.duration*100;g.push({time:v,currentTime:r,timePercentage:p}),r=r+parseFloat(u.interval)}return g}),x=C(()=>a.current/u.duration*100);return(c,g)=>(i(),d("div",X,[l("div",Z,[l("pre",ee,E(n.label),1)]),l("div",{class:"timelapse__times",style:_({border:`1px solid ${m.value}`})},[n.times.length>0?(i(!0),d(N,{key:0},P($.value,(r,v)=>(i(),d("span",{class:"timelapse__times_time",key:v,style:_({left:r.percentage+"%",background:m.value}),"data-label":r.time,"data-time":n.duration,onClick:p=>V(r)},null,12,te))),128)):S("",!0),n.duration>0&&n.timer==!0&&n.interval>0?(i(),d("span",{key:1,class:"timelapse__times_cursor",style:_({left:x.value+"%",background:m.value})},null,4)):S("",!0),n.duration>0&&n.timer==!0&&n.interval>0?(i(!0),d(N,{key:2},P(T.value,(r,v)=>(i(),d("span",{class:"timelapse__times_time clean",key:v,style:_({left:r.timePercentage+"%",background:m.value}),onClick:p=>V(r)},E(r.currentTime),13,ae))),128)):S("",!0),n.duration>0&&n.timer==!0&&n.interval>0?(i(),d("span",{key:3,class:"timelapse__times_time clean",style:_({left:"100%",background:m.value})},E(n.duration),5)):S("",!0)],4)]))}},oe={key:0,class:"view__player"},le={class:"view__player_video"},ne={class:"view__player_video--controls",style:{color:"red",background:"teal","z-index":"1"}},re={class:"view__player_video--controls-control current"},se={class:"view__timers"},ie={key:1,class:"view__player_message"},ue={class:"view__player_message--icon"},de={key:0,class:"view__player_message--offline"},ce={__name:"VideoView",setup(n){const a=k(null),V=k(["red","blue"]),t=R(),u=F(),m=H(),$=k(m.getInfo),T=t.game.duration;t.getGame;const x=C(()=>t.getTeams),c=["try","conversion","penal","drop"],g=o=>{const e=Math.floor(o/3600),s=Math.floor(o%3600/60),f=Math.round(o%60),h=e.toString().padStart(2,"0"),A=s.toString().padStart(2,"0"),G=f.toString().padStart(2,"0");return`${h}:${A}:${G}`},r=(o,e)=>{let s=$.value[o];return Object.keys(s)[e]||null},v=()=>{document.hidden?a.value?.pauseVideo():a.value?.playVideo()},p=(o,e=0)=>{o&&(a.value=new YT.Player("player",{videoId:o,playerVars:{autoplay:0,controls:0,modestbranding:0,showinfo:1,loop:0,start:t.current??0},events:{onReady:s=>{t.current&&s.target.seekTo(t.current),t.isPlaying&&(clearInterval(D),s.target.playVideo()),setInterval(D,1e3),t.setPlayer(a.value)},onStateChange:s=>{t.isPlaying=s.data===YT.PlayerState.PLAYING},onError:s=>{console.error("Error en el reproductor:",s.data)}}}),t.setPlayer(a))},D=()=>{a.value&&(t.current=a.value.getCurrentTime()||0)};M(()=>t.game.videoId,o=>{a.value&&typeof a.value.loadVideoById=="function"?a.value.loadVideoById({videoId:o}):p(o)}),M(()=>t.current,o=>{a.value,a.value.seekTo(o)}),O(async()=>{if(document.addEventListener("visibilitychange",v),window.YT)window.YT.ready(()=>{t.game?.videoId&&p(t.game.videoId,t.current)});else{const o=await document.createElement("script");await o.setAttribute("src","https://www.youtube.com/iframe_api"),await document.head.appendChild(o),o.onload=()=>{window.YT.ready(()=>{t.game?.videoId&&p(t.game.videoId,t.current)})}}}),j(()=>{document.removeEventListener("visibilitychange",v),a.value&&(a.value.destroy(),a.value=null)});const I=k(B),Y=()=>{a.value.getPlayerState()==1?(a.value.pauseVideo(),I.value=B):(a.value.playVideo(),I.value=q),console.log(I)};return(o,e)=>y(t).videoId?(i(),d("div",oe,[l("div",le,[e[5]||(e[5]=l("div",{id:"player",style:{position:"absolute","min-width":"40rem"}},null,-1)),l("div",ne,[l("div",re,E(g(y(t).current)),1),b(y(J),{class:"view__player_video--controls-control previous"}),(i(),z(K(I.value),{onClick:e[0]||(e[0]=s=>Y()),class:"view__player_video--controls-control play"})),b(y(Q),{class:"view__player_video--controls-control next"}),e[1]||(e[1]=l("div",{class:"view__player_video--controls-control divider"},null,-1)),e[2]||(e[2]=l("div",{class:"view__player_video--controls-control x20"},null,-1)),e[3]||(e[3]=l("div",{class:"view__player_video--controls-control x10"},null,-1)),e[4]||(e[4]=l("div",{class:"view__player_video--controls-control x05"},null,-1))])]),b(L,{color:"orange",duration:y(T),label:"TIME (SEC)",timer:"",interval:300},null,8,["duration"]),l("div",se,[(i(),d(N,null,P([0,1],(s,f)=>l("div",{class:"view__timers_team",key:s},[(i(),d(N,null,P(c,(h,A)=>b(L,{color:V.value[f],key:A,label:`${r("teams",x.value[f])}   -   ${h}`,duration:y(T),times:y(t).getGame.events[f].score[h]},null,8,["color","label","duration","times"])),64))])),64))])])):(i(),d("h1",ie,[e[7]||(e[7]=w(" CLICK EN")),l("span",ue,[b(y(W))]),e[8]||(e[8]=w(" DE UN JUEGO ")),e[9]||(e[9]=l("br",null,null,-1)),e[10]||(e[10]=w("PARA PODER CONTINUAR ")),y(u).InternetStatus==!1?(i(),d("div",de,e[6]||(e[6]=[l("hr",null,null,-1),w(" SIN INTERNET,"),l("br",null,null,-1),w("ACCEDE A LOS REPORTES "),l("hr",null,null,-1)]))):S("",!0)]))}},me=U(ce,[["__scopeId","data-v-17619bfa"]]);export{me as default};
