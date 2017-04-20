if (self.CavalryLogger) { CavalryLogger.start_js(["AytlS"]); }

__d("messengerThreadlistReact",["cx","csx","fbt","bs_array","bs_curry","React","Parent","reactRe","utilsRe","WorkGKs","linkReact","bs_caml_array","bs_pervasives","bs_js_primitive","MessagingTag","MessengerView","MercuryFilters","MessengerActions","MercuryThreadInfo","KeyEventController","SubscriptionsHandler","chatSidebarSheetReact","messengerSpinnerReact","MessengerTypeaheadUtils","MessengerComposerActions","MessengerSearchFunnelLogger","messengerNewMessagesNoticeReact","messengerThreadlistLinkRowReact","messengerFlexScrollableAreaReact","messengerMessageRequestsInfoReact","messengerThreadListGridWrapperReact","messengerGraphQLSearchTypeaheadReact","messengerThreadlistRowContainerReact","messengerThreadlistNewMessageRowReact","messengerThreadlistMessageRequestsRowReact"],(function a(b,c,d,e,f,g,h,i,j){'use strict';function k(wa,xa,ya){if(ya){if(wa.length>0&&xa.length>0){var za=c("bs_caml_array").caml_array_get(wa,0),ab=c("bs_caml_array").caml_array_get(xa,0);if(za.unread_count>0&&za.thread_id!==ya[0]&&za!==ab){return +c("MercuryThreadInfo").isMuted(za);}else return 0;}else return 0;}else return 0;}function l(wa,xa){var ya=+wa.ctrlKey,za=+wa.metaKey,ab=+wa.shiftKey,bb=+c("KeyEventController").filterEventTypes(wa,xa),cb=+c("KeyEventController").filterEventTargets(wa,xa),db=c("Parent").bySelector(wa.target,"._150g");if(ya!==0||za!==0||ab!==0||!(bb!==0&&cb!==0&&db===null)){return 0;}else return 1;}var m=c("reactRe").Component[8][8][6][1],n="MessengerThreadlistReact";function o(){return [0,0];}function p(){return [0,0,0,"",0];}function q(wa,xa){var ya=wa[0];return [[[xa],ya[1],ya[2],ya[3],ya[4]]];}function r(wa,xa){var ya=wa[1],za=wa[0],ab=ya[12].find(function(db){var eb=za[0];if(eb&&db.thread_id===eb[0]){return 1;}else return 0;}),bb=ab!==undefined?ya[12].indexOf(ab):-1,cb=c("bs_pervasives").min(c("bs_pervasives").max(bb+xa|0,0),ya[12].length-1|0);return [[[c("bs_caml_array").caml_array_get(ya[12],cb).thread_id],za[1],za[2],za[3],za[4]]];}function s(wa,xa,ya){var za=xa[1],ab=typeof wa==="number"?wa!==0?za[12].length-1|0:(-za[12].length|0)-1|0:wa[0],bb=+ya.altKey,cb=c("Parent").bySelector(ya.target,"._4rv3"),db=xa[0][0],eb=c("Parent").bySelector(ya.target,"._1ht1"),fb=0;if(bb!==0){if(cb!==null){var gb=za[7];if(gb!==0){if(ab===1&&za[12].length>0){c("MessengerActions").selectThread(c("bs_caml_array").caml_array_get(za[12],0).thread_id,null);return 0;}else return 0;}else{var hb=za[12].findIndex(function(jb){var kb=za[0];if(kb&&kb[0]===jb.thread_id){return 1;}else return 0;});if(hb!==-1){var ib=c("bs_caml_array").caml_array_get(za[12],hb+ab|0);c("MessengerActions").selectThread(ib.thread_id);if(za[4]&&hb===0&&ab===-1)c("MessengerActions").changeDetailView(c("MessengerView").DETAIL.COMPOSE);if(hb===(za[12].length-1|0)){return c("bs_curry")._1(za[9],0);}else return 0;}else return 0;}}else fb=1;}else fb=1;if(fb===1)if(db&&eb!==null){ya.preventDefault();return c("bs_curry")._2(xa[2],r,ab);}else return 0;}function t(wa,xa,ya){var za=xa[0];ya.preventDefault();return [[za[0],za[1],wa,za[3],za[4]]];}function u(wa,xa){var ya=wa[0];if(ya[1]){return 0;}else{var za=wa[4],ab=za[1];if(ab)if(ab[0].isScrolledToBottom())c("bs_curry")._1(wa[1][9],0);var bb=za[1],cb=ya[4];if(bb&&cb!==0&&bb[0].isScrolledToTop()){return [[ya[0],ya[1],ya[2],ya[3],0]];}else return 0;}}function v(wa,xa){var ya=wa[0];xa.preventDefault();var za=wa[4][1];if(za)za[0].scrollToTop();return [[ya[0],ya[1],ya[2],ya[3],0]];}function w(wa,xa){var ya=wa[0];c("MessengerSearchFunnelLogger").startFunnel("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");return [[ya[0],1,ya[2],ya[3],ya[4]]];}function x(wa,xa){var ya=wa[0];c("MessengerSearchFunnelLogger").endFunnel("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");return [[ya[0],0,ya[2],"",ya[4]]];}function y(wa,xa){var ya=wa[0];return [[ya[0],ya[1],ya[2],xa.target.value,ya[4]]];}function z(wa,xa){var ya=wa[0];c("MessengerSearchFunnelLogger").logClearQuery("WWW_MESSENGER_SEARCH_SESSION_FUNNEL");var za=wa[1][1];if(za)c("bs_curry")._1(za[0],0);return [[ya[0],ya[1],ya[2],"",ya[4]]];}function aa(wa,xa){var ya=wa[4][1];if(ya){c("MessengerTypeaheadUtils").scrollEntryIntoView(xa,ya[0]);return 0;}else return 0;}function ba(wa,xa){var ya=wa[1];xa.stopPropagation();c("MessengerComposerActions").exitComposeState();if(ya[7]){var za=ya[12].find(function(ab){return +(ab.unread_count===0);});c("MessengerActions").selectThread(za!==undefined?za.thread_id:null,null);return 0;}else return 0;}function ca(wa){wa.preventDefault();c("MessengerActions").changeFolder(c("MessagingTag").OTHER);return 0;}function da(wa){wa.preventDefault();c("MessengerActions").changeFolder(c("MessagingTag").INBOX);c("MessengerActions").changeFilter(c("MercuryFilters").ALL);return 0;}function ea(wa,xa){xa.preventDefault();return c("bs_curry")._1(wa[1][9],0);}function fa(wa){var xa=wa[3],ya=wa[2],za=new (c("SubscriptionsHandler"))(),ab=[-1],bb=[1],cb=[-5],db=[5];za.addSubscriptions(c("KeyEventController").registerKey("UP",c("bs_curry")._1(xa,function(eb,fb){return s(ab,eb,fb);}),l),c("KeyEventController").registerKey("DOWN",c("bs_curry")._1(xa,function(eb,fb){return s(bb,eb,fb);}),l),c("KeyEventController").registerKey("PAGE_UP",c("bs_curry")._1(xa,function(eb,fb){return s(cb,eb,fb);})),c("KeyEventController").registerKey("PAGE_DOWN",c("bs_curry")._1(xa,function(eb,fb){return s(db,eb,fb);})),c("KeyEventController").registerKey("HOME",c("bs_curry")._1(xa,function(eb,fb){return s(0,eb,fb);})),c("KeyEventController").registerKey("END",c("bs_curry")._1(xa,function(eb,fb){return s(1,eb,fb);})),c("KeyEventController").registerKey("LEFT",c("bs_curry")._1(ya,function(eb,fb){return t(0,eb,fb);})),c("KeyEventController").registerKey("RIGHT",c("bs_curry")._1(ya,function(eb,fb){return t(1,eb,fb);})));wa[4][0]=[za];return 0;}function ga(wa){var xa=wa[4][0];if(xa){xa[0].release();return 0;}else return 0;}function ha(wa,xa){var ya=wa[0],za=wa[4][1],ab=za?+za[0].isScrolledToTop():0,bb=k(xa[12],wa[1][12],xa[0]),cb=xa[10],db=0;if(ab!==0){db=1;}else if(bb!==0){if(cb){var eb=cb[0],fb=+(eb.length===0);return [[ya[0],ya[1],ya[2],fb!==0?eb:ya[3],1]];}else return 0;}else db=1;if(db===1)if(cb){var gb=cb[0],hb=+(gb.length===0);return [[ya[0],ya[1],ya[2],hb!==0?gb:ya[3],ya[4]&&1-ab]];}else return 0;}function ia(wa,xa,ya){var za=+(ya[0][1]!==xa[1]),ab=ya[1][4]&&1-wa[4],bb=ya[4][1];if(za!==0)if(ab!==0&&bb)bb[0].scrollToTop();return 0;}function ja(wa){var xa=wa[1],ya=xa[3],za;if(ya===c("MessagingTag").INBOX){var ab=+(xa[2]===c("MercuryFilters").UNREAD);za=ab!==0?j._("No unread messages found."):j._("No messages found.");}else za=ya===c("MessagingTag").PENDING?j._("No message requests found."):j._("No filtered requests found.");var bb=+(xa[3]!==c("MessagingTag").INBOX||xa[2]!==c("MercuryFilters").ALL),cb=bb!==0?c("linkReact").createElement(0,0,0,[da],0,0,0,0,0,0)([j._("Return to inbox."),0],0,0,0):null;return c("React").createElement("div",{className:"_3blk"},za,c("React").createElement("div",{className:"_3bll"},cb));}function ka(wa,xa){var ya=wa[1],za=wa[0],ab=ya[0],bb=ab&&ab[0]===xa.thread_id?1:0,cb=za[0],db=cb?1:0,eb=za[0],fb=eb&&eb[0]===xa.thread_id?1:0,gb=bb!==0?db!==0&&fb===0?0:1:fb!==0?1:0;return c("messengerThreadlistRowContainerReact").createElement([bb],[fb],[za[2]],[gb],c("bs_curry")._1(wa[2],q),c("bs_curry")._1(wa[3],aa),xa,ya[13])(0,0,[xa.thread_id],0);}function la(wa){var xa=wa[1];if(xa[12].length){return c("messengerThreadListGridWrapperReact").createElement(j._("Conversation List"))([c("bs_array").map(function(ya){return ka(wa,ya);},xa[12]),0],0,0,0);}else return ja(wa);}function ma(wa){var xa=wa[1],ya=xa[5],za=xa[6],ab=0,bb=0;if(ya){if(ya[0]!==0){return null;}else bb=2;}else bb=2;if(bb===2)if(za){if(za[0]!==0){return c("React").createElement("div",{className:"_19hf"},c("messengerSpinnerReact").createElement(0,0,0)(0,0,0,0));}else ab=1;}else ab=1;if(ab===1)return c("React").createElement("div",{className:"_19hf"},c("linkReact").createElement(0,0,["#"],[c("bs_curry")._1(wa[3],ea)],0,0,0,[-1],0,0)([j._("Show Older"),0],0,0,0));}function na(wa,xa){wa[4][1]=[xa];return 0;}function oa(wa,xa){var ya=xa[1],za=xa[0];c("MessengerActions").selectThread(za,ya);c("MessengerSearchFunnelLogger").logResultSelection("WWW_MESSENGER_SEARCH_SESSION_FUNNEL",wa[0][3],za,ya);return 0;}function pa(wa){var xa=wa[3],ya=wa[2],za=wa[1],ab=wa[0],bb=ab[4]&&1-ab[1],cb=j._("Conversations"),db=za[10],eb=db?1:0,fb=function ob(pb,qb){return c("bs_curry")._2(xa,oa,[pb,qb]);},gb=+(za[3]===c("MessagingTag").INBOX),hb;if(gb!==0){var ib=+c("WorkGKs").workplace_www_chat_branding;hb=c("messengerGraphQLSearchTypeaheadReact").createElement("_5iwm"+(ab[1]||+(ab[3].length>0)?" "+"_5iwn":"")+(" "+"_150g"),1,0,0,0,[+(ab[3]==="")&&1-eb],[eb],[ab[1]],c("bs_curry")._1(ya,x),c("bs_curry")._1(ya,y),c("bs_curry")._1(ya,z),c("bs_curry")._1(ya,w),c("bs_curry")._1(xa,aa),fb,ib!==0?j._("Search Work Chat"):j._("Search Messenger"),[ab[3]],1,1,"_11_d",za[13])(0,0,0,0);}else hb=null;var jb=+(za[3]===c("MessagingTag").PENDING),kb=+(za[3]===c("MessagingTag").INBOX&&za[8].length>0),lb=za[4],mb=+(za[3]===c("MessagingTag").PENDING),nb=za[11];return c("React").createElement("div",{className:"_2xhi"},c("chatSidebarSheetReact").createElement("_p0g")(0,0,0,0),c("messengerNewMessagesNoticeReact").createElement(bb,c("bs_curry")._1(ya,v))(0,0,0,0),c("messengerFlexScrollableAreaReact").createElement([c("bs_curry")._1(ya,u)])([hb,[jb!==0?c("messengerMessageRequestsInfoReact").createElement(0,0,0,0):null,[c("React").createElement("div",{"aria-label":cb,className:ab[1]&&1-eb?"accessible_elem":"",role:"navigation"},kb!==0?c("messengerThreadlistMessageRequestsRowReact").createElement(za[8],za[13])(0,0,0,0):null,lb!==0?c("messengerThreadlistNewMessageRowReact").createElement(za[7],c("bs_curry")._1(xa,ba))(0,0,0,0):null,la(wa),mb!==0?c("messengerThreadlistLinkRowReact").createElement(ca,0,0):null,nb?c("bs_curry")._1(nb[0],0):ma(wa)),0]]],[c("bs_curry")._1(xa,na)],0,0));}var qa=[function(wa){var xa=c("utilsRe").nullUndefinedBooleanToOptionBool(wa.isComposing);return [c("bs_js_primitive").null_undefined_to_opt(wa.activeThreadID),c("bs_js_primitive").null_undefined_to_opt(wa.clearQuery),wa.filter,wa.folder,xa?xa[0]:0,c("utilsRe").nullUndefinedBooleanToOptionBool(wa.isLoaded),c("utilsRe").nullUndefinedBooleanToOptionBool(wa.isLoading),+wa.isNewMessageActive,wa.newMessageRequestThreads,wa.onLoadMoreRequest,c("bs_js_primitive").null_undefined_to_opt(wa.queryString),c("bs_js_primitive").null_undefined_to_opt(wa.renderLoadMore),wa.threads,wa.viewer];}],ra=[m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa],sa=c("reactRe").CreateComponent([n,o,p,fa,ha,m,ia,ga,qa,pa]),ta=sa[1];function ua(wa,xa,ya,za,ab,bb,cb,db,eb,fb,gb,hb,ib,jb){return c("bs_curry")._1(ta,[wa,xa,ya,za,ab,bb,cb,db,eb,fb,gb,hb,ib,jb]);}var va=sa[0];g.hasNewUnreadMessages=k;g.filterKeyEvent=l;g.MessengerThreadlistReact=ra;g.comp=va;g.wrapProps=ta;g.createElement=ua;}),null);