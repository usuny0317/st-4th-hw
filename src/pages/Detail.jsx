import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  const data = [
    { id: 1, text: "1입니다" },
    { id: 2, text: "2입니다" },
    { id: 3, text: "3입니다" },
  ];

  return (
    <div>
      {data.map((d) => {
        return <div key={d.id}>데이터 값: {d.text} </div>;
      })}
    </div>
  );
};

export default Detail;
