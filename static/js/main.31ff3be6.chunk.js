(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(16),o=a.n(r),i=(a(28),a(29),a(4)),s=a(11),c=a(13),d=a(3),m=a(19),p=a(8);var g={lang:"ko",nav:{home:"Intro",about:"About",skills:"Skills",projects:"Projects",build:"How I Build",langSwitchLabel:"EN",koOnlyNote:"\ud55c\uad6d\uc5b4\ub9cc \uc81c\uacf5"},hero:{headline:"\ud604\uc5c5\uc758 \ubc18\ubcf5 \uc5c5\ubb34\ub97c, \ub9e4\uc77c \ub3cc\uc544\uac00\ub294 AI \uc2dc\uc2a4\ud15c\uc73c\ub85c",sub:"AI Builder \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4. SNS \ucee4\uba38\uc2a4 \uc2a4\ud0c0\ud2b8\uc5c5 StyleSeller\uc5d0\uc11c 10\uac1c\uc6d4 \ub3d9\uc548 \uc5c5\ubb34\ub97c \uc704\ud55c \uc0ac\ub0b4 AI \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc744 \ud63c\uc790 \uc124\uacc4\xb7\uad6c\ucd95\xb7\uc6b4\uc601\ud588\uc2b5\ub2c8\ub2e4.",metrics:[{value:"10\uac1c\uc6d4",label:"1\uc778 \ube4c\ub354 \xb7 2025.12\u2013\ud604\uc7ac"},{value:"7,000",label:"\ubcf8\uc778 \ucee4\ubc0b (\ud575\uc2ec \uc800\uc7a5\uc18c 5\uac1c)"},{value:"~40",label:"\uc6b4\uc601 \uc11c\ube44\uc2a4 (Docker \xb7 GCP)"},{value:"4,500+",label:"\uc790\ub3d9 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4"}]},systemMap:{title:"System Map",intro:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 DM \uc790\ub3d9\ud654\uc5d0\uc11c \uc2dc\uc791\ud574 \ud575\uc2ec \uc800\uc7a5\uc18c \uc138 \uac1c(brand-tool, email-agent, styleseller-agent-company)\ub85c \uc790\ub790\uace0, \uc9c0\uae08\uc740 \ud558\ub098\uc758 \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc73c\ub85c \ub9de\ubb3c\ub824 \ub3cc\uc544\uac11\ub2c8\ub2e4. \uc9c1\uc6d0\uc740 \uc6f9 \ud55c \uacf3\uc5d0\uc11c \uc77c\ud558\uace0, \ub4a4\uc5d0\uc11c\ub294 \uc5d0\uc774\uc804\ud2b8\uc640 \uc9c1\uc6d0 PC \uc6cc\ucee4\uac00 \uac19\uc740 DB \uc640 \uac19\uc740 \uc9c0\uc2dd \uadf8\ub798\ud504\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. \ubc88\ud638\ub97c \ub204\ub974\uba74 \ud574\ub2f9 \uc0ac\ub840\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",image:"/images/v2/system-map-ko.png",imageAlt:"StyleSeller AI \uc6b4\uc601 \uc2dc\uc2a4\ud15c \uc804\uccb4 \uc9c0\ub3c4",nodes:[{id:"vendor-cs",label:"\u2460 \ubca4\ub354 CS AI",caseId:"vendor-cs"},{id:"sales-pipeline",label:"\u2461 \uc601\uc5c5 \ud30c\uc774\ud504\ub77c\uc778",caseId:"sales-pipeline"},{id:"company-os",label:"\u2462 AI Company OS \xb7 Spark",caseId:"company-os"},{id:"email-agent",label:"\u2463 \ub300\ud45c \uba54\uc77c \uc5d0\uc774\uc804\ud2b8",caseId:"email-agent"},{id:"field-fleet",label:"\u2464 \uc9c1\uc6d0 PC \ud568\ub300 \xb7 \uc6b4\uc601 \uc778\ud504\ub77c",caseId:"field-fleet"}],layers:[{name:"\uc0ac\ub78c \uc811\uc810",desc:"\uc0ac\ub0b4 \uc6b4\uc601 \uc6f9, Slack \uc2b9\uc778 \uce74\ub4dc, Chrome \ud655\uc7a5 \ud328\ub110"},{name:"\uc5d0\uc774\uc804\ud2b8",desc:"Paperclip \uae30\ubc18 AI Company OS \u2014 \uc774\uc288\xb7\uc2b9\uc778, \ubca4\ub354 CS\xb7\ucf58\ud150\uce20 \uc5d0\uc774\uc804\ud2b8"},{name:"\uc9c0\uc2dd",desc:"GraphRAG(LightRAG + Neo4j) \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 13\uac1c\ub97c \uba54\uc77c\xb7\ubca4\ub354 CS\xb7Spark\xb7\ubca4\ub354 \ub9e4\uce6d\uc774 \uacf5\uc720"},{name:"\ud604\uc7a5",desc:"\uc9c1\uc6d0 \ub9e5\xb7\uc708\ub3c4\uc6b0\uc758 \uce74\ud1a1 CLI\xb7\uc2e4\uc2dc\uac04 \ub9b4\ub808\uc774\xb7\uc140\ub7ec\ucc3e\uae30 \uc6cc\ucee4\xb7\ud655\uc7a5, \ud55c \uc904 \uc124\uce58\uc640 \uc790\ub3d9 \uac31\uc2e0"},{name:"\ub370\uc774\ud130\xb7\uc778\ud504\ub77c",desc:"GCP VM, Docker Compose \uc57d 40\uac1c \uc11c\ube44\uc2a4, \uc790\uccb4 \ud638\uc2a4\ud305 Postgres 6\uac1c + PostgREST, LiteLLM, Langfuse"}]},cases:[{id:"vendor-cs",slug:"vendor-cs",logo:"/images/v2/logo10.png",title:"\ubca4\ub354 CS AI \u2014 \uce74\ud1a1\uc73c\ub85c \uc624\ub294 \uac70\ub798\ucc98(\ubca4\ub354) \ubb38\uc758\ub97c \ubaa8\uc73c\uace0 \uadfc\uac70\ub85c \ub2f5\ud558\ub294 \uc5d0\uc774\uc804\ud2b8",shortTitle:"\ubca4\ub354 CS AI",period:"2026.06 ~ \ud604\uc7ac",role:"\uc124\uacc4\xb7\uac1c\ubc1c\xb7\uc6b4\uc601 (1\uc778)",repos:"styleseller-agent-company (\ubca4\ub354 \uc5d0\uc774\uc804\ud2b8\xb7\ucc57\ubd07\xb7CS Copilot) \xb7 styleseller-kakaocli (Swift)",oneLiner:"\uacf5\uc2dd API \uac00 \uc5c6\ub294 \uce74\uce74\uc624\ud1a1\uc758 \ubca4\ub354 \ubb38\uc758\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ubaa8\uc73c\uace0, \uadfc\uac70\ub97c \ucc3e\uc544 \ub2f5\ud558\uace0, \uc774\uad00\xb7\ub418\ubb3b\uae30 \uc5c6\uc774 \uadfc\uac70\ub97c \ucc3e\uc544 \ub2f5\ud569\ub2c8\ub2e4.",highlights:["\uc9c1\uc6d0 PC \uce74\ud1a1 \uc2e4\uc2dc\uac04 \uc218\uc9d1: \ub85c\uceec \ub370\uc774\ud130 \ubcc0\uacbd\uc744 \uac10\uc9c0\ud558\ub294 Swift CLI + \ub9e5\xb7\uc708\ub3c4\uc6b0 \ub9b4\ub808\uc774","Agentic RAG \ucc57\ubd07: \ub3c4\uad6c \ud638\ucd9c \ub8e8\ud504 + \uadfc\uac70\xb7\ud398\ub974\uc18c\ub098\xb7\ud134 \ud310\uc815 \uad00\ubb38","\ubb34\uc870\uac74 \ub2f5\ubcc0 \uc815\ucc45(2026-09-02~): \uc774\uad00\xb7\ub418\ubb3b\uae30 \uc5c6\uc774 \uadfc\uac70\ub85c \ub2f5\ud558\uace0, Slack \uc740 \uc544\uce68\xb7\uc800\ub141 \uc694\uc57d\uacfc \uc9c1\uc6d0 \ube0c\ub9ac\ud551\uc5d0 \uc501\ub2c8\ub2e4","\uc6b4\uc601 \uc0b0\ucd9c\ubb3c: \ubca4\ub354\ubcc4 \ub300\ud654 \uc6d0\uc7a5\xb7\uc2dc\ud2b8\xb7\ub4dc\ub77c\uc774\ube0c \ubcf4\uad00, \uc544\uce68\xb7\uc800\ub141 \uc694\uc57d, \ubca4\ub354 \uc9c0\uc2dd \uc704\ud0a4, \uacc4\uc57d \uc870\uac74 \ucd94\ucd9c"],stack:["Python","FastAPI","Swift (macOS)","Node.js","Chrome Extension MV3","LightRAG + Neo4j","MCP","LiteLLM","Gemini 2.5 Flash","Postgres + PostgREST","Slack API","Google Sheets \xb7 Drive API"],scale:["\ubca4\ub354 \uc5d0\uc774\uc804\ud2b8 \ubc31\uc5d4\ub4dc: \ucf54\ub4dc 6.1\ub9cc \uc904 \xb7 \ucee4\ubc0b 600\uac1c \xb7 \ud14c\uc2a4\ud2b8 \ud30c\uc77c 107\uac1c","\ucc57\ubd07 \uc11c\ube44\uc2a4: \ucee4\ubc0b 806\uac1c (\ucc57\ubd07 \ubaa8\ub4c8 485\uac1c)","CS Copilot \ud655\uc7a5\xb7\ub85c\uceec \ubc1c\uc1a1 \uc11c\ubc84: \ucee4\ubc0b 631\uac1c","\uce74\ud1a1 CLI \ud3ec\ud06c: \ubcf8\uc778 \ucee4\ubc0b 81\uac1c \xb7 Swift 3.9\ucc9c \u2192 6.6\ucc9c \uc904"],background:"StyleSeller \uc758 \uac70\ub798\ucc98(\ubca4\ub354) \ubb38\uc758\ub294 \ub2f4\ub2f9 \uc9c1\uc6d0 \uac1c\uc778 \uce74\uce74\uc624\ud1a1\uc73c\ub85c \ub4e4\uc5b4\uc654\uc2b5\ub2c8\ub2e4. \uac19\uc740 \uc9c8\ubb38\uc5d0\ub3c4 \uc0ac\ub78c\ub9c8\ub2e4 \ub2f5\uc774 \ub2ec\ub790\uace0, \ub300\ud654 \uae30\ub85d\uc740 \uac01\uc790\uc758 PC \uc5d0\ub9cc \ub0a8\uc558\uc2b5\ub2c8\ub2e4. \uce74\uce74\uc624\ud1a1 \uac1c\uc778\ud1a1\uc5d0\ub294 \uacf5\uc2dd API \uac00 \uc5c6\uc5b4\uc11c \uc11c\ubc84\ub9cc\uc73c\ub85c\ub294 \ud480 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4. \uc9c1\uc6d0 PC \uc5d0\uc11c \ub300\ud654\ub97c \ubaa8\uc73c\uace0, \uc11c\ubc84\uc758 \uc5d0\uc774\uc804\ud2b8\uac00 \ub2f5\uc744 \ub9cc\ub4e4\uace0, \uc0ac\ub78c\uc774 \ud310\ub2e8\ud560 \uc9c0\uc810\uc744 \ubd84\uba85\ud788 \ub098\ub204\ub294 \uad6c\uc870\ub85c \ud480\uc5c8\uc2b5\ub2c8\ub2e4.",flow:["\uc9c1\uc6d0 \ub9e5\uc758 \uce74\ud1a1 \ub370\uc774\ud130 \ubcc0\uacbd\uc744 Swift CLI \uac00 \uac10\uc9c0\ud574 \uc6f9\ud6c5\uc73c\ub85c \ubcf4\ub0c5\ub2c8\ub2e4. \uc708\ub3c4\uc6b0 PC \ub294 \ubcc4\ub3c4 \uc218\uc9d1\uae30\uac00 \uac19\uc740 \uc77c\uc744 \ud569\ub2c8\ub2e4.","\ubca4\ub354 \uc5d0\uc774\uc804\ud2b8\uac00 \ud5c8\uc6a9 \ubaa9\ub85d \uac8c\uc774\ud2b8\ub97c \ud1b5\uacfc\uc2dc\ud0a4\uace0, \ubc29 \uc774\ub984\uc744 \uc0ac\ub0b4 \ubca4\ub354 \ub808\ucf54\ub4dc\uc5d0 \uc5f0\uacb0\ud55c \ub4a4 \uc6d0\ubb38\uc744 \uc9c0\uc2dd \uadf8\ub798\ud504\uc5d0 \uc801\uc7ac\ud569\ub2c8\ub2e4.","\ucc57\ubd07 \uc5d0\uc774\uc804\ud2b8\uac00 \uc9c0\uc2dd \uadf8\ub798\ud504\xb7\uc0c1\ud488\xb7\uac00\uaca9\xb7\uc81c\uc548\uc11c \ub3c4\uad6c\ub97c \ud638\ucd9c\ud574 \ub2f5\uc744 \ub9cc\ub4e4\uace0, \ud310\uc815 \uad00\ubb38\uc744 \ud1b5\uacfc\ud574\uc57c\ub9cc \ubc1c\uc1a1 \ub300\uae30\uc5f4\uc5d0 \uc62c\ub9bd\ub2c8\ub2e4.","\uc608\uc678\ub294 \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4. \ub2e4\ub978 \ubca4\ub354 \uc815\ubcf4\ub294 \ub9c9\uace0, \uc81c\uc548\uc11c\ub97c \ubcf4\ub0bc\uc9c0 \ubd88\ubd84\uba85\ud558\uba74 \ub2e4\uc2dc \ud655\uc778\ud569\ub2c8\ub2e4. \uc0ac\ub78c\uc774 \uace0\uce5c \ub2f5\uc740 \ub2e4\uc2dc \uc9c0\uc2dd \uadf8\ub798\ud504\uc5d0 \ud559\uc2b5\ub429\ub2c8\ub2e4.","\uc2e4\uc81c \ubc1c\uc1a1\uc740 \uc9c1\uc6d0 \ub9e5\uc774 \uc791\uc5c5\uc744 \uac00\uc838\uac00 \uce74\ud1a1 CLI \ub85c \ubcf4\ub0b4\uace0, \ub3c4\ucc29\uae4c\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."],architectureImages:[{src:"/images/v2/vendor-cs-ko.png",alt:"\ubca4\ub354 CS AI \ud750\ub984\ub3c4"}],troubleshooting:[{title:"A \ubca4\ub354 \uc9c8\ubb38\uc5d0 B \ubca4\ub354 \uc870\uac74\uc744 \ub2f5\ud55c \ubb38\uc81c (RAG \uad50\ucc28 \ub204\ucd9c)",problem:"2026-08-13 \uc6b4\uc601 \uc911\uc5d0 \ub2e4\ub978 \ubca4\ub354\uc758 \uac1c\ubcc4 \uac70\ub798 \uc870\uac74\uc744 \ud68c\uc0ac \uc815\ucc45\ucc98\ub7fc \ud655\ub2f5\ud55c \uc0ac\ub840\uac00 \ub098\uc654\uc2b5\ub2c8\ub2e4.",cause:"\ub300\ud654 \uae30\ub85d\uc774 \uc544\ub2c8\ub77c \uc9c0\uc2dd \uadf8\ub798\ud504 \uad6c\uc870\uac00 \uc6d0\uc778\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uac1c\ubcc4 \uac70\ub798\uac00 \uacf5\uc6a9 \uc9c0\uc2dd\uacfc \ud568\uaed8 \uac80\uc0c9\ub410\uc2b5\ub2c8\ub2e4.",action:"\ub3c4\uad6c \ub2e8\uacc4\uc5d0\uc11c \ub2e4\ub978 \ubca4\ub354\uc758 \uac1c\ubcc4 \uac70\ub798 \uc5b8\uae09\uc744 \uac00\ub9ac\ub294 \ud3b8\uc9d1\uc744 \ub123\uace0, \ub2f5\ubcc0 \ubc94\uc704 \uac8c\uc774\ud2b8\ub97c \ub354\ud588\uc2b5\ub2c8\ub2e4.",result:"\ubca4\ub354 \uac1c\ubcc4\xb7\uacf5\uc6a9 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ubd84\ub9ac \uc704\uc5d0 \ud55c \uacb9\uc744 \ub354 \ub46c\uc11c, \uac80\uc0c9 \uacb0\uacfc\uac00 \uc11e\uc5ec\ub3c4 \ub2f5\ubcc0\uc5d0\ub294 \uc0c8\uc9c0 \uc54a\uac8c \ud588\uc2b5\ub2c8\ub2e4."},{title:"\ubc1c\uc1a1 \uc791\uc5c5\uc758 21% \uac00 \uc601\uad6c \uc2e4\ud328\ud55c \ubb38\uc81c",problem:"\uce74\ud1a1 \ubc1c\uc1a1 \uc791\uc5c5 147\uac74 \uc911 31\uac74\uc774 \ub05d\ub098\uc9c0 \uc54a\uace0 \uc2e4\ud328\ub85c \ub0a8\uc558\uc2b5\ub2c8\ub2e4.",cause:"\uce74\ud1a1 \ucc3d \uc0c1\ud0dc\ub97c \ubb3b\ub294 \uc811\uadfc\uc131 \ud638\ucd9c\uc774 \uba48\ucd94\uba74 \uc791\uc5c5\uc774 \uc601\uc6d0\ud788 \ub300\uae30\ud588\uc2b5\ub2c8\ub2e4.",action:"\ud558\ub4dc \ud0c0\uc784\uc544\uc6c3 \uc6cc\uce58\ub3c5\uc744 \ub123\uace0, \ubc1c\uc1a1 \ub4a4 \uc2e4\uc81c \ub3c4\ucc29 \uc5ec\ubd80\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uac8c \ud588\uc2b5\ub2c8\ub2e4."},{title:"\ud0a4\uc6cc\ub4dc \ud544\ud130\uac00 \uba54\uc2dc\uc9c0\ub97c \uc870\uc6a9\ud788 \ub9c9\ub358 \ubb38\uc81c",problem:"\uc815\uaddc\uc2dd \uac8c\uc774\ud2b8\uac00 \uba54\uc2dc\uc9c0\ub97c \ub9c9\uace0 LLM \uc744 \uac74\ub108\ub6f0\uc5c8\uc2b5\ub2c8\ub2e4. \ub9c9\ud78c \uc904\ub3c4 \uc544\ubb34\ub3c4 \ubab0\ub790\uc2b5\ub2c8\ub2e4.",action:"\uc2fc 1\ucc28 \ud2b8\ub9ac\uac70 \ub4a4\uc5d0 temperature 0, 5\ucd08 \uc81c\ud55c LLM \ud310\uc815\uc744 \ub480\uc2b5\ub2c8\ub2e4. \ud310\uc815\uc774 \uc2e4\ud328\ud558\uba74 \ub2eb\ud788\uace0(fail-closed), \uc774\uc720\uac00 \uc9c1\uc6d0 \ud654\uba74\uc5d0 \ubcf4\uc785\ub2c8\ub2e4."},{title:"\uba54\uc2dc\uc9c0\ub97c \uc783\uc9c0 \uc54a\ub294 \uc218\uc9d1",problem:"\uc9c1\uc6d0 PC \uc640 \uc11c\ubc84 \uc0ac\uc774 \uc5f0\uacb0\uc774 \ub04a\uae30\uba74 \uba54\uc2dc\uc9c0\uac00 \ube60\uc9c8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",action:"\uc11c\ubc84\uac00 \ubc1b\uc558\ub2e4\uace0 \uc751\ub2f5\ud55c \ub4a4\uc5d0\ub9cc \ub85c\uceec \uccb4\ud06c\ud3ec\uc778\ud2b8\ub97c \uc6d0\uc790\uc801\uc73c\ub85c \uc62e\uae30\uace0, \uc218\uc9d1\uc774 \uba48\ucd94\uba74 Slack \uc73c\ub85c \uacbd\ubcf4\ud569\ub2c8\ub2e4."}],aiCollab:["\ud3c9\uac00: 2026-08-13 \uc6b4\uc601 \uc911 \ubc1c\uacac\ud55c \uad50\ucc28 \ub204\ucd9c\uc744 \ub9c9\uc558\uace0, \ud310\uc815 \uad00\ubb38 \ud14c\uc2a4\ud2b8\ub97c \uc2a4\uc704\ud2b8\uc5d0 \ub123\uc5c8\uc2b5\ub2c8\ub2e4.","\uc6b4\uc601 \uc0c1\ud0dc: \uc218\uc9d1\xb7\uc6d0\uc7a5\xb7\uc694\uc57d\uc740 \uc9c1\uc6d0 PC 11\ub300(\ub9e5 6\xb7\uc708\ub3c4\uc6b0 5, 2026-09-16 \ub4f1\ub85d)\uc758 \uce74\ud1a1\uc73c\ub85c \uc6b4\uc601 \uc911\uc785\ub2c8\ub2e4. \uc790\ub3d9 \ub2f5\ubcc0\uc740 \uac1c\uc120\ud310\uc744 \ud14c\uc2a4\ud2b8 \ubca4\ub354\ubc29\uc5d0\uc11c \ub2e8\uacc4\uc801\uc73c\ub85c \uac80\uc99d\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\uc0ac\ub78c\uc758 \ud1b5\uc81c: \uc790\ub3d9 \ub2f5\ubcc0\uc740 \ud14c\uc2a4\ud2b8 \ubc29\uc5d0\uc11c \ub2e8\uacc4\uc801\uc73c\ub85c \uac80\uc99d \uc911\uc774\uba70, \ud14c\uc2a4\ud2b8 \ubc29 \ud55c\uc815 \uc2a4\uc704\uce58\xb7\ub3c4\uad6c \uc2b9\uc778\xb7\ud0ac \uc2a4\uc704\uce58\ub85c \ubb36\uc5c8\uc2b5\ub2c8\ub2e4."]},{id:"sales-pipeline",slug:"sales-pipeline",logo:"/images/logo7.png",title:"\uc601\uc5c5 \ud30c\uc774\ud504\ub77c\uc778 \u2014 \uc140\ub7ec \ubc1c\uad74\ubd80\ud130 \ub9de\ucda4 \ubc1c\uc1a1\xb7\ubca4\ub354 \ub9e4\uce6d\uae4c\uc9c0 (\uc0ac\ub0b4 \uc5c5\ubb34\ud234)",shortTitle:"\uc601\uc5c5 \ud30c\uc774\ud504\ub77c\uc778",period:"2026.03 ~ \ud604\uc7ac",role:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\xb7\uc6b4\uc601 (1\uc778, brand-tool \ucee4\ubc0b \uc804\ubd80 \ubcf8\uc778)",repos:"brand-tool (Next.js) \xb7 styleseller-agent-company (\uc9c1\uc6d0 PC \uc6cc\ucee4\xb7\ubc1c\uc1a1 \uc6cc\ucee4) \xb7 email-agent (\uc9c0\uc2dd \uadf8\ub798\ud504)",oneLiner:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 \uc140\ub7ec\ub97c \uc790\ub3d9\uc73c\ub85c \ucc3e\uace0, \uc140\ub7ec\ub9c8\ub2e4 \ub9de\ub294 \uc0c1\ud488 \uce74\ub4dc\ub97c \uce74\uce74\uc624\ud1a1\uc73c\ub85c \ubcf4\ub0b4\uace0, \uc0c1\ud488\ub9c8\ub2e4 \uacf5\uad6c\ub97c \uc5f4\uc5b4 \uc904 \ud310\ub9e4 \ud30c\ud2b8\ub108\uc0ac(\ubca4\ub354\uc0ac)\ub97c LLM \uc774 \ucd94\ucc9c\ud569\ub2c8\ub2e4.",highlights:["\uc140\ub7ec\ucc3e\uae30: \ud574\uc2dc\ud0dc\uadf8 \uaddc\uce59 \u2192 \uc9c1\uc6d0 PC \ubd84\uc0b0 \uc6cc\ucee4 \uc218\uc9d1 \u2192 \uaddc\uce59\ubcc4 \uc131\uc801\ud45c \u2192 \uc2dc\ud2b8 \ubbf8\ub7ec","\ub9de\ucda4\uce74\ud1a1: \uc140\ub7ec\ubcc4 \ud310\ub9e4 \uc774\ub825\uc5d0 \ub9de\ucd98 \uc0c1\ud488 \uce74\ub4dc\ub97c \ucc44\ub110\ud1a1\xb7\uac1c\uc778\ud1a1\uc73c\ub85c \uc608\uc57d \ubc1c\uc1a1, \ub2f5\uc7a5\ud568\xb7\uac70\uc808 \uc81c\uc678","\ubca4\ub354 \ub9e4\uce6d: \uc9c0\uc2dd \uadf8\ub798\ud504 \uac80\uc0c9 \u222a \uce74\ud14c\uace0\ub9ac \ud6c4\ubcf4 \u2192 LLM \ud310\uc815 \u2192 \uc2e4\uc81c \uc131\uc0ac \ucd94\uc801","\uc81c\uc548\uc11c PDF\xb7\uc5d1\uc140 \uc790\ub3d9 \uc0dd\uc131, \ub300\ud654\ub85c \uc81c\uc548\uc11c\ub97c \uace0\uce58\ub294 \ucc57\ubd07"],stack:["Next.js 16","React 19","TypeScript","Tailwind CSS 4","Postgres 16 + PostgREST","Vertex AI Gemini 2.5","Playwright","Node.js \uc6cc\ucee4","n8n","Vitest","Docker","GitHub Actions"],scale:["brand-tool: \ucee4\ubc0b 1,502\uac1c \xb7 API \ub77c\uc6b0\ud2b8 134\uac1c \xb7 \ud654\uba74 33\uac1c","DB \ub9c8\uc774\uadf8\ub808\uc774\uc158 130\uac1c \xb7 \ud14c\uc2a4\ud2b8 \ud30c\uc77c 205\uac1c","\uc140\ub7ec\ucc3e\uae30(\uc11c\ubc84 + \uc6cc\ucee4) \ucf54\ub4dc 2.4\ub9cc \uc904 \xb7 \ub9de\ucda4\uce74\ud1a1 \ucf54\ub4dc 3.4\ub9cc \uc904 \xb7 \ucee4\ubc0b 470\uac1c"],background:"\uc601\uc5c5 \uc9c1\uc6d0\uc740 \uc81c\uc548\uc11c \ud55c \uc7a5\uc744 \ub9cc\ub4e4\ub824\uace0 \uad6c\uae00 \uc2dc\ud2b8\xb7\uc678\ubd80 CRM\xb7\ub178\uc158\uc744 \uc624\uac00\uba70 \uac00\uaca9\uc744 \uc190\uc73c\ub85c \uacc4\uc0b0\ud588\uc2b5\ub2c8\ub2e4. \uc140\ub7ec \ubc1c\uad74\uc740 \ud574\uc2dc\ud0dc\uadf8\ub97c \ud558\ub098\uc529 \ub20c\ub7ec \ub9ac\uc2a4\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uc77c\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ud769\uc5b4\uc9c4 \ub370\uc774\ud130\ub97c \ud55c DB \ub85c \ubaa8\uc73c\ub294 \ub370\uc11c \uc2dc\uc791\ud574, \ubc1c\uad74\xb7\ubc1c\uc1a1\xb7\ub9e4\uce6d\uc774 \ud55c \uc571\uc5d0\uc11c \ub05d\ub098\ub3c4\ub85d \ub113\ud614\uc2b5\ub2c8\ub2e4.",flow:["\uc9c1\uc6d0\uc774 \ud574\uc2dc\ud0dc\uadf8 \uaddc\uce59\uc744 \ub9cc\ub4e4\uba74 \uc11c\ubc84\uac00 \ud68c\ucc28\ub97c \ub9cc\ub4e4\uc5b4 \uc9c1\uc6d0 PC \uc6cc\ucee4\uc5d0 \ubc30\uc815\ud569\ub2c8\ub2e4.","\uc6cc\ucee4\uac00 \ube0c\ub77c\uc6b0\uc800 \uc790\ub3d9\ud654\ub85c \uc870\uac74(\ub9b4\uc2a4 \uc870\ud68c\uc218\xb7\ucea1\uc158 \ub4f1)\uc744 \ud1b5\uacfc\ud55c \uc140\ub7ec\ub97c \ucc3e\uc544 \ubcf4\uace0\ud569\ub2c8\ub2e4.","\uacb0\uacfc\ub294 \uc140\ub7ec \uc6d0\uc7a5(\ub178\uc158\xb7\uce74\ud1a1 \uc6d0\uc7a5\xb7\uc140\ub7ec\ucc3e\uae30 \ubcd1\ud569)\uc5d0 \ub4e4\uc5b4\uac00\uace0, \uc6b4\uc601\uc790\uac00 \ub300\uc0c1\uc744 \uace8\ub77c \ub9de\ucda4\uce74\ud1a1\uc744 \uc608\uc57d\ud569\ub2c8\ub2e4.","\ucc44\ub110\ud1a1\uc740 VM \uc758 \ube0c\ub77c\uc6b0\uc800 \uc6cc\ucee4\uac00, \uac1c\uc778\ud1a1\uc740 \ub9e5\uc758 \uce74\ud1a1 CLI \uac00 \ubcf4\ub0c5\ub2c8\ub2e4. \ub2f5\uc7a5\uc740 \ub2e4\uc2dc \ubaa8\uc544 \ub2f5\uc7a5\ud568\uc5d0\uc11c \ud310\uc815\ud569\ub2c8\ub2e4.","\uc0c1\ud488\uc744 \uc62c\ub9ac\uba74 \uc9c0\uc2dd \uadf8\ub798\ud504\uc640 \uce74\ud14c\uace0\ub9ac \ud6c4\ubcf4\ub97c \ud569\uccd0 LLM \uc774 \uacf5\uad6c\ub97c \uc5f4\uc5b4 \uc904 \ud310\ub9e4 \ud30c\ud2b8\ub108\uc0ac(\ubca4\ub354\uc0ac)\ub97c \ucd94\ucc9c\ud558\uace0, \uc81c\uc548 \uce74\ud1a1\uc740 \ubc1c\uc1a1 \ud050\ub85c \ub098\uac11\ub2c8\ub2e4."],architectureImages:[{src:"/images/v2/sales-pipeline-ko.png",alt:"\uc601\uc5c5 \ud30c\uc774\ud504\ub77c\uc778 \ud750\ub984\ub3c4"}],troubleshooting:[{title:"\uc11c\ubc84\uc5d0\uc11c\ub294 \uc218\uc9d1\ud560 \uc218 \uc5c6\uc5c8\ub358 \ubb38\uc81c",problem:"\uc11c\ubc84(\ub370\uc774\ud130\uc13c\ud130) \ud658\uacbd\uc5d0\uc11c\ub294 \uc778\uc2a4\ud0c0\uadf8\ub7a8 \uc218\uc9d1\uc774 \ub9c9\ud614\uc2b5\ub2c8\ub2e4.",action:"\uc9c1\uc6d0 PC \uc5d0\uc11c \ub3c4\ub294 \ubd84\uc0b0 \uc6cc\ucee4\ub85c \uc124\uacc4\ud588\uc2b5\ub2c8\ub2e4. \ud654\uba74\uc744 \ud074\ub9ad\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc790\ub3d9\ud654\ub77c \uc9c1\uc6d0 \uc791\uc5c5\uc744 \ubc29\ud574\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\ub294 \uc7a1 \ud050, \uae30\uae30 \ud0a4 \ub4f1\ub85d, \ud55c \uacc4\uc815 \ud55c PC \uaddc\uce59, \uba48\ucd98 \ud68c\ucc28 \uc9c4\ub2e8\xb7\uc7ac\ubc30\uce58\ub97c \ub9e1\uc2b5\ub2c8\ub2e4.",result:"\uc9c1\uc6d0 PC \uc5d0\ub294 DB \ud0a4\ub97c \uc8fc\uc9c0 \uc54a\uace0, \ucde8\uc18c\ud560 \uc218 \uc788\ub294 \uae30\uae30 \ud0a4\ub9cc \uc90d\ub2c8\ub2e4. \uc6cc\ucee4 PC 9\ub300\uac00 \uc6b4\uc601 \uc911\uc785\ub2c8\ub2e4."},{title:"\uc11c\ubc84\uac00 \uc0b4\uc544\ub098\uc790\ub9c8\uc790 \uc9c4\ud589 \uc911 \ud68c\ucc28\ub97c \ubaa8\ub450 \ucde8\uc18c\ud55c \ubc84\uadf8",problem:"\uc11c\ubc84\uac00 \uba48\ucdc4\ub2e4 \ubcf5\uad6c\ub418\uc790 \uccab \uc815\ub9ac \uc791\uc5c5\uc774 \uc9c4\ud589 \uc911\uc774\ub358 \ud68c\ucc28 6\uac1c\ub97c \ubaa8\ub450 \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4.",cause:'"3\ubd84\uac04 \uc548 \ubcf4\uc778 \uc6cc\ucee4\uc758 \uc791\uc5c5 \ucde8\uc18c" \uaddc\uce59\uc774 \uc11c\ubc84\uac00 \uaebc\uc838 \uc788\ub358 \uc2dc\uac04\uae4c\uc9c0 \uc6cc\ucee4 \ubd80\uc7ac\ub85c \uc14c\uc2b5\ub2c8\ub2e4.',action:"\uc815\ub9ac \ud568\uc218\uac00 \uc790\uae30 \uc2e4\ud589 \uac04\uaca9\uc744 \uae30\ub85d\ud574, \uac04\uaca9\uc774 \ube44\uba74 \uc11c\ubc84 \ubd80\uc7ac\ub85c \ubcf4\uace0 3\ubd84 \uc5f0\uc18d \uc0b4\uc544 \uc788\uc740 \ub4a4\uc5d0\ub9cc \ucde8\uc18c\ud558\uac8c \ud588\uc2b5\ub2c8\ub2e4.",result:"psql \uc7ac\ud604 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc61b \ud568\uc218\ub294 2/2 \ucde8\uc18c, \uc0c8 \ud568\uc218\ub294 0 \uc774\uc5c8\uc2b5\ub2c8\ub2e4."},{title:"\ud654\uba74 \uc218\uc728\uc774 \uc2e4\uc81c\ubcf4\ub2e4 3\ubc30 \ub0ae\uac8c \ubcf4\uc778 \ubb38\uc81c",problem:"\uc140\ub7ec\ucc3e\uae30 \uc218\uc728\uc774 1.4% \ub85c \ubcf4\uc600\uc2b5\ub2c8\ub2e4.",cause:"\ud68c\ucc28\ub97c \uc7ac\uac1c\ud558\uba74 \ubd84\uc790\ub9cc \ub9ac\uc14b\ub410\uc2b5\ub2c8\ub2e4.",action:'\uc0c1\ud0dc\uac12 \ub300\uc2e0 "\ubd84\ubaa8 = \ubd84\uc790 + \ub098\uba38\uc9c0" \ubd88\ubcc0\uc2dd\uc73c\ub85c \uac78\ub7ec\ub0c8\uc2b5\ub2c8\ub2e4.',result:"\uc2e4\uc81c \uc218\uc728\uc740 4.2% \uc600\uc2b5\ub2c8\ub2e4."},{title:"200\uba85 \ub118\uac8c \ubcf4\ub0b8 \ub0a0 \ub2f5\uc7a5\ud568\uc774 \ud1b5\uc9f8\ub85c \uc0ac\ub77c\uc9c4 \ubb38\uc81c",cause:"\ubc29 \ubc88\ud638 200\uac1c(3.5KB)\ub97c \ub123\uc740 \uc694\uccad URL \uc744 \uc55e\ub2e8 \ud504\ub85d\uc2dc\uac00 502 \ub85c \ub04a\uc5c8\uc2b5\ub2c8\ub2e4.",action:"\uae38\uc774\ubcc4\ub85c \uc2e4\uce21\ud574 \uacbd\uacc4\ub97c \ucc3e\uace0(100\uac1c \ud1b5\uacfc, 200\uac1c \uc2e4\ud328) 60\uac1c \ub2e8\uc704\ub85c \ub098\ub234\uc2b5\ub2c8\ub2e4."},{title:"LLM \ubca4\ub354 \ub9e4\uce6d \uacb0\uacfc\uac00 \uc694\uccad\ub9c8\ub2e4 \ub2ec\ub77c\uc9c0\ub358 \ubb38\uc81c",cause:"30\uac1c\uc529 \ub098\ub208 \uccad\ud06c\ub9c8\ub2e4 \uac19\uc740 \ubca4\ub354\uac00 \ub2e4\ub978 \uc810\uc218\ub97c \ubc1b\uace0 \ub9c8\uc9c0\ub9c9 \uac12\uc73c\ub85c \ub36e\uc600\uc2b5\ub2c8\ub2e4. \ubaa8\ub378\uc774 \uac00\ub054 \ud56d\ubaa9\uc744 \ube60\ub728\ub9ac\uae30\ub3c4 \ud588\uc2b5\ub2c8\ub2e4.",action:"\ucd5c\uace0 \uc810\uc218\ub9cc \uc720\uc9c0\ud558\uace0 \ube60\uc9c4 \ud56d\ubaa9\ub9cc \uc881\ud600 \uc7ac\uc9c8\uc758\ud588\uc2b5\ub2c8\ub2e4. \ud6c4\ubcf4\ub294 \uc9c0\uc2dd \uadf8\ub798\ud504 \u222a \uce74\ud14c\uace0\ub9ac \ud569\uc9d1\ud569\uc73c\ub85c \ubc14\uafe8\uc2b5\ub2c8\ub2e4."}],aiCollab:["\uc6b4\uc601 \uc218\uce58: \uc140\ub7ec\ucc3e\uae30 \ud68c\ucc28\ub2f9 \uc57d 510\uba85 \uc870\uc0ac \xb7 \ud1b5\uacfc\uc728 \uc57d 4.4%, \ub9de\ucda4\uce74\ud1a1 \ud55c \ud68c\ucc28 261\uba85 \ubc1c\uc1a1.","\uc0c1\ud488 \uce90\uc2dc\ub294 \ud558\ub8e8 3\ud68c \ub3d9\uae30\ud654\ud558\uace0, \ubd80\ubd84 \uc2e4\ud328\ub85c \uc804\uccb4 \uc0c1\ud488\uc774 \uc885\ub8cc \ucc98\ub9ac\ub418\uc9c0 \uc54a\uac8c \ube44\uc728 + \uc808\ub300 \ud558\ud55c \uac00\ub4dc\ub97c \ub480\uc2b5\ub2c8\ub2e4.","\uae30\ub2a5\ub9c8\ub2e4 \uc124\uacc4 \ubb38\uc11c \u2192 \uacc4\ud68d \u2192 \ud14c\uc2a4\ud2b8 \uba3c\uc800 \u2192 \uad6c\ud604 \u2192 \ub9ac\ubdf0 \uc21c\uc11c\ub85c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."]},{id:"company-os",slug:"company-os",logo:"/images/logo6.png",title:"AI Company OS \xb7 Spark \u2014 \uc0ac\ub78c\uc740 \uc2b9\uc778\ub9cc \ud558\ub294 \uc0ac\ub0b4 AI \uc870\uc9c1",shortTitle:"AI Company OS \xb7 Spark",period:"2026.05 ~ \ud604\uc7ac",role:"\uc124\uacc4\xb7\uac1c\ubc1c\xb7\uc778\ud504\ub77c\xb7\uc6b4\uc601 (1\uc778)",repos:"styleseller-agent-company (\uc11c\ubc84\xb7MCP\xb7\uc11c\ube44\uc2a4) \xb7 brand-tool (Spark\xb7\uc2b9\uc778\ud568 \ud654\uba74)",oneLiner:"\uc624\ud508\uc18c\uc2a4 Paperclip(\uc774\uc288\xb7\uc2b9\uc778\xb7\uc608\uc0b0) \uc704\uc5d0 \ud68c\uc0ac \uc804\uc6a9 \uc5d0\uc774\uc804\ud2b8 \uc870\uc9c1\uacfc \uc0ac\ub0b4 AI \ube44\uc11c Spark \ub97c \uc5b9\uc5c8\uc2b5\ub2c8\ub2e4.",highlights:["\uc5d0\uc774\uc804\ud2b8 \uc870\uc9c1: CEO \uc5d0\uc774\uc804\ud2b8 \uc544\ub798 CS\xb7\ucf58\ud150\uce20\xb7\ucea0\ud398\uc778\xb7\uad11\uace0 \uc5d0\uc774\uc804\ud2b8 \uc57d 20\uac1c, \ub9e4\uc77c \ub3c4\ub294 \uac83\uc740 CS\xb7\ucf58\ud150\uce20 \uacc4\uc5f4","Spark: \ucd9c\ucc98\ub97c \uc778\uc6a9\ud558\ub294 \uc0ac\ub0b4 AI \ube44\uc11c. \uc5ed\ud560\ubcc4 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c DB 4\uac1c \uc870\ud68c, CEO \ubaa8\ub4dc \uc2e4\ud589 \uc81c\uc548\uc740 \uc2b9\uc778\ud568\uc73c\ub85c","MCP: \uc9c0\uc2dd \uadf8\ub798\ud504 \uac80\uc0c9\xb7\ud50c\ub7ab\ud3fc \uc81c\uc5b4 \uc11c\ubc84 \uc9c1\uc811 \uac1c\ubc1c, Google Workspace \uc11c\ubc84 \ud1b5\ud569","\ucee4\uba38\uc2a4 \ub9ac\uc11c\uce58: Spark \uc694\uccad \u2192 \uc9c1\uc6d0 \ud06c\ub86c \ud655\uc7a5\uc774 \ub9ac\ubdf0 \uc218\uc9d1 \u2192 VOC \ubd84\uc11d \uc5d1\uc140\xb7PDF"],stack:["TypeScript","Node.js / Express","React","PostgreSQL (Drizzle)","Python / FastAPI","MCP","LiteLLM","Gemini 2.5","Claude","LightRAG + Neo4j","Langfuse","n8n","Docker Compose","GitHub Actions","GCP"],scale:["\ubcf8\uc778 \ucee4\ubc0b 4,316\uac1c (merge\xb7upstream \uc81c\uc678)","\uc11c\ube44\uc2a4 \ub514\ub809\ud130\ub9ac 46\uac1c \xb7 MCP \uc11c\ubc84 3\uac1c \xb7 \ud50c\ub7ec\uadf8\uc778 2\uac1c","\uc124\uacc4 \ubb38\uc11c 56\uac1c \xb7 \uc2e4\ud589 \uacc4\ud68d 98\uac1c"],background:"\ucc98\uc74c \uacc4\ud68d\uc740 Temporal\xb7LangGraph\xb7LiteLLM\xb7MCP \ub97c \ubaa8\ub450 \uac16\ucd98 5\uacc4\uce35 \uc2a4\ud0dd\uc774\uc5c8\uc2b5\ub2c8\ub2e4. 2026\ub144 5\uc6d4 20\uc77c \uae30\uc900 \ud50c\ub7ab\ud3fc\uc740 \uc124\uce58\ub3fc \uc788\uc5c8\uc9c0\ub9cc \ub4f1\ub85d\ub41c \uc5d0\uc774\uc804\ud2b8\ub294 0\uac1c\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc0c8\ub85c \uc313\ub294 \ub300\uc2e0, \uc774\ubbf8 \ub3cc\uc544\uac00\ub358 \uc790\uc0b0(\uba54\uc77c \uc5d0\uc774\uc804\ud2b8, DM \ubd07, n8n)\uc744 \uba3c\uc800 \uc5f0\uacb0\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ubc14\uafe8\uc2b5\ub2c8\ub2e4.",flow:["\uc5c5\ubb34\ub294 \uc774\uc288\ub85c \ub4e4\uc5b4\uc635\ub2c8\ub2e4. n8n \uc740 \ud2b8\ub9ac\uac70\ub9cc \ub9e1\uace0, \ucd94\ub860\uc774 \ud544\uc694\ud55c \uc77c\uc740 Claude Code \uc5d0\uc774\uc804\ud2b8\uac00, \ub2e8\uc21c \ucc98\ub9ac\ub294 FastAPI \uc11c\ube44\uc2a4\uac00 \ub9e1\uc2b5\ub2c8\ub2e4.","\uc9c1\uc6d0\uc740 \uc0ac\ub0b4 \uc6f9\uc758 Spark \uc5d0\uac8c \ubb3b\uc2b5\ub2c8\ub2e4. Spark \ub294 \uc5ed\ud560\uc5d0 \ub9de\ub294 \uc77d\uae30 \uc804\uc6a9 \uc870\ud68c\uc640 \uc9c0\uc2dd \uadf8\ub798\ud504 \uac80\uc0c9\uc73c\ub85c \ucd9c\ucc98\ub97c \ubd99\uc5ec \ub2f5\ud569\ub2c8\ub2e4.","\uc2e4\ud589\uc774 \ud544\uc694\ud55c \uc81c\uc548\uc740 \uc2b9\uc778\ud568\uc73c\ub85c \uac00\uace0, \uc0ac\ub78c\uc774 \uc2b9\uc778\ud574\uc57c \uc2e4\ud589\ub429\ub2c8\ub2e4."],architectureImages:[{src:"/images/v2/company-os-ko.png",alt:"AI Company OS \uad6c\uc870\ub3c4"},{src:"/images/proj6-2.png",alt:"AI \uc5d0\uc774\uc804\ud2b8 \uc870\uc9c1\ub3c4"}],troubleshooting:[{title:"\uacfc\uc124\uacc4\ub97c \ubc84\ub9ac\uace0 \ub3d9\uc791\ud558\ub294 \uad6c\uc870\ub85c \uc804\ud658",problem:"\uacc4\ud68d\ud55c 5\uacc4\uce35 \uc2a4\ud0dd\uc740 \uad6c\ucd95 \ube44\uc6a9\uc774 \ucef8\uace0, 5\uc6d4 20\uc77c \uae30\uc900 \ub4f1\ub85d\ub41c \uc5d0\uc774\uc804\ud2b8\ub294 0\uac1c\uc600\uc2b5\ub2c8\ub2e4.",action:"Temporal \uc740 n8n \ud2b8\ub9ac\uac70 + \uc774\uc288\ub85c, LangGraph \ub294 Claude Code \uc5d0\uc774\uc804\ud2b8\ub85c \ub300\uccb4\ud558\uace0, \uc774\ubbf8 \ub3cc\uc544\uac00\ub358 \uc790\uc0b0\ubd80\ud130 \uc5f0\uacb0\ud588\uc2b5\ub2c8\ub2e4.",result:"\ub109 \ub2ec \uc0ac\uc774 \uc57d 20\uac1c \uc5d0\uc774\uc804\ud2b8\uac00 \uc870\uc9c1\ub3c4\uc5d0 \uc62c\ub77c\uac14\uc2b5\ub2c8\ub2e4."},{title:"Spark \uac00 \uad8c\ud55c \ubc16 \ub370\uc774\ud130\ub97c \ubcf4\uc9c0 \ubabb\ud558\uac8c \ud558\ub294 \uc124\uacc4",action:"\uc5ed\ud560\uc740 \uc694\uccad \ubcf8\ubb38\uc744 \ubbff\uc9c0 \uc54a\uace0 \uc11c\ubc84\uac00 DB \uba64\ubc84\uc2ed\uc73c\ub85c \ub2e4\uc2dc \uacc4\uc0b0\ud569\ub2c8\ub2e4. SQL \uc740 \uc77d\uae30 \uc804\uc6a9 \uc5ed\ud560\uacfc \uc548\uc804\ud55c SELECT \uac80\uc0ac\ub9cc \ud1b5\uacfc\ud569\ub2c8\ub2e4. \uc2b9\uc778 \uc2e4\ud589\uc740 \uba71\ub4f1\uc774\uace0, \ud0ac \uc2a4\uc704\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4."},{title:"\ub9ac\ubdf0 1,000\uac74 \uc218\uc9d1\uc774 100\ubd84 \uac78\ub9ac\ub294 \uad6c\uc870\uc600\ub358 \ubb38\uc81c",cause:"\ucd5c\uc18c\ud654\ub41c \ucc3d\uc5d0\uc11c\ub294 \ud0c0\uc774\uba38\uac00 \ubd84\ub2f9 1\ud68c\ub85c \uc81c\ud55c\ub3fc 0.5\ucd08 \ub300\uae30\uac00 60\ucd08\uac00 \ub410\uc2b5\ub2c8\ub2e4. \uacc4\uc0b0\uc0c1 1,000\uac74\uc5d0 100\ubd84\uc774\uc5c8\uc2b5\ub2c8\ub2e4.",action:"\ub300\uae30\ub97c \uc11c\ube44\uc2a4 \uc6cc\ucee4\uac00 \uc7a1\ub294 \ud2f1\uc73c\ub85c \ubc14\uafd4 \ud0c0\uc774\uba38 \uc81c\ud55c\uc744 \ubc1b\uc9c0 \uc54a\uac8c \ud588\uc2b5\ub2c8\ub2e4.",result:"\uc2e4\uce21 1,000\uac74 2\ubd84 30\ucd08."},{title:"\uc5ec\ub7ec AI \uc138\uc158\uc774 \ub3d9\uc2dc\uc5d0 \ubc30\ud3ec\ud560 \ub54c\uc758 \uc548\uc804\uc7a5\uce58",action:"VM \uc804\uc5ed \ubc30\ud3ec \ub77d, \ucee4\ubc0b \uc548 \ub41c \ud2b8\ub9ac \ubc30\ud3ec \uac70\ubd80, \ub9c8\uc9c0\ub9c9 \ube4c\ub4dc \ucee4\ubc0b \uae30\ub85d, \ubc30\ud3ec \ub300\uc0c1 \ud310\uc815 \ud568\uc218 \ud14c\uc2a4\ud2b8\ub97c \ub123\uc5c8\uc2b5\ub2c8\ub2e4."},{title:"CEO \uc5d0\uc774\uc804\ud2b8\uac00 Gemini \ud3f4\ubc31\uc73c\ub85c \ub118\uc5b4\uac00\uba74 \ube48 \ub2f5\uc774 \ub098\uc624\ub358 \ubb38\uc81c",problem:"CEO \uc5d0\uc774\uc804\ud2b8\uc758 Claude Code \uad6c\ub3c5 \ub85c\uadf8\uc778\uc774 \ub04a\uae30\uba74 Hermes \uc758 Gemini \ud3f4\ubc31\uc774 \uc774\uc5b4\ubc1b\ub294\ub370, \uc774\ub54c \ube48 \ub2f5\uc774 \ub098\uc654\uc2b5\ub2c8\ub2e4.",action:"Gemini \ud504\ub85d\uc2dc\uc758 \uba40\ud2f0\ud134 function calling \uc744 \ubcf5\uc6d0\ud588\uc2b5\ub2c8\ub2e4(tool_calls \ubcf5\uc6d0, tool_call_id \ub9e4\ud551, \ud0c0\uc784\uc544\uc6c3 \uc815\ub82c)."}],aiCollab:["\ud3c9\uac00: Spark \ud68c\uadc0 \ud3c9\uac00 \ucf00\uc774\uc2a4 \uc138\ud2b8\ub97c \ub450\uace0 \ub2f5\ubcc0 \ud488\uc9c8\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.","\uad00\uce21: \uc5d0\uc774\uc804\ud2b8 \uacbd\ub85c\uc758 LLM \ud638\ucd9c\uc740 LiteLLM \uc744 \uac70\uce58\uace0 Langfuse \ub85c \ucd94\uc801\ud569\ub2c8\ub2e4.","\uc124\uacc4 \uc6d0\uce59: \ud658\ubd88\xb7VIP\xb7\ub300\uc678 \uacc4\uc57d\ucc98\ub7fc \ub418\ub3cc\ub9ac\uae30 \uc5b4\ub824\uc6b4 \uc77c\uc740 \uc0ac\ub78c \uc2b9\uc778\uc744 \uac70\uce69\ub2c8\ub2e4."]},{id:"email-agent",slug:"email-agent",logo:"/images/logo8.png",title:"\ub300\ud45c \uba54\uc77c \uc5d0\uc774\uc804\ud2b8 \u2014 GraphRAG \ucd08\uc548 + \uc0ac\ub78c \uc2b9\uc778",shortTitle:"\ub300\ud45c \uba54\uc77c \uc5d0\uc774\uc804\ud2b8",period:"2026.03 ~ 2026.09 (\uc774\ud6c4 \uc0ac\ub0b4 \uc9c0\uc2dd \ud5c8\ube0c\ub85c \ud655\uc7a5)",role:"\uc124\uacc4\xb7\uac1c\ubc1c\xb7\ubc30\ud3ec (1\uc778)",repos:"email-agent (FastAPI) \xb7 styleseller-agent-company (\ub300\uc2dc\ubcf4\ub4dc \ud50c\ub7ec\uadf8\uc778\xb7knowledge-mcp)",oneLiner:"\uba54\uc77c\uc744 \ubd84\ub958\ud558\uace0, \ud68c\uc0ac \uc9c0\uc2dd \uadf8\ub798\ud504\uc5d0\uc11c \uadfc\uac70\ub97c \ucc3e\uc544 \ub300\ud45c \ub9d0\ud22c\ub85c \ucd08\uc548\uc744 \uc4f0\uace0, \uc0ac\ub78c\uc774 \uc2b9\uc778\ud574\uc57c \ub098\uac11\ub2c8\ub2e4. \uc774\ub54c \ub9cc\ub4e0 \uc9c0\uc2dd \uadf8\ub798\ud504\uac00 \ud68c\uc0ac \uc804\uccb4\uc758 \uc9c0\uc2dd \ud5c8\ube0c\uac00 \ub410\uc2b5\ub2c8\ub2e4.",highlights:["Gmail \u2192 n8n \u2192 FastAPI: \ud30c\uc2f1 \u2192 \ubd84\ub958 \u2192 \ucd08\uc548 \u2192 \uac80\uc99d \u2192 \ud559\uc2b5","LightRAG \uc9c0\uc2dd \uadf8\ub798\ud504(Neo4j + pgvector), \ucee4\ubc84\ub9ac\uc9c0\uac00 \ubd80\uc871\ud558\uba74 \uc9c8\uc758\ub97c \ud55c \ubc88 \ub2e4\uc2dc \uc4f0\ub294 \uc5d0\uc774\uc804\ud2b8\ud615 \uac80\uc0c9","LLM-as-Judge \ud488\uc9c8 \uac80\uc99d + \uc544\ucca8\xb7\uc575\ubb34\uc0c8 \ub2f5\ubcc0 \uac80\uc0ac","\ubcf4\ub0b8 \uba54\uc77c\uacfc \uc0ac\ub78c \uc218\uc815\ubcf8\uc73c\ub85c \ubb38\uccb4\ub97c \ud559\uc2b5\ud558\ub294 \uc2a4\ud0c0\uc77c\ubd81"],stack:["Python","FastAPI","asyncio","LightRAG","Neo4j","PostgreSQL + pgvector","Vertex AI Gemini 2.5","Claude (2026.04\u201307)","n8n","Slack","Docker Swarm","pytest","Pyright"],scale:["\ucee4\ubc0b 1,418\uac1c (2026.03\u201309, merge \uc81c\uc678, \uc870\uc9c1 \uc800\uc7a5\uc18c \uae30\uc900)","Python \uc57d 4\ub9cc \uc904 \xb7 API \ub77c\uc6b0\ud130 26\uac1c \xb7 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 85\uac1c","\uc9c0\uc2dd \uadf8\ub798\ud504 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\ub97c \uba54\uc77c\xb7\ubca4\ub354 CS\xb7Spark\xb7\ubca4\ub354 \ub9e4\uce6d\uc774 \ud568\uaed8 \uc0ac\uc6a9"],background:'\ub300\ud45c \uba54\uc77c\ud568\uc5d0\ub294 \ube0c\ub79c\ub4dc \uc81c\ud734, \uc140\ub7ec \uc785\uc810 \ubb38\uc758, \ud611\uc5c5 \uc81c\uc548\uc774 \uc11e\uc5ec \ub4e4\uc5b4\uc654\uc2b5\ub2c8\ub2e4. \ub2f5\uc7a5\uc740 \uacfc\uac70 \uac70\ub798 \ub9e5\ub77d\uc744 \uc54c\uc544\uc57c \uc4f8 \uc218 \uc788\uc5b4\uc11c \ub300\ud45c \ud55c \uc0ac\ub78c\uc5d0\uac8c \ubab0\ub838\uc2b5\ub2c8\ub2e4. \ubaa9\ud45c\ub294 "\uadfc\uac70 \uc788\ub294 \ucd08\uc548\uc744 \uba3c\uc800 \ub9cc\ub4e4\uc5b4 \ub450\uace0, \uc0ac\ub78c\uc740 \ud655\uc778\ub9cc \ud55c\ub2e4"\uc600\uc2b5\ub2c8\ub2e4.',flow:["n8n \uc774 \uc0c8 \uba54\uc77c\uc744 \uac10\uc9c0\ud574 \ud30c\uc2f1\xb7\ubd84\ub958\ub97c \uc694\uccad\ud569\ub2c8\ub2e4.","\uc9c0\uc2dd \uadf8\ub798\ud504\uc5d0\uc11c \uc774 \ud68c\uc0ac\xb7\ub2f4\ub2f9\uc790\xb7\uacfc\uac70 \uc694\uccad\uc744 \ucc3e\uc544 \ucd08\uc548\uc744 \uc4f0\uace0, LLM \ud310\uc815\uae30\ub85c \uac80\uc99d\ud569\ub2c8\ub2e4.",'\uac80\uc99d \ub4a4 Gmail \ucd08\uc548\uc744 \uba3c\uc800 \ub9cc\ub4e4\uace0, Slack \uc5d0\ub294 \ud1b5\uacfc \uc5ec\ubd80\uc5d0 \ub530\ub77c "Draft Ready" / "Needs Review" \uc54c\ub9bc\uacfc \ubc1c\uc1a1 \ubc84\ud2bc\uc774 \uac11\ub2c8\ub2e4. \ubc1c\uc1a1\uc740 \uc0ac\ub78c\uc774 \ub204\ub985\ub2c8\ub2e4.',"\ubcf4\ub0b8 \uba54\uc77c\uc744 \ub2e4\uc2dc \ud559\uc2b5\ud574 \ubb38\uccb4\uc640 \uc9c0\uc2dd\uc744 \uac31\uc2e0\ud569\ub2c8\ub2e4."],architectureImages:[{src:"/images/v2/email-agent-ko.png",alt:"\ub300\ud45c \uba54\uc77c \uc5d0\uc774\uc804\ud2b8 \ud30c\uc774\ud504\ub77c\uc778"}],troubleshooting:[{title:"\ud3c9\uba74 \ubca1\ud130 \uac80\uc0c9\uc73c\ub85c\ub294 \uacfc\uac70 \ub9e5\ub77d\uc744 \ubabb \ucc3e\ub358 \ubb38\uc81c",problem:'"\uc774 \ud68c\uc0ac\uac00 \uc804\uc5d0 \ubb34\uc5c7\uc744 \ubb3c\uc5c8\ub098"\ub97c \ubca1\ud130 \uac80\uc0c9\ub9cc\uc73c\ub85c\ub294 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.',action:"v2 \uc5d0\uc11c LightRAG \uc9c0\uc2dd \uadf8\ub798\ud504\ub85c \ud68c\uc0ac\xb7\ub2f4\ub2f9\uc790\xb7\uacfc\uac70 \uc694\uccad\uc744 \uad00\uacc4\ub85c \ubb36\uc5c8\uc2b5\ub2c8\ub2e4."},{title:"\ub85c\uceec \ub9ac\ub7ad\ucee4\uac00 VM \uba54\ubaa8\ub9ac\ub97c \uacfc\ud558\uac8c \uc4f0\ub358 \ubb38\uc81c",action:"2.2GB ONNX \ub9ac\ub7ad\ucee4\ub97c Vertex AI Gemini \ub9ac\ub7ad\ud0b9\uc73c\ub85c \uad50\uccb4\ud588\uc2b5\ub2c8\ub2e4."},{title:'\ud589\uc815\xb7\ubb3c\ub958 \ud655\uc778 \uba54\uc77c\uc744 "\uc575\ubb34\uc0c8 \ub2f5\ubcc0"\uc73c\ub85c \uc624\ud0d0\ud558\ub358 \ubb38\uc81c',action:"\uac80\uc99d \ud504\ub86c\ud504\ud2b8\uc5d0 \uc5c5\ubb34 \ub9e5\ub77d \uc608\uc678\ub97c \ub123\uace0, \ucf5c\ub4dc \uba54\uc77c\uc5d0\ub3c4 \uac19\uc740 \uc790\uac00 \uac80\uc99d\uc744 \uc801\uc6a9\ud588\uc2b5\ub2c8\ub2e4."}],aiCollab:["\uc6b4\uc601 \uc0c1\ud0dc: \ub300\ud45c \uba54\uc77c \uc790\ub3d9 \ucd08\uc548\uc740 2026-09-02 \uc5d0 \uba48\ucdc4\uc2b5\ub2c8\ub2e4. \ubd84\ub958\xb7\ubcf4\ub0b8 \uba54\uc77c \ud559\uc2b5\uc740 \uacc4\uc18d \ub3cc\uace0, \uc774\ub54c \ub9cc\ub4e0 \uc9c0\uc2dd \uadf8\ub798\ud504(\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 13\uac1c)\ub294 \uce74\uce74\uc624 CS\xb7\ubca4\ub354 CS\xb7Spark\xb7\ubca4\ub354 \ub9e4\uce6d\uc774 \ud568\uaed8 \uc4f0\ub294 \uc0ac\ub0b4 \uc9c0\uc2dd \ud5c8\ube0c\ub85c \uacc4\uc18d \uc6b4\uc601\ub429\ub2c8\ub2e4.","\uc9c0\uc2dd \uadf8\ub798\ud504\ub294 knowledge-mcp \ub97c \ud1b5\ud574 Spark\xb7\ubca4\ub354 CS \uc5d0\uc774\uc804\ud2b8\uac00 \uc4f0\uace0, brand-tool \ubca4\ub354 \ub9e4\uce6d\uc774 \uc9c1\uc811 \uac80\uc0c9\ud569\ub2c8\ub2e4.","\uc644\ub8cc \uc870\uac74: \ubaa8\ub4e0 \ud568\uc218 \ud0c0\uc785 \ud78c\ud2b8, Pyright \uc5d0\ub7ec 0, \ubcf4\uc548 \uad50\ucc28 \uac80\uc99d \uc9c0\uc801 \ubc18\uc601."]},{id:"field-fleet",slug:"field-fleet",logo:"/images/logo9.png",title:"\uc9c1\uc6d0 PC \ud568\ub300 \xb7 \uc6b4\uc601 \uc778\ud504\ub77c \u2014 \uc11c\ubc84\uac00 \ubabb \ud558\ub294 \uc77c\uc744 PC \uc5d0\uc11c, \uc548\uc804\ud558\uac8c",shortTitle:"\uc9c1\uc6d0 PC \ud568\ub300 \xb7 \uc6b4\uc601 \uc778\ud504\ub77c",period:"2026.02 ~ \ud604\uc7ac",role:"\ud655\uc7a5\xb7CLI\xb7\uc124\uce58\uae30\xb7\ubc30\ud3ec \ud30c\uc774\ud504\ub77c\uc778\xb7\uc778\ud504\ub77c (1\uc778)",repos:"styleseller-agent-company (\uc124\uce58\uae30\xb7\ub9b4\ub808\uc774\xb7\uc218\uc9d1\uae30\xb7\ubc1c\uc1a1\uae30\xb7\ubc30\ud3ec) \xb7 Instagram DM \ud655\uc7a5 \xb7 brand-tool (\ubc30\ud3ec)",oneLiner:"API \uac00 \uc5c6\ub294 \uc778\uc2a4\ud0c0\uadf8\ub7a8\xb7\uce74\uce74\uc624\ud1a1 \uc791\uc5c5\uc744 \uc9c1\uc6d0 PC \uc5d0\uc11c \ub3cc\ub9ac\uace0, \uadf8 PC \ub4e4\uc744 \ud55c \uc904 \uc124\uce58\xb7\uc790\ub3d9 \uac31\uc2e0\xb7\uc6d0\uaca9 \uad00\uc81c\ub85c \uc6b4\uc601\ud588\uc2b5\ub2c8\ub2e4.",highlights:["\ub9e5\xb7\uc708\ub3c4\uc6b0 \ud55c \uc904 \uc124\uce58\uae30, \uad00\ub9ac\uc790 \uad8c\ud55c \uc5c6\uc774 \uc124\uce58, \ub3c4\uad6c\ub9c8\ub2e4 \uc8fc\uae30\uac00 \ub2e4\ub978 \uc790\ub3d9 \uac31\uc2e0","\uce74\ud1a1 \uc2e4\uc2dc\uac04 \ub9b4\ub808\uc774(\uc9c1\uc6d0 11\uba85), \uc708\ub3c4\uc6b0 \uce74\ud1a1 \uc218\uc9d1\uae30, \uc624\ud508\ucc44\ud305 \uacf5\uad6c \uacf5\uc9c0 \uc790\ub3d9 \ubc1c\uc1a1","Instagram DM \ud06c\ub86c \ud655\uc7a5(2026.02\u201307): \uc2e0\ub8b0 \uc785\ub825(CDP), \ub2e4\ub2e8\uacc4 \ubc1c\uc1a1 \ud3f4\ubc31, \ub9e4\uc77c \ub3c4\ub294 \uc790\uac00 \uc810\uac80 \uc5d0\uc774\uc804\ud2b8","\uc778\ud504\ub77c: GCP VM, Docker Compose, \uc790\uccb4 \ud638\uc2a4\ud305 Postgres 6\uac1c, GitHub Actions \u2192 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \ubc30\ud3ec"],stack:["JavaScript / Node.js","Chrome Extension MV3","Chrome DevTools Protocol","Swift","Python","Bash","PowerShell","launchd","Playwright","Docker","nginx","GitHub Actions","GCP"],scale:["\uc9c1\uc6d0 PC \ubc30\ud3ec\ub9dd: \ucee4\ubc0b 689\uac1c","Instagram DM \ud655\uc7a5 + \uc790\uac00 \uc810\uac80: \ucf54\ub4dc 2.6\ub9cc \uc904","\uce74\ud1a1 \uc2e4\uc2dc\uac04 \ub3d9\uae30\ud654 \uc9c1\uc6d0 11\uba85 \xb7 \uc140\ub7ec\ucc3e\uae30 \uc6cc\ucee4 PC 9\ub300"],background:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 DM \uacfc \uac1c\uc778 \uce74\uce74\uc624\ud1a1\uc740 \uacf5\uc2dd API \uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc9c1\uc6d0\ub4e4\uc740 \uac19\uc740 \ubb38\uad6c\ub97c \ubcf5\uc0ac\ud574 \ubd99\uc600\uace0, \ub300\ud654 \uae30\ub85d\uc740 \uac01\uc790\uc758 PC \uc5d0\ub9cc \ub0a8\uc558\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\uc5d0\uc11c \ub3cc\ub9b4 \uc218 \uc5c6\ub294 \uc77c\uc740 \uc9c1\uc6d0 PC \ub97c \uc790\ub3d9\ud654 \ub178\ub4dc\ub85c \uc0bc\uace0, \uadf8 PC \ub4e4\uc744 \uc548\uc804\ud558\uac8c \ubc30\ud3ec\xb7\uac31\uc2e0\xb7\uad00\uc81c\ud558\ub294 \uccb4\uacc4\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uc11c\ubc84 \ucabd\uc740 VM \ud55c \ub300\uc5d0 \uc57d 40\uac1c \uc11c\ube44\uc2a4\ub97c \uc62c\ub824 \uc6b4\uc601\ud588\uc2b5\ub2c8\ub2e4.",flow:["\uc9c1\uc6d0\uc740 \uc124\uce58 \ud55c \uc904\ub85c \ud544\uc694\ud55c \ub3c4\uad6c \ubb36\uc74c\uc744 \uc124\uce58\ud569\ub2c8\ub2e4. \uad00\ub9ac\uc790 \uad8c\ud55c\uc774 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4.","\uc124\uce58\ub41c \ub3c4\uad6c\ub294 \ub3c4\uad6c\ub9c8\ub2e4 \ub2e4\ub978 \uc8fc\uae30\ub85c \uc2a4\uc2a4\ub85c \uac31\uc2e0\ud569\ub2c8\ub2e4. \uc140\ub7ec\ucc3e\uae30 \uc6cc\ucee4\ub294 \uc7a1 \uc0ac\uc774\ub9c8\ub2e4, \ub9e5 \uce74\ud1a1 \ub9b4\ub808\uc774\ub294 \ub9e4\uc77c 1\ud68c, \ucfe0\ud321 \ud655\uc7a5\uc740 \ud558\ub8e8 3\ud68c\uc785\ub2c8\ub2e4. \ubc84\uc804\uc740 \ubc30\ud3ec\ubcf8 zip \uc758 sha256 \uc73c\ub85c \ud310\uc815\ud569\ub2c8\ub2e4.","\uc11c\ubc84\ub294 \uc791\uc5c5 \ud050\uc640 \uc0c1\ud0dc \ubcf4\uace0\ub85c \uac01 PC \ub97c \uad00\uc81c\ud558\uace0, \uba48\ucd94\uba74 Slack \uc73c\ub85c \uc54c\ub9bd\ub2c8\ub2e4."],architectureImages:[{src:"/images/v2/field-fleet-ko.png",alt:"\uc9c1\uc6d0 PC \ud568\ub300\uc640 \uc6b4\uc601 \uc778\ud504\ub77c \uad6c\uc870\ub3c4"}],troubleshooting:[{title:"\ud074\ub77c\uc6b0\ub4dc DB \uac00 \uc804\uc1a1\ub7c9 \ud55c\ub3c4\ub85c \uba48\ucd98 \ub0a0",problem:"\ud074\ub77c\uc6b0\ub4dc DB \uac00 \uc804\uc1a1\ub7c9 \ud55c\ub3c4\ub97c \ub118\uc5b4 \ubaa8\ub4e0 API \uac00 \uba48\ucdc4\uc2b5\ub2c8\ub2e4.",action:"\uc571\uc774 REST \ud504\ub85c\ud1a0\ucf5c\ub9cc \uc4f4\ub2e4\ub294 \uac83\uc744 \ucf54\ub4dc \uc804\uc218 \uac80\uc0c9\uc73c\ub85c \ud655\uc778\ud558\uace0, VM \uc5d0 Postgres + PostgREST + nginx \ub97c \uac19\uc740 \ubaa8\uc591\uc73c\ub85c \uc138\uc6e0\uc2b5\ub2c8\ub2e4.",result:"\ud658\uacbd\ubcc0\uc218 \uad50\uccb4\ub9cc\uc73c\ub85c \ub2f9\uc77c \ubcf5\uad6c\ud588\uc2b5\ub2c8\ub2e4."},{title:"\ud638\uc2a4\ud305 \ubb34\ub8cc \ud55c\ub3c4 \uc815\uc9c0",action:"\uc815\uc9c0 \ub4a4 \ud504\ub85c\uc81d\ud2b8 10\uac1c\ub97c \uc0c8 \ud300\uc73c\ub85c \uc62e\uaca8 \ubcf5\uad6c\ud558\uace0, \uc6f9\uc571\uc6a9 VM \ubc30\ud3ec \ud30c\uc774\ud504\ub77c\uc778(GitHub Actions \u2192 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \u2192 nginx \ubb34\uc911\ub2e8 \uad50\uccb4)\uc744 \uc774\ud2c0 \ub9cc\uc5d0 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."},{title:"\ubc30\ud3ec \ud55c \ubc88\uc5d0 45~51\ubd84 \uac78\ub9ac\ub358 \ubb38\uc81c",cause:"VM \uc774 6.3GB \uc774\ubbf8\uc9c0\ub97c \ub9e4\ubc88 \ub2e4\uc2dc \uad6c\uc6e0\uc2b5\ub2c8\ub2e4.",action:"CI \uac00 \ub9cc\ub4e0 \uc774\ubbf8\uc9c0\ub97c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c \ubc1b\uac8c \ubc14\uafe8\uc2b5\ub2c8\ub2e4.",result:"\ubc30\ud3ec \ud55c \ubc88\uc774 \uc57d 11\ubd84\uc73c\ub85c \uc904\uc5c8\uc2b5\ub2c8\ub2e4."},{title:"\uc624\ud508\ucc44\ud305 \ubc1c\uc1a1\uc774 \uc0ac\ud758 \ub3d9\uc548 \uc870\uc6a9\ud788 \uc2e4\ud328\ud55c \ubb38\uc81c",cause:"\uad8c\ud55c \ubb38\uc81c\uac00 \uc544\ub2c8\ub77c \uce74\ud1a1 \uba54\uc778 \ucc3d\uc774 \uc5c6\ub294 \uc0c1\ud0dc\ub85c \uad73\uc5b4 \uc788\uc5c8\uace0, \uc2e4\ud328\ub97c \uc54c\ub9b4 \uacbd\ub85c\uac00 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4.",action:"\ubc1c\uc1a1\uae30 \uc7ac\uc2dc\uc791 \ud6c4 1\ud68c \uc7ac\uc2dc\ub3c4, \uc2e4\ud328 \uc0ac\uc720\ub97c \ub2f4\uc740 Slack \uc54c\ub9bc, \ubc1c\uc1a1 \uc9c1\ud6c4 \uac10\uc2dc \ud06c\ub860\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4."},{title:"\uc0ac\uc6d0 \uc778\uc99d \ucfe0\ud0a4\ub97c \uc190\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub358 \ubcf4\uc548 \uad6c\uba4d",action:"\uc5e3\uc9c0 \ubbf8\ub4e4\uc6e8\uc5b4\uc5d0\uc11c Web Crypto HMAC \uc11c\uba85 + \ub9cc\ub8cc\ub85c \uad50\uccb4\ud588\uc2b5\ub2c8\ub2e4. \ube44\ubc00\uac12\uc774 \uc5c6\uc73c\uba74 \uac70\ubd80\ud569\ub2c8\ub2e4(fail-closed)."},{title:"\uc708\ub3c4\uc6b0 \uc6cc\ucee4\uac00 \uc7a1\uc744 \uc9d1\uace0\ub3c4 \uc9c4\ud589 0 \u2014 \uc11c\ubc84\uac00 5\ubd84\ub9c8\ub2e4 \uc7a1\uc744 \ud68c\uc218\ud558\uace0 \uac19\uc740 PC \uac00 \ub2e4\uc2dc \uc9d1\ub358 \ubb38\uc81c",cause:"\uc608\uc678 \ucc98\ub9ac \ucf54\ub4dc \uc548\uc758 import \ub204\ub77d\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc6cc\ucee4 \ud504\ub85c\uc138\uc2a4\ub294 \uc0b4\uc544 \uc788\uc5c8\uace0, \uadf8 \ubd84\uae30\ub97c \uc9c0\ub098\uac00\ub294 \ud14c\uc2a4\ud2b8\uac00 \uc5c6\uc5b4\uc11c \ucd08\ub85d\uc774\uc5c8\uc2b5\ub2c8\ub2e4.",action:"\uc2e4\uc81c \ud504\ub85c\uc138\uc2a4\ub97c \ub744\uc6cc \ubc30\uc120\uc744 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",result:"\uad50\ud6c8: \ud14c\uc2a4\ud2b8 \ucd08\ub85d \u2260 \ubc30\uc120 \ub9de\uc74c."}],aiCollab:["\uacf5\uc2dd API \uac00 \uc5c6\ub294 \uc11c\ube44\uc2a4\uc758 \uc790\ub3d9\ud654\ub294 \uc11c\ube44\uc2a4 \uc57d\uad00\uacfc \uacc4\uc815 \uc548\uc804\uc744 \uba3c\uc800 \ud655\uc778\ud558\uace0, \uc0ac\ub78c\uc758 \uacc4\uc815\xb7PC \uc5d0\uc11c \uc0ac\ub78c\uc774 \ucf1c\uace0 \ub04c \uc218 \uc788\uac8c \uc124\uacc4\ud588\uc2b5\ub2c8\ub2e4.",'\ubc30\ud3ec\ubcf8\uc740 "\uc774\ubbf8\uc9c0 \ub0a0\uc9dc"\uac00 \uc544\ub2c8\ub77c \ub3c4\ub294 \ucf54\ub4dc\uc758 \ud574\uc2dc\ub85c \ud655\uc778\ud569\ub2c8\ub2e4.']}],howIBuild:{title:"How I Build with AI",intro:"\ucf54\ub4dc\ub294 Claude Code \uc138\uc158 \uc5ec\ub7ec \uac1c\ub97c \ubcd1\ub82c\ub85c \uc9c0\ud718\ud574 \ub9cc\ub4ed\ub2c8\ub2e4. \ub300\uc2e0 \ubb34\uc5c7\uc744 \ub9cc\ub4e4\uc9c0, \uc5b4\ub514\uae4c\uc9c0 \uc790\ub3d9\ud654\ud560\uc9c0, \uacb0\uacfc\uac00 \ub9de\ub294\uc9c0\ub294 \uc81c\uac00 \uc815\ud558\uace0 \ud655\uc778\ud569\ub2c8\ub2e4.",image:"/images/v2/build-loop-ko.png",loopTitle:"\uc791\uc5c5 \ub8e8\ud504",harnessTitle:"\ud558\ub124\uc2a4 \u2014 \uc5d0\uc774\uc804\ud2b8 \uc2e4\uc218\ub97c \uaddc\uce59\uc73c\ub85c \ub9c9\uae30",loop:[{step:"\uc124\uacc4 \ubb38\uc11c",desc:"\ubb38\uc81c\xb7\uc81c\uc57d\xb7\ub300\uc548\uc744 \uba3c\uc800 \uc501\ub2c8\ub2e4. (56\uac1c)"},{step:"\uc2e4\ud589 \uacc4\ud68d",desc:"\ub2e8\uacc4\uc640 \ub2e8\uacc4\ubcc4 \uac80\uc99d \ubc29\ubc95\uc744 \uc801\uc2b5\ub2c8\ub2e4. (98\uac1c)"},{step:"\ud14c\uc2a4\ud2b8 \uba3c\uc800",desc:"\uc7ac\ud604 \ud14c\uc2a4\ud2b8\ub97c \uc4f0\uace0 \uad6c\ud604\ud569\ub2c8\ub2e4."},{step:"\uad50\ucc28 \ub9ac\ubdf0",desc:"\uc11c\ub85c \ub2e4\ub978 \ucd9c\ucc98\uc758 \uc5d0\uc774\uc804\ud2b8 \ub450 \uac1c\uac00 \ub530\ub85c \ub9ac\ubdf0\ud569\ub2c8\ub2e4. \uc801\ub300\uc801 \ub9ac\ubdf0 \ud55c \ubc88\uc5d0 \uc2e4\uacb0\ud568 6~9\uac1c\ub97c \uc7a1\uc740 \uae30\ub85d\uc774 \uc788\uc2b5\ub2c8\ub2e4."},{step:"\uc2e4\uae30\uae30 \ud655\uc778",desc:"\uc2e4\uc81c PC\xb7\uc2e4\uc81c \ud654\uba74\uc5d0\uc11c \ud655\uc778\ud558\uace0 \ub2e8\uacc4\uc801\uc73c\ub85c \ubc30\ud3ec\ud569\ub2c8\ub2e4."},{step:"\ubc30\ud3ec \ud655\uc778",desc:"\ub3c4\ub294 \ucf54\ub4dc\uc758 \ud574\uc2dc\ub85c \ubc30\ud3ec\ub97c \ud310\uc815\ud569\ub2c8\ub2e4."}],harness:["CLAUDE.md\xb7\uaddc\uce59 \ud30c\uc77c: \ud0c0\uc785\xb7RLS\xb7\ube44\ubc00\uac12\xb7\uc5b8\uc5b4 \ub4f1 \uc644\ub8cc \uac8c\uc774\ud2b8","\uc0ac\uace0 \uad50\ud6c8 \uba54\ubaa8 100\uc5ec \uac1c: \uac19\uc740 \uc2e4\uc218\uac00 \ub2e4\uc74c \uc138\uc158\uc5d0\uc11c \ubc18\ubcf5\ub418\uc9c0 \uc54a\uac8c \ud569\ub2c8\ub2e4","pre-commit \ud6c5: \uc190\uc73c\ub85c \ub9d0\uc544 \uc904\ubc14\uafc8\uc774 \uc11e\uc778 \uc708\ub3c4\uc6b0 \ubc30\ud3ec\ubcf8\uc744 \ub9c9\uc2b5\ub2c8\ub2e4","\ud14c\uc2a4\ud2b8 \u2192 \ud504\ub85c\ub355\uc158 \uc4f0\uae30 \ucc28\ub2e8 \uac00\ub4dc: \ud504\ub85c\ub355\uc158\uc5d0 \ub2ff\uc744 \uc218 \uc788\ub358 \ud14c\uc2a4\ud2b8 17\uac74\uc744 \ub9c9\uc558\uc2b5\ub2c8\ub2e4"],incidentsTitle:"\uc0ac\uace0\uc5d0\uc11c \ubc30\uc6b4 \uc6d0\uce59",incidents:[{title:"\ud14c\uc2a4\ud2b8 \ucd08\ub85d \u2260 \ubc30\uc120 \ub9de\uc74c",lesson:"\ubaa8\ud0b9\ub41c \ud14c\uc2a4\ud2b8\ub294 import \ub204\ub77d\uc744 \ubabb \uc7a1\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c \ud504\ub85c\uc138\uc2a4\ub97c \ub744\uc6b0\ub294 \ud14c\uc2a4\ud2b8\ub97c \ub461\ub2c8\ub2e4."},{title:"\ud55c \ubc88 \ubabb \ucc3e\uc740 \uac74 \uc5c6\ub294 \uac8c \uc544\ub2c8\ub2e4",lesson:"\ubd80\uc7ac\ub97c \ubcf4\uace0\ud558\uae30 \uc804\uc5d0 \uc2dc\uac04 \ubc94\uc704\xb7\uac80\uc0ac \ub300\uc0c1\xb7\uc785\uad6c\uc640 \ucd9c\uad6c\ub97c \ub2e4\uc2dc \ubd05\ub2c8\ub2e4."},{title:"\ub3c4\ub294 \ucf54\ub4dc\ub85c \ud310\uc815\ud55c\ub2e4",lesson:"\uc774\ubbf8\uc9c0 \ub0a0\uc9dc\uac00 \uc544\ub2c8\ub77c \uc2e4\ud589 \uc911\uc778 \ucf54\ub4dc\uc758 \ud574\uc2dc\ub85c \ubc30\ud3ec\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."},{title:"\ub418\ub3cc\ub9b4 \uc218 \uc5c6\ub294 \uc77c\uad04 \ubcc0\ud658 \ub300\uc2e0 \ud638\ud658",lesson:"\uc61b \ud615\uc2dd\uacfc \uc0c8 \ud615\uc2dd\uc744 \ud568\uaed8 \ubc1b\ub3c4\ub85d \ubc14\uafc9\ub2c8\ub2e4."},{title:"\uc9c0\uc6b0\uc9c0 \ub9d0\uace0 \uc2a4\uc704\uce58\ub85c \ub048\ub2e4",lesson:"\uba3c\uc800 \uc2e4\uc0ac\uc6a9 \uae30\ub85d\uc744 \uc138\uace0, \ub044\ub294 \ubc29\uc2dd\uc73c\ub85c \ub0b4\ub9bd\ub2c8\ub2e4."}]},before:{title:"Before \xb7 2024\u20132025",projects:[{route:"/projects/project5",logo:"/images/logo5.png",title:"We:Review",period:"2025.08 ~ 10 \xb7 \uc778\ud134",oneLiner:"OCR + LLM \uc601\uc218\uc99d \uac80\uc99d \uc790\ub3d9\ud654",connection:"\u2192 \ubc18\ubcf5 \uac80\uc218\ub97c \uae30\uacc4\ub85c \uc62e\uae34 \uccab \uc2e4\ubb34. StyleSeller \uc6b4\uc601 \uc790\ub3d9\ud654\ub85c \uc774\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."},{route:"/projects/project4",logo:"/images/logo4.png",title:"FitChecker",period:"2024.11 ~ 12",oneLiner:"LangChain \uae30\ubc18 AI \ud648\ud2b8\ub808\uc774\ub2dd \ucc57\ubd07 (RAG \ucd94\ucc9c)",connection:"\u2192 \uccab RAG\xb7\uc5d0\uc774\uc804\ud2b8 \uacbd\ud5d8. \uc9c0\uc2dd \uadf8\ub798\ud504 \uae30\ubc18 \uc5d0\uc774\uc804\ud2b8\uc758 \ucd9c\ubc1c\uc810\uc774\uc5c8\uc2b5\ub2c8\ub2e4."},{route:"/projects/project3",logo:"/images/logo3.png",title:"Briefify",period:"2024.10 ~ 11",oneLiner:"\uc774\ubbf8\uc9c0\xb7\ubb38\uc11c \ubc88\uc5ed\xb7\uc694\uc57d AI \uc6f9 \uc11c\ube44\uc2a4",connection:"\u2192 OCR\xb7\uc694\uc57d\xb7\ubc88\uc5ed \ubaa8\ub378(Tesseract\xb7T5\xb7NLLB)\uc744 \uc787\ub294 AI \ud30c\uc774\ud504\ub77c\uc778\uc744 \ucc98\uc74c \ub2e4\ub904 \ubd24\uc2b5\ub2c8\ub2e4."}]},about:{title:"About Me",photo:"/images/img.jpg",tagline:"\ubc18\ubcf5 \uc5c5\ubb34\ub97c AI \uc2dc\uc2a4\ud15c\uc73c\ub85c \ubc14\uafb8\ub294 AI Builder \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",paragraphs:["\ud604\uc5c5\uc5d0\uc11c \uc0ac\ub78c\uc774 \ubc18\ubcf5\ud558\ub294 \uc77c\uc744 \ucc3e\uc544 AI \uc5d0\uc774\uc804\ud2b8\uc640 \uc790\ub3d9\ud654\ub85c \ubc14\uafb8\uace0, \ubc30\ud3ec\ud55c \ub4a4 \uc6b4\uc601\uae4c\uc9c0 \ub9e1\uc2b5\ub2c8\ub2e4. \ubc18\ubcf5\uc740 \uae30\uacc4\uc5d0\uac8c, \ud310\ub2e8\uc740 \uc0ac\ub78c\uc5d0\uac8c \ub0a8\uae30\ub294 \uac83\uc774 \uc81c \uc6d0\uce59\uc785\ub2c8\ub2e4.","StyleSeller\uc5d0\uc11c\ub294 10\uac1c\uc6d4 \ub3d9\uc548 \ud63c\uc790 \uc0ac\ub0b4 AI \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \ubca4\ub354 CS \uc5d0\uc774\uc804\ud2b8, \uc140\ub7ec \ubc1c\uad74\ubd80\ud130 \ub9de\ucda4 \ubc1c\uc1a1\uae4c\uc9c0 \uc787\ub294 \uc601\uc5c5 \ud50c\ub7ab\ud3fc, \uc0ac\ub78c\uc774 \uc2b9\uc778\ud558\ub294 \uc5d0\uc774\uc804\ud2b8 \uc870\uc9c1, \uc9c1\uc6d0 PC \uc790\ub3d9\ud654\ub97c \uae30\ud68d\ubd80\ud130 \uc7a5\uc560 \ub300\uc751\uae4c\uc9c0 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4.","Claude Code \uc5d0\uc774\uc804\ud2b8 \uc5ec\ub7ec \uac1c\ub97c \ubcd1\ub82c\ub85c \uc9c0\ud718\ud574 \ube60\ub974\uac8c \ub9cc\ub4e4\uace0, \uacb0\uacfc\ub294 \ud14c\uc2a4\ud2b8\xb7\uad50\ucc28 \ub9ac\ubdf0\xb7\uc2e4\uae30\uae30 \ud655\uc778\uc73c\ub85c \uac80\uc99d\ud569\ub2c8\ub2e4. \uc0ac\uace0\uac00 \ub098\uba74 \uc6d0\uc778\uacfc \uad50\ud6c8\uc744 \uaddc\uce59\uc73c\ub85c \ub0a8\uaca8 \uac19\uc740 \uc2e4\uc218\ub97c \ubc18\ubcf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uace0 \uc601\uc5b4 \uac15\uc0ac\uc640 \uc5b4\ub9b0\uc774\uc9d1 \uc6b4\uc601\uc2e4\uc7a5\uc73c\ub85c \uc77c\ud558\uba74\uc11c, \ud604\uc7a5\uc5d0\uc11c \uc77c\ud558\ub294 \uc0ac\ub78c\uc758 \ubd88\ud3b8\uc744 \uba3c\uc800 \ub4e3\ub294 \uc2b5\uad00\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \uadf8 \uc2b5\uad00\uc774 \uc9c0\uae08 \ubb34\uc5c7\uc744 \uc790\ub3d9\ud654\ud560\uc9c0 \uace0\ub974\ub294 \uae30\uc900\uc785\ub2c8\ub2e4."],experienceTitle:"Journey",experienceLead:"\ubc95\ud559 \uc804\uacf5\uc5d0\uc11c AI Builder\uae4c\uc9c0",careerChangeLabel:"Career Change",experience:[{period:"2025.12 \u2013 \ud604\uc7ac",org:"StyleSeller \xb7 AI Builder (1\uc778)",summary:"\uc0ac\ub0b4 AI \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc744 \ud63c\uc790 \uc124\uacc4\xb7\uad6c\ucd95\xb7\uc6b4\uc601",kind:"tech"},{period:"2025.08 \u2013 2025.10",org:"We:Review(Welead) \uc778\ud134",summary:"OCR + LLM \uc601\uc218\uc99d \uac80\uc218 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud63c\uc790 \uad6c\ucd95",kind:"tech"},{period:"2025.05 \u2013 2025.07",org:"\ud55c\uad6dIT\ube44\uc988\ub2c8\uc2a4\uc9c4\ud765\ud611\ud68c",summary:"\uc0dd\uc131\ud615 AI \uac1c\ubc1c\uc790 \ub9de\ucda4\ud615 \uc778\uc7ac \uc591\uc131 \uacfc\uc815",kind:"tech"},{period:"2024.10 \u2013 2024.12",org:"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 \xb7 AI \uacfc\uc815",summary:"\ud604\uc5c5 \uba58\ud1a0\uc640 AI \ud504\ub85c\uc81d\ud2b8 \uc2e4\ud589 (Briefify, FitChecker)",kind:"tech"},{period:"2024.04 \u2013 2024.10",org:"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 \xb7 \ud480\uc2a4\ud0dd \uacfc\uc815",summary:"Spring Boot\xb7Vue.js \ud300 \ud504\ub85c\uc81d\ud2b8, \ud611\uc5c5\uacfc \ubc84\uc804 \uad00\ub9ac",kind:"tech",careerChange:!0},{period:"2022.06 \u2013 2024.02",org:"\ubaac\ud14c\ud0a4\uc988 \xb7 \uc601\uc5b4 \uac15\uc0ac",summary:"\uac1c\uc778 \ub9de\ucda4\ud615 \uc218\uc5c5\uacfc \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5 \uc124\uacc4",kind:"pre"},{period:"2021.02 \u2013 2023.06",org:"\ud559\uc810\uc740\ud589\uc81c \xb7 \uacbd\uc601\ud559",summary:"\uacbd\uc601\ud559 \ud559\uc704 \uacfc\uc815",kind:"pre"},{period:"2021.03 \u2013 2022.05",org:"Pots&Pans \xb7 \uc601\uc5b4 \uac15\uc0ac",summary:"\ubab0\uc785\ud615 \uc218\uc5c5\uacfc \ud559\uc2b5 \uc131\uacfc \uad00\ub9ac",kind:"pre"},{period:"2018.08 \u2013 2020.09",org:"JLS(\uc815\uc0c1\uc5b4\ud559\uc6d0) \xb7 \uac15\uc0ac",summary:"\ucc38\uc5ec\ud615 \uc218\uc5c5 \uc124\uacc4\uc640 \ud559\ubd80\ubaa8 \uc18c\ud1b5",kind:"pre"},{period:"2015.03 \u2013 2018.02",org:"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \xb7 \uc6b4\uc601\uc2e4\uc7a5",summary:"\uc870\uc9c1 \uad00\ub9ac\uc640 \uc6b4\uc601 \uc804\ubc18",kind:"pre"},{period:"2008.03 \u2013 2012.02",org:"\uccad\uc8fc\ub300\ud559\uad50 \xb7 \ubc95\ud559 \ud559\uc0ac",summary:"\ubc95\ud559 \uc804\uacf5",kind:"pre"}],nowTitle:"Now",nowText:"\ubca4\ub354 CS \uc790\ub3d9 \ub2f5\ubcc0 \uac1c\uc120\ud310\uc744 \uac80\uc99d\ud558\uace0, \uc140\ub7ec\ucc3e\uae30 \ubaa9\ud45c\ub97c \uc62c\ub9ac\uace0, \uc6b4\uc601 \uad00\uce21\uc744 \uac15\ud654\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."},skills:{title:"Skills",lead:"\uc5d0\uc774\uc804\ud2b8\ubd80\ud130 \ubc30\ud3ec\xb7\uc6b4\uc601\uae4c\uc9c0, \uc2e4\uc81c \uc11c\ube44\uc2a4\uc5d0 \uc4f4 \uae30\uc220\uc785\ub2c8\ub2e4.",groups:[{id:"ai-agent",title:"AI / Agent",items:[{id:"llm-agent",label:"Agentic RAG \xb7 \ub3c4\uad6c \ud638\ucd9c \uc5d0\uc774\uc804\ud2b8"},{id:"mcp",label:"MCP \uc11c\ubc84"},{id:"rag",label:"GraphRAG (LightRAG \xb7 Neo4j \xb7 pgvector)"},{id:"litellm",label:"LiteLLM \ubaa8\ub378 \ub77c\uc6b0\ud305"},{id:"langfuse",label:"Langfuse \uad00\uce21"},{id:"hitl",label:"HITL \uc2b9\uc778 \uc124\uacc4 \xb7 LLM \ud310\uc815\uae30"},{id:"claude-code",label:"Claude Code \uba40\ud2f0 \uc138\uc158"}]},{id:"backend",title:"Backend",items:[{id:"python",label:"Python"},{id:"fastapi",label:"FastAPI"},{id:"nextjs",label:"Next.js"},{id:"node",label:"Node.js / Express"},{id:"postgres",label:"PostgreSQL / PostgREST"},{id:"supabase",label:"Supabase"},{id:"java",label:"Java"},{id:"spring",label:"Spring"},{id:"mysql",label:"MySQL"},{id:"jpa",label:"JPA"}]},{id:"frontend",title:"Frontend",items:[{id:"react",label:"React"},{id:"js",label:"JavaScript"},{id:"html",label:"HTML"},{id:"css",label:"CSS"},{id:"vue",label:"Vue.js"},{id:"flutter",label:"Flutter"}]},{id:"devops",title:"DevOps \xb7 Automation",items:[{id:"docker",label:"Docker"},{id:"docker-compose",label:"Docker Compose"},{id:"gh-actions",label:"GitHub Actions"},{id:"gcp",label:"GCP VM"},{id:"nginx",label:"nginx"},{id:"zero-downtime",label:"\ubb34\uc911\ub2e8 \ubc30\ud3ec"},{id:"git",label:"Git"},{id:"github",label:"GitHub"},{id:"n8n",label:"n8n"},{id:"chrome-ext",label:"Chrome Extension MV3"},{id:"playwright",label:"Playwright / CDP"},{id:"swift",label:"Swift (macOS)"}]}]},legacyProjects:{project1:{title:"\uc804\uc9c1\uc2dc",route:"/projects/project1"},project2:{title:"Flux",route:"/projects/project2"},project3:{title:"Briefify",route:"/projects/project3"},project4:{title:"FitChecker",route:"/projects/project4"},project5:{title:"We:Review",route:"/projects/project5"}}};var u={lang:"en",nav:{home:"Intro",about:"About",skills:"Skills",projects:"Projects",build:"How I Build",langSwitchLabel:"KO",koOnlyNote:"Korean only"},hero:{headline:"I turn repetitive operations work into AI systems that run every day",sub:"I'm Jinhee Mok, an AI Builder. For 10 months I was the only builder at StyleSeller, a social commerce startup. I designed, shipped, and ran the in-house AI operations system behind its daily work.",metrics:[{value:"10 mo",label:"Solo builder \xb7 Dec 2025\u2013now"},{value:"7,000",label:"My commits (5 core repos)"},{value:"~40",label:"Services in production"},{value:"4,500+",label:"Automated test cases"}]},systemMap:{title:"System Map",intro:"This started as Instagram DM automation and grew into three core repositories: brand-tool, email-agent, and styleseller-agent-company. Today they run as one system. Staff work in a single web app. Behind it, agents and employee-PC workers share the same databases and the same knowledge graph. Click a number to open that case study.",image:"/images/v2/system-map-en.png",imageAlt:"StyleSeller AI operations system map",nodes:[{id:"vendor-cs",label:"\u2460 Vendor Support AI",caseId:"vendor-cs"},{id:"sales-pipeline",label:"\u2461 Sales Pipeline",caseId:"sales-pipeline"},{id:"company-os",label:"\u2462 AI Company OS \xb7 Spark",caseId:"company-os"},{id:"email-agent",label:"\u2463 CEO Email Agent",caseId:"email-agent"},{id:"field-fleet",label:"\u2464 Field Fleet \xb7 Platform Ops",caseId:"field-fleet"}],layers:[{name:"People",desc:"Internal ops web app, Slack approval cards, Chrome extension panels"},{name:"Agents",desc:"AI Company OS on Paperclip \u2014 issues and approvals, plus vendor-support and content agents"},{name:"Knowledge",desc:"GraphRAG (LightRAG + Neo4j). 13 workspaces shared by email, vendor support, Spark, and vendor matching"},{name:"Edge",desc:"KakaoTalk CLI, real-time relays, seller-finder workers, and extensions on staff Macs and PCs. One-line install, auto-update"},{name:"Data & infra",desc:"GCP VM, ~40 Docker Compose services, 6 self-hosted Postgres DBs + PostgREST, LiteLLM, Langfuse"}]},cases:[{id:"vendor-cs",slug:"vendor-cs",logo:"/images/v2/logo10.png",title:"Vendor Support AI \u2014 an agent that collects partner (vendor) chats on KakaoTalk and answers from evidence",shortTitle:"Vendor Support AI",period:"Jun 2026 \u2013 present",role:"Design, build, operate (solo)",repos:"styleseller-agent-company (vendor agent, chatbot, CS Copilot) \xb7 styleseller-kakaocli (Swift)",oneLiner:"Supplier questions arrive in KakaoTalk, a messenger with no public API. This system collects them in real time, answers with evidence, with no hand-offs and no asking back.",highlights:["Real-time chat capture on employee PCs: a Swift CLI that watches local data changes, plus Mac/Windows relays","Agentic-RAG chatbot: a tool-calling loop plus evidence, persona, and turn-taking judges","Always-answer policy (since 2026-09-02): the bot answers from evidence with no hand-offs or asking back, and Slack carries morning and evening digests and staff briefings","Ops outputs: per-vendor ledgers (Sheets/Drive), morning and evening digests, a vendor knowledge wiki, contract-term extraction"],stack:["Python","FastAPI","Swift (macOS)","Node.js","Chrome Extension MV3","LightRAG + Neo4j","MCP","LiteLLM","Gemini 2.5 Flash","Postgres + PostgREST","Slack API","Google Sheets \xb7 Drive API"],scale:["Vendor agent backend: 61K lines \xb7 600 commits \xb7 107 test files","Chatbot service: 806 commits (485 in the chatbot modules)","CS Copilot extension + local sender: 631 commits","KakaoTalk CLI fork: 81 of my commits \xb7 Swift 3.9K \u2192 6.6K lines"],background:"StyleSeller's partner (vendor) questions arrived in employees' personal KakaoTalk. The same question got different answers depending on who replied, and the history lived only on each person's PC. KakaoTalk has no public API for personal chats, so a server alone could not solve this. I split the work three ways: employee PCs collect the chats, agents on the server draft the answers, and people make the judgment calls at clearly defined points.",flow:["A Swift CLI detects KakaoTalk data changes on an employee's Mac and sends webhooks. A separate collector does the same on Windows PCs.","The vendor agent runs an allowlist gate, links the chat room to the internal vendor record, and ingests the raw text into the knowledge graph.","The chatbot agent calls knowledge-graph, product, price, and proposal tools to draft an answer. The draft is queued only if it passes the judges.","There are two exceptions: other vendors' information is blocked, and the bot re-confirms when it is unclear whether to send a proposal. Edited answers are learned back into the graph.","An employee Mac claims the send job, sends it through the KakaoTalk CLI, and confirms delivery."],architectureImages:[{src:"/images/v2/vendor-cs-en.png",alt:"Vendor Support AI flow"}],troubleshooting:[{title:"Answering vendor A with vendor B's terms (RAG leakage)",problem:"On 2026-08-13, in production, the bot stated another vendor's private deal terms as company policy.",cause:"The knowledge graph structure, not chat history: private deals were retrieved alongside shared knowledge.",action:"Added tool-level redaction of other vendors' private deals, plus an answer-scope gate.",result:"This layer sits on top of the per-vendor/shared workspace split, so mixed retrieval results no longer leak into answers."},{title:"21% of send jobs failed permanently",problem:"31 of 147 KakaoTalk send jobs never finished.",cause:"An Accessibility call that checks the window state could hang forever.",action:"Added a hard-timeout watchdog, and verified actual delivery after each send."},{title:"A keyword filter silently dropped messages",problem:"A regex gate blocked messages before they reached the LLM, and nobody noticed.",action:"Replaced it with a cheap trigger followed by a 5-second, temperature-0 LLM judge. The judge fails closed and shows its reason to staff."},{title:"Zero-loss capture",problem:"A dropped connection between an employee PC and the server could lose messages.",action:"The local checkpoint advances atomically only after the server acknowledges. Stalls alert Slack."}],aiCollab:["Evals: the cross-vendor leak found in production on 2026-08-13 is now blocked, and judge tests live in the suite.","Status: capture, ledgers, and digests run on KakaoTalk across 11 registered staff PCs (6 Mac, 5 Windows, as of 2026-09-16). An improved auto-reply is being validated step by step in a test vendor room.","Human control: auto-replies are being validated step by step in a test room, behind a test-room-only switch, tool approvals, and a kill switch."]},{id:"sales-pipeline",slug:"sales-pipeline",logo:"/images/logo7.png",title:"Sales Pipeline \u2014 from seller discovery to tailored outreach and vendor matching (internal work tool)",shortTitle:"Sales Pipeline",period:"Mar 2026 \u2013 present",role:"Full-stack build and operate (solo; every brand-tool commit is mine)",repos:"brand-tool (Next.js) \xb7 styleseller-agent-company (PC workers, send workers) \xb7 email-agent (knowledge graph)",oneLiner:"Finds Instagram sellers automatically, sends each one KakaoTalk product cards that match their sales history, and uses an LLM to recommend, for each product, the sales partner (vendor) that will run a group-buy for it.",highlights:["Seller Finder: hashtag rules \u2192 distributed workers on employee PCs \u2192 per-rule scorecards \u2192 sheet mirror","Tailored KakaoTalk campaigns: product cards matched to each seller's sales history, scheduled over channel and personal chats, with a reply inbox and opt-out handling","Vendor matching: knowledge-graph search \u222a category candidates \u2192 LLM judgment \u2192 outcome tracking","Generated proposal PDF/XLSX files and a chat assistant for editing proposals"],stack:["Next.js 16","React 19","TypeScript","Tailwind CSS 4","Postgres 16 + PostgREST","Vertex AI Gemini 2.5","Playwright","Node.js workers","n8n","Vitest","Docker","GitHub Actions"],scale:["brand-tool: 1,502 commits \xb7 134 API routes \xb7 33 screens","130 DB migrations \xb7 205 test files","Seller Finder (server + worker) 24K lines \xb7 KakaoTalk campaigns 34K lines, 470 commits"],background:"To build one proposal, sales staff jumped between Google Sheets, an external CRM, and Notion, and calculated prices by hand. Seller discovery meant clicking through hashtags one at a time to build a list. I started by consolidating the data into one database, then expanded the app until discovery, outreach, and matching all happened in one place.",flow:["Staff create hashtag rules. The server creates a run and assigns it to worker PCs.","Workers use browser automation to report sellers who pass the filters (reel views, captions, and so on).","Results merge into a seller ledger that combines Notion, the KakaoTalk ledger, and Seller Finder. Operators pick targets and schedule a campaign.","A browser worker on the VM sends channel messages, and a Mac KakaoTalk CLI sends personal chats. Replies are collected and judged in an inbox.","For a new product, the LLM recommends the sales partners (vendors) that could run a group-buy for it, from the combined graph and category candidates. Proposal chats go out through a send queue."],architectureImages:[{src:"/images/v2/sales-pipeline-en.png",alt:"Sales pipeline flow"}],troubleshooting:[{title:"Collection didn't work from servers",problem:"Instagram collection was blocked from datacenter environments.",action:"Designed a distributed worker that runs on employee PCs. It uses browser automation without clicking, so it never interrupts the employee's work. The server owns the job queue, device-key registration, one-account-per-PC, and stall diagnosis/reassignment.",result:"Worker PCs never hold DB keys, only revocable device keys. Nine worker PCs are in service."},{title:"Recovery cancelled every running job",problem:"When the server came back after an outage, its first cleanup cancelled all six runs in progress.",cause:'The rule "cancel jobs of workers unseen for 3 min" counted server downtime as worker absence.',action:"The cleanup function now records its own run interval. It treats gaps as server outage and cancels only after 3 min of continuous uptime.",result:"In a psql reproduction, the old function cancelled 2/2 and the new one cancelled 0."},{title:"Yield displayed 3\xd7 too low",problem:"Seller Finder yield showed 1.4%.",cause:"Resuming a run reset only the numerator.",action:"Filtered by the invariant denominator = numerator + rest instead of trusting the status field.",result:"Real yield was 4.2%."},{title:"The reply inbox vanished on big send days",cause:"A 3.5KB request URL with 200 room IDs hit a 502 at the proxy.",action:"Measured the boundary (100 IDs OK, 200 failed) and chunked the IDs into groups of 60."},{title:"Non-deterministic LLM vendor matches",cause:"Across chunks of 30, the same vendor got different scores and the last one overwrote the rest. The model also sometimes dropped items.",action:"Kept the max score, re-queried only the missing items, and built candidates as the union of graph and category results."}],aiCollab:["Production numbers: about 510 accounts screened per run at about a 4.4% pass rate; 261 recipients in a single campaign.","The product cache syncs 3\xd7/day. Ratio and absolute-floor guards stop a partial failure from marking the whole catalog as discontinued.","Every feature went through a design spec, a plan, tests first, implementation, then review."]},{id:"company-os",slug:"company-os",logo:"/images/logo6.png",title:"AI Company OS & Spark \u2014 an in-house AI org where humans approve",shortTitle:"AI Company OS \xb7 Spark",period:"May 2026 \u2013 present",role:"Design, build, infra, operate (solo)",repos:"styleseller-agent-company (server, MCP, services) \xb7 brand-tool (Spark and approvals UI)",oneLiner:"I built a company-specific agent org and an internal assistant, Spark, on top of open-source Paperclip (issues, approvals, budgets).",highlights:["Agent org: about 20 support, content, campaign, and ad agents under a CEO agent; the support and content agents run daily","Spark: an internal assistant that cites its sources. It queries 4 databases read-only, scoped to the user's role, and routes CEO-mode actions to an approval inbox","MCP: built knowledge-graph search and platform-control servers, and integrated an open-source Google Workspace server","Commerce research: a Spark request triggers review collection in an employee's Chrome extension, which returns a VOC analysis as XLSX/PDF"],stack:["TypeScript","Node.js / Express","React","PostgreSQL (Drizzle)","Python / FastAPI","MCP","LiteLLM","Gemini 2.5","Claude","LightRAG + Neo4j","Langfuse","n8n","Docker Compose","GitHub Actions","GCP"],scale:["4,316 of my commits (excluding merges and upstream)","46 service directories \xb7 3 MCP servers \xb7 2 plugins","56 design specs \xb7 98 implementation plans"],background:"The original plan was a 5-layer stack with Temporal, LangGraph, LiteLLM, and MCP. On May 20, 2026 the platform was installed, but it had 0 registered agents. Instead of adding more infrastructure, I switched to wiring up what was already running: the email agent, the DM bots, and n8n.",flow:["Work arrives as issues. n8n only triggers work; Claude Code agents handle anything that needs reasoning, and FastAPI services handle routine processing.","Staff ask Spark in the internal web app. Spark answers with sources, using role-scoped read-only queries and knowledge-graph search.","Proposed actions go to an approval inbox and run only after a person approves them."],architectureImages:[{src:"/images/v2/company-os-en.png",alt:"AI Company OS architecture"},{src:"/images/proj6-2.png",alt:"Agent org chart (Korean labels)"}],troubleshooting:[{title:"Dropped an over-designed stack for one that shipped",problem:"The 5-layer plan was expensive to build, and on May 20 there were 0 registered agents.",action:"Replaced Temporal with n8n triggers + issues and LangGraph with Claude Code agents, then wired in the assets that were already running.",result:"About 20 agents were on the org chart within four months."},{title:"Spark can't see data outside a user's role",action:"The server recomputes roles from DB membership instead of trusting the request. SQL runs under a read-only role behind a safe-SELECT guard. Approvals are idempotent, and there is a kill switch."},{title:"Collecting 1,000 reviews was on track to take 100 minutes",cause:"In a minimized window, timers were throttled to once per minute, so each 0.5 s wait became 60 s. That works out to 100 minutes per 1,000 reviews.",action:"Moved the waits onto ticks driven by the service worker, which the throttling does not affect.",result:"Measured: 1,000 reviews in 2 min 30 s."},{title:"Safe deploys with many AI sessions at once",action:"Added a VM-wide deploy lock, refused deploys from uncommitted trees, recorded the last-built commit, and tested the deploy-target selection."},{title:"Empty answers when the CEO agent fell back to Gemini",problem:"When the CEO agent's Claude Code subscription login dropped, Hermes handed the turn to its Gemini fallback, and answers came back empty.",action:"Restored multi-turn function calling in the Gemini proxy: tool_calls restoration, tool_call_id mapping, and aligned timeouts."}],aiCollab:["Evals: a Spark regression case set checks answer quality.","Observability: LLM calls on the agent path go through LiteLLM and are traced in Langfuse.","Design principle: irreversible actions such as refunds, VIP issues, and external contracts require human approval."]},{id:"email-agent",slug:"email-agent",logo:"/images/logo8.png",title:"CEO Email Agent \u2014 GraphRAG drafts with human approval",shortTitle:"CEO Email Agent",period:"Mar \u2013 Sep 2026 (later grew into the company knowledge hub)",role:"Design, build, deploy (solo)",repos:"email-agent (FastAPI) \xb7 styleseller-agent-company (dashboard plugin, knowledge-mcp)",oneLiner:"Classifies incoming mail, finds evidence in the company knowledge graph, and drafts replies in the CEO's voice. Nothing is sent without human approval. The graph built here became the company's knowledge hub.",highlights:["Gmail \u2192 n8n \u2192 FastAPI: parse \u2192 classify \u2192 draft \u2192 verify \u2192 learn","LightRAG knowledge graph (Neo4j + pgvector), with an agentic query rewrite when coverage is thin","LLM-as-judge verification plus sycophancy and parroting checks","A style book learned from sent mail and human edits"],stack:["Python","FastAPI","asyncio","LightRAG","Neo4j","PostgreSQL + pgvector","Vertex AI Gemini 2.5","Claude (Apr\u2013Jul 2026)","n8n","Slack","Docker Swarm","pytest","Pyright"],scale:["1,418 commits (Mar\u2013Sep 2026, excluding merges, org repository)","~40K lines of Python \xb7 26 API routers \xb7 85 endpoints","Knowledge-graph workspaces shared by email, vendor support, Spark, and vendor matching"],background:"The CEO's inbox mixed brand partnerships, seller onboarding questions, and collaboration offers. Replies required past deal context, so they all landed on one person. The goal was to have an evidence-backed draft ready, so a person only has to review it.",flow:["n8n detects new mail and requests parsing and classification.","The agent looks up the company, contact, and past requests in the graph, drafts a reply, and verifies it with an LLM judge.",'After verification, a Gmail draft is created first. Slack then gets a "Draft Ready" or "Needs Review" notice, depending on the result, with a send button. A person presses send.',"Sent mail is learned back into the style book and the graph."],architectureImages:[{src:"/images/v2/email-agent-en.png",alt:"CEO email agent pipeline"}],troubleshooting:[{title:"Flat vector search missed past context",problem:'Vector search alone could not answer "what did this company ask before?"',action:"v2 moved to a LightRAG graph that links companies, contacts, and past requests."},{title:"The local reranker ate VM memory",action:"Replaced the 2.2GB ONNX reranker with Vertex AI Gemini reranking."},{title:'Routine logistics confirmations were flagged as "parroting"',action:"Added business-context exemptions to the judge prompt, and applied the same self-check to cold emails."}],aiCollab:["Status: CEO auto-drafting stopped on 2026-09-02. Classification and sent-mail learning keep running, and the knowledge graph built here (13 workspaces) still runs as the internal knowledge hub shared by Kakao CS, vendor CS, Spark, and vendor matching.","Spark and the vendor agent use the graph through knowledge-mcp, and brand-tool queries it directly for vendor matching.","Definition of done: type hints on every function, zero Pyright errors, and every security review finding addressed."]},{id:"field-fleet",slug:"field-fleet",logo:"/images/logo9.png",title:"Field Fleet & Platform Ops \u2014 run on employee PCs what servers can't, safely",shortTitle:"Field Fleet \xb7 Platform Ops",period:"Feb 2026 \u2013 present",role:"Extensions, CLI, installers, deploy pipeline, infra (solo)",repos:"styleseller-agent-company (installers, relays, collectors, senders, deploy) \xb7 Instagram DM extension \xb7 brand-tool (deploy)",oneLiner:"Ran Instagram and KakaoTalk work, which has no API, on employee PCs, and operated those PCs with one-line installs, auto-updates, and remote monitoring.",highlights:["One-line installers for Mac and Windows, no admin rights needed, auto-updates on a per-tool cadence","Real-time KakaoTalk relay for 11 staff, a Windows KakaoTalk collector, automated group-buy announcements to open chats","Instagram DM Chrome extension (Feb\u2013Jul 2026): trusted input via CDP, multi-step send fallback, a daily self-check agent","Infra: GCP VM, Docker Compose, 6 self-hosted Postgres DBs, GitHub Actions \u2192 registry deploys"],stack:["JavaScript / Node.js","Chrome Extension MV3","Chrome DevTools Protocol","Swift","Python","Bash","PowerShell","launchd","Playwright","Docker","nginx","GitHub Actions","GCP"],scale:["PC delivery network: 689 commits","Instagram DM extension + self-check: 26K lines","11 staff on real-time KakaoTalk sync \xb7 9 seller-finder worker PCs"],background:"Instagram DMs and personal KakaoTalk have no public API. Staff copy-pasted the same messages, and the history lived only on each person's PC. For work a server can't do, I turned employee PCs into automation nodes and built a way to deploy, update, and monitor them safely. On the server side, I ran about 40 services on one VM.",flow:["Staff install the tools they need with one line. No admin rights required.","Installed tools update themselves on a per-tool cadence: the seller-finder worker between jobs, the Mac KakaoTalk relay once a day, and the Coupang extension 3\xd7/day. The version is the sha256 of the published zip.","The server monitors each PC through job queues and status reports, and alerts Slack when one stalls."],architectureImages:[{src:"/images/v2/field-fleet-en.png",alt:"Field fleet and platform ops"}],troubleshooting:[{title:"The cloud DB hit its egress quota",problem:"Every API stopped when the cloud DB exceeded its egress quota.",action:"Grepped the whole codebase to confirm the app only speaks the REST protocol, then stood up Postgres + PostgREST + nginx on the VM in the same shape.",result:"Recovered the same day by swapping environment variables."},{title:"The hosting free tier was suspended",action:"Restored service by moving 10 projects to a new team. Then built a VM deploy pipeline for the web app (GitHub Actions \u2192 registry \u2192 zero-downtime nginx swap) in 2 days."},{title:"Each deploy took 45\u201351 minutes",cause:"The VM rebuilt a 6.3GB image every time.",action:"Switched the VM to pulling CI-built images from a registry.",result:"One deploy now takes about 11 minutes."},{title:"Open-chat sends failed silently for 3 days",cause:"It was not a permissions problem. KakaoTalk was stuck without its main window, and there was no alerting path.",action:"Added one retry after a sender restart, Slack alerts that include the failure reason, and a post-send watchdog cron."},{title:"A staff auth cookie anyone could forge by hand",action:"Replaced it with a Web Crypto HMAC-signed, expiring cookie in edge middleware. It fails closed when the secret is missing."},{title:"A Windows worker claimed jobs but made zero progress \u2014 the server reclaimed them every 5 minutes and the same PC claimed them again",cause:"A missing import inside an exception handler. The worker process stayed alive, and tests stayed green because none of them went through that branch.",action:"Added a test that spawns the real process to check the wiring.",result:"Lesson: green tests don't mean correct wiring."}],aiCollab:["For services without a public API, I checked terms of service and account safety first, and designed everything to run on a person's own account and PC, where that person can turn it on and off.","Deploys are confirmed by the running code's hash, not the image date."]}],howIBuild:{title:"How I Build with AI",intro:"I build by orchestrating several Claude Code sessions in parallel. I decide what to build, how far to automate, and whether the result is right, and I verify it myself.",image:"/images/v2/build-loop-en.png",loopTitle:"The loop",harnessTitle:"Harness \u2014 turning agent mistakes into rules",loop:[{step:"Design spec",desc:"Problem, constraints, alternatives first. (56 written)"},{step:"Plan",desc:"Steps and how to verify each one. (98 written)"},{step:"Tests first",desc:"Write a reproduction test, then implement."},{step:"Cross-review",desc:"Two agents from different sources review independently. A single adversarial pass has caught 6\u20139 real defects."},{step:"Real-device check",desc:"Verify on real PCs and screens, then roll out in stages."},{step:"Confirm the deploy",desc:"Judge the deploy by the running code's hash."}],harness:["CLAUDE.md and rule files: done-gates for types, RLS, secrets, languages","~100 incident notes so the same mistake does not repeat in the next session","A pre-commit hook that blocks hand-rolled Windows bundles with line-ending drift","A test-to-production write guard that blocked 17 tests able to reach production"],incidentsTitle:"Principles learned from incidents",incidents:[{title:"Green tests don't mean correct wiring",lesson:"Mocked tests don't catch a missing import. Keep a test that spawns the real process."},{title:"Not finding it once \u2260 absent",lesson:"Before reporting that something is missing, recheck the time window, the target, and both ends of the pipe."},{title:"Judge by running code",lesson:"Confirm deploys by the running code's hash, not the image date."},{title:"Compatible, not irreversible",lesson:"Accept old and new formats side by side instead of doing one-way bulk rewrites."},{title:"Switch off, don't delete",lesson:"Count real usage first, then turn things off with a switch."}]},before:{title:"Before \xb7 2024\u20132025",intro:"These project pages are in Korean.",projects:[{route:"/projects/project5",logo:"/images/logo5.png",title:"We:Review",period:"Aug\u2013Oct 2025 \xb7 intern",oneLiner:"OCR + LLM receipt verification",connection:"\u2192 My first job moving repetitive review work to machines. It led straight to the ops automation at StyleSeller."},{route:"/projects/project4",logo:"/images/logo4.png",title:"FitChecker",period:"Nov\u2013Dec 2024",oneLiner:"LangChain AI home-training chatbot (RAG recommendations)",connection:"\u2192 My first RAG and agent work, and the starting point for knowledge-grounded agents."},{route:"/projects/project3",logo:"/images/logo3.png",title:"Briefify",period:"Oct\u2013Nov 2024",oneLiner:"Image and document translate/summarize web service",connection:"\u2192 My first hands-on AI pipeline, chaining OCR, summarization, and translation models (Tesseract, T5, NLLB)."}]},about:{title:"About Me",photo:"/images/img.jpg",tagline:"I'm Jinhee Mok, an AI Builder who turns repetitive work into AI systems that run every day.",paragraphs:["I find the work people repeat in real operations, turn it into AI agents and automation, then ship and run it. My rule: machines take the repetition, people keep the judgment.","At StyleSeller I spent 10 months as the only builder of the in-house AI operations system: a vendor-support agent, a sales platform from seller discovery to tailored outreach, an agent org with human approvals, and automation on employee PCs. I owned it from scoping to incident response.","I build fast by orchestrating several Claude Code agents in parallel, and I verify the results with tests, cross-reviews, and real-device checks. After every incident, I turn the cause into a rule so it doesn't happen twice.","Studying law, then working as an English instructor and a daycare operations manager, taught me to listen first to the people doing the work. That habit is how I choose what to automate."],experienceTitle:"Journey",experienceLead:"From a law degree to AI Builder",careerChangeLabel:"Career Change",experience:[{period:"2025.12 \u2013 Present",org:"StyleSeller \xb7 AI Builder (solo)",summary:"Designed, built, and ran the in-house AI operations system",kind:"tech"},{period:"2025.08 \u2013 2025.10",org:"We:Review (Welead) \xb7 Intern",summary:"Built an OCR + LLM receipt-review pipeline on my own",kind:"tech"},{period:"2025.05 \u2013 2025.07",org:"Korea IT Business Promotion Assoc.",summary:"Generative AI developer program",kind:"tech"},{period:"2024.10 \u2013 2024.12",org:"Hi-Media Academy \xb7 AI course",summary:"AI projects with industry mentors (Briefify, FitChecker)",kind:"tech"},{period:"2024.04 \u2013 2024.10",org:"Hi-Media Academy \xb7 Full-stack course",summary:"Spring Boot and Vue.js team projects, collaboration, Git",kind:"tech",careerChange:!0},{period:"2022.06 \u2013 2024.02",org:"MonteKids \xb7 English Instructor",summary:"Personalized lessons and self-directed learning",kind:"pre"},{period:"2021.02 \u2013 2023.06",org:"Academic Credit Bank \xb7 Business Admin.",summary:"Business administration degree program",kind:"pre"},{period:"2021.03 \u2013 2022.05",org:"Pots&Pans \xb7 English Instructor",summary:"Immersive lessons and progress tracking",kind:"pre"},{period:"2018.08 \u2013 2020.09",org:"JLS \xb7 English Instructor",summary:"Interactive lessons and parent communication",kind:"pre"},{period:"2015.03 \u2013 2018.02",org:"Jeonwon Daycare \xb7 Operations Manager",summary:"Team management and daily operations",kind:"pre"},{period:"2008.03 \u2013 2012.02",org:"Cheongju University \xb7 B.A. in Law",summary:"Law major",kind:"pre"}],nowTitle:"Now",nowText:"Validating the improved vendor auto-reply, raising Seller Finder targets, and strengthening ops observability."},skills:{title:"Skills",lead:"What I have shipped with, from agents to deployment and operations.",groups:[{id:"ai-agent",title:"AI / Agent",items:[{id:"llm-agent",label:"Agentic RAG \xb7 tool-calling agents"},{id:"mcp",label:"MCP servers"},{id:"rag",label:"GraphRAG (LightRAG \xb7 Neo4j \xb7 pgvector)"},{id:"litellm",label:"LiteLLM model routing"},{id:"langfuse",label:"Langfuse observability"},{id:"hitl",label:"HITL approvals \xb7 LLM judges"},{id:"claude-code",label:"Claude Code multi-session"}]},{id:"backend",title:"Backend",items:[{id:"python",label:"Python"},{id:"fastapi",label:"FastAPI"},{id:"nextjs",label:"Next.js"},{id:"node",label:"Node.js / Express"},{id:"postgres",label:"PostgreSQL / PostgREST"},{id:"supabase",label:"Supabase"},{id:"java",label:"Java"},{id:"spring",label:"Spring"},{id:"mysql",label:"MySQL"},{id:"jpa",label:"JPA"}]},{id:"frontend",title:"Frontend",items:[{id:"react",label:"React"},{id:"js",label:"JavaScript"},{id:"html",label:"HTML"},{id:"css",label:"CSS"},{id:"vue",label:"Vue.js"},{id:"flutter",label:"Flutter"}]},{id:"devops",title:"DevOps \xb7 Automation",items:[{id:"docker",label:"Docker"},{id:"docker-compose",label:"Docker Compose"},{id:"gh-actions",label:"GitHub Actions"},{id:"gcp",label:"GCP VM"},{id:"nginx",label:"nginx"},{id:"zero-downtime",label:"Zero-downtime deploys"},{id:"git",label:"Git"},{id:"github",label:"GitHub"},{id:"n8n",label:"n8n"},{id:"chrome-ext",label:"Chrome Extension MV3"},{id:"playwright",label:"Playwright / CDP"},{id:"swift",label:"Swift (macOS)"}]}]},legacyProjects:{project1:{title:"JeonJikSi",route:"/projects/project1"},project2:{title:"Flux",route:"/projects/project2"},project3:{title:"Briefify",route:"/projects/project3"},project4:{title:"FitChecker",route:"/projects/project4"},project5:{title:"We:Review",route:"/projects/project5"}}};function h(){const e=Object(i.n)(),t="/en"===e.pathname||e.pathname.startsWith("/en/"),a=t?"en":"ko",n=t?u:g,l=t?"/en":"",r=e.pathname.replace(/^\/en/,"")||"/",o="/en"+("/"===r?"":r);return{lang:a,content:n,prefix:l,otherPath:t?r:o,koPath:r,enPath:o,withPrefix:e=>"/"===e?l||"/":`${l}${e}`,isEn:t}}const b="#222222",f="#2B2B2B",E="#3A3A3A",y="#E8E8E8",x="#A0A0A0",w="#FFD700",k="'Pretendard Variable', -apple-system, 'Apple SD Gothic Neo', sans-serif",v={xs:"13px",sm:"15px",md:"17px",lg:"22px",xl:"clamp(1.6rem, 1.1rem + 2vw, 1.875rem)",xxl:"clamp(1.9rem, 1rem + 4vw, 2.75rem)"},C={body:400,subhead:600,title:800},A=1.7,S="72ch",P="1120px",I="56px 48px",j="28px 20px",L="56px",$="10px",M=d.a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${f};
  border-right: 1px solid ${E};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--sidebar-width);
  z-index: 10;
  font-family: ${k};

  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;

    a {
      color: ${y};
      font-size: clamp(1.1em, 1.9vw, 1.6em);
      text-decoration: none;
      font-weight: ${C.subhead};
      text-align: center;
      line-height: 1.15;
      transition: color 0.2s ease;

      @media (max-width: 600px) {
        font-size: 0.8em;
      }

      &:hover {
        color: ${w};
      }

      &.active {
        color: ${w};
      }
    }
  }

  .extra-menu {
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    display: ${e=>{let{showExtraMenu:t}=e;return t?"flex":"none"}};
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-height: 46vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    a {
      color: ${x};
      font-size: clamp(0.68em, 1.15vw, 0.9em);
      text-decoration: none;
      font-weight: ${C.body};
      transition: color 0.2s ease;
      text-align: center;

      &:hover {
        color: ${w};
      }

      &.active {
        color: ${w};
      }
    }

    .extra-group-label {
      color: ${x};
      font-size: clamp(0.6em, 1vw, 0.75em);
      margin-top: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 12px;

    a {
      color: ${y};
      font-size: clamp(0.8em, 1.5vw, 1em);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${w};
      }

      @media (max-width: 600px) {
        .label {
          display: none;
        }
      }
    }
  }

  .updated {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .lang-switch {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: clamp(0.7em, 1.2vw, 0.85em);
    color: ${x};

    button {
      background: none;
      border: 1px solid ${E};
      border-radius: 4px;
      color: ${x};
      padding: 2px 8px;
      cursor: pointer;
      font-size: inherit;
      font-family: inherit;
      transition: all 0.2s ease;

      &.active {
        color: ${w};
        border-color: ${w};
      }

      &:hover {
        color: ${w};
      }
    }
  }
`;function T(){const{content:e,withPrefix:t,koPath:a,enPath:r,lang:o}=h(),d=Object(i.n)(),[g,u]=Object(n.useState)(()=>/\/projects/.test(d.pathname)),{nav:b,cases:f,before:E}=e;return l.a.createElement(M,{showExtraMenu:g},l.a.createElement("div",{className:"menu"},l.a.createElement(p.c,{to:t("/"),end:!0,onClick:()=>u(!1)},b.home),l.a.createElement(p.c,{to:t("/about"),onClick:()=>u(!1)},b.about),l.a.createElement(p.c,{to:t("/skills"),onClick:()=>u(!1)},b.skills),l.a.createElement(p.c,{to:t("/build"),onClick:()=>u(!1)},b.build),l.a.createElement(p.c,{to:t("/projects"),onClick:()=>{u(!g)}},b.projects),g&&l.a.createElement("div",{className:"extra-menu"},f.map(e=>l.a.createElement(p.c,{key:e.id,to:t("/projects/"+e.slug)},e.shortTitle)),l.a.createElement("div",{className:"extra-group-label"},E.title),E.projects.map(e=>l.a.createElement(p.c,{key:e.route,to:t(e.route)},e.title)))),l.a.createElement("div",{className:"social-links"},l.a.createElement("div",{className:"lang-switch"},l.a.createElement(p.b,{to:a},l.a.createElement("button",{type:"button",className:"ko"===o?"active":""},"KO")),l.a.createElement(p.b,{to:r},l.a.createElement("button",{type:"button",className:"en"===o?"active":""},"EN"))),l.a.createElement("a",{href:"https://github.com/Jin-tonix","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.a})," ",l.a.createElement("span",{className:"label"},"GitHub")),l.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.b})," ",l.a.createElement("span",{className:"label"},"LinkedIn")),l.a.createElement("a",{href:"mailto:jinheemok815@gmail.com","aria-label":"Email"},l.a.createElement(s.a,{icon:m.a})," ",l.a.createElement("span",{className:"label"},"Email")),l.a.createElement("div",{className:"updated",style:{marginTop:"10px",fontSize:"clamp(0.6em, 1.1vw, 0.75em)",color:x,textAlign:"center"}},"Last Updated: 2026.09.24")))}const R="https://jin-tonix.github.io";function G(){const e=Object(i.n)(),{lang:t}=h();return Object(n.useEffect)(()=>{document.documentElement.lang=t;const a=e.pathname.replace(/^\/en/,"")||"/",n=[{hrefLang:"ko",href:`${R}${a}`},{hrefLang:"en",href:`${R}${"/en"+("/"===a?"":a)}`},{hrefLang:"x-default",href:`${R}${a}`}].map(e=>{let{hrefLang:t,href:a}=e,n=document.querySelector(`link[rel="alternate"][hreflang="${t}"]`);return n||(n=document.createElement("link"),n.setAttribute("rel","alternate"),n.setAttribute("hreflang",t),document.head.appendChild(n)),n.setAttribute("href",a),n});return()=>{n.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}},[t,e.pathname]),null}const D=d.b`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,B=d.a.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${b};
  box-sizing: border-box;
`,F=d.a.div`
  width: 100%;
  max-width: ${P};
  padding: ${I};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: ${j};
  }
