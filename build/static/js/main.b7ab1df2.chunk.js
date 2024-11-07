(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),i=a(16),r=a.n(i),c=(a(28),a(29),a(3)),o=a(11),m=a(13),s=a(6),d=a(19),p=a(7);const f=s.a.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px; /* 메뉴 아이템 간의 간격을 더 좁힘 */
    
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
`;function E(){const[e,t]=Object(l.useState)(!1);return n.a.createElement(f,null,n.a.createElement("div",{className:"menu"},n.a.createElement(p.b,{to:"/",onClick:()=>t(!1)},"Intro"),n.a.createElement(p.b,{to:"/about",onClick:()=>t(!1)},"About"),n.a.createElement(p.b,{to:"/skills",onClick:()=>t(!1)},"Skills"),n.a.createElement(p.b,{to:"/projects",onClick:()=>{t(!e)}},"Projects")),e&&n.a.createElement("div",{className:"extra-menu"},n.a.createElement(p.b,{to:"/projects/project1"},"Project 1"),n.a.createElement(p.b,{to:"/projects/project2"},"Project 2"),n.a.createElement(p.b,{to:"/projects/project3"},"Project 3"),n.a.createElement(p.b,{to:"/projects/project4"},"Project 4")),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(o.a,{icon:m.a})," GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(o.a,{icon:m.b})," LinkedIn"),n.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},n.a.createElement(o.a,{icon:d.a})," Email")))}const u=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,x=s.a.div`
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
    animation: ${u} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    animation: ${u} 1s ease forwards;
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
    animation: ${u} 1s ease forwards;
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
`;function h(){return n.a.createElement(x,null,n.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),n.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uba70 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud558\uba70 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740",n.a.createElement("br",null),"\ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",n.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0",n.a.createElement("br",null),"\uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}const g=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,b=s.a.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-color: #222;
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 */
  width: calc(100vw - 15vw); /* 사이드바 옆 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바의 최대 너비를 고려한 최대 너비 */
`,w=s.a.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: ${g} 1s ease;
  color: #fff;
  @media (max-width: 768px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
    padding: 10vh 20px;
  }
`,v=Object(s.a)(w)`
  width: 35%;
  border-right: 1px solid #444;
  padding-left: 50px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-left: 20px;
  }
`,k=Object(s.a)(w)`
  width: 65%;
  padding-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
  }
`,y=s.a.div`
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
`;var N=()=>n.a.createElement(b,null,n.a.createElement(v,null,n.a.createElement(y,{id:"resume"},n.a.createElement("h2",null,"Experience"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",n.a.createElement("br",null),"AI \uc2ec\ud654 \uacfc\uc815\uc744 \uc774\uc218\ud558\uace0 \ud300 \ud504\ub85c\uc81d\ud2b8\ub85c AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",n.a.createElement("br",null),"\ud480\uc2a4\ud0dd \uc5d4\uc9c0\ub2c8\uc5b4 \uad50\uc721\uc744 \uc774\uc218\ud558\uace0 3\uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 (MonteKids) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",n.a.createElement("br",null),"\uc5b4\ud559\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\uc640 \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5\uc744 \uc9c0\ub3c4\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"Pots&pans (\ud30c\uce20\uc564\ud32c\uc2a4) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",n.a.createElement("br",null),"\uc601\uc5b4 \uc720\uce58\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\ub97c \uac00\ub974\ucce4\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uad50\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",n.a.createElement("br",null),"7\uc138\uc5d0\uc11c 16\uc138 \ud559\uc0dd\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \uc601\uc5b4 \uc218\uc5c5\uc744 \uc9c4\ud589\ud558\uace0 \ud559\ubd80\ubaa8\uc640 \uc18c\ud1b5\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("li",null,n.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc720\uce58\uc6d0 \ucf54\ub514\ub124\uc774\ud130")," \xb7 \uc815\uaddc\uc9c1 (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",n.a.createElement("br",null),"\uad50\uc0ac \ucc44\uc6a9\uacfc \uc720\uce58\uc6d0 \uc6b4\uc601\uc744 \ucd1d\uad04\ud588\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(k,null,n.a.createElement(y,{id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement("br",null),n.a.createElement("img",{src:"/images/img.jpg",alt:"Jinhee Mok",style:{width:"120px",height:"170px",marginBottom:"20px",float:"right",marginTop:"10px",marginLeft:"20px"}}),n.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, \uc5f4\uc815\uacfc \ub048\uae30\ub85c \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \uac1c\ubc1c\uc790 \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ubc95\ud559\uc744 \uc804\uacf5\ud558\uba70 \uc313\uc740 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc740 \uc800\uc758 \ud070 \uc790\uc0b0\uc785\ub2c8\ub2e4. \uc774 \ub2a5\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\uace0 \uac00\ub974\uce58\ub294 \uc77c\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub290\uaef4 \uc601\uc5b4 \uad50\uc721 \ud604\uc7a5\uc5d0\uc11c \ud559\uc0dd\ub4e4\uc758 \uc131\uc7a5\uc744 \ub3c4\uc654\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\ud5d8\uc740 \uc800\uc5d0\uac8c \uc18c\ud1b5\uc758 \uc911\uc694\uc131\uacfc \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud55c \uc2e4\ud589\ub825\uc744 \uae38\ub7ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0ac\ud68c \uc18d\uc5d0\uc11c \uc800 \uc5ed\uc2dc \uae30\uc220 \ubd84\uc57c\ub85c \uc0c8\ub85c\uc6b4 \ub3c4\uc804\uc5d0 \ub098\uc11c\uace0\uc790 \ud588\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \uae4a\uc740 \ud765\ubbf8\ub97c \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubc95\ud559\uc744 \ud1b5\ud574 \uccb4\ub4dd\ud55c \ubd84\uc11d\ub825\uacfc \uad50\uc721 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc774 \ub420 \uac83\uc774\ub77c \ud655\uc2e0\ud569\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\ub2e8\uc21c\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uba70 \uc2dc\uc2a4\ud15c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uace0 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370 \uae30\uc5ec\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud568\uaed8 \uc77c\ud558\uba70 \uae0d\uc815\uc801\uc778 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac08 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")))),j=a(8),z=a(10);const F=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,P=s.a.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: #222;
  margin-left: 15vw; /* 사이드바의 너비만큼 왼쪽 여백 설정 */
  width: calc(100vw - 15vw); /* 나머지 화면 너비를 차지 */
  max-width: calc(100vw - 200px); /* 사이드바 최대 너비가 200px일 때 */
`,S=s.a.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: ${F} 1s ease;
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
`;var B=()=>n.a.createElement(P,null,n.a.createElement(S,null,n.a.createElement(A,{id:"backend-skills"},n.a.createElement("h2",null,"Backend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.g,{className:"skill-icon",color:"#007396"}),n.a.createElement("span",{style:{color:"#fff"}},"Java")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.d,{className:"skill-icon",color:"#6DB33F"}),n.a.createElement("span",{style:{color:"#fff"}},"Spring")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.b,{className:"skill-icon",color:"#4479A1"}),n.a.createElement("span",{style:{color:"#fff"}},"MySQL")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.b,{className:"skill-icon",color:"#f29111"}),n.a.createElement("span",{style:{color:"#fff"}},"JPA")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.c,{className:"skill-icon",color:"#3776AB"}),n.a.createElement("span",{style:{color:"#fff"}},"Python")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(A,{id:"frontend-skills"},n.a.createElement("h2",null,"Frontend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.f,{className:"skill-icon",color:"#E34F26"}),n.a.createElement("span",{style:{color:"#fff"}},"HTML")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.a,{className:"skill-icon",color:"#1572B6"}),n.a.createElement("span",{style:{color:"#fff"}},"CSS")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.h,{className:"skill-icon",color:"#F7DF1E"}),n.a.createElement("span",{style:{color:"#fff"}},"JavaScript")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.e,{className:"skill-icon",color:"#4FC08D"}),n.a.createElement("span",{style:{color:"#fff"}},"Vue.js")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.i,{className:"skill-icon",color:"#61DAFB"}),n.a.createElement("span",{style:{color:"#fff"}},"React")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(z.a,{className:"skill-icon",color:"#02569B"}),n.a.createElement("span",{style:{color:"#fff"}},"Flutter")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(A,{id:"devops-skills"},n.a.createElement("h2",null,"DevOps"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.c,{className:"skill-icon",color:"#2496ED"}),n.a.createElement("span",{style:{color:"#fff"}},"Docker")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.d,{className:"skill-icon",color:"#F05032"}),n.a.createElement("span",{style:{color:"#fff"}},"Git")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(j.e,{className:"skill-icon",color:"#181717"}),n.a.createElement("span",{style:{color:"#fff"}},"GitHub"))))));var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",element:n.a.createElement(h,null)}),n.a.createElement(c.a,{path:"/about",element:n.a.createElement(N,null)}),n.a.createElement(c.a,{path:"/skills",element:n.a.createElement(B,null)}))))};var D=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:i,getTTFB:r}=t;a(e),l(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(C,null)))),D()}},[[21,1,2]]]);
//# sourceMappingURL=main.b7ab1df2.chunk.js.map