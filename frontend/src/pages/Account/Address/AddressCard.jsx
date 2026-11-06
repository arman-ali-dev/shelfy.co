import deleteIcon from "../../../assets/delete.png";
import editIcon from "../../../assets/tabler_edit.png";

const AddressCard = ({ address, handleOpenEditAddressForm }) => {
  return (
    <>
      <div className="lg:p-5 p-3 border border-gray-300 rounded-md flex">
        <div className="lg:space-y-3 space-y-1.5 lg:pt-3">
          <h1 className="font-bold lg:text-[16px] text-[12px]">Arman Ali</h1>
          <p className="lg:text-[16px] text-[12px]">
            Madina colony, jhotwara, jaipur, rajasthan - 302012
          </p>

          <p className="lg:text-[16px] text-[12px]">
            <strong>Mobile No. : </strong>
            +91 7665407031
          </p>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => handleOpenEditAddressForm(address)}
              className="lg:text-[13px] cursor-pointer text-[12px] rounded-md bg-[#F5F5F5] px-3 py-1 flex items-start font-medium gap-1"
            >
              <img className="w-4 mt-px!" src={editIcon} alt="" />
              Edit
            </button>

            <button className="lg:text-[13px] cursor-pointer  text-[12px] text-[#FF0000] rounded-md bg-[#F5F5F5] px-3 py-1  flex items-start font-medium gap-1 ">
              <img className="w-4 mt-[0.5px]!" src={deleteIcon} alt="" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
