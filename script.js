const _0x43b8dd=_0x250a;(function(_0x3eab17,_0x2d8fb8){const _0x4e6507=_0x250a,_0x56346b=_0x3eab17();while(!![]){try{const _0x4a6fc0=-parseInt(_0x4e6507(0x1d8))/0x1+-parseInt(_0x4e6507(0x228))/0x2+parseInt(_0x4e6507(0x20b))/0x3+parseInt(_0x4e6507(0x243))/0x4+-parseInt(_0x4e6507(0x229))/0x5*(-parseInt(_0x4e6507(0x1d1))/0x6)+-parseInt(_0x4e6507(0x206))/0x7*(-parseInt(_0x4e6507(0x1d3))/0x8)+parseInt(_0x4e6507(0x1c7))/0x9*(-parseInt(_0x4e6507(0x218))/0xa);if(_0x4a6fc0===_0x2d8fb8)break;else _0x56346b['push'](_0x56346b['shift']());}catch(_0x230d0a){_0x56346b['push'](_0x56346b['shift']());}}}(_0x4ea1,0x7a84b));const firebaseConfig={'apiKey':_0x43b8dd(0x21f),'authDomain':'easy-chatroom.firebaseapp.com','databaseURL':_0x43b8dd(0x249),'projectId':_0x43b8dd(0x245),'storageBucket':'easy-chatroom.firebasestorage.app','messagingSenderId':_0x43b8dd(0x1e9),'appId':_0x43b8dd(0x1bb),'measurementId':_0x43b8dd(0x1c0)};function _0x4ea1(){const _0x1c2118=['once','imageBase64','setItem','back','messages','active','<li\x20style=\x22color:','limitToLast','trim','<small>','querySelector','ServerValue','codeEntryScreen','</li>','add','key','innerHTML','2107EohsoT','update','Profile\x20not\x20found.','❌\x20Username\x20already\x20taken.','profileError','1281720kHVsxz','\x22\x20style=\x22width:100%;\x20max-width:100%;\x20margin-top:5px;\x22></audio>','Session\x20expired.','roomDisplay','hidden','values','button','profile_description','equalTo','passwordError','createElement','keypress','ref','22910IZTetD','\x0aDescription:\x20','Admins\x20only.','passwordScreen','s\x20due\x20to\x20spam.\x20Please\x20wait.','flex','random','AIzaSyBhfQ1Wf5JEy6sOU4ExXboRI4Ir4y_aKZw','classList','preventDefault','get','remove','muted/','length','👤\x20','antispam/','1248282rNaPWP','605wzQfnd','filter','Missing\x20room\x20or\x20user\x20information.','2-digit','usernameHistory','start','antispamBlocked/','change','\x0aName:\x20','050BBB66HH','/messages/','<span\x20class=\x22sender-name\x22>','onDisconnect','<audio\x20controls\x20src=\x22','now','</small>','onstop','sounds/beep.mp3','admins/','lastOnline','No\x20room\x20code\x20available\x20for\x20private\x20rooms','block','title','username','initializeApp','⛔\x20You\x27re\x20blocked\x20for\x20','3823392iGolqA','namePreview','easy-chatroom','scrollHeight','style','chatScreen','https://easy-chatroom-default-rtdb.firebaseio.com','audioBase64','replace','recordBtn','admin','flagPageAttention','exists','gr8stg','roomCodeInput','getUserMedia','.sender-name','color','display','then','\x20<span\x20style=\x22color:red;font-weight:bold;\x22>Admin</span>','/messages','imageInput','roomChoiceScreen','\x22\x20style=\x22width:24px;height:24px;border-radius:50%;margin-right:5px;\x22>','toLocaleString','TIMESTAMP','userList','staticPasswordInput','database','avatarBase64','<img\x20src=\x22data:image/png;base64,','msgInput','\x27)\x22>','none','toUpperCase','profileScreen','online','users/','Failed\x20to\x20register\x20user\x20in\x20room.','profileAvatarInput','stop','profileContent','set','chat_username','typing','antispam','addEventListener','play','toString','reload','sent','contains','\x20·\x20✓✓</small>','result','1:985049198428:web:d0eb7e2de39887710c9b99','sidebarOpen','antispamBlocked','split','rooms/','G-QDESJ2WR42','Please\x20enter\x20both\x20a\x20username\x20and\x20a\x20description.','You\x20can\x20change\x20your\x20profile\x20again\x20in\x20','usernameScreen','volume','join','profiles/','2169ZWDlxH','No\x20bio\x20set','onloadend','lastChanged','[Voice\x20message]','getElementById','\x22\x20style=\x22max-width:100%;margin-top:5px;border-radius:10px;\x22\x20/>','files','userDisplay','forEach','3390phXVxk','\x0aHistory:\x0a','25352NySaIJ','val','Microphone\x20permission\x20denied.','value','mediaDevices','727215jjaIGS','userSidebar','Room\x20doesn\x27t\x20exist\x20or\x20is\x20inactive.','Delete\x20this\x20message?','toLocaleTimeString','</span><br>','#00ff88','🎙️','innerText','div','push','ceil','profileUsernameInput','description','profileViewer','floor','show','985049198428','created','\x20typing...',';cursor:pointer;\x22\x20onclick=\x22viewProfile(\x27','substr','senderId','data:image/png;base64,','cssText','child_added','state','ABCDEFGHIJKLMNOPQRSTUVWXYZ','DOMContentLoaded'];_0x4ea1=function(){return _0x1c2118;};return _0x4ea1();}firebase[_0x43b8dd(0x241)](firebaseConfig);const db=firebase['database']();let messageTimestamps=[],isBlocked=![],username=null,roomCode=null,clientId='_'+Math[_0x43b8dd(0x21e)]()[_0x43b8dd(0x274)](0x24)[_0x43b8dd(0x1ed)](0x2,0x9),lastActivity=Date['now'](),typingTimeout,gr8stg='';const STATIC_ROOM=_0x43b8dd(0x232),MAX_MESSAGES=0xfa,sound=new Audio(_0x43b8dd(0x23a));sound[_0x43b8dd(0x1c4)]=0.3;let mediaRecorder,audioChunks=[],isRecording=![],recordingTimer,isRoomAdmin=![];function checkIfAdmin(){const _0x4f508e=_0x43b8dd,_0x233c21=db[_0x4f508e(0x217)](_0x4f508e(0x23b)+roomCode+'/'+sanitizeUsername(username));return _0x233c21[_0x4f508e(0x1f5)](_0x4f508e(0x1d6))['then'](_0x252018=>{const _0x17a347=_0x4f508e;isRoomAdmin=_0x252018[_0x17a347(0x24f)]();});}function toggleRecording(){const _0x26e682=_0x43b8dd;isRecording?stopRecording():navigator[_0x26e682(0x1d7)][_0x26e682(0x252)]({'audio':!![]})[_0x26e682(0x256)](_0x5d43a7=>{const _0x179af4=_0x26e682;mediaRecorder=new MediaRecorder(_0x5d43a7),mediaRecorder[_0x179af4(0x22e)](),isRecording=!![],document[_0x179af4(0x1cc)](_0x179af4(0x24c))[_0x179af4(0x1e0)]='⏹️',audioChunks=[],mediaRecorder['ondataavailable']=_0x267bd2=>audioChunks[_0x179af4(0x1e2)](_0x267bd2['data']),mediaRecorder[_0x179af4(0x239)]=()=>{const _0x2a7167=_0x179af4;clearTimeout(recordingTimer);const _0x52efb2=new Blob(audioChunks,{'type':'audio/webm'}),_0xfccf0=new FileReader();_0xfccf0[_0x2a7167(0x1c9)]=()=>{const _0x5f28f1=_0x2a7167,_0x3dc100=_0xfccf0['result'][_0x5f28f1(0x1be)](',')[0x1],_0x5eff9c=db[_0x5f28f1(0x217)]()[_0x5f28f1(0x1e2)]()[_0x5f28f1(0x204)];db[_0x5f28f1(0x217)](_0x5f28f1(0x1bf)+roomCode+_0x5f28f1(0x233)+_0x5eff9c)[_0x5f28f1(0x26e)]({'msg':_0x5f28f1(0x1cb),'audioBase64':_0x3dc100,'sender':username,'senderId':clientId,'timestamp':Date[_0x5f28f1(0x237)]()});},_0xfccf0['readAsDataURL'](_0x52efb2);},recordingTimer=setTimeout(()=>{mediaRecorder&&isRecording&&stopRecording();},0x4e20);})['catch'](_0x505dcd=>{const _0x6e3d06=_0x26e682;alert(_0x6e3d06(0x1d5));});}function stopRecording(){const _0x478d31=_0x43b8dd;mediaRecorder&&isRecording&&(mediaRecorder[_0x478d31(0x26c)](),isRecording=![],document[_0x478d31(0x1cc)]('recordBtn')['innerText']=_0x478d31(0x1df));}window['onload']=()=>{cleanupOldRooms(),setupSidebarBackHandler(),initUsernameFlow(),setupVisibilityAttention();};function sanitizeUsername(_0x1c775d){const _0x55ab7d=_0x43b8dd;return _0x1c775d[_0x55ab7d(0x24b)](/[.#$\[\]]/g,'_');}function submitProfile(){const _0x1f0584=_0x43b8dd,_0x32ea5d=document[_0x1f0584(0x1cc)](_0x1f0584(0x1e4))[_0x1f0584(0x1d6)][_0x1f0584(0x1fd)](),_0x3201d5=document[_0x1f0584(0x1cc)]('profileDescriptionInput')[_0x1f0584(0x1d6)][_0x1f0584(0x1fd)](),_0x316a15=document[_0x1f0584(0x1cc)](_0x1f0584(0x26b)),_0xf55174=document[_0x1f0584(0x1cc)](_0x1f0584(0x20a));if(!_0x32ea5d||!_0x3201d5){_0xf55174[_0x1f0584(0x1e0)]=_0x1f0584(0x1c1),_0xf55174[_0x1f0584(0x247)][_0x1f0584(0x255)]=_0x1f0584(0x23e);return;}const _0xbadf8e=sanitizeUsername(_0x32ea5d),_0x4a1cd7=db[_0x1f0584(0x217)](_0x1f0584(0x1c6)+_0xbadf8e);_0x4a1cd7[_0x1f0584(0x1f5)]('value')[_0x1f0584(0x256)](_0x5a345a=>{const _0x52a28b=_0x1f0584;if(_0x5a345a[_0x52a28b(0x24f)]()){_0xf55174[_0x52a28b(0x1e0)]=_0x52a28b(0x209),_0xf55174[_0x52a28b(0x247)][_0x52a28b(0x255)]=_0x52a28b(0x23e);return;}let _0x8083cd='';if(_0x316a15['files'][_0x52a28b(0x225)]>0x0){const _0x10e5f2=new FileReader();_0x10e5f2[_0x52a28b(0x1c9)]=()=>{const _0x57232a=_0x52a28b;_0x8083cd=_0x10e5f2[_0x57232a(0x1ba)]['split'](',')[0x1],saveProfile(_0x32ea5d,_0x3201d5,_0x8083cd,_0xbadf8e);},_0x10e5f2['readAsDataURL'](_0x316a15[_0x52a28b(0x1ce)][0x0]);}else saveProfile(_0x32ea5d,_0x3201d5,_0x8083cd,_0xbadf8e);});}function saveProfile(_0x2f792c,_0x285ca5,_0x357d63,_0x2ddbb7){const _0x2f016c=_0x43b8dd,_0x1fcf01=Date[_0x2f016c(0x237)](),_0x36e4ca=[_0x2f792c];db[_0x2f016c(0x217)](_0x2f016c(0x1c6)+_0x2ddbb7)[_0x2f016c(0x26e)]({'username':_0x2f792c,'description':_0x285ca5,'avatarBase64':_0x357d63,'lastChanged':_0x1fcf01,'usernameHistory':_0x36e4ca}),localStorage[_0x2f016c(0x1f7)](_0x2f016c(0x26f),_0x2f792c),localStorage[_0x2f016c(0x1f7)](_0x2f016c(0x212),_0x285ca5),document[_0x2f016c(0x1cc)]('namePreview')[_0x2f016c(0x1e0)]=_0x2f792c,showScreen(_0x2f016c(0x25a));}function generateRoom(){const _0x14785d=_0x43b8dd;roomCode=genRoomCode(),db['ref'](_0x14785d(0x1bf)+roomCode)[_0x14785d(0x26e)]({'active':!![],'created':Date[_0x14785d(0x237)]()}),startChat();}function joinRoom(){const _0x511adb=_0x43b8dd,_0x2ccff9=roomCode||document[_0x511adb(0x1cc)](_0x511adb(0x251))['value'][_0x511adb(0x1fd)]()[_0x511adb(0x266)]();if(!_0x2ccff9)return alert('Enter\x20a\x20valid\x20room\x20code');roomCode=_0x2ccff9;if(roomCode===STATIC_ROOM){showScreen(_0x511adb(0x21b));return;}db[_0x511adb(0x217)](_0x511adb(0x1bf)+roomCode)[_0x511adb(0x222)]()[_0x511adb(0x256)](_0xc4d495=>{const _0x58fd93=_0x511adb;_0xc4d495[_0x58fd93(0x24f)]()&&_0xc4d495[_0x58fd93(0x1d4)]()[_0x58fd93(0x1fa)]!==![]?startChat():alert(_0x58fd93(0x1da));});}function startChat(){const _0x2998b3=_0x43b8dd;if(!roomCode||!username)return alert(_0x2998b3(0x22b)),showScreen(_0x2998b3(0x25a));checkIfAdmin()[_0x2998b3(0x256)](()=>{const _0xb1d78e=_0x2998b3,_0x2e8bca=sanitizeUsername(username),_0x3749c9=db[_0xb1d78e(0x217)](_0xb1d78e(0x269)+roomCode+'/'+_0x2e8bca),_0x24bb64={'username':username,'lastOnline':firebase[_0xb1d78e(0x260)][_0xb1d78e(0x200)]['TIMESTAMP'],'online':!![]};db['ref'](_0xb1d78e(0x23b)+roomCode+'/'+_0x2e8bca)[_0xb1d78e(0x1f5)](_0xb1d78e(0x1d6))['then'](_0x511757=>{const _0x2bf153=_0xb1d78e;_0x511757[_0x2bf153(0x24f)]()&&(_0x24bb64['admin']=!![]),_0x3749c9[_0x2bf153(0x26e)](_0x24bb64,_0x3f9bdc=>{const _0x54d5e7=_0x2bf153;if(_0x3f9bdc)return alert(_0x54d5e7(0x26a)),showScreen(_0x54d5e7(0x25a));_0x3749c9[_0x54d5e7(0x235)]()[_0x54d5e7(0x207)]({'online':![],'lastOnline':Date[_0x54d5e7(0x237)]()}),document[_0x54d5e7(0x1cc)](_0x54d5e7(0x1cf))[_0x54d5e7(0x1e0)]=username,roomCode===STATIC_ROOM?document['getElementById'](_0x54d5e7(0x20e))[_0x54d5e7(0x1e0)]=_0x54d5e7(0x23d):document[_0x54d5e7(0x1cc)](_0x54d5e7(0x20e))[_0x54d5e7(0x1e0)]=roomCode,showScreen(_0x54d5e7(0x248)),listenForMessages(),listenForTyping(),startInactivityTimer(),trackPresence(),listenForUserList();});});});}function validateStaticRoomPassword(){const _0x14c71e=_0x43b8dd,_0x389425=document[_0x14c71e(0x1cc)](_0x14c71e(0x25f))[_0x14c71e(0x1d6)],_0x205026=document[_0x14c71e(0x1cc)](_0x14c71e(0x214));db[_0x14c71e(0x217)](_0x14c71e(0x250))[_0x14c71e(0x222)]()[_0x14c71e(0x256)](_0xcc84db=>{const _0x30aca2=_0x14c71e,_0x2b479d=_0xcc84db['val']();_0x389425===_0x2b479d?(_0x205026[_0x30aca2(0x247)][_0x30aca2(0x255)]='none',startChat()):_0x205026[_0x30aca2(0x247)][_0x30aca2(0x255)]='block';});}document[_0x43b8dd(0x1cc)](_0x43b8dd(0x259))[_0x43b8dd(0x272)](_0x43b8dd(0x230),function(){const _0x4edfdd=_0x43b8dd,_0x45ea9d=this['files'][0x0];if(!_0x45ea9d)return;const _0x4bffb0=new FileReader();_0x4bffb0[_0x4edfdd(0x1c9)]=function(){const _0x12a7a1=_0x4edfdd,_0x5bd533=_0x4bffb0[_0x12a7a1(0x1ba)][_0x12a7a1(0x1be)](',')[0x1],_0x5899b7=db[_0x12a7a1(0x217)]()[_0x12a7a1(0x1e2)]()[_0x12a7a1(0x204)];db[_0x12a7a1(0x217)](_0x12a7a1(0x1bf)+roomCode+_0x12a7a1(0x233)+_0x5899b7)['set']({'msg':'[Image]','imageBase64':_0x5bd533,'sender':username,'senderId':clientId,'timestamp':Date[_0x12a7a1(0x237)]()});},_0x4bffb0['readAsDataURL'](_0x45ea9d);});function sendMessage(){const _0x1fca38=_0x43b8dd,_0x27aa30=document['getElementById'](_0x1fca38(0x263)),_0xe87139=_0x27aa30[_0x1fca38(0x1d6)][_0x1fca38(0x1fd)]();if(!_0xe87139)return;const _0x1569d2=Date[_0x1fca38(0x237)](),_0x48b67f=sanitizeUsername(username);db[_0x1fca38(0x217)](_0x1fca38(0x22f)+roomCode+'/'+_0x48b67f)[_0x1fca38(0x1f5)]('value')[_0x1fca38(0x256)](_0x13b11d=>{const _0x10c95d=_0x1fca38,_0x2f3300=_0x13b11d['val']();if(_0x2f3300&&_0x1569d2<_0x2f3300){const _0x36d96d=Math[_0x10c95d(0x1e3)]((_0x2f3300-_0x1569d2)/0x3e8);alert(_0x10c95d(0x242)+_0x36d96d+_0x10c95d(0x21c));return;}const _0x3705be=db[_0x10c95d(0x217)](_0x10c95d(0x224)+roomCode+'/'+sanitizeUsername(username));_0x3705be[_0x10c95d(0x1f5)](_0x10c95d(0x1d6))[_0x10c95d(0x256)](_0x1ae4d5=>{const _0x2c6882=_0x10c95d,_0x4e9b7b=_0x1ae4d5['val']();if(_0x4e9b7b&&Date[_0x2c6882(0x237)]()<_0x4e9b7b){const _0x132405=Math[_0x2c6882(0x1e3)]((_0x4e9b7b-Date[_0x2c6882(0x237)]())/0x3e8);return alert('You\x27re\x20muted\x20for\x20another\x20'+_0x132405+'\x20seconds.');}});const _0x130003=db[_0x10c95d(0x217)]('antispam/'+roomCode+'/'+_0x48b67f);_0x130003[_0x10c95d(0x1f5)](_0x10c95d(0x1d6))[_0x10c95d(0x256)](_0x2fc1fc=>{const _0x57f582=_0x10c95d,_0x26f583=_0x2fc1fc['val']()||[],_0x582acf=[..._0x26f583,_0x1569d2][_0x57f582(0x22a)](_0x5d51ba=>_0x1569d2-_0x5d51ba<0xbb8);if(_0x582acf[_0x57f582(0x225)]>=0x5){alert('🚫\x20You\x27ve\x20been\x20blocked\x20for\x2030\x20seconds\x20due\x20to\x20spamming.'),db[_0x57f582(0x217)]('antispamBlocked/'+roomCode+'/'+_0x48b67f)['set'](_0x1569d2+0x7530);const _0xd0527d=db[_0x57f582(0x217)](_0x57f582(0x1bf)+roomCode+_0x57f582(0x258));_0xd0527d['orderByChild'](_0x57f582(0x1ee))[_0x57f582(0x213)](clientId)['limitToLast'](0x5)[_0x57f582(0x1f5)](_0x57f582(0x1d6),_0x331e50=>{_0x331e50['forEach'](_0x3f8460=>{const _0x46cb21=_0x250a;_0xd0527d['child'](_0x3f8460[_0x46cb21(0x204)])[_0x46cb21(0x223)]();});}),_0x130003[_0x57f582(0x26e)]([]);return;}_0x130003['set'](_0x582acf);const _0xd4b7b8=db[_0x57f582(0x217)]()[_0x57f582(0x1e2)]()[_0x57f582(0x204)];db['ref'](_0x57f582(0x1bf)+roomCode+_0x57f582(0x233)+_0xd4b7b8)[_0x57f582(0x26e)]({'msg':_0xe87139,'sender':username,'senderId':clientId,'timestamp':_0x1569d2}),_0x27aa30['value']='',sendTyping(!![]),lastActivity=_0x1569d2;});});}function listenForMessages(){const _0x1c6b04=_0x43b8dd,_0x13f500=db[_0x1c6b04(0x217)](_0x1c6b04(0x1bf)+roomCode+'/messages'),_0x37403d=_0x13f500[_0x1c6b04(0x1fc)](MAX_MESSAGES);_0x37403d['on'](_0x1c6b04(0x1f1),_0xfe504f=>{const _0x518f24=_0x1c6b04,_0x167d5e=_0xfe504f[_0x518f24(0x1d4)](),{msg:_0x43fd11,sender:_0x3c641b,senderId:_0x165908,timestamp:_0x2fb1ec}=_0x167d5e,_0x52e609=_0x165908===clientId,_0x4dada1=_0x167d5e['audioUrl']||null,_0x57b8fb=_0x167d5e[_0x518f24(0x24a)]||null;addMessage(_0x43fd11,_0x3c641b,_0x2fb1ec,_0x52e609,_0x4dada1,_0x57b8fb),roomCode!==STATIC_ROOM&&db[_0x518f24(0x217)](_0x518f24(0x1bf)+roomCode+_0x518f24(0x233)+_0xfe504f[_0x518f24(0x204)])[_0x518f24(0x223)](),!_0x52e609&&(sound[_0x518f24(0x273)](),flagPageAttention());});}function addMessage(_0x47168b,_0x528422,_0xdf4fa4,_0x110aef,_0x48803c=null,_0xb717e=null){const _0x3cc1f5=_0x43b8dd,_0x3d9cbc=document[_0x3cc1f5(0x215)](_0x3cc1f5(0x1e1));_0x3d9cbc[_0x3cc1f5(0x220)][_0x3cc1f5(0x203)]('msg',_0x110aef?_0x3cc1f5(0x1b7):'received');const _0xfddbeb=new Date(_0xdf4fa4)['toLocaleTimeString']([],{'hour':_0x3cc1f5(0x22c),'minute':'2-digit'});let _0xa141df='';if(_0x528422&&roomCode){const _0x5a5957=db[_0x3cc1f5(0x217)]('admins/'+roomCode+'/'+sanitizeUsername(_0x528422));_0x5a5957['once']('value')[_0x3cc1f5(0x256)](_0x18596f=>{const _0x259d81=_0x3cc1f5;_0x18596f[_0x259d81(0x24f)]()&&(_0x3d9cbc[_0x259d81(0x1ff)](_0x259d81(0x253))['innerHTML']+=_0x259d81(0x257));});}let _0x1e6448=_0x3cc1f5(0x234)+_0x528422+_0x3cc1f5(0x1dd);_0x110aef?_0x1e6448+=_0x3cc1f5(0x1fe)+_0xfddbeb+_0x3cc1f5(0x1b9):_0x1e6448+=_0x3cc1f5(0x1fe)+_0xfddbeb+_0x3cc1f5(0x238);!_0x48803c&&!_0xb717e&&(_0x47168b=_0x47168b[_0x3cc1f5(0x24b)](new RegExp('@'+username+'\x5cb','gi'),'<span\x20style=\x22color:#ff4081;\x22>@$&</span>'));if(_0x48803c)_0x1e6448+=_0x3cc1f5(0x236)+_0x48803c+_0x3cc1f5(0x20c);else{if(_0xb717e){const _0x25020a='data:audio/webm;base64,'+_0xb717e;_0x1e6448+='<audio\x20controls\x20src=\x22'+_0x25020a+_0x3cc1f5(0x20c);}else{if(data['imageBase64']){const _0x460890=_0x3cc1f5(0x1ef)+data[_0x3cc1f5(0x1f6)];_0x1e6448+='<img\x20src=\x22'+_0x460890+_0x3cc1f5(0x1cd);}else _0x1e6448+=_0x47168b;}}_0x1e6448+=_0x3cc1f5(0x1fe)+_0xfddbeb+'</small>',_0x3d9cbc[_0x3cc1f5(0x205)]=_0x1e6448;const _0x170b0e=document[_0x3cc1f5(0x1cc)](_0x3cc1f5(0x1f9));_0x170b0e['appendChild'](_0x3d9cbc);if(isRoomAdmin){const _0x3d1cb3=document[_0x3cc1f5(0x215)](_0x3cc1f5(0x211));_0x3d1cb3[_0x3cc1f5(0x1e0)]='🗑️',_0x3d1cb3[_0x3cc1f5(0x247)][_0x3cc1f5(0x1f0)]='margin-left:5px;background:none;border:none;color:red;cursor:pointer;',_0x3d1cb3['onclick']=()=>{const _0x150bb1=_0x3cc1f5;confirm(_0x150bb1(0x1db))&&(db['ref'](_0x150bb1(0x1bf)+roomCode+_0x150bb1(0x233)+snap[_0x150bb1(0x204)])[_0x150bb1(0x223)](),_0x3d9cbc[_0x150bb1(0x223)]());},_0x3d9cbc['appendChild'](_0x3d1cb3);}_0x170b0e['scrollTop']=_0x170b0e[_0x3cc1f5(0x246)];}function cleanupOldRooms(){const _0x2d0a4b=_0x43b8dd;db[_0x2d0a4b(0x217)]('rooms')[_0x2d0a4b(0x1f5)](_0x2d0a4b(0x1d6))[_0x2d0a4b(0x256)](_0x5b121a=>{const _0x57f098=_0x2d0a4b,_0x4d7ddf=_0x5b121a['val']();if(!_0x4d7ddf)return;const _0x47e3b8=Date[_0x57f098(0x237)]();for(const _0x3a8567 in _0x4d7ddf){if(_0x3a8567===STATIC_ROOM)continue;const _0x51156d=_0x4d7ddf[_0x3a8567];_0x47e3b8-(_0x51156d[_0x57f098(0x1ea)]||0x0)>0x2*0x3c*0x3e8&&db['ref'](_0x57f098(0x1bf)+_0x3a8567)['remove']();}db[_0x57f098(0x217)](_0x57f098(0x271))[_0x57f098(0x1f5)](_0x57f098(0x1d6))['then'](_0xb1c035=>{const _0x394e9a=_0x57f098,_0x8225b3=_0xb1c035[_0x394e9a(0x1d4)]();if(!_0x8225b3)return;for(const _0x57a257 in _0x8225b3){if(_0x57a257!==STATIC_ROOM)db[_0x394e9a(0x217)](_0x394e9a(0x227)+_0x57a257)[_0x394e9a(0x223)]();}}),db[_0x57f098(0x217)](_0x57f098(0x1bd))[_0x57f098(0x1f5)]('value')[_0x57f098(0x256)](_0x15298a=>{const _0x543f3b=_0x57f098,_0x3217a9=_0x15298a[_0x543f3b(0x1d4)]();if(!_0x3217a9)return;for(const _0x5b1bee in _0x3217a9){if(_0x5b1bee!==STATIC_ROOM)db[_0x543f3b(0x217)]('antispamBlocked/'+_0x5b1bee)[_0x543f3b(0x223)]();}});});}document['addEventListener'](_0x43b8dd(0x1f4),()=>{const _0x8ac225=_0x43b8dd,_0x5e1b0e=document[_0x8ac225(0x1cc)](_0x8ac225(0x263));_0x5e1b0e&&_0x5e1b0e['addEventListener'](_0x8ac225(0x216),function(_0x5b19c9){const _0x3a42e4=_0x8ac225;_0x5b19c9['key']==='Enter'&&(_0x5b19c9[_0x3a42e4(0x221)](),sendMessage());});});function showScreen(_0x3de43b){const _0x46c5ec=_0x43b8dd;[_0x46c5ec(0x1c3),_0x46c5ec(0x25a),_0x46c5ec(0x201),_0x46c5ec(0x248),_0x46c5ec(0x21b),_0x46c5ec(0x267)][_0x46c5ec(0x1d0)](_0x43e152=>{const _0x5ebfba=_0x46c5ec;document['getElementById'](_0x43e152)['style'][_0x5ebfba(0x255)]=_0x5ebfba(0x265);}),document[_0x46c5ec(0x1cc)](_0x3de43b)['style'][_0x46c5ec(0x255)]=_0x46c5ec(0x21d);}function genRoomCode(){const _0x4ca55d=_0x43b8dd,_0x10548f=_0x4ca55d(0x1f3),_0x35e01d='0123456789',_0x23b326=(_0x5c835c,_0x586072)=>Array['from']({'length':_0x586072},()=>_0x5c835c[Math[_0x4ca55d(0x1e7)](Math[_0x4ca55d(0x21e)]()*_0x5c835c[_0x4ca55d(0x225)])])[_0x4ca55d(0x1c5)]('');return _0x23b326(_0x35e01d,0x3)+_0x23b326(_0x10548f,0x3)+_0x23b326(_0x35e01d,0x2)+_0x23b326(_0x10548f,0x2);}function startInactivityTimer(){setInterval(()=>{const _0x2d2a19=_0x250a;Date[_0x2d2a19(0x237)]()-lastActivity>0x5*0x3c*0x3e8&&roomCode!==STATIC_ROOM&&(db[_0x2d2a19(0x217)](_0x2d2a19(0x1bf)+roomCode)['update']({'active':![]}),alert(_0x2d2a19(0x20d)),location[_0x2d2a19(0x275)]());},0x7530);}function setupSidebarBackHandler(){const _0x56bb87=_0x43b8dd;window[_0x56bb87(0x272)]('popstate',()=>{const _0x55d368=_0x56bb87,_0x4f6dbc=document[_0x55d368(0x1cc)](_0x55d368(0x1d9));_0x4f6dbc?.[_0x55d368(0x220)][_0x55d368(0x1b8)](_0x55d368(0x1e8))&&_0x4f6dbc[_0x55d368(0x220)]['remove'](_0x55d368(0x1e8));});}function toggleSidebar(){const _0x41527d=_0x43b8dd,_0x7e9a31=document[_0x41527d(0x1cc)](_0x41527d(0x1d9));if(!_0x7e9a31[_0x41527d(0x220)][_0x41527d(0x1b8)]('show'))_0x7e9a31[_0x41527d(0x220)][_0x41527d(0x203)](_0x41527d(0x1e8)),history['pushState']({'sidebarOpen':!![]},'');else{_0x7e9a31['classList'][_0x41527d(0x223)](_0x41527d(0x1e8));if(history[_0x41527d(0x1f2)]?.[_0x41527d(0x1bc)])history[_0x41527d(0x1f8)]();}}function setupVisibilityAttention(){const _0x248ec3=_0x43b8dd;let _0x138465=0x0,_0x3a7722=document['title'];document[_0x248ec3(0x272)]('visibilitychange',()=>{const _0x329782=_0x248ec3;!document[_0x329782(0x20f)]&&(document[_0x329782(0x23f)]=_0x3a7722,_0x138465=0x0);}),window[_0x248ec3(0x24e)]=function(){const _0x1136c3=_0x248ec3;document[_0x1136c3(0x20f)]&&(_0x138465++,document[_0x1136c3(0x23f)]='('+_0x138465+')\x20New\x20message\x20•\x20'+_0x3a7722);};}function tryEditProfile(){const _0x5cb35f=_0x43b8dd,_0xc0fdfc=sanitizeUsername(username);db[_0x5cb35f(0x217)](_0x5cb35f(0x1c6)+_0xc0fdfc)[_0x5cb35f(0x222)]()['then'](_0x1aff83=>{const _0x193b36=_0x5cb35f,_0x5e03cb=_0x1aff83[_0x193b36(0x1d4)]();if(!_0x5e03cb)return alert(_0x193b36(0x208));const _0x2e5d10=_0x5e03cb[_0x193b36(0x1ca)]||0x0,_0x2db1bf=Date['now'](),_0x550808=0x18*0x3c*0x3c*0x3e8;if(_0x2db1bf-_0x2e5d10<_0x550808){const _0x509bc5=Math[_0x193b36(0x1e3)]((_0x550808-(_0x2db1bf-_0x2e5d10))/(0x3c*0x3e8));alert(_0x193b36(0x1c2)+_0x509bc5+'\x20minutes.');}else showScreen(_0x193b36(0x267)),document[_0x193b36(0x1cc)](_0x193b36(0x1e4))[_0x193b36(0x1d6)]=username,document[_0x193b36(0x1cc)]('profileDescriptionInput')[_0x193b36(0x1d6)]=_0x5e03cb[_0x193b36(0x1e5)]||'';});}function listenForUserList(){const _0x132d05=_0x43b8dd;db[_0x132d05(0x217)](_0x132d05(0x269)+roomCode)['on'](_0x132d05(0x1d6),_0x39902a=>{const _0x718a0d=_0x132d05,_0x2c74dd=_0x39902a[_0x718a0d(0x1d4)]()||{},_0x168619=Date[_0x718a0d(0x237)](),_0x1f285f=Object[_0x718a0d(0x210)](_0x2c74dd)['map'](_0x53a98f=>{const _0x55a81e=_0x718a0d,_0xd13458=_0x53a98f[_0x55a81e(0x268)],_0x35bc1c=_0x168619-_0x53a98f[_0x55a81e(0x23c)]<=0x1e*0x3c*0x3e8;if(!_0xd13458&&!_0x35bc1c)return'';const _0x519c37=_0x53a98f[_0x55a81e(0x261)]?_0x55a81e(0x262)+_0x53a98f['avatarBase64']+_0x55a81e(0x25b):_0x55a81e(0x226),_0x4e245f=_0xd13458?_0x55a81e(0x1de):'#888',_0x1808b7=_0xd13458?'🟢':'🕒',_0x391dd1=new Date(_0x53a98f[_0x55a81e(0x23c)])[_0x55a81e(0x1dc)]([],{'hour':_0x55a81e(0x22c),'minute':_0x55a81e(0x22c)}),_0x11b162=_0x53a98f[_0x55a81e(0x24d)]?'\x20<span\x20style=\x22color:red;\x22>Admin</span>':'';return _0x55a81e(0x1fb)+_0x4e245f+_0x55a81e(0x1ec)+sanitizeUsername(_0x53a98f[_0x55a81e(0x240)])+_0x55a81e(0x264)+_0x519c37+_0x1808b7+'\x20'+_0x53a98f[_0x55a81e(0x240)]+_0x11b162+_0x55a81e(0x202);})[_0x718a0d(0x1c5)]('');document[_0x718a0d(0x1cc)](_0x718a0d(0x25e))[_0x718a0d(0x205)]=_0x1f285f;});}function sendTyping(_0x5d5137=![]){const _0x4fe609=_0x43b8dd,_0x1daf73=_0x4fe609(0x1bf)+roomCode+'/typing/'+clientId;_0x5d5137?db['ref'](_0x1daf73)[_0x4fe609(0x223)]():(db[_0x4fe609(0x217)](_0x1daf73)[_0x4fe609(0x26e)](username),clearTimeout(typingTimeout),typingTimeout=setTimeout(()=>{const _0x1dfef2=_0x4fe609;db[_0x1dfef2(0x217)](_0x1daf73)[_0x1dfef2(0x223)]();},0xbb8));}function listenForTyping(){const _0x2e8009=_0x43b8dd,_0x2cfa13=document[_0x2e8009(0x1cc)](_0x2e8009(0x270));db[_0x2e8009(0x217)](_0x2e8009(0x1bf)+roomCode+'/typing')['on'](_0x2e8009(0x1d6),_0x228246=>{const _0x4accd7=_0x2e8009,_0x4f68e0=_0x228246[_0x4accd7(0x1d4)]();if(!_0x4f68e0)return _0x2cfa13[_0x4accd7(0x1e0)]='';const _0x11fc1c=Object['values'](_0x4f68e0)[_0x4accd7(0x22a)](_0x18cd49=>_0x18cd49!==username);_0x2cfa13['innerText']=_0x11fc1c['length']?_0x11fc1c[_0x4accd7(0x1c5)](',\x20')+_0x4accd7(0x1eb):'';});}function trackPresence(){const _0x5ecc31=_0x43b8dd;if(!username||!roomCode)return;const _0x13d5a3=sanitizeUsername(username),_0x44e194=db[_0x5ecc31(0x217)](_0x5ecc31(0x269)+roomCode+'/'+_0x13d5a3),_0x2efb9b={'username':username,'lastOnline':firebase[_0x5ecc31(0x260)][_0x5ecc31(0x200)][_0x5ecc31(0x25d)],'online':!![]};db[_0x5ecc31(0x217)](_0x5ecc31(0x23b)+roomCode+'/'+_0x13d5a3)[_0x5ecc31(0x1f5)](_0x5ecc31(0x1d6))[_0x5ecc31(0x256)](_0x1c1094=>{const _0x60a8ca=_0x5ecc31;if(_0x1c1094['exists']())_0x2efb9b[_0x60a8ca(0x24d)]=!![];_0x44e194[_0x60a8ca(0x26e)](_0x2efb9b),_0x44e194[_0x60a8ca(0x235)]()['update']({'online':![],'lastOnline':Date['now']()}),updateOnlineIndicator();});}function muteUser(_0x1552ca,_0x12fffd){const _0x29306c=_0x43b8dd;if(!isRoomAdmin)return alert(_0x29306c(0x21a));const _0x3c9f9a=Date[_0x29306c(0x237)]()+_0x12fffd*0x3c*0x3e8;db[_0x29306c(0x217)](_0x29306c(0x224)+roomCode+'/'+sanitizeUsername(_0x1552ca))[_0x29306c(0x26e)](_0x3c9f9a);}function unmuteUser(_0x524b61){const _0x260c2f=_0x43b8dd;if(!isRoomAdmin)return alert('Admins\x20only.');db[_0x260c2f(0x217)](_0x260c2f(0x224)+roomCode+'/'+sanitizeUsername(_0x524b61))[_0x260c2f(0x223)]();}function _0x250a(_0x564181,_0x5ed67e){const _0x4ea1ae=_0x4ea1();return _0x250a=function(_0x250a9a,_0x4ca709){_0x250a9a=_0x250a9a-0x1b7;let _0x149be6=_0x4ea1ae[_0x250a9a];return _0x149be6;},_0x250a(_0x564181,_0x5ed67e);}function updateOnlineIndicator(){const _0x5336ee=_0x43b8dd,_0x5ab634=document['getElementById']('onlineStatus');_0x5ab634[_0x5336ee(0x1e0)]='●\x20Online',_0x5ab634[_0x5336ee(0x247)][_0x5336ee(0x254)]='#00ff88';}setInterval(updateOnlineIndicator,0xbb8);function viewProfile(_0x2f88ac){const _0x1805e4=_0x43b8dd;db['ref'](_0x1805e4(0x1c6)+_0x2f88ac)['get']()['then'](_0x5370b3=>{const _0x1cdf98=_0x1805e4;if(!_0x5370b3[_0x1cdf98(0x24f)]())return;const _0x372a8a=_0x5370b3[_0x1cdf98(0x1d4)](),_0x12bbb1=(_0x1cdf98(0x231)+_0x372a8a[_0x1cdf98(0x240)]+_0x1cdf98(0x219)+(_0x372a8a['description']||_0x1cdf98(0x1c8))+_0x1cdf98(0x1d2)+(_0x372a8a[_0x1cdf98(0x22d)]||[])[_0x1cdf98(0x1c5)]('\x0a')+'\x0aLast\x20Changed:\x20'+new Date(_0x372a8a['lastChanged'])[_0x1cdf98(0x25c)]()+'\x0a\x20\x20\x20\x20')[_0x1cdf98(0x1fd)]();document[_0x1cdf98(0x1cc)](_0x1cdf98(0x26d))[_0x1cdf98(0x1e0)]=_0x12bbb1,document[_0x1cdf98(0x1cc)]('profileViewer')[_0x1cdf98(0x247)][_0x1cdf98(0x255)]=_0x1cdf98(0x23e);});}function initUsernameFlow(){const _0x12c4ec=_0x43b8dd,_0x5cfd82=localStorage['getItem']('chat_username');!_0x5cfd82?showScreen(_0x12c4ec(0x267)):(username=_0x5cfd82,document['getElementById'](_0x12c4ec(0x244))['innerText']=username,showScreen(_0x12c4ec(0x25a)));}function closeProfile(){const _0x1fa794=_0x43b8dd;document[_0x1fa794(0x1cc)](_0x1fa794(0x1e6))[_0x1fa794(0x247)][_0x1fa794(0x255)]=_0x1fa794(0x265);}