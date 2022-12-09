import React from "react";
import ReactDOM from "react-dom";
// import { BarChart } from "react-d3-components";
//import { Legend } from 'react-d3-legends';
// import "./styles.css";

const data = [
    {
        label: "Expert",
        values: [
            { x: "Javascript", y: 100 },
            { x: "HTML5", y: 40 },
            { x: "ReactJS", y: 20 },
            { x: "Angular", y: 10 }
        ]
    },
    {
        label: "Intermediate",
        values: [
            { x: "Javascript", y: 60 },
            { x: "HTML5", y: 80 },
            { x: "ReactJS", y: 50 },
            { x: "Angular", y: 30 }
        ]
    },
    {
        label: "Beginner",
        values: [
            { x: "Javascript", y: 60 },
            { x: "HTML5", y: 80 },
            { x: "ReactJS", y: 50 },
            { x: "Angular", y: 90 }
        ]
    }
];

export function BD3() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <BarChart
                data={data}
                width={400}
                height={400}
                margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
            />

            {/*         <Legend
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
          shape={customPointShape}
        /> */}

            <div id="five_day_table">
                <h3>Web Technology Skill Proficiency</h3>
                <span className="one">Expert</span>
                <span className="two">Intermediate</span>
                <span className="three">Beginner</span>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
