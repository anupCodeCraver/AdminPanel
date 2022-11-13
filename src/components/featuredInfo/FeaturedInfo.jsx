import { ArrowDownwardOutlined,ArrowUpwardOutlined } from '@mui/icons-material';
import React from 'react';
import './featuredinfo.css'

export default function FeaturedInfo() {
    return (
        <div className='featuredSection'>
            <div className="featuredInfoWrapper">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer"><span className="featuredMony">$2,413</span><span className="featuredMoneyRate">-11.4<ArrowDownwardOutlined className='featuredArrow negative'/></span></div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredInfoWrapper">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer"><span className="featuredMony">$4,100</span><span className="featuredMoneyRate">-1.4<ArrowDownwardOutlined className='featuredArrow negative'/></span></div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredInfoWrapper">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer"><span className="featuredMony">$3,212</span><span className="featuredMoneyRate">+2.4<ArrowUpwardOutlined className='featuredArrow '/></span></div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
