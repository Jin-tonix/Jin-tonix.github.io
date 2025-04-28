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
`;function x(){const[e,t]=Object(l.useState)(!1);return n.a.createElement(g,{showExtraMenu:e},n.a.createElement("div",{className:"menu"},n.a.createElement(p.b,{to:"/",onClick:()=>t(!1)},"Intro"),n.a.createElement(p.b,{to:"/about",onClick:()=>t(!1)},"About"),n.a.createElement(p.b,{to:"/skills",onClick:()=>t(!1)},"Skills"),n.a.createElement(p.b,{to:"/projects",onClick:()=>{t(!e)}},"Projects"),e&&n.a.createElement("div",{className:"extra-menu"},n.a.createElement(p.b,{to:"/projects/project4"},"FitChecker"),n.a.createElement(p.b,{to:"/projects/project3"},"Briefify"),n.a.createElement(p.b,{to:"/projects/project1"},"\uc804\uc9c1\uc2dc"),n.a.createElement(p.b,{to:"/projects/project2"},"Flux"))),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.a})," GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(c.a,{icon:o.b})," LinkedIn"),n.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},n.a.createElement(c.a,{icon:d.a})," Email")))}const h=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,u=s.a.div`
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
  padding: 15px 20px;
  box-sizing: border-box;
  color: #ddd;
  line-height: 1.5;
  text-shadow: 1.5px 1.5px 5.5px #333;
  background-color: rgba(0, 0, 0, 0.6);

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

  }

  &::-webkit-scrollbar {
    display: none;
  }
