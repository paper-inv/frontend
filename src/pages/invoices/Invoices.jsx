import "./invoices.css";
import ViewList from "../../assets/icons/viewList";
import CancelSend from "../../assets/icons/cancelSend";
import ToolTip from "../../components/tooltip/Tooltip";

const Invoices = () => {
  return (
    <div className="main__container">
      <div className="main__description">
        <div className="flex justify-center lg:mt-[50px]">
          <div className="invoices__searchbar form-group lg:w-[50%]">
            <input placeholder="find an invoice"></input>
            <button className="btn primary"> search</button>
          </div>
        </div>

        <div className="invoices__table lg:mt-[50px]">
          <div className="invoices__table-block">
            <div className="block__title">
              <p>
                <span>1000123</span> The invoice name and other things
              </p>
            </div>
            <div className="block__status">
              <img src="../../../src/assets/icons/check.svg"></img>
              <p>$5,000.00</p>
            </div>
            <div className="block__actions flex align-center gap-[40px]">
              <p>Mark as paid</p>

              <span className="group">
                <ViewList />
                <ToolTip text="view Invoice" />
              </span>
              <CancelSend />
            </div>
          </div>
          <div className="invoices__table-block">
            <div className="block__title">
              <p>
                <span>1000123</span> The invoice name and other things
              </p>
            </div>
            <div className="block__status">
              <img src="../../../src/assets/icons/check.svg"></img>
              <p>$5,000.00</p>
            </div>
            <div className="block__actions flex align-center gap-[40px]">
              <p>Mark as paid</p>
              <ViewList />
              <CancelSend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
