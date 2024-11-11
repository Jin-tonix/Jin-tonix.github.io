(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{21:function(e,t,l){e.exports=l(32)},28:function(e,t,l){},29:function(e,t,l){},32:function(e,t,l){"use strict";l.r(t);var a=l(1),n=l.n(a),i=l(16),r=l.n(i),m=(l(28),l(29),l(3)),c=l(11),o=l(13),d=l(4),s=l(19),p=l(8);const u=d.a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  max-width: 250px;
  min-width: 80px;

  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 25px;

    a {
      color: #fff;
      font-size: clamp(1.2em, 2vw, 1.8em); /* 반응형 폰트 크기 */
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
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
    gap: 15px;

    a {
      color: #aaa;
      font-size: clamp(0.9em, 1.5vw, 1.2em); /* 반응형 폰트 크기 */
      text-decoration: none;
      font-weight: normal;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    gap: 15px;

    a {
      color: #fff;
      font-size: clamp(0.8em, 1.5vw, 1em); /* 반응형 폰트 크기 */
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }
`;function x(){const[e,t]=Object(a.useState)(!1);return n.a.createElement(u,{showExtraMenu:e},n.a.createElement("div",{className:"menu"},n.a.createElement(p.b,{to:"/",onClick:()=>t(!1)},"Intro"),n.a.createElement(p.b,{to:"/about",onClick:()=>t(!1)},"About"),n.a.createElement(p.b,{to:"/skills",onClick:()=>t(!1)},"Skills"),n.a.createElement(p.b,{to:"/projects",onClick:()=>{t(!e)}},"Projects"),e&&n.a.createElement("div",{className:"extra-menu"},n.a.createElement(p.b,{to:"/projects/project1"},"Project 1"),n.a.createElement(p.b,{to:"/projects/project2"},"Project 2"),n.a.createElement(p.b,{to:"/projects/project3"},"Project 3"),n.a.createElement(p.b,{to:"/projects/project4"},"Project 4"))),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.a})," GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.b})," LinkedIn"),n.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},n.a.createElement(c.a,{icon:s.a})," Email")))}const f=d.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,g=d.a.div`
  background-image: url('/images/img2.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 15vw; /* 사이드바와의 간격 */
  width: calc(100vw - 15vw); /* 화면 전체에서 사이드바 너비를 제외한 나머지 사용 */
  overflow: hidden;
  padding: 10px 20px;
  box-sizing: border-box;

  .intro, .name-wrapper, .description {
    max-width: 70%;
    text-align: center;
  }

  .intro {
    font-size: 1.8em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${f} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    animation: ${f} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;
    margin-bottom: 20px;

    .name-highlight {
      font-size: 1.8em;
      font-weight: 900;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #ffd700;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
  }

  .description {
    font-size: 1.1em;
    font-weight: 700;
    color: #ddd;
    max-width: 800px;
    line-height: 1.5;
    text-shadow: 1px 1px 5px #333;
    animation: ${f} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
  }

  /* 반응형 조정 */
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw);

    .intro {
      font-size: 1.5em;
    }

    .name-wrapper {
      font-size: 1.7em;

      .name-highlight {
        font-size: 1.6em;
      }
    }

    .description {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);

    .intro {
      font-size: 1.3em;
    }

    .name-wrapper {
      font-size: 1.5em;

      .name-highlight {
        font-size: 1.4em;
      }
    }

    .description {
      font-size: 0.9em;
    }
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);

    .intro {
      font-size: 1.1em;
    }

    .name-wrapper {
      font-size: 1.5em;

      .name-highlight {
        font-size: 1.5em;
      }
    }

    .description {
      font-size: 1em;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;function h(){return n.a.createElement(g,null,n.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),n.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uba70 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud558\uba70 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740",n.a.createElement("br",null),"\ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",n.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0",n.a.createElement("br",null),"\uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}const E=d.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,w=d.a.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #222;
  padding: 5px 20px;
  box-sizing: border-box;
  margin-left: 15vw; /* 사이드바의 너비 */
  width: calc(100vw - 15vw); /* 사이드바를 제외한 나머지 공간 */
  
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw); /* 화면 크기에 맞춰 너비 조정 */
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,b=d.a.div`
  padding: 10px 30px;
  animation: ${E} 1s ease;
  color: #fff;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,v=Object(d.a)(b)`
  width: 50%;
  border-right: 1px solid #444;
  padding-left: 30px;

  @media (max-width: 768px) {
    width: 100%; /* 작은 화면에서는 전체 콘텐츠가 차지하도록 */
    border-right: none;
  }
`,y=Object(d.a)(b)`
  width: 50%;
  padding-right: 10px; /* 오른쪽 여백을 적게 설정 */

  @media (max-width: 768px) {
    width: 100%; /* 작은 화면에서는 전체 콘텐츠가 차지하도록 */
    padding-right: 10px; /* 작은 화면에서 여백 설정 */
  }
`,k=d.a.div`
  margin-bottom: 15px;

  h2 {
    margin-bottom: 2px;
    color: #ffd700;
    font-size: 2vw; /* 화면 크기에 따라 자동 조절 */
  }

  p {
    line-height: 1.8;
    font-size: 1.2vw; /* 화면 크기에 비례한 글씨 크기 설정 */
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1.1vw; /* 화면 크기에 비례한 글씨 크기 설정 */
  }

  li span {
    font-size: 1vw;
    color: #ccc;
  }

  .strong-highlight {
    font-weight: bolder;
    font-size: 1.5vw;
  }
`;var j=()=>n.a.createElement(w,null,n.a.createElement(v,null,n.a.createElement(k,{id:"resume"},n.a.createElement("h2",null,"Experience"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- AI \uc2ec\ud654 \uacfc\uc815\uc744 \uc774\uc218\ud558\uace0 \ud300 \ud504\ub85c\uc81d\ud2b8\ub85c AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,'- \uc815\ubd80 \uc9c0\uc6d0 "K-Digital" \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \ud480\uc2a4\ud0dd \uc5d4\uc9c0\ub2c8\uc5b4 \uad50\uc721 \uc774\uc218.',n.a.createElement("br",null),"- \ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 \ubc31\uc5d4\ub4dc \uac1c\ubc1c \uc5ed\ub7c9\uc744 \uc2b5\ub4dd\ud558\uace0, GitHub\ub85c 3\uac1c \ud504\ub85c\uc81d\ud2b8 \ud611\uc5c5 \uc9c4\ud589.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 (MonteKids) \uc601\uc5b4 \uac15\uc0ac")," \xb7 (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- \ubaac\ud14c\uc18c\ub9ac \uae30\ubc18 \ud559\uc6d0\uc5d0\uc11c \uc601\uc5b4\ub97c \uc9c0\ub3c4\ud558\uba70 \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5, \uc9d1\uc911\ub825, \uc608\uc758 \ubc0f \uc778\ub0b4\uc2ec\uc744 \uae30\ub974\ub3c4\ub85d \uad50\uc721\ud568. ",n.a.createElement("br",null),"- \ud559\uc0dd\ub4e4\uc5d0\uac8c \uae0d\uc815\uc801\uc778 \ub864 \ubaa8\ub378\uc774 \ub418\uc5b4 \uc804\uc778\uc801 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud568. \uc8fc 2\ud68c \ud559\ubd80\ubaa8 \uc0c1\ub2f4\uc744 \ud1b5\ud574 \ud559\uc0dd\uc758 \ubc1c\uc804 \uc0c1\ud669\uc744 \uacf5\uc720\ud558\uace0 \uc77c\uad00\ub41c \uc131\uc7a5\uc744 \uc720\ub3c4\ud568.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"Pots&pans (\ud30c\uce20\uc564\ud32c\uc2a4) \uc601\uc5b4 \uac15\uc0ac")," \xb7 (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- \uc601\uc5b4\uc720\uce58\uc6d0\uc5d0\uc11c \uc601\uc5b4\ub97c \uc9c0\ub3c4\ud558\uba70 \uae0d\uc815\uc801\uc778 \ub864 \ubaa8\ub378\ub85c \ud559\uc0dd\ub4e4\uc758 \ub2e4\uc591\ud55c \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud568. ",n.a.createElement("br",null),"- \uc8fc 2\ud68c \ud559\ubd80\ubaa8 \uc0c1\ub2f4\uc744 \ud1b5\ud574 \ud559\uc0dd \uc131\uacfc\uc640 \ubc1c\uc804 \ubc29\ud5a5\uc744 \ub17c\uc758\ud558\uba70 \uc9c0\uc18d\uc801\uc778 \uc131\uc7a5 \uc720\ub3c4.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uac15\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- \ud559\uc0dd \ucc38\uc5ec\ub97c \ub192\uc774\ub294 30:70 \uaddc\uce59\uc744 \uc801\uc6a9\ud574 \uc601\uc5b4 \uc218\uc5c5\uc744 \uc9c4\ud589\ud558\uace0, \ud765\ubbf8\ub85c\uc6b4 \uad50\uc548 \uac1c\ubc1c. ",n.a.createElement("br",null),"- \ud559\uc0dd \uc131\uc7a5\uc744 \ub3c5\ub824\ud558\uba70, \ub9e4\uc6d4 \ud559\ubd80\ubaa8\uc640\uc758 \uc18c\ud1b5\uc744 \ud1b5\ud574 \uc131\uacfc\ub97c \uacf5\uc720\ud568.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc720\uce58\uc6d0 \ubd80\uc6d0\uc7a5")," \xb7 \uc815\uaddc\uc9c1 (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- \uad50\uc0ac \ucc44\uc6a9, \uc5f0\uac04 \ucee4\ub9ac\ud058\ub7fc \ubc0f \ud589\uc0ac \uae30\ud68d \ucd1d\uad04. ",n.a.createElement("br",null),"- \ud559\ubd80\ubaa8 \ubc0f \uc6b4\uc601\uc704\uc6d0\ud68c \uc18c\ud1b5 \ucc3d\uad6c \uc5ed\ud560 \uc218\ud589, \uc720\uce58\uc6d0 \uc6b4\uc601 \uad00\ub9ac."))))),n.a.createElement(y,null,n.a.createElement(k,{id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement("br",null),n.a.createElement("img",{src:"/images/img.jpg",alt:"Jinhee Mok",style:{width:"120px",height:"170px",marginBottom:"20px",float:"right",marginTop:"10px",marginLeft:"20px"}}),n.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, \uc5f4\uc815\uacfc \ub048\uae30\ub85c \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \uac1c\ubc1c\uc790 \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ubc95\ud559\uc744 \uc804\uacf5\ud558\uba70 \uc313\uc740 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc740 \uc800\uc758 \ud070 \uc790\uc0b0\uc785\ub2c8\ub2e4. \uc774 \ub2a5\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\uace0 \uac00\ub974\uce58\ub294 \uc77c\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub290\uaef4 \uc601\uc5b4 \uad50\uc721 \ud604\uc7a5\uc5d0\uc11c \ud559\uc0dd\ub4e4\uc758 \uc131\uc7a5\uc744 \ub3c4\uc654\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\ud5d8\uc740 \uc800\uc5d0\uac8c \uc18c\ud1b5\uc758 \uc911\uc694\uc131\uacfc \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud55c \uc2e4\ud589\ub825\uc744 \uae38\ub7ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0ac\ud68c \uc18d\uc5d0\uc11c \uc800 \uc5ed\uc2dc \uae30\uc220 \ubd84\uc57c\ub85c \uc0c8\ub85c\uc6b4 \ub3c4\uc804\uc5d0 \ub098\uc11c\uace0\uc790 \ud588\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \uae4a\uc740 \ud765\ubbf8\ub97c \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubc95\ud559\uc744 \ud1b5\ud574 \uccb4\ub4dd\ud55c \ubd84\uc11d\ub825\uacfc \uad50\uc721 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc774 \ub420 \uac83\uc774\ub77c \ud655\uc2e0\ud569\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ub2e8\uc21c\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uba70 \uc2dc\uc2a4\ud15c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uace0 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370 \uae30\uc5ec\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud568\uaed8 \uc77c\ud558\uba70 \uae0d\uc815\uc801\uc778 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac08 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")))),z=l(7),P=l(10);const S=d.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,N=d.a.div`
  display: flex;
  justify-content: center;
  align-items: center; // center 정렬을 위해 변경
  min-height: 100vh;
  background-color: #222;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  padding: 20px;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw);
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,A=d.a.div`
  display: flex;
  flex-direction: column;
  align-items: center; // center 정렬을 위해 변경
  justify-content: center; // center 정렬을 위해 추가
  width: 100%;
  max-width: 800px;
  padding: 40px;
  overflow-y: auto;
  animation: ${S} 1s ease;
  color: #fff;
  max-height: 100vh;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`,F=d.a.div`
  margin-bottom: 20px;
  width: 100%;
  text-align: left; // 전체 섹션을 왼쪽 정렬로 변경

  h2 {
    color: #ffd700;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: left; // 왼쪽 정렬로 변경
    margin-left: 0; // 왼쪽 마진 제거
    width: 100%; // 전체 너비 사용
    
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; // skills 아이템들은 중앙 정렬 유지
    align-items: center;
    font-size: 1.5em;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      gap: 15px;
      font-size: 1.2em;
    }
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7em;
    color: #fff;
  }

  .skill-icon {
    font-size: 2em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }
`;var J=()=>n.a.createElement(N,null,n.a.createElement(A,null,n.a.createElement(F,{id:"backend-skills"},n.a.createElement("h2",null,"Backend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.g,{className:"skill-icon",color:"#007396"}),n.a.createElement("span",{style:{color:"#fff"}},"Java")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.d,{className:"skill-icon",color:"#6DB33F"}),n.a.createElement("span",{style:{color:"#fff"}},"Spring")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.b,{className:"skill-icon",color:"#4479A1"}),n.a.createElement("span",{style:{color:"#fff"}},"MySQL")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.b,{className:"skill-icon",color:"#f29111"}),n.a.createElement("span",{style:{color:"#fff"}},"JPA")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.c,{className:"skill-icon",color:"#3776AB"}),n.a.createElement("span",{style:{color:"#fff"}},"Python")))),n.a.createElement(F,{id:"frontend-skills"},n.a.createElement("h2",null,"Frontend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.f,{className:"skill-icon",color:"#E34F26"}),n.a.createElement("span",{style:{color:"#fff"}},"HTML")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.a,{className:"skill-icon",color:"#1572B6"}),n.a.createElement("span",{style:{color:"#fff"}},"CSS")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.h,{className:"skill-icon",color:"#F7DF1E"}),n.a.createElement("span",{style:{color:"#fff"}},"JavaScript")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.e,{className:"skill-icon",color:"#4FC08D"}),n.a.createElement("span",{style:{color:"#fff"}},"Vue.js")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.j,{className:"skill-icon",color:"#61DAFB"}),n.a.createElement("span",{style:{color:"#fff"}},"React")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.a,{className:"skill-icon",color:"#02569B"}),n.a.createElement("span",{style:{color:"#fff"}},"Flutter")))),n.a.createElement(F,{id:"devops-skills"},n.a.createElement("h2",null,"DevOps"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.c,{className:"skill-icon",color:"#2496ED"}),n.a.createElement("span",{style:{color:"#fff"}},"Docker")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.d,{className:"skill-icon",color:"#F05032"}),n.a.createElement("span",{style:{color:"#fff"}},"Git")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.e,{className:"skill-icon",color:"#181717"}),n.a.createElement("span",{style:{color:"#fff"}},"GitHub"))))));const I=d.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,L=d.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #222;
  padding: 20px;
  margin-left: 15vw; /* 사이드바의 너비 */
  width: calc(100vw - 15vw); /* 사이드바를 제외한 나머지 공간 */
  
  @media (max-width: 1024px) {
    margin-left: 20vw;
    width: calc(100vw - 20vw); /* 화면 크기에 맞춰 너비 조정 */
  }

  @media (max-width: 768px) {
    margin-left: 25vw;
    width: calc(100vw - 25vw);
  }

  @media (max-width: 480px) {
    margin-left: 30vw;
    width: calc(100vw - 30vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }

`,B=d.a.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 30px;
  animation: ${I} 1s ease;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`,D=d.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 두 개씩 정렬 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 두 개씩 정렬 */
  }
`,R=d.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: auto; /* 높이를 auto로 설정하여 Description과 겹치지 않도록 */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`,T=Object(d.a)(p.b)`
  width: 100%;
  height: 150px;
  background-color: #333;
  border: 2px solid #444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #555;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`,M=d.a.div`
  margin-top: 8px; /* 이미지 박스와의 간격 */
  font-size: 1em;
  color: #ddd;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;var V=()=>n.a.createElement(L,null,n.a.createElement(B,null,"Portfolio"),n.a.createElement(D,null,n.a.createElement(R,null,n.a.createElement(T,{to:"/projects/project1"},n.a.createElement("img",{src:"/images/logo1.png",alt:"Project 1"})),n.a.createElement(M,null,"\uc804\uc9c1\uc2dc",n.a.createElement("br",null),"(\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810)")),n.a.createElement(R,null,n.a.createElement(T,{to:"/projects/project2"},n.a.createElement("img",{src:"/images/logo2.png",alt:"Project 2"})),n.a.createElement(M,null,"Flux")),n.a.createElement(R,null,n.a.createElement(T,{to:"/projects/project3"},n.a.createElement("img",{src:"/images/logo3.png",alt:"Project 3"})),n.a.createElement(M,null,"Briefify")),n.a.createElement(R,null,n.a.createElement(T,{to:"/projects/project4"},n.a.createElement("img",{src:"/path/to/image4.jpg",alt:"Project 4"})),n.a.createElement(M,null,"Project 4"))));const G=d.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 20vw;
  }

  @media (max-width: 480px) {
    margin-left: 25vw;
  }
`,C=d.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.8em, 1.5vw, 0.85em);
  height: auto;
  overflow: auto;
  padding-left: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  /* 큰 화면에서 글씨 약간 커지게 */
  @media (min-width: 1340px) {
    font-size: clamp(1em, 2vw, 1.2em);
  }
`,W=d.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`,H=d.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,O=d.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,Y=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`,$=d.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,U=d.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,_=d.a.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`,Q=d.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,X=d.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;var K=()=>n.a.createElement(G,null,n.a.createElement(C,null,n.a.createElement(W,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(H,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(O,null,n.a.createElement(Y,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement($,null,n.a.createElement(U,null,n.a.createElement(_,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(_,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(Q,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(_,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(_,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc \ubc31\uc5d4\ub4dc\uc640 \uc571 \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(X,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const q=d.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 20vw;
  }

  @media (max-width: 480px) {
    margin-left: 25vw;
  }
`,Z=d.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.8em, 1.5vw, 0.85em);
  height: auto;
  overflow: auto;
  padding-left: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  /* 큰 화면에서 글씨 약간 커지게 */
  @media (min-width: 1340px) {
    font-size: clamp(1em, 2vw, 1.2em);
  }
`,ee=d.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`,te=d.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,le=d.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,ae=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`,ne=d.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,ie=d.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,re=d.a.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`,me=d.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ce=d.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;var oe=()=>n.a.createElement(q,null,n.a.createElement(Z,null,n.a.createElement(ee,null,n.a.createElement("img",{src:"/images/logo2.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"FLUX - \uc544\ud2f0\uc2a4\ud2b8\ub4e4\uc758 \uc791\ud488\uc744 \uac70\ub798\ud560 \uc218 \uc788\ub294 \uc628\ub77c\uc778 \uacbd\ub9e4 \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(te,null,"- Team Project (2024.07.15 ~ 08.07(\uae30\uac04\uc5f0\uc7a5 08.16)): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),n.a.createElement(le,null,n.a.createElement(ae,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(ne,null,n.a.createElement(ie,null,n.a.createElement(re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(re,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(me,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(re,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(ce,null,n.a.createElement("a",{href:"https://github.com/Flux2024",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," FLUX - GitHub Repository"))));const de=d.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 20vw;
  }

  @media (max-width: 480px) {
    margin-left: 25vw;
  }
`,se=d.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.8em, 1.5vw, 0.85em);
  height: auto;
  overflow: auto;
  padding-left: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  /* 큰 화면에서 글씨 약간 커지게 */
  @media (min-width: 1340px) {
    font-size: clamp(1em, 2vw, 1.2em);
  }
`,pe=d.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`,ue=d.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,xe=d.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,fe=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`,ge=d.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,he=d.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Ee=d.a.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`,we=d.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,be=d.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;var ve=()=>n.a.createElement(de,null,n.a.createElement(se,null,n.a.createElement(pe,null,n.a.createElement("img",{src:"/images/logo3.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"Briefify - AI \uae30\ubc18 \uc774\ubbf8\uc9c0 \ubb38\uc11c\ub098 \ud14d\uc2a4\ud2b8 \ubb38\uc11c\uc758 \ubc88\uc5ed \ubc0f \uc694\uc57d \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(ue,null,"- Team Project (2024.10.25 ~ 11.04): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),n.a.createElement(xe,null,n.a.createElement(fe,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(ge,null,n.a.createElement(he,null,n.a.createElement(Ee,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(Ee,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(we,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(Ee,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(Ee,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(be,null,n.a.createElement("a",{href:"https://github.com/AI-X-min-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," Briefify - GitHub Repository"))));const ye=d.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 20vw;
  }

  @media (max-width: 480px) {
    margin-left: 25vw;
  }
`,ke=d.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.8em, 1.5vw, 0.85em);
  height: auto;
  overflow: auto;
  padding-left: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  /* 큰 화면에서 글씨 약간 커지게 */
  @media (min-width: 1340px) {
    font-size: clamp(1em, 2vw, 1.2em);
  }
`,je=d.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px);
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em);
    font-weight: bold;
    color: #ffd700;
  }
`,ze=d.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,Pe=d.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,Se=d.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
    }
  }
`,Ne=d.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ae=d.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Fe=d.a.div`
  flex: 1;

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p, ul {
    line-height: 1.6;
    font-size: 0.9em;
    color: #ccc;
  }

  ul {
    padding-left: 18px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.9em;
    }

    p, ul {
      font-size: 0.8em;
    }
  }
`,Je=d.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ie=d.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;

  a {
    color: #ffd700;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;var Le=()=>n.a.createElement(ye,null,n.a.createElement(ke,null,n.a.createElement(je,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(ze,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(Pe,null,n.a.createElement(Se,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(Ne,null,n.a.createElement(Ae,null,n.a.createElement(Fe,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(Fe,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(Je,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(Fe,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(Fe,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(Ie,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));var Be=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(x,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(h,null)}),n.a.createElement(m.a,{path:"/about",element:n.a.createElement(j,null)}),n.a.createElement(m.a,{path:"/skills",element:n.a.createElement(J,null)}),n.a.createElement(m.a,{path:"/projects",element:n.a.createElement(V,null)}),n.a.createElement(m.a,{path:"/projects/project1",element:n.a.createElement(K,null)}),n.a.createElement(m.a,{path:"/projects/project2",element:n.a.createElement(oe,null)}),n.a.createElement(m.a,{path:"/projects/project3",element:n.a.createElement(ve,null)}),n.a.createElement(m.a,{path:"/projects/project4",element:n.a.createElement(Le,null)}))))};var De=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,33)).then(t=>{let{getCLS:l,getFID:a,getFCP:n,getLCP:i,getTTFB:r}=t;l(e),a(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(Be,null)))),De()}},[[21,1,2]]]);
//# sourceMappingURL=main.0d6f2ec7.chunk.js.map