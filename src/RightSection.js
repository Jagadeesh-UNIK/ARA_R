import React, { useState } from "react";
import data from "./sample.json";

function RightSection() {
  const [expandedStepIds, setExpandedStepIds] = useState([
    "b15f6a85-4228-4f30-9418-c412e1b86757",
  ]);

  const handleCollapse = (id) => {
    console.log(id);
    const expandedIds = (prevExpandedStepIds) => {
      console.log(prevExpandedStepIds);
      if (prevExpandedStepIds.includes(id)) {
        //If the step is already expanded, remove it from the list
        return prevExpandedStepIds.filter((stepId) => stepId !== id);
      } else {
        //If the step is collapsed, add it to the list
        return [...prevExpandedStepIds, id];
      }
    };

    setExpandedStepIds(expandedIds);
  };

  return (
    <div className="col-md-2.5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <strong>WORKFLOW</strong>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {data.workflow_steps.map((step) => (
              <li key={step.id} className="list-group-item">
                <button
                  type="button"
                  className="btn btn-info d-flex align-items-center"
                  onClick={() => handleCollapse(step.id)}
                >
                  <span className="mr-2">
                    {expandedStepIds.includes(step.id) ? (
                      <strong>-</strong>
                    ) : (
                      <strong>+</strong>
                    )}
                  </span>
                  <strong>{step.name_title}</strong>
                </button>

                {expandedStepIds.includes(step.id) && (
                  <div className="collapse show">
                    <div>
                      {step.params_extra && step.params_extra.name && (
                        <p>
                          <strong>Name: </strong>
                          {step.params_extra.name}
                        </p>
                      )}

                      {/* Displaying the params_extra details */}
                      {step.params_extra &&
                        step.name_title !== "DATASET SELECTION" && (
                          <ul className="mt-2">
                            {Object.entries(step.params_extra).map(
                              ([key, value]) =>
                                key !== "name" && (
                                  <li key={key}>
                                    <strong>{key}:</strong>{" "}
                                    {typeof value === "object"
                                      ? JSON.stringify(value, null, 2)
                                      : value}
                                  </li>
                                )
                            )}
                          </ul>
                        )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
