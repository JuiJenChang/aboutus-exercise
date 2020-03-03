import React, { useState } from 'react';
import './Wang.css';
import wang from '../image/wang.png';

function Wang() {
    const [wangStyle, setWangStyle] = useState(false);

    const onMouseEnterWang = () => {
        setWangStyle(true);
    }
    const onMouseLeaveWang = () => {
        setWangStyle(false);
    }

    return (
        <div onMouseEnter={onMouseEnterWang} onMouseLeave={onMouseLeaveWang} >
            <img src={wang} className="wang-img" />
            {wangStyle ?
                <div className="wang-info">
                    <p className="wang-info-p1">王亮 Liang Wang</p>
                    <div className="wang-info-p2">
                        <p>CFA</p>
                        <p>工作经历：晤桥亚洲、新加坡国立大学</p>
                        <p>学历：新加坡国立大学化学硕士、兰州大学学士</p>
                    </div>
                </div> : <div className="wang"><p>王亮 Liang Wang</p></div>
            }
        </div>
    );
}

export default Wang;