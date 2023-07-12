import React, { memo } from "react";
import {
  workWorkForce,
  workEmergencyZone,
  workMRMWebsite,
  workFlixRemote,
} from "../../tools/constants";
import WorkBlock from "./WorkBlock";
import styles from "../App.module.css";

const createWorkBlock = (contentArray) => {
  let workBlock = contentArray.map((x) => (
    <WorkBlock
      name={x.project}
      mockupImage={x.mockup}
      link={x.link}
      description={x.description}
      mockupImageText={x.altMockupText}
      role={x.role}
      key={x.project}
      imgWidth={x.imgWidth}
      imgHeight={x.imgHeight}
    ></WorkBlock>
  ));
  return workBlock;
};

const WorkPage = memo(() => {
  return (
    <div className={styles.ContentArea}>
      <h2>Work</h2>
      <div>
        {createWorkBlock([
          workFlixRemote,
          workMRMWebsite,
          workEmergencyZone,
          workWorkForce,
        ])}
      </div>
    </div>
  );
});

WorkPage.type.displayName = "WORK";
export default WorkPage;
