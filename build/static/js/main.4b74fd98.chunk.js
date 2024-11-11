(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),i=a(16),r=a.n(i),m=(a(28),a(29),a(3)),c=a(11),o=a(13),s=a(4),d=a(19),p=a(8);const g=s.a.div`
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
`;function x(){const[e,t]=Object(l.useState)(!1);return n.a.createElement(g,{showExtraMenu:e},n.a.createElement("div",{className:"menu"},n.a.createElement(p.b,{to:"/",onClick:()=>t(!1)},"Intro"),n.a.createElement(p.b,{to:"/about",onClick:()=>t(!1)},"About"),n.a.createElement(p.b,{to:"/skills",onClick:()=>t(!1)},"Skills"),n.a.createElement(p.b,{to:"/projects",onClick:()=>{t(!e)}},"Projects"),e&&n.a.createElement("div",{className:"extra-menu"},n.a.createElement(p.b,{to:"/projects/project4"},"Project 4"),n.a.createElement(p.b,{to:"/projects/project3"},"Briefify"),n.a.createElement(p.b,{to:"/projects/project1"},"\uc804\uc9c1\uc2dc"),n.a.createElement(p.b,{to:"/projects/project2"},"Flux"))),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.a})," GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.b})," LinkedIn"),n.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},n.a.createElement(c.a,{icon:d.a})," Email")))}const h=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,f=s.a.div`
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
    animation: ${h} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    animation: ${h} 1s ease forwards;
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
    animation: ${h} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
  }

  /* 반응형 조정 */
  @media (max-width: 1024px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);

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
    margin-left: 20vw;
    width: calc(100vw - 15vw);

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
    margin-left: 20vw;
    width: calc(100vw - 15vw);


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
`;function u(){return n.a.createElement(f,null,n.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),n.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uba70 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud558\uba70 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740",n.a.createElement("br",null),"\ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",n.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0",n.a.createElement("br",null),"\uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}const E=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,w=s.a.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #222;
  padding: 5px 20px;
  box-sizing: border-box;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  
  @media (max-width: 1024px) {
    width: calc(100vw - 15vw);
  }

  @media (max-width: 768px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,v=s.a.div`
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
`,b=Object(s.a)(v)`
  width: 53%;
  border-right: 1px solid #444;
  padding-left: 30px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`,y=Object(s.a)(v)`
  width: 47%;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 10px;
  }