`,N=d.a.header`
  margin-bottom: ${L};
  animation: ${D} 0.6s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,O=d.a.h1`
  color: ${w};
  font-size: ${v.xxl};
  font-weight: ${C.title};
  line-height: 1.2;
  margin: 0 0 12px;
`,z=d.a.p`
  color: ${x};
  font-size: ${v.md};
  font-weight: ${C.body};
  line-height: ${A};
  max-width: ${S};
  margin: 0;
`;function V(e){let{title:t,lead:a,children:n,className:r}=e;return l.a.createElement(B,{className:r},l.a.createElement(F,null,t&&l.a.createElement(N,null,l.a.createElement(O,null,t),a&&l.a.createElement(z,null,a)),n))}const K=d.a.section`
  margin-bottom: ${L};

  &:last-child {
    margin-bottom: 0;
  }
`,H=d.a.h2`
  color: ${w};
  font-size: ${v.lg};
  font-weight: ${C.subhead};
  margin: 0 0 16px;
`,J=d.a.p`
  color: ${x};
  font-size: ${v.md};
  line-height: ${A};
  max-width: ${S};
  margin: 0 0 16px;
`,W=d.a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 96px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`,_=d.a.img`
  width: 96px;
  height: auto;
  margin: 0 0 16px 20px;
  float: right;
  border-radius: 10px;
  border: 1px solid ${E};

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto 16px;
  }
