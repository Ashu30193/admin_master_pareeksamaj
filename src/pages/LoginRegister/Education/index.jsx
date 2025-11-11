import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import HigherEducation from './HigherEducation';
import Occupation from './Occupation';
import AnnualIncome from './AnnualIncome';


const Education = () => {
  return (
    <PageHeaderWrapper>
      <HigherEducation/>
      <Occupation/>
      <AnnualIncome/>
    </PageHeaderWrapper>
  );
};

export default Education;
