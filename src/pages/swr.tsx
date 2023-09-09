import { authApi } from "@/api-client";
import StudentDetail from "@/components/swr/StudentDetail";
import React, { useState } from "react";

type Props = {};

const SWR = (props: Props) => {
  const [a, setA] = useState([1, 1, 1]);
  return (
    <div>
      <h1>SWR Page</h1>
      <button
        onClick={() => {
          setA((a) => [...a, 1]);
        }}
      >
        add detail
      </button>
      <ul>
        {a?.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId={"lea319jollj7y1ru"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SWR;
