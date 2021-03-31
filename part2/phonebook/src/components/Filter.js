import React from 'react';
import { Form, Input, Space, Divider } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

//Filter Form
export const Filter = ({ handleFilter, search }) => {
  return (
    <div className="search">
      <Form {...layout} name="nest-messages">
        <Form.Item
          name={['user', 'search']}
          label=" Search By Name:"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Space direction="vertical">
            <Search
              placeholder="input search name"
              value={search}
              onChange={handleFilter}
              style={{ width: 270 }}
            />
          </Space>
        </Form.Item>
      </Form>
    {/*   <Divider dashed style={{ width: 300 }} /> */}
    </div>
  );
};
