import React from 'react';
import { useRef } from 'react';

import Card from '@/components/rollingPaperViewer/Card';
import AddCard from '@/components/rollingPaperViewer/AddCard';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useInfiniteCardMessagesQuery from '@hooks/api/messagesAPI/useInfiniteCardMessagesQuery';
import InfiniteCardMessagesLoader from './InfiniteCardMessagesLoader';
import { GridTemplate } from '@styles/commonStyle';

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

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
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
        style={isLastPage ? { display: 'none' } : { display: 'block' }}
      />
    </>
  );
}

export default InfiniteCardMessages;
