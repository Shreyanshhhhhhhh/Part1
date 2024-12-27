import React, { useState } from "react";
import "./Top.css"; // Import the CSS file

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      Batch: 1,
      CompanyName: "TCS",
      OfferLetter: "https://www.tcs.com",
      Verified: "Yes",
      Selected: true,
    },
    {
      id: 2,
      Batch: 1,
      CompanyName: "TCS",
      OfferLetter: "https://www.google.com",
      Verified: "Yes",
      Selected: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, Selected: !row.Selected } : row
      )
    );
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Batch</th>
              <th>Company Name</th>
              <th>Offer Letter</th>
              <th>Verified</th>
              <th>Selected</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.Batch}</td>
                <td>{row.CompanyName}</td>
                <td>
                  <a
                    href={row.OfferLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                <td>{row.Verified}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.Selected}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button className="bt">&#x2713; VERIFY SELECTED</button>
      </div>
    </>
  );
};

export default Table;