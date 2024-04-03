import { useState } from "react";
import AddButton from "./AddButton";
import { data, capitalizeFirstLetter } from "./lib/Data.js";

const Dashboard = () => {
  const [currData, setCurrData] = useState(data);
  const updateData = (new_data) => {
    setCurrData(new_data);
    data.push(new_data);
  };
  return (
    <>
      <div className="h-max flex flex-col">
        <div className="h-inherit">
          {currData.reverse().map((expense) => {
            return (
              <div
                key={expense.exp_name}
                className=" h-20 w-30 border-slate-300 border-4 rounded-lg mb-2"
              >
                <div className="flex p-4">
                  <div className="pr-4">{expense.date}</div>
                  <div className="flex justify-between items-center w-screen">
                    <div className="pl-4">{expense.exp_name}</div>
                    <div
                      className="flex flex-col items-end pr-4"
                      style={
                        expense.paid_by == "nandan"
                          ? { color: "rgb(74 222 128)" }
                          : { color: "rgb(248 113 113)" }
                      }
                    >
                      <div>
                        {`${capitalizeFirstLetter(
                          expense.paid_by
                        )} Paid | ${capitalizeFirstLetter(
                          expense.borrowed_by
                        )} borrowed`}
                      </div>
                      <div>A$ {expense.amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <AddButton updateData={updateData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
