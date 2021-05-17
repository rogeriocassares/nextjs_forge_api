/*global STAGE_BASEURL*/
/*eslint no-unused-vars: ["warn", { "vars": "local" }]*/

import React from "react";
// import { Route, Switch } from "react-router-dom";
import Link from 'next/link'

// import ReferenceApp from "./ReferenceApp.jsx";
// import Dot from "./Dot.jsx";
// import Heatmap from "./Heatmap.jsx";
// import EngineSimulation from "./EngineSimulation.jsx";
// import TexturedHeatMap from "./TexturedHeatmap.jsx";
// import AnimatedSprites from "./AnimatedSprites.jsx";
// import StructureInfo from "./StructureInfo.jsx";
// import Navisworks from "./Navisworks.jsx";
// import CustomPage from "./CustomPage.jsx";


import Viewer from "./Viewer.tsx";

/**
 * 
 * @param {Object} props 
 * @param {Object} props.appData Data passed to the application.
 * @param {("AutodeskStaging"|"AutodeskProduction")} props.appData.env Forge API environment
 * @param {string} props.appData.docUrn Document URN of model
 * @param {string} props.appData.adapterType Corresponds to Data Adapter used to query data. i.e - synthetic, azure etc.
 * @param {"derivativeV2"|"derivativeV2_EU"|"modelDerivativeV2"|"fluent"|"D3S"|"D3S_EU"} [props.appData.api] Please refer to LMV documentation for more information.
 * @param {string} [props.appData.dataStart] Start date for provided CSV data in ISO string format.
 * @param {string} [props.appData.dataEnd] End date for provided CSV data in ISO string format.
 * @param {Object} props.appContext Contains base urls used to query assets, LMV, data etc.
 * @param {string} [props.appContext.dataUrl] The base url used to configure a specific {@link DataAdapter}
 */
function AutodeskForgeApp(props) {
  const env = "local";
  const docUrn = "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXZmcXBhemxrdDFtMTBwYnFkY2h0cGt6cGVpcXRrd3ctaW10L2ltdF8wMF8wMS5ydnQ";
  const api = "derivativeV2";

  return (
    <div className="outer-container">
      {/* <ReferenceApp {...props} /> */} 
      <Viewer
        env={env}
        docUrn={docUrn}
        api={api}
        // onViewerInitialized={onViewerInitialized}
        // onModelLoaded={onModelLoaded}
        // getToken={getToken}
        // extensions={{ "Autodesk.Viewing.ZoomWindow": {}, "Autodesk.DataVisualization": {} }}
        // geomIndex={props.geomIndex}
      />

          {/* <Switch>
              <Route path="/sample">
                  <ReferenceApp {...props} />
              </Route>
              <Route path="/dot">
                  <Dot {...props} />
              </Route>
              <Route path="/heatmap">
                  <Heatmap {...props} />
              </Route>
              <Route path="/engine">
                  <EngineSimulation {...props} />
              </Route>
              <Route path="/structure">
                  <StructureInfo {...props} />
              </Route>
              <Route path="/texturedmap">
                  <TexturedHeatMap {...props} />
              </Route>
              <Route path="/animation">
                  <AnimatedSprites {...props} />
              </Route>
              <Route path="/navisworks">
                  <Navisworks {...props} />
              </Route>
              <Route path="/app">
                  <CustomPage {...props} />
              </Route>
              <Route path="/">
                  <ReferenceApp {...props} />
              </Route>
          </Switch> */}
    </div>
  );
}

export default AutodeskForgeApp;