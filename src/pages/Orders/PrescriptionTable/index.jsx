/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect, useParams } from 'umi';
import { Table, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const PrescriptionTable = ({ dispatch, loading, prescription }) => {
  const { userId } = useParams();

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  useEffect(() => {
    dispatch({
      type: 'prescription/getSinglePrescription',
      payload: { query: { userId, kind: 'Prescription' } },
    });
  }, [dispatch, userId]);

  const columns = [
    {
      title: 'Name',
      dataIndex: ['patient', 'name'],
    },
    {
      title: 'Location',
      dataIndex: ['location', 'address_line_1'],
    },
    {
      title: 'Email',
      dataIndex: ['patient', 'email'],
    },
    {
      title: 'Mobile',
      dataIndex: ['patient', 'contact'],
    },
    {
      title: 'View Prescription',
      key: 'action',
      render: () => <Button type="primary">View Prescription</Button>,
    },
  ];

  return (
    <div>
      <PageHeaderWrapper>
        {console.log(prescription)}
        <Table
          columns={columns}
          loading={loading}
          dataSource={prescription || []}
          scroll={{ x: 420 }}
        />

        {/* <Modal
                title="Prescription Detail"
                visible={isModalVisible}
                footer={null}
                centered
                onCancel={handleCancel}
                width={800}
              >
                <img alt="prescription" src={item?.prescription?.url} width={800} />
              </Modal> */}

        {/* <div className="shadow-md overflow-x-auto  overflow-y-auto lg:-mt-7 sm:-mt-7">
          <table className=" w-full  border-gray-200 divide-y bg-white divide-gray-600">
            <thead className="border-b-2">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 font-bold
                    text-left text-sm font-medium text-black-500  tracking-wider"
                >
                  Patient Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-bold
                    text-left text-sm font-medium text-black-500  tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-bold
                     text-left text-sm font-medium text-black-500  tracking-wider"
                >
                  Mobile
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-bold
                    text-left text-sm font-medium text-black-500  tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-bold
                    text-sm font-medium text-black-500  tracking-wider"
                >
                  View Prescription
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black-200">
              <>
                {prescription?.map((pres) => (
                  <tr key={pres?._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                      {pres?.userId?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-black-900">
                        {pres?.userId?.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-black-900">{pres?.userId?.mobile}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                      {pres?.userId?.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button type="primary" onClick={setIsModalVisible}>
                        View Prescrition
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>

          <Modal
            visible={isModalVisible}
            footer={null}
            centered
            onCancel={handleCancel}
            width={800}
          >
            <img src={prescription?.url} alt="prescription" width={800} />
          </Modal>
        </div> */}
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(({ prescription }) => ({
  prescription: prescription.prescription,
}))(PrescriptionTable);
