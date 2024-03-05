import React from 'react';
import { useRef } from 'react';

import Card from '@/components/rollingPaperViewer/Card';
import AddCard from '@/components/rollingPaperViewer/AddCard';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useInfiniteCardMessagesQuery from '@hooks/api/messagesAPI/useInfiniteCardMessagesQuery';
import { GridTemplate } from '@styles/commonStyle';

function InfiniteCardMessages({ recipientId, isEditPage }) {
  const loaderRef = useRef();

  const { data: cardMessagesData, fetchNextPage } =
    useInfiniteCardMessagesQuery(recipientId);

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
      {/* todo 아래 스켈레톤 로더로 대체하기 */}
      <div
        ref={loaderRef}
        style={
          isLastPage
            ? { display: 'none' }
            : { height: '20px', margin: '10px', backgroundColor: 'lightgray' }
        }
        aria-label="Loading more messages"
      >
        로딩중이라네
      </div>
    </>
  );
}

export default InfiniteCardMessages;
