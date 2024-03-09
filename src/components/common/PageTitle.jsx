import React from 'react';
import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title ? `롤링페이퍼 ${title} | ` : ''}Rolling</title>
    </Helmet>
  );
}

export default PageTitle;
