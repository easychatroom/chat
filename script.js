const _0x977fce=_0x5ab2;(function(_0x51dae0,_0x24cb27){const _0x51eebf=_0x5ab2,_0x432601=_0x51dae0();while(!![]){try{const _0x52e8ce=parseInt(_0x51eebf(0xdb))/0x1+parseInt(_0x51eebf(0x10a))/0x2*(parseInt(_0x51eebf(0xc8))/0x3)+-parseInt(_0x51eebf(0x11d))/0x4+-parseInt(_0x51eebf(0x113))/0x5*(-parseInt(_0x51eebf(0x123))/0x6)+-parseInt(_0x51eebf(0xf8))/0x7+-parseInt(_0x51eebf(0xe1))/0x8+-parseInt(_0x51eebf(0xd8))/0x9*(-parseInt(_0x51eebf(0xf0))/0xa);if(_0x52e8ce===_0x24cb27)break;else _0x432601['push'](_0x432601['shift']());}catch(_0x123612){_0x432601['push'](_0x432601['shift']());}}}(_0x4300,0x2fff7));const firebaseConfig={'apiKey':_0x977fce(0x115),'authDomain':_0x977fce(0xe0),'databaseURL':_0x977fce(0xd3),'projectId':_0x977fce(0x10b),'storageBucket':_0x977fce(0xed),'messagingSenderId':'985049198428','appId':_0x977fce(0xb5),'measurementId':_0x977fce(0x107)};function _0x5ab2(_0x9db017,_0x80aaf8){const _0x4300c9=_0x4300();return _0x5ab2=function(_0x5ab236,_0x3c2b7a){_0x5ab236=_0x5ab236-0xb4;let _0x1206bd=_0x4300c9[_0x5ab236];return _0x1206bd;},_0x5ab2(_0x9db017,_0x80aaf8);}firebase[_0x977fce(0xf7)](firebaseConfig);const db=firebase['database'](),STATIC_ROOM=_0x977fce(0xfe),ROOM_TTL_MS=0x2*0x3c*0x3e8;let username=localStorage[_0x977fce(0xb4)](_0x977fce(0xb6)),roomCode='',clientId=generateClientId(),lastActivity=Date['now'](),typingTimeout;const userKey=sanitizeUsername(username);window[_0x977fce(0x103)]=()=>{const _0x1600ff=_0x977fce;!username?showScreen('usernameScreen'):(document[_0x1600ff(0xe2)]('namePreview')[_0x1600ff(0x11b)]=username,showScreen('roomChoiceScreen')),cleanupOldRooms(),!username?showScreen('usernameScreen'):(document[_0x1600ff(0xe2)](_0x1600ff(0xd1))[_0x1600ff(0x11b)]=username,showScreen(_0x1600ff(0x10f)));};function saveUsername(){const _0x172a00=_0x977fce;username=document[_0x172a00(0xe2)](_0x172a00(0xe3))[_0x172a00(0xfc)]['trim']();if(!username)return alert(_0x172a00(0x102));localStorage[_0x172a00(0x110)](_0x172a00(0xb6),username),document['getElementById'](_0x172a00(0xd1))[_0x172a00(0x11b)]=username,showScreen(_0x172a00(0x10f));}function generateRoom(){const _0x29d16c=_0x977fce;roomCode=genRoomCode(),db[_0x29d16c(0xff)](_0x29d16c(0xcc)+roomCode)[_0x29d16c(0xe5)]({'active':!![],'created':Date[_0x29d16c(0xcf)]()}),startChat();}function joinRoom(){const _0x50e927=_0x977fce;roomCode=document[_0x50e927(0xe2)](_0x50e927(0xee))[_0x50e927(0xfc)][_0x50e927(0x112)]()[_0x50e927(0x106)]();if(!roomCode)return alert('Enter\x20a\x20valid\x20room\x20code');db[_0x50e927(0xff)](_0x50e927(0xcc)+roomCode)['get']()['then'](_0x582192=>{const _0x58fb57=_0x50e927;_0x582192[_0x58fb57(0xc2)]()&&_0x582192[_0x58fb57(0xfa)]()[_0x58fb57(0xc6)]!==![]?startChat():alert(_0x58fb57(0x122));});}function joinGlobalRoom(){const _0x198bc3=_0x977fce;roomCode=_0x198bc3(0xfe),db[_0x198bc3(0xff)](_0x198bc3(0xcc)+roomCode)[_0x198bc3(0xe5)]({'active':!![],'created':Date[_0x198bc3(0xcf)]()}),startChat();}function startChat(){const _0x285e6d=_0x977fce;showScreen(_0x285e6d(0xbd)),document[_0x285e6d(0xe2)]('userDisplay')[_0x285e6d(0x11b)]=username,document['getElementById']('roomDisplay')[_0x285e6d(0x11b)]=roomCode,listenForMessages(),listenForTyping(),startInactivityTimer(),trackPresence(),listenForUserList(),logSystemMessage(username+'\x20joined\x20the\x20room'),window[_0x285e6d(0xf4)]('beforeunload',()=>{const _0x12893f=_0x285e6d;logSystemMessage(username+_0x12893f(0xda));});}function trackPresence(){const _0x179f3c=_0x977fce,_0x5f1048=sanitizeUsername(username),_0x243b92=db[_0x179f3c(0xff)](_0x179f3c(0x11e)+roomCode+'/'+_0x5f1048),_0x4838d8={'username':username,'lastOnline':firebase[_0x179f3c(0x111)][_0x179f3c(0xce)][_0x179f3c(0x118)],'online':!![]};_0x243b92[_0x179f3c(0xe5)](_0x4838d8),_0x243b92['onDisconnect']()[_0x179f3c(0x104)]({'online':![],'lastOnline':Date['now']()});}function listenForUserList(){const _0x2ed6eb=_0x977fce;db['ref'](_0x2ed6eb(0x11e)+roomCode)['on'](_0x2ed6eb(0xfc),_0x271375=>{const _0x39894b=_0x2ed6eb,_0x3f213e=_0x271375[_0x39894b(0xfa)]()||{},_0xbfa1cf=Date[_0x39894b(0xcf)](),_0xc4c75d=Object['values'](_0x3f213e)[_0x39894b(0x105)](_0x1ba2e0=>_0x1ba2e0['username'])[_0x39894b(0xc0)](_0x1cb00c=>{const _0x4a376c=_0x39894b,_0x29b20b=_0x1cb00c[_0x4a376c(0xfb)],_0x51d7b1=_0xbfa1cf-_0x1cb00c[_0x4a376c(0xb8)]<=0x1e*0x3c*0x3e8;if(!_0x29b20b&&!_0x51d7b1)return'';const _0x540832=_0x29b20b?_0x4a376c(0xdf):_0x4a376c(0x11f),_0x59531a=_0x29b20b?'🟢':'🕒';return _0x4a376c(0x10d)+_0x540832+'\x22>'+_0x59531a+'\x20'+_0x1cb00c['username']+_0x4a376c(0xb7);})['join']('');document['getElementById'](_0x39894b(0xd5))[_0x39894b(0xc1)]=_0xc4c75d;});}function logSystemMessage(_0x4a9a4d){const _0x3e207d=_0x977fce,_0x109f7b=db[_0x3e207d(0xff)]()[_0x3e207d(0x121)]()[_0x3e207d(0xf5)];db[_0x3e207d(0xff)](_0x3e207d(0xcc)+roomCode+_0x3e207d(0xc5)+_0x109f7b)['set']({'msg':_0x4a9a4d,'sender':_0x3e207d(0xcd),'senderId':_0x3e207d(0xd9),'timestamp':Date['now']()});}function toggleSidebar(){const _0x232ef3=_0x977fce;document[_0x232ef3(0xe2)](_0x232ef3(0x11c))[_0x232ef3(0xb9)]['toggle']('show');}document[_0x977fce(0xf4)]('DOMContentLoaded',()=>{const _0x162e6d=_0x977fce,_0x1820be=document[_0x162e6d(0xe2)](_0x162e6d(0xf1));_0x1820be&&_0x1820be['addEventListener']('keypress',function(_0x5862c6){const _0x395340=_0x162e6d;_0x5862c6[_0x395340(0xf5)]===_0x395340(0x101)&&(_0x5862c6[_0x395340(0xf2)](),sendMessage());});});function showScreen(_0x2c48b4){const _0x5ce982=_0x977fce;[_0x5ce982(0xe6),_0x5ce982(0x10f),_0x5ce982(0xef),_0x5ce982(0xbd)][_0x5ce982(0xc4)](_0x4db9e0=>{const _0x49a862=_0x5ce982;document[_0x49a862(0xe2)](_0x4db9e0)[_0x49a862(0xe9)][_0x49a862(0xc3)]=_0x49a862(0x119);}),document[_0x5ce982(0xe2)](_0x2c48b4)[_0x5ce982(0xe9)]['display']=_0x5ce982(0x109);}function _0x4300(){const _0x391f5e=['</li>','lastOnline','classList','toLocaleTimeString','reload','received','chatScreen','child_added','msg','map','innerHTML','exists','display','forEach','/messages/','active','</span><br>','150582DtymvA','log','entries','sent','rooms/','System','ServerValue','now','/messages','namePreview','ABCDEFGHIJKLMNOPQRSTUVWXYZ','https://easy-chatroom-default-rtdb.firebaseio.com','2-digit','userList','from','once','807201IzHnhZ','system','\x20left\x20the\x20room','287469jxoEeO','substr','Session\x20expired.','🗑️\x20Deleted\x20expired\x20room:','#00ff88','easy-chatroom.firebaseapp.com','1894712kJGJOl','getElementById','usernameInput','length','set','usernameScreen','join','/typing/','style','messages','add','floor','easy-chatroom.firebasestorage.app','roomCodeInput','codeEntryScreen','10jKDQNI','msgInput','preventDefault','<small>','addEventListener','key','scrollTop','initializeApp','2351132VOylFt','0123456789','val','online','value','</small>','050BBB66HH','ref','remove','Enter','Please\x20enter\x20your\x20name','onload','update','filter','toUpperCase','G-QDESJ2WR42','random','flex','4SqvlDI','easy-chatroom','toString','<li\x20style=\x22color:','replace','roomChoiceScreen','setItem','database','trim','253335PRRNaH','limitToLast','AIzaSyBhfQ1Wf5JEy6sOU4ExXboRI4Ir4y_aKZw','<span\x20class=\x22sender-name\x22>','createElement','TIMESTAMP','none','appendChild','innerText','userSidebar','251604nvMPDp','users/','#888','then','push','Room\x20doesn\x27t\x20exist\x20or\x20is\x20inactive.','42SgzyoN','getItem','1:985049198428:web:d0eb7e2de39887710c9b99','chat_username'];_0x4300=function(){return _0x391f5e;};return _0x4300();}function sendMessage(){const _0x44417f=_0x977fce,_0x30c8a8=document[_0x44417f(0xe2)](_0x44417f(0xf1)),_0x3af5b4=_0x30c8a8[_0x44417f(0xfc)][_0x44417f(0x112)]();if(!_0x3af5b4)return;const _0x3ad52a=db[_0x44417f(0xff)]()[_0x44417f(0x121)]()[_0x44417f(0xf5)];db[_0x44417f(0xff)]('rooms/'+roomCode+_0x44417f(0xc5)+_0x3ad52a)[_0x44417f(0xe5)]({'msg':_0x3af5b4,'sender':username,'senderId':clientId,'timestamp':Date[_0x44417f(0xcf)]()}),_0x30c8a8[_0x44417f(0xfc)]='',sendTyping(!![]),lastActivity=Date[_0x44417f(0xcf)]();}function listenForMessages(){const _0x46b566=_0x977fce,_0x3d56fa=db['ref']('rooms/'+roomCode+_0x46b566(0xd0)),_0x97fca3=roomCode===STATIC_ROOM?_0x3d56fa[_0x46b566(0x114)](0x50):_0x3d56fa;_0x97fca3['on'](_0x46b566(0xbe),_0x5b1084=>{const _0x250c94=_0x46b566,{msg:_0xf626da,sender:_0x6d02c5,senderId:_0x5852da,timestamp:_0x2fc1da}=_0x5b1084[_0x250c94(0xfa)](),_0x1b885c=_0x5852da===clientId;addMessage(_0xf626da,_0x6d02c5,_0x2fc1da,_0x1b885c),roomCode!==STATIC_ROOM&&db[_0x250c94(0xff)](_0x250c94(0xcc)+roomCode+'/messages/'+_0x5b1084['key'])[_0x250c94(0x100)]();});}function addMessage(_0x49d4b2,_0x4718a9,_0x3b7552,_0x5aeefc){const _0x133112=_0x977fce,_0x38ef90=document[_0x133112(0x117)]('div');_0x38ef90[_0x133112(0xb9)][_0x133112(0xeb)](_0x133112(0xbf),_0x5aeefc?_0x133112(0xcb):_0x133112(0xbc));const _0x195bb2=new Date(_0x3b7552)[_0x133112(0xba)]([],{'hour':_0x133112(0xd4),'minute':_0x133112(0xd4)});_0x38ef90['innerHTML']=_0x133112(0x116)+_0x4718a9+_0x133112(0xc7)+_0x49d4b2+_0x133112(0xf3)+_0x195bb2+_0x133112(0xfd),document[_0x133112(0xe2)](_0x133112(0xea))[_0x133112(0x11a)](_0x38ef90),document[_0x133112(0xe2)](_0x133112(0xea))[_0x133112(0xf6)]=0x1869f;}function sendTyping(_0x1a4ff1=![]){const _0x2dbe19=_0x977fce;_0x1a4ff1?db['ref'](_0x2dbe19(0xcc)+roomCode+_0x2dbe19(0xe8)+clientId)[_0x2dbe19(0x100)]():(db[_0x2dbe19(0xff)](_0x2dbe19(0xcc)+roomCode+_0x2dbe19(0xe8)+clientId)[_0x2dbe19(0xe5)](username),clearTimeout(typingTimeout),typingTimeout=setTimeout(()=>{const _0x474937=_0x2dbe19;db[_0x474937(0xff)](_0x474937(0xcc)+roomCode+'/typing/'+clientId)[_0x474937(0x100)]();},0xbb8));}function listenForTyping(){const _0x2ba0eb=_0x977fce,_0x35a8f9=document[_0x2ba0eb(0xe2)]('typing');db[_0x2ba0eb(0xff)](_0x2ba0eb(0xcc)+roomCode+'/typing')['on'](_0x2ba0eb(0xfc),_0xfde1a3=>{const _0xf58b0f=_0x2ba0eb,_0x267bcf=_0xfde1a3[_0xf58b0f(0xfa)]();if(!_0x267bcf)return _0x35a8f9['innerText']='';const _0x494858=Object['values'](_0x267bcf)[_0xf58b0f(0x105)](_0x548734=>_0x548734!==username);_0x35a8f9[_0xf58b0f(0x11b)]=_0x494858['length']?_0x494858['join'](',\x20')+'\x20typing...':'';});}function startInactivityTimer(){setInterval(()=>{const _0x3b6a04=_0x5ab2;Date[_0x3b6a04(0xcf)]()-lastActivity>0x5*0x3c*0x3e8&&(db[_0x3b6a04(0xff)](_0x3b6a04(0xcc)+roomCode)['update']({'active':![]}),alert(_0x3b6a04(0xdd)),location[_0x3b6a04(0xbb)]());},0x7530);}function genRoomCode(){const _0x3a6b3a=_0x977fce,_0x2554d1=_0x3a6b3a(0xd2),_0x129d2b=_0x3a6b3a(0xf9),_0x368c19=(_0x20c85e,_0x3d9ccf)=>Array[_0x3a6b3a(0xd6)]({'length':_0x3d9ccf},()=>_0x20c85e[Math[_0x3a6b3a(0xec)](Math['random']()*_0x20c85e[_0x3a6b3a(0xe4)])])[_0x3a6b3a(0xe7)]('');return _0x368c19(_0x129d2b,0x3)+_0x368c19(_0x2554d1,0x3)+_0x368c19(_0x129d2b,0x2)+_0x368c19(_0x2554d1,0x2);}function generateClientId(){const _0x56ed0c=_0x977fce;return'_'+Math[_0x56ed0c(0x108)]()[_0x56ed0c(0x10c)](0x24)[_0x56ed0c(0xdc)](0x2,0x9);}function cleanupOldRooms(){const _0x15ba8e=_0x977fce;db[_0x15ba8e(0xff)]('rooms')[_0x15ba8e(0xd7)](_0x15ba8e(0xfc))[_0x15ba8e(0x120)](_0x272d42=>{const _0xccb439=_0x15ba8e,_0x559aad=_0x272d42['val']();if(!_0x559aad)return;const _0x5d5bd0=Date['now']();Object[_0xccb439(0xca)](_0x559aad)[_0xccb439(0xc4)](([_0x1e5f27,_0xd58816])=>{const _0x58b26b=_0xccb439;if(_0x1e5f27===STATIC_ROOM)return;const _0xe741c6=_0xd58816['created']||0x0,_0x3438cb=_0x5d5bd0-_0xe741c6>ROOM_TTL_MS;_0x3438cb&&(db[_0x58b26b(0xff)](_0x58b26b(0xcc)+_0x1e5f27)[_0x58b26b(0x100)](),console[_0x58b26b(0xc9)](_0x58b26b(0xde),_0x1e5f27));});});}function sanitizeUsername(_0x3bc7f2){const _0x13019b=_0x977fce;return _0x3bc7f2[_0x13019b(0x10e)](/[.#$\[\]]/g,'_');}