import React from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { FaMapMarker } from "react-icons/fa";

import "./home.scss";

const mosqueIcon = require("../../assets/mosque.png");

const Home = ({
  subuh,
  zuhur,
  ashar,
  magrib,
  isya,
  date,
  dateRamadhan,
  region,
  loading,
}) => {
  const history = useHistory();
  return (
    <div className='wrapper-home'>
      <div className='card'>
        <p className='text-title-iftar'>Waktu Berbuka</p>
        <p className='text-region-iftar'>
          <FaMapMarker /> {region}
        </p>
        {loading ? (
          <Skeleton count={2} />
        ) : (
          <div>
            <p className='text-date-iftar-hijri'>{dateRamadhan}</p>
            <p className='text-date-iftar'>{date}</p>
          </div>
        )}
        {loading ? (
          <Skeleton height={40} width={"50%"} />
        ) : (
          <p className='text-time-iftar'>{magrib}</p>
        )}
      </div>
      <div className='card' onClick={() => history.push("/doa-buka-puasa")}>
        <img alt='icon' src={mosqueIcon} className='mosque' />
        <p className='text-title-iftar'>Lupa doa berbuka puasa ?</p>
        <p className='text-region-iftar'>Yuk hafalin</p>
      </div>
      <p className='title-schedule'>Jadwal Sholat</p>
      <p className='desc'>
        Jangan sampai dehidrasi membuat anda lupa waktu sholat ya
      </p>
      {loading ? (
        <div className='wrapper-time-skeleton'>
          <Skeleton count={5} height={40} />
        </div>
      ) : (
        <>
          <div className='wrapper-time'>
            <p className='text-time'>Subuh</p>
            <p className='text-date'>{subuh}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Zuhur</p>
            <p className='text-date'>{zuhur}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Ashar</p>
            <p className='text-date'>{ashar}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Magrib</p>
            <p className='text-date'>{magrib}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Isya'</p>
            <p className='text-date'>{isya}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
