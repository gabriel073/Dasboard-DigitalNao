import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

export default class Graphic extends PureComponent {
    render() {
        return (
            <>
                <div className="w-full md:w-[30rem] h-full bg-white p-4 mx-4 rounded-xl border border-gray-200 flex flex-col shadow-xl dark:text-white dark:bg-[#16193A]">
                    {/* <div className="w-[30rem] h-[40rem]  bg-white p-4 mx-4 rounded-xl border border-gray-200 flex  flex-col shadow-xl"> */}
                    <div className=" flex justify-between">
                        <p className=" flex flex-col text-lg">
                            <strong>Today's trends  </strong>
                            <p className=" text-xs"> 30 sept 2021</p>
                        </p>
                        <div className=" flex flex-row items-end">
                            <div className="w-[8rem] text-xs">
                                <span className="divider divider-end divider-secondary w-[6rem]"> Today </span>
                                <span className="divider divider-end divider-success "> Yesterday </span>

                            </div>
                        </div>
                    </div>

                    <div className='w-full flex-1 text-xs'>
                        <ResponsiveContainer width="100%" height="100%" >
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 10,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div >
            </>
        );
    }
}

