import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '@components/common/form/Input';
import Button from '@components/common/button/Button';
import { PLACEHOLDER } from '@constants/PLACEHOLDER';
import Dropdown from '@components/common/form/Dropdown';
import { DROPDOWN_DATA } from '@constants/DROPDOWN_DATA';
import TextEditor from '@components/common/TextEditor';
import ProfileBadgeSelect from '@components/common/badge/ProfileBadgeSelect';
import ProfileBadgeCard from '@components/common/badge/ProfileBadgeCard';

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-bottom: 6.2rem;
    @media (min-width: 768px) and (max-width: 1247px) {
      margin-bottom: 5.2rem;
    }
    @media (max-width: 767px) {
      margin-bottom: 10em;
    }
  `,
  Section: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  `,
  ProfileSection: styled.div`
    width: 100%;
    max-width: 72rem;
    display: flex;
    align-items: center;

    gap: 3.2rem;
  `,
  Profile: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  `,
  Text: styled.h1`
    display: flex;
    width: 100%;
    max-width: 72rem;
    color: ${({ theme }) => theme.color.textGr};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.2rem; /* 175% */
    letter-spacing: -0.024rem;
  `,
  SubText: styled.h2`
    width: 100%;

    color: ${({ theme }) => theme.color.btnGr};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;
  `,
  Dropdown: styled(Dropdown)`
    position: relative;
    @media (max-width: 767px) {
      position: absolute;
    }
  `,
};

function WriteMessagePage() {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState(
    DROPDOWN_DATA.RELATIONSHIP.DEFAULT,
  );
  const [font, setFont] = useState(DROPDOWN_DATA.FONT.DEFAULT);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const imageUrls = [
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
    'https://picsum.photos/id/522/100/100',
    'https://picsum.photos/id/547/100/100',
    'https://picsum.photos/id/268/100/100',
    'https://picsum.photos/id/1082/100/100',
    'https://picsum.photos/id/571/100/100',
    'https://picsum.photos/id/494/100/100',
    'https://picsum.photos/id/859/100/100',
    'https://picsum.photos/id/437/100/100',
    'https://picsum.photos/id/1064/100/100',
  ];

  const handleInputChange = (value) => {
    setName(value);
  };
  const handleRelationshipSelect = (value) => {
    setRelationship(value);
  };
  const handleFontSelect = (value) => {
    setFont(value);
  };
  const handleImage = (value) => {
    setImage(value);
  };
  const handleSubmitMessage = () => {
    console.log({
      sender: name,
      profileImageURL: image,
      relationship: relationship,
      content: content,
      font: font,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>From.</Styled.Text>
          <Input
            placeholder={PLACEHOLDER.FROM}
            value={name}
            onInputChange={(value) => handleInputChange(value)}
          />
        </Styled.Section>

        <Styled.Section>
          <Styled.Text>프로필 이미지</Styled.Text>
          <Styled.ProfileSection>
            <ProfileBadgeSelect profileImg={image} />
            <Styled.Section style={{ alignItems: 'flex-start' }}>
              <Styled.SubText>프로필 이미지를 선택해 주세요!</Styled.SubText>
              <Styled.Profile>
                {imageUrls.map((imgUrl, idx) => (
                  <ProfileBadgeCard
                    key={idx}
                    profileImg={imgUrl}
                    onSelect={handleImage}
                  />
                ))}
              </Styled.Profile>
            </Styled.Section>
          </Styled.ProfileSection>
        </Styled.Section>

        <Styled.Section>
          <Styled.Text>상대와의 관계</Styled.Text>
          <Dropdown
            data={DROPDOWN_DATA.RELATIONSHIP}
            onSelect={handleRelationshipSelect}
          />
        </Styled.Section>

        <Styled.Section>
          <Styled.Text>내용을 입력해 주세요</Styled.Text>
          <TextEditor
            text={content}
            setText={setContent}
            style={{ height: '22rem' }}
          />
        </Styled.Section>

        <Styled.Section>
          <Styled.Text>폰트 선택</Styled.Text>
          <Styled.Dropdown
            data={DROPDOWN_DATA.FONT}
            onSelect={handleFontSelect}
          />
        </Styled.Section>
      </Styled.Container>

      <Button
        size="L"
        disabled={!name || !content}
        style={{ width: '100%', marginBottom: '2.4rem' }}
        onClick={handleSubmitMessage}
      >
        생성하기
      </Button>
    </div>
  );
}

export default WriteMessagePage;
