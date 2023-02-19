import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined, SelectOutlined } from '@ant-design/icons';
import { useState } from 'react'

const items = [
    {
      label: 'Mail',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'AppStore',
      key: 'app',
      icon: <AppstoreOutlined />
    },
    {
      label: 'Settings',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Antd
        </a>
      ),
      key: 'alipay',
      icon: <SelectOutlined />
    },
];

export const NavMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }

  return (
    <Menu onClick={onClick} mode="horizontal" items={items} />
  );
}
