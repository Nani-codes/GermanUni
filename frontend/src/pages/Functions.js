import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Card from "../templates/Card";
import Pagination from "../templates/pagination";

import Unis from "../data/Universities.json";
// let Unis = require('./data/Universities.json')

function Functions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("Universities.json")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="App">
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className = "cards">
        {currentRecords.map((e) => (
        <Card
          imageURL={e.Logo}
          title={e.University_Name}
          degree={e.Course_Sub_Type}
          subject={e.Course_Name}
          Course_Link={e.Course_Link}
          Application_Link={e.Application_Link}
          City={e.City}
          State={e.State}
          Course_Ranking={e.Course_Ranking}
          Duration={e.Duration}
          German_Ranking={e.German_Ranking}
          Teaching_Language={e.Teaching_Language}
          Tuition_Fee={e.Tuition_Fee}
          Type_of_University={e.Type_of_University}
        />
      ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Functions;