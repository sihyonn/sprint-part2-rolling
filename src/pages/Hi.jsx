import RelationBadge from '@components/common/RelationBadge';
import React from 'react';

function Hi() {
  return (
    <>
      <RelationBadge type={'동료'}></RelationBadge>
      <RelationBadge type={'지인'}></RelationBadge>
      <RelationBadge type={'가족'}></RelationBadge>
      <RelationBadge type={'친구'}></RelationBadge>
    </>
  );
}

export default Hi;
