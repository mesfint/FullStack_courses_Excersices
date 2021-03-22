import React from 'react';
import { DeleteFilled } from '@ant-design/icons';
import { List, Avatar } from 'antd';

export const Note = ({ note, notes, id, date, deleteNote }) => {
  const handleDelete = (id) => {
    deleteNote(note.id);
  };
  return (
    <>
      <List
        itemLayout="horizontal"
        size="large"
        dataSource={notes}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src="https://via.placeholder.com/150

                C/O https://placeholder.com/"
                >
                  {item.id}
                </Avatar>
              }
              title={<a href="https://ant.design"> {item.date}</a>}
              description={item.content}
            />

            <DeleteFilled onClick={handleDelete} />
          </List.Item>
        )}
      />
    </>
  );
};
