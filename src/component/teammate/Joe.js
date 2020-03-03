import React, { useState } from 'react';
import './Joe.css';
import joe from '../image/joe.png';

function Joe() {
    const [joeStyle, setJoeStyle] = useState(false);

    const onMouseEnterJoe = () => {
        setJoeStyle(true);
    }
    const onMouseLeaveJoe = () => {
        setJoeStyle(false);
    }

    return (
        <div onMouseEnter={onMouseEnterJoe} onMouseLeave={onMouseLeaveJoe} >
            <img src={joe} className="joe-img" />
            {joeStyle ?
                <div className="joe-info">
                    <p className="joe-info-p1">周寅生 Joe Chou</p>
                    <div className="joe-info-p2">
                        <p>工作经历：晤桥亚洲、腾讯、土豆网</p>
                        <p>学历：清华大学计算机科学学士</p>
                    </div>
                </div> : <div className="joe"><p>周寅生 Joe Chou</p></div>
            }
        </div>
    );
}

export default Joe;