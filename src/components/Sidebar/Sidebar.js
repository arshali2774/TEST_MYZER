import './sidebar.css';
import { useEffect, useState } from 'react';

import Items from '../Items/Items';

const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState([]);
  useEffect(() => {
    fetch('https://mocki.io/v1/a38a9436-2293-4886-9a1b-407079999f13')
      .then((res) => res.json())
      .then((data) => setSidebarData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <aside className='sidebar'>
      {sidebarData.map((x) => (
        <Items
          key={x.label}
          label={x.label}
          url={x.url}
          bg={x.bg}
          hover={x.hover}
          icon={x.icon}
          hoverIcon={x.hoverIcon}
        />
      ))}
    </aside>
  );
};
export default Sidebar;
