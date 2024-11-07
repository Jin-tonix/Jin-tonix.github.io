(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),o=(a(25),a(26),a(2)),c=a(8),m=a(10),s=a(5),p=a(16),d=a(6);const u=s.a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px; /* 고정된 너비 */
  min-width: 120px; /* 화면이 줄어들어도 최소 너비 유지 */
  
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    gap: 30px;

    a {
      color: #fff;
      font-size: 1.8em;
      text-decoration: none;
      font-weight: bold;
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
      font-size: 1.1em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 180px; /* 더 작은 화면에서는 고정된 최소 너비 */
  }
`;function g(){return l.a.createElement(u,null,l.a.createElement("div",{className:"menu"},l.a.createElement(d.b,{to:"/"},"Home"),l.a.createElement(d.b,{to:"/about"},"About"),l.a.createElement(d.b,{to:"/skills"},"Skills"),l.a.createElement(d.b,{to:"/projects"},"Projects")),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(c.a,{icon:m.a})," GitHub"),l.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(c.a,{icon:m.b})," LinkedIn"),l.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},l.a.createElement(c.a,{icon:p.a})," Email")))}const f=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,E=s.a.div`
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
  padding: 0 20px;
  overflow: hidden;

  .intro, .name-wrapper, .description {
    max-width: 70%;
  }

  .intro {
    font-size: 2em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${f} 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .name-wrapper {
    font-size: 2.3em;
    font-weight: 800;
    color: #ddd;
    animation: ${f} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .name-highlight {
      font-size: 2em;
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
    margin-top: 40px;
    font-size: 1.2em;
    font-weight: 700;
    color: #ddd;
    max-width: 800px;
    line-height: 1.6;
    text-shadow: 1px 1px 5px #333;
    animation: ${f} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6); /* 배경색 추가 */
    padding: 10px; /* 텍스트와 배경 경계 사이 여백 추가 */
    border-radius: 10px; /* 경계선 둥글게 처리 */
  }

  @media (max-width: 768px) {
    width: calc(100vw - 180px); /* 작은 화면에서는 더 작은 사이드바 공간 제외 */
    margin-left: 180px;
    padding: 10vh 20px;

    .intro {
      font-size: 2em;
    }

    .name-wrapper {
      font-size: 1.2em;

      .name-highlight {
        font-size: 2em;
      }
    }

    .description {
      font-size: 1em;
    }
  }
`;function h(){return l.a.createElement(E,null,l.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),l.a.createElement("div",{className:"name-wrapper"},l.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),l.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \uacf5\ubd80\ud558\uba70 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud558\uba70 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740",l.a.createElement("br",null),"\ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",l.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0",l.a.createElement("br",null),"\uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}const x=s.b`
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
  background-color: #222; /* 사이드바와 어울리게 어두운 배경색 추가 */
`,w=s.a.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  animation: ${x} 1s ease;
  color: #fff; /* 텍스트 색상을 흰색으로 변경 */
  @media (max-width: 768px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
    padding: 10vh 20px;
  }
`,v=Object(s.a)(w)`
  width: 50%;
  border-right: 1px solid #444;
  padding-right: 20px;
  padding-left: 40px;
  margin-left: 20px;
`,y=Object(s.a)(w)`
  image: url('/images/img.jpg');
  width: 50%;
  padding-left: 20px;
`,k=s.a.div`
  margin-bottom: 40px;

  h2 {
    margin-bottom: 20px;
    color: #ffd700; /* 제목을 강조하기 위해 황금색 사용 */
  }

  p {
    line-height: 1.6;
    font-size: 1.2em;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1.15em;
  }
`;var j=()=>l.a.createElement(b,null,l.a.createElement(v,null,l.a.createElement(k,{id:"resume"},l.a.createElement("h2",null,"Experience"),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 10\uc6d4 \u2013 2024\ub144 12\uc6d4)",l.a.createElement("br",null),"AI \uc2ec\ud654 \uacfc\uc815\uc744 \uc774\uc218\ud558\uace0 \ud300 \ud504\ub85c\uc81d\ud2b8\ub85c AI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"\ud558\uc774\ubbf8\ub514\uc5b4\uc544\uce74\ub370\ubbf8 ")," (2024\ub144 3\uc6d4 - 2024\ub144 9\uc6d4)",l.a.createElement("br",null),"\ud480\uc2a4\ud0dd \uc5d4\uc9c0\ub2c8\uc5b4 \uad50\uc721\uc744 \uc774\uc218\ud558\uace0 3\uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"\ubaac\ud14c\ud0a4\uc988 (MonteKids) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2022\ub144 6\uc6d4 - 2024\ub144 2\uc6d4)",l.a.createElement("br",null),"\uc5b4\ud559\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\uc640 \uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5\uc744 \uc9c0\ub3c4\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"Pots&pans (\ud30c\uce20\uc564\ud32c\uc2a4) \uc601\uc5b4 \uad50\uc0ac")," \xb7 (2021\ub144 3\uc6d4 - 2022\ub144 5\uc6d4)",l.a.createElement("br",null),"\uc601\uc5b4 \uc720\uce58\uc6d0\uc5d0\uc11c 5\uc138\uc5d0\uc11c 13\uc138\uc758 \uc5b4\ub9b0\uc774\ub4e4\uc5d0\uac8c \uc601\uc5b4\ub97c \uac00\ub974\ucce4\uc2b5\ub2c8\ub2e4."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"JLS (\uc815\uc0c1\uc5b4\ud559\uc6d0) \uad50\uc0ac")," (2018\ub144 8\uc6d4 - 2020\ub144 9\uc6d4)",l.a.createElement("br",null),"7\uc138\uc5d0\uc11c 16\uc138 \ud559\uc0dd\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \uc601\uc5b4 \uc218\uc5c5\uc744 \uc9c4\ud589\ud558\uace0 \ud559\ubd80\ubaa8\uc640 \uc18c\ud1b5\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"\uc804\uc6d0 \uc5b4\ub9b0\uc774\uc9d1 \uc720\uce58\uc6d0 \ucf54\ub514\ub124\uc774\ud130")," \xb7 \uc815\uaddc\uc9c1 (2015\ub144 3\uc6d4 - 2018\ub144 2\uc6d4)",l.a.createElement("br",null),"\uad50\uc0ac \ucc44\uc6a9\uacfc \uc720\uce58\uc6d0 \uc6b4\uc601\uc744 \ucd1d\uad04\ud588\uc2b5\ub2c8\ub2e4.")))),l.a.createElement(y,null,l.a.createElement(k,{id:"about"},l.a.createElement("h2",null,"About Me"),l.a.createElement("br",null),l.a.createElement("img",{src:"/images/img.jpg",alt:"Jinhee Mok",style:{width:"150px",height:"210px",marginBottom:"20px",float:"right",marginTop:"10px",marginLeft:"20px"}}),l.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, \uc5f4\uc815\uacfc \ub048\uae30\ub85c \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \uac1c\ubc1c\uc790 \ubaa9\uc9c4\ud76c\uc785\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("br",null),"\ubc95\ud559\uc744 \uc804\uacf5\ud558\uba70 \uc313\uc740 \ub17c\ub9ac\uc801 \uc0ac\uace0\ub825\uacfc \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc740 \uc800\uc758 \ud070 \uc790\uc0b0\uc785\ub2c8\ub2e4. \uc774 \ub2a5\ub825\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\uace0 \uac00\ub974\uce58\ub294 \uc77c\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub290\uaef4 \uc601\uc5b4 \uad50\uc721 \ud604\uc7a5\uc5d0\uc11c \ud559\uc0dd\ub4e4\uc758 \uc131\uc7a5\uc744 \ub3c4\uc654\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\ud5d8\uc740 \uc800\uc5d0\uac8c \uc18c\ud1b5\uc758 \uc911\uc694\uc131\uacfc \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud55c \uc2e4\ud589\ub825\uc744 \uae38\ub7ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("br",null),"\ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0ac\ud68c \uc18d\uc5d0\uc11c \uc800 \uc5ed\uc2dc \uae30\uc220 \ubd84\uc57c\ub85c \uc0c8\ub85c\uc6b4 \ub3c4\uc804\uc5d0 \ub098\uc11c\uace0\uc790 \ud588\uace0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc5d0 \uae4a\uc740 \ud765\ubbf8\ub97c \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubc95\ud559\uc744 \ud1b5\ud574 \uccb4\ub4dd\ud55c \ubd84\uc11d\ub825\uacfc \uad50\uc721 \uacbd\ud5d8\uc5d0\uc11c \uc5bb\uc740 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc774 \ub420 \uac83\uc774\ub77c \ud655\uc2e0\ud569\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("br",null),"\uc800\ub294 \ub2e8\uc21c\ud788 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uba70 \uc2dc\uc2a4\ud15c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc774\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uace0 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370 \uae30\uc5ec\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud568\uaed8 \uc77c\ud558\uba70 \uae0d\uc815\uc801\uc778 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac08 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))));var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement("div",{style:{marginLeft:"250px",flex:1}},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(o.a,{path:"/about",element:l.a.createElement(j,null)}))))};var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:i}=t;a(e),n(e),l(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,null,l.a.createElement(z,null)))),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.1194ab1b.chunk.js.map