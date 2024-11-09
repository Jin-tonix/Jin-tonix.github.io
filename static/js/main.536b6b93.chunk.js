(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{21:function(e,t,l){e.exports=l(32)},28:function(e,t,l){},29:function(e,t,l){},32:function(e,t,l){"use strict";l.r(t);var a=l(1),n=l.n(a),i=l(16),r=l.n(i),c=(l(28),l(29),l(3)),m=l(11),o=l(13),s=l(4),d=l(19),p=l(8);const u=s.a.div`
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
  max-width: 200px;
  min-width: 80px;

  .menu {
    position: relative; /* extra-menu가 이 위치를 기준으로 절대 위치하게 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 25px;

    a {
      color: #fff;
      font-size: 1.5em;
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
    top: 110%; /* 간격을 살짝 띄움 */
    left: 0;
    right: 0;
    display: ${e=>{let{showExtraMenu:t}=e;return t?"flex":"none"}}; /* showExtraMenu 상태에 따라 표시 */
    flex-direction: column;
    align-items: center;
    gap: 15px;

    a {
      color: #aaa;
      font-size: 1em;
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
      font-size: 1em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 20vw;
    max-width: 150px;
  }

  @media (max-width: 480px) {
    width: 25vw;
    max-width: 120px;
  }
`;function f(){const[e,t]=Object(a.useState)(!1);return n.a.createElement(u,{showExtraMenu:e},n.a.createElement("div",{className:"menu"},n.a.createElement(p.b,{to:"/",onClick:()=>t(!1)},"Intro"),n.a.createElement(p.b,{to:"/about",onClick:()=>t(!1)},"About"),n.a.createElement(p.b,{to:"/skills",onClick:()=>t(!1)},"Skills"),n.a.createElement(p.b,{to:"/projects",onClick:()=>{t(!e)}},"Projects"),e&&n.a.createElement("div",{className:"extra-menu"},n.a.createElement(p.b,{to:"/projects/project1"},"Project 1"),n.a.createElement(p.b,{to:"/projects/project2"},"Project 2"),n.a.createElement(p.b,{to:"/projects/project3"},"Project 3"),n.a.createElement(p.b,{to:"/projects/project4"},"Project 4"))),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:o.a})," GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:o.b})," LinkedIn"),n.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},n.a.createElement(m.a,{icon:d.a})," Email")))}const x=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,g=s.a.div`
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
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 설정 */
  width: calc(100vw - 15vw); /* 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바의 최대 너비를 고려한 최대 너비 */
  overflow: hidden;

  .intro, .name-wrapper, .description {
    max-width: 70%;
  }

  .intro {
    font-size: 1.8em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${x} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    animation: ${x} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

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
    animation: ${x} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 180px;
    width: calc(100vw - 180px);

    .intro {
      font-size: 1.5em;
    }

    .name-wrapper {
      font-size: 1.5em;
    }

    .description {
      font-size: 1em;
    }
  }
`;function E(){return n.a.createElement(g,null,n.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),n.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uba70 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud558\uba70 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740",n.a.createElement("br",null),"\ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",n.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0",n.a.createElement("br",null),"\uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}const h=s.b`
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
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-color: #222;
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 */
  width: calc(100vw - 15vw); /* 사이드바 옆 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바의 최대 너비를 고려한 최대 너비 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 20px;
`,b=s.a.div`
  padding: 40px;
  overflow-y: auto;
  animation: ${h} 1s ease;
  color: #fff;
`,v=Object(s.a)(b)`
  width: 50%;
  border-right: 1px solid #444;
  padding-left: 50px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-left: 20px;
  }
`,y=Object(s.a)(b)`
  width: 50%;
  padding-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
  }
`,k=s.a.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  p {
    line-height: 1.6;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }
`;var j=()=>n.a.createElement(w,null,n.a.createElement(v,null,n.a.createElement(k,{id:"resume"},n.a.createElement("h2",null,"Experience"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",n.a.createElement("br",null),"AI \uc2ec\ud654 \uacfc\uc815\uc744 \uc774\uc218\ud558\uace0 \ud300 \ud504\ub85c\uc81d\ud2b8\ub85c AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",n.a.createElement("br",null),"\ud480\uc2a4\ud0dd \uc5d4\uc9c0\ub2c8\uc5b4 \uad50\uc721\uc744 \uc774\uc218\ud558\uace0 3\uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 (MonteKids) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",n.a.createElement("br",null),"\uc5b4\ud559\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\uc640 \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5\uc744 \uc9c0\ub3c4\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"Pots&pans (\ud30c\uce20\uc564\ud32c\uc2a4) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",n.a.createElement("br",null),"\uc601\uc5b4 \uc720\uce58\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\ub97c \uac00\ub974\ucce4\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uad50\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",n.a.createElement("br",null),"7\uc138\uc5d0\uc11c 16\uc138 \ud559\uc0dd\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \uc601\uc5b4 \uc218\uc5c5\uc744 \uc9c4\ud589\ud558\uace0 \ud559\ubd80\ubaa8\uc640 \uc18c\ud1b5\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc720\uce58\uc6d0 \ucf54\ub514\ub124\uc774\ud130")," \xb7 \uc815\uaddc\uc9c1 (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",n.a.createElement("br",null),"\uad50\uc0ac \ucc44\uc6a9\uacfc \uc720\uce58\uc6d0 \uc6b4\uc601\uc744 \ucd1d\uad04\ud588\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(y,null,n.a.createElement(k,{id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement("br",null),n.a.createElement("img",{src:"/images/img.jpg",alt:"Jinhee Mok",style:{width:"120px",height:"170px",marginBottom:"20px",float:"right",marginTop:"10px",marginLeft:"20px"}}),n.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, \uc5f4\uc815\uacfc \ub048\uae30\ub85c \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \uac1c\ubc1c\uc790 \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ubc95\ud559\uc744 \uc804\uacf5\ud558\uba70 \uc313\uc740 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc740 \uc800\uc758 \ud070 \uc790\uc0b0\uc785\ub2c8\ub2e4. \uc774 \ub2a5\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\uace0 \uac00\ub974\uce58\ub294 \uc77c\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub290\uaef4 \uc601\uc5b4 \uad50\uc721 \ud604\uc7a5\uc5d0\uc11c \ud559\uc0dd\ub4e4\uc758 \uc131\uc7a5\uc744 \ub3c4\uc654\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\ud5d8\uc740 \uc800\uc5d0\uac8c \uc18c\ud1b5\uc758 \uc911\uc694\uc131\uacfc \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud55c \uc2e4\ud589\ub825\uc744 \uae38\ub7ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0ac\ud68c \uc18d\uc5d0\uc11c \uc800 \uc5ed\uc2dc \uae30\uc220 \ubd84\uc57c\ub85c \uc0c8\ub85c\uc6b4 \ub3c4\uc804\uc5d0 \ub098\uc11c\uace0\uc790 \ud588\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \uae4a\uc740 \ud765\ubbf8\ub97c \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubc95\ud559\uc744 \ud1b5\ud574 \uccb4\ub4dd\ud55c \ubd84\uc11d\ub825\uacfc \uad50\uc721 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc774 \ub420 \uac83\uc774\ub77c \ud655\uc2e0\ud569\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ub2e8\uc21c\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uba70 \uc2dc\uc2a4\ud15c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uace0 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370 \uae30\uc5ec\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud568\uaed8 \uc77c\ud558\uba70 \uae0d\uc815\uc801\uc778 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac08 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")))),z=l(7),P=l(10);const S=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,N=s.a.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: #222;
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 설정 */
  width: calc(100vw - 15vw); /* 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바 최대 너비가 200px일 때 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`,F=s.a.div`
  width: 100%;
  max-width: 800px; /* 적절한 최대 너비 설정 */
  padding: 40px;
  overflow-y: auto;
  animation: ${S} 1s ease;
  color: #fff;
  @media (max-width: 768px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
    padding: 10vh 20px;
  }
`,A=s.a.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 15px;
    margin-left: 30px;
    color: #ffd700;
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  p {
    line-height: 1.6;
    font-size: 0.8em;
    @media (max-width: 768px) {
      font-size: 0.7em;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    font-size: 1.5em;
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
  }
`;var J=()=>n.a.createElement(N,null,n.a.createElement(F,null,n.a.createElement(A,{id:"backend-skills"},n.a.createElement("h2",null,"Backend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.g,{className:"skill-icon",color:"#007396"}),n.a.createElement("span",{style:{color:"#fff"}},"Java")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.d,{className:"skill-icon",color:"#6DB33F"}),n.a.createElement("span",{style:{color:"#fff"}},"Spring")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.b,{className:"skill-icon",color:"#4479A1"}),n.a.createElement("span",{style:{color:"#fff"}},"MySQL")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.b,{className:"skill-icon",color:"#f29111"}),n.a.createElement("span",{style:{color:"#fff"}},"JPA")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.c,{className:"skill-icon",color:"#3776AB"}),n.a.createElement("span",{style:{color:"#fff"}},"Python")))),n.a.createElement(A,{id:"frontend-skills"},n.a.createElement("h2",null,"Frontend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.f,{className:"skill-icon",color:"#E34F26"}),n.a.createElement("span",{style:{color:"#fff"}},"HTML")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.a,{className:"skill-icon",color:"#1572B6"}),n.a.createElement("span",{style:{color:"#fff"}},"CSS")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.h,{className:"skill-icon",color:"#F7DF1E"}),n.a.createElement("span",{style:{color:"#fff"}},"JavaScript")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.e,{className:"skill-icon",color:"#4FC08D"}),n.a.createElement("span",{style:{color:"#fff"}},"Vue.js")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.j,{className:"skill-icon",color:"#61DAFB"}),n.a.createElement("span",{style:{color:"#fff"}},"React")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(P.a,{className:"skill-icon",color:"#02569B"}),n.a.createElement("span",{style:{color:"#fff"}},"Flutter")))),n.a.createElement(A,{id:"devops-skills"},n.a.createElement("h2",null,"DevOps"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.c,{className:"skill-icon",color:"#2496ED"}),n.a.createElement("span",{style:{color:"#fff"}},"Docker")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.d,{className:"skill-icon",color:"#F05032"}),n.a.createElement("span",{style:{color:"#fff"}},"Git")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.e,{className:"skill-icon",color:"#181717"}),n.a.createElement("span",{style:{color:"#fff"}},"GitHub"))))));const L=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,I=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  padding: 20px;
  margin-left: 15vw;
  width: calc(100vw - 15vw);
  max-width: calc(100vw - 200px);
`,R=s.a.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 50px;
  animation: ${L} 1s ease;
  text-align: center;
`,B=s.a.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`,D=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  max-width: 250px;
`,T=Object(s.a)(p.b)`
  width: 100%;
  height: 250px;
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
    object-position: center; /* 중심을 기준으로 표시 */
    border-radius: 8px;
  }
`,M=s.a.div`
  margin-top: 10px;
  font-size: 1em;
  color: #ddd;
  text-align: center;
`;var V=()=>n.a.createElement(I,null,n.a.createElement(R,null,"Portfolio"),n.a.createElement(B,null,n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project1"},n.a.createElement("img",{src:"/images/logo1.png",alt:"Project 1"})),n.a.createElement(M,null,"\uc804\uc9c1\uc2dc(\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810)")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project2"},n.a.createElement("img",{src:"/images/logo2.png",alt:"Project 2"})),n.a.createElement(M,null,"Flux")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project3"},n.a.createElement("img",{src:"/path/to/image3.jpg",alt:"Project 3"})),n.a.createElement(M,null,"Project 3")),n.a.createElement(D,null,n.a.createElement(T,{to:"/projects/project4"},n.a.createElement("img",{src:"/path/to/image4.jpg",alt:"Project 4"})),n.a.createElement(M,null,"Project 4"))));const G=s.a.div`
  margin-left: 15vw; // 사이드바 너비만큼 여백 추가
  min-height: 100vh;
  display: flex;
  justify-content: center; // 가운데 정렬 추가
  background-color: #222;
  max-width: 100vw; // 전체 화면을 차지
  width: calc(100vw - 15vw); // 사이드바 옆 나머지 화면 너비를 차지

  @media (max-width: 768px) {
    margin-left: 20vw; // 모바일에서 사이드바 너비에 맞춤
  }

  @media (max-width: 480px) {
    margin-left: 25vw; // 작은 화면에서 사이드바 너비에 맞춤
  }
`,C=s.a.div`
  width: 90%; // 컨텐츠 너비를 늘림
  max-width: 1400px; // 최대 너비를 크게 설정
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.7em, 1.5vw, 0.85em); // 반응형 폰트 크기
  height: 100vh;
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
`,O=s.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px); // 반응형 이미지 크기
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em); // 반응형 제목 크기
    font-weight: bold;
    color: #ffd700;
  }
`,W=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em); // 반응형 부제목 크기
  color: #888;
  font-weight: normal;
`,Y=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px; // 이미지와 텍스트 사이 간격 줄이기
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,H=s.a.div`
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
`,$=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,_=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Q=s.a.div`
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
`,U=s.a.ul`
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
`;var q=()=>n.a.createElement(G,null,n.a.createElement(C,null,n.a.createElement(O,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(W,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(Y,null,n.a.createElement(H,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement($,null,n.a.createElement(_,null,n.a.createElement(Q,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(U,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(K,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const X=s.a.div`
  margin-left: 15vw; // 사이드바 너비만큼 여백 추가
  min-height: 100vh;
  display: flex;
  justify-content: center; // 가운데 정렬 추가
  background-color: #222;
  max-width: 100vw; // 전체 화면을 차지
  width: calc(100vw - 15vw); // 사이드바 옆 나머지 화면 너비를 차지

  @media (max-width: 768px) {
    margin-left: 20vw; // 모바일에서 사이드바 너비에 맞춤
  }

  @media (max-width: 480px) {
    margin-left: 25vw; // 작은 화면에서 사이드바 너비에 맞춤
  }
`,Z=s.a.div`
  width: 90%; // 컨텐츠 너비를 늘림
  max-width: 1400px; // 최대 너비를 크게 설정
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.7em, 1.5vw, 0.85em); // 반응형 폰트 크기
  height: 100vh;
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
`,ee=s.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px); // 반응형 이미지 크기
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em); // 반응형 제목 크기
    font-weight: bold;
    color: #ffd700;
  }
`,te=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em); // 반응형 부제목 크기
  color: #888;
  font-weight: normal;
`,le=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px; // 이미지와 텍스트 사이 간격 줄이기
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,ae=s.a.div`
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
`,ne=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,ie=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,re=s.a.div`
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
`,me=s.a.footer`
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
`;var oe=()=>n.a.createElement(X,null,n.a.createElement(Z,null,n.a.createElement(ee,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(te,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(le,null,n.a.createElement(ae,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(ne,null,n.a.createElement(ie,null,n.a.createElement(re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(re,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(ce,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(re,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(re,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(me,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const se=s.a.div`
  margin-left: 15vw; // 사이드바 너비만큼 여백 추가
  min-height: 100vh;
  display: flex;
  justify-content: center; // 가운데 정렬 추가
  background-color: #222;
  max-width: 100vw; // 전체 화면을 차지
  width: calc(100vw - 15vw); // 사이드바 옆 나머지 화면 너비를 차지

  @media (max-width: 768px) {
    margin-left: 20vw; // 모바일에서 사이드바 너비에 맞춤
  }

  @media (max-width: 480px) {
    margin-left: 25vw; // 작은 화면에서 사이드바 너비에 맞춤
  }
`,de=s.a.div`
  width: 90%; // 컨텐츠 너비를 늘림
  max-width: 1400px; // 최대 너비를 크게 설정
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.7em, 1.5vw, 0.85em); // 반응형 폰트 크기
  height: 100vh;
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
`,pe=s.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px); // 반응형 이미지 크기
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em); // 반응형 제목 크기
    font-weight: bold;
    color: #ffd700;
  }
`,ue=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em); // 반응형 부제목 크기
  color: #888;
  font-weight: normal;
`,fe=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px; // 이미지와 텍스트 사이 간격 줄이기
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,xe=s.a.div`
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
`,ge=s.a.div`
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
`,he=s.a.div`
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
`,we=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,be=s.a.footer`
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
`;var ve=()=>n.a.createElement(se,null,n.a.createElement(de,null,n.a.createElement(pe,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(ue,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(fe,null,n.a.createElement(xe,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(ge,null,n.a.createElement(Ee,null,n.a.createElement(he,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(he,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(we,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(he,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(he,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(be,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const ye=s.a.div`
  margin-left: 15vw; // 사이드바 너비만큼 여백 추가
  min-height: 100vh;
  display: flex;
  justify-content: center; // 가운데 정렬 추가
  background-color: #222;
  max-width: 100vw; // 전체 화면을 차지
  width: calc(100vw - 15vw); // 사이드바 옆 나머지 화면 너비를 차지

  @media (max-width: 768px) {
    margin-left: 20vw; // 모바일에서 사이드바 너비에 맞춤
  }

  @media (max-width: 480px) {
    margin-left: 25vw; // 작은 화면에서 사이드바 너비에 맞춤
  }
`,ke=s.a.div`
  width: 90%; // 컨텐츠 너비를 늘림
  max-width: 1400px; // 최대 너비를 크게 설정
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #e0e0e0;
  background-color: #222;
  font-family: Arial, sans-serif;
  font-size: clamp(0.7em, 1.5vw, 0.85em); // 반응형 폰트 크기
  height: 100vh;
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
`,je=s.a.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  width: 100%;

  img {
    width: clamp(30px, 4vw, 50px); // 반응형 이미지 크기
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: clamp(0.9em, 1.8vw, 1.1em); // 반응형 제목 크기
    font-weight: bold;
    color: #ffd700;
  }
`,ze=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em); // 반응형 부제목 크기
  color: #888;
  font-weight: normal;
`,Pe=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px; // 이미지와 텍스트 사이 간격 줄이기
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,Se=s.a.div`
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
`,Ne=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Fe=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Ae=s.a.div`
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
`,Je=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Le=s.a.footer`
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
`;var Ie=()=>n.a.createElement(ye,null,n.a.createElement(ke,null,n.a.createElement(je,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(ze,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(Pe,null,n.a.createElement(Se,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(Ne,null,n.a.createElement(Fe,null,n.a.createElement(Ae,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"JWT\ub97c \ud65c\uc6a9\ud55c \ud1a0\ud070 \uae30\ubc18 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc\uc815 \uc801\uc6a9"))),n.a.createElement(Ae,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(Je,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"JWT"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(Ae,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"'\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)'\ub294 Vue3\uc640 Spring\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\ub41c \ud601\uc2e0\uc801\uc778 \ucc44\uc6a9\uc815\ubcf4 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \ubcf8 \uc0ac\uc774\ud2b8\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d API\uc640 \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud558\uc5ec, \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc2e0\uc18d\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uaca9\uc99d\uacfc \uad00\ub828\ub41c \ucc44\uc6a9\uc815\ubcf4\ub97c \uc989\uc2dc \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc5ec, \uad6c\uc9c1\uc790\ub4e4\uc774 \ubcf4\ub2e4 \uc27d\uac8c \uc790\uc2e0\uc5d0\uac8c \uc801\ud569\ud55c \ucc44\uc6a9 \uae30\ud68c\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.")),n.a.createElement(Ae,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\uc800\ub294 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc640 \uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub294 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\uc600\uc73c\uba70, \ud68c\uc6d0 \uc218, \ucd5c\uadfc \uac00\uc785\ud55c \uc720\uc800, \uc77c\uc77c \ubc0f \uc6d4\ubcc4 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud55c\ub208\uc5d0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uadf8\ub798\ud504\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"\ubc31\uc5d4\ub4dc\uc640\uc758 \uc5f0\uacb0 \uacfc\uc815\uc5d0\uc11c \uc608\uc0c1\uce58 \ubabb\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc640 \uceec\ub7fc \uc774\ub984\uc758 \ucc28\uc774\ub85c \uc778\ud574 \uc624\ub958\ub97c \ubc1c\uacac\ud558\uace0 \ud574\uacb0\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \uac78\ub838\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1b5\ud574 API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c \ub4f1 \uac1c\ubc1c \ubb38\uc11c\ub97c \uaf3c\uaf3c\ud788 \uc791\uc131\ud558\uace0, \uc815\ud574\uc9c4 \uaddc\uce59\uc744 \ucca0\uc800\ud788 \uc900\uc218\ud558\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(Le,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(z.i,{style:{marginRight:"5px"}}),n.a.createElement(z.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));var Re=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",element:n.a.createElement(E,null)}),n.a.createElement(c.a,{path:"/about",element:n.a.createElement(j,null)}),n.a.createElement(c.a,{path:"/skills",element:n.a.createElement(J,null)}),n.a.createElement(c.a,{path:"/projects",element:n.a.createElement(V,null)}),n.a.createElement(c.a,{path:"/projects/project1",element:n.a.createElement(q,null)}),n.a.createElement(c.a,{path:"/projects/project2",element:n.a.createElement(oe,null)}),n.a.createElement(c.a,{path:"/projects/project3",element:n.a.createElement(ve,null)}),n.a.createElement(c.a,{path:"/projects/project4",element:n.a.createElement(Ie,null)}))))};var Be=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,33)).then(t=>{let{getCLS:l,getFID:a,getFCP:n,getLCP:i,getTTFB:r}=t;l(e),a(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(Re,null)))),Be()}},[[21,1,2]]]);
//# sourceMappingURL=main.536b6b93.chunk.js.map