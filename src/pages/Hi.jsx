import EmojiBadge from '@components/EmojiBadge';
import React from 'react';

function Hi() {
  return (
    <>
      <EmojiBadge emoji="😍" count={24} />
      <EmojiBadge emoji="😍" count={24} />
      <EmojiBadge emoji="😍" count={24} />
      <EmojiBadge emoji="😍" count={24} />
    </>
  );
}

export default Hi;