`,q=d.a.p`
  color: ${y};
  font-size: ${v.sm};
  line-height: 1.7;
  max-width: ${S};
  margin: 0 0 10px;
`,Q=d.a.div`
  border: 1px solid ${w};
  border-radius: ${$};
  padding: 8px 14px;
  margin-top: 18px;
  background-color: rgba(255, 215, 0, 0.06);

  .now-label {
    color: ${w};
    font-weight: ${C.subhead};
    font-size: ${v.xs};
  }

  .now-text {
    color: ${y};
    font-size: ${v.xs};
    line-height: 1.5;
    margin-top: 2px;
  }
`,U=d.a.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background-color: ${E};
  }
`,X=d.a.li`
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 16px;
  padding: 0 0 0 26px;
  margin-bottom: 7px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${e=>{let{$current:t}=e;return t?w:b}};
    border: 2px solid ${e=>{let{$kind:t}=e;return"tech"===t?w:E}};
  }

  .period {
    color: ${e=>{let{$kind:t}=e;return"tech"===t?w:x}};
    font-size: ${v.xs};
    font-weight: ${C.subhead};
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    padding-top: 2px;
  }

  .org {
    color: ${y};
    font-size: ${v.sm};
    font-weight: ${C.subhead};
    line-height: 1.4;
  }

  .tag {
    display: inline-block;
    display: table;
    margin-top: 3px;
    padding: 0 7px;
    border: 1px solid ${w};
    border-radius: 999px;
    color: ${w};
    font-size: 11px;
    font-weight: ${C.subhead};
  }

  .summary {
    color: ${x};
    font-size: ${v.xs};
    line-height: 1.45;
    margin-top: 1px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .period {
      padding-top: 0;
    }
  }
`,Y=Object(d.a)(N)`
  margin-bottom: 24px;
`,Z=Object(d.a)(V)`
  align-items: center;

  & > div {
    max-width: 1200px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;var ee=()=>{const{content:e}=h(),{about:t}=e;return l.a.createElement(Z,null,l.a.createElement(W,null,l.a.createElement("div",null,l.a.createElement(Y,null,l.a.createElement(O,null,t.title),l.a.createElement(z,null,t.tagline)),l.a.createElement(K,null,l.a.createElement(_,{src:t.photo,alt:"Jinhee Mok"}),t.paragraphs.map(e=>l.a.createElement(q,{key:e.slice(0,20)},e)),l.a.createElement(Q,null,l.a.createElement("div",{className:"now-label"},t.nowTitle),l.a.createElement("div",{className:"now-text"},t.nowText)))),l.a.createElement("div",null,l.a.createElement(Y,null,l.a.createElement(O,null,t.experienceTitle),l.a.createElement(z,null,t.experienceLead)),l.a.createElement(K,null,l.a.createElement(U,null,t.experience.map((e,a)=>l.a.createElement(X,{key:e.org+e.period,$current:0===a,$kind:e.kind},l.a.createElement("span",{className:"period"},e.period,e.careerChange&&l.a.createElement("span",{className:"tag"},t.careerChangeLabel)),l.a.createElement("div",null,l.a.createElement("div",{className:"org"},e.org),l.a.createElement("div",{className:"summary"},e.summary)))))))))},te=a(6),ae=a(9);const ne=Object(d.a)(V)`
  align-items: center;

  & > div {
    max-width: 1200px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  header {
    margin-bottom: 36px;
  }
`,le=d.a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 96px;
  row-gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`,re=d.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,oe=d.a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${f};
  border: 1px solid ${E};
  border-radius: ${$};
  padding: 8px 13px;
  color: ${y};
  font-size: ${v.sm};
`,ie={"llm-agent":[te.p,"#ffd700"],mcp:[te.n,"#61DAFB"],rag:[te.e,"#f29111"],litellm:[te.n,"#6DB33F"],langfuse:[te.a,"#F7DF1E"],hitl:[te.r,"#E34F26"],"claude-code":[te.c,"#DE7356"],java:[te.j,"#007396"],spring:[ae.l,"#6DB33F"],mysql:[ae.e,"#4479A1"],jpa:[te.e,"#f29111"],python:[ae.k,"#3776AB"],nextjs:[ae.g,"#fff"],node:[te.m,"#339933"],fastapi:[ae.a,"#009688"],postgres:[ae.j,"#4169E1"],supabase:[ae.m,"#3ECF8E"],html:[te.i,"#E34F26"],css:[te.d,"#1572B6"],js:[te.k,"#F7DF1E"],vue:[ae.o,"#4FC08D"],react:[te.o,"#61DAFB"],flutter:[ae.b,"#02569B"],docker:[te.f,"#2496ED"],git:[te.g,"#F05032"],github:[te.h,"#E8E8E8"],"docker-compose":[te.f,"#2496ED"],"gh-actions":[ae.c,"#2088FF"],gcp:[ae.d,"#4285F4"],nginx:[ae.h,"#009639"],"zero-downtime":[te.q,"#ffd700"],n8n:[ae.f,"#EA4B71"],"chrome-ext":[te.b,"#4285F4"],playwright:[ae.i,"#2EAD33"],swift:[ae.n,"#F05138"]};var se=()=>{const{content:e}=h(),{skills:t}=e;return l.a.createElement(ne,{title:t.title,lead:t.lead},l.a.createElement(le,null,t.groups.map(e=>l.a.createElement("section",{key:e.id,id:e.id+"-skills"},l.a.createElement(H,null,e.title),l.a.createElement(re,null,e.items.map(e=>{const[t,a]=ie[e.id]||[te.c,y];return l.a.createElement(oe,{key:e.id},l.a.createElement(t,{size:"1.2em",color:a}),l.a.createElement("span",null,e.label))}))))))};const ce=d.a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(10px, 2vw, 16px);
  width: 100%;
  max-width: 760px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,de=d.a.div`
  background-color: rgba(43, 43, 43, 0.85);
  border: 1px solid ${E};
  border-radius: ${$};
  padding: clamp(10px, 1.6vw, 16px) 8px;
  text-align: center;

  .value {
    color: ${w};
    font-size: clamp(1.1em, 2vw, 1.6em);
    font-weight: ${C.title};
  }

  .label {
    margin-top: 4px;
    color: ${y};
    font-size: clamp(0.65em, 1vw, 0.8em);
    line-height: 1.3;
  }
`;function me(e){let{metrics:t}=e;return t&&0!==t.length?l.a.createElement(ce,null,t.map(e=>l.a.createElement(de,{key:e.label},l.a.createElement("div",{className:"value"},e.value),l.a.createElement("div",{className:"label"},e.label)))):null}const pe=d.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,ge=d.a.div`
  background-image: linear-gradient(rgba(20, 20, 20, 0.15), rgba(20, 20, 20, 0.35)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: ${y};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 56px 20px;
  box-sizing: border-box;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #000;
  background-color: rgba(0, 0, 0, 0.6);

  .headline,
  .sub {
    max-width: 640px;
    text-align: center;
    word-break: keep-all;
  }

  .sub {
    max-width: 760px;
  }

  .headline {
    font-size: ${v.xxl};
    font-weight: ${C.title};
    color: ${y};
    margin-bottom: 12px;
    animation: ${pe} 0.8s ease forwards;
    animation-delay: 0.15s;
    opacity: 0;
  }

  .sub {
    font-size: ${v.lg};
    font-weight: ${C.subhead};
    color: ${y};
    animation: ${pe} 0.8s ease forwards;
    animation-delay: 0.4s;
    opacity: 0;
    margin-bottom: 10px;

    .name-highlight {
      font-weight: ${C.title};
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${w};
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 40px 14px;

    .headline {
      font-size: 1.6rem;
    }

    .sub {
      font-size: ${v.sm};
      font-weight: ${C.body};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .headline,
    .sub {
      animation: none;
      opacity: 1;
    }
  }
`;function ue(){const{content:e}=h(),{hero:t}=e;return l.a.createElement(ge,null,l.a.createElement("div",{className:"headline"},t.headline),l.a.createElement("div",{className:"sub"},t.sub),l.a.createElement(me,{metrics:t.metrics}))}const he=d.a.div`
  background-color: ${f};
  border: 1px solid ${E};
  border-left: 3px solid ${w};
  border-radius: ${$};
  padding: 24px;
`,be=d.a.h2`
  color: ${w};
  font-size: ${v.lg};
  font-weight: ${C.subhead};
  margin: 0 0 8px;
`,fe=d.a.p`
  color: ${x};
  font-size: ${v.md};
  line-height: ${A};
  margin: 0 0 18px;
  max-width: ${S};
`,Ee=d.a.a`
  display: block;
  border: 1px solid ${E};
  border-radius: ${$};
  overflow: hidden;
  margin-bottom: 18px;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    background: #fff;
  }
`,ye=d.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,xe=Object(d.a)(p.b)`
  border: 1px solid ${w};
  color: ${w};
  border-radius: 999px;
  padding: 6px 16px;
  font-size: ${v.xs};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${w};
    color: ${b};
  }
`,we=d.a.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 14px;
  margin: 0 0 18px;
  font-size: ${v.sm};

  dt {
    color: ${w};
    font-weight: ${C.subhead};
  }

  dd {
    color: ${y};
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    dd {
      margin-bottom: 6px;
    }
  }
`;function ke(e){let{systemMap:t,withPrefix:a}=e;return t?l.a.createElement(he,null,l.a.createElement(be,null,t.title),l.a.createElement(fe,null,t.intro),t.image&&l.a.createElement(Ee,{href:t.image,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:t.image,alt:t.imageAlt||t.title})),t.layers&&l.a.createElement(we,null,t.layers.map(e=>l.a.createElement(l.a.Fragment,{key:e.name},l.a.createElement("dt",null,e.name),l.a.createElement("dd",null,e.desc)))),l.a.createElement(ye,null,t.nodes.map(e=>l.a.createElement(xe,{key:e.id,to:a("/projects/"+e.caseId)},e.label)))):null}const ve=d.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ce=Object(d.a)(ve)`
  /* 카드 수가 적어도 위 StyleSeller 카드와 같은 폭을 유지 */
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ae=d.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`,Se=Object(d.a)(Ae)``,Pe=Object(d.a)(p.b)`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: ${f};
  border: 1px solid ${E};
  border-radius: ${$};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${w};
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ie=Object(d.a)(Pe)``,je=d.a.div`
  margin-top: 8px;
  font-size: 15px;
  color: ${y};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Le=d.a.div`
  margin-top: 2px;
  font-size: 13px;
  color: ${w};
  text-align: center;
  opacity: 0.9;
`;function $e(){const{content:e,withPrefix:t}=h(),{nav:a,systemMap:n,cases:r,before:o}=e;return l.a.createElement(V,{title:a.projects},l.a.createElement(K,null,l.a.createElement(H,null,"StyleSeller \xb7 2026"),l.a.createElement(ve,null,r.map(e=>l.a.createElement(Ae,{key:e.id},l.a.createElement(Pe,{to:t("/projects/"+e.slug)},l.a.createElement("img",{src:e.logo,alt:e.title})),l.a.createElement(je,null,e.shortTitle))))),l.a.createElement(K,null,l.a.createElement(ke,{systemMap:n,withPrefix:t})),l.a.createElement(K,null,l.a.createElement(H,null,o.title),o.intro&&l.a.createElement(J,null,o.intro),l.a.createElement(Ce,null,o.projects.map(e=>l.a.createElement(Se,{key:e.route},l.a.createElement(Ie,{to:t(e.route)},l.a.createElement("img",{src:e.logo,alt:e.title})),l.a.createElement(je,null,e.title),l.a.createElement(Le,null,e.connection))))))}const Me=d.a.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${b};
  box-sizing: border-box;
  padding-top: 24px;
`,Te=d.a.div`
  width: 100%;
  max-width: ${P};
  padding: 0 48px;
  color: ${x};
  font-family: ${k};
  font-size: ${v.xs};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;function Re(e){let{text:t}=e;return l.a.createElement(Me,null,l.a.createElement(Te,null,t))}const Ge=d.a.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${b};
  box-sizing: border-box;
`,De=d.a.div`
  width: 100%;
  max-width: ${P};
  padding: ${I};
  box-sizing: border-box;
  color: ${y};

  @media (max-width: 768px) {
    padding: ${j};
  }
`,Be=d.a.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${E};
  padding-bottom: 16px;
  margin-bottom: 16px;
  width: 100%;

  img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  h1 {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: ${C.title};
    color: ${w};
    margin: 0;
    line-height: 1.3;
  }
`,Fe=d.a.h2`
  font-size: ${v.sm};
  font-weight: ${C.body};
  color: ${x};
  margin: 4px 0 0;
`,Ne=d.a.p`
  font-size: ${v.md};
  color: ${y};
  line-height: ${A};
  margin: 0 0 8px;
`,Oe=d.a.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ze=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  a {
    display: block;
  }

  img {
    width: 100%;
    max-width: 640px;
    border: 1px solid ${E};
    border-radius: ${$};
    object-fit: contain;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 320px;
    }
  }
