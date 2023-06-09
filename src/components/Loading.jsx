import React from "react";
import { Skeleton } from "antd";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 4,
        }}
      />
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 4,
        }}
      />
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 4,
        }}
      />
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 4,
        }}
      />
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 4,
        }}
      />
    </div>
  );
}

export default Loading;
