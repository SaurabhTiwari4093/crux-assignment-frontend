import React from 'react';
import ChartContainer from './components/chartContainer';

export default function Home({ widgetList }) {
    return (
        <div className="pl-16 pt-16 h-full overflow-auto">
            <div className="p-4 flex gap-4 flex-wrap">
                {widgetList.map((value, key) => (
                    <div key={key}>
                        <ChartContainer chartType={value.chartType} colorMode={value.colorMode}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
