import React, { useRef } from 'react';
import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/styles/quill.custom.css';

const Styled = {
  Container: styled.div``,
};

/**
 * 텍스트 에디터 컴포넌트
 * @param {string} text 에디터에 작성한 문자열 state
 * @param {React.Dispatch.SetStateAction} setText 에디터에 작성한 문자열 setState
 * @param props 기타
 */

function TextEditor({ text, setText, ...props }) {
  const quillRef = useRef();

  const modules = {
    toolbar: {
      container: [
        [{ header: [6, 5, false, 4, 3, 2, 1] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [{ color: [] }, { background: [] }],
      ],
    },
  };

  return (
    <Styled.Container>
      <ReactQuill
        ref={quillRef}
        theme={'snow'}
        modules={modules}
        value={text}
        onChange={(content) => setText(content)}
        {...props}
      />
    </Styled.Container>
  );
}

export default TextEditor;
