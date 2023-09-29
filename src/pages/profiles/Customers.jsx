import { SearchOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import "./Profiles.css";
import { useState } from "react";
import NewProfileModal from "../../components/modals/newProfileModal";

const Customers = () => {
  const [newModal, setNewModal] = useState(false);
  return (
    <div className="main__container">
      <div className="main__description flex justify-center">
        <div className="lg:w-[60vw] w-[100%]">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => {
                setNewModal(true);
              }}
              data-modal-hide="staticModal"
              type="button"
              className="text-white flex align-baseline gap-3 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <PlusOutlined className="mt-1" /> <p>Add Customer</p>
            </button>
          </div>
          <div className="box ">
            <div className="flex my-4 justify-between align-baseline">
              <div className="form-group flex">
                <input placeholder="search" className="w-[100%]" />
                <button className="bg-white ml-[-30px] h-[20px] hover:text-blue-700 flex justify-center align- rounded w-[20px] mt-[19px]">
                  <SearchOutlined />
                </button>
              </div>
            </div>

            <ul className="uiList mt-[40px]">
              <li className="flex justify-between align-baseline">
                <div>
                  <h3>Efab Properties inc</h3>
                </div>
                <div className="flex justify-between">
                  <button className="text-white flex align-baseline gap-3 hover:text-blue-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <EditOutlined />
                  </button>
                  <button className="text-white flex align-baseline gap-3 hover:text-red-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <DeleteOutlined />
                  </button>
                </div>
              </li>
              <li className="flex justify-between align-baseline">
                <div>
                  <h3>Efab Properties inc</h3>
                </div>
                <div className="flex justify-between">
                  <button className="text-white flex align-baseline gap-3 hover:text-blue-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <EditOutlined />
                  </button>
                  <button className="text-white flex align-baseline gap-3 hover:text-red-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <DeleteOutlined />
                  </button>
                </div>
              </li>
              <li className="flex justify-between align-baseline">
                <div>
                  <h3>Efab Properties inc</h3>
                </div>
                <div className="flex justify-between">
                  <button className="text-white flex align-baseline gap-3 hover:text-blue-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <EditOutlined />
                  </button>
                  <button className="text-white flex align-baseline gap-3 hover:text-red-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <DeleteOutlined />
                  </button>
                </div>
              </li>
              <li className="flex justify-between align-baseline">
                <div>
                  <h3>Efab Properties inc</h3>
                </div>
                <div className="flex justify-between">
                  <button className="text-white flex align-baseline gap-3 hover:text-blue-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <EditOutlined />
                  </button>
                  <button className="text-white flex align-baseline gap-3 hover:text-red-700 text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
                    <DeleteOutlined />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {newModal && (
        <NewProfileModal
          close={() => {
            setNewModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Customers;
