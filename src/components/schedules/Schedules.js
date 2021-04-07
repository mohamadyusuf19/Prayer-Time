import React from "react";

import "./schedules.scss";
import { FaMapMarker, FaRegCalendarAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import TableManual from "../table/Table";
import { formatMonth } from "../../utils/FormatDate";

const Schedules = ({ dataSource, region, loading }) => {
  const date = new Date();
  return (
    <div className='wrapper-schedules'>
      <p className='title-schedule'>Jadwal Sholat</p>
      <p className='text-region-iftar'>
        <FaRegCalendarAlt /> Bulan {formatMonth()[date.getMonth()]} Tahun{" "}
        {date.getFullYear()}
      </p>
      <p className='text-region-iftar'>
        <FaMapMarker /> {region}
      </p>
      {loading ? (
        <Skeleton width={"100%"} height={400} />
      ) : (
        <div className='table'>
          <TableManual data={dataSource} />
        </div>
      )}
    </div>
  );
};

export default Schedules;
