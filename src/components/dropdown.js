import React, {useState} from 'react';

import './dropdown.scss';

function Dropdown({title, items, multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, useSelection] = useState([]);
    const toggle = () => setOpen(!open)

    function handleOnClick(item) {
    /*     if (!selection.some(current => current.id === item.id)) {
            if(!multiSelect) {
                setSelection([item]);
            }
            else if(multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            letSelection
        }
        } */
    }

    return (
        <div className="dd-wrapper"> 
            <div tabIndex={0} 
            className="dd-header" 
            role="button" 
            onKeyPress={()=> toggle(!open)} 
            onClick={()=> toggle(!open)}>
                <div className="dd-header_title">
                    <p className="dd-header_title--bold"></p>
                </div>
                <div className="dd-header_action">
                    <p>{!open ? '▼' : '▲'}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;