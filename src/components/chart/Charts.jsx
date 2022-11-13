import React from 'react';
import './charts.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title,data,dataKey,grid}) {
    
    return (
        <div className='ChartConatiner'>
            <h6 className="chartTitle">{title}</h6>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
<XAxis dataKey={dataKey} stroke="#5550bd"/>
<Line type='monotone' dataKey='Active User' stroke="#5550bd"/>
<Tooltip/>
{grid && <CartesianGrid stroke='#84808034' strokeDasharray='5 5'/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
