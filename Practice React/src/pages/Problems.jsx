import React from "react";
import { TimerProblem, PureComponent } from "../components/problems";

function Problems() {
  return (
    <>
      <p className="mb-3">Click to Open the problem statements</p>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          Timer Problem
        </summary>
        <div className="collapse-content">
          <TimerProblem></TimerProblem>
        </div>
      </details>
      <details className="collapse bg-base-200 mt-3">
        <summary className="collapse-title text-xl font-medium">
          Concept of Pure Component - Check in code directory at
          src/components/problems/
        </summary>
        <div className="collapse-content">
          <PureComponent />
        </div>
      </details>
    </>
  );
}

export default Problems;