`;function f(){return n.a.createElement(u,null,n.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."))}const E=s.b`
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
  padding: 20px 40px;
  box-sizing: border-box;
  margin-left: 15vw;
  width: calc(100vw - 15vw);

  @media (max-width: 1024px) {
    flex-direction: column;
    width: calc(100vw - 15vw);
    margin-left: 15vw;
    padding: 15px 10px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 10px 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,b=s.a.div`
  padding: 8px 15px;
  animation: ${E} 1s ease;
  color: #fff;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`,v=Object(s.a)(b)`
  width: 47%;
  border-right: 1px solid #444;
  padding-left: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    padding: 10px;
  }
`,y=Object(s.a)(b)`
  width: 53%;
  padding-right: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`,k=s.a.div`
  margin-top: 30px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    color: #ffd700;
    font-size: 1.6rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    line-height: 1.7;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  li {
    margin-bottom: 8px;
  }

  li span {
    font-size: 0.85rem;
    color: #ccc;
  }

  .highlight {
    font-weight: bold;
    color: #ffd700;
  }
`,j=s.a.img`
  width: 7vw;
  height: auto;
  margin-bottom: 20px;
  float: right;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 70px;
    float: none;
    display: block;
    margin: 0 auto 20px;
  }
`;var z=()=>n.a.createElement(w,null,n.a.createElement(v,null,n.a.createElement(k,{id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement(j,{src:"/images/img.jpg",alt:"Jinhee Mok"}),n.a.createElement("p",null,"\ubc95\ud559 \uc804\uacf5\uc744 \ud1b5\ud574 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc744 \uac16\ucd94\uc5c8\uace0, \uc601\uc5b4 \uad50\uc721 \uacbd\ud5d8\uc73c\ub85c \uc18c\ud1b5\uacfc \ud611\uc5c5 \uc5ed\ub7c9\uc744 \uc313\uc558\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\uc774\ub97c \ubc14\ud0d5\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uba70 \uc131\uc7a5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"K-Digital \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub294 Spring Boot\uc640 Vue.js\ub97c \ud65c\uc6a9\ud574 \ubc31\uc5d4\ub4dc \ub85c\uc9c1\uacfc \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uace0, RESTful API \uac1c\ubc1c \ubc0f \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\ub3d9\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"AI \uc2ec\ud654 \uacfc\uc815\uc5d0\uc11c\ub294 LLM\uacfc RAG \uae30\uc220\uc744 \ud65c\uc6a9\ud558\uc5ec FastAPI \uae30\ubc18 \ubaa8\ub378 API\uc640 Elasticsearch \uac80\uc0c9 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),n.a.createElement("br",null),"\uc8fc\uc5b4\uc9c4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \uc0ac\uc6a9\uc790\uc640 \ud300\uc758 \uc694\uad6c\ub97c \ubc18\uc601\ud558\ub294 \uac1c\ubc1c\uc790\ub85c \uafb8\uc900\ud788 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4."))),n.a.createElement(y,null,n.a.createElement(k,{id:"resume"},n.a.createElement("h2",null,"Experience"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"AI \ud504\ub85c\uc81d\ud2b8 \uc2e4\ud589 \ub2a5\ub825")," : \ud300\uacfc \ud611\ub825\ud558\uc5ec AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4\ud558\uace0 \uac1c\ubc1c."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud300 \ud611\uc5c5 \ubc0f \ubb38\uc81c \ud574\uacb0")," : \ub2e4\uc591\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0 \ubaa9\ud45c\uc5d0 \ub9de\ucd98 \ucd5c\uc801 \uacb0\uacfc\ub97c \ub3c4\ucd9c.")),n.a.createElement("li",null,n.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud480\uc2a4\ud0dd \uac1c\ubc1c \ub2a5\ub825")," : Spring Boot, Vue.js \uae30\ubc18 \ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589 \ubc0f API \uac1c\ubc1c."),n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ud611\uc5c5 \ubc0f \ubc84\uc804 \uad00\ub9ac")," : GitHub\ub97c \ud1b5\ud55c \ud611\uc5c5, \ucf54\ub4dc \ub9ac\ubdf0 \uacbd\ud5d8 \uac15\ud654.")),n.a.createElement("li",null,n.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 \uc601\uc5b4 \uac15\uc0ac")," (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uac1c\uc778 \ub9de\ucda4\ud615 \uad50\uc721, \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5 \uc720\ub3c4"))),n.a.createElement("li",null,n.a.createElement("strong",null,"Pots&pans \uc601\uc5b4 \uac15\uc0ac")," (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ubab0\uc785 \uad50\uc721 \ubc0f \ud559\uc2b5 \uc131\uacfc \uad00\ub9ac"))),n.a.createElement("li",null,n.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uac15\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\ucc38\uc5ec\ud615 \uc218\uc5c5 \uc124\uacc4 \ubc0f \ud559\ubd80\ubaa8 \uc18c\ud1b5"))),n.a.createElement("li",null,n.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc6b4\uc601\uc2e4\uc7a5")," (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",n.a.createElement("br",null),n.a.createElement("span",null,"- ",n.a.createElement("span",{className:"highlight"},"\uc870\uc9c1 \uad00\ub9ac, \ub9ac\ub354\uc2ed, \ud6a8\uc728\uc801 \uc6b4\uc601"))))))),A=a(7),N=a(10);const P=s.b`
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
  animation: ${P} 1s ease;
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
`,F=s.a.div`
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
`;var L=()=>n.a.createElement(I,null,n.a.createElement(S,null,n.a.createElement(F,{id:"backend-skills"},n.a.createElement("h2",null,"Backend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.g,{className:"skill-icon",color:"#007396"}),n.a.createElement("span",{style:{color:"#fff"}},"Java")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.d,{className:"skill-icon",color:"#6DB33F"}),n.a.createElement("span",{style:{color:"#fff"}},"Spring")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.b,{className:"skill-icon",color:"#4479A1"}),n.a.createElement("span",{style:{color:"#fff"}},"MySQL")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.b,{className:"skill-icon",color:"#f29111"}),n.a.createElement("span",{style:{color:"#fff"}},"JPA")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.c,{className:"skill-icon",color:"#3776AB"}),n.a.createElement("span",{style:{color:"#fff"}},"Python")))),n.a.createElement(F,{id:"frontend-skills"},n.a.createElement("h2",null,"Frontend"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.f,{className:"skill-icon",color:"#E34F26"}),n.a.createElement("span",{style:{color:"#fff"}},"HTML")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.a,{className:"skill-icon",color:"#1572B6"}),n.a.createElement("span",{style:{color:"#fff"}},"CSS")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.h,{className:"skill-icon",color:"#F7DF1E"}),n.a.createElement("span",{style:{color:"#fff"}},"JavaScript")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.e,{className:"skill-icon",color:"#4FC08D"}),n.a.createElement("span",{style:{color:"#fff"}},"Vue.js")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.j,{className:"skill-icon",color:"#61DAFB"}),n.a.createElement("span",{style:{color:"#fff"}},"React")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(N.a,{className:"skill-icon",color:"#02569B"}),n.a.createElement("span",{style:{color:"#fff"}},"Flutter")))),n.a.createElement(F,{id:"devops-skills"},n.a.createElement("h2",null,"DevOps"),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.c,{className:"skill-icon",color:"#2496ED"}),n.a.createElement("span",{style:{color:"#fff"}},"Docker")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.d,{className:"skill-icon",color:"#F05032"}),n.a.createElement("span",{style:{color:"#fff"}},"Git")),n.a.createElement("div",{className:"skill-item"},n.a.createElement(A.e,{className:"skill-icon",color:"#181717"}),n.a.createElement("span",{style:{color:"#fff"}},"GitHub"))))));const B=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,R=s.a.div`
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
`,M=s.a.h1`
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 30px;
  animation: ${B} 1s ease;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`,C=s.a.div`
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
`,T=s.a.div`
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
`,G=Object(s.a)(p.b)`
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
`,J=s.a.div`
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
`;var D=()=>n.a.createElement(R,null,n.a.createElement(M,null,"Portfolio"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(C,null,n.a.createElement(T,null,n.a.createElement(G,{to:"/projects/project4"},n.a.createElement("img",{src:"/images/logo4.png",alt:"Project 4"})),n.a.createElement(J,null,"FitChecker")),n.a.createElement(T,null,n.a.createElement(G,{to:"/projects/project3"},n.a.createElement("img",{src:"/images/logo3.png",alt:"Project 3"})),n.a.createElement(J,null,"Briefify")),n.a.createElement(T,null,n.a.createElement(G,{to:"/projects/project1"},n.a.createElement("img",{src:"/images/logo1.png",alt:"Project 1"})),n.a.createElement(J,null,"\uc804\uc9c1\uc2dc",n.a.createElement("br",null),"(\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810)")),n.a.createElement(T,null,n.a.createElement(G,{to:"/projects/project2"},n.a.createElement("img",{src:"/images/logo2.png",alt:"Project 2"})),n.a.createElement(J,null,"Flux"))));const O=s.a.div`
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
`,V=s.a.div`
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
`,H=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,U=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,$=s.a.div`
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
`,_=s.a.div`
  flex: 2.5;

  @media (max-width: 768px) {
    width: 100%;
  }
`,X=s.a.div`
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
`,W=s.a.ul`
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
`;var q=()=>n.a.createElement(O,null,n.a.createElement(V,null,n.a.createElement(Y,null,n.a.createElement("img",{src:"/images/logo1.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"\uc790\uaca9\uc99d \uae30\ubc18 \ucc44\uc6a9\uc815\ubcf4\ub85c \uad6c\uc9c1\uc790\uc758 \ucde8\uc5c5 \uae30\ud68c \ubc1c\uad74\uacfc \ucee4\ub9ac\uc5b4 \uc131\uc7a5\uc744 \uc9c0\uc6d0\ud558\ub294 \uc6f9/\uc571 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(H,null,"- Team Project (2024.08.26 ~ 10.02): \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 (\ud504\ub860\ud2b8\uc5d4\ub4dc/\ubc31\uc5d4\ub4dc) \ubc0f Flutter \uc571 \uad6c\ud604"))),n.a.createElement(U,null,n.a.createElement($,null,n.a.createElement("img",{src:"/images/proj1-1.png",alt:"\ucc44\uc6a9/\uc790\uaca9\uc99d \uc815\ubcf4"}),n.a.createElement("img",{src:"/images/proj1-2.png",alt:"\ud68c\uc6d0\uac00\uc785/\ub85c\uadf8\uc778"}),n.a.createElement("img",{src:"/images/proj1-3.png",alt:"Flutter \uc571 \ud654\uba74"})),n.a.createElement(_,null,n.a.createElement(X,null,n.a.createElement(Q,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Vue.js\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Flutter\ub97c \uc774\uc6a9\ud55c \uc571 \uc11c\ubc84 \uac1c\ubc1c"))),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(W,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"Spring Data"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"Spring Security"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Vue3"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Flutter")))),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"\u2018\uc804\uc9c0\uc801 \uad6c\uc9c1\uc790 \uc2dc\uc810(\uc804\uc9c1\uc790)\u2019\ub294 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138\uc758 \uc790\uaca9\uc99d \ubc0f \ucc44\uc6a9 API\ub97c \ud65c\uc6a9\ud574 \ucd5c\uc2e0 \ucc44\uc6a9 \uc815\ubcf4\uc640 \uc790\uaca9\uc99d \uc885\ub958 \ubc0f \uc2dc\ud5d8 \uc77c\uc815\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uc5ec \uad6c\uc9c1\uc790\ub4e4\uc774 \uc790\uaca9\uc99d\uacfc \uc5f0\uacc4\ub41c \ucc44\uc6a9 \uc815\ubcf4\ub97c \uc190\uc27d\uac8c \ud0d0\uc0c9\ud558\uace0 \ucee4\ub9ac\uc5b4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ubc1c\uc804\uc2dc\ud0ac \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),n.a.createElement(Q,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc758 \ud504\ub860\ud2b8/\ubc31\uc5d4\ub4dc\uc640 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\ud604\uc744 \ub2f4\ub2f9\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"1. \uc0ac\uc6a9\uc790 \ud1b5\uacc4\ub97c \uc2dc\uac01\ud654\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0 \uc5b4\ub824\uc6c0\uc744 Spring Boot\ub85c \ub370\uc774\ud130 \uac00\uacf5 \ud6c4 Chart.js\ub97c \ud65c\uc6a9\ud574 \uc2dc\uac01\ud654.",n.a.createElement("br",null),"2. Flutter\uc640 Spring Boot \uac04 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ubd88\uc77c\uce58\ub85c \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc9c0\ub9cc API \uba85\uc138\uc11c\uc640 \ud14c\uc774\ube14 \uc815\uc758\uc11c\ub97c \uac80\ud1a0\ud558\uba70 \uc218\uc815.",n.a.createElement("br",null),"3. User/Admin Role \uad8c\ud55c \uad00\ub9ac\uc640 CORS \uc124\uc815\uc5d0\uc11c Spring Security\uc640 CORS \uc124\uc815\uc744 \ud559\uc2b5\ud558\uba70 \ub2e8\uacc4\uc801\uc73c\ub85c \uad6c\ud604.",n.a.createElement("br",null)),n.a.createElement("p",null,"\uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \ubc31\uc5d4\ub4dc-\ud504\ub860\ud2b8\uc5d4\ub4dc \uc5f0\ub3d9\uc758 \uc911\uc694\uc131\uc744 \uae4a\uc774 \uc774\ud574\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uac1c\ubc1c \ubb38\uc11c\ub97c \ucca0\uc800\ud788 \uac80\ud1a0\ud558\uace0 \uaddc\uce59\uc744 \uc900\uc218\ud558\ub294 \uac83\uc774 \ud504\ub85c\uc81d\ud2b8\uc758 \uc131\uacf5\uc5d0 \uc5bc\ub9c8\ub098 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294\uc9c0 \uccb4\uac10\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uacbd\ud5d8\uc740 \uac1c\ubc1c\uc790\ub85c\uc11c \uc138\uc2ec\ud568\uacfc \uaf3c\uaf3c\ud568\uc758 \uc911\uc694\uc131\uc744 \ubc30\uc6b0\ub294 \uc18c\uc911\ud55c \uacc4\uae30\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(K,null,n.a.createElement("a",{href:"https://github.com/Omniscient-Job-Project",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.i,{style:{marginRight:"5px"}}),n.a.createElement(A.e,{style:{marginRight:"5px"}})," \uc804\uc9c1\uc2dc (\uc804\uc9c0\uc801\uad6c\uc9c1\uc790\uc2dc\uc810) - GitHub Repository"))));const Z=s.a.div`
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
    max-height: 140px;
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 80px;
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
`;var se=()=>n.a.createElement(Z,null,n.a.createElement(ee,null,n.a.createElement(te,null,n.a.createElement("img",{src:"/images/logo2.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"FLUX - \uc544\ud2f0\uc2a4\ud2b8 \uacbd\ub9e4 \ud50c\ub7ab\ud3fc \uac1c\ubc1c"),n.a.createElement(ae,null,"- Team Project (2024.07.15 ~ 08.16): Market Page \ubc0f My Page \uc804\ubc18 \uad6c\ud604"))),n.a.createElement(le,null,n.a.createElement(ne,null,n.a.createElement("img",{src:"/images/proj2-1.png",alt:"Main Page"}),n.a.createElement("img",{src:"/images/proj2-2.png",alt:"User Login"}),n.a.createElement("img",{src:"/images/proj2-3.png",alt:"Notice Board"})),n.a.createElement(ie,null,n.a.createElement(re,null,n.a.createElement(me,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18\uc758 RESTful API \uc124\uacc4 \ubc0f \uad6c\ud604"),n.a.createElement("li",null,"Vue.js\ub97c \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801 \ud504\ub860\ud2b8\uc5d4\ub4dc UI \uac1c\ubc1c"),n.a.createElement("li",null,"\uacbd\ub9e4 \uc2dc\uac04 \ubc0f \uac00\uaca9 \uc124\uc815 \uae30\ub2a5\uc744 \ud3ec\ud568\ud55c My Page \uac1c\ubc1c"),n.a.createElement("li",null,"\uc0c1\ud488 \ubaa9\ub85d\uc5d0 \ud398\uc774\uc9c0\ub124\uc774\uc158 \ubc0f \uc815\ub82c \uae30\ub2a5 \ucd94\uac00"))),n.a.createElement(me,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(ce,null,n.a.createElement("li",null,"Spring Boot"),n.a.createElement("li",null,"JPA"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"Vue.js"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Git")))),n.a.createElement(me,null,n.a.createElement("h3",null,"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"),n.a.createElement("p",null,"FLUX\ub294 \uc544\ud2f0\uc2a4\ud2b8\uc640 \ub514\uc790\uc774\ub108\ub4e4\uc774 \uc0c1\ud488\uc744 \uc0ac\uace0\ud314 \uc218 \uc788\ub294 \uacbd\ub9e4 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \uc548\uc815\uc801\uc774\uace0 \ud655\uc7a5\uc131 \uc788\ub294 Spring Boot \ubc31\uc5d4\ub4dc\uc640 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 Vue.js \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uadf9\ub300\ud654\ud588\uc2b5\ub2c8\ub2e4.")),n.a.createElement(me,null,n.a.createElement("h3",null,"My Page \ubc0f \ub9c8\ucf13 \ud398\uc774\uc9c0 \uc8fc\uc694 \uac1c\ubc1c"),n.a.createElement("p",null,n.a.createElement("strong",null,"\ub9c8\ucf13 \ud398\uc774\uc9c0:")," \uc0c1\ud488 \ubaa9\ub85d\uc744 \ub3d9\uc801\uc73c\ub85c \ud45c\uc2dc\ud558\uace0, \uac80\uc0c9 \ubc0f \ud544\ud130\ub9c1 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc5ec \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uadf9\ub300\ud654\ud588\uc2b5\ub2c8\ub2e4. Vuex\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba70, Spring Boot \ubc31\uc5d4\ub4dc\uc640 \uc2e4\uc2dc\uac04 API \ud1b5\uc2e0\uc744 \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,n.a.createElement("strong",null,"My Page:")," Vue.js \uae30\ubc18\uc758 \uc785\ub825 \ud3fc\uc744 \ud1b5\ud574 \uc0c1\ud488 \ub4f1\ub85d, \uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uac04 \ubc0f \uac00\uaca9 \uc124\uc815 \uae30\ub2a5\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4. Spring Boot\uc640 JPA\ub97c \ud65c\uc6a9\ud574 \uc785\ub825\uac12\uc744 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\uace0, \uc815\ud655\ud55c \uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uc810\uc744 \uacc4\uc0b0\ud558\ub294 \uc2a4\ucf00\uc904\ub7ec\ub97c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.")),n.a.createElement(me,null,n.a.createElement("h3",null,"\ud2b8\ub7ec\ube14 \uc288\ud305 \ubc0f \uc131\uacfc"),n.a.createElement("ul",null,n.a.createElement("li",null,"Java Time API\ub97c \ud65c\uc6a9\ud574 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac04 \uc2dc\uac04 \ub3d9\uae30\ud654 \ubb38\uc81c\ub97c \ud574\uacb0."),n.a.createElement("li",null,"Task Scheduler\ub97c \ud65c\uc6a9\ud558\uc5ec \uacbd\ub9e4 \uc2dc\uc791 \ubc0f \uc885\ub8cc \ud504\ub85c\uc138\uc2a4\ub97c \uc790\ub3d9\ud654."),n.a.createElement("li",null,"\uacbd\ub9e4 \uc2dc\uc791 \uc2dc\uac04\uacfc \uac00\uaca9 \uc124\uc815 \ub4f1 \ubcf5\uc7a1\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uad6c\ud604."))))),n.a.createElement(oe,null,n.a.createElement("a",{href:"https://github.com/Flux2024",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.e,{style:{marginRight:"5px"}}),"FLUX - GitHub Repository"))));const de=s.a.div`
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
`,ue=s.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    max-height: 100px; /* 이미지의 최대 높이 설정 */
    border: 3px solid #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 90px; /* 작은 화면에서 높이 조정 */
    }
  }
`,fe=s.a.div`
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
`,be=s.a.div`
  margin-top: 20px;

  img {
    width: 45%;
    max-width: 250px;
    max-height: 180px; /* 이미지의 최대 높이 설정 */
    border: 3px solid #333;
    border-radius: 5px;
    float: right;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1em;
    color: #ffd700;
  }

  p {
    font-size: 0.9em;
  }
`,ve=s.a.ul`
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
`;var ke=()=>n.a.createElement(de,null,n.a.createElement(pe,null,n.a.createElement(ge,null,n.a.createElement("img",{src:"/images/logo3.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null,"Briefify - \uc774\ubbf8\uc9c0 \ubb38\uc11c\ub098 \ud14d\uc2a4\ud2b8 \ubb38\uc11c\uc758 \ubc88\uc5ed \ubc0f \uc694\uc57d\uc744 \uc9c0\uc6d0\ud558\ub294 AI \uae30\ubc18\uc758 \uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c"),n.a.createElement(xe,null,"- Team Project (2024.10.25 ~ 11.04): \ud504\ub860\ud2b8 MyPage \ubc0f AI \ubaa8\ub378 \uac80\uc0c9"))),n.a.createElement(he,null,n.a.createElement(ue,null,n.a.createElement("img",{src:"/images/proj3-2.png",alt:"\ud648"}),n.a.createElement("img",{src:"/images/proj3-1.png",alt:"\uc694\uc57d\ud558\uae30"}),n.a.createElement("img",{src:"/images/proj3-6.png",alt:"\ub9c8\uc774\ud398\uc774\uc9c0"}),n.a.createElement("img",{src:"/images/proj3-5.png",alt:"\ub9c8\uc774\ud398\uc774\uc9c0"})),n.a.createElement(fe,null,n.a.createElement(Ee,null,n.a.createElement(we,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"React\ub97c \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"Python\uc744 \uc774\uc6a9\ud55c \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"\ub2e4\uc591\ud55c AI\ubaa8\ub378\uc758 \uc801\uc6a9"))),n.a.createElement(we,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(ve,null,n.a.createElement("li",null,"FastAPI"),n.a.createElement("li",null,"Pytorch"),n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Docker")))),n.a.createElement(we,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"Briefify\ub294 \ud544\uc694\ud55c \uc815\ubcf4\ub9cc \ube60\ub974\uac8c \uc694\uc57d\ud558\uc5ec \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \uc5c5\ubb34 \ud6a8\uc728\uc744 \uadf9\ub300\ud654\ud558\ub294 AI \uae30\ubc18 \uc694\uc57d \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790, \uc5f0\uad6c\uc6d0, \ube44\uc988\ub2c8\uc2a4 \uc804\ubb38\uac00 \ub4f1 \ubc29\ub300\ud55c \uc815\ubcf4\ub97c \ub2e4\ub8e8\ub294 \uc9c1\uad70\uc744 \uc704\ud574 \uc124\uacc4\ub41c Briefify\ub294 \uc774\ubbf8\uc9c0\ub098 \ud14d\uc2a4\ud2b8 \uc790\ub8cc\ub97c \ubd84\uc11d\ud558\uc5ec \ud575\uc2ec\ub9cc \ubf51\uc544\ub0c5\ub2c8\ub2e4.")),n.a.createElement(be,null,n.a.createElement("img",{src:"/images/proj3-4.png",alt:"AI \ubaa8\ub378"}),n.a.createElement("div",null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud504\ub860\ud2b8 \ub9c8\uc774\ud398\uc774\uc9c0\uc640 AI \ubaa8\ub378 \uac80\uc0c9 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc694\uc57d\ubcf8\uc744 \uc800\uc7a5\ud560 \ub54c\ub294 \uc81c\ubaa9\uacfc \ud568\uaed8 \uc800\uc7a5\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \ud6c4\uc5d0 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\uace0, \uc5ec\ub7ec AI \ubaa8\ub378\uc744 \ud14c\uc2a4\ud2b8\ud558\uba70 \ucd5c\uc801\uc758 \ubaa8\ub378\uc744 \uc120\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"- EasyOCR\uc758 \ubbfc\uac10\ub3c4\ub97c \ud574\uacb0\ud558\uace0 Tesseract\ub85c \uc804\ud658.",n.a.createElement("br",null),"- Transformers \uc694\uc57d \ubaa8\ub378\uc758 \ud55c\uacc4\ub97c eenzeenee/t5-base\ub85c \ud574\uacb0.",n.a.createElement("br",null),"- mbart \ubaa8\ub378\uc758 \ubc88\uc5ed \ud488\uc9c8 \ubb38\uc81c\ub97c facebook/nllb\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc.",n.a.createElement("br",null),"- gTTS\ub85c \uac04\ub2e8\ud55c \uc74c\uc131 \ubcc0\ud658 \uad6c\ud604, \ub300\uc6a9\ub7c9 \ucc98\ub9ac \ud55c\uacc4 \uc778\uc9c0.",n.a.createElement("br",null)),n.a.createElement("p",null,"\ub2e4\uc591\ud55c AI \uae30\uc220\uc744 \ud1b5\ud569\ud558\uba70 \ubaa8\ub378 \uc120\ud0dd\uacfc \ud55c\uacc4\ub97c \uc774\ud574\ud558\ub294 \ubc30\uc6c0\uc758 \uae30\ud68c\ub97c \uc5bb\uc5c8\uace0, \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud5a5\uc0c1\uc744 \uc704\ud55c \uac1c\uc120 \ubc29\ud5a5\uc744 \uace0\ubbfc\ud588\uc2b5\ub2c8\ub2e4. \ubc88\uc5ed\uc2dc \uc5b8\uc5b4\ub97c \uc120\ud0dd\ud574\uc57c \ud588\ub294\ub370 \ub300\uc0c1 \uc5b8\uc5b4 \uc790\ub3d9 \uac10\uc9c0 \uae30\ub2a5\uc744 \ub3c4\uc785\ud558\uace0, LLM \ubaa8\ub378\uc744 \ud65c\uc6a9\ud588\ub2e4\uba74 \ub354 \ud6a8\uc728\uc801\uc778 \uacb0\uacfc\ubb3c\uc744 \ub3c4\ucd9c\ud588\uc744 \uac83\uc774\ub77c\ub294 \uc544\uc26c\uc6c0\uc774 \ub0a8\uc2b5\ub2c8\ub2e4."))))),n.a.createElement(ye,null,n.a.createElement("a",{href:"https://github.com/AI-X-min-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.i,{style:{marginRight:"5px"}}),n.a.createElement(A.e,{style:{marginRight:"5px"}})," Briefify - GitHub Repository"))));const je=s.a.div`
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
`,Ae=s.a.div`
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
`,Ne=s.a.h2`
  font-size: clamp(0.8em, 1.6vw, 0.95em);
  color: #888;
`,Pe=s.a.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`,Ie=s.a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
    max-width: 250px;
    max-height: 150px; /* 최대 높이 설정 */
    border: 3px solid #333;
    border-radius: 5px;
    object-fit: cover; /* 이미지 비율 유지 */
  }

  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 120px;
      max-height: 80px; /* 모바일에서 최대 높이 설정 */
    }
  }
