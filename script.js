const _0x2a8546=_0x4e8d;(function(_0x271222,_0x365c47){const _0x185294=_0x4e8d,_0x575bcd=_0x271222();while(!![]){try{const _0x47d94c=-parseInt(_0x185294(0x229))/0x1*(parseInt(_0x185294(0x230))/0x2)+-parseInt(_0x185294(0x1de))/0x3+-parseInt(_0x185294(0x1f0))/0x4+parseInt(_0x185294(0x23e))/0x5+-parseInt(_0x185294(0x1cd))/0x6*(parseInt(_0x185294(0x1f1))/0x7)+-parseInt(_0x185294(0x234))/0x8*(parseInt(_0x185294(0x220))/0x9)+-parseInt(_0x185294(0x23d))/0xa*(-parseInt(_0x185294(0x225))/0xb);if(_0x47d94c===_0x365c47)break;else _0x575bcd['push'](_0x575bcd['shift']());}catch(_0x206cf6){_0x575bcd['push'](_0x575bcd['shift']());}}}(_0x5339,0xb1be3));const firebaseConfig={'apiKey':_0x2a8546(0x22c),'authDomain':_0x2a8546(0x1be),'databaseURL':_0x2a8546(0x21a),'projectId':_0x2a8546(0x1ea),'storageBucket':'easy-chatroom.firebasestorage.app','messagingSenderId':_0x2a8546(0x1cb),'appId':'1:985049198428:web:d0eb7e2de39887710c9b99','measurementId':_0x2a8546(0x245)};firebase['initializeApp'](firebaseConfig);const db=firebase[_0x2a8546(0x1c0)]();let messageTimestamps=[],isBlocked=![],username=null,roomCode=null,clientId='_'+Math[_0x2a8546(0x216)]()[_0x2a8546(0x206)](0x24)['substr'](0x2,0x9),lastActivity=Date[_0x2a8546(0x1c5)](),typingTimeout,gr8stg='';const STATIC_ROOM=_0x2a8546(0x1d9),MAX_MESSAGES=0x1f4,sound=new Audio(_0x2a8546(0x226));sound[_0x2a8546(0x1c4)]=0.3,window[_0x2a8546(0x242)]=()=>{cleanupOldRooms(),setupSidebarBackHandler(),initUsernameFlow(),setupVisibilityAttention();};function sanitizeUsername(_0x23bd6b){const _0x12b997=_0x2a8546;return _0x23bd6b[_0x12b997(0x23b)](/[.#$\[\]]/g,'_');}function submitProfile(){const _0x25916f=_0x2a8546,_0x5a7b80=document['getElementById']('profileUsernameInput')['value'][_0x25916f(0x213)](),_0x3c3bbf=document['getElementById']('profileDescriptionInput')[_0x25916f(0x22f)]['trim'](),_0x416837=document[_0x25916f(0x1ca)]('profileError');if(!_0x5a7b80||!_0x3c3bbf){_0x416837[_0x25916f(0x1d5)]=_0x25916f(0x20f),_0x416837['style'][_0x25916f(0x202)]=_0x25916f(0x200);return;}_0x416837['style']['display']=_0x25916f(0x222),username=_0x5a7b80;const _0xbf5155=Date[_0x25916f(0x1c5)](),_0x3b8151=sanitizeUsername(_0x5a7b80),_0x1d6e18=db[_0x25916f(0x221)](_0x25916f(0x207)+_0x3b8151);_0x1d6e18[_0x25916f(0x1ba)]()[_0x25916f(0x21c)](_0x3cc875=>{const _0x5f38ec=_0x25916f,_0xc35241=_0x3cc875[_0x5f38ec(0x1b6)]()||{},_0x3d7286=_0xc35241[_0x5f38ec(0x1ee)]||[];if(!_0x3d7286['includes'](_0x5a7b80))_0x3d7286[_0x5f38ec(0x219)](_0x5a7b80);_0x1d6e18[_0x5f38ec(0x244)]({'username':_0x5a7b80,'description':_0x3c3bbf,'lastChanged':_0xbf5155,'usernameHistory':_0x3d7286}),localStorage[_0x5f38ec(0x201)](_0x5f38ec(0x1bf),_0x5a7b80),localStorage['setItem'](_0x5f38ec(0x1e2),_0x3c3bbf),document[_0x5f38ec(0x1ca)](_0x5f38ec(0x1b2))['innerText']=username,showScreen(_0x5f38ec(0x1f4));});}function saveUsername(){const _0x3eb692=_0x2a8546,_0x2ddcb3=document[_0x3eb692(0x1ca)](_0x3eb692(0x1ff))['value'][_0x3eb692(0x213)]();if(!_0x2ddcb3)return alert(_0x3eb692(0x1f6));username=_0x2ddcb3,localStorage['setItem'](_0x3eb692(0x1bf),username),initUsernameFlow();}function generateRoom(){const _0x5eb15d=_0x2a8546;roomCode=genRoomCode(),db['ref'](_0x5eb15d(0x210)+roomCode)[_0x5eb15d(0x244)]({'active':!![],'created':Date[_0x5eb15d(0x1c5)]()}),startChat();}function joinRoom(){const _0x1def9a=_0x2a8546,_0x3fe2a6=roomCode||document[_0x1def9a(0x1ca)](_0x1def9a(0x1f3))['value'][_0x1def9a(0x213)]()[_0x1def9a(0x1d2)]();if(!_0x3fe2a6)return alert(_0x1def9a(0x1f8));roomCode=_0x3fe2a6;if(roomCode===STATIC_ROOM){showScreen('passwordScreen');return;}db[_0x1def9a(0x221)](_0x1def9a(0x210)+roomCode)[_0x1def9a(0x1ba)]()[_0x1def9a(0x21c)](_0x3a30bc=>{const _0x2b86b2=_0x1def9a;_0x3a30bc[_0x2b86b2(0x214)]()&&_0x3a30bc[_0x2b86b2(0x1b6)]()[_0x2b86b2(0x1c8)]!==![]?startChat():alert(_0x2b86b2(0x1db));});}function _0x4e8d(_0xe18d68,_0x4b7ef4){const _0x53399d=_0x5339();return _0x4e8d=function(_0x4e8ddf,_0x7d8af0){_0x4e8ddf=_0x4e8ddf-0x1ad;let _0x435eb5=_0x53399d[_0x4e8ddf];return _0x435eb5;},_0x4e8d(_0xe18d68,_0x4b7ef4);}function startChat(){const _0x2a644d=_0x2a8546;if(!roomCode||!username)return alert(_0x2a644d(0x1d1)),showScreen(_0x2a644d(0x1f4));showScreen(_0x2a644d(0x1d0)),document['getElementById']('userDisplay')[_0x2a644d(0x1d5)]=username,(roomCode=_0x2a644d(0x1d9))?document[_0x2a644d(0x1ca)](_0x2a644d(0x215))[_0x2a644d(0x1d5)]=_0x2a644d(0x231):document[_0x2a644d(0x1ca)](_0x2a644d(0x215))[_0x2a644d(0x1d5)]=roomCode,listenForMessages(),listenForTyping(),startInactivityTimer(),trackPresence(),listenForUserList();}function validateStaticRoomPassword(){const _0x5c8723=_0x2a8546,_0x19c80a=document['getElementById'](_0x5c8723(0x209))[_0x5c8723(0x22f)],_0x3fc919=document[_0x5c8723(0x1ca)](_0x5c8723(0x1fb));db[_0x5c8723(0x221)](_0x5c8723(0x237))[_0x5c8723(0x1ba)]()['then'](_0x107d5a=>{const _0x17bdbd=_0x5c8723,_0xcae185=_0x107d5a[_0x17bdbd(0x1b6)]();_0x19c80a===_0xcae185?(_0x3fc919['style']['display']=_0x17bdbd(0x222),startChat()):_0x3fc919[_0x17bdbd(0x1b0)]['display']=_0x17bdbd(0x200);});}function sendMessage(){const _0x383ce4=_0x2a8546,_0x34462a=document[_0x383ce4(0x1ca)](_0x383ce4(0x1e9)),_0x13cef0=_0x34462a[_0x383ce4(0x22f)][_0x383ce4(0x213)]();if(!_0x13cef0)return;const _0x4eb550=Date[_0x383ce4(0x1c5)](),_0x20e4dd=sanitizeUsername(username);db[_0x383ce4(0x221)](_0x383ce4(0x1e3)+roomCode+'/'+_0x20e4dd)['once'](_0x383ce4(0x22f))[_0x383ce4(0x21c)](_0x2577d8=>{const _0x142f06=_0x383ce4,_0x43bac1=_0x2577d8[_0x142f06(0x1b6)]();if(_0x43bac1&&_0x4eb550<_0x43bac1){const _0x142e52=Math[_0x142f06(0x1e7)]((_0x43bac1-_0x4eb550)/0x3e8);alert(_0x142f06(0x1f9)+_0x142e52+_0x142f06(0x1af));return;}const _0x3c589a=db['ref'](_0x142f06(0x248)+roomCode+'/'+_0x20e4dd);_0x3c589a[_0x142f06(0x1bb)](_0x142f06(0x22f))['then'](_0x476b0d=>{const _0x199a33=_0x142f06,_0x44060a=_0x476b0d[_0x199a33(0x1b6)]()||[],_0x3c4941=[..._0x44060a,_0x4eb550]['filter'](_0x302447=>_0x4eb550-_0x302447<0xbb8);if(_0x3c4941[_0x199a33(0x208)]>=0x5){alert(_0x199a33(0x1ae)),db[_0x199a33(0x221)](_0x199a33(0x1e3)+roomCode+'/'+_0x20e4dd)[_0x199a33(0x244)](_0x4eb550+0x7530);const _0x449fe5=db[_0x199a33(0x221)]('rooms/'+roomCode+_0x199a33(0x1d3));_0x449fe5[_0x199a33(0x241)](_0x199a33(0x236))[_0x199a33(0x20c)](clientId)['limitToLast'](0x5)[_0x199a33(0x1bb)](_0x199a33(0x22f),_0x6a0752=>{const _0x556a0a=_0x199a33;_0x6a0752[_0x556a0a(0x1e1)](_0x173bb3=>{const _0x3f3e9b=_0x556a0a;_0x449fe5[_0x3f3e9b(0x20d)](_0x173bb3[_0x3f3e9b(0x232)])[_0x3f3e9b(0x22e)]();});}),_0x3c589a[_0x199a33(0x244)]([]);return;}_0x3c589a[_0x199a33(0x244)](_0x3c4941);const _0xa19c70=db[_0x199a33(0x221)]()[_0x199a33(0x219)]()[_0x199a33(0x232)];db[_0x199a33(0x221)](_0x199a33(0x210)+roomCode+'/messages/'+_0xa19c70)[_0x199a33(0x244)]({'msg':_0x13cef0,'sender':username,'senderId':clientId,'timestamp':_0x4eb550}),_0x34462a['value']='',sendTyping(!![]),lastActivity=_0x4eb550;});});}function listenForMessages(){const _0x4d2e06=_0x2a8546,_0x3b5a2c=db[_0x4d2e06(0x221)]('rooms/'+roomCode+_0x4d2e06(0x1d3)),_0x2ff12d=_0x3b5a2c[_0x4d2e06(0x1b8)](MAX_MESSAGES);_0x2ff12d['on'](_0x4d2e06(0x246),_0xf8a39c=>{const _0x3da785=_0x4d2e06,{msg:_0x5c1ce2,sender:_0x4d1223,senderId:_0x27a782,timestamp:_0x347f5d}=_0xf8a39c[_0x3da785(0x1b6)](),_0x3de2bd=_0x27a782===clientId;addMessage(_0x5c1ce2,_0x4d1223,_0x347f5d,_0x3de2bd),roomCode!==STATIC_ROOM&&db[_0x3da785(0x221)]('rooms/'+roomCode+_0x3da785(0x1b1)+_0xf8a39c[_0x3da785(0x232)])[_0x3da785(0x22e)](),!_0x3de2bd&&(sound[_0x3da785(0x1e6)](),flagPageAttention());});}function addMessage(_0xfbf9f0,_0x4aba51,_0x597a3e,_0x3131e){const _0x4a86c5=_0x2a8546,_0x3f0ed2=document[_0x4a86c5(0x1eb)](_0x4a86c5(0x1c6));_0x3f0ed2[_0x4a86c5(0x23f)]['add'](_0x4a86c5(0x205),_0x3131e?_0x4a86c5(0x1c3):_0x4a86c5(0x1bc));const _0x1e19b3=new Date(_0x597a3e)[_0x4a86c5(0x1fa)]([],{'hour':_0x4a86c5(0x203),'minute':_0x4a86c5(0x203)});_0x3f0ed2[_0x4a86c5(0x227)]=_0x4a86c5(0x1c7)+_0x4aba51+_0x4a86c5(0x21d)+_0xfbf9f0+_0x4a86c5(0x1ce)+_0x1e19b3+_0x4a86c5(0x21e);const _0x21b3c2=document['getElementById'](_0x4a86c5(0x1b3));_0x21b3c2[_0x4a86c5(0x218)](_0x3f0ed2),_0x21b3c2[_0x4a86c5(0x1e4)]=_0x21b3c2[_0x4a86c5(0x1e5)];}function closeProfile(){const _0xc8fdbc=_0x2a8546;document[_0xc8fdbc(0x1ca)](_0xc8fdbc(0x1ec))[_0xc8fdbc(0x1b0)]['display']=_0xc8fdbc(0x222);}function cleanupOldRooms(){const _0x38c353=_0x2a8546;db[_0x38c353(0x221)](_0x38c353(0x22a))[_0x38c353(0x1bb)](_0x38c353(0x22f))[_0x38c353(0x21c)](_0x52fcfd=>{const _0x2a80b3=_0x38c353,_0x111e7c=_0x52fcfd['val']();if(!_0x111e7c)return;const _0x400f01=Date[_0x2a80b3(0x1c5)]();for(const _0xe543de in _0x111e7c){if(_0xe543de===STATIC_ROOM)continue;const _0x96ccf1=_0x111e7c[_0xe543de];_0x400f01-(_0x96ccf1['created']||0x0)>0x2*0x3c*0x3e8&&db[_0x2a80b3(0x221)]('rooms/'+_0xe543de)[_0x2a80b3(0x22e)]();}db['ref'](_0x2a80b3(0x1fc))[_0x2a80b3(0x1bb)](_0x2a80b3(0x22f))[_0x2a80b3(0x21c)](_0x4eab7f=>{const _0x211e5b=_0x2a80b3,_0x441faa=_0x4eab7f['val']();if(!_0x441faa)return;for(const _0x103ee9 in _0x441faa){if(_0x103ee9!==STATIC_ROOM)db[_0x211e5b(0x221)](_0x211e5b(0x248)+_0x103ee9)['remove']();}}),db[_0x2a80b3(0x221)](_0x2a80b3(0x23a))['once'](_0x2a80b3(0x22f))['then'](_0x3e9305=>{const _0x4ca561=_0x2a80b3,_0x4a889a=_0x3e9305[_0x4ca561(0x1b6)]();if(!_0x4a889a)return;for(const _0x59d96c in _0x4a889a){if(_0x59d96c!==STATIC_ROOM)db[_0x4ca561(0x221)](_0x4ca561(0x1e3)+_0x59d96c)[_0x4ca561(0x22e)]();}});});}document['addEventListener'](_0x2a8546(0x1d7),()=>{const _0xa45ca2=_0x2a8546,_0x610278=document[_0xa45ca2(0x1ca)]('msgInput');_0x610278&&_0x610278[_0xa45ca2(0x233)](_0xa45ca2(0x1c1),function(_0xa607cb){const _0x4e2189=_0xa45ca2;_0xa607cb[_0x4e2189(0x232)]==='Enter'&&(_0xa607cb[_0x4e2189(0x211)](),sendMessage());});});function showScreen(_0x564962){const _0x468326=_0x2a8546;[_0x468326(0x1ef),_0x468326(0x1f4),'codeEntryScreen',_0x468326(0x1d0),_0x468326(0x22d),_0x468326(0x21f)][_0x468326(0x1e1)](_0x201888=>{const _0x4ad220=_0x468326;document[_0x4ad220(0x1ca)](_0x201888)['style']['display']='none';}),document[_0x468326(0x1ca)](_0x564962)[_0x468326(0x1b0)]['display']=_0x468326(0x1dc);}function genRoomCode(){const _0x1b092b=_0x2a8546,_0x401842='ABCDEFGHIJKLMNOPQRSTUVWXYZ',_0x3ad82f=_0x1b092b(0x224),_0x4e2695=(_0x1d1f7f,_0x6f29ab)=>Array['from']({'length':_0x6f29ab},()=>_0x1d1f7f[Math['floor'](Math[_0x1b092b(0x216)]()*_0x1d1f7f[_0x1b092b(0x208)])])[_0x1b092b(0x204)]('');return _0x4e2695(_0x3ad82f,0x3)+_0x4e2695(_0x401842,0x3)+_0x4e2695(_0x3ad82f,0x2)+_0x4e2695(_0x401842,0x2);}function startInactivityTimer(){setInterval(()=>{const _0x20fdbb=_0x4e8d;Date[_0x20fdbb(0x1c5)]()-lastActivity>0x5*0x3c*0x3e8&&roomCode!==STATIC_ROOM&&(db[_0x20fdbb(0x221)](_0x20fdbb(0x210)+roomCode)['update']({'active':![]}),alert(_0x20fdbb(0x228)),location['reload']());},0x7530);}function setupSidebarBackHandler(){const _0x478691=_0x2a8546;window[_0x478691(0x233)](_0x478691(0x1cc),()=>{const _0x1b2628=_0x478691,_0x31cf5=document['getElementById'](_0x1b2628(0x223));_0x31cf5?.[_0x1b2628(0x23f)]['contains'](_0x1b2628(0x20e))&&_0x31cf5[_0x1b2628(0x23f)][_0x1b2628(0x22e)](_0x1b2628(0x20e));});}function toggleSidebar(){const _0x5d8131=_0x2a8546,_0x46bb5b=document[_0x5d8131(0x1ca)](_0x5d8131(0x223));if(!_0x46bb5b[_0x5d8131(0x23f)][_0x5d8131(0x212)](_0x5d8131(0x20e)))_0x46bb5b[_0x5d8131(0x23f)][_0x5d8131(0x1b9)](_0x5d8131(0x20e)),history['pushState']({'sidebarOpen':!![]},'');else{_0x46bb5b['classList'][_0x5d8131(0x22e)](_0x5d8131(0x20e));if(history[_0x5d8131(0x1b5)]?.['sidebarOpen'])history[_0x5d8131(0x247)]();}}function setupVisibilityAttention(){const _0x6b3078=_0x2a8546;let _0x5d7cae=0x0,_0x491ea4=document[_0x6b3078(0x1cf)];document[_0x6b3078(0x233)](_0x6b3078(0x1d6),()=>{const _0x5205c3=_0x6b3078;!document[_0x5205c3(0x235)]&&(document['title']=_0x491ea4,_0x5d7cae=0x0);}),window[_0x6b3078(0x1b7)]=function(){const _0x21ea98=_0x6b3078;document[_0x21ea98(0x235)]&&(_0x5d7cae++,document[_0x21ea98(0x1cf)]='('+_0x5d7cae+_0x21ea98(0x217)+_0x491ea4);};}function tryEditProfile(){const _0x5d1c99=_0x2a8546,_0x38b3e8=sanitizeUsername(username);db[_0x5d1c99(0x221)](_0x5d1c99(0x207)+_0x38b3e8)[_0x5d1c99(0x1ba)]()[_0x5d1c99(0x21c)](_0x42d2d5=>{const _0x46cbb1=_0x5d1c99,_0x5bbd8e=_0x42d2d5[_0x46cbb1(0x1b6)]();if(!_0x5bbd8e)return alert('Profile\x20not\x20found.');const _0x121815=_0x5bbd8e['lastChanged']||0x0,_0x55042b=Date[_0x46cbb1(0x1c5)](),_0x4aff0e=0x18*0x3c*0x3c*0x3e8;if(_0x55042b-_0x121815<_0x4aff0e){const _0xa9a803=Math['ceil']((_0x4aff0e-(_0x55042b-_0x121815))/(0x3c*0x3e8));alert(_0x46cbb1(0x240)+_0xa9a803+_0x46cbb1(0x1dd));}else showScreen(_0x46cbb1(0x21f)),document['getElementById'](_0x46cbb1(0x1bd))['value']=username,document[_0x46cbb1(0x1ca)](_0x46cbb1(0x1d4))[_0x46cbb1(0x22f)]=_0x5bbd8e[_0x46cbb1(0x1c2)]||'';});}function listenForUserList(){const _0x29a4ed=_0x2a8546;db[_0x29a4ed(0x221)](_0x29a4ed(0x1fd)+roomCode)['on'](_0x29a4ed(0x22f),_0x17ba12=>{const _0x3f0079=_0x29a4ed,_0x4cd8f3=_0x17ba12[_0x3f0079(0x1b6)]()||{},_0x5c4bad=Date[_0x3f0079(0x1c5)](),_0x4487d1=Object[_0x3f0079(0x20b)](_0x4cd8f3)[_0x3f0079(0x243)](_0x505aa4=>{const _0x558e88=_0x3f0079,_0x276410=_0x505aa4[_0x558e88(0x23c)],_0x4136c1=_0x5c4bad-_0x505aa4['lastOnline']<=0x1e*0x3c*0x3e8;if(!_0x276410&&!_0x4136c1)return'';const _0x59b1ef=_0x276410?_0x558e88(0x1f5):_0x558e88(0x1f7),_0x4d616c=_0x276410?'🟢':'🕒',_0x45e21c=new Date(_0x505aa4['lastOnline'])[_0x558e88(0x1fa)]([],{'hour':_0x558e88(0x203),'minute':_0x558e88(0x203)});return _0x558e88(0x1b4)+_0x59b1ef+_0x558e88(0x1f2)+sanitizeUsername(_0x505aa4[_0x558e88(0x1e8)])+_0x558e88(0x1da)+_0x4d616c+'\x20'+_0x505aa4[_0x558e88(0x1e8)]+_0x558e88(0x1d8);})[_0x3f0079(0x204)]('');document[_0x3f0079(0x1ca)]('userList')[_0x3f0079(0x227)]=_0x4487d1;});}function _0x5339(){const _0x41f00c=['then','</span><br>','</small>','profileScreen','36ZjJogD','ref','none','userSidebar','0123456789','33WpGQjR','https://notificationsounds.com/notification-sounds/eventually-590/download/mp3','innerHTML','Session\x20expired.','92177mwyQSy','rooms','\x0aLast\x20Changed:\x20','AIzaSyBhfQ1Wf5JEy6sOU4ExXboRI4Ir4y_aKZw','passwordScreen','remove','value','28aWsOhB','No\x20room\x20code\x20available\x20for\x20private\x20rooms','key','addEventListener','1534088VjhQbo','hidden','senderId','gr8stg','\x0aHistory:\x0a','update','antispamBlocked','replace','online','15477940JPGDJZ','6056400kaRoVy','classList','You\x20can\x20change\x20your\x20profile\x20again\x20in\x20','orderByChild','onload','map','set','G-QDESJ2WR42','child_added','back','antispam/','profileContent','\x20typing...','🚫\x20You\x27ve\x20been\x20blocked\x20for\x2030\x20seconds\x20due\x20to\x20spamming.','s\x20due\x20to\x20spam.\x20Please\x20wait.','style','/messages/','namePreview','messages','<li\x20style=\x22color:','state','val','flagPageAttention','limitToLast','add','get','once','received','profileUsernameInput','easy-chatroom.firebaseapp.com','chat_username','database','keypress','description','sent','volume','now','div','<span\x20class=\x22sender-name\x22>','active','/typing/','getElementById','985049198428','popstate','441852CuMklG','<small>','title','chatScreen','Missing\x20room\x20or\x20user\x20information.','toUpperCase','/messages','profileDescriptionInput','innerText','visibilitychange','DOMContentLoaded','</li>','050BBB66HH','\x27)\x22>','Room\x20doesn\x27t\x20exist\x20or\x20is\x20inactive.','flex','\x20minutes.','1208571fBQEFO','toLocaleString','\x0a\x20\x20\x20\x20','forEach','profile_description','antispamBlocked/','scrollTop','scrollHeight','play','ceil','username','msgInput','easy-chatroom','createElement','profileViewer','TIMESTAMP','usernameHistory','usernameScreen','5657336OSbTBu','119PoiTQz',';cursor:pointer;\x22\x20onclick=\x22viewProfile(\x27','roomCodeInput','roomChoiceScreen','#00ff88','Please\x20enter\x20a\x20valid\x20name','#888','Enter\x20a\x20valid\x20room\x20code','⛔\x20You\x27re\x20blocked\x20for\x20','toLocaleTimeString','passwordError','antispam','users/','\x0aName:\x20','usernameInput','block','setItem','display','2-digit','join','msg','toString','profiles/','length','staticPasswordInput','getItem','values','equalTo','child','show','Please\x20enter\x20both\x20a\x20username\x20and\x20a\x20description.','rooms/','preventDefault','contains','trim','exists','roomDisplay','random',')\x20New\x20message\x20•\x20','appendChild','push','https://easy-chatroom-default-rtdb.firebaseio.com','filter'];_0x5339=function(){return _0x41f00c;};return _0x5339();}function sendTyping(_0x118bc1=![]){const _0x1d250e=_0x2a8546,_0x66fe3b='rooms/'+roomCode+_0x1d250e(0x1c9)+clientId;_0x118bc1?db['ref'](_0x66fe3b)[_0x1d250e(0x22e)]():(db[_0x1d250e(0x221)](_0x66fe3b)[_0x1d250e(0x244)](username),clearTimeout(typingTimeout),typingTimeout=setTimeout(()=>{const _0x1d7cdc=_0x1d250e;db[_0x1d7cdc(0x221)](_0x66fe3b)[_0x1d7cdc(0x22e)]();},0xbb8));}function listenForTyping(){const _0x3a6284=_0x2a8546,_0xc0994a=document[_0x3a6284(0x1ca)]('typing');db[_0x3a6284(0x221)]('rooms/'+roomCode+'/typing')['on']('value',_0x456f8d=>{const _0xd4bea=_0x3a6284,_0x1173cb=_0x456f8d[_0xd4bea(0x1b6)]();if(!_0x1173cb)return _0xc0994a[_0xd4bea(0x1d5)]='';const _0x397300=Object[_0xd4bea(0x20b)](_0x1173cb)[_0xd4bea(0x21b)](_0x12b9ce=>_0x12b9ce!==username);_0xc0994a[_0xd4bea(0x1d5)]=_0x397300[_0xd4bea(0x208)]?_0x397300[_0xd4bea(0x204)](',\x20')+_0xd4bea(0x1ad):'';});}function trackPresence(){const _0x4a7f6f=_0x2a8546;if(!username||!roomCode)return;const _0x3c652c=sanitizeUsername(username),_0x2040da=db['ref'](_0x4a7f6f(0x1fd)+roomCode+'/'+_0x3c652c),_0x61773a={'username':username,'lastOnline':firebase[_0x4a7f6f(0x1c0)]['ServerValue'][_0x4a7f6f(0x1ed)],'online':!![]};_0x2040da[_0x4a7f6f(0x244)](_0x61773a),_0x2040da['onDisconnect']()[_0x4a7f6f(0x239)]({'online':![],'lastOnline':Date[_0x4a7f6f(0x1c5)]()});}function viewProfile(_0x151168){const _0x6de13d=_0x2a8546;db[_0x6de13d(0x221)](_0x6de13d(0x207)+_0x151168)[_0x6de13d(0x1ba)]()[_0x6de13d(0x21c)](_0x1aff51=>{const _0x1e63cb=_0x6de13d;if(!_0x1aff51[_0x1e63cb(0x214)]())return;const _0x573e09=_0x1aff51[_0x1e63cb(0x1b6)](),_0x22e5d4=(_0x1e63cb(0x1fe)+_0x573e09[_0x1e63cb(0x1e8)]+'\x0aDescription:\x20'+(_0x573e09['description']||'No\x20bio\x20set')+_0x1e63cb(0x238)+(_0x573e09['usernameHistory']||[])[_0x1e63cb(0x204)]('\x0a')+_0x1e63cb(0x22b)+new Date(_0x573e09['lastChanged'])[_0x1e63cb(0x1df)]()+_0x1e63cb(0x1e0))[_0x1e63cb(0x213)]();document['getElementById'](_0x1e63cb(0x249))[_0x1e63cb(0x1d5)]=_0x22e5d4,document[_0x1e63cb(0x1ca)](_0x1e63cb(0x1ec))['style'][_0x1e63cb(0x202)]=_0x1e63cb(0x200);});}function initUsernameFlow(){const _0x3c510b=_0x2a8546,_0x424dab=localStorage[_0x3c510b(0x20a)](_0x3c510b(0x1bf));!_0x424dab?showScreen(_0x3c510b(0x21f)):(username=_0x424dab,document[_0x3c510b(0x1ca)]('namePreview')['innerText']=username,showScreen(_0x3c510b(0x1f4)));}