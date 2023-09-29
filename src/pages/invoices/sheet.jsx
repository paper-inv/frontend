import Plus from "../../assets/icons/plus";
import Cancel from "../../assets/icons/cancel";

const Sheet = (props) => {
  const deleteRow = (id) => {
    document.getElementById(id).remove();
  };
  return (
    <div id={props.id} className="grid grid-cols-5 invoice__sheet">
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
          <span
            className="addLineBtn"
            onClick={() => {
              props.add();
            }}
          >
            <Plus className="text-green-600" style={{ height: "14px" }} />
          </span>
          <span
            className="addLineBtn"
            onClick={() => {
              deleteRow(props.id);
            }}
          >
            <Cancel className="text-red-600" style={{ height: "14px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
