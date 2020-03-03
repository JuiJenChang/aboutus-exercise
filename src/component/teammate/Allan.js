import React, { useState } from 'react';
import './Allan.css';
import allan from '../image/allan.png';

function Allan() {
    const [allanStyle, setAllanStyle] = useState(false);

    const onMouseEnterAllan = () => {
        setAllanStyle(true);
    }
    const onMouseLeaveAllan = () => {
        setAllanStyle(false);
    }

    return (
        <div onMouseEnter={onMouseEnterAllan} onMouseLeave={onMouseLeaveAllan} >
            <img src={allan} className="allan-img" />
            {allanStyle ?
                <div className="allan-info">
                    <p className="allan-info-p1">吴晓军  Allan Wu</p>
                    <div className="allan-info-p2">
                        <p>(CFA、CPA)</p>
                        <p>工作经历：新加坡政府投资公司 、(GIC)和记黄埔</p>
                        <p>学历:麻省理工学院(MIT)房地产硕士德克萨斯大学奥斯丁分校会计硕士北京外交学院学士</p>
                    </div>
                </div> : <div className="allan"><p>吴晓军  Allan Wu</p></div>
            }
        </div>
    );
}

export default Allan;