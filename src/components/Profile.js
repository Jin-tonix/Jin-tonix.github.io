// src/components/Profile.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-image: url('src\assets\images\img.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 50px;
  text-align: center;

  h1 {
    font-size: 36px;
    line-height: 1.5;
  }

  p {
    font-size: 18px;
    color: #ccc; /* 텍스트 색상을 수정하여 가독성을 높임 */
  }
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <h1>매일매일 성장하는 즐거운 개발자<br />목진희입니다.</h1>
      <p>
        저는 법학을 전공하고, 사람들과 직접 소통하고 가르치는 일에 대한 열정에 영어 강사로서 활동하였습니다.<br />
        법학을 통해 체득한 분석력과 영어교육에서의 소통 능력은 복잡한 개발 문제를 해결하고, 클라이언트와의 원활한 협업을 하는데 도움이 될 것이라고 생각합니다.<br />
        백엔드 개발자는 단순한 코딩을 넘어 문제를 구조적으로 해결하고, 시스템의 효율성을 높이는 역할을 맡습니다.<br />
        저의 법학적 사고와 교육 경험은 개발자로서 더 나은 성과를 낼 수 있는 바탕이 될 것입니다.
        새로운 가치를 창출하는 개발자가 되고 싶습니다.
      </p>
    </ProfileContainer>
  );
}