`,k=s.a.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 2px;
    color: #ffd700;
    font-size: 1.5vw;
  }

  p {
    line-height: 1.9;
    font-size: 1vw;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1vw;
  }

  li span {
    font-size: 0.9vw;
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
  }
`,j=s.a.img`
  width: 8vw;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 15vw;
  }

  @media (max-width: 480px) {
    width: 15vw;
  }
`;var z=()=>n.a.createElement(w,null,n.a.createElement(b,null,n.a.createElement(k,{id:"resume"},n.a.createElement("h2",null,"Experience"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"AI \ud504\ub85c\uc81d\ud2b8 \uc2e4\ud589 \ub2a5\ub825"),": AI \uc2ec\ud654 \uacfc\uc815\uc5d0\uc11c \ud300\uacfc \ud611\ub825\ud558\uc5ec AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4\ud558\uace0 \uac1c\ubc1c."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud300 \ud611\uc5c5 \ubc0f \ubb38\uc81c \ud574\uacb0"),": \ub2e4\uc591\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0 \ubaa9\ud45c\uc5d0 \ub9de\ucd98 \ucd5c\uc801\uc758 \uacb0\uacfc\ub97c \ub3c4\ucd9c\ud558\uba70 \ud611\uc5c5.")),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud480\uc2a4\ud0dd \uac1c\ubc1c \ub2a5\ub825"),': "K-Digital" \ud504\ub85c\uadf8\ub7a8\uc744 \ud1b5\ud574 \ud480\uc2a4\ud14d \uae30\uc220\uc744 \uc2b5\ub4dd \ubc0f \uac1c\ubc1c \uc5ed\ub7c9\uc744 \uac15\ud654.'),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud611\uc5c5 \ubc0f \ubc84\uc804 \uad00\ub9ac"),": GitHub\ub97c \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \ud611\uc5c5\ud558\uba70 \ubc84\uc804 \uad00\ub9ac, \ucf54\ub4dc \ub9ac\ubdf0 \uacbd\ud5d8\uc744 \uc313\uc544 \ud6a8\uc728\uc801\uc778 \ud300\uc6cc\ud06c\ub97c \uc2e4\ud604.")),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 (MonteKids) \uc601\uc5b4 \uac15\uc0ac")," (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uac1c\uc778 \ub9de\ucda4\ud615 \uad50\uc721 \ubc0f \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5 \uc720\ub3c4"),": \ubaac\ud14c\uc18c\ub9ac \uad50\uc721 \ucca0\ud559\uc744 \uc801\uc6a9\ud558\uc5ec \ud559\uc0dd\uc758 \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5\uc744 \uc720\ub3c4\ud558\uace0 \uac1c\ubcc4 \ub9de\ucda4\ud615 \uad50\uc721 \uc9c4\ud589."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uc131\uacfc \uad00\ub9ac \ubc0f \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ub2a5\ub825"),": \uc8fc 2\ud68c \ud559\ubd80\ubaa8 \uc0c1\ub2f4\uc744 \ud1b5\ud574 \ud559\uc0dd \uc131\uacfc\uc640 \ubc1c\uc804 \uc0c1\ud669\uc744 \uacf5\uc720\ud558\uba70 \ud559\uc2b5 \ubc29\ud5a5\uc744 \uc81c\uc2dc \ubc0f \uc2e0\ub8b0 \uad00\uacc4 \uad6c\ucd95.")),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"Pots&pans (\ud30c\uce20\uc564\ud32c\uc2a4) \uc601\uc5b4 \uac15\uc0ac")," (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uc131\uacfc \ud53c\ub4dc\ubc31 \ubc0f \ubab0\uc785 \uad50\uc721 \uc5ed\ub7c9"),": \uc601\uc5b4 \ubab0\uc785 \uad50\uc721\uc744 \ud1b5\ud574 \ud559\uc0dd\ub4e4\uc758 \uc778\uc9c0\uc801, \uc0ac\ud68c\uc801 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\uace0 \ud559\uc2b5 \uc131\uacfc\ub97c \uac15\ud654."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud6a8\uc728\uc801 \uc131\uacfc \uad00\ub9ac"),": \uc8fc 2\ud68c \ud559\ubd80\ubaa8 \uc0c1\ub2f4\uc73c\ub85c \ud559\uc2b5 \ubaa9\ud45c\uc640 \uc131\uacfc\ub97c \uad6c\uccb4\ud654\ud558\uc5ec \ud559\uc0dd\uc758 \uc131\uc7a5\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uad00\ub9ac.")),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uac15\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ucc38\uc5ec \uc911\uc2ec\uc758 \uc218\uc5c5 \uc124\uacc4 \ubc0f \ucee4\ub9ac\ud058\ub7fc \uac1c\ubc1c"),": \ud559\uc0dd \ucc38\uc5ec\ub97c \uadf9\ub300\ud654\ud558\ub294 30:70 \uc218\uc5c5 \ubc29\uc2dd\uc73c\ub85c \uad50\uc548\uc744 \uac1c\ubc1c\ud574 \uad50\uc721\uc758 \ud6a8\uacfc\uc131\uc744 \ub192\uc774\uace0, \ud559\uc2b5 \ub3d9\uae30\ub97c \uac15\ud654\ud568."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uc131\uacfc \uacf5\uc720 \ubc0f \ud559\ubd80\ubaa8 \uc18c\ud1b5 \uc5ed\ub7c9"),": \ud559\ubd80\ubaa8\uc640\uc758 \uc18c\ud1b5\uc73c\ub85c \ud559\uc0dd \uc131\ucde8\ub3c4\uc640 \ubc1c\uc804 \uc0c1\ud669\uc744 \uacf5\uc720\ud558\uba70 \ud559\uc2b5 \uc131\uacfc\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ub3c5\ub824.")),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc720\uce58\uc6d0 \ubd80\uc6d0\uc7a5")," (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uc870\uc9c1 \uad00\ub9ac \ubc0f \ub9ac\ub354\uc2ed \uc5ed\ub7c9"),": \uad50\uc0ac \ucc44\uc6a9, \uc5f0\uac04 \ucee4\ub9ac\ud058\ub7fc \ubc0f \ud589\uc0ac \uae30\ud68d\uc744 \ucd1d\uad04\ud558\uba70 \ud300\uc744 \uc774\ub04c\uace0 \uc6d0\uc744 \uc6b4\uc601\ud558\ub294 \uad00\ub9ac \uc5ed\ub7c9 \ubc1c\ud718."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud6a8\uc728\uc801 \uc6b4\uc601 \ubc0f \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \uc5ed\ub7c9"),": \ud559\ubd80\ubaa8\uc640 \uc6d0\uac04\uc758 \uc18c\ud1b5 \ucc3d\uad6c \uc5ed\ud560\uc744 \ud558\uba70 \uad50\uc721 \ud488\uc9c8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0 \ud6a8\uc728\uc801\uc778 \uc6b4\uc601 \ud658\uacbd \uc870\uc131."))))),n.a.createElement(y,null,n.a.createElement(k,{id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement(j,{src:"/images/img.jpg",alt:"Jinhee Mok"}),n.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, \uc5f4\uc815\uacfc \ub048\uae30\ub85c \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \uac1c\ubc1c\uc790 \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ubc95\ud559\uc744 \uc804\uacf5\ud558\uba70 \uc313\uc740 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc740 \uc800\uc758 \ud070 \uc790\uc0b0\uc785\ub2c8\ub2e4. \uc774 \ub2a5\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\uace0 \uac00\ub974\uce58\ub294 \uc77c\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub290\uaef4 \uc601\uc5b4 \uad50\uc721 \ud604\uc7a5\uc5d0\uc11c \ud559\uc0dd\ub4e4\uc758 \uc131\uc7a5\uc744 \ub3c4\uc654\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\ud5d8\uc740 \uc800\uc5d0\uac8c \uc18c\ud1b5\uc758 \uc911\uc694\uc131\uacfc \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud55c \uc2e4\ud589\ub825\uc744 \uae38\ub7ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0ac\ud68c \uc18d\uc5d0\uc11c \uc800 \uc5ed\uc2dc \uae30\uc220 \ubd84\uc57c\ub85c \uc0c8\ub85c\uc6b4 \ub3c4\uc804\uc5d0 \ub098\uc11c\uace0\uc790 \ud588\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \uae4a\uc740 \ud765\ubbf8\ub97c \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubc95\ud559\uc744 \ud1b5\ud574 \uccb4\ub4dd\ud55c \ubd84\uc11d\ub825\uacfc \uad50\uc721 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc774 \ub420 \uac83\uc774\ub77c \ud655\uc2e0\ud569\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ub2e8\uc21c\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uba70 \uc2dc\uc2a4\ud15c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uace0 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370 \uae30\uc5ec\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud568\uaed8 \uc77c\ud558\uba70 \uae0d\uc815\uc801\uc778 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac08 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")))),N=a(7),P=a(10);const A=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,F=s.a.div`
  display: flex;
  justify-content: center;
  align-items: center; // center 정렬을 위해 변경
  min-height: 100vh;
  background-color: #222;
  margin-left: 15vw;
  width: calc(100vw - 15vw); /* 화면 전체에서 사이드바 너비를 제외한 나머지 사용 */
  overflow: hidden;
  padding: 10px 20px;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    width: calc(100vw - 15vw);
  }

  @media (max-width: 768px) {
     margin-left: 20vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 480px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,S=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center; // center 정렬을 위해 변경
  justify-content: center; // center 정렬을 위해 추가
  width: 100%;
  max-width: 800px;
  padding: 40px;
  overflow-y: auto;
  animation: ${A} 1s ease;
  color: #fff;
  max-height: 100vh;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
  }
`,I=s.a.div`
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
`;var R=()=>n.a.createElement(F,null,n.a.createElement(S,null,n.a.createElement(I,{id:"backend-skills"},n.a.createElement("h2",null,"Backend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.g,{className:"skill-icon",color:"#007396"}),n.a.createElement("span",{style:{color:"#fff"}},"Java")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.d,{className:"skill-icon",color:"#6DB33F"}),n.a.createElement("span",{style:{color:"#fff"}},"Spring")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.b,{className:"skill-icon",color:"#4479A1"}),n.a.createElement("span",{style:{color:"#fff"}},"MySQL")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.b,{className:"skill-icon",color:"#f29111"}),n.a.createElement("span",{style:{color:"#fff"}},"JPA")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.c,{className:"skill-icon",color:"#3776AB"}),n.a.createElement("span",{style:{color:"#fff"}},"Python")))),n.a.createElement(I,{id:"frontend-skills"},n.a.createElement("h2",null,"Frontend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.f,{className:"skill-icon",color:"#E34F26"}),n.a.createElement("span",{style:{color:"#fff"}},"HTML")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.a,{className:"skill-icon",color:"#1572B6"}),n.a.createElement("span",{style:{color:"#fff"}},"CSS")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.h,{className:"skill-icon",color:"#F7DF1E"}),n.a.createElement("span",{style:{color:"#fff"}},"JavaScript")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.e,{className:"skill-icon",color:"#4FC08D"}),n.a.createElement("span",{style:{color:"#fff"}},"Vue.js")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.j,{className:"skill-icon",color:"#61DAFB"}),n.a.createElement("span",{style:{color:"#fff"}},"React")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.a,{className:"skill-icon",color:"#02569B"}),n.a.createElement("span",{style:{color:"#fff"}},"Flutter")))),n.a.createElement(I,{id:"devops-skills"},n.a.createElement("h2",null,"DevOps"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.c,{className:"skill-icon",color:"#2496ED"}),n.a.createElement("span",{style:{color:"#fff"}},"Docker")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.d,{className:"skill-icon",color:"#F05032"}),n.a.createElement("span",{style:{color:"#fff"}},"Git")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.e,{className:"skill-icon",color:"#181717"}),n.a.createElement("span",{style:{color:"#fff"}},"GitHub"))))));const L=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,B=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #222;
  padding: 10px 20px;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  
  @media (max-width: 1024px) {
    margin-left: 15vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 768px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);
  }

  @media (max-width: 480px) {
    margin-left: 20vw;
    width: calc(100vw - 15vw);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,J=s.a.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 30px;
  animation: ${L} 1s ease;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`,M=s.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); /* 열 너비 조정 */
  width: 80%;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,D=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px; /* 박스의 너비를 줄여 전체 레이아웃을 조밀하게 */
  height: auto;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 110px;
  }

  @media (max-width: 480px) {
    width: 90px;
  }