`,Ve=d.a.div`
  flex: 2.5;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ke=d.a.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`,He=d.a.div`
  flex: 1;

  h3 {
    font-size: ${v.lg};
    font-weight: ${C.subhead};
    color: ${w};
    margin: 0 0 10px;
  }

  p,
  ul,
  ol {
    line-height: ${A};
    font-size: ${v.sm};
    color: ${y};
    max-width: ${S};
  }

  ul,
  ol {
    padding-left: 18px;
  }
`,Je=d.a.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding-left: 0 !important;
  margin: 0;

  li {
    font-size: ${v.xs};
    color: ${y};
    border: 1px solid ${E};
    border-radius: 999px;
    padding: 4px 12px;
    line-height: 1.4;
  }
`,We=d.a.div`
  margin-bottom: 18px;

  strong {
    color: ${y};
    font-size: ${v.md};
  }

  .field {
    display: block;
    margin-top: 4px;
    font-size: ${v.sm};
    color: ${y};
    max-width: ${S};

    .field-label {
      color: ${w};
      font-weight: ${C.subhead};
      margin-right: 6px;
    }
  }
`,_e=d.a.div`
  background-color: ${f};
  border: 1px solid ${E};
  border-radius: ${$};
  padding: 16px 20px;
  margin-top: 8px;

  h3 {
    margin-top: 0;
  }
`,qe=d.a.footer`
  width: 100%;
  text-align: left;
  font-size: ${v.sm};
  color: ${x};
  border-top: 1px solid ${E};
  margin-top: 32px;
  padding-top: 16px;

  a {
    color: ${w};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  a:hover {
    color: ${y};
  }
`,Qe=d.a.p`
  margin: 0 0 16px;
  font-size: ${v.xs};
  color: ${x};

  span {
    color: ${w};
    font-weight: ${C.subhead};
    margin-right: 4px;
  }
`,Ue=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 16px 0;

  a {
    display: block;
    cursor: zoom-in;
  }

  img {
    width: 100%;
    max-width: 1000px;
    background: #fff;
    border: 1px solid ${E};
    border-radius: ${$};
  }
