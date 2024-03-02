import React from 'react';
import Card from '@components/common/Card';
import { GridTemplate } from '@styles/commonStyle';

const mockdata = [
  {
    id: 20,
    recipientId: 11,
    sender: 'test user1',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '지인',
    content:
      '저 진지합니다 나눔명조가 나눔명조했다. 저 진지합니다 나눔명조가 나눔명조했다. 저 진지합니다 나눔명조가 나눔명조했다. 저 진지합니다 나눔명조가 나눔명조했다. 저 진지합니다 나눔명조가 나눔명조했다.',
    font: '나눔명조',
    createdAt: '2023-10-31T09:58:47.272896Z',
  },
  {
    id: 21,
    recipientId: 11,
    sender: 'test user2',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '가족',
    content:
      '코드잇은 너무합니다. 반응형 요구사항이 너무 많아요 🥹 그렇지만 악으로 깡으로 .. 헤헤',
    font: 'Pretendard',
    createdAt: '2023-12-31T09:58:47.272896Z',
  },
  {
    id: 22,
    recipientId: 11,
    sender: 'test user3',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '친구',
    content:
      '15팀이 다 뿌시고 있는중. 노트북을 뿌시고 있을지도?!!! 🫠 15팀이 다 뿌시고 있는중. 노트북을 뿌시고 있을지도?!!! 🫠 15팀이 다 뿌시고 있는중. 노트북을 뿌시고 있을지도?!!! 🫠 15팀이 다 뿌시고 있는중. 노트북을 뿌시고 있을지도?!!! 🫠 15팀이 다 뿌시고 있는중. 노트북을 뿌시고 있을지도?!!! 🫠',
    font: '나눔손글씨 손편지체',
    createdAt: '2023-09-31T09:58:47.272896Z',
  },
  {
    id: 23,
    recipientId: 11,
    sender: 'test user2',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '지인',
    content:
      'fweawreffewafedwsfseingfwejkoijsdlkwefioujfweolnowejlewfnofweanjowefjlfsadjoawefjkwefjioufwehklfjweohfwenuihfewikhwfeihfewohwefiofhewojfweoljfweonfaewolhjrfweioasdqawdwqadwqwqa',
    font: '나눔명조',
    createdAt: '2023-10-31T09:58:47.272896Z',
  },
  {
    id: 24,
    recipientId: 11,
    sender: 'test user2',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '가족',
    content:
      'fweawreffewafedwsfseingfwejkoijsdlkwefioujfweolnowejlewfnofweanjowefjlfsadjoawefjkwefjioufwehklfjweohfwenuihfewikhwfeihfewohwefiofhewojfweoljfweonfaewolhjrfweioasdqawdwqadwqwqa',
    font: '나눔명조',
    createdAt: '2023-12-31T09:58:47.272896Z',
  },
  {
    id: 25,
    recipientId: 11,
    sender: 'test user2',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '친구',
    content:
      'fweawreffewafedwsfseingfwejkoijsdlkwefioujfweolnowejlewfnofweanjowefjlfsadjoawefjkwefjioufwehklfjweohfwenuihfewikhwfeihfewohwefiofhewojfweoljfweonfaewolhjrfweioasdqawdwqadwqwqa',
    font: '나눔명조',
    createdAt: '2023-09-31T09:58:47.272896Z',
  },
];

function PaperViewerPage() {
  return (
    <GridTemplate>
      {mockdata.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </GridTemplate>
  );
}

export default PaperViewerPage;
