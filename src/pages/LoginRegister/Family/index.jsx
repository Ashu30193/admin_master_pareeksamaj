import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MaritalStatus from './MaritalStatus';
import Clan from './Clan';


const Family = () => {
  return (
    <PageHeaderWrapper>
    <MaritalStatus/>
    <Clan/>
    </PageHeaderWrapper>
  );
};

export default Family;
