import useInfiniteCardMessagesQuery from '@hooks/api/messagesAPI/useInfiniteCardMessagesQuery';
import React from 'react';
import Card from './Card';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useRef } from 'react';

function InfiniteCardMessages() {
  const recipientId = 4028;
  const loaderRef = useRef();

  const { data: cardMessagesData, fetchNextPage } =
    useInfiniteCardMessagesQuery(recipientId);

  console.log('데이터', cardMessagesData, fetchNextPage);

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <>
      {cardMessagesData?.pages.map((page) =>
        page.results.map((result) => <Card key={result.id} data={result} />),
      )}
      <div
        ref={loaderRef}
        style={{ height: '20px', margin: '10px', backgroundColor: 'lightgray' }}
        aria-label="Loading more messages"
      >
        로딩중이라네
      </div>
    </>
  );
}

export default InfiniteCardMessages;
