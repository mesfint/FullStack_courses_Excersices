import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};

export const PersonForm = ({
  handleInputName,
  handleInputNumber,
  handleSubmit,
  newName,
  newNumber,
}) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="input contact name"
            value={newName}
            onChange={handleInputName}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <Input
            placeholder="input phone number"
            value={newNumber}
            onChange={handleInputNumber}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Add Contact
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
