import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'antd';
import { useParams, history } from 'umi';
import { EditOutlined, PrinterOutlined } from '@ant-design/icons';
import PrintPreview from '../PrintPreview';

const PrintMonitoringForm = () => {
  const componentRef = useRef();
  const { type, id } = useParams();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleEdit = () => {
    history.push(`/form/${type}/${id}/edit?data=editForm`);
  };
  return (
    <div className="container mx-auto">
      <div className=" flex justify-end" style={{ marginRight: '12.6rem' }}>
        <div>
          <Button onClick={handlePrint} type="primary" size="medium">
            <PrinterOutlined /> Print
          </Button>
        </div>

        <div className="ml-3">
          <Button onClick={handleEdit} type="primary" size="medium">
            <EditOutlined /> Edit
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <PrintPreview reff={componentRef} />
      </div>
    </div>
  );
};

export default PrintMonitoringForm;
