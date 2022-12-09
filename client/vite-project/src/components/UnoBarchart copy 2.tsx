import React from 'react';
import Plot from 'react-plotly.js';

export class Barchart1 extends React.Component {
    render() {
        return (
            <>
                <h1> Primer </h1>
                <Plot
                    data={[
                        {
                            x: ['giraffes', 'orangutans', 'monkeys'],
                            y: [20, 14, 23],
                            type: 'bar'
                        }
                    ]}
                    layout={{ width: 790, height: 770, title: 'A Fancy Plot' }}
                />
            </>
        );
    }
}