`;var Xe=()=>l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),l.a.createElement("div",null,l.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),l.a.createElement(Fe,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),l.a.createElement(Oe,null,l.a.createElement(ze,null,l.a.createElement("a",{href:"/images/proj1-1.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"})),l.a.createElement("a",{href:"/images/proj1-2.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"})),l.a.createElement("a",{href:"/images/proj1-3.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"}))),l.a.createElement(Ve,null,l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),l.a.createElement("ul",null,l.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),l.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),l.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),l.a.createElement(Je,null,l.a.createElement("li",null,"Spring Boot"),l.a.createElement("li",null,"Spring Data"),l.a.createElement("li",null,"JPA"),l.a.createElement("li",null,"Spring Security"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"Vue3"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"Docker"),l.a.createElement("li",null,"Flutter")))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),l.a.createElement("p",null,"\u2018\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)\u2019\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d \ubc0f \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud574 \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\uc640 \uc790\uaca9\uc99d \uc885\ub958 \ubc0f \uc2dc\ud5d8 \uc77c\uc815\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uc5ec \uad6c\uc9c1\uc790\ub4e4\uc774 \uc790\uaca9\uc99d\uacfc \uc5f0\uacc4\ub41c \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc190\uc27d\uac8c \ud0d0\uc0c9\ud558\uace0 \ucee4\ub9ac\uc5b4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ubc1c\uc804\uc2dc\ud0ac \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),l.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc758 \ud504\ub860\ud2b8/\ubc31\uc5d4\ub4dc\uc640 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,"1. \uc0ac\uc6a9\uc790 \ud1b5\uacc4\ub97c \uc2dc\uac01\ud654\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0 \uc5b4\ub824\uc6c0\uc744 Spring Boot\ub85c \ub370\uc774\ud130 \uac00\uacf5 \ud6c4 Chart.js\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654.",l.a.createElement("br",null),"2. Flutter\uc640 Spring Boot \uac04 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ubd88\uc77c\uce58\ub85c \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc9c0\ub9cc API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c\ub97c \uac80\ud1a0\ud558\uba70 \uc218\uc815.",l.a.createElement("br",null),"3. User/Admin Role \uad8c\ud55c \uad00\ub9ac\uc640 CORS \uc124\uc815\uc5d0\uc11c Spring Security\uc640 CORS \uc124\uc815\uc744 \ud559\uc2b5\ud558\uba70 \ub2e8\uacc4\uc801\uc73c\ub85c \uad6c\ud604.",l.a.createElement("br",null)),l.a.createElement("p",null,"\uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \ubc31\uc5d4\ub4dc-\ud504\ub860\ud2b8\uc5d4\ub4dc \uc5f0\ub3d9\uc758 \uc911\uc694\uc131\uc744 \uae4a\uc774 \uc774\ud574\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uac1c\ubc1c \ubb38\uc11c\ub97c \ucca0\uc800\ud788 \uac80\ud1a0\ud558\uace0 \uaddc\uce59\uc744 \uc900\uc218\ud558\ub294 \uac83\uc774 \ud504\ub85c\uc81d\ud2b8\uc758 \uc131\uacf5\uc5d0 \uc5bc\ub9c8\ub098 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294\uc9c0 \uccb4\uac10\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uacbd\ud5d8\uc740 \uac1c\ubc1c\uc790\ub85c\uc11c \uc138\uc2ec\ud568\uacfc \uaf3c\uaf3c\ud568\uc758 \uc911\uc694\uc131\uc744 \ubc30\uc6b0\ub294 \uc18c\uc911\ud55c \uacc4\uae30\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")))),l.a.createElement(qe,null,l.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(te.l,{style:{marginRight:"5px"}}),l.a.createElement(te.h,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));var Ye=()=>l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:"/images/logo2.png",alt:"Project Logo"}),l.a.createElement("div",null,l.a.createElement("h1",null,"FLUX - \uc544\ud2f0\uc2a4\ud2b8 \uacbd\ub9e4 \ud50c\ub7ab\ud3fc \uac1c\ubc1c"),l.a.createElement(Fe,null,"- Team Project (2024.07.15 ~ 08.16): Market Page \ubc0f My Page \uc804\ubc18 \uad6c\ud604"))),l.a.createElement(Oe,null,l.a.createElement(ze,null,l.a.createElement("a",{href:"/images/proj2-1.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj2-1.png",alt:"Main Page"})),l.a.createElement("a",{href:"/images/proj2-2.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj2-2.png",alt:"User Login"})),l.a.createElement("a",{href:"/images/proj2-3.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj2-3.png",alt:"Notice Board"}))),l.a.createElement(Ve,null,l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),l.a.createElement("ul",null,l.a.createElement("li",null,"Spring Boot \uae30\ubc18\uc758 RESTful API \uc124\uacc4 \ubc0f \uad6c\ud604"),l.a.createElement("li",null,"Vue.js\ub97c \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801 \ud504\ub860\ud2b8\uc5d4\ub4dc UI \uac1c\ubc1c"),l.a.createElement("li",null,"\uacbd\ub9e4 \uc2dc\uac04 \ubc0f \uac00\uaca9 \uc124\uc815 \uae30\ub2a5\uc744 \ud3ec\ud568\ud55c My Page \uac1c\ubc1c"),l.a.createElement("li",null,"\uc0c1\ud488 \ubaa9\ub85d\uc5d0 \ud398\uc774\uc9c0\ub124\uc774\uc158 \ubc0f \uc815\ub82c \uae30\ub2a5 \ucd94\uac00"))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),l.a.createElement(Je,null,l.a.createElement("li",null,"Spring Boot"),l.a.createElement("li",null,"JPA"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"Vue.js"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"Docker"),l.a.createElement("li",null,"Git")))),l.a.createElement(He,null,l.a.createElement("h3",null,"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"),l.a.createElement("p",null,"FLUX\ub294 \uc544\ud2f0\uc2a4\ud2b8\uc640 \ub514\uc790\uc774\ub108\ub4e4\uc774 \uc0c1\ud488\uc744 \uc0ac\uace0\ud314 \uc218 \uc788\ub294 \uacbd\ub9e4 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \uc548\uc815\uc801\uc774\uace0 \ud655\uc7a5\uc131 \uc788\ub294 Spring Boot \ubc31\uc5d4\ub4dc\uc640 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 Vue.js \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uadf9\ub300\ud654\ud588\uc2b5\ub2c8\ub2e4.")),l.a.createElement(He,null,l.a.createElement("h3",null,"My Page \ubc0f \ub9c8\ucf13 \ud398\uc774\uc9c0 \uc8fc\uc694 \uac1c\ubc1c"),l.a.createElement("p",null,l.a.createElement("strong",null,"\ub9c8\ucf13 \ud398\uc774\uc9c0:")," \uc0c1\ud488 \ubaa9\ub85d\uc744 \ub3d9\uc801\uc73c\ub85c \ud45c\uc2dc\ud558\uace0, \uac80\uc0c9 \ubc0f \ud544\ud130\ub9c1 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc5ec \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uadf9\ub300\ud654\ud588\uc2b5\ub2c8\ub2e4. Vuex\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba70, Spring Boot \ubc31\uc5d4\ub4dc\uc640 \uc2e4\uc2dc\uac04 API \ud1b5\uc2e0\uc744 \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,l.a.createElement("strong",null,"My Page:")," Vue.js \uae30\ubc18\uc758 \uc785\ub825 \ud3fc\uc744 \ud1b5\ud574 \uc0c1\ud488 \ub4f1\ub85d, \uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uac04 \ubc0f \uac00\uaca9 \uc124\uc815 \uae30\ub2a5\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4. Spring Boot\uc640 JPA\ub97c \ud65c\uc6a9\ud574 \uc785\ub825\uac12\uc744 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\uace0, \uc815\ud655\ud55c \uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uc810\uc744 \uacc4\uc0b0\ud558\ub294 \uc2a4\ucf00\uc904\ub7ec\ub97c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.")),l.a.createElement(He,null,l.a.createElement("h3",null,"\ud2b8\ub7ec\ube14 \uc288\ud305 \ubc0f \uc131\uacfc"),l.a.createElement("ul",null,l.a.createElement("li",null,"Java Time API\ub97c \ud65c\uc6a9\ud574 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac04 \uc2dc\uac04 \ub3d9\uae30\ud654 \ubb38\uc81c\ub97c \ud574\uacb0."),l.a.createElement("li",null,"Task Scheduler\ub97c \ud65c\uc6a9\ud558\uc5ec \uacbd\ub9e4 \uc2dc\uc791 \ubc0f \uc885\ub8cc \ud504\ub85c\uc138\uc2a4\ub97c \uc790\ub3d9\ud654."),l.a.createElement("li",null,"\uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uac04\uacfc \uac00\uaca9 \uc124\uc815 \ub4f1 \ubcf5\uc7a1\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uad6c\ud604."))))),l.a.createElement(qe,null,l.a.createElement("a",{href:"https://github.com/Flux2024",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(te.h,{style:{marginRight:"5px"}}),"FLUX - GitHub Repository"))));const Ze=d.a.div`
  margin-top: 20px;

  a {
    float: right;
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 45%;
    max-width: 250px;
    border: 1px solid ${E};
    border-radius: 8px;
    cursor: zoom-in;
  }

  @media (max-width: 768px) {
    a {
      float: none;
      display: flex;
      justify-content: center;
      margin: 0 auto 10px;
    }

    img {
      width: auto;
      max-width: 220px;
    }
  }

  h3 {
    font-size: 1em;
    color: ${w};
  }

  p {
    font-size: 0.9em;
  }
`;var et=()=>l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:"/images/logo3.png",alt:"Project Logo"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Briefify - \uc774\ubbf8\uc9c0 \ubb38\uc11c\ub098 \ud14d\uc2a4\ud2b8 \ubb38\uc11c\uc758 \ubc88\uc5ed \ubc0f \uc694\uc57d\uc744 \uc9c0\uc6d0\ud558\ub294 AI \uae30\ubc18\uc758 \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),l.a.createElement(Fe,null,"- Team Project (2024.10.25 ~ 11.04): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),l.a.createElement(Oe,null,l.a.createElement(ze,null,l.a.createElement("a",{href:"/images/proj3-2.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj3-2.png",alt:"\ud648"})),l.a.createElement("a",{href:"/images/proj3-1.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj3-1.png",alt:"\uc694\uc57d\ud558\uae30"})),l.a.createElement("a",{href:"/images/proj3-6.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj3-6.png",alt:"\ub9c8\uc774\ud398\uc774\uc9c0"})),l.a.createElement("a",{href:"/images/proj3-5.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj3-5.png",alt:"\ub9c8\uc774\ud398\uc774\uc9c0"}))),l.a.createElement(Ve,null,l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),l.a.createElement("ul",null,l.a.createElement("li",null,"React\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),l.a.createElement("li",null,"Python\uc744 \uc774\uc6a9\ud55c \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),l.a.createElement("li",null,"\ub2e4\uc591\ud55c AI\ubaa8\ub378\uc758 \uc801\uc6a9"))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),l.a.createElement(Je,null,l.a.createElement("li",null,"FastAPI"),l.a.createElement("li",null,"Pytorch"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Docker")))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),l.a.createElement("p",null,"Briefify\ub294 \ud544\uc694\ud55c \uc815\ubcf4\ub9cc \ube60\ub974\uac8c \uc694\uc57d\ud558\uc5ec \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \uc5c5\ubb34 \ud6a8\uc728\uc744 \uadf9\ub300\ud654\ud558\ub294 AI \uae30\ubc18 \uc694\uc57d \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790, \uc5f0\uad6c\uc6d0, \ube44\uc988\ub2c8\uc2a4 \uc804\ubb38\uac00 \ub4f1 \ubc29\ub300\ud55c \uc815\ubcf4\ub97c \ub2e4\ub8e8\ub294 \uc9c1\uad70\uc744 \uc704\ud574 \uc124\uacc4\ub41c Briefify\ub294 \uc774\ubbf8\uc9c0\ub098 \ud14d\uc2a4\ud2b8 \uc790\ub8cc\ub97c \ubd84\uc11d\ud558\uc5ec \ud575\uc2ec\ub9cc \ubf51\uc544\ub0c5\ub2c8\ub2e4.")),l.a.createElement(Ze,null,l.a.createElement("a",{href:"/images/proj3-4.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj3-4.png",alt:"AI \ubaa8\ub378"})),l.a.createElement("div",null,l.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),l.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud504\ub860\ud2b8 \ub9c8\uc774\ud398\uc774\uc9c0\uc640 AI \ubaa8\ub378 \uac80\uc0c9 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc694\uc57d\ubcf8\uc744 \uc800\uc7a5\ud560 \ub54c\ub294 \uc81c\ubaa9\uacfc \ud568\uaed8 \uc800\uc7a5\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \ud6c4\uc5d0 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\uace0, \uc5ec\ub7ec AI \ubaa8\ub378\uc744 \ud14c\uc2a4\ud2b8\ud558\uba70 \ucd5c\uc801\uc758 \ubaa8\ub378\uc744 \uc120\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,"- EasyOCR\uc758 \ubbfc\uac10\ub3c4\ub97c \ud574\uacb0\ud558\uace0 Tesseract\ub85c \uc804\ud658.",l.a.createElement("br",null),"- Transformers \uc694\uc57d \ubaa8\ub378\uc758 \ud55c\uacc4\ub97c eenzeenee/t5-base\ub85c \ud574\uacb0.",l.a.createElement("br",null),"- mbart \ubaa8\ub378\uc758 \ubc88\uc5ed \ud488\uc9c8 \ubb38\uc81c\ub97c facebook/nllb\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc.",l.a.createElement("br",null),"- gTTS\ub85c \uac04\ub2e8\ud55c \uc74c\uc131 \ubcc0\ud658 \uad6c\ud604, \ub300\uc6a9\ub7c9 \ucc98\ub9ac \ud55c\uacc4 \uc778\uc9c0.",l.a.createElement("br",null)),l.a.createElement("p",null,"\ub2e4\uc591\ud55c AI \uae30\uc220\uc744 \ud1b5\ud569\ud558\uba70 \ubaa8\ub378 \uc120\ud0dd\uacfc \ud55c\uacc4\ub97c \uc774\ud574\ud558\ub294 \ubc30\uc6c0\uc758 \uae30\ud68c\ub97c \uc5bb\uc5c8\uace0, \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud5a5\uc0c1\uc744 \uc704\ud55c \uac1c\uc120 \ubc29\ud5a5\uc744 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4. \ubc88\uc5ed\uc2dc \uc5b8\uc5b4\ub97c \uc120\ud0dd\ud574\uc57c \ud588\ub294\ub370 \ub300\uc0c1 \uc5b8\uc5b4 \uc790\ub3d9 \uac10\uc9c0 \uae30\ub2a5\uc744 \ub3c4\uc785\ud558\uace0, LLM \ubaa8\ub378\uc744 \ud65c\uc6a9\ud588\ub2e4\uba74 \ub354 \ud6a8\uc728\uc801\uc778 \uacb0\uacfc\ubb3c\uc744 \ub3c4\ucd9c\ud588\uc744 \uac83\uc774\ub77c\ub294 \uc544\uc26c\uc6c0\uc774 \ub0a8\uc2b5\ub2c8\ub2e4."))))),l.a.createElement(qe,null,l.a.createElement("a",{href:"https://github.com/AI-X-min-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(te.l,{style:{marginRight:"5px"}}),l.a.createElement(te.h,{style:{marginRight:"5px"}})," Briefify - GitHub Repository"))));var tt=()=>l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:"/images/logo4.png",alt:"Project Logo"}),l.a.createElement("div",null,l.a.createElement("h1",null," FitChecker - \ub300\ud654\ub97c \ud1b5\ud574 \ud544\uc694\ud55c \uc6b4\ub3d9\uc744 \ucd94\ucc9c\ud574\uc8fc\uace0, \uc790\uc138\ub97c \uc7a1\uc544\uc8fc\ub294 AI \uae30\ubc18\uc758 \ud648\ud2b8\ub808\uc774\ub2dd \uc571"),l.a.createElement(Fe,null,"- Team Project (2024.11.05 ~ 12.20) : \ubc31\uc564\ub4dc \uac1c\ubc1c \ubc0f Langchain \uc744 \uc774\uc6a9\ud55c AI agent \uac1c\ubc1c \ubc0f \ud504\ub860\ud2b8/\ubc31 \uc5f0\uacb0"))),l.a.createElement(Oe,null,l.a.createElement(ze,null,l.a.createElement("a",{href:"/images/proj4-1.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj4-1.png",alt:""})),l.a.createElement("a",{href:"/images/proj4-2.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj4-2.png",alt:""})),l.a.createElement("a",{href:"/images/proj4-3.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj4-3.png",alt:""}))),l.a.createElement(Ve,null,l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),l.a.createElement("ul",null,l.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),l.a.createElement("li",null,"FastAPI\ub97c \ud65c\uc6a9\ud55c \ud504\ub860\ud2b8/\ubc31 \uc5d4\ub4dc \uc5f0\uacb0"),l.a.createElement("li",null,"Langchain\uc744 \uc774\uc6a9\ud55c AI agent \uac1c\ubc1c"),l.a.createElement("li",null,"LLM\uacfc RAG\ub97c \uc774\uc6a9\ud55c \ucd94\ucc9c\uae30\ub2a5"))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),l.a.createElement(Je,null,l.a.createElement("li",null,"Flutter"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"FastAPI"),l.a.createElement("li",null,"Firebase"),l.a.createElement("li",null,"Docker"),l.a.createElement("li",null,"Elasticsearch"),l.a.createElement("li",null,"Langchain"),l.a.createElement("li",null,"Mediapipe"),l.a.createElement("li",null,"Gpt 4o-mini")))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),l.a.createElement("p",null,"FitChecker\ub294 AI \uae30\ubc18 \uccb4\ud615 \ud3c9\uac00\uc640 \uc6b4\ub3d9 \uc790\uc138 \uad50\uc815\uc744 \ud1b5\ud574 \ud63c\uc790 \uc6b4\ub3d9\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \uc790\uc138 \uad50\uc815\uc758 \uc5b4\ub824\uc6c0\uc744 \ud574\uacb0\ud558\uace0, \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uc5ec \ub9de\ucda4\ud615 \uc6b4\ub3d9 \uacc4\ud68d\uacfc \uc2dd\ub2e8 \ucd94\ucc9c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub610\ud55c, Agent \uae30\ub2a5\uc73c\ub85c \uc6b4\ub3d9 \uc2a4\ucf00\uc904 \uad00\ub9ac\uc640 \uc2e4\uc2dc\uac04 \uc790\uc138 \uac10\uc9c0 \ud654\uba74 \uc790\ub3d9 \uc2e4\ud589\uc744 \uc9c0\uc6d0\ud558\uc5ec \uc2a4\ub9c8\ud2b8\ud55c \uc6b4\ub3d9 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4")),l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),l.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c LLLM\uc744 \ud65c\uc6a9\ud558\uc5ec \ud504\ub86c\ud504\ud2b8 \uc124\uc815 \ubc0f \uc5d0\uc774\uc804\ud2b8 \uc124\uacc4\ub97c \uc218\ud589\ud558\uc600\uc73c\uba70, \uc774\ub97c \ud1b5\ud574 \ucc57\ubd07\uacfc \uc74c\uc131 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0, \uc5d0\uc774\uc804\ud2b8\ub97c \ud65c\uc6a9\ud55c \uba85\ub839 \ucc98\ub9ac\ub85c \uc0ac\uc6a9\uc790\uac00 \uc694\uccad \uc2dc \uc6b4\ub3d9 \uc790\uc138 \uad50\uc815 \ud398\uc774\uc9c0\ub85c \uc790\ub3d9 \uc5f0\uacb0\ub418\ub294 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,"- AI \uae30\ubc18 \ubaa8\uc158 \uac10\uc9c0 \ubaa8\ub378\ub85c \uc6b4\ub3d9 \uc790\uc138\ub97c \uc2e4\uc2dc\uac04 \ubd84\uc11d\ud558\uba70, \uad50\uc815 \uc815\ud655\ub3c4 85% \uc774\uc0c1 \ub2ec\uc131.",l.a.createElement("br",null),"- YouTube API\uc640 RAG\ub97c \ud65c\uc6a9\ud574 \uc9c8\ubb38 \uc5f0\uad00 \uc601\uc0c1 \ucd94\ucc9c \uc815\ud655\ub3c4\ub97c 50% \uac1c\uc120.",l.a.createElement("br",null),"- \uad11\uace0\uc640 \ub178\uc774\uc988 \uc81c\uac70 \ubc0f \ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4 \uc801\uc6a9\uc73c\ub85c RAG \uac80\uc0c9 \uc815\ud655\ub3c4\ub97c \uac1c\uc120.",l.a.createElement("br",null),"- \ucc57\ubd07 \uc5d0\uc774\uc804\ud2b8\ub97c \ud65c\uc6a9\ud558\uc5ec \uc54c\ub78c \uc124\uc815 \ubc0f \ud398\uc774\uc9c0 \uc7ac\uc0dd \uae30\ub2a5\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc811\uadfc\uc131 \ud5a5\uc0c1.",l.a.createElement("br",null),"- \ub3c4\uba54\uc778 \uc911\uc2ec \uc124\uacc4\ub85c \uc758\uc874\uc131\uc744 \ub0ae\ucd94\uace0, \uac00\ub3c5\uc131, \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \uac1c\uc120\ud574 \ud611\uc5c5 \ud6a8\uc728\uc131 \uc99d\ub300.",l.a.createElement("br",null)),l.a.createElement("p",null,"FitChecker\ub294 RAG \uae30\uc220\uc744 \uc131\uacf5\uc801\uc73c\ub85c \ud1b5\ud569\ud558\uc5ec, \uc0ac\uc6a9\uc790 \ub9de\ucda4\ud615 \uc6b4\ub3d9 \ubd84\uc11d \ubc0f \ucd94\ucc9c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uba70 \ud611\uc5c5 \ud6a8\uc728\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ub192\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, WebSocket \uae30\ubc18 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \uc804\uc1a1 \ubbf8\uad6c\ud604\uc740 \uc544\uc26c\uc6c0\uc73c\ub85c \ub0a8\uc2b5\ub2c8\ub2e4.")))),l.a.createElement(qe,null,l.a.createElement("a",{href:"https://github.com/AI-X-main-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(te.l,{style:{marginRight:"5px"}}),l.a.createElement(te.h,{style:{marginRight:"5px"}})," FitChecker - GitHub Repository"))));const at=d.a.a`
  float: right;
  width: 300px;
  max-width: 45%;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 0;
  display: block;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    border: 1px solid ${E};
    border-radius: 8px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    float: none;
    width: 100%;
    max-width: 250px;
    margin: 10px auto;
  }
