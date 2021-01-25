import React from "react";

import Layout from "../components/layout/Layout";
import Schedules from "../components/schedules/Schedules";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";

const ScheduleContainer = () => {
  window.scrollTo(0, 0);
  return (
    <Layout>
      <SchedulesConsumer>
        {(context) => {
          return (
            <Schedules
              dataSource={context.state.data}
              region={context.state.region.label}
              loading={context.state.loading}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default ScheduleContainer;
