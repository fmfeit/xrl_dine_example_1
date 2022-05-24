(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{19:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(9),i=r.n(s),o=(r(19),r(7)),c=r(6),l=r(3),u=r(10),d=r.n(u),p=r(2);var m=function(e){var t=e.explanations,r=e.currentlyHoveredTimestep,a=e.setCurrentlyHoveredTimestep,s=e.currentlyClickedTimestep,i=e.setCurrentlyClickedTimestep,o=Object(n.useState)([]),c=Object(l.a)(o,2),u=c[0],d=c[1];return Object(n.useEffect)((function(){for(var e=[],n=function(n){var o=t[n];c="flex text-white justify-center items-center even-size border-2 border-r-0 cursor-pointer border-black p-2",r===o.timestep||s===o.timestep?c+=" bg-gray-500":c+=" bg-gray-400",n===t.length-1&&(c+=" border-r-2"),e.push(Object(p.jsx)("div",{className:c,onMouseEnter:function(){return a(o.timestep)},onMouseLeave:function(){r===o.timestep&&a(null)},onClick:function(){s!==o.timestep?i(o.timestep):i(null)},children:Object(p.jsx)("p",{className:"text-center m-auto",children:o.current_selected_action})},o.timestep)),d(e)},o=0;o<t.length;o++){var c;n(o)}}),[t,r,a,s,i]),Object(p.jsx)("div",{className:"flex actions-pane-wrapper",children:u})},b=r(11);var v=function(e){var t=e.explanations,r=e.depth,a=e.rewardColors,s=e.currentlyHoveredTimestep,i=e.setCurrentlyHoveredTimestep,o=e.currentlyClickedTimestep,c=e.setCurrentlyClickedTimestep,u=Object(n.useState)([]),d=Object(l.a)(u,2),m=d[0],v=d[1];return Object(n.useEffect)((function(){for(var e=[],n=function(n){var l=t[n];if(u="",d="",!l.is_greedy_action||l.contrastive_important_actions_explanations.length<r)u="flex justify-center items-center even-size p-2",n>0&&t[n-1].is_greedy_action&&t[n-1].contrastive_important_actions_explanations.length>=r&&(u+=" border-black border-l-2"),e.push(Object(p.jsx)("div",{className:u},l.timestep));else{var m=l.contrastive_important_actions_explanations[r-1];u="flex justify-center items-center even-size border-2 border-t-0 border-r-0 cursor-pointer border-black p-2 ",d=s===l.timestep||o===l.timestep?a[m[0]][1]:a[m[0]][0],n===t.length-1&&(u+=" border-r-2"),e.push(Object(p.jsxs)("div",{"data-tip":!0,"data-border":!0,"data-class":"action-tooltip","data-border-color":"black","data-text-color":"white","data-delay-show":"250","data-background-color":a[m[0]][1],"data-for":"tooltip-"+r.toString()+"-"+l.timestep.toString(),className:u,style:{backgroundColor:d,color:"white"},onMouseEnter:function(){return i(l.timestep)},onMouseLeave:function(){s===l.timestep&&i(null)},onClick:function(){o!==l.timestep?c(l.timestep):c(null)},children:[Object(p.jsx)("p",{className:"text-center m-auto",children:m[1]}),Object(p.jsx)(b.a,{id:"tooltip-"+r.toString()+"-"+l.timestep.toString(),"aria-haspopup":"true",place:"left",children:Object(p.jsx)("span",{className:"text-base",style:{whiteSpace:"pre-wrap"},dangerouslySetInnerHTML:{__html:m[2]}})})]},l.timestep))}},l=0;l<t.length;l++){var u,d;n(l)}v(e)}),[t,r,a,s,i,o,c]),Object(p.jsx)("div",{className:"flex actions-pane-wrapper",children:m})},h=r(4),j=r.n(h),f=r(5),O=r.n(f);var g=function(e){var t=e.explanations,r=e.currentlyHoveredTimestep,a=e.setCurrentlyHoveredTimestep,s=e.currentlyClickedTimestep,i=e.observation_variables_labels,o=e.normalizeState,c=Object(n.useState)([]),u=Object(l.a)(c,2),d=u[0],m=u[1],b=Object(n.useRef)(null);Object(n.useEffect)((function(){for(var e=[],r=Object.keys(i).sort((function(e,t){return e.localeCompare(t)})),n=0;n<r.length;n++){var a=r[n];e.push({name:i[a],data:[]})}for(var s=0;s<t.length;s++)for(var c=t[s],l=0;l<r.length;l++){var u=r[l];o?e[l].data.push([c.timestep,c.current_normalized_state[u]]):e[l].data.push([c.timestep,c.current_state[u]])}m(e)}),[t,i,o]);var v={title:{text:""},legend:{width:1600},xAxis:{minPadding:0,maxPadding:0,labels:{enabled:!1},plotLines:[{color:"#C3CBD8",width:3,value:r},{color:"#9CA3AF",width:3,value:s}]},yAxis:{visible:!1},credits:!1,series:d,plotOptions:{series:{tooltip:{valueDecimals:4},stickyTracking:!0,point:{events:{mouseOver:function(e){a(e.target.category)}}}},columnrange:{grouping:!1}}},h=function(){null!==b.current&&(b.current.chart.legend.options.x=(window.innerWidth-b.current.chart.legend.itemX)/2+window.scrollX-(b.current.chart.chartWidth/2-b.current.chart.legend.itemX/2),b.current.chart.legend.render())};return Object(n.useEffect)((function(){var e=setTimeout((function(){console.log("hi"),b.current.chart.reflow(),h()}),1e3);return function(){clearTimeout(e)}}),[t,o]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){h()}))}),[]),Object(p.jsx)("div",{children:Object(p.jsx)(O.a,{ref:b,highcharts:j.a,options:v})})},x=r(12);r.n(x)()(j.a);var y=function(e){var t=e.explanations,r=e.rewardColors,a=e.currentlyHoveredTimestep,s=e.setCurrentlyHoveredTimestep,i=e.currentlyClickedTimestep,o=e.extremaThresholds,c=e.rewardChannelLabels,u=Object(n.useState)([]),d=Object(l.a)(u,2),m=d[0],b=d[1],v=Object(n.useState)([]),h=Object(l.a)(v,2),f=h[0],g=h[1],x=Object(n.useState)([]),y=Object(l.a)(x,2),C=y[0],_=y[1],k=Object(n.useRef)(null);Object(n.useEffect)((function(){for(var e=[],n=[],a=[],s=Object.keys(c).sort((function(e,t){return e.localeCompare(t)})),i=0;i<s.length;i++){var l=s[i];e.push({name:c[l],data:[],color:r[l][0]})}for(var u=0;u<t.length;u++)for(var d=t[u],p=0;p<s.length;p++){var m=s[p];e[p].data.push({x:d.timestep,y:d.last_rewards[m],id:m+d.timestep.toString()});var v=d.current_state_value[m]+o[m]<d.min_next_state_value[m];v&&n.push({point:m+d.timestep.toString(),text:"Minimum"});var h=d.current_state_value[m]>o[m]+d.max_next_state_value[m];!v&&h&&a.push({point:m+d.timestep.toString(),text:"Maximum"})}b(e),g(n),_(a)}),[t,r,o,c]);var w={annotations:[{draggable:"",labelOptions:{backgroundColor:"#E5E7EB",verticalAlign:"top",y:11},labels:f},{draggable:"",labelOptions:{backgroundColor:"#E5E7EB",verticalAlign:"bottom",y:-11},labels:C}],title:{text:""},xAxis:{minPadding:0,maxPadding:0,labels:{enabled:!1},plotLines:[{color:"#C3CBD8",width:3,value:a},{color:"#9CA3AF",width:3,value:i}]},yAxis:{visible:!1},credits:!1,series:m,plotOptions:{series:{tooltip:{valueDecimals:4},stickyTracking:!0,point:{events:{mouseOver:function(e){s(e.target.category)}}}},columnrange:{grouping:!1}}},T=function(){null!==k.current&&(k.current.chart.legend.options.x=(window.innerWidth-k.current.chart.legend.itemX)/2+window.scrollX-(k.current.chart.chartWidth/2-k.current.chart.legend.itemX/2),k.current.chart.legend.render())};return Object(n.useEffect)((function(){var e=setTimeout((function(){k.current.chart.reflow(),T()}),1e3);return function(){clearTimeout(e)}}),[t]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){T()}))}),[]),Object(p.jsx)("div",{children:Object(p.jsx)(O.a,{ref:k,highcharts:j.a,options:w})})};var C=function(e){var t=e.explanations,r=e.rewardColors,a=e.currentlyClickedTimestep,s=e.reward_channel_labels,i=e.action_semantic_labels,o=Object(n.useState)({title:{text:""},credits:!1,plotOptions:{visible:!1}}),c=Object(l.a)(o,2),u=c[0],d=c[1];return Object(n.useEffect)((function(){if(null!==a){for(var e=["No Operation","Increase Dimmer","Decrease Dimmer","Add Server","Remove Server"],n=[i["No Operation"],i["Increase Dimmer"],i["Decrease Dimmer"],i["Add Server"],i["Remove Server"]],o=Object.keys(s).sort((function(e,t){return e.localeCompare(t)})),c=[],l=0;l<o.length;l++){var u=o[l];c.push({color:r[u][0],name:s[u],data:[]})}for(var p=0;p<t.length;p++){var m=t[p];if(a===m.timestep)for(var b=0;b<e.length;b++)for(var v=e[b],h=0;h<o.length;h++){var j=o[h];c[h].data.push(m.relative_reward_channel_dominance[v][j])}}d({chart:{type:"column"},title:{text:"Relative Reward Channel Dominance"},xAxis:{categories:n,labels:{style:{color:"black"}}},yAxis:{min:0,plotLines:[{color:"black",width:2,value:0,zIndex:5}],title:{text:"Relative Action Value"},stackLabels:{enabled:!1,style:{fontWeight:"bold",color:"gray"},formatter:function(){return Math.round(100*this.total)/100}}},plotOptions:{column:{tooltip:{valueDecimals:2},stacking:"normal",borderWidth:1,borderColor:"black"}},series:c})}}),[t,a,r,i,s]),Object(p.jsx)("div",{style:{display:null==a?"none":"block"},children:Object(p.jsx)(O.a,{highcharts:j.a,options:u})})};var _=function(e){var t=e.explanations,r=e.rewardColors,a=e.currentlyClickedTimestep,s=e.action_semantic_labels,i=e.reward_channel_labels,o=Object(n.useState)({title:{text:""},credits:!1,plotOptions:{visible:!1}}),c=Object(l.a)(o,2),u=c[0],d=c[1];return Object(n.useEffect)((function(){if(null!==a){for(var e=["No Operation","Increase Dimmer","Decrease Dimmer","Add Server","Remove Server"],n=[s["No Operation"],s["Increase Dimmer"],s["Decrease Dimmer"],s["Add Server"],s["Remove Server"]],o=Object.keys(i).sort((function(e,t){return e.localeCompare(t)})),c=[],l=0;l<o.length;l++){var u=o[l];c.push({color:r[u][0],name:i[u],data:[]})}for(var p=0;p<t.length;p++){var m=t[p];if(a===m.timestep)for(var b=0;b<e.length;b++)for(var v=e[b],h=0;h<o.length;h++){var j=o[h];c[h].data.push(m.absolute_reward_channel_dominance[v][j])}}d({chart:{type:"column"},title:{text:"Absolute Reward Channel Dominance"},xAxis:{categories:n,labels:{style:{color:"black"}}},yAxis:{plotLines:[{color:"black",width:2,value:0,zIndex:5}],title:{text:"Action Value"},stackLabels:{enabled:!1,style:{fontWeight:"bold",color:"gray"},formatter:function(){return Math.round(100*this.total)/100}}},plotOptions:{column:{tooltip:{valueDecimals:2},stacking:"normal",borderWidth:1,borderColor:"black"}},series:c})}}),[t,a,r,s,i]),Object(p.jsx)("div",{style:{display:null==a?"none":"block"},children:Object(p.jsx)(O.a,{highcharts:j.a,options:u})})},k=r(14),w={basic_response_time:"Basic Response Time",opt_response_time:"Opt Response Time",basic_throughput:"Basic Throughput",opt_throughput:"Opt Throughput",avg_response_time:"Avg Response Time",utilization:"Utilization",current_dimmer:"Current Dimmer",active_servers:"Active Servers",is_booting:"Is Booting",request_arrival_mean:"Request Arrival Mean",request_arrival_moving_mean:"Request Arrival Moving Mean",request_arrival_moving_variance:"Request Arrival Moving Variance"},T={"Running Costs":"Running Costs",Revenue:"Revenue","User Satisfaction":"User Satisfaction"},S={"No Operation":"No Operation","Increase Dimmer":"Increase Dimmer","Decrease Dimmer":"Decrease Dimmer","Add Server":"Add Server","Remove Server":"Remove Server"},A={"Running Costs":["#DDAA33","#C1932E"],Revenue:["#BB5566","#A04958"],"User Satisfaction":["#0056AD","#004891"]};var R=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),u=i[0],b=i[1],h=Object(n.useState)(null),j=Object(l.a)(h,2),f=j[0],O=j[1],x=Object(n.useState)(null),R=Object(l.a)(x,2),D=R[0],N=R[1],E=Object(n.useState)({"Running Costs":.1,Revenue:.1,"User Satisfaction":.1}),H=Object(l.a)(E,2),M=H[0],I=H[1],L=Object(n.useState)({"Running Costs":.1,Revenue:.1,"User Satisfaction":.1}),z=Object(l.a)(L,2),B=z[0],W=z[1],q=Object(n.useState)(!0),P=Object(l.a)(q,2),U=P[0],X=P[1],F=Object(n.useRef)(null),V=Object(n.useCallback)((function(e){e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("Reading of file was aborted!")},t.onerror=function(){return console.log("Could not read file!")},t.onload=function(){var e=JSON.parse(t.result);b(!1),a(e)},t.readAsText(e)}))}),[]),J=Object(k.a)({onDrop:V,noClick:!0}),G=J.getRootProps,K=J.getInputProps,Q=Object(n.useCallback)((function(){fetch("./data/explanations.json").then((function(e){return e.json()})).then((function(e){u&&(0!==r.length&&r[r.length-1].timestep===e[e.length-1].timestep||a(e))})).catch((function(e){return console.log(e)}))}),[r,u]);Object(n.useEffect)((function(){return Q()}),[Q]),d()((function(){null===D&&u&&Q()}),1e3),Object(n.useEffect)((function(){null!==D&&F.current.scrollIntoView({behavior:"smooth"})}),[D]);var Y=[];return Object.entries(M).forEach((function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];Y.push(Object(p.jsxs)("div",{className:"flex mx-2 items-center",children:[Object(p.jsx)("p",{className:"mr-2",children:T[r]+":"}),Object(p.jsx)("input",{type:"number",min:"0",step:"0.01",className:"w-16 border rounded-md pl-2",value:n,onChange:function(e){return I((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(o.a)({},r,parseFloat(e.target.value)))}))}})]},r))})),Y.push(Object(p.jsx)("input",{type:"button",value:"Refresh",className:"px-2 ml-2 rounded-md",onClick:function(){return W(M)}},"refresh-btn")),Object(p.jsxs)("div",Object(c.a)(Object(c.a)({},G()),{},{children:[Object(p.jsxs)("div",{className:"line-plot-container",children:[Object(p.jsx)(g,{explanations:r,currentlyHoveredTimestep:f,setCurrentlyHoveredTimestep:O,currentlyClickedTimestep:D,observation_variables_labels:w,normalizeState:U}),Object(p.jsx)(y,{explanations:r,rewardColors:A,currentlyHoveredTimestep:f,setCurrentlyHoveredTimestep:O,currentlyClickedTimestep:D,extremaThresholds:B,rewardChannelLabels:T})]}),Object(p.jsx)(m,{explanations:r,currentlyHoveredTimestep:f,setCurrentlyHoveredTimestep:O,currentlyClickedTimestep:D,setCurrentlyClickedTimestep:N}),Object(p.jsx)(v,{explanations:r,depth:1,rewardColors:A,currentlyHoveredTimestep:f,setCurrentlyHoveredTimestep:O,currentlyClickedTimestep:D,setCurrentlyClickedTimestep:N}),Object(p.jsx)(v,{explanations:r,depth:2,rewardColors:A,currentlyHoveredTimestep:f,setCurrentlyHoveredTimestep:O,currentlyClickedTimestep:D,setCurrentlyClickedTimestep:N}),Object(p.jsxs)("div",{className:"flex mt-5",ref:F,children:[Object(p.jsx)("div",{className:"dominance-plot",children:Object(p.jsx)(_,{explanations:r,rewardColors:A,currentlyClickedTimestep:D,reward_channel_labels:T,action_semantic_labels:S})}),Object(p.jsx)("div",{className:"dominance-plot",style:{left:"50vw"},children:Object(p.jsx)(C,{explanations:r,rewardColors:A,currentlyClickedTimestep:D,reward_channel_labels:T,action_semantic_labels:S})})]}),Object(p.jsxs)("div",{className:"flex justify-start border py-2",children:[Object(p.jsx)("input",Object(c.a)(Object(c.a)({},K()),{},{style:{display:"block"}})),Y,Object(p.jsxs)("div",{className:"flex ml-32 items-center",children:[Object(p.jsx)("p",{className:"mr-2",children:"Normalize State: "}),Object(p.jsx)("input",{type:"checkbox",className:"w-16 border rounded-md pl-2",value:U,checked:U,onChange:function(e){X(e.target.checked)}})]})]})]}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5839d159.chunk.js.map