`,Se=s.a.div`
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
`,Le=s.a.div`
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
`,Be=s.a.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Re=s.a.footer`
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
`;var Me=()=>n.a.createElement(je,null,n.a.createElement(ze,null,n.a.createElement(Ae,null,n.a.createElement("img",{src:"/images/logo4.png",alt:"Project Logo"}),n.a.createElement("div",null,n.a.createElement("h1",null," FitChecker - \ub300\ud654\ub97c \ud1b5\ud574 \ud544\uc694\ud55c \uc6b4\ub3d9\uc744 \ucd94\ucc9c\ud574\uc8fc\uace0, \uc790\uc138\ub97c \uc7a1\uc544\uc8fc\ub294 AI \uae30\ubc18\uc758 \ud648\ud2b8\ub808\uc774\ub2dd \uc571"),n.a.createElement(Ne,null,"- Team Project (2024.11.05 ~ 12.20) : \ubc31\uc564\ub4dc \uac1c\ubc1c \ubc0f Langchain \uc744 \uc774\uc6a9\ud55c AI agent \uac1c\ubc1c \ubc0f \ud504\ub860\ud2b8/\ubc31 \uc5f0\uacb0"))),n.a.createElement(Pe,null,n.a.createElement(Ie,null,n.a.createElement("img",{src:"/images/proj4-1.png",alt:""}),n.a.createElement("img",{src:"/images/proj4-2.png",alt:""}),n.a.createElement("img",{src:"/images/proj4-3.png",alt:""})),n.a.createElement(Se,null,n.a.createElement(Fe,null,n.a.createElement(Le,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uc8fc\uc694 \uc0ac\ud56d"),n.a.createElement("ul",null,n.a.createElement("li",null,"Spring Boot \uae30\ubc18 \ubc31\uc5d4\ub4dc \uc11c\ubc84 \uac1c\ubc1c"),n.a.createElement("li",null,"FastAPI\ub97c \ud65c\uc6a9\ud55c \ud504\ub860\ud2b8/\ubc31 \uc5d4\ub4dc \uc5f0\uacb0"),n.a.createElement("li",null,"Langchain\uc744 \uc774\uc6a9\ud55c AI agent \uac1c\ubc1c"),n.a.createElement("li",null,"LLM\uacfc RAG\ub97c \uc774\uc6a9\ud55c \ucd94\ucc9c\uae30\ub2a5"))),n.a.createElement(Le,null,n.a.createElement("h3",null,"\uae30\uc220 \uc2a4\ud0dd"),n.a.createElement(Be,null,n.a.createElement("li",null,"Flutter"),n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"FastAPI"),n.a.createElement("li",null,"Firebase"),n.a.createElement("li",null,"Docker"),n.a.createElement("li",null,"Elasticsearch"),n.a.createElement("li",null,"Langchain"),n.a.createElement("li",null,"Mediapipe"),n.a.createElement("li",null,"Gpt 4o-mini")))),n.a.createElement(Le,null,n.a.createElement("h3",null,"\uc0b4\ud3b4\ubcf4\uae30"),n.a.createElement("p",null,"FitChecker\ub294 AI \uae30\ubc18 \uccb4\ud615 \ud3c9\uac00\uc640 \uc6b4\ub3d9 \uc790\uc138 \uad50\uc815\uc744 \ud1b5\ud574 \ud63c\uc790 \uc6b4\ub3d9\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \uc790\uc138 \uad50\uc815\uc758 \uc5b4\ub824\uc6c0\uc744 \ud574\uacb0\ud558\uace0, \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uc5ec \ub9de\ucda4\ud615 \uc6b4\ub3d9 \uacc4\ud68d\uacfc \uc2dd\ub2e8 \ucd94\ucc9c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub610\ud55c, Agent \uae30\ub2a5\uc73c\ub85c \uc6b4\ub3d9 \uc2a4\ucf00\uc904 \uad00\ub9ac\uc640 \uc2e4\uc2dc\uac04 \uc790\uc138 \uac10\uc9c0 \ud654\uba74 \uc790\ub3d9 \uc2e4\ud589\uc744 \uc9c0\uc6d0\ud558\uc5ec \uc2a4\ub9c8\ud2b8\ud55c \uc6b4\ub3d9 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4")),n.a.createElement(Le,null,n.a.createElement("h3",null,"\uac1c\ubc1c \uad00\ub828 \uc124\uba85"),n.a.createElement("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c LLLM\uc744 \ud65c\uc6a9\ud558\uc5ec \ud504\ub86c\ud504\ud2b8 \uc124\uc815 \ubc0f \uc5d0\uc774\uc804\ud2b8 \uc124\uacc4\ub97c \uc218\ud589\ud558\uc600\uc73c\uba70, \uc774\ub97c \ud1b5\ud574 \ucc57\ubd07\uacfc \uc74c\uc131 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0, \uc5d0\uc774\uc804\ud2b8\ub97c \ud65c\uc6a9\ud55c \uba85\ub839 \ucc98\ub9ac\ub85c \uc0ac\uc6a9\uc790\uac00 \uc694\uccad \uc2dc \uc6b4\ub3d9 \uc790\uc138 \uad50\uc815 \ud398\uc774\uc9c0\ub85c \uc790\ub3d9 \uc5f0\uacb0\ub418\ub294 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",null,"- AI \uae30\ubc18 \ubaa8\uc158 \uac10\uc9c0 \ubaa8\ub378\ub85c \uc6b4\ub3d9 \uc790\uc138\ub97c \uc2e4\uc2dc\uac04 \ubd84\uc11d\ud558\uba70, \uad50\uc815 \uc815\ud655\ub3c4 85% \uc774\uc0c1 \ub2ec\uc131.",n.a.createElement("br",null),"- YouTube API\uc640 RAG\ub97c \ud65c\uc6a9\ud574 \uc9c8\ubb38 \uc5f0\uad00 \uc601\uc0c1 \ucd94\ucc9c \uc815\ud655\ub3c4\ub97c 50% \uac1c\uc120.",n.a.createElement("br",null),"- \uad11\uace0\uc640 \ub178\uc774\uc988 \uc81c\uac70 \ubc0f \ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4 \uc801\uc6a9\uc73c\ub85c RAG \uac80\uc0c9 \uc815\ud655\ub3c4\ub97c \uac1c\uc120.",n.a.createElement("br",null),"- \ucc57\ubd07 \uc5d0\uc774\uc804\ud2b8\ub97c \ud65c\uc6a9\ud558\uc5ec \uc54c\ub78c \uc124\uc815 \ubc0f \ud398\uc774\uc9c0 \uc7ac\uc0dd \uae30\ub2a5\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc811\uadfc\uc131 \ud5a5\uc0c1.",n.a.createElement("br",null),"- \ub3c4\uba54\uc778 \uc911\uc2ec \uc124\uacc4\ub85c \uc758\uc874\uc131\uc744 \ub0ae\ucd94\uace0, \uac00\ub3c5\uc131, \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \uac1c\uc120\ud574 \ud611\uc5c5 \ud6a8\uc728\uc131 \uc99d\ub300.",n.a.createElement("br",null)),n.a.createElement("p",null,"FitChecker\ub294 RAG \uae30\uc220\uc744 \uc131\uacf5\uc801\uc73c\ub85c \ud1b5\ud569\ud558\uc5ec, \uc0ac\uc6a9\uc790 \ub9de\ucda4\ud615 \uc6b4\ub3d9 \ubd84\uc11d \ubc0f \ucd94\ucc9c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uba70 \ud611\uc5c5 \ud6a8\uc728\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ub192\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, WebSocket \uae30\ubc18 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \uc804\uc1a1 \ubbf8\uad6c\ud604\uc740 \uc544\uc26c\uc6c0\uc73c\ub85c \ub0a8\uc2b5\ub2c8\ub2e4.")))),n.a.createElement(Re,null,n.a.createElement("a",{href:"https://github.com/AI-X-main-projext-ITOWE",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.i,{style:{marginRight:"5px"}}),n.a.createElement(A.e,{style:{marginRight:"5px"}})," FitChecker - GitHub Repository"))));var Ce=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(x,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(f,null)}),n.a.createElement(m.a,{path:"/about",element:n.a.createElement(z,null)}),n.a.createElement(m.a,{path:"/skills",element:n.a.createElement(L,null)}),n.a.createElement(m.a,{path:"/projects",element:n.a.createElement(D,null)}),n.a.createElement(m.a,{path:"/projects/project1",element:n.a.createElement(q,null)}),n.a.createElement(m.a,{path:"/projects/project2",element:n.a.createElement(se,null)}),n.a.createElement(m.a,{path:"/projects/project3",element:n.a.createElement(ke,null)}),n.a.createElement(m.a,{path:"/projects/project4",element:n.a.createElement(Me,null)}))))};var Te=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:i,getTTFB:r}=t;a(e),l(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(Ce,null)))),Te()}},[[21,1,2]]]);
//# sourceMappingURL=main.e1cc7620.chunk.js.map