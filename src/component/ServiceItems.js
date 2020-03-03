import React from 'react';
import './ServiceItem.css';
import img1 from './image/img1.png';
import img2 from './image/img2.png';
import img3 from './image/img3.png';

function ServiceItems() {
    return (
        <section className="service">
            <p className="service-p-1">晤桥亚洲是地产界兼具高度和深度的金融科技服务团队。我们的服务包括：</p>
            <div className="service-items">
                <img src={img1} className="service-img1" />
                <p className="service-item-p1">投资与估值大数据SaaS平台</p>
                <img src={img2} className="service-img2" />
                <p className="service-item-p2">投资与投后数字化BI管理系统</p>
                <img src={img3} className="service-img3" />
                <p className="service-item-p3">金融地产管理咨询与资产方案</p>
            </div>
            <p className="service-p-2">晤桥亚洲团队结合资本与地产双视角，长期为企业搭建与优化与国际接轨的资产管理体系，
                通过国际先进的AMSS资产管理BI系统进行投资与投后管理体系落地，实现数字化转型。
                AMSS大数据SaaS平台协助金融与地产客户即时获取项目投资与估值分析数据，驱动企业走向大数据AI管理。
                晤桥亚洲长期为万科地产、招商蛇口、宝龙地产、阳光新业、高和资本、中粮地产、复星等国内地产和金融企业服务。
            </p>
        </section>
    );
}

export default ServiceItems;