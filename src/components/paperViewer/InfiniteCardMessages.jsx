import React from 'react';
import { useRef } from 'react';
import { styled } from 'styled-components';

import Card from '@components/paperViewer/Card';
import AddCard from '@components/paperViewer/AddCard';
import InfiniteCardMessagesLoader from '@/components/paperViewer/InfiniteCardMessagesLoader';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useInfiniteCardMessagesQuery from '@hooks/api/messagesAPI/useInfiniteCardMessagesQuery';
import { GridTemplate } from '@styles/commonStyle';

const Styled = {
  EmptyMessage: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 9rem;

    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};

    div {
      font-size: 9rem;
      margin-bottom: 2rem;
    }
  `,
};

/**
 * InfiniteCardMessages - 카드 메시지 무한 스크롤
 * @param {string} recipientId 메시지 받는 대상의 id
 * @param {boolean} iseEditPage 편집모드인지 여부
 */

function InfiniteCardMessages({ recipientId, isEditPage }) {
  const loaderRef = useRef();

  const { data: cardMessagesData, fetchNextPage } =
    useInfiniteCardMessagesQuery(recipientId, isEditPage);

  const isLastPage = cardMessagesData?.pages?.at(-1)?.next === null;
  const hasData = !(cardMessagesData?.pages?.at(-1).count === 0);

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <>
      {isEditPage && !hasData ? (
        <Styled.EmptyMessage>
          <div>📨</div>
          편집할 카드 메시지가 없어요!
        </Styled.EmptyMessage>
      ) : (
        <>
          <GridTemplate>
            {!isEditPage && <AddCard recipientId={recipientId} />}
            {cardMessagesData?.pages.map((page) =>
              page.results.map((result) => (
                <Card key={result.id} data={result} isEditPage={isEditPage} />
              )),
            )}
          </GridTemplate>

          <InfiniteCardMessagesLoader
            className="skeleton"
            loaderRef={loaderRef}
            style={isLastPage ? { display: 'none' } : { marginTop: '2rem' }}
          />
        </>
      )}
    </>
  );
}

export default InfiniteCardMessages;
