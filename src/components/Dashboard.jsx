import React, { useState } from "react";

const Dashboard = () => {
  const data = [
    {
      exp_name: "Boat",
      amount: "53",
      date: "Mar 31",
      paid_by: "yash",
      borrowed_by: "nandan",
    },
    {
      exp_name: "MVJ Sauces",
      amount: "24",
      date: "Mar 28",
      paid_by: "nandan",
      borrowed_by: "david",
    },
    {
      exp_name: "Veggies",
      amount: "15",
      date: "Mar 11",
      paid_by: "david",
      borrowed_by: "yash",
    },
  ];

  const [paid_by, setPaid_by] = useState(null);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="h-1/4"></div>
        <div className="h-screen">
          {data.map((expense) => {
            return (
              <div key="exp_name" className=" h-20 w-30 border-4 mb-2">
                <div className="flex p-4">
                  <div className="pr-4">{expense.date} </div>
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
                        {expense.paid_by === "nandan"
                          ? "You Lent"
                          : "You Borrowed"}
                      </div>
                      <div className="">A$ {expense.amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
