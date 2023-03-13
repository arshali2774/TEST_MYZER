//importing useState hook from react
import { useState } from 'react';

//importing css files for items
import './items.css';

//creating a items component
const Items = ({ label, url, bg, hover, icon, hoverIcon }) => {
  //default background color
  const defaultColorBg = { background: 'transparent' };

  //background color on hover
  const bgColor = { background: ` ${hover} ` };

  //default color for icon
  const defaultColorIcon = { color: ` ${hover} ` };

  //color on hover for icon
  const iconColor = { color: ` ${bg} ` };

  //state to change background color on mouse enter
  const [bgColorHover, setBgColorHover] = useState(defaultColorBg);

  //state to change icon color on mouse enter
  const [iconColorHover, setIconColorHover] = useState(defaultColorIcon);

  //returning the jsx element
  return (
    <div className='item'>
      {/* making the icon and backgroundColor change on hover  */}
      <div
        className='icon'
        onMouseEnter={() => setBgColorHover(bgColor)}
        onMouseLeave={() => setBgColorHover(defaultColorBg)}
        style={bgColorHover}
      >
        <a href={`${url}`}>
          <i
            className={`${hoverIcon}`}
            onMouseEnter={() => setIconColorHover(iconColor)}
            onMouseLeave={() => setIconColorHover(defaultColorIcon)}
            style={iconColorHover}
          ></i>
        </a>
      </div>
      <div className='icon-name'>{label}</div>
    </div>
  );
};
export default Items;
