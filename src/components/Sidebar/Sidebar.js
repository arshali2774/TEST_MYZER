//importing css for sidebar
import './sidebar.css';

//importing useEffect and use state hook
import { useEffect, useState } from 'react';

//importing items component
import Items from '../Items/Items';

//creating sidebar component
const Sidebar = () => {
  //initializing the state for storing data from api
  const [sidebarData, setSidebarData] = useState([]);

  //using useEffect to fetch data from api
  useEffect(() => {
    fetch('https://mocki.io/v1/a38a9436-2293-4886-9a1b-407079999f13')
      .then((res) => res.json())
      .then((data) => setSidebarData(data))
      .catch((err) => console.error(err));
  }, []);

  //returning the jsx element
  return (
    <aside className='sidebar'>
      {/* mapping on the array which was fetched from api and stored in "sidebarData" state */}
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
      {/* passing the data as  props */}
    </aside>
  );
};
export default Sidebar;
