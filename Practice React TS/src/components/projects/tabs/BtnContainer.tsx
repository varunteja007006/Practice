import { DataType } from "../../../pages/project pages/Tabs";

function BtnContainer({
  data,
  currentData,
  setCurrentData,
}: {
  data: DataType;
  currentData: number;
  setCurrentData: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {data?.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`btn ${
              currentData === index
                ? `bg-green-400 underline hover:bg-green-400`
                : `bg-slate-300`
            }`}
            onClick={() => setCurrentData(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
