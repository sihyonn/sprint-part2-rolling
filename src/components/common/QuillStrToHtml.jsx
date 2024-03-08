import React, { memo } from 'react';
import styled from 'styled-components';
import Dompurify from 'dompurify';
import '@/styles/quill.strToHtml.css';

const Styled = {
  Container: styled.div`
    width: 100%;
  `,
};

/**
 * string을 quill 스타일에 맞게 html로 변환하는 컴포넌트
 * @param {string} htmlStr 변환할 html 문자열
 * @param {html.Attributes} containerProps container props
 */

const font = {
  나눔명조: "'Nanum Myeongjo', serif",
  '나눔손글씨 손편지체': "'Nanum Pen Script', cursive",
  Pretendard: "'Pretendard', sans-serif",
  'Noto Sans': "'Noto Sans KR', sans-serif",
};

function QuillStrToHtml({ htmlStr = '', fontStyle, ...containerProps }) {
  console.log(fontStyle);
  return (
    <Styled.Container
      className={'to-html'}
      dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(htmlStr, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
        }),
      }}
      style={{ fontFamily: font[fontStyle] }}
      {...containerProps}
    />
  );
}

export default memo(QuillStrToHtml);
