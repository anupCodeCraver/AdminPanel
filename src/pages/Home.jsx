import React from 'react';
import Charts from '../components/chart/Charts';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import './home.css';
import {data} from '../../src/dummyData'
import WidgetLg from '../components/widgetLg/WidgetLg';
import WidgetSm from '../components/widgetSm/WidgetSm';


export default function Home() {
  return (
    <div className='container'>
     <FeaturedInfo/>
     <Charts data={data} title="User Analytics" dataKey="Active User" grid/>
     <div className="userSmallLarg">
    <WidgetSm/>
      <WidgetLg/>
     </div>
    </div>
  )
}
