import React from "react";
import {
  TimerProblem,
  PureComponent,
  DelayedChild,
  CustomCollapse,
} from "../components/problems";

function Problems() {
  const problems = [
    {
      label: "Timer Problem",
      component: TimerProblem,
    },
    {
      label: `Concept of Pure Component - Check in code directory at src/components/problems/`,
      component: PureComponent,
    },
    {
      label: `Delayed Child`,
      component: DelayedChild,
    },
  ];
  return (
    <>
      <p className="mb-3">Click to Open the problem statements</p>
      {problems.map((item, index) => {
        const component = <item.component />;
        return (
          <CustomCollapse key={index} label={item.label}>
            {component}
          </CustomCollapse>
        );
      })}
    </>
  );
}

export default Problems;