`;const nt={project1:Xe,project2:Ye,project3:et,project4:tt,project5:()=>l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:"/images/logo5.png",alt:"Project Logo"}),l.a.createElement("div",null,l.a.createElement("h1",null,"We:Review - \uc601\uc218\uc99d \uac80\uc99d \uc790\ub3d9\ud654 \uc2dc\uc2a4\ud15c (OCR + LLM \uae30\ubc18)"),l.a.createElement(Fe,null,"- Solo Project (2025.08 ~ 2025.10): Backend/AI \uac1c\ubc1c (1\uc778 \ud504\ub85c\uc81d\ud2b8)"))),l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),l.a.createElement("ul",null,l.a.createElement("li",null,"OCR + LLM \uae30\ubc18 \uc601\uc218\uc99d \uc790\ub3d9 \uac80\uc218"),l.a.createElement("li",null,"DBSCAN \uc774\ubbf8\uc9c0 \uc601\uc5ed \ud544\ud130\ub9c1"),l.a.createElement("li",null,"\ucc98\ub9ac \uc2dc\uac04 85% \ub2e8\ucd95, \uc815\ud655\ub3c4 95% \ub2ec\uc131"),l.a.createElement("li",null,"DDD + Clean Architecture \uc801\uc6a9"))),l.a.createElement(He,null,l.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),l.a.createElement(Je,null,l.a.createElement("li",null,"Python 3.10"),l.a.createElement("li",null,"FastAPI"),l.a.createElement("li",null,"PaddleOCR"),l.a.createElement("li",null,"Qwen2.5-7B"),l.a.createElement("li",null,"PyTorch"),l.a.createElement("li",null,"OpenCV"),l.a.createElement("li",null,"DBSCAN"),l.a.createElement("li",null,"Pydantic")))),l.a.createElement(Oe,null,l.a.createElement(ze,null,l.a.createElement("a",{href:"/images/proj5-1.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj5-1.png",alt:"System Architecture"})),l.a.createElement("a",{href:"/images/proj5-2.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj5-2.png",alt:"Processing Pipeline"}))),l.a.createElement(Ve,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\ud504\ub85c\uc81d\ud2b8 \ubc30\uacbd"),l.a.createElement("p",null,"WeReview\ub294 \ud06c\ub9ac\uc5d0\uc774\ud130-\ube0c\ub79c\ub4dc \uc5f0\uacb0 \uc20f\ud3fc \ub9ac\ubdf0 \uad11\uace0 \ud50c\ub7ab\ud3fc\uc73c\ub85c, \uc0ac\uc6a9\uc790\uac00 \uc601\uc218\uc99d \uc81c\ucd9c \uc2dc \ub9ac\uc6cc\ub4dc\ub97c \uc9c0\uae09\ud569\ub2c8\ub2e4. \uae30\uc874\uc5d0\ub294 \ubaa8\ub4e0 \uc601\uc218\uc99d\uc744 \uc218\uc791\uc5c5\uc73c\ub85c \uac80\uc218(1\uac74\ub2f9 1\ubd84)\ud558\uc5ec \uc778\ub825 \ube44\uc6a9\uacfc \ud655\uc7a5\uc131 \ud55c\uacc4\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ubcf8 \ud504\ub85c\uc81d\ud2b8\ub294 \uc601\uc218\uc99d \uc774\ubbf8\uc9c0\uc5d0\uc11c JSON \uc790\ub3d9 \ucd94\ucd9c\ub85c \ucc98\ub9ac \uc2dc\uac04 85% \ub2e8\ucd95, \uc815\ud655\ub3c4 95% \uc774\uc0c1, \ubb34\ud55c \ud655\uc7a5 \uac00\ub2a5\ud55c \uc2dc\uc2a4\ud15c \uad6c\ucd95\uc744 \ubaa9\ud45c\ub85c \ud558\uc600\uc2b5\ub2c8\ub2e4.")),l.a.createElement(He,null,l.a.createElement("h3",null,"\ud575\uc2ec \ud2b8\ub7ec\ube14\uc288\ud305"),l.a.createElement("p",null,l.a.createElement("strong",null,'1. \uc774\ubbf8\uc9c0 \uc601\uc5ed \ud544\ud130\ub9c1 - "2GB ML vs 100\uc904 DBSCAN"'),l.a.createElement("br",null),"\uc601\uc218\uc99d \ub0b4 \uc0c1\ud488 \uc378\ub124\uc77c/\ub85c\uace0 \ud14d\uc2a4\ud2b8\uae4c\uc9c0 \uc778\uc2dd\ub418\uc5b4 LLM \ud63c\ub780 \ubc1c\uc0dd, \uc815\ud655\ub3c4 70%\uc5d0 \uadf8\ucce4\uc2b5\ub2c8\ub2e4. PPStructure(\uc815\ud655\ub3c4 85%, \ucc98\ub9ac +5\ucd08, \uba54\ubaa8\ub9ac +1GB)\uc640 ML Classifier(\uc815\ud655\ub3c4 96%, \ub85c\ub529 +3\ucd08, \uba54\ubaa8\ub9ac +2GB)\ub97c \uc2dc\ub3c4\ud588\uc73c\ub098 \uc131\ub2a5 \ubb38\uc81c\ub85c \uc81c\uac70\ud588\uc2b5\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c DBSCAN \ud074\ub7ec\uc2a4\ud130\ub9c1 \uae30\ubc18 \uc774\ubbf8\uc9c0 \uc601\uc5ed \uac10\uc9c0\ub97c \uc801\uc6a9\ud558\uc5ec \uc624\uc778\uc2dd\ub960 15%\uc5d0\uc11c 2%\ub85c, \uc18d\ub3c4 +50%, \uba54\ubaa8\ub9ac -3GB, \ucf54\ub4dc -30% \ub2ec\uc131\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,l.a.createElement("strong",null,"2. \ub2e4\uc591\ud55c \uc601\uc218\uc99d \ucf00\uc774\uc2a4 \ucc98\ub9ac"),l.a.createElement("br",null),"- \uc138\ub85c \uae34 \uc601\uc218\uc99d(3000x9000px): \uc2ac\ub77c\uc774\ub529 \uc708\ub3c4\uc6b0(tile_h=1800, overlap=240)\ub85c \ub204\ub77d\ub960 30%\uc5d0\uc11c 5%\ub85c \uac1c\uc120",l.a.createElement("br",null),"- \ub2e4\uc911 \ud398\uc774\uc9c0 \uc911\ubcf5: Head-Tail(SequenceMatcher 95%) + DBSCAN \uc88c\ud45c \ud074\ub7ec\uc2a4\ud130\ub9c1\uc73c\ub85c \uc911\ubcf5 \uc81c\uac70\uc728 99%",l.a.createElement("br",null),"- \uc628\ub77c\uc778+\uce74\ub4dc \uc601\uc218\uc99d: OCR \ub808\ubca8 \ud1b5\ud569 + 3\ub2e8\uacc4 \uc911\ubcf5 \uc81c\uac70(\ud398\uc774\uc9c0 \uac04/\ube14\ub85d \uac04)\ub85c \uc911\ubcf5 \uc778\uc2dd 99%"),l.a.createElement("p",null,l.a.createElement("strong",null,"3. COORDS \ud3ec\ub9f7 - \ud1a0\ud070 40% \uc808\uac10"),l.a.createElement("br",null),"LLM\uc5d0 \ubd88\ud544\uc694\ud55c \ub370\uc774\ud130 80% \uc804\uc1a1(bbox, confidence \ub4f1) \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 4\uac1c \ud544\ub4dc\ub9cc \ub0a8\uae34 COORDS \ud3ec\ub9f7\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4. \uae30\uc874 \uc57d 800\ud1a0\ud070\uc5d0\uc11c \uc57d 480\ud1a0\ud070\uc73c\ub85c \uc904\uc5ec \ud1a0\ud070 -40%, API \ube44\uc6a9 -40%, \uc751\ub2f5\uc18d\ub3c4 +30% \ub2ec\uc131\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,l.a.createElement("strong",null,"4. DDD + Clean Architecture"),l.a.createElement("br",null),"\uc778\uc218\uc778\uacc4 \uc6a9\uc774, \ub3c4\uba54\uc778 \ud655\uc7a5 \uac00\ub2a5, \ubaa8\ub378 \uad50\uccb4 \uc2dc \ucd5c\uc18c \uc218\uc815\uc744 \ubaa9\ud45c\ub85c app(HTTP) / core(\ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1) / infra(OCR/LLM) \uacc4\uce35\uc744 \ubd84\ub9ac\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ub378 \uad50\uccb4 \uc2dc infra/llm/model_loader.py 10\uc5ec \uc904\ub9cc \uc218\uc815\ud558\uba74 \ub418\uba70, \ub9ac\ubdf0 \uc774\ubbf8\uc9c0 \uac80\uc218 \uae30\ub2a5 \ucd94\uac00 \uc2dc OCR/LLM \ubaa8\ub4c8 100% \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.")))),l.a.createElement(Oe,null,l.a.createElement(He,null,l.a.createElement("h3",null,"\uc8fc\uc694 \ud559\uc2b5 \ubc0f \uc131\uc7a5"),l.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \ubcf5\uc7a1\ud55c \uc194\ub8e8\uc158\ubcf4\ub2e4 \ud6a8\uc728\uc801\uc778 \uc54c\uace0\ub9ac\uc998 \uc120\ud0dd\uc774 \ub354 \uc911\uc694\ud558\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. 2GB ML \ubaa8\ub378\uc744 100\uc904 DBSCAN \ucf54\ub4dc\ub85c \ub300\uccb4\ud558\uc5ec \uba54\ubaa8\ub9ac -3GB, \ucc98\ub9ac \uc18d\ub3c4 +50%\ub97c \ub2ec\uc131\ud55c \uc0ac\ub840\uac00 \uc774\ub97c \uc785\uc99d\ud569\ub2c8\ub2e4."),l.a.createElement("p",null,"\ub610\ud55c, \uc124\uacc4 \ub2e8\uacc4\ubd80\ud130 \ud655\uc7a5\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \uace0\ub824\ud55c \uacb0\uacfc \ubaa8\ub378 \uad50\uccb4 30\ubd84, \ub3c4\uba54\uc778 \ud655\uc7a5 \uc2dc \ubaa8\ub4c8 100% \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud588\uc73c\uba70, \uc774\ub294 \ucd08\uae30 \uc124\uacc4\uac00 \uc7a5\uae30\uc801 \uac1c\ubc1c \ud6a8\uc728\uc131\uc5d0 \uc9c1\uc811\uc801\uc778 \uc601\ud5a5\uc744 \uc900\ub2e4\ub294 \uac83\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,"AI/ML \ud30c\uc774\ud504\ub77c\uc778 \uc804\uccb4\ub97c \ucc98\uc74c\ubd80\ud130 \uc124\uacc4\ud558\uace0 \uad6c\ud604\ud558\uba70(\uc774\ubbf8\uc9c0 \uc804\ucc98\ub9ac - OCR - \ub178\uc774\uc988 \ud544\ud130\ub9c1(DBSCAN) - \ub77c\uc778 \uc815\ub82c(DBSCAN) - LLM(Few-shot) - \ud6c4\ucc98\ub9ac), DBSCAN \ud074\ub7ec\uc2a4\ud130\ub9c1\uacfc \uac19\uc740 \uc54c\uace0\ub9ac\uc998\uc774 \ubb38\uc81c \uc815\uc758\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \uc6a9\ub3c4\ub85c \ud65c\uc6a9\ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4.")),l.a.createElement(at,{href:"/images/proj5-3.png",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/images/proj5-3.png",alt:"Result Screen"}))),l.a.createElement(qe,null,l.a.createElement("a",{href:"https://www.wereview.fun/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(te.l,{style:{marginRight:"5px"}}),"We:Review - \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8"))))},lt={project6:"company-os",project7:"sales-pipeline",project8:"email-agent",project9:"field-fleet"},rt={ko:{highlights:"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d",stack:"\uae30\uc220 \uc2a4\ud0dd",scale:"\uaddc\ubaa8 (git \uc2e4\uce21)",background:"\ud504\ub85c\uc81d\ud2b8 \ubc30\uacbd",troubleshooting:"\ud575\uc2ec \ud2b8\ub7ec\ube14\uc288\ud305",aiCollab:"\ud3c9\uac00 \xb7 \uc6b4\uc601 \xb7 AI \ud611\uc5c5",flow:"\uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub098",repos:"\uad00\ub828 \uc800\uc7a5\uc18c",problem:"Problem",cause:"Cause",action:"Action",result:"Result"},en:{highlights:"Highlights",stack:"Stack",scale:"Scale (measured from git)",background:"Background",troubleshooting:"Troubleshooting",aiCollab:"Evals \xb7 Ops \xb7 AI collaboration",flow:"How it works",repos:"Repos",problem:"Problem",cause:"Cause",action:"Action",result:"Result"}};function ot(){const{slug:e}=Object(i.r)(),{lang:t,content:a,withPrefix:n}=h();if(lt[e])return l.a.createElement(i.a,{to:n("/projects/"+lt[e]),replace:!0});const r=nt[e];if(r)return l.a.createElement(l.a.Fragment,null,"en"===t&&l.a.createElement(Re,{text:a.nav.koOnlyNote}),l.a.createElement(r,null));const o=a.cases.find(t=>t.slug===e);if(!o)return l.a.createElement(i.a,{to:n("/projects"),replace:!0});const s=rt[t];return l.a.createElement(Ge,null,l.a.createElement(De,null,l.a.createElement(Be,null,l.a.createElement("img",{src:o.logo,alt:o.title}),l.a.createElement("div",null,l.a.createElement("h1",null,o.title),l.a.createElement(Fe,null,"- ",o.period," \xb7 ",o.role))),l.a.createElement(Ne,null,o.oneLiner),o.repos&&l.a.createElement(Qe,null,l.a.createElement("span",null,s.repos)," ",o.repos),l.a.createElement(Ke,null,l.a.createElement(He,null,l.a.createElement("h3",null,s.highlights),l.a.createElement("ul",null,o.highlights.map(e=>l.a.createElement("li",{key:e},e)))),l.a.createElement(He,null,l.a.createElement("h3",null,s.stack),l.a.createElement(Je,null,o.stack.map(e=>l.a.createElement("li",{key:e},e))))),l.a.createElement(Ue,null,o.architectureImages.map(e=>l.a.createElement("a",{key:e.src,href:e.src,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e.src,alt:e.alt})))),l.a.createElement(Oe,null,l.a.createElement(Ve,null,l.a.createElement(He,null,l.a.createElement("h3",null,s.background),l.a.createElement("p",null,o.background)),o.flow&&l.a.createElement(He,null,l.a.createElement("h3",null,s.flow),l.a.createElement("ol",null,o.flow.map(e=>l.a.createElement("li",{key:e},e)))),l.a.createElement(He,null,l.a.createElement("h3",null,s.scale),l.a.createElement("ul",null,o.scale.map(e=>l.a.createElement("li",{key:e},e)))),l.a.createElement(He,null,l.a.createElement("h3",null,s.troubleshooting),o.troubleshooting.map(e=>l.a.createElement(We,{key:e.title},l.a.createElement("strong",null,e.title),e.problem&&l.a.createElement("span",{className:"field"},l.a.createElement("span",{className:"field-label"},s.problem),e.problem),e.cause&&l.a.createElement("span",{className:"field"},l.a.createElement("span",{className:"field-label"},s.cause),e.cause),e.action&&l.a.createElement("span",{className:"field"},l.a.createElement("span",{className:"field-label"},s.action),e.action),e.result&&l.a.createElement("span",{className:"field"},l.a.createElement("span",{className:"field-label"},s.result),e.result)))),l.a.createElement(_e,null,l.a.createElement("h3",null,s.aiCollab),l.a.createElement("ul",null,o.aiCollab.map(e=>l.a.createElement("li",{key:e},e)))))),l.a.createElement(qe,null,l.a.createElement("span",null,l.a.createElement(te.l,{style:{marginRight:"5px"}}),"ko"===t?"\ud68c\uc0ac \ube44\uacf5\uac1c \uc800\uc7a5\uc18c \xb7 \uc218\uce58\ub294 git \uae30\ub85d \uae30\uc900":"Private company repo \xb7 figures measured from git history"))))}d.a.div`
  background-color: ${f};
  border: 1px solid ${E};
  border-radius: ${$};
  padding: 20px;
