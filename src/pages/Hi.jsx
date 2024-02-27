import RelationBadge from '@components/common/RelationBadge';
import React from 'react';

function Hi() {
  return (
    <>
      <RelationBadge type={'지인'} />
      <RelationBadge type={'동료'} />
      <RelationBadge type={'가족'} />
      <RelationBadge type={'친구'} />
    </>
  );
}

export default Hi;
