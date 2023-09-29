import "./invoices.css";
import Plus from "../../assets/icons/plus";
import { useState } from "react";
import Sheet from "./sheet";
import CreateInvoiceModal from "../../components/modals/createInvoiceModal";

const CreateInvoice = () => {
  const [sheets, setSheets] = useState(0);
  const [previewModal, setPreviewModal] = useState(false);
  const addSheet = () => {
    setSheets(sheets + 1);
  };
  const closeModal = () => {
    setPreviewModal(false);
  };

  const startPreview = () => {
    setPreviewModal(true);
  };

  return (
    <div className="main__container">
      <div className="lg:grid lg:grid-cols-3 lg:gap-5">
        <div className="col-span-1 mb-[40px]">
          <div className="box border-primary">
            <h3 className="box__header">Invoice Configurations</h3>
            <div className="form-group mb-5">
              <label>Invoice title</label>
              <input placeholder="Invoice name or title" />
            </div>
            <div className="form-group mb-5">
              <label>Company Profile</label>
              <select placeholder="">
                <option>Company One</option>
                <option>Company two</option>
                <option>Company three</option>
              </select>
            </div>
            <div className="form-group mb-5">
              <label>Invoice Currency</label>
              <select placeholder="">
                <option>Company One</option>
                <option>Company two</option>
                <option>Company three</option>
              </select>
            </div>

            <div className="form-group mb-5">
              <label>Invoice Template</label>
              <input placeholder="Default" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="box">
            <h3 className="box__header"> Invoice Sheet</h3>
            <div className="grid grid-cols-5 invoice__sheet">
              <div
                className="col-span-4"
                contentEditable
                placeholder="Description"
              ></div>
              <div className="col-span-1 flex">
                <div
                  className="w-[100%] subtotal"
                  contentEditable
                  placeholder="Total"
                ></div>
                <div className="action flex gap-2 mt-3">
                  <span className="addLineBtn">
                    <Plus
                      onClick={() => {
                        addSheet();
                      }}
                      className="text-green-600"
                      style={{ height: "14px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* anytime sheets is updated add a sheet element  */}
            {[...Array(sheets)].map((e, i) => (
              <Sheet key={i} add={addSheet} id={"entry" + i} />
            ))}
            <h3 className="box__header mt-10">Senders Note </h3>
            <div className="form-group">
              <textarea
                rows={6}
                placeholder="Enter Futher Directives to the sender"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button onClick={() => startPreview()} className="btn primary">
                Preview & Send
              </button>
            </div>
          </div>
        </div>
      </div>
      {previewModal && <CreateInvoiceModal close={closeModal} />}
    </div>
  );
};

export default CreateInvoice;
