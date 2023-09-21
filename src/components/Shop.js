import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Shop() {
  const dispatchAction = useDispatch();
  const {depositFund, withDrawFund} = bindActionCreators(actionCreators, dispatchAction);
  return (
    <div className="w-25 m-4 card">
      <div className="card-body">
        <h5 className="card-title">Deposit/Withdraw Money</h5>
        <button className="btn btn-primary mx-2" onClick={() => {
            withDrawFund(100);
        }}>
          -
        </button>
        Update Balance
        <button href="/" className="btn btn-primary mx-2" onClick={() => {
            depositFund(100);
        }}>
          +
        </button>
        {/* <button href="/" className="btn btn-primary mx-2" onClick={() => {
            dispatchAction(actionCreators.depositFund(100))
        }}>
          +
        </button> */}
      </div>
    </div>
  );
}

export default Shop;
