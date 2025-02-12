import React from 'react';
// eslint-disable-next-line max-len
import GrommetThemeWrapper from '../components/wod/Grommet/GrommetThemeWrapper';
import WorkshopsTemplate from './template';

const Workshops = (props) => {
  return (
    <GrommetThemeWrapper>
      <WorkshopsTemplate {...props} />
    </GrommetThemeWrapper>
  );
};

export default Workshops;
