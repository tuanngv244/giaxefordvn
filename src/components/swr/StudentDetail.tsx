import React from "react";
import useSWR from "swr";

type StudentDetailProps = {
  studentId?: string;
};

const StudentDetail = (props: StudentDetailProps) => {
  const MILLISECOND_PER_HOUR = 60 * 60 * 1000;
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${props?.studentId}`,
    null,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000 ?? MILLISECOND_PER_HOUR, /// trong vòng tgian k fetch dù cho có click, cache dữ liệu
    }
  );
  console.log("data", data);
  return (
    <div>
      {data?.name ?? "---"}{" "}
      <button
        onClick={() => {
          mutate({ name: "Van Tuan!" }, false);
        }}
      >
        Mutate
      </button>{" "}
    </div>
  );
};

export default StudentDetail;
