(this.webpackJsonpjaquu=this.webpackJsonpjaquu||[]).push([[0],Array(28).concat([function(e,t,a){e.exports=a(80)},,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),c=a(25),o=a.n(c),l=a(10),u=a(7),m=function(){l.b.add(u.j,u.a,u.c,u.l,u.e,u.b,u.i,u.m,u.g,u.h,u.d,u.n,u.k,u.f)},d=a(2),f=a(4),v=a(6),h=a(5),p=a(3),k=i.a.createContext("action"),b=(a(36),function(e){var t=e.onClick,a=e.children;return i.a.createElement("div",{className:"add-task-action",onClick:t},i.a.createElement("div",{className:"icon-positioner"},a))}),y=a(26),E=function(e){var t=e.name,a=e.size,n=e.onClick;return i.a.createElement("span",{onClick:n},i.a.createElement(y.a,{icon:t,className:a?"fa-"+a:""}))};a(39);var T=function(e){var t=e.index,a=e.boardDimensions,n=e.size,r=e.action,s=function(e,t){var a=t.columns,n=t.rows,i=Math.floor(e/a),r=e%a;return{x:r,y:i,accessible:i<n-1&&r<a-1,dark:a%2===0?i%2===0?e%2===0:e%2===1:e%2===0}}(t,a),c=s.x,o=s.y,l=s.accessible,u=s.dark;return i.a.createElement("div",{className:"field "+(u?"dark":"light")+(l?" accessible":""),style:{width:n,height:n}},l&&i.a.createElement(b,{onClick:function(){return r({x:c,y:o})}},i.a.createElement(E,{name:"plus",size:"3x"})))},g=(a(40),function(e){var t=e.type,a=e.callback;return i.a.createElement("div",{className:"choice-wrapper",onClick:function(){return a(t.id)}},i.a.createElement("div",{className:"icon-wrapper"},i.a.createElement(E,{name:t.icon,size:"3x"})),i.a.createElement("div",{className:"type-wrapper"},t.name))}),w=(a(41),function(e){var t=e.id,a=e.className,n=e.onClick,r=e.disabled,s=e.text,c=e.icon,o=e.title,l=e.severity,u=e.condition,m=e.small,d=e.style,f=!0;return"boolean"===typeof u?f=u:"function"===typeof u&&(f=u()),f&&i.a.createElement("button",{id:t,className:"btn "+(l?"btn-"+l:"btn-info")+(m?" btn-small":"")+(a?" "+a:""),onClick:n,disabled:r,title:o,style:d},c&&i.a.createElement("span",{className:"btn-icon"},i.a.createElement(E,{name:c})),i.a.createElement("span",{className:"btn-text"},s))}),O=(a(42),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.style;return i.a.createElement("div",{className:"dialogue"},i.a.createElement("div",{className:"dialogue-body",style:a},t))}}],[{key:"Header",value:function(e){var t=e.children,a=e.className;return i.a.createElement("div",{className:"dialogue-header"+(a?" "+a:"")},t)}},{key:"Main",value:function(e){var t=e.children,a=e.className;return i.a.createElement("div",{className:"dialogue-main"+(a?" "+a:"")},t)}},{key:"Footer",value:function(e){var t=e.children,a=e.className;return i.a.createElement("div",{className:"dialogue-footer"+(a?" "+a:"")},t)}}]),a}(n.Component)),j=(a(43),function(e){var t=e.id,a=e.value,n=e.placeholder,r=e.onChange,s=e.disabled,c=e.responsive;return!1!==c&&(c=!0),i.a.createElement("input",{id:t,type:"text",className:"input"+(c?" responsive":""),disabled:s,value:a,onChange:r,placeholder:n})}),S=(a(44),function(e){var t=e.type,a=e.size;return i.a.createElement("div",{className:"task-icon-wrapper"},i.a.createElement("span",{className:"task-icon"},i.a.createElement(E,{name:L[t].icon,size:a})))}),N=(a(45),function(e){var t=e.task,a=e.save,n=e.cancel,r=e.remove,s=(e.buttons,e.editProperty),c=e.children,o=t.type,l=L[o];return i.a.createElement(O,{style:{maxWidth:480}},i.a.createElement(O.Header,null,i.a.createElement("h2",{className:"task-dialogue-header"},l.name," ",i.a.createElement(S,{type:o,size:"xs"}))),i.a.createElement(O.Main,null,i.a.createElement("label",{htmlFor:"task-name"},"Name"),i.a.createElement(j,{id:"task-name",value:t.name,onChange:function(e){return s("name",e.target.value)}}),c),i.a.createElement(O.Footer,{className:"text-right"},i.a.createElement(w,{onClick:function(){return a(t)},icon:"check",severity:"success",text:"Speichern"}),i.a.createElement(w,{onClick:n,icon:"times",severity:"warning",text:"Abbrechen"}),i.a.createElement(w,{icon:"trash-alt",severity:"danger",text:"L\xf6schen",condition:function(){return null!==t.id},onClick:function(){return r(t)}})))}),x=i.a.createContext("timerFuntion"),C=(a(46),function(e){var t=e.text,a=e.amount;return i.a.createElement(x.Consumer,null,(function(e){var n=e.fn;return i.a.createElement(w,{small:!0,className:"timer-btn",text:t,onClick:function(){return n(a)}})}))});function z(e,t){return typeof e!==Date&&(e=D(e),e=new Date(e)),typeof t!==Date&&(t=D(t),t=new Date(t)),e-t}function P(e){return z(new Date,e)}function D(e){return e=(e/=1e3).toFixed(0),e*=1e3}function A(e){return(e*=-1)<0&&(e=0),M(e)}function M(e){var t="",a=Math.floor(e/1e3/60/60/24),n=!1;0!==a&&(e-=1e3*a*60*60*24,t+="".concat(a,"d"),n=!0);var i=Math.floor(e/1e3/60/60),r=!1;(0!==i||n)&&(e-=1e3*i*60*60,t+="".concat(i,"h"),r=!0);var s=Math.floor(e/1e3/60);(0!==s||r)&&(e-=1e3*s*60,t+="".concat(s,"m"));var c=Math.floor(e/1e3);return e-=1e3*c,t+="".concat(c,"s")}function F(){return D((new Date).getTime())}var W=function(e){var t=e.time,a=A(z(new Date(0),new Date(t)));return i.a.createElement(j,{value:"Zeit: "+a,responsive:!1,disabled:!0})},J=(a(47),function(e){var t=e.time;return i.a.createElement("div",{className:"timer-control"},i.a.createElement("div",{className:"buttons add-buttons"},i.a.createElement(C,{text:"+1d",amount:864e5}),i.a.createElement(C,{text:"+1h",amount:36e5}),i.a.createElement(C,{text:"+1m",amount:6e4}),i.a.createElement(C,{text:"+1s",amount:1e3})),i.a.createElement("div",{className:"buttons subtract-buttons"},i.a.createElement(C,{text:"-1d",amount:-864e5}),i.a.createElement(C,{text:"-1h",amount:-36e5}),i.a.createElement(C,{text:"-1m",amount:-6e4}),i.a.createElement(C,{text:"-1s",amount:-1e3})),i.a.createElement(W,{time:t}))}),q={editTask:{id:"edit-task",icon:"pencil-alt",title:"Bearbeiten",visible:function(){return!0},disabled:function(){return!1},fn:function(e,t){return(0,t.edit)(e)}},deleteTask:{id:"delete-task",icon:"trash-alt",title:"L\xf6schen",visible:function(){return!0},disabled:function(){return!1},fn:function(e,t){return(0,t.remove)(e)}}},B={stopTimer:{id:"stop-timer",icon:"pause",title:"Anhalten",visible:function(e){return!e.timer.stopped},disabled:function(e){return!1},fn:function(e,t){var a=t.save,n=e.timer,i=n.runtime,r=n.lastStop,s=n.remaining,c=F();s-=z(c,r),e.timer={runtime:i,stopped:!0,lastStop:c,remaining:s},a(e)}},startTimer:{id:"start-timer",icon:"play",title:"Starten",visible:function(e){return e.timer.stopped},disabled:function(e){return!0},fn:function(e,t){var a=t.save;e.timer.stopped=!1,e.timer.lastStop=F(),a(e)}},resetTimer:{id:"reset-timer",icon:"history",title:"Zur\xfccksetzen",visible:function(){return!0},disabled:function(){return!1},fn:function(e,t){var a=t.save,n=e.timer,i=n.runtime,r=n.stopped;e.timer={runtime:i,stopped:r,lastStop:F(),remaining:i},a(e)}}};function H(e,t){e(t())}var I={id:"timer",icon:"clock",name:"Timer",timerFunction:function(e,t){var a=e.timer;H(t,(function(){var e=function(e){var t=e.lastStop,a=e.stopped,n=e.remaining;return a||(n-=P(t)),n*=-1}(a),t=!1;return 0===e&&(t=!0),{time:e=A(e),notification:t}}))},editor:function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).alterTime=n.alterTime.bind(Object(p.a)(n)),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.alterTime(0)}},{key:"alterTime",value:function(e){var t=this.props.task.timer.runtime+e;t<0&&(t=0),this.props.editProperty("timer",{runtime:t,lastStop:F(),stopped:!0,remaining:t})}},{key:"render",value:function(){return i.a.createElement(N,this.props,i.a.createElement(x.Provider,{value:{fn:this.alterTime}},i.a.createElement(J,{time:this.props.task.timer.runtime,fn:this.alterTime})))}}]),a}(n.Component),actions:[q.editTask,B.stopTimer,B.startTimer,B.resetTimer,q.deleteTask],typeSpecific:{runtime:3e5,lastStop:null,remaining:3e5,stopped:!0}},R={stopStopwatch:{id:"stop-stopwatch",icon:"pause",title:"Anhalten",visible:function(e){return!e.stopwatch.stopped},disabled:function(e){return!1},fn:function(e,t){var a=t.save,n=e.stopwatch,i=n.measuredTime,r=n.lastStop;e.stopwatch={stopped:!0,measuredTime:i+P(r)},a(e)}},startStopwatch:{id:"start-stopwatch",icon:"play",title:"Starten",visible:function(e){return e.stopwatch.stopped},disabled:function(e){return!0},fn:function(e,t){var a=t.save;e.stopwatch.stopped=!1,e.stopwatch.lastStop=F(),a(e)}},resetStopwatch:{id:"reset-stopwatch",icon:"history",title:"Zur\xfccksetzen",visible:function(){return!0},disabled:function(){return!1},fn:function(e,t){var a=t.save;e.stopwatch.lastStop=F(),e.stopwatch.measuredTime=0,a(e)}}},L={stopwatch:{id:"stopwatch",icon:"hourglass-half",name:"Stoppuhr",timerFunction:function(e,t){var a=e.stopwatch;H(t,(function(){var e=a.stopped,t=a.measuredTime,n=a.lastStop,i=t;return e||(i+=P(n)),{time:i=function(e){return M(e)}(i)}}))},editor:function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return i.a.createElement(N,this.props)}}]),a}(n.Component),actions:[q.editTask,R.startStopwatch,R.stopStopwatch,R.resetStopwatch,q.deleteTask],typeSpecific:{stopped:!0,measuredTime:0,lastStop:null}},timer:I},Z=(a(48),function(e){var t=e.callback,a=Object.values(L).map((function(e){return i.a.createElement(g,{key:e.id,type:e,callback:t})}));return i.a.createElement("div",{className:"choose-task-type"},i.a.createElement("div",{className:"content-wrapper"},a))}),Q=(a(49),function(e){var t=e.action;return i.a.createElement("div",{className:"clickable-overlay",onClick:t})}),U=function(e){var t=e.task.type,a=L[t];return i.a.createElement(a.editor,e)},V=(a(50),function(e){var t=e.action,a=e.task;return t.visible(a)&&i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement("div",{className:"task-action",title:t.title,onClick:function(){return t.fn(a,e)}},i.a.createElement(E,{name:t.icon,size:"1x"}))}))}),G=(a(51),function(e){var t=e.task;return i.a.createElement("div",{className:"task-actions"},L[t.type].actions.map((function(e){return i.a.createElement(V,{key:e.id,action:e,task:t})})))}),K=(a(52),function(e){var t=e.name;return i.a.createElement("div",{className:"task-widget-name"},t)}),X=(a(53),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).state={time:". . ."};var i=n.props.task.type,r=L[i];return setInterval((function(){r.timerFunction(n.props.task,(function(e){var t=e.time,a=e.notification;n.state.time!==t&&(n.setState({time:t}),a&&Notification.requestPermission().then((function(e){"granted"===e&&new Notification(n.props.task.name)})))}))}),1e3),n}return Object(f.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"task-timer"},this.state.time)}}]),a}(n.Component)),Y=function e(){Object(d.a)(this,e),this.getTasks=function(){var e=window.localStorage.getItem("tasks");return e=e?JSON.parse(e):[]},this.saveTasks=function(e){e=JSON.stringify(e),window.localStorage.setItem("tasks",e)}};function $(e){var t=(new Y).getTasks(),a=1;t.forEach((function(t){t.type===e&&a++}));var n=L[e];return"".concat(n.name," #").concat(a)}function _(e){var t=e.type,a=e.position,n={id:null,name:$(t),position:a,type:t};return n[t]=L[t].typeSpecific,n}function ee(e){return e.map((function(e){return function(e){var t=e.id,a=e.name,n=e.position,r=e.type;return i.a.createElement("div",{key:t,className:"task-widget",size:{width:96,height:96},"data-grid":{x:n.x,y:n.y,w:1,h:1,isResizable:!1}},i.a.createElement(K,{name:a}),i.a.createElement(S,{type:r,size:"3x"}),i.a.createElement(X,{task:e}),i.a.createElement(G,{task:e}))}(e)}))}function te(e,t,a){return e[t]=a,e}a(54);var ae=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={step:1,fade:!1},n.setType=n.setType.bind(Object(p.a)(n)),n.saveTask=n.saveTask.bind(Object(p.a)(n)),n.closeWizard=n.closeWizard.bind(Object(p.a)(n)),n.editTaskProperty=n.editTaskProperty.bind(Object(p.a)(n)),n}return Object(f.a)(a,[{key:"setType",value:function(e){this.setState({step:2,chosenType:e,task:_({type:e,position:this.props.position})})}},{key:"editTaskProperty",value:function(e,t){var a=this.state.task;a=te(a,e,t),this.setState({task:a})}},{key:"saveTask",value:function(e){(0,this.props.save)(e),this.closeWizard()}},{key:"closeWizard",value:function(){var e=this;this.setState({fade:!0}),setTimeout((function(){e.setState({step:1,chosenType:null,fade:!1,task:null}),e.props.cancel()}),500)}},{key:"render",value:function(){var e=this.props.active,t=this.state,a=t.step,n=t.fade,r=t.task,s=null;switch(a){case 1:s=i.a.createElement(Z,{callback:this.setType});break;case 2:s=i.a.createElement(U,{task:r,save:this.saveTask,cancel:this.closeWizard,editProperty:this.editTaskProperty});break;default:s=i.a.createElement(i.a.Fragment,null)}return i.a.createElement("div",{className:"new-task-wizard"+(n?" fade-out":"")},e&&s,e&&i.a.createElement(Q,{action:this.closeWizard}))}}]),a}(n.Component),ne=(a(55),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n.fade=n.fade.bind(Object(p.a)(n)),n.save=n.save.bind(Object(p.a)(n)),n.remove=n.remove.bind(Object(p.a)(n)),n.cancel=n.cancel.bind(Object(p.a)(n)),n}return Object(f.a)(a,[{key:"fade",value:function(e){var t=this;this.setState({fade:!0}),setTimeout((function(){t.setState({fade:null}),e()}),500)}},{key:"save",value:function(){var e=this.props,t=e.save,a=e.task;this.fade((function(){return t(a)}))}},{key:"remove",value:function(){var e=this.props,t=e.remove,a=e.task;this.fade((function(){return t(a)}))}},{key:"cancel",value:function(){this.fade(this.props.action)}},{key:"render",value:function(){var e=this.props,t=e.task,a=e.editProperty;return i.a.createElement("div",{className:"task-editor-panel"+(this.state.fade?" fade-out":"")},i.a.createElement(U,{task:t,save:this.save,remove:this.remove,cancel:this.cancel,editProperty:a}),i.a.createElement(Q,{action:this.cancel}))}}]),a}(n.Component)),ie=a(27),re=a.n(ie),se=(a(68),a(69),a(70),a(71),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={startPosition:void 0},n.findTask=n.findTask.bind(Object(p.a)(n)),n.moveTask=n.moveTask.bind(Object(p.a)(n)),n}return Object(f.a)(a,[{key:"findTask",value:function(e){return this.props.tasks.filter((function(t){return t.position.x===e.x1&&t.position.y===e.y1}))[0]}},{key:"moveTask",value:function(e){var t=this.state.startPosition,a=this.props.updateTask,n=t.x1,i=t.y1,r=e.x2,s=e.y2;if(n!==r||i!==s){var c=this.findTask({x1:n,y1:i});c&&(c.position={x:r,y:s},a(c))}this.setState({startPosition:void 0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=ee(t.tasks);return i.a.createElement("div",{className:"task-grid",style:{width:96*a}},i.a.createElement(re.a,{cols:a,width:96*a,rowHeight:96,margin:[0,0],preventollision:!0,compactType:null,onDragStop:function(t,a,n){var i=n.x,r=n.y;return e.moveTask({x2:i,y2:r})},onDragStart:function(t,a){var n=a.x,i=a.y;e.setState({startPosition:{x1:n,y1:i}})}},n))}}]),a}(n.Component)),ce=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"getRandom",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}}]),e}(),oe=(a(72),function(e){var t=e.fields;return i.a.createElement("div",{className:"visual-grid"},t)}),le=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).taskService=new Y,n.state={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,createNew:!1,tasks:n.taskService.getTasks()},n.addTask=n.addTask.bind(Object(p.a)(n)),n.saveTask=n.saveTask.bind(Object(p.a)(n)),n.editTask=n.editTask.bind(Object(p.a)(n)),n.cancelEdit=n.cancelEdit.bind(Object(p.a)(n)),n.deleteTask=n.deleteTask.bind(Object(p.a)(n)),n.windowSize=n.windowSize.bind(Object(p.a)(n)),n.modifyTasks=n.modifyTasks.bind(Object(p.a)(n)),n.cancelAddTask=n.cancelAddTask.bind(Object(p.a)(n)),n.editTaskProperty=n.editTaskProperty.bind(Object(p.a)(n)),n.calcBoardDimensions=n.calcBoardDimensions.bind(Object(p.a)(n)),window.addEventListener("resize",n.windowSize),n}return Object(f.a)(a,[{key:"windowSize",value:function(){this.setState({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})}},{key:"calcBoardDimensions",value:function(){var e=Math.floor(this.state.width/96)+1,t=Math.floor(this.state.height/96)+1;return{columns:e,rows:t,xCorrection:96*e-this.state.width+1,yCorrection:96*t-this.state.height}}},{key:"addTask",value:function(e){var t=e.x,a=e.y;this.setState({edit:!0,newPosition:{x:t,y:a}})}},{key:"modifyTasks",value:function(e){var t=this.state.tasks;t=e(t),this.setState({tasks:t}),this.taskService.saveTasks(t)}},{key:"editTask",value:function(e){this.setState({editTask:Object.assign({},e)})}},{key:"cancelEdit",value:function(){this.setState({editTask:null})}},{key:"editTaskProperty",value:function(e,t){var a=this.state.editTask;a=te(a,e,t),this.setState({editTask:a})}},{key:"saveTask",value:function(e){var t=this;this.modifyTasks((function(a){return null===e.id?(e.id=ce.getRandom(),a.push(e)):a=a.map((function(t){return t.id===e.id?e:t})),t.setState({editTask:null}),a}))}},{key:"deleteTask",value:function(e){var t=this;this.modifyTasks((function(a){return null!==e.id&&(a=a.filter((function(t){return t.id!==e.id}))),t.setState({editTask:null}),a}))}},{key:"cancelAddTask",value:function(){this.setState({edit:!1})}},{key:"render",value:function(){for(var e=this.calcBoardDimensions(),t=[],a=0;a<e.columns*e.rows;a++)t[a]=i.a.createElement(T,{key:a,size:96,boardDimensions:e,action:this.addTask,index:a});return i.a.createElement("div",{className:"board",style:{marginRight:-e.xCorrection,marginBottom:-e.yCorrection}},i.a.createElement(k.Provider,{value:{save:this.saveTask,remove:this.deleteTask,edit:this.editTask}},i.a.createElement(ae,{active:this.state.edit,position:this.state.newPosition,cancel:this.cancelAddTask,save:this.saveTask}),i.a.createElement(se,{tasks:this.state.tasks,columns:e.columns-1,updateTask:this.saveTask}),i.a.createElement(oe,{fields:t}),this.state.editTask&&i.a.createElement(ne,{task:this.state.editTask,save:this.saveTask,remove:this.deleteTask,editProperty:this.editTaskProperty,action:this.cancelEdit})))}}]),a}(n.Component),ue=(a(73),function(e){var t=e.theme,a=e.active,n=e.setTheme,r=t.button;return i.a.createElement("span",{className:"theme-control-button"+(a?"":" enabled"),style:{color:r.color,background:r.background}},i.a.createElement(E,{name:r.icon,onClick:function(){return n(t)},size:"lg"}))}),me=i.a.createContext("theme"),de={light:{id:"light",className:"theme-light",button:{icon:"sun",color:"rgba(42, 42, 46, 1)",background:"#fff"}},dark:{id:"dark",className:"theme-dark",button:{icon:"moon",color:"#fff",background:"rgba(42, 42, 46, 1)"}}},fe=(a(74),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return i.a.createElement(me.Consumer,null,(function(e){var t=e.setTheme,a=e.isActive;return i.a.createElement("div",{className:"theme-switcher"},Object.values(de).map((function(e){return i.a.createElement(ue,{theme:e,setTheme:t,active:a(e)})})))}))}}]),a}(n.Component)),ve=(a(75),n.Component,function e(){Object(d.a)(this,e),this.getTheme=function(){var e=window.localStorage.getItem("theme");if(e){var t=JSON.parse(e),a=Object.values(de).filter((function(e){return e.id===t}));e=1===a.length?a[0]:void 0}return e||(e=de.light),e},this.setTheme=function(e){e=JSON.stringify(e.id),window.localStorage.setItem("theme",e)}}),he=(a(76),a(77),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n.themeService=new ve,n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.setState({theme:this.themeService.getTheme()})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"+(this.state.theme?" ".concat(this.state.theme.className):"")},i.a.createElement(me.Provider,{value:{setTheme:function(t){e.setState({theme:t}),e.themeService.setTheme(t)},isActive:function(t){return!!e.state.theme&&e.state.theme.id===t.id}}},i.a.createElement(le,null)))}}]),a}(n.Component));a(78),a(79);m(),o.a.load({google:{families:["Quicksand:500,700","sans-serif"]}}),Notification.requestPermission(),document.title="Jaquu - Algoristic Timer",s.a.render(i.a.createElement(he,null),document.querySelector("#root"))}]),[[28,1,2]]]);
//# sourceMappingURL=main.6124459d.chunk.js.map