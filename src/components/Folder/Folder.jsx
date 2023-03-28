import { useState } from 'react';
import './Folder.css'

function Folder({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={handleClick}>
        <h2>{header}</h2>
        <span className={`icon-${isOpen ? 'close' : 'open'}`}>+</span>
      </div>
      <div className="accordion-content">
        <p className='content'>{content}</p>
      </div>
    </div>
  );
}

export default Folder;