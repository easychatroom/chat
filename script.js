const _0xfeda97=_0x528e;(function(_0x206ff9,_0x2ce894){const _0x3447e3=_0x528e,_0x42e401=_0x206ff9();while(!![]){try{const _0x29d1b6=parseInt(_0x3447e3(0x1b7))/0x1*(-parseInt(_0x3447e3(0x236))/0x2)+parseInt(_0x3447e3(0x235))/0x3+-parseInt(_0x3447e3(0x1d5))/0x4*(parseInt(_0x3447e3(0x203))/0x5)+-parseInt(_0x3447e3(0x1fd))/0x6*(-parseInt(_0x3447e3(0x20f))/0x7)+-parseInt(_0x3447e3(0x196))/0x8+parseInt(_0x3447e3(0x239))/0x9+-parseInt(_0x3447e3(0x1ba))/0xa*(-parseInt(_0x3447e3(0x1dd))/0xb);if(_0x29d1b6===_0x2ce894)break;else _0x42e401['push'](_0x42e401['shift']());}catch(_0x1913f7){_0x42e401['push'](_0x42e401['shift']());}}}(_0xb1bd,0x3a102));const firebaseConfig={'apiKey':_0xfeda97(0x1cc),'authDomain':_0xfeda97(0x1c1),'databaseURL':_0xfeda97(0x1c3),'projectId':_0xfeda97(0x1a8),'storageBucket':'easy-chatroom.firebasestorage.app','messagingSenderId':_0xfeda97(0x1d7),'appId':_0xfeda97(0x1f5),'measurementId':_0xfeda97(0x19b)};firebase[_0xfeda97(0x21c)](firebaseConfig);const db=firebase[_0xfeda97(0x19c)]();let messageTimestamps=[],isBlocked=![],username=null,roomCode=null,clientId='_'+Math[_0xfeda97(0x214)]()[_0xfeda97(0x1c8)](0x24)[_0xfeda97(0x1dc)](0x2,0x9),lastActivity=Date[_0xfeda97(0x1bd)](),typingTimeout,gr8stg='';const STATIC_ROOM=_0xfeda97(0x19d),MAX_MESSAGES=0x1f4,sound=new Audio(_0xfeda97(0x218));sound['volume']=0.3;let mediaRecorder,audioChunks=[],isRecording=![],recordingTimer;function toggleRecording(){const _0x5ba156=_0xfeda97;isRecording?stopRecording():navigator[_0x5ba156(0x1f4)][_0x5ba156(0x1db)]({'audio':!![]})['then'](_0x5a95dd=>{const _0x5bf5a1=_0x5ba156;mediaRecorder=new MediaRecorder(_0x5a95dd),mediaRecorder[_0x5bf5a1(0x243)](),isRecording=!![],document['getElementById'](_0x5bf5a1(0x1f6))[_0x5bf5a1(0x231)]='⏹️',audioChunks=[],mediaRecorder[_0x5bf5a1(0x1b2)]=_0x4544f0=>audioChunks[_0x5bf5a1(0x20e)](_0x4544f0[_0x5bf5a1(0x1e2)]),mediaRecorder[_0x5bf5a1(0x201)]=()=>{const _0x2ac966=_0x5bf5a1;clearTimeout(recordingTimer);const _0x47f560=new Blob(audioChunks,{'type':_0x2ac966(0x1ee)}),_0x526ea1=_0x2ac966(0x1b5)+Date[_0x2ac966(0x1bd)]()+_0x2ac966(0x20c),_0x14c41b=firebase[_0x2ac966(0x228)]()[_0x2ac966(0x207)](_0x2ac966(0x22b)+roomCode+'/'+_0x526ea1);_0x14c41b[_0x2ac966(0x20a)](_0x47f560)[_0x2ac966(0x230)](()=>{const _0xcd4a7d=_0x2ac966;_0x14c41b[_0xcd4a7d(0x1e0)]()['then'](_0x484153=>{const _0x212c1f=_0xcd4a7d,_0x2ffc5a=db[_0x212c1f(0x207)]()[_0x212c1f(0x20e)]()['key'];db[_0x212c1f(0x207)](_0x212c1f(0x1e6)+roomCode+_0x212c1f(0x198)+_0x2ffc5a)[_0x212c1f(0x1ab)]({'msg':'[Voice\x20message]','audioUrl':_0x484153,'sender':username,'senderId':clientId,'timestamp':Date[_0x212c1f(0x1bd)]()});});});},recordingTimer=setTimeout(()=>{mediaRecorder&&isRecording&&stopRecording();},0x4e20);})[_0x5ba156(0x1e1)](_0x57a494=>{const _0x24a3b1=_0x5ba156;alert(_0x24a3b1(0x197));});}function stopRecording(){const _0x845409=_0xfeda97;mediaRecorder&&isRecording&&(mediaRecorder[_0x845409(0x1e4)](),isRecording=![],document[_0x845409(0x1d8)]('recordBtn')['innerText']=_0x845409(0x22c));}window[_0xfeda97(0x1a3)]=()=>{cleanupOldRooms(),setupSidebarBackHandler(),initUsernameFlow(),setupVisibilityAttention();};function sanitizeUsername(_0x433667){const _0x55f945=_0xfeda97;return _0x433667[_0x55f945(0x212)](/[.#$\[\]]/g,'_');}function submitProfile(){const _0x2f6c99=_0xfeda97,_0x4d6b34=document[_0x2f6c99(0x1d8)]('profileUsernameInput')[_0x2f6c99(0x224)][_0x2f6c99(0x23f)](),_0x20466c=document[_0x2f6c99(0x1d8)](_0x2f6c99(0x222))[_0x2f6c99(0x224)][_0x2f6c99(0x23f)](),_0x20fa05=document[_0x2f6c99(0x1d8)](_0x2f6c99(0x1b4));if(!_0x4d6b34||!_0x20466c){_0x20fa05[_0x2f6c99(0x231)]=_0x2f6c99(0x1ea),_0x20fa05[_0x2f6c99(0x1af)][_0x2f6c99(0x208)]=_0x2f6c99(0x1a1);return;}_0x20fa05[_0x2f6c99(0x1af)][_0x2f6c99(0x208)]=_0x2f6c99(0x220),username=_0x4d6b34;const _0x75a80e=Date[_0x2f6c99(0x1bd)](),_0x2d7a12=sanitizeUsername(_0x4d6b34),_0x7c11df=db[_0x2f6c99(0x207)](_0x2f6c99(0x1ca)+_0x2d7a12);_0x7c11df[_0x2f6c99(0x1f2)]()[_0x2f6c99(0x230)](_0x1af3b2=>{const _0x356f68=_0x2f6c99,_0x2bb28a=_0x1af3b2[_0x356f68(0x1d0)]()||{},_0x2edf1e=_0x2bb28a['usernameHistory']||[];if(!_0x2edf1e['includes'](_0x4d6b34))_0x2edf1e[_0x356f68(0x20e)](_0x4d6b34);_0x7c11df[_0x356f68(0x1ab)]({'username':_0x4d6b34,'description':_0x20466c,'lastChanged':_0x75a80e,'usernameHistory':_0x2edf1e}),localStorage['setItem'](_0x356f68(0x19e),_0x4d6b34),localStorage[_0x356f68(0x1e9)](_0x356f68(0x21f),_0x20466c),document[_0x356f68(0x1d8)](_0x356f68(0x23e))[_0x356f68(0x231)]=username,showScreen(_0x356f68(0x1e3));});}function saveUsername(){const _0x4281e9=_0xfeda97,_0x37b779=document['getElementById'](_0x4281e9(0x1d3))[_0x4281e9(0x224)][_0x4281e9(0x23f)]();if(!_0x37b779)return alert('Please\x20enter\x20a\x20valid\x20name');username=_0x37b779,localStorage['setItem'](_0x4281e9(0x19e),username),initUsernameFlow();}function generateRoom(){const _0x149721=_0xfeda97;roomCode=genRoomCode(),db[_0x149721(0x207)](_0x149721(0x1e6)+roomCode)[_0x149721(0x1ab)]({'active':!![],'created':Date[_0x149721(0x1bd)]()}),startChat();}function joinRoom(){const _0xbd80d4=_0xfeda97,_0x3eba42=roomCode||document[_0xbd80d4(0x1d8)](_0xbd80d4(0x22a))[_0xbd80d4(0x224)][_0xbd80d4(0x23f)]()['toUpperCase']();if(!_0x3eba42)return alert(_0xbd80d4(0x1ed));roomCode=_0x3eba42;if(roomCode===STATIC_ROOM){showScreen(_0xbd80d4(0x1cb));return;}db[_0xbd80d4(0x207)](_0xbd80d4(0x1e6)+roomCode)['get']()['then'](_0x141594=>{const _0x34d5af=_0xbd80d4;_0x141594[_0x34d5af(0x1cd)]()&&_0x141594['val']()['active']!==![]?startChat():alert(_0x34d5af(0x229));});}function startChat(){const _0x19fcc5=_0xfeda97;if(!roomCode||!username)return alert(_0x19fcc5(0x237)),showScreen(_0x19fcc5(0x1e3));showScreen(_0x19fcc5(0x1f3)),document[_0x19fcc5(0x1d8)](_0x19fcc5(0x22e))['innerText']=username,(roomCode=_0x19fcc5(0x19d))?document['getElementById']('roomDisplay')['innerText']=_0x19fcc5(0x23d):document['getElementById'](_0x19fcc5(0x1eb))[_0x19fcc5(0x231)]=roomCode,listenForMessages(),listenForTyping(),startInactivityTimer(),trackPresence(),listenForUserList();}function validateStaticRoomPassword(){const _0x369baa=_0xfeda97,_0xe6c06c=document['getElementById'](_0x369baa(0x1b1))[_0x369baa(0x224)],_0x494b93=document[_0x369baa(0x1d8)]('passwordError');db[_0x369baa(0x207)]('gr8stg')[_0x369baa(0x1f2)]()[_0x369baa(0x230)](_0x2be64c=>{const _0x408700=_0x369baa,_0x82f5ee=_0x2be64c['val']();_0xe6c06c===_0x82f5ee?(_0x494b93[_0x408700(0x1af)][_0x408700(0x208)]=_0x408700(0x220),startChat()):_0x494b93[_0x408700(0x1af)][_0x408700(0x208)]=_0x408700(0x1a1);});}function sendMessage(){const _0x44bc05=_0xfeda97,_0x5e2f2b=document[_0x44bc05(0x1d8)](_0x44bc05(0x21b)),_0x4aefcc=_0x5e2f2b['value']['trim']();if(!_0x4aefcc)return;const _0x3a02d2=Date[_0x44bc05(0x1bd)](),_0x197dda=sanitizeUsername(username);db[_0x44bc05(0x207)](_0x44bc05(0x213)+roomCode+'/'+_0x197dda)[_0x44bc05(0x22f)](_0x44bc05(0x224))['then'](_0x158ad8=>{const _0x3acc49=_0x44bc05,_0x1db51d=_0x158ad8[_0x3acc49(0x1d0)]();if(_0x1db51d&&_0x3a02d2<_0x1db51d){const _0x52b161=Math[_0x3acc49(0x1c9)]((_0x1db51d-_0x3a02d2)/0x3e8);alert('⛔\x20You\x27re\x20blocked\x20for\x20'+_0x52b161+_0x3acc49(0x23b));return;}const _0x2d0e9b=db[_0x3acc49(0x207)](_0x3acc49(0x219)+roomCode+'/'+_0x197dda);_0x2d0e9b[_0x3acc49(0x22f)](_0x3acc49(0x224))[_0x3acc49(0x230)](_0x3713ce=>{const _0x1f3a71=_0x3acc49,_0x576b31=_0x3713ce[_0x1f3a71(0x1d0)]()||[],_0x18cd95=[..._0x576b31,_0x3a02d2][_0x1f3a71(0x211)](_0x25446c=>_0x3a02d2-_0x25446c<0xbb8);if(_0x18cd95[_0x1f3a71(0x1ad)]>=0x5){alert(_0x1f3a71(0x206)),db[_0x1f3a71(0x207)](_0x1f3a71(0x213)+roomCode+'/'+_0x197dda)[_0x1f3a71(0x1ab)](_0x3a02d2+0x7530);const _0x3bc505=db[_0x1f3a71(0x207)](_0x1f3a71(0x1e6)+roomCode+_0x1f3a71(0x19f));_0x3bc505[_0x1f3a71(0x1b3)](_0x1f3a71(0x200))[_0x1f3a71(0x22d)](clientId)[_0x1f3a71(0x19a)](0x5)[_0x1f3a71(0x22f)](_0x1f3a71(0x224),_0x5dee5f=>{_0x5dee5f['forEach'](_0x43aead=>{const _0x44e34d=_0x528e;_0x3bc505['child'](_0x43aead[_0x44e34d(0x232)])[_0x44e34d(0x1a4)]();});}),_0x2d0e9b[_0x1f3a71(0x1ab)]([]);return;}_0x2d0e9b[_0x1f3a71(0x1ab)](_0x18cd95);const _0x17ca04=db[_0x1f3a71(0x207)]()[_0x1f3a71(0x20e)]()[_0x1f3a71(0x232)];db[_0x1f3a71(0x207)]('rooms/'+roomCode+_0x1f3a71(0x198)+_0x17ca04)[_0x1f3a71(0x1ab)]({'msg':_0x4aefcc,'sender':username,'senderId':clientId,'timestamp':_0x3a02d2}),_0x5e2f2b[_0x1f3a71(0x224)]='',sendTyping(!![]),lastActivity=_0x3a02d2;});});}function listenForMessages(){const _0x27f253=_0xfeda97,_0x17bf87=db[_0x27f253(0x207)](_0x27f253(0x1e6)+roomCode+_0x27f253(0x19f)),_0x4eede9=_0x17bf87[_0x27f253(0x19a)](MAX_MESSAGES);_0x4eede9['on'](_0x27f253(0x227),_0xa4a464=>{const _0x4999a1=_0x27f253,{msg:_0x59fa28,sender:_0x4e78ec,senderId:_0x35d11c,timestamp:_0x249ef3}=_0xa4a464['val'](),_0x2738f8=_0x35d11c===clientId;addMessage(_0x59fa28,_0x4e78ec,_0x249ef3,_0x2738f8,_0xa4a464['val']()[_0x4999a1(0x245)]),roomCode!==STATIC_ROOM&&db['ref'](_0x4999a1(0x1e6)+roomCode+_0x4999a1(0x198)+_0xa4a464[_0x4999a1(0x232)])[_0x4999a1(0x1a4)](),!_0x2738f8&&(sound[_0x4999a1(0x210)](),flagPageAttention());});}function addMessage(_0x30eaf9,_0x3e91f9,_0x4f2146,_0x3ce75a,_0x1dcfee=null){const _0x30a134=_0xfeda97,_0x3829e1=document[_0x30a134(0x20b)](_0x30a134(0x1b9));_0x3829e1['classList']['add'](_0x30a134(0x225),_0x3ce75a?_0x30a134(0x202):_0x30a134(0x1b0));const _0x99392a=new Date(_0x4f2146)[_0x30a134(0x1a5)]([],{'hour':_0x30a134(0x1e8),'minute':_0x30a134(0x1e8)});let _0xbf3e9='<span\x20class=\x22sender-name\x22>'+_0x3e91f9+_0x30a134(0x1b6);_0x1dcfee?_0xbf3e9+=_0x30a134(0x1d1)+_0x1dcfee+_0x30a134(0x223):_0xbf3e9+=_0x30eaf9;_0xbf3e9+=_0x30a134(0x1c4)+_0x99392a+_0x30a134(0x244),_0x3829e1['innerHTML']=_0xbf3e9;const _0x336405=document[_0x30a134(0x1d8)](_0x30a134(0x1b8));_0x336405[_0x30a134(0x23c)](_0x3829e1),_0x336405[_0x30a134(0x1c6)]=_0x336405['scrollHeight'];}function _0xb1bd(){const _0x58c3c1=['show','put','createElement','.webm','Session\x20expired.','push','18235tVkwIU','play','filter','replace','antispamBlocked/','random','\x0aHistory:\x0a','forEach','Profile\x20not\x20found.','sounds/beep.mp3','antispam/','popstate','msgInput','initializeApp','sidebarOpen','back','profile_description','none','profileViewer','profileDescriptionInput','\x22\x20style=\x22width:100%;margin-top:5px;\x22></audio>','value','msg','usernameHistory','child_added','storage','Room\x20doesn\x27t\x20exist\x20or\x20is\x20inactive.','roomCodeInput','voices/','🎙️','equalTo','userDisplay','once','then','innerText','key','keypress','#00ff88','540594kpnPhJ','35324TMHUdA','Missing\x20room\x20or\x20user\x20information.',';cursor:pointer;\x22\x20onclick=\x22viewProfile(\x27','125937TkIbfV','/typing','s\x20due\x20to\x20spam.\x20Please\x20wait.','appendChild','No\x20room\x20code\x20available\x20for\x20private\x20rooms','namePreview','trim','ABCDEFGHIJKLMNOPQRSTUVWXYZ','\x27)\x22>','update','start','</small>','audioUrl','DOMContentLoaded','1407624TMjXOJ','Microphone\x20permission\x20denied.','/messages/','addEventListener','limitToLast','G-QDESJ2WR42','database','050BBB66HH','chat_username','/messages','Enter','block','description','onload','remove','toLocaleTimeString','profileUsernameInput','innerHTML','easy-chatroom','TIMESTAMP','state','set','\x20typing...','length','/typing/','style','received','staticPasswordInput','ondataavailable','orderByChild','profileError','voice_','</span><br>','13xTkJpH','messages','div','1830ttymgD','profileContent','\x0a\x20\x20\x20\x20','now','flagPageAttention','join','title','easy-chatroom.firebaseapp.com','username','https://easy-chatroom-default-rtdb.firebaseio.com','<small>','</li>','scrollTop','floor','toString','ceil','profiles/','passwordScreen','AIzaSyBhfQ1Wf5JEy6sOU4ExXboRI4Ir4y_aKZw','exists','lastOnline','ServerValue','val','<audio\x20controls\x20src=\x22','No\x20bio\x20set','usernameInput','contains','1065172IewbPz','rooms','985049198428','getElementById','users/','classList','getUserMedia','substr','14509iNUqDw','You\x20can\x20change\x20your\x20profile\x20again\x20in\x20','reload','getDownloadURL','catch','data','roomChoiceScreen','stop','#888','rooms/','toLocaleString','2-digit','setItem','Please\x20enter\x20both\x20a\x20username\x20and\x20a\x20description.','roomDisplay','antispam','Enter\x20a\x20valid\x20room\x20code','audio/webm','antispamBlocked','created','lastChanged','get','chatScreen','mediaDevices','1:985049198428:web:d0eb7e2de39887710c9b99','recordBtn','add','preventDefault','onDisconnect','values','userSidebar',')\x20New\x20message\x20•\x20','1092QonDkO','\x0aLast\x20Changed:\x20','online','senderId','onstop','sent','5udLMjq','\x0aDescription:\x20','hidden','🚫\x20You\x27ve\x20been\x20blocked\x20for\x2030\x20seconds\x20due\x20to\x20spamming.','ref','display'];_0xb1bd=function(){return _0x58c3c1;};return _0xb1bd();}function cleanupOldRooms(){const _0x3594af=_0xfeda97;db[_0x3594af(0x207)](_0x3594af(0x1d6))[_0x3594af(0x22f)](_0x3594af(0x224))[_0x3594af(0x230)](_0x2baf88=>{const _0x3944b3=_0x3594af,_0x67d48=_0x2baf88['val']();if(!_0x67d48)return;const _0x2bb751=Date[_0x3944b3(0x1bd)]();for(const _0x5e688d in _0x67d48){if(_0x5e688d===STATIC_ROOM)continue;const _0x11daed=_0x67d48[_0x5e688d];_0x2bb751-(_0x11daed[_0x3944b3(0x1f0)]||0x0)>0x2*0x3c*0x3e8&&db['ref'](_0x3944b3(0x1e6)+_0x5e688d)['remove']();}db[_0x3944b3(0x207)](_0x3944b3(0x1ec))[_0x3944b3(0x22f)](_0x3944b3(0x224))[_0x3944b3(0x230)](_0x34bc12=>{const _0x5caaff=_0x3944b3,_0x111219=_0x34bc12[_0x5caaff(0x1d0)]();if(!_0x111219)return;for(const _0x4d2e8d in _0x111219){if(_0x4d2e8d!==STATIC_ROOM)db[_0x5caaff(0x207)](_0x5caaff(0x219)+_0x4d2e8d)[_0x5caaff(0x1a4)]();}}),db['ref'](_0x3944b3(0x1ef))[_0x3944b3(0x22f)](_0x3944b3(0x224))['then'](_0x1d943=>{const _0x24b779=_0x3944b3,_0x4e347f=_0x1d943[_0x24b779(0x1d0)]();if(!_0x4e347f)return;for(const _0x1feb7d in _0x4e347f){if(_0x1feb7d!==STATIC_ROOM)db[_0x24b779(0x207)](_0x24b779(0x213)+_0x1feb7d)[_0x24b779(0x1a4)]();}});});}document[_0xfeda97(0x199)](_0xfeda97(0x246),()=>{const _0x37a84b=_0xfeda97,_0x2959ac=document['getElementById'](_0x37a84b(0x21b));_0x2959ac&&_0x2959ac[_0x37a84b(0x199)](_0x37a84b(0x233),function(_0x4b5575){const _0x4379cb=_0x37a84b;_0x4b5575[_0x4379cb(0x232)]===_0x4379cb(0x1a0)&&(_0x4b5575[_0x4379cb(0x1f8)](),sendMessage());});});function showScreen(_0x489813){const _0x4f0f87=_0xfeda97;['usernameScreen',_0x4f0f87(0x1e3),'codeEntryScreen',_0x4f0f87(0x1f3),_0x4f0f87(0x1cb),'profileScreen'][_0x4f0f87(0x216)](_0x251620=>{const _0x3844ae=_0x4f0f87;document[_0x3844ae(0x1d8)](_0x251620)[_0x3844ae(0x1af)][_0x3844ae(0x208)]=_0x3844ae(0x220);}),document['getElementById'](_0x489813)[_0x4f0f87(0x1af)][_0x4f0f87(0x208)]='flex';}function genRoomCode(){const _0x53e28a=_0xfeda97,_0x3a9b27=_0x53e28a(0x240),_0x445de1='0123456789',_0x50bebf=(_0x2d8f87,_0x116371)=>Array['from']({'length':_0x116371},()=>_0x2d8f87[Math[_0x53e28a(0x1c7)](Math['random']()*_0x2d8f87[_0x53e28a(0x1ad)])])[_0x53e28a(0x1bf)]('');return _0x50bebf(_0x445de1,0x3)+_0x50bebf(_0x3a9b27,0x3)+_0x50bebf(_0x445de1,0x2)+_0x50bebf(_0x3a9b27,0x2);}function startInactivityTimer(){setInterval(()=>{const _0x4ffb54=_0x528e;Date['now']()-lastActivity>0x5*0x3c*0x3e8&&roomCode!==STATIC_ROOM&&(db[_0x4ffb54(0x207)]('rooms/'+roomCode)[_0x4ffb54(0x242)]({'active':![]}),alert(_0x4ffb54(0x20d)),location[_0x4ffb54(0x1df)]());},0x7530);}function setupSidebarBackHandler(){const _0x2dbde7=_0xfeda97;window[_0x2dbde7(0x199)](_0x2dbde7(0x21a),()=>{const _0x2afd3e=_0x2dbde7,_0x897d1f=document[_0x2afd3e(0x1d8)](_0x2afd3e(0x1fb));_0x897d1f?.[_0x2afd3e(0x1da)]['contains'](_0x2afd3e(0x209))&&_0x897d1f['classList'][_0x2afd3e(0x1a4)](_0x2afd3e(0x209));});}function toggleSidebar(){const _0x16126b=_0xfeda97,_0x37f59d=document[_0x16126b(0x1d8)](_0x16126b(0x1fb));if(!_0x37f59d[_0x16126b(0x1da)][_0x16126b(0x1d4)](_0x16126b(0x209)))_0x37f59d[_0x16126b(0x1da)][_0x16126b(0x1f7)](_0x16126b(0x209)),history['pushState']({'sidebarOpen':!![]},'');else{_0x37f59d[_0x16126b(0x1da)][_0x16126b(0x1a4)](_0x16126b(0x209));if(history[_0x16126b(0x1aa)]?.[_0x16126b(0x21d)])history[_0x16126b(0x21e)]();}}function setupVisibilityAttention(){const _0x2c0557=_0xfeda97;let _0x337c40=0x0,_0x5c85ac=document['title'];document[_0x2c0557(0x199)]('visibilitychange',()=>{const _0x484baa=_0x2c0557;!document[_0x484baa(0x205)]&&(document[_0x484baa(0x1c0)]=_0x5c85ac,_0x337c40=0x0);}),window[_0x2c0557(0x1be)]=function(){const _0x2886dc=_0x2c0557;document[_0x2886dc(0x205)]&&(_0x337c40++,document['title']='('+_0x337c40+_0x2886dc(0x1fc)+_0x5c85ac);};}function _0x528e(_0x4c9a23,_0x2f6271){const _0xb1bdec=_0xb1bd();return _0x528e=function(_0x528e83,_0x494d8e){_0x528e83=_0x528e83-0x196;let _0x5d374a=_0xb1bdec[_0x528e83];return _0x5d374a;},_0x528e(_0x4c9a23,_0x2f6271);}function tryEditProfile(){const _0x33765e=_0xfeda97,_0x4cdc48=sanitizeUsername(username);db[_0x33765e(0x207)](_0x33765e(0x1ca)+_0x4cdc48)['get']()[_0x33765e(0x230)](_0xf743d5=>{const _0x4e5c09=_0x33765e,_0x18b80b=_0xf743d5[_0x4e5c09(0x1d0)]();if(!_0x18b80b)return alert(_0x4e5c09(0x217));const _0x48f3b5=_0x18b80b[_0x4e5c09(0x1f1)]||0x0,_0x389e45=Date['now'](),_0x2b2855=0x18*0x3c*0x3c*0x3e8;if(_0x389e45-_0x48f3b5<_0x2b2855){const _0x2e1678=Math[_0x4e5c09(0x1c9)]((_0x2b2855-(_0x389e45-_0x48f3b5))/(0x3c*0x3e8));alert(_0x4e5c09(0x1de)+_0x2e1678+'\x20minutes.');}else showScreen('profileScreen'),document[_0x4e5c09(0x1d8)](_0x4e5c09(0x1a6))[_0x4e5c09(0x224)]=username,document[_0x4e5c09(0x1d8)](_0x4e5c09(0x222))['value']=_0x18b80b[_0x4e5c09(0x1a2)]||'';});}function listenForUserList(){const _0x81b930=_0xfeda97;db[_0x81b930(0x207)]('users/'+roomCode)['on'](_0x81b930(0x224),_0x4f340b=>{const _0x10ccc6=_0x81b930,_0x16d81d=_0x4f340b['val']()||{},_0x3a0006=Date['now'](),_0x48a099=Object[_0x10ccc6(0x1fa)](_0x16d81d)['map'](_0x22553c=>{const _0x4f31e0=_0x10ccc6,_0x326f05=_0x22553c[_0x4f31e0(0x1ff)],_0x92d4aa=_0x3a0006-_0x22553c[_0x4f31e0(0x1ce)]<=0x1e*0x3c*0x3e8;if(!_0x326f05&&!_0x92d4aa)return'';const _0x116b28=_0x326f05?_0x4f31e0(0x234):_0x4f31e0(0x1e5),_0x32bfb5=_0x326f05?'🟢':'🕒',_0x2c6e36=new Date(_0x22553c[_0x4f31e0(0x1ce)])[_0x4f31e0(0x1a5)]([],{'hour':_0x4f31e0(0x1e8),'minute':_0x4f31e0(0x1e8)});return'<li\x20style=\x22color:'+_0x116b28+_0x4f31e0(0x238)+sanitizeUsername(_0x22553c['username'])+_0x4f31e0(0x241)+_0x32bfb5+'\x20'+_0x22553c[_0x4f31e0(0x1c2)]+_0x4f31e0(0x1c5);})[_0x10ccc6(0x1bf)]('');document[_0x10ccc6(0x1d8)]('userList')[_0x10ccc6(0x1a7)]=_0x48a099;});}function sendTyping(_0x488925=![]){const _0x169346=_0xfeda97,_0x4b1777=_0x169346(0x1e6)+roomCode+_0x169346(0x1ae)+clientId;_0x488925?db['ref'](_0x4b1777)['remove']():(db['ref'](_0x4b1777)[_0x169346(0x1ab)](username),clearTimeout(typingTimeout),typingTimeout=setTimeout(()=>{const _0x57671f=_0x169346;db[_0x57671f(0x207)](_0x4b1777)[_0x57671f(0x1a4)]();},0xbb8));}function listenForTyping(){const _0xecc93d=_0xfeda97,_0x574cea=document[_0xecc93d(0x1d8)]('typing');db[_0xecc93d(0x207)](_0xecc93d(0x1e6)+roomCode+_0xecc93d(0x23a))['on']('value',_0x25de5e=>{const _0x3475f1=_0xecc93d,_0x4bc0f3=_0x25de5e[_0x3475f1(0x1d0)]();if(!_0x4bc0f3)return _0x574cea['innerText']='';const _0x7037a7=Object[_0x3475f1(0x1fa)](_0x4bc0f3)['filter'](_0x22a727=>_0x22a727!==username);_0x574cea['innerText']=_0x7037a7['length']?_0x7037a7[_0x3475f1(0x1bf)](',\x20')+_0x3475f1(0x1ac):'';});}function trackPresence(){const _0x3b6f90=_0xfeda97;if(!username||!roomCode)return;const _0xd0e1f8=sanitizeUsername(username),_0x4b3fcb=db[_0x3b6f90(0x207)](_0x3b6f90(0x1d9)+roomCode+'/'+_0xd0e1f8),_0x18d4b5={'username':username,'lastOnline':firebase[_0x3b6f90(0x19c)][_0x3b6f90(0x1cf)][_0x3b6f90(0x1a9)],'online':!![]};_0x4b3fcb['set'](_0x18d4b5),_0x4b3fcb[_0x3b6f90(0x1f9)]()[_0x3b6f90(0x242)]({'online':![],'lastOnline':Date['now']()});}function viewProfile(_0x269893){const _0x5e19b5=_0xfeda97;db['ref'](_0x5e19b5(0x1ca)+_0x269893)[_0x5e19b5(0x1f2)]()[_0x5e19b5(0x230)](_0x341f54=>{const _0x1a10f5=_0x5e19b5;if(!_0x341f54[_0x1a10f5(0x1cd)]())return;const _0x22093f=_0x341f54[_0x1a10f5(0x1d0)](),_0x2076ad=('\x0aName:\x20'+_0x22093f[_0x1a10f5(0x1c2)]+_0x1a10f5(0x204)+(_0x22093f[_0x1a10f5(0x1a2)]||_0x1a10f5(0x1d2))+_0x1a10f5(0x215)+(_0x22093f[_0x1a10f5(0x226)]||[])['join']('\x0a')+_0x1a10f5(0x1fe)+new Date(_0x22093f['lastChanged'])[_0x1a10f5(0x1e7)]()+_0x1a10f5(0x1bc))[_0x1a10f5(0x23f)]();document[_0x1a10f5(0x1d8)](_0x1a10f5(0x1bb))[_0x1a10f5(0x231)]=_0x2076ad,document['getElementById'](_0x1a10f5(0x221))[_0x1a10f5(0x1af)]['display']=_0x1a10f5(0x1a1);});}function initUsernameFlow(){const _0x36e062=_0xfeda97,_0x52e626=localStorage['getItem'](_0x36e062(0x19e));!_0x52e626?showScreen('profileScreen'):(username=_0x52e626,document[_0x36e062(0x1d8)](_0x36e062(0x23e))[_0x36e062(0x231)]=username,showScreen(_0x36e062(0x1e3)));}