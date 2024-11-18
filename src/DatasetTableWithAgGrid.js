import React, { useState } from "react";
import RightSection from "./RightSection";
import Data from "./Data";
import Summary from "./Summary";
import Logs from "./Logs";

const DatasetTableWithAgGrid = () => {
  const [tab, setTab] = useState("data");

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div style={{ display: "flex", width: "100%" }}>
          {/* Data Section */}
          <div style={{ flex: "0 0 80%" }}>
            <div
              class="d-flex justify-content-between"
              style={{ paddingBottom: "10px" }}
            >
              <div>
                <button
                  type="button"
                  class={
                    tab === "data"
                      ? "btn btn-primary active"
                      : "btn btn-default active"
                  }
                  onClick={() => setTab("data")}
                >
                  Data
                </button>
                <button
                  type="button"
                  class={
                    tab === "summary"
                      ? "btn btn-primary active"
                      : "btn btn-default active"
                  }
                  onClick={() => setTab("summary")}
                >
                  Summary
                </button>
                <button
                  type="button"
                  class={
                    tab === "logs"
                      ? "btn btn-primary active"
                      : "btn btn-default active"
                  }
                  onClick={() => setTab("logs")}
                >
                  Logs
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class={
                    tab === "logs" ? "btn btn-primary active" : "btn disabled"
                  }
                  style={{ marginRight: "20px" }}
                >
                  Download
                </button>
              </div>
            </div>
            {tab === "data" && <Data />}
            {tab === "summary" && <Summary />}
            {tab === "logs" && <Logs />}
          </div>

          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default DatasetTableWithAgGrid;
