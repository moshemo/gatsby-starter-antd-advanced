import React from "react"
import { Divider, Tabs, Table, Tag } from "antd"

import AdminLayout from "Layouts/admin"

const { Column, ColumnGroup } = Table
const { TabPane } = Tabs

const AdminNewsPage = () => {
  return (
    <AdminLayout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Feeds" key="1">
          <Table dataSource={data}>
            <ColumnGroup title="Name">
              <Column
                title="First Name"
                dataIndex="firstName"
                key="firstName"
              />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a>Invite {record.lastName}</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              )}
            />
          </Table>
        </TabPane>
        <TabPane tab="List" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Edit" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </AdminLayout>
  )
}


const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default AdminNewsPage
