import React, { useState } from "react";
import ReportCanvas from "./ReportCanvas";
import LayoutCanvas from "./LayoutCanvas";
import PlaceholderPicker from "./PlaceholderPicker";
import DataSourceBinder from "./DataSourceBinder";
import ReportRenderer from "./ReportRenderer";

const ReportDesigner = () => {
  const [layout, setLayout] = useState([]);
  const [dataSource, setDataSource] = useState(null);

  return (
    <div className="report-designer">
      <PlaceholderPicker onAdd={setLayout} />
      <LayoutCanvas layout={layout} setLayout={setLayout} />
      <DataSourceBinder setDataSource={setDataSource} />
      <ReportCanvas layout={layout} dataSource={dataSource} />
      <ReportRenderer layout={layout} dataSource={dataSource} />
    </div>
  );
};

export default ReportDesigner;
