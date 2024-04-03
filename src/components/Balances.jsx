import { useState, useEffect } from "react";
// import { data } from "./lib/Data";
const Balances = () => {
  let user = "nandan";
  let data;
  const [paidForExpensesTotal, setPaidForExpensesTotal] = useState({
    david: 0,
    nandan: 0,
    yash: 0,
  });
  const [borrowedExpensesTotal, setBorrowedExpensesTotal] = useState({
    david: 0,
    nandan: 0,
    yash: 0,
  });
  const [expensesTracker, setExpensesTracker] = useState({
    david_nandan: 0,
    david_yash: 0,
    nandan_david: 0,
    nandan_yash: 0,
    yash_nandan: 0,
    yash_david: 0,
  });
  // const [userBalance, setUserBalance] = useState(0);

  let userBalance =
    paidForExpensesTotal?.nandan - borrowedExpensesTotal?.nandan;

  //Use Effect
  useEffect(() => {
    getData();
  }, [data]);

  //Get Data
  const getData = async () => {
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/splitwise_expenses/records"
    );
    data = await res.json();
    data = data.items;
    console.log("🚀 ~ getData ~ data:", data);
    calculateExpenses();
  };

  //Calculate Expenses
  const calculateExpenses = async () => {
    console.log("Inside Function");
    data?.map((expense) => {
      // Paid By Logic
      if (expense.paid_by == "nandan") {
        let nandan_paidfor =
          paidForExpensesTotal.nandan + parseInt(expense.amount);
        setPaidForExpensesTotal((prevState) => ({
          ...prevState,
          nandan: nandan_paidfor,
        }));
        if (expense.borrowed_by == "david") {
          nandan_paidfor =
            expensesTracker.nandan_david + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            nandan_david: nandan_paidfor,
          }));
        } else if (expense.borrowed_by == "yash") {
          nandan_paidfor =
            expensesTracker.nandan_yash + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            nandan_yash: nandan_paidfor,
          }));
        }
      }
      if (expense.paid_by == "david") {
        let david_paidfor =
          paidForExpensesTotal.david + parseInt(expense.amount);
        setPaidForExpensesTotal((prevState) => ({
          ...prevState,
          david: david_paidfor,
        }));
        if (expense.borrowed_by == "nandan") {
          david_paidfor =
            expensesTracker.david_nandan + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            david_nandan: david_paidfor,
          }));
        } else if (expense.borrowed_by == "yash") {
          david_paidfor = expensesTracker.david_yash + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            david_yash: david_paidfor,
          }));
        }
      }
      if (expense.paid_by == "yash") {
        let yash_paidfor = paidForExpensesTotal.yash + parseInt(expense.amount);
        setPaidForExpensesTotal((prevState) => ({
          ...prevState,
          yash: yash_paidfor,
        }));
        if (expense.borrowed_by == "nandan") {
          yash_paidfor = expensesTracker.yash_nandan + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            yash_nandan: yash_paidfor,
          }));
        } else if (expense.borrowed_by == "david") {
          yash_paidfor = expensesTracker.yash_david + parseInt(expense.amount);
          setExpensesTracker((prevState) => ({
            ...prevState,
            yash_david: yash_paidfor,
          }));
        }
      }

      // Borrowed By Logic
      if (expense.borrowed_by == "nandan") {
        setBorrowedExpensesTotal((prevState) => {
          let nandan_borrowed = prevState.nandan + parseInt(expense.amount);
          return {
            ...prevState,
            nandan: nandan_borrowed,
          };
        });
      }
      if (expense.borrowed_by == "david") {
        setBorrowedExpensesTotal((prevState) => {
          let david_borrowed =
            borrowedExpensesTotal.david + parseInt(expense.amount);
          return {
            ...prevState,
            david: david_borrowed,
          };
        });
      }
      if (expense.borrowed_by == "yash") {
        setBorrowedExpensesTotal((prevState) => {
          let yash_borrowed =
            borrowedExpensesTotal.yash + parseInt(expense.amount);
          return {
            ...prevState,
            yash: yash_borrowed,
          };
        });
      }
    });
  };

  return (
    <>
      <div className="h-1/4 bg-gray-400 p-4">
        {/* <h1 className="font-bold text-3xl">Aussies</h1> */}
        {userBalance > 0 ? (
          <>
            <p>You are owed ${userBalance} overall</p>
          </>
        ) : (
          <>
            <p>You owe ${Math.abs(userBalance)}</p>
          </>
        )}
        <p className="pt-2">You owe David ${expensesTracker.david_nandan}</p>
        <p className="pt-2">You owe Yash ${expensesTracker.yash_nandan}</p>
        <p className="pt-2">David owes you ${expensesTracker.nandan_david}</p>
        <p className="pt-2">Yash owes you ${expensesTracker.nandan_yash}</p>
      </div>
    </>
  );
};

export default Balances;
