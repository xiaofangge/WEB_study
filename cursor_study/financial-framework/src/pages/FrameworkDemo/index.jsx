import React, { useState } from 'react';
import { Table, Input, Button, Tabs, Select, Badge, Space, Avatar, Tag, Tooltip } from 'antd';
import { DownOutlined, SearchOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import './index.css';

const { TabPane } = Tabs;
const { Option } = Select;

const FrameworkDemo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [activeTab, setActiveTab] = useState('1');

  // 表格列定义
  const columns = [
    {
      title: '公司/框架名称',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          {record.expandable && <DownOutlined style={{ color: '#1890ff' }} />}
          <span className="company-name">{text}</span>
          {record.code && <span style={{ color: '#999' }}>{record.code}</span>}
        </Space>
      ),
    },
    {
      title: <Space>报告期 <DownOutlined style={{ fontSize: 12 }} /></Space>,
      dataIndex: 'reportPeriod',
      key: 'reportPeriod',
    },
    {
      title: <Space>创建人/创建时间 <DownOutlined style={{ fontSize: 12 }} /></Space>,
      dataIndex: 'creator',
      key: 'creator',
      render: (text, record) => (
        <Space>
          {record.avatar ? (
            <Avatar src={record.avatar} size="small" />
          ) : (
            <Badge color="#1890ff" text="系统" />
          )}
          {record.createTime}
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <Space>
          <Badge color="orange" />
          <span>草稿</span>
        </Space>
      ),
    },
    {
      title: <Space>所属公司 <DownOutlined style={{ fontSize: 12 }} /></Space>,
      dataIndex: 'company',
      key: 'company',
      render: () => '招商证券',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">发布</Button>
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small">复制</Button>
          <Button type="link" size="small" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  // 模拟数据
  const data = [
    {
      key: '1',
      name: '万科地产',
      code: '000002',
      expandable: true,
      children: [
        {
          key: '1-1',
          name: '万科地产-半年度报告框架-自定义版本内容',
          reportPeriod: '第一季度',
          creator: '系统',
          createTime: '2020/04/30 00:00:00',
          status: '草稿',
          company: '招商证券',
        },
        {
          key: '1-2',
          name: '万科地产-半年度报告框架-自定义版本内容',
          reportPeriod: '半年度',
          creator: '系统',
          createTime: '2020/04/30 00:00:00',
          status: '草稿',
          company: '招商证券',
        },
        {
          key: '1-3',
          name: '万科地产-半年度报告框架-自定义版本内容',
          reportPeriod: '第三季度',
          creator: '系统',
          createTime: '2020/04/30 00:00:00',
          status: '草稿',
          company: '招商证券',
        },
        {
          key: '1-4',
          name: '万科地产-半年度报告框架-自定义版本内容',
          reportPeriod: '年度',
          creator: 'Roland YU',
          createTime: '2020/04/30 00:00:00',
          status: '草稿',
          company: '招商证券',
          avatar: 'https://joeschmoe.io/api/v1/random',
        },
      ],
    },
    {
      key: '2',
      name: '新城控股',
      expandable: true,
    },
    {
      key: '3',
      name: '光大银行',
      code: '601155',
      expandable: true,
    },
    {
      key: '4',
      name: '中国石油',
      code: '601155',
      expandable: true,
    },
  ];

  // 行选择配置
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  // 分页配置
  const paginationProps = {
    total: 500,
    current: 4,
    pageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `共 ${total} 项`,
    pageSizeOptions: ['20', '50'],
  };

  return (
    <div className="framework-container">
      {/* 顶部导航栏 */}
      <div className="header">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" className="logo-img" />
          <span className="logo-text">光语金帆</span>
        </div>
        <div className="user-info">
          <Avatar>R</Avatar>
          <span className="username">Roland YU</span>
        </div>
      </div>

      {/* 搜索区域 */}
      <div className="search-area">
        <Input.Group compact style={{ width: '60%' }}>
          <Select defaultValue="框架名称" style={{ width: '20%' }}>
            <Option value="框架名称">框架名称</Option>
          </Select>
          <Input 
            style={{ width: '80%' }} 
            placeholder="请输入框架名中关键词" 
            prefix={<SearchOutlined />} 
          />
        </Input.Group>
        <Select 
          placeholder="选择报告期" 
          style={{ width: '20%', marginLeft: '16px' }}
        >
          <Option value="q1">第一季度</Option>
          <Option value="half">半年度</Option>
          <Option value="q3">第三季度</Option>
          <Option value="year">年度</Option>
        </Select>
        <Button type="primary" style={{ marginLeft: '16px' }}>查询</Button>
        <Button style={{ marginLeft: '8px' }}>重置</Button>
      </div>

      {/* 标签页区域 */}
      <div className="content-area">
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab={<span>草稿 <Tag>{99}</Tag></span>} key="1">
            <div className="table-toolbar">
              <Space>
                <span className="selected-count">选中{selectedRowKeys.length}条</span>
                <Button disabled={!selectedRowKeys.length}>批量发布</Button>
                <Button disabled={!selectedRowKeys.length}>批量删除</Button>
              </Space>
              <Button type="primary" icon={<UploadOutlined />}>
                上传框架
              </Button>
            </div>
            <Table 
              rowSelection={rowSelection}
              columns={columns} 
              dataSource={data} 
              pagination={paginationProps}
              className="custom-table"
            />
          </TabPane>
          <TabPane tab={<span>已发布 <Tag>{68}</Tag></span>} key="2">
            {/* 已发布内容 */}
          </TabPane>
          <TabPane tab={<span>已删除 <Tag>{10}</Tag></span>} key="3">
            {/* 已删除内容 */}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default FrameworkDemo; 