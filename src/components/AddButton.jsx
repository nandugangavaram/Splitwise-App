import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { data, users } from "./lib/Data.js";

const AddButton = ({ updateData }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("");
  const [receiver, setReceiver] = useState("");
  let curr_date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const onSubmit = () => {
    setOpen(false);
    let formatted_date =
      monthNames[curr_date.getMonth()] + " " + curr_date.getDate();

    let expense_data = [
      ...data,
      {
        exp_name: description,
        amount: amount,
        date: formatted_date,
        paid_by: payer,
        borrowed_by: receiver,
      },
    ];

    updateData(expense_data);
    setDescription("");
    setAmount("");
  };
  const resetData = () => {
    setDescription("");
    setAmount("");
    console.log(payer);
    console.log(receiver);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="absolute bottom-1 right-1 mr-10 mb-10">
          <button
            className="w-16 h-16 font-bold rounded-full"
            style={{ backgroundColor: `#09ba94` }}
          >
            +
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-4 border-green-200">
        <DialogHeader>
          <DialogTitle className="font-bold">Add an Expense</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right font-bold">
              Exp:
            </label>
            <input
              id="name"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter a description"
              className="col-span-3 pl-2 border-black border-2 rounder-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <label htmlFor="Amount" className="text-right font-bold">
              Amt:
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="A$ 0.00"
              className="col-span-3 pl-2 border-black border-2 rounder-md"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Select
            onValueChange={(e) => {
              setPayer(e);
            }}
          >
            <SelectTrigger className="w-[180px] border-black border-2">
              <SelectValue placeholder="Paid By" />
            </SelectTrigger>
            <SelectContent>
              {users?.map((user, index) => {
                return (
                  <SelectItem key={index} value={user.toLowerCase()}>
                    {user}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex justify-center">
          <Select
            onValueChange={(e) => {
              setReceiver(e);
            }}
          >
            <SelectTrigger className="w-[180px] border-black border-2">
              <SelectValue placeholder="Split For" />
            </SelectTrigger>
            <SelectContent>
              {users?.map((user, index) => {
                return (
                  <SelectItem key={index} value={user.toLowerCase()}>
                    {user}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button
              type="button"
              onClick={resetData}
              className="bg-red-400 w-24 h-12 font-bold"
            >
              Close
            </button>
          </DialogClose>
          <button
            type="submit"
            className="bg-green-400 w-24 h-12 font-bold"
            onClick={onSubmit}
          >
            Add
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