`,T=Object(s.a)(p.b)`
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
`,G=s.a.div`
  margin-top: 8px;
  font-size: 1em;
  color: #ddd;
  text-align: center;
  height: 2.5em; /* 일정한 높이 고정 */

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;var C=()=>n.a.createElement(B,null,n.a.createElement(J,null,"Portfolio"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(M,null,n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project4"},n.a.createElement("img",{src:"/path/to/image4.jpg",alt:"Project 4"})),n.a.createElement(G,null,"Project 4")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project3"},n.a.createElement("img",{src:"/images/logo3.png",alt:"Project 3"})),n.a.createElement(G,null,"Briefify")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project1"},n.a.createElement("img",{src:"/images/logo1.png",alt:"Project 1"})),n.a.createElement(G,null,"\uc804\uc9c1\uc2dc",n.a.createElement("br",null),"(\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810)")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project2"},n.a.createElement("img",{src:"/images/logo2.png",alt:"Project 2"})),n.a.createElement(G,null,"Flux"))));const O=s.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start; /* 상단에서 시작하도록 설정 */
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`,H=s.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em); /* 최소값을 더 작게 설정 */
  max-height: 100vh; /* 높이 제한 */
  overflow: auto; /* 스크롤 가능하게 설정 */
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,Y=s.a.div`
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
`,V=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,$=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,_=s.a.div`
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
`,W=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Q=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,U=s.a.div`
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
`,X=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,K=s.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

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
`;var q=()=>n.a.createElement(O,null,n.a.createElement(H,null,n.a.createElement(Y,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(V,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement($,null,n.a.createElement(_,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(W,null,n.a.createElement(Q,null,n.a.createElement(U,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(U,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(X,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(U,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(U,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc758 \ud504\ub860\ud2b8/\ubc31\uc5d4\ub4dc\uc640 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc571\uc740 Flutter\ub97c \uc774\uc6a9\ud574 \ub9cc\ub4e4\uace0 \ubc31\uc564\ub4dc\uc640 \uc5f0\uacb0\ud558\uc5ec \uc6f9\uacfc \uc5f0\ub3d9\ub418\uac8c \ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(K,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(N.i,{style:{marginRight:"5px"}}),n.a.createElement(N.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const Z=s.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start; 
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`,ee=s.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em);
  max-height: 100vh;
  overflow: auto;
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,te=s.a.div`
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
`,ae=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,le=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,ne=s.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    max-height: 140px; /* 높이 제한 추가 */
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 80px; /* 작은 화면에서 높이 제한 추가 */
    }
  }
`,ie=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,re=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,me=s.a.div`
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
`,ce=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,oe=s.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

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
`;var se=()=>n.a.createElement(Z,null,n.a.createElement(ee,null,n.a.createElement(te,null,n.a.createElement("img",{src:"/images/logo2.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"FLUX - \uc544\ud2f0\uc2a4\ud2b8\ub4e4\uc758 \uc791\ud488\uc744 \uac70\ub798\ud560 \uc218 \uc788\ub294 \uc628\ub77c\uc778 \uacbd\ub9e4 \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(ae,null,"- Team Project (2024.07.15 ~ 08.07(\uae30\uac04\uc5f0\uc7a5 08.16)): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),n.a.createElement(le,null,n.a.createElement(ne,null,n.a.createElement("img",{src:"/images/proj2-1.png",alt:"\uba54\uc778"}),n.a.createElement("img",{src:"/images/proj2-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj2-3.png",alt:"\uacf5\uc9c0\uc0ac\ud56d"})),n.a.createElement(ie,null,n.a.createElement(re,null,n.a.createElement(me,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud55c \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"))),n.a.createElement(me,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(ce,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(me,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub294 \uc608\uc220\uac00\ub4e4\uc758 \uc791\ud488, \uc0c1\ud488\ub4f1\uc758 \uc628\ub77c\uc778 \uacbd\ub9e4 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uc600\uc2b5\ub2c8\ub2e4. \ubc31\uc5d4\ub4dc\ub294 \uc548\uc815\uc131\uacfc \ud655\uc7a5\uc131\uc744 \uac16\ucd98 Spring \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud558\uc5ec \uad6c\ud604\ub418\uc5c8\uc73c\uba70, \ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 Vue.js \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ucd95\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub9e4\ub044\ub7ec\uc6b4 \uacbd\ub9e4 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.")),n.a.createElement(me,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null)))),n.a.createElement(oe,null,n.a.createElement("a",{href:"https://github.com/Flux2024",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(N.i,{style:{marginRight:"5px"}}),n.a.createElement(N.e,{style:{marginRight:"5px"}})," FLUX - GitHub Repository"))));const de=s.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`,pe=s.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em);
  max-height: 100vh;
  overflow: auto;
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,ge=s.a.div`
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
`,xe=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,he=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,fe=s.a.div`
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
`,ue=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ee=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,we=s.a.div`
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
`,ve=s.a.div`
  margin-top: 20px;

  img {
    width: 45%;
    max-width: 250px;
    border: 3px solid #333;
    border-radius: 5px;
    float: right; /* 이미지가 오른쪽에 위치하도록 설정 */
    margin-left: 20px; /* 텍스트와 이미지 사이의 간격 조정 */
    margin-bottom: 10px; /* 이미지 아래 여백을 최소화 */
  }

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p {
    font-size: 0.9em;
  }
`,be=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ye=s.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

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
`;var ke=()=>n.a.createElement(de,null,n.a.createElement(pe,null,n.a.createElement(ge,null,n.a.createElement("img",{src:"/images/logo3.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"Briefify - \uc774\ubbf8\uc9c0 \ubb38\uc11c\ub098 \ud14d\uc2a4\ud2b8 \ubb38\uc11c\uc758 \ubc88\uc5ed \ubc0f \uc694\uc57d\uc744 \uc9c0\uc6d0\ud558\ub294 AI \uae30\ubc18\uc758 \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(xe,null,"- Team Project (2024.10.25 ~ 11.04): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),n.a.createElement(he,null,n.a.createElement(fe,null,n.a.createElement("img",{src:"/images/proj3-1.png",alt:"\ud648"}),n.a.createElement("img",{src:"/images/proj3-2.png",alt:"\uc694\uc57d\ud558\uae30"}),n.a.createElement("img",{src:"/images/proj3-3.png",alt:"\ub9c8\uc774\ud398\uc774\uc9c0"})),n.a.createElement(ue,null,n.a.createElement(Ee,null,n.a.createElement(we,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"React\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Python\uc744 \uc774\uc6a9\ud55c \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"FastAPI\ub97c \uc774\uc6a9\ud574 \ud504\ub860\ud2b8\uc640 \ubc31 \uc5f0\uacb0"),n.a.createElement("li",null,"\ub2e4\uc591\ud55c AI\ubaa8\ub378\uc758 \uc801\uc6a9"))),n.a.createElement(we,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(be,null,n.a.createElement("li",null,"FastAPI"),n.a.createElement("li",null,"Pytorch"),n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"Nginx"),n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Docker")))),n.a.createElement(we,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"Briefify\ub294 \ud544\uc694\ud55c \uc815\ubcf4\ub9cc \ube60\ub974\uac8c \uc694\uc57d\ud558\uc5ec \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \uc5c5\ubb34 \ud6a8\uc728\uc744 \uadf9\ub300\ud654\ud558\ub294 AI \uae30\ubc18 \uc694\uc57d \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790, \uc5f0\uad6c\uc6d0, \ube44\uc988\ub2c8\uc2a4 \uc804\ubb38\uac00 \ub4f1 \ubc29\ub300\ud55c \uc815\ubcf4\ub97c \ub2e4\ub8e8\ub294 \uc9c1\uad70\uc744 \uc704\ud574 \uc124\uacc4\ub41c Briefify\ub294 \uc774\ubbf8\uc9c0\ub098 \ud14d\uc2a4\ud2b8 \uc790\ub8cc\ub97c \ubd84\uc11d\ud558\uc5ec \ud575\uc2ec\ub9cc \ubf51\uc544\ub0c5\ub2c8\ub2e4.")),n.a.createElement(ve,null,n.a.createElement("img",{src:"/images/proj3-4.png",alt:"AI \ubaa8\ub378"}),n.a.createElement("div",null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud504\ub860\ud2b8 \ub9c8\uc774\ud398\uc774\uc9c0\uc640 AI \ubaa8\ub378 \uac80\uc0c9 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc694\uc57d\ubcf8\uc744 \uc800\uc7a5\ud560 \ub54c\ub294 \uc81c\ubaa9\uacfc \ud568\uaed8 \uc800\uc7a5\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \ud6c4\uc5d0 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\uace0, \uc5ec\ub7ec AI \ubaa8\ub378\uc744 \ud14c\uc2a4\ud2b8\ud558\uba70 \ucd5c\uc801\uc758 \ubaa8\ub378\uc744 \uc120\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \ud14d\uc2a4\ud2b8 \ucd94\ucd9c\uc5d0\ub294 OCR \uae30\ubc18\uc73c\ub85c \uc6f9 \ud504\ub808\uc784\uc6cc\ud06c\uc640\uc758 \uc5f0\ub3d9\uc774 \uac04\ud3b8\ud55c pytesseract\ub97c \ud65c\uc6a9\ud558\uc600\uc73c\uba70, \ud14d\uc2a4\ud2b8 \ubc88\uc5ed\uc5d0\ub294 \ube60\ub978 \uc18d\ub3c4\uc640 \uc5b8\uc5b4 \uac04 \ubb38\ub9e5 \uc774\ud574\ub825\uc774 \ub6f0\uc5b4\ub09c facebook/nllb-200-distilled-600M\uc744 \uc801\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \ud14d\uc2a4\ud2b8 \uc694\uc57d\uc5d0\ub294 \ud55c\uad6d\uc5b4\uc5d0 \ud2b9\ud654\ub418\uace0 Transformer \uc544\ud0a4\ud14d\ucc98\ub85c \uc804\ud6c4 \uad00\uacc4\ub97c \ud30c\uc545\ud558\ub294 eenzeenee/t5-base-korean-summarization\uc744, \uc74c\uc131 \uc9c0\uc6d0\uc5d0\ub294 \ube60\ub974\uac8c \uc74c\uc131 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 gtts\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub2e4\uc591\ud55c AI \ubaa8\ub378\uc744 \ud0d0\uc0c9\ud558\uace0 \uc9c1\uc811 \uc5f0\ub3d9\ud574 \ubcfc \uc218 \uc788\uc5c8\ub358 \uc88b\uc740 \uacbd\ud5d8\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \ud504\ub85c\uc81d\ud2b8 \uc885\ub8cc \ud6c4\uc5d0\ub294 LLM \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud588\ub354\ub77c\uba74 \ub354 \uac00\ubccd\uace0 \ube60\ub974\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc5c8\uc744 \uac83\uc774\ub77c\ub294 \uc544\uc26c\uc6c0\uc774 \ub0a8\uc2b5\ub2c8\ub2e4."))))),n.a.createElement(ye,null,n.a.createElement("a",{href:"https://github.com/AI-X-min-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(N.i,{style:{marginRight:"5px"}}),n.a.createElement(N.e,{style:{marginRight:"5px"}})," Briefify - GitHub Repository"))));const je=s.a.div`
  margin-left: 15vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start; /* 상단에서 시작하도록 설정 */
  background-color: #222;
  max-width: 100vw;
  width: calc(100vw - 15vw);

  @media (max-width: 768px) {
    margin-left: 15vw;
  }

  @media (max-width: 480px) {
    margin-left: 15vw;
  }
`,ze=s.a.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.6em, 1vw, 1em); /* 최소값을 더 작게 설정 */
  max-height: 100vh; /* 높이 제한 */
  overflow: auto; /* 스크롤 가능하게 설정 */
  padding-left: 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,Ne=s.a.div`
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
`,Pe=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,Ae=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,Fe=s.a.div`
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
`,Se=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ie=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Re=s.a.div`
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
`,Le=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Be=s.a.footer`
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #888;
  border-top: 1px solid #333;
  margin-top: auto;

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
`;var Je=()=>n.a.createElement(je,null,n.a.createElement(ze,null,n.a.createElement(Ne,null,n.a.createElement("img",{src:"/images/logo4.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null," - \ub300\ud654\ub97c \ud1b5\ud574 \ud544\uc694\ud55c \uc6b4\ub3d9\uc744 \ucd94\ucc9c\ud574\uc8fc\uace0, \uc790\uc138\ub97c \uc7a1\uc544\uc8fc\ub294 AI \uae30\ubc18\uc758 \ud648\ud2b8\ub808\uc774\ub2dd \uc571"),n.a.createElement(Pe,null,"- Team Project (2024.11.05 ~ 12.20): "))),n.a.createElement(Ae,null,n.a.createElement(Fe,null,n.a.createElement("img",{src:"/images/proj4-1.png",alt:""}),n.a.createElement("img",{src:"/images/proj4-2.png",alt:""}),n.a.createElement("img",{src:"/images/proj4-3.png",alt:""})),n.a.createElement(Se,null,n.a.createElement(Ie,null,n.a.createElement(Re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"React Native\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"FastAPI\ub97c \ud65c\uc6a9\ud55c \ud504\ub860\ud2b8/\ubc31 \uc5d4\ub4dc \uc5f0\uacb0"),n.a.createElement("li",null,"LLM\uacfc RAG\ub97c \uc774\uc6a9\ud55c \ucd94\ucc9c\uae30\ub2a5 \ubc0f \ubaa8\uc158\uac10\uc9c0"))),n.a.createElement(Re,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(Le,null,n.a.createElement("li",null,"React Native"),n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"FastAPI")))),n.a.createElement(Re,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null)),n.a.createElement(Re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null)))),n.a.createElement(Be,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(N.i,{style:{marginRight:"5px"}}),n.a.createElement(N.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));var Me=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(x,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(u,null)}),n.a.createElement(m.a,{path:"/about",element:n.a.createElement(z,null)}),n.a.createElement(m.a,{path:"/skills",element:n.a.createElement(R,null)}),n.a.createElement(m.a,{path:"/projects",element:n.a.createElement(C,null)}),n.a.createElement(m.a,{path:"/projects/project1",element:n.a.createElement(q,null)}),n.a.createElement(m.a,{path:"/projects/project2",element:n.a.createElement(se,null)}),n.a.createElement(m.a,{path:"/projects/project3",element:n.a.createElement(ke,null)}),n.a.createElement(m.a,{path:"/projects/project4",element:n.a.createElement(Je,null)}))))};var De=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:i,getTTFB:r}=t;a(e),l(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(Me,null)))),De()}},[[21,1,2]]]);
//# sourceMappingURL=main.4b74fd98.chunk.js.map