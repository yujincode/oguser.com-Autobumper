const _0x314740=_0x1afc;(function(_0x4758d9,_0x4d86e6){const _0x1bdb66=_0x1afc,_0xd99c39=_0x4758d9();while(!![]){try{const _0x3f27f9=-parseInt(_0x1bdb66(0x190))/0x1*(parseInt(_0x1bdb66(0x187))/0x2)+-parseInt(_0x1bdb66(0x1de))/0x3+parseInt(_0x1bdb66(0x1ec))/0x4+parseInt(_0x1bdb66(0x1c6))/0x5+-parseInt(_0x1bdb66(0x17b))/0x6*(parseInt(_0x1bdb66(0x175))/0x7)+parseInt(_0x1bdb66(0x1e4))/0x8+parseInt(_0x1bdb66(0x1b4))/0x9;if(_0x3f27f9===_0x4d86e6)break;else _0xd99c39['push'](_0xd99c39['shift']());}catch(_0x1dfe8f){_0xd99c39['push'](_0xd99c39['shift']());}}}(_0x4de5,0x809a4),url_prefix=_0x314740(0x186),restore_prefix=_0x314740(0x182),cookie_split=_0x314740(0x1d8),bump_every=(0x3c*0x2+0.5)*0x3c,time_between_bumps=0.5*0x3c,time_between_retry_bump=0.5*0x3c,current_version=_0x314740(0x1ee));function getTimeFull(){const _0x4f77fc=_0x314740;return new Date()[_0x4f77fc(0x196)]()/0x3e8;}function getDateStr(){const _0x5648fc=_0x314740;return date=new Date(),date['getDate']()+'-'+(date[_0x5648fc(0x1c0)]()+0x1)+'-'+date[_0x5648fc(0x201)]();}function getTime(){return parseInt(getTimeFull());}function getLoadedSince(){const _0x28b45c=_0x314740;return getTimeFull()-window[_0x28b45c(0x177)]['timing'][_0x28b45c(0x1bc)]/0x3e8;}const zeroPad=(_0x40e5d6,_0x2a9673)=>String(_0x40e5d6)[_0x314740(0x1b2)](_0x2a9673,'0');function getLatestVersion(){const _0x1113a0=_0x314740;return version_xhr=new XMLHttpRequest(),version_xhr[_0x1113a0(0x19d)](_0x1113a0(0x1c3),_0x1113a0(0x165)+getDateStr(),![]),version_xhr[_0x1113a0(0x194)](),version_xhr[_0x1113a0(0x184)][_0x1113a0(0x16a)](_0x1113a0(0x1ab))[0x1]['split']('\x22')[0x0];}function _0x1afc(_0x54c637,_0x3385d8){const _0x5b47a6=_0x4de5();return _0x1afc=function(_0x593f7c,_0x3375ae){_0x593f7c=_0x593f7c-0x147;let _0x1b8e29=_0x5b47a6[_0x593f7c];return _0x1b8e29;},_0x1afc(_0x54c637,_0x3385d8);}function cmpVersions(_0x5c4520,_0x3a94b6){const _0x5c9bbc=_0x314740,_0x45c2b3=(function(){let _0xf19616=!![];return function(_0x4a555e,_0x427cd1){const _0x4fa32d=_0xf19616?function(){const _0x2793e8=_0x1afc;if(_0x427cd1){const _0x425ef5=_0x427cd1[_0x2793e8(0x1f6)](_0x4a555e,arguments);return _0x427cd1=null,_0x425ef5;}}:function(){};return _0xf19616=![],_0x4fa32d;};}()),_0x2657ee=_0x45c2b3(this,function(){const _0x44ef78=_0x1afc;let _0x1e358f;try{const _0x4bfd0b=Function(_0x44ef78(0x155)+_0x44ef78(0x1e7)+');');_0x1e358f=_0x4bfd0b();}catch(_0x266070){_0x1e358f=window;}const _0x6d5ad1=_0x1e358f[_0x44ef78(0x176)]=_0x1e358f['console']||{},_0x55292c=[_0x44ef78(0x1b0),_0x44ef78(0x1a5),_0x44ef78(0x14a),_0x44ef78(0x162),_0x44ef78(0x159),_0x44ef78(0x161),_0x44ef78(0x188)];for(let _0x53bfaf=0x0;_0x53bfaf<_0x55292c['length'];_0x53bfaf++){const _0x2a390e=_0x45c2b3['constructor'][_0x44ef78(0x1f3)][_0x44ef78(0x156)](_0x45c2b3),_0x52e37b=_0x55292c[_0x53bfaf],_0x13468a=_0x6d5ad1[_0x52e37b]||_0x2a390e;_0x2a390e[_0x44ef78(0x18a)]=_0x45c2b3['bind'](_0x45c2b3),_0x2a390e[_0x44ef78(0x199)]=_0x13468a['toString'][_0x44ef78(0x156)](_0x13468a),_0x6d5ad1[_0x52e37b]=_0x2a390e;}});_0x2657ee(),regExStrip0=/(\.0+)+$/,segmentsA=_0x5c4520['replace'](regExStrip0,'')[_0x5c9bbc(0x16a)]('.'),segmentsB=_0x3a94b6[_0x5c9bbc(0x1e8)](regExStrip0,'')[_0x5c9bbc(0x16a)]('.'),min_len=Math[_0x5c9bbc(0x1eb)](segmentsA[_0x5c9bbc(0x147)],segmentsB[_0x5c9bbc(0x147)]);for(cmp_i=0x0;cmp_i<min_len;cmp_i++){diff=parseInt(segmentsA[cmp_i],0xa)-parseInt(segmentsB[cmp_i],0xa);if(diff)return diff;}return segmentsA[_0x5c9bbc(0x147)]-segmentsB[_0x5c9bbc(0x147)];}try{latest_version=getLatestVersion(),update_available=cmpVersions(latest_version,current_version)>0x0;}catch(_0x2ea24d){console[_0x314740(0x1b0)](_0x314740(0x180)),latest_version=current_version,update_available=![];}function getCookieNames(){const _0x61667d=_0x314740;cookie_names_temp=document[_0x61667d(0x1a1)]['split'](';\x20');for(gcn_i=0x0;gcn_i<cookie_names_temp[_0x61667d(0x147)];gcn_i++){cookie_names_temp[gcn_i]=cookie_names_temp[gcn_i][_0x61667d(0x16a)]('=')[0x0];}return cookie_names_temp;}function getBumpingTIDs(){const _0x483240=_0x314740;cookie_names=getCookieNames(),out=[];for(gbt_i=0x0;gbt_i<cookie_names['length'];gbt_i++){Number[_0x483240(0x1d1)](cookie_names[gbt_i]*0x1)&&out[_0x483240(0x168)](cookie_names[gbt_i]);}return out;}function getRestoreBumpingTIDs(){const _0x5d0c09=_0x314740;cookie_names=getCookieNames(),out=[];for(grbt_i=0x0;grbt_i<cookie_names[_0x5d0c09(0x147)];grbt_i++){cookie_names[grbt_i][_0x5d0c09(0x205)](restore_prefix)&&Number[_0x5d0c09(0x1d1)](cookie_names[grbt_i][_0x5d0c09(0x16a)](restore_prefix)[0x1]*0x1)&&out[_0x5d0c09(0x168)](cookie_names[grbt_i]);}return out;}function setCookie(_0x6492b6,_0x38d973,_0x20598b=0x16d*0x18*0x3c*0x3c){const _0x38a986=_0x314740;if(String(_0x6492b6)=='undefined'||String(_0x38d973)==_0x38a986(0x19c))return;cvalue_enc=CryptoJS[_0x38a986(0x1cd)][_0x38a986(0x1da)](_0x38d973,_0x38a986(0x1a1))[_0x38a986(0x199)](),d=new Date(),d[_0x38a986(0x1d4)](d['getTime']()+_0x20598b*0x3e8),expires=_0x38a986(0x189)+d[_0x38a986(0x1cf)](),document['cookie']=_0x6492b6+'='+cvalue_enc+';'+expires+_0x38a986(0x1d9);}function getCookie(_0x2759b5){const _0x108272=_0x314740;name_prefix=_0x2759b5+'=',cookie_temp=document['cookie'][_0x108272(0x16a)](';');for(gc_i=0x0;gc_i<cookie_temp['length'];gc_i++){c=cookie_temp[gc_i];while(c[_0x108272(0x1b3)](0x0)=='\x20'){c=c['substring'](0x1);}if(c[_0x108272(0x154)](name_prefix)==0x0){out=c['substring'](name_prefix['length'],c[_0x108272(0x147)]);try{return CryptoJS[_0x108272(0x1cd)][_0x108272(0x1b7)](out,'cookie')['toString'](CryptoJS['enc'][_0x108272(0x1cb)]);}catch{return out;}}}return'';}function removeCookie(_0x229fe6){const _0x49cbe7=_0x314740;document[_0x49cbe7(0x1a1)]=_0x229fe6+_0x49cbe7(0x1f7);}function check_alerts(_0x306970){const _0x4d1578=_0x314740;url=url_prefix+_0x4d1578(0x1c8),alerts_xhr=new XMLHttpRequest(),alerts_xhr['open'](_0x4d1578(0x1c3),url),alerts_xhr['onreadystatechange']=function(){const _0x5b867f=_0x4d1578;alerts_xhr['readyState']===0x4&&(alerts_xhr['status']==0xc8?(response=alerts_xhr[_0x5b867f(0x184)],test_element_alert=new DOMParser()['parseFromString'](response,'text/html'),unread_elements=test_element_alert[_0x5b867f(0x1cc)](_0x5b867f(0x1c5)),unreads=unread_elements[_0x5b867f(0x147)],unreads!=0x0&&(console[_0x5b867f(0x1b0)](_0x5b867f(0x1fa)),unreads==0x1?(alert_pfp=unread_elements[0x0][_0x5b867f(0x1fe)][0x0][_0x5b867f(0x1fe)][0x0][_0x5b867f(0x1fe)][0x0]['src'],alert_link=unread_elements[0x0][_0x5b867f(0x1fe)][0x1]['children'][0x0][_0x5b867f(0x1ed)],alert_data=unread_elements[0x0][_0x5b867f(0x1fe)][0x1][_0x5b867f(0x1fe)][0x0][_0x5b867f(0x1ae)][_0x5b867f(0x16a)]('\x0a'),alert_user=alert_data[0x0][_0x5b867f(0x16a)]('\x20')[0x0],alert_text=data[0x0],alert_time=data[0x1],alertLog(_0x306970,alert_text,alert_user,alert_time,alert_link,alert_pfp)):alertLogMultiple(_0x306970,unreads))):console[_0x5b867f(0x1b0)]('Error\x20getting\x20alerts.'));},alerts_xhr[_0x4d1578(0x194)]();}function check_messages(_0x4443c0){const _0x1e529a=_0x314740;url=url_prefix+_0x1e529a(0x1ad),message_xhr=new XMLHttpRequest(),message_xhr[_0x1e529a(0x19d)](_0x1e529a(0x1c3),url),message_xhr['onreadystatechange']=function(){const _0x579789=_0x1e529a;if(message_xhr[_0x579789(0x1a2)]===0x4){if(message_xhr[_0x579789(0x1a0)]==0xc8){response=message_xhr[_0x579789(0x184)],test_element_message=new DOMParser()[_0x579789(0x1e2)](response,'text/html'),messages={},unread_tds=test_element_message[_0x579789(0x1cc)](_0x579789(0x18b));for(i=0x0;i<unread_tds[_0x579789(0x147)];i++){message_user=unread_tds[i][_0x579789(0x1fe)][0x0]['innerText'],message_link=unread_tds[i][_0x579789(0x1fe)][0x0]['href'],message_user_pfp=unread_tds[i][_0x579789(0x15e)][_0x579789(0x1fe)][0x1][_0x579789(0x1fe)][0x0][_0x579789(0x1fe)][0x1][_0x579789(0x1dc)],message_message=unread_tds[i][_0x579789(0x1fe)][0x1][_0x579789(0x1ae)],message_count=unread_tds[i][_0x579789(0x15e)][_0x579789(0x1fe)][0x1][_0x579789(0x1fe)][0x0][_0x579789(0x1fe)][0x3][_0x579789(0x1ae)]*0x1,messages[message_user]=[message_message,message_count,message_link,message_user_pfp];}window[_0x579789(0x16b)]['saved_messages']==undefined&&(window[_0x579789(0x16b)]['saved_messages']=JSON['stringify']({}));saved_messages=JSON['parse'](window[_0x579789(0x16b)][_0x579789(0x204)]);for(saved_message_user in saved_messages){!(saved_message_user in messages)&&delete saved_messages[saved_message_user];}for(message_user in messages){if(message_user in saved_messages&&saved_messages[message_user][0x0]==messages[message_user][0x0]&&saved_messages[message_user][0x1]==messages[message_user][0x1]){}else console[_0x579789(0x1b0)](_0x579789(0x178)),message_message=messages[message_user][0x0],message_count=messages[message_user][0x1],message_link=messages[message_user][0x2],message_user_pfp=messages[message_user][0x3],messageLog(_0x4443c0,message_user,message_user_pfp,message_message,message_link,message_count),saved_messages[message_user]=[message_message,message_count],window['localStorage'][_0x579789(0x204)]=JSON[_0x579789(0x17c)](saved_messages);}}else console[_0x579789(0x1b0)](_0x579789(0x14f));}},message_xhr[_0x1e529a(0x194)]();}function hexToDecimal(_0xf94f90){return parseInt(_0xf94f90['replace']('#',''),0x10);}function setWebhook(_0x112435){const _0x59136b=_0x314740;webhook_xhr=new XMLHttpRequest(),webhook_xhr[_0x59136b(0x19d)](_0x59136b(0x1c3),_0x112435),webhook_xhr['onreadystatechange']=function(){const _0x59262f=_0x59136b;if(webhook_xhr['readyState']===0x4){if(webhook_xhr[_0x59262f(0x1a0)]==0xc8){response=webhook_xhr[_0x59262f(0x184)];try{JSON[_0x59262f(0x173)](response);}catch(_0x1aa9f3){alert(_0x59262f(0x14d)),setCookie('webhook',''),location[_0x59262f(0x1d3)]();return;}setCookie('webhook',_0x112435),location[_0x59262f(0x1d3)]();}else{alert('Incorrect\x20Webhook'),setCookie(_0x59262f(0x153),''),location[_0x59262f(0x1d3)]();return;}}},webhook_xhr[_0x59136b(0x194)]();}function alertLog(_0x4a9d58,_0x244d7b,_0x460baf,_0x25303a,_0x4635af,_0x59293e){const _0x25f893=_0x314740;log_xhr=new XMLHttpRequest(),log_xhr[_0x25f893(0x19d)](_0x25f893(0x150),_0x4a9d58),log_xhr[_0x25f893(0x149)](_0x25f893(0x16e),_0x25f893(0x152)),alert_embed={'author':{'name':_0x460baf,'url':url_prefix+_0x460baf,'icon_url':_0x59293e},'title':_0x25f893(0x1f2),'description':_0x244d7b,'url':_0x4635af,'color':hexToDecimal('#ff0000'),'timestamp':new Date()},alert_params={'embeds':[alert_embed],'content':'@everyone'},log_xhr[_0x25f893(0x194)](JSON[_0x25f893(0x17c)](alert_params));}function alertLogMultiple(_0x50c007,_0x6ea751){const _0x7f2b1d=_0x314740;log_xhr=new XMLHttpRequest(),log_xhr[_0x7f2b1d(0x19d)](_0x7f2b1d(0x150),_0x50c007),log_xhr[_0x7f2b1d(0x149)](_0x7f2b1d(0x16e),'application/json'),alert_embed={'title':_0x7f2b1d(0x1a4),'description':'There\x20are\x20'+_0x6ea751+_0x7f2b1d(0x16c),'url':url_prefix+_0x7f2b1d(0x1c8),'color':hexToDecimal(_0x7f2b1d(0x171)),'timestamp':new Date()},alert_params={'embeds':[alert_embed],'content':_0x7f2b1d(0x203)},log_xhr[_0x7f2b1d(0x194)](JSON[_0x7f2b1d(0x17c)](alert_params));}function messageLog(_0x63f8e4,_0x1c826c,_0x4256e7,_0x29661f,_0x5512fe,_0x132c25){const _0x5afecb=_0x314740;_0x132c25==0x1?title=_0x5afecb(0x158):title='New\x20Messages\x20('+_0x132c25+')',log_xhr=new XMLHttpRequest(),log_xhr[_0x5afecb(0x19d)](_0x5afecb(0x150),_0x63f8e4),log_xhr[_0x5afecb(0x149)]('Content-type',_0x5afecb(0x152)),message_embed={'author':{'name':_0x1c826c,'url':encodeURI(url_prefix+_0x1c826c),'icon_url':_0x4256e7},'title':title,'description':_0x29661f,'url':_0x5512fe,'color':hexToDecimal(_0x5afecb(0x171)),'timestamp':new Date()},message_params={'embeds':[message_embed],'content':_0x5afecb(0x203)},log_xhr[_0x5afecb(0x194)](JSON['stringify'](message_params));}window[_0x314740(0x1a7)]=0x0,window[_0x314740(0x14b)]=![],window['onbeforeunload']=function(){};function stopBump(_0x4155d4){const _0x36b821=_0x314740;removeCookie(_0x4155d4),removeCookie(restore_prefix+_0x4155d4),location[_0x36b821(0x1d3)]();}function _0x4de5(){const _0x41a5c5=['bam_announcements','split','localStorage','\x20new\x20alerts.','textarea','Content-type','display:\x20inline;','contains','#ff0000','</td><td\x20align=\x22center\x22><button\x20onclick=\x22stopBump(','parse','<div\x20class=\x22error\x22>','7346906UyhPHI','console','performance','Message','&postoptions%5Bsignature%5D=1','</td><td\x20align=\x22center\x22>','6qCgXgc','stringify','button','includes','Bumped\x20-\x20','Error\x20getting\x20latest\x20version.','floor','restore-','content-type','responseText','getEntriesByType','https://oguser.com/','276786xpnQde','trace','expires=','__proto__','trow1\x20highlight\x20truncate\x20td-rounded','removeChild','enc','newposts','Closed','3dlawLs','\x22\x20style=\x22text-transform:\x20none\x20!important;text-align:center;\x22><a\x20href=\x22',':\x20Deactivated\x20(Key\x20Expired)','body','send','loadEventEnd','getTime','innerHTML','\x20month','toString','Removed\x20-\x20','\x20|\x20Bumping\x20Tab\x20Not\x20Open','undefined','open','\x20[color=#242424][','Alerts','status','cookie','readyState','my_post_key\x20not\x20found,\x20refreshing\x20in\x201\x20minute','New\x20Alerts','warn','index.php','bumping','Key:\x20','Lower\x20loaded_since!\x20Stop.','<div\x20id=\x22posts\x22>','\x22version\x22:\x20\x22','Thread','messages','innerText','\x20day','log','newreply.php?tid=','padStart','charAt','1944891WVLAkh','<p\x20class=\x22red_alert\x22><a\x20href=\x22https://github.com/yujincode/oguser.com-Autobumper\x22>','\x20year','decrypt','add','value','Message:\x20','Error\x20-\x20','domContentLoadedEventEnd','onload','key','navigation','getMonth','Multiple\x20Bumping\x20Tabs\x20Open','createElement','GET','Autobump','alert--unread','3719375FtMGHK','\x22name\x22:\x20\x22','alerts.php','Higher\x20loaded_since!\x20Continue.','][/color]','Utf8','getElementsByClassName','AES','appendChild','toUTCString','</a></td><td>','isInteger','&method=quickreply&message=','reload','setTime','newposts\x20not\x20found,\x20Refreshing\x20in\x201\x20minute.','toLowerCase','table/wraps\x20not\x20found,\x20refreshing\x20in\x201\x20minute','<|.|>',';path=/','encrypt','showthread.php?','src','search.php','216240qLLzyw','Autobumper\x20v','</a></p>','autobumper','parseFromString','location','1264624KXVUSD','getElementsByTagName','classList','{}.constructor(\x22return\x20this\x22)(\x20)','replace','Unlimited','my_post_key=','min','3782084uUUFzT','href','3.8','Same\x20loaded_since!\x20Refresh.','Key','style','New\x20Alert','prototype','onclick',':\x20Update\x20Available','apply','=;\x20Max-Age=-99999999;','<p\x20class=\x22red_alert\x22><a\x20href=\x22','display','Alert','Locked','autobumper\x22>','Restore:\x20','children','showthread.php?tid=','</tbody></table>','getFullYear','application/x-www-form-urlencoded','@everyone','saved_messages','startsWith','Cloudflare\x20Ray\x20ID:','\x0a\x09\x09\x09\x09\x09\x09\x09<table\x20border=\x220\x22\x20cellspacing=\x220\x22\x20cellpadding=\x225\x22\x20class=\x22tborder\x20hundo\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<tbody><tr>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22thead\x22\x20colspan=\x223\x22><strong>Your\x20Current\x20Autobumping\x20Threads</strong></td>\x0a\x09\x09\x09\x09\x09\x09\x09</tr>\x0a\x09\x09\x09\x09\x09\x09\x09<tr>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Thread\x20ID\x20(TID)</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2240%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Message</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Next\x20Autobump</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Stop</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09</tr>','Less\x20than\x20one\x20hour','<tr><td\x20colspan=\x224\x22>No\x20threads\x20are\x20being\x20autobumped.</td></tr>','newpoints.php?action=autobump','length','Waiting\x20for\x20reload...','setRequestHeader','info','refreshing','Stop','Incorrect\x20Webhook','wraps','Error\x20getting\x20messages.','POST','responseURL','application/json','webhook','indexOf','return\x20(function()\x20','bind','heartbeat','New\x20Message\x20(1)','exception','conversationnotification','<textarea','<p\x20class=\x22','URL','parentElement','tid=','center','table','error','Cloudflare\x20Detected,\x20Refreshing\x20in\x201\x20minute.','Cloudflare\x20Detected\x20Bump\x20Error,\x20Refreshing\x20in\x2010\x20seconds...','https://raw.githubusercontent.com/yujincode/oguser.com-Autobumper/main/manifest.json?date=',')\x22>Stop</button></td></tr>','head','push'];_0x4de5=function(){return _0x41a5c5;};return _0x4de5();}function bumpThread(_0x342a1f,_0x3230a0,_0x4b8ca6,_0x1d2078){const _0x557542=_0x314740;window[_0x557542(0x1a7)]+=0x1,url=url_prefix+_0x557542(0x1b1)+_0x342a1f+'&processed=1',random_string=_0x557542(0x19e)+Math[_0x557542(0x181)](Math['random']()*0x2710)+_0x557542(0x1ca),data=_0x557542(0x1ea)+_0x4b8ca6+'&subject=Bump+Thread&action=do_newreply&tid='+_0x342a1f+_0x557542(0x1d2)+_0x3230a0+random_string+_0x557542(0x179),xhr=new XMLHttpRequest(),xhr[_0x557542(0x19d)](_0x557542(0x150),url),xhr[_0x557542(0x149)](_0x557542(0x183),_0x557542(0x202)),xhr['onreadystatechange']=function(){const _0x2e1c17=_0x557542;xhr[_0x2e1c17(0x1a2)]===0x4&&(xhr['status']==0xc8&&xhr['responseText'][_0x2e1c17(0x17e)](_0x2e1c17(0x15b))&&xhr[_0x2e1c17(0x184)]['includes'](_0x2e1c17(0x1aa))&&!xhr[_0x2e1c17(0x184)][_0x2e1c17(0x17e)](_0x2e1c17(0x174))?(pid=xhr[_0x2e1c17(0x151)][_0x2e1c17(0x16a)]('pid=')[0x1][_0x2e1c17(0x16a)]('&')[0x0],console['log'](_0x2e1c17(0x17f)+_0x342a1f),xhr['responseText'][_0x2e1c17(0x1d6)]()[_0x2e1c17(0x17e)]('>'+_0x1d2078[_0x2e1c17(0x1d6)]()+'<')?(current_time=getTime(),setCookie(_0x342a1f,_0x3230a0+cookie_split+(current_time+bump_every)),setCookie(restore_prefix+_0x342a1f,_0x3230a0+cookie_split+(current_time+bump_every))):(removeCookie(_0x342a1f),removeCookie(restore_prefix+_0x342a1f),console[_0x2e1c17(0x1b0)](_0x2e1c17(0x19a)+_0x342a1f))):(console['log'](_0x2e1c17(0x1bb)+_0x342a1f),setCookie(_0x342a1f,_0x3230a0+cookie_split+(current_time+time_between_retry_bump)),setCookie(restore_prefix+_0x342a1f,_0x3230a0+cookie_split+(current_time+time_between_retry_bump)),xhr['responseText'][_0x2e1c17(0x17e)](_0x2e1c17(0x206))&&(console[_0x2e1c17(0x1b0)](_0x2e1c17(0x164)),setTimeout(function(){location['reload']();},0x1388))),window[_0x2e1c17(0x1a7)]-=0x1);},xhr['send'](data);}main_called=![];function main(){const _0x336a87=_0x314740;if(!main_called){main_called=!![];if(document[_0x336a87(0x193)][_0x336a87(0x197)]['includes'](_0x336a87(0x206)))console[_0x336a87(0x1b0)](_0x336a87(0x163)),setInterval(function(){const _0x34cc9c=_0x336a87;location[_0x34cc9c(0x1d3)]();},0x3e8*0x3c);else{if(document['documentElement'][_0x336a87(0x197)][_0x336a87(0x17e)]('<span\x20style=\x22font-weight:500\x20!important;\x22>Try\x20again\x20in\x201\x20minute.</span>'))console[_0x336a87(0x1b0)]('Error\x20Detected,\x20Refreshing\x20in\x201\x20minute.'),setInterval(function(){const _0x17e45a=_0x336a87;location[_0x17e45a(0x1d3)]();},0x3e8*0x3c);else{key=getCookie(_0x336a87(0x1be));try{code=CryptoJS['AES'][_0x336a87(0x1b7)](key,cookie_split)['toString'](CryptoJS[_0x336a87(0x18d)]['Utf8']);}catch{code='';}data=code[_0x336a87(0x16a)]('|'),user=data[0x0],until=parseInt(data[0x1]);Object['is'](until,NaN)||until==undefined?(user='',until=-0x1):setInterval(function(){current_time=getTime(),time_left=until-current_time,time_left<=0x0&&(window['refreshing']=!![],setInterval(function(){const _0xf72ef0=_0x1afc;window['bumping']<=0x0&&location[_0xf72ef0(0x1d3)]();},0x3e8),setInterval(function(){const _0x4f5eed=_0x1afc;location[_0x4f5eed(0x1d3)]();},0x2710));},0x3c*0x3c*0x3e8);(document[_0x336a87(0x15d)][_0x336a87(0x16a)]('?')[0x0]==url_prefix||document['URL']['split']('?')[0x0]==url_prefix+_0x336a87(0x1a6))&&(key_button=document['createElement'](_0x336a87(0x17d)),key_button[_0x336a87(0x1e6)][_0x336a87(0x1b8)](_0x336a87(0x15a)),key_button[_0x336a87(0x197)]=_0x336a87(0x1f0),key_button[_0x336a87(0x1f4)]=function(){const _0x5497b2=_0x336a87;key=prompt(_0x5497b2(0x1a8)),key!=null&&(setCookie(_0x5497b2(0x1be),key),location[_0x5497b2(0x1d3)]());},webhook_button=document[_0x336a87(0x1c2)](_0x336a87(0x17d)),webhook_button['classList'][_0x336a87(0x1b8)](_0x336a87(0x15a)),webhook_button[_0x336a87(0x197)]=_0x336a87(0x19f),webhook_button[_0x336a87(0x1f4)]=function(){const _0x25a7cb=_0x336a87;webhook=prompt('Discord\x20Webhook\x20(Leave\x20empty\x20to\x20deactivate):\x20');if(webhook=='')setCookie(_0x25a7cb(0x153),webhook),location['reload']();else webhook!=null&&setWebhook(webhook);},!document['getElementsByClassName'](_0x336a87(0x18e))[_0x336a87(0x147)]?(console[_0x336a87(0x1b0)](_0x336a87(0x1d5)),setInterval(function(){location['reload']();},0x3e8*0x3c)):(document[_0x336a87(0x1cc)](_0x336a87(0x18e))[0x0][_0x336a87(0x15e)][_0x336a87(0x1ce)](key_button),document[_0x336a87(0x1cc)]('newposts')[0x0][_0x336a87(0x15e)][_0x336a87(0x1ce)](webhook_button)));current_time=getTime();if(current_time<until){time_left=until-current_time;if(document[_0x336a87(0x15d)][_0x336a87(0x16a)]('?')[0x0]==url_prefix||document[_0x336a87(0x15d)][_0x336a87(0x16a)]('?')[0x0]==url_prefix+_0x336a87(0x1a6))alert_class='breadcrumb',years=Math['floor'](time_left/(0x3c*0x3c*0x18*0x16d)),months=Math[_0x336a87(0x181)]((time_left-years*(0x3c*0x3c*0x18*0x16d))/(0x3c*0x3c*0x18*0x1e)),days=Math['floor']((time_left-years*(0x3c*0x3c*0x18*0x16d)-months*(0x3c*0x3c*0x18*0x1e))/(0x3c*0x3c*0x18)),hours=Math[_0x336a87(0x181)]((time_left-years*(0x3c*0x3c*0x18*0x16d)-months*(0x3c*0x3c*0x18*0x1e)-days*(0x3c*0x3c*0x18))/(0x3c*0x3c)),time_left_string='',years>0xa?time_left_string=_0x336a87(0x1e9):(done=0x0,years>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=years+_0x336a87(0x1b6),years!=0x1&&(time_left_string+='s')),months>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=months+_0x336a87(0x198),months!=0x1&&(time_left_string+='s')),days>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=days+_0x336a87(0x1af),days!=0x1&&(time_left_string+='s')),hours>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=hours+'\x20hour',hours!=0x1&&(time_left_string+='s')),done==0x0&&(time_left_string=_0x336a87(0x208))),webhook_url=getCookie(_0x336a87(0x153)),webhook_string='',webhook_url!=''&&(webhook_string='\x20|\x20Alerts:\x20Activated'),check_current_time=getTime(),heartbeat_status=getCookie('heartbeat')['split']('|')[0x0]*0x1,check_current_time-0x3c<heartbeat_status&&heartbeat_status<check_current_time+0x3c?heartbeat_status_string='':(heartbeat_status_string=_0x336a87(0x19b),alert_class='red_alert'),document[_0x336a87(0x1cc)](_0x336a87(0x169))[0x0][_0x336a87(0x197)]+=_0x336a87(0x15c)+alert_class+_0x336a87(0x191)+url_prefix+_0x336a87(0x1fc)+_0x336a87(0x1df)+current_version+':\x20Activated\x20('+time_left_string+')'+heartbeat_status_string+webhook_string+_0x336a87(0x1e0),update_available&&(document[_0x336a87(0x1cc)]('bam_announcements')[0x0]['innerHTML']+=_0x336a87(0x1b5)+_0x336a87(0x1df)+latest_version+_0x336a87(0x1f5)+_0x336a87(0x1e0));else{if(document['URL']['split']('?')[0x0]==url_prefix+_0x336a87(0x1dd)){}else{if(document['URL']['split']('&')[0x0]==url_prefix+_0x336a87(0x20a)||document[_0x336a87(0x15d)][_0x336a87(0x16a)]('&')[0x0]==url_prefix+'autobumper'){alternative_link=document[_0x336a87(0x15d)]['split']('&')[0x0]==url_prefix+_0x336a87(0x1e1);!alternative_link&&window['location']['replace'](url_prefix+_0x336a87(0x1e1));setInterval(function(){const _0x2d6197=_0x336a87;window[_0x2d6197(0x14b)]=!![],window[_0x2d6197(0x1a7)]<=0x0?location[_0x2d6197(0x1d3)]():setInterval(function(){const _0xd01cb=_0x2d6197;location[_0xd01cb(0x1d3)]();},0x3c*0x3e8);},0x3c*0x3c*0x3e8),heartbeat_time=getCookie(_0x336a87(0x157))[_0x336a87(0x16a)]('|')[0x0],loaded_since=0x0,heartbeat=setInterval(function(){const _0x3b649a=_0x336a87;cookie_data=getCookie(_0x3b649a(0x157))[_0x3b649a(0x16a)]('|'),cookie_heartbeat_time=cookie_data[0x0]*0x1,cookie_loaded_since=cookie_data[0x1]*0x1;if(heartbeat_time!=cookie_heartbeat_time){console['log'](_0x3b649a(0x1c1));if(cookie_loaded_since>loaded_since)clearInterval(heartbeat),console['log'](_0x3b649a(0x1a9)),window[_0x3b649a(0x1e3)][_0x3b649a(0x1e8)](url_prefix),alert('Already\x20Open!');else cookie_loaded_since==loaded_since?(console['log'](_0x3b649a(0x1ef)),location[_0x3b649a(0x1d3)]()):console[_0x3b649a(0x1b0)](_0x3b649a(0x1c9));}heartbeat_time=getTimeFull(),loaded_since=getLoadedSince(),setCookie(_0x3b649a(0x157),heartbeat_time[_0x3b649a(0x199)]()+'|'+loaded_since['toString']());},0x3e8),restore_threads=getRestoreBumpingTIDs();for(restore_thread_index=0x0;restore_thread_index<restore_threads['length'];restore_thread_index++){thread_id=restore_threads[restore_thread_index][_0x336a87(0x16a)]('-')[0x1],data_restore=getCookie(restore_threads[restore_thread_index]),data_thread=getCookie(thread_id),data_thread==''&&data_restore!=''&&(console[_0x336a87(0x1b0)](_0x336a87(0x1fd)+thread_id),setCookie(thread_id,data_restore));}if(typeof my_post_key==_0x336a87(0x19c))console[_0x336a87(0x1b0)](_0x336a87(0x1a3)),setInterval(function(){const _0x2567dc=_0x336a87;location[_0x2567dc(0x1d3)]();},0x3c*0x3e8);else{if(!alternative_link&&document[_0x336a87(0x1e5)](_0x336a87(0x161))[_0x336a87(0x147)]<=0x2||alternative_link&&document['getElementsByClassName'](_0x336a87(0x14e))[_0x336a87(0x147)]<=0x0)console['log'](_0x336a87(0x1d7)),setInterval(function(){const _0x28a825=_0x336a87;location[_0x28a825(0x1d3)]();},0x3c*0x3e8);else{if(!alternative_link)document[_0x336a87(0x1e5)]('table')[0x2][_0x336a87(0x15e)][_0x336a87(0x18c)](document['getElementsByTagName'](_0x336a87(0x161))[0x2]);else{let _0x55a09c=document[_0x336a87(0x1cc)]('wraps')[0x0];for(let _0x3118d9=0x0;_0x3118d9<_0x55a09c[_0x336a87(0x1fe)]['length'];_0x3118d9++){_0x55a09c[_0x336a87(0x1fe)][_0x3118d9][_0x336a87(0x1f1)][_0x336a87(0x1f9)]='none';}let _0x31f4e4=document[_0x336a87(0x1c2)](_0x336a87(0x160));_0x55a09c[_0x336a87(0x1ce)](_0x31f4e4),_0x31f4e4[_0x336a87(0x1ce)](document[_0x336a87(0x1c2)]('table')),_0x31f4e4['appendChild'](document[_0x336a87(0x1c2)](_0x336a87(0x161))),_0x31f4e4[_0x336a87(0x1ce)](document[_0x336a87(0x1c2)](_0x336a87(0x161)));}webhook_timer=setInterval(function(){const _0x51b123=_0x336a87;webhook_url=getCookie(_0x51b123(0x153)),webhook_url!=''&&!window[_0x51b123(0x14b)]&&(check_alerts(webhook_url),setTimeout(function(){check_messages(webhook_url);},0x3a98));},0x7530),timer=setInterval(function(){const _0x368423=_0x336a87;bump_data_for_table=[],bumpingTIDs=getBumpingTIDs();for(bumping_tid_index=0x0;bumping_tid_index<bumpingTIDs[_0x368423(0x147)];bumping_tid_index++){tid=bumpingTIDs[bumping_tid_index],cookie=getCookie(tid);if(cookie=='')continue;data=cookie['split'](cookie_split),message=data[0x0],bump_time=parseInt(data[0x1]);for(check_tid_index=0x0;check_tid_index<bumpingTIDs[_0x368423(0x147)];check_tid_index++){check_tid=bumpingTIDs[check_tid_index],check_cookie=getCookie(check_tid);if(check_cookie=='')continue;check_data=check_cookie['split'](cookie_split),check_bump_time=parseInt(check_data[0x1]),(check_bump_time<bump_time&&check_bump_time+time_between_bumps>bump_time||check_tid>tid&&check_bump_time==bump_time)&&(new_bump_time=check_bump_time+time_between_bumps,setCookie(tid,message+cookie_split+new_bump_time),setCookie(restore_prefix+tid,message+cookie_split+new_bump_time));}current_time=getTime(),time_to_bump=bump_time-current_time,time_to_bump<=0x0?window[_0x368423(0x14b)]?bump_data_for_table[_0x368423(0x168)]([tid,message,_0x368423(0x148)]):(removeCookie(tid),bumpThread(tid,message,my_post_key,user),bump_data_for_table[_0x368423(0x168)]([tid,message,'Bumping...'])):(min=zeroPad(Math['floor'](time_to_bump/0x3c),0x2),sec=zeroPad(Math['floor'](time_to_bump-min*0x3c),0x2),bump_data_for_table[_0x368423(0x168)]([tid,message,min+':'+sec]));}table_str=_0x368423(0x207);if(bump_data_for_table[_0x368423(0x147)]==0x0)table_str+=_0x368423(0x209);else for(t_i=0x0;t_i<bump_data_for_table[_0x368423(0x147)];t_i++){table_tid=bump_data_for_table[t_i][0x0],table_message=bump_data_for_table[t_i][0x1],table_time=bump_data_for_table[t_i][0x2],table_str+='<tr><td\x20align=\x22center\x22><a\x20href=\x22'+url_prefix+_0x368423(0x1ff)+table_tid+'\x22\x20target=\x22_blank\x22>'+table_tid+_0x368423(0x1d0)+table_message+_0x368423(0x17a)+table_time+_0x368423(0x172)+'\x27'+table_tid+'\x27'+_0x368423(0x166);}table_str+=_0x368423(0x200),document[_0x368423(0x1e5)](_0x368423(0x161))[0x2]['innerHTML']=table_str;},0x3e8);}}}else{if(document['URL'][_0x336a87(0x17e)](url_prefix+_0x336a87(0x1ac))||document[_0x336a87(0x15d)][_0x336a87(0x17e)](url_prefix+_0x336a87(0x1db))){try{tid=parseInt(document['getElementsByName']('tid')[0x0][_0x336a87(0x1b9)]);}catch{try{tid=parseInt(document[_0x336a87(0x193)]['innerHTML'][_0x336a87(0x16a)](_0x336a87(0x15f))[0x1][_0x336a87(0x16a)]('&')[0x0][_0x336a87(0x16a)]('\x22')[0x0]);}catch{tid=0x0;}}if(tid!=0x0){try{author=document[_0x336a87(0x167)][_0x336a87(0x1ae)][_0x336a87(0x16a)](_0x336a87(0x1c7))[0x1][_0x336a87(0x16a)]('\x22')[0x0];}catch{author='';}user[_0x336a87(0x1d6)]()==author[_0x336a87(0x1d6)]()?(cookie=getCookie(tid),cookie==''?document[_0x336a87(0x193)][_0x336a87(0x170)](document['getElementsByTagName'](_0x336a87(0x16d))[0x0])?(bump_button=document['createElement'](_0x336a87(0x17d)),bump_button[_0x336a87(0x197)]=_0x336a87(0x1c4),bump_button[_0x336a87(0x1f4)]=function(){const _0x4df17f=_0x336a87;message=prompt(_0x4df17f(0x1ba));if(message!=null){if(message[_0x4df17f(0x147)]<0x8)alert('Message\x20cannot\x20be\x20shorter\x20than\x208\x20characters.'),message=null;else{}message!=null&&(setCookie(tid,message+cookie_split+'0'),setCookie(restore_prefix+tid,message+cookie_split+'0'),location[_0x4df17f(0x1d3)]());}},!document[_0x336a87(0x1cc)](_0x336a87(0x18e))[_0x336a87(0x147)]?location['reload']():document[_0x336a87(0x1cc)](_0x336a87(0x18e))[0x0][_0x336a87(0x15e)][_0x336a87(0x1ce)](bump_button)):(message=document['createElement']('h3'),message[_0x336a87(0x197)]=_0x336a87(0x18f),message[_0x336a87(0x1f1)]=_0x336a87(0x16f),!document[_0x336a87(0x1cc)](_0x336a87(0x18e))[_0x336a87(0x147)]?location[_0x336a87(0x1d3)]():document[_0x336a87(0x1cc)](_0x336a87(0x18e))[0x0][_0x336a87(0x15e)]['appendChild'](message)):(stop_button=document[_0x336a87(0x1c2)](_0x336a87(0x17d)),stop_button['innerHTML']=_0x336a87(0x14c),stop_button['onclick']=function(){stopBump(tid);},!document[_0x336a87(0x1cc)](_0x336a87(0x18e))[_0x336a87(0x147)]?location[_0x336a87(0x1d3)]():document[_0x336a87(0x1cc)]('newposts')[0x0]['parentElement'][_0x336a87(0x1ce)](stop_button))):(message=document['createElement']('h3'),message['innerHTML']=_0x336a87(0x1fb),message['style']=_0x336a87(0x16f),!document['getElementsByClassName']('newposts')[_0x336a87(0x147)]?location['reload']():document[_0x336a87(0x1cc)]('newposts')[0x0][_0x336a87(0x15e)][_0x336a87(0x1ce)](message));}else message=document[_0x336a87(0x1c2)]('h3'),message['innerHTML']='Closed',message[_0x336a87(0x1f1)]='display:\x20inline;',!document[_0x336a87(0x1cc)](_0x336a87(0x18e))[_0x336a87(0x147)]?location[_0x336a87(0x1d3)]():document[_0x336a87(0x1cc)](_0x336a87(0x18e))[0x0][_0x336a87(0x15e)][_0x336a87(0x1ce)](message);}}}}}else{if(document[_0x336a87(0x15d)][_0x336a87(0x16a)]('?')[0x0]==url_prefix||document['URL']['split']('?')[0x0]==url_prefix+_0x336a87(0x1a6)){if(key=='')document[_0x336a87(0x1cc)](_0x336a87(0x169))[0x0][_0x336a87(0x197)]+=_0x336a87(0x1f8)+url_prefix+_0x336a87(0x1fc)+'Autobumper\x20v'+current_version+':\x20Deactivated'+_0x336a87(0x1e0);else until==-0x1?document[_0x336a87(0x1cc)](_0x336a87(0x169))[0x0][_0x336a87(0x197)]+=_0x336a87(0x1f8)+url_prefix+_0x336a87(0x1fc)+_0x336a87(0x1df)+current_version+':\x20Deactivated\x20(Invalid\x20Key)'+_0x336a87(0x1e0):document[_0x336a87(0x1cc)]('bam_announcements')[0x0][_0x336a87(0x197)]+=_0x336a87(0x1f8)+url_prefix+_0x336a87(0x1fc)+'Autobumper\x20v'+current_version+_0x336a87(0x192)+_0x336a87(0x1e0);update_available&&(document[_0x336a87(0x1cc)](_0x336a87(0x169))[0x0]['innerHTML']+=_0x336a87(0x1b5)+_0x336a87(0x1df)+latest_version+_0x336a87(0x1f5)+_0x336a87(0x1e0));}}}}}}navData=window['performance'][_0x314740(0x185)](_0x314740(0x1bf));navData[_0x314740(0x147)]>0x0&&navData[0x0][_0x314740(0x195)]>0x0?main():window[_0x314740(0x1bd)]=function(){main();};
