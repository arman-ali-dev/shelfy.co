import { Radio, Skeleton } from "@mui/material";

const AddressCard = () => {
  return (
    <>
      <div
        className={`lg:p-5 p-2 border rounded-md flex cursor-pointer ${
          false ? "border-black" : "border-gray-300"
        }`}
      >
        <div>
          <Radio
            name="selectedAddress"
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
        </div>

        <div className="lg:space-y-3 space-y-2 pt-2.5">
          <h1 className="mb-0"> Arman Ali</h1>
          <p>madina colony, jhotwara, jaipur, rajasthan - 302012</p>
          <p>
            <strong>Mobile No. : </strong>
            +91 7665407031
          </p>
        </div>
      </div>
    </>
  );
};

export const AddressCardSkeleton = () => {
  return (
    <div className="border-gray-300 border rounded-md p-3 lg:p-5 flex gap-3">
      <Skeleton variant="circular" width={24} height={24} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="80%" height={16} />
        <Skeleton variant="text" width="60%" height={16} />
      </div>
    </div>
  );
};

export default AddressCard;