`,d.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,d.a.span`
  display: inline-block;
  font-size: ${v.xs};
  color: ${y};
  border: 1px solid ${E};
  border-radius: 999px;
  padding: 4px 12px;
  line-height: 1.4;
`,d.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;const it=d.a.a`
  display: block;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid ${E};
    border-radius: ${$};
    background: #fff;
  }
`,st=(d.a.div`
  color: ${y};
  font-size: ${v.md};
  line-height: ${A};

  p,
  ul,
  ol {
    max-width: ${S};
    margin: 0 0 1em;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  strong {
    color: ${w};
  }
`,d.a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`),ct=d.a.div`
  background-color: ${f};
  border: 1px solid ${E};
  border-radius: 8px;
  padding: 10px 14px;
  color: ${y};
  font-size: ${v.sm};
  max-width: 190px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${w};
  }

  small {
    color: ${x};
    font-size: 0.85em;
    line-height: 1.4;
  }
`,dt=d.a.span`
  color: ${w};
  font-size: 1.1em;
`,mt=d.a.ul`
  color: ${y};
  font-size: ${v.sm};
  line-height: ${A};
  padding-left: 20px;
  margin: 0;
  max-width: ${S};
`,pt=Object(d.a)(V)`
  align-items: center;

  & > div {
    max-width: 1200px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  header {
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 20px;
  }
`,gt=Object(d.a)(it)`
  max-width: 800px;

  @media (max-height: 760px) and (min-width: 900px) {
    max-width: 680px;
  }
`,ut=d.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  border-top: 1px solid ${E};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,ht=d.a.div`
  padding: 10px 0;
  border-bottom: 1px solid ${E};

  h4 {
    color: ${w};
    font-size: ${v.sm};
    font-weight: ${C.subhead};
    line-height: 1.45;
    margin: 0 0 2px;
  }

  p {
    color: ${x};
    font-size: ${v.xs};
    line-height: 1.55;
    margin: 0;
  }
`;function bt(){const{content:e}=h(),{howIBuild:t}=e;return l.a.createElement(pt,{title:t.title,lead:t.intro},l.a.createElement(K,null,!t.image&&l.a.createElement(H,null,t.loopTitle),t.image&&l.a.createElement(gt,{href:t.image,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:t.image,alt:t.loopTitle})),!t.image&&l.a.createElement(l.a.Fragment,null,l.a.createElement(st,null,t.loop.map((e,a)=>l.a.createElement(l.a.Fragment,{key:e.step},l.a.createElement(ct,{title:e.desc},l.a.createElement("strong",null,e.step),l.a.createElement("small",null,e.desc)),a<t.loop.length-1&&l.a.createElement(dt,null,"\u2192")))))),!t.image&&l.a.createElement(K,null,l.a.createElement(H,null,t.harnessTitle),l.a.createElement(mt,null,t.harness.map(e=>l.a.createElement("li",{key:e},e)))),l.a.createElement(K,null,l.a.createElement(H,null,t.incidentsTitle),l.a.createElement(ut,null,t.incidents.map(e=>l.a.createElement(ht,{key:e.title},l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.lesson))))))}var ft=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(G,null),l.a.createElement(T,null),l.a.createElement("div",{className:"main-content"},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",element:l.a.createElement(ue,null)}),l.a.createElement(i.b,{path:"/about",element:l.a.createElement(ee,null)}),l.a.createElement(i.b,{path:"/skills",element:l.a.createElement(se,null)}),l.a.createElement(i.b,{path:"/projects",element:l.a.createElement($e,null)}),l.a.createElement(i.b,{path:"/projects/:slug",element:l.a.createElement(ot,null)}),l.a.createElement(i.b,{path:"/build",element:l.a.createElement(bt,null)}),l.a.createElement(i.b,{path:"/en",element:l.a.createElement(ue,null)}),l.a.createElement(i.b,{path:"/en/about",element:l.a.createElement(ee,null)}),l.a.createElement(i.b,{path:"/en/skills",element:l.a.createElement(se,null)}),l.a.createElement(i.b,{path:"/en/projects",element:l.a.createElement($e,null)}),l.a.createElement(i.b,{path:"/en/projects/:slug",element:l.a.createElement(ot,null)}),l.a.createElement(i.b,{path:"/en/build",element:l.a.createElement(bt,null)}))))};var Et=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,null,l.a.createElement(ft,null)))),Et(),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(e=>e.forEach(e=>e.unregister()))}},[[21,1,2]]]);
//# sourceMappingURL=main.31ff3be6.chunk.js.map