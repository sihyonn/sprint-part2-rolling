import ProfileBadgeCard from 'src/components/common/ProfileBadgeCard';
import ProfileBadgeSelect from 'src/components/common/ProfileBadgeSelect';
import React from 'react';

const mockData = {
  default: '',
  img1: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
};

function Hi() {
  return (
    <>
      <ProfileBadgeCard profileImg={mockData.img1} />
      <ProfileBadgeCard profileImg={mockData.default} />
      <ProfileBadgeSelect profileImg={mockData.img1} />
      <ProfileBadgeSelect profileImg={mockData.default} />
    </>
  );
}

export default Hi;
