(this["webpackJsonpjin-tonix.github.io"]=this["webpackJsonpjin-tonix.github.io"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(10),r=n.n(o),l=(n(23),n(24),n(5)),c=n(7),s=n(4),m=n(13);const d=s.a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; /* 화면 높이 꽉 차게 설정 */
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  min-width: 160px;
  max-width: 250px;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
    margin-top: 150px; /* 메뉴를 아래로 내림 */
    gap: 30px;

    a {
      color: #fff;
      font-size: 2em; /* 글씨 크기 증가 */
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
    align-items: flex-start;
    margin-bottom: 50px; /* 소셜 링크를 위로 올림 */
    align-items: center; /* 가운데 정렬 */
    gap: 15px;

    a {
      color: #fff;
      font-size: 1.2em;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 768px) {
    width: 25vw;
    min-width: 140px;

    .menu a {
      font-size: 1.3em;
    }

    .social-links a {
      font-size: 1em;
    }
  }
`;function f(){return i.a.createElement(d,null,i.a.createElement("div",{className:"menu"},i.a.createElement("a",{href:"#about"},"About"),i.a.createElement("a",{href:"#skills"},"Skills"),i.a.createElement("a",{href:"#projects"},"Projects")),i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://github.com/Jin-tonix",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.a,{icon:c.a})," GitHub"),i.a.createElement("a",{href:"https://www.linkedin.com/in/jin-tonix",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.a,{icon:c.b})," LinkedIn"),i.a.createElement("a",{href:"mailto:jinheemok815@gmail.com"},i.a.createElement(l.a,{icon:m.a})," Email")))}const p=s.b`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,g=s.a.div`
  background-image: url('/images/img2.jpg'); /* 절대 경로로 수정 */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 10vh 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 15vw; /* 사이드바 공간을 확보 */

  .intro {
    font-size: 3em;
    font-weight: 800;
    color: #ddd;
    margin-bottom: 10px;
    animation: ${p} 1s ease forwards; /* 첫 번째 애니메이션 */
    animation-delay: 0.5s; /* 지연 시간 */
    opacity: 0; /* 시작 시 숨김 */
  }

  .name-wrapper {
    font-size: 1.5em;
    font-weight: 800;
    color: #ddd;
    animation: ${p} 1s ease forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .name-highlight {
      font-size: 2.5em;
      font-weight: 900;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #ffd700; /* 노란 밑줄 */
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
    animation: ${p} 1s ease forwards;
    animation-delay: 2.5s;
    opacity: 0;
    
    /* 배경과 패딩 추가 */
    background-color: rgba(51, 51, 51, 0.8); /* 약간 투명한 어두운 배경 */
    padding: 10px;
    border-radius: 5px; /* 모서리 둥글게 */
  }

  @media (max-width: 768px) {
    .intro {
      font-size: 1.8em;
    }

    .name-wrapper {
      font-size: 1.8em;

      .name-highlight {
        font-size: 2.5em;
      }
    }

    .description {
      font-size: 1em;
    }
    margin-left: 20vw;
  }
`;function h(){return i.a.createElement(g,null,i.a.createElement("div",{className:"intro"},"\uc18c\ud1b5\uacfc \ubb38\uc81c \ud574\uacb0, \ub450 \ub9c8\ub9ac \ud1a0\ub07c\ub97c \uc7a1\ub294 \uac1c\ubc1c\uc790"),i.a.createElement("div",{className:"name-wrapper"},i.a.createElement("span",{className:"name-highlight"},"\ubaa9\uc9c4\ud76c"),"\uc785\ub2c8\ub2e4."),i.a.createElement("div",{className:"description"},"\ubc95\ud559\uc744 \ud1b5\ud574 \uc5bb\uc740 \ubd84\uc11d\ub825\uacfc \uc601\uc5b4\uad50\uc721\uc744 \ud1b5\ud574 \ub2e4\uc9c4 \uc18c\ud1b5 \ub2a5\ub825\uc740 \ubcf5\uc7a1\ud55c \uac1c\ubc1c \ubb38\uc81c \ud574\uacb0\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \ud611\uc5c5\uc5d0\uc11c \ud070 \uac15\uc810\uc785\ub2c8\ub2e4. ",i.a.createElement("br",null),"\uac1c\ubc1c\uc790\ub85c\uc11c \ub2e8\uc21c\ud788 \ucf54\ub529\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0, \ubb38\uc81c\ub97c \uad6c\uc870\uc801\uc73c\ub85c \ud574\uacb0\ud558\uace0 \uc2dc\uc2a4\ud15c \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \uae30\uc5ec\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))}var u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(h,null))};var x=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:a,getFCP:i,getLCP:o,getTTFB:r}=t;n(e),a(e),i(e),o(e),r(e)})},w=n(14);r.a.createRoot(document.getElementById("root")).render(i.a.createElement(w.a,null,i.a.createElement(u,null))),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.e451404f.chunk.js.map