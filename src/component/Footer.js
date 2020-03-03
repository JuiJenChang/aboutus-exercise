import React from 'react';
import './Footer.css';
import location from './image/location.png';
import wechat from './image/wechat.png';
import phone from './image/phone.png';
import email from './image/e-mail.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="place">
                <p className="singapore">Singapore Office</p>
                <img src={location} className="sgp-location" />
                <p className="singapore-place">100 Peck Seah Street，Unit 11-18 Singapore 079333</p>
                <p className="shenzhen">Shenzhen Office</p>
                <img src={location} className="sz-location" />
                <p className="shenzhen-place">深圳市南山区工业三路1号招商局港口大厦六楼607</p>
            </div>
            <div className="content-1">
                <p>晤桥亚洲</p>
                <a href="#">关于我们</a>
                <a href="#">联系我们</a>
            </div>
            <div className="content-2">
                <p>方案介绍</p>
                <a href="#">大数据</a>
                <a href="#">数字化BI管理</a>
                <a href="#">资产战略</a>
            </div>
            <img src={wechat} className="wechat" />
            <img src={phone} className="phone" />
            <img src={email} className="email" />
            <p className="copyright">Copyright © Bridge5 Asia Pte Ltd 2020</p>
            <p className="icp">粤 ICP备18005716 | 声明</p>
        </footer>
    );
}

export default Footer;