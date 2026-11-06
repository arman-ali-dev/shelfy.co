import { Avatar } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const OrderItem = () => {
  return (
    <>
      <div className="text-sm bg-white lg:p-5 p-3 space-y-4 border border-gray-300 rounded-md cursor-pointer">
        <div className="flex items-center gap-2 lg:gap-3">
          <div>
            <Avatar
              sizes="small"
              sx={{
                bgcolor: "#000",
                height: { xs: 34, md: 38 },
                width: { xs: 34, md: 38 },
              }}
            >
              <ElectricBoltIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
            </Avatar>
          </div>

          <div>
            <h1 className="font-bold mt-0.5 lg:mt-0 text-black text-[12px] lg:text-[14px]">
              Confirmed
            </h1>
            <p className="font-medium text-gray-500 text-[12px] lg:text-[14px]">
              Arriving By 1 Apr 2026
            </p>
          </div>
        </div>

        <div className="lg:p-5 p-3 bg-teal-50 gap-3 flex">
          <div>
            <img
              className="w-22.5 h-27.5 object-cover rounded-sm"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
              alt=""
            />
          </div>

          <div className="w-full space-y-1">
            <h1 className="font-bold lg:text-[16px] text-[12px]">
              Arman's shop
            </h1>
            <p className="lg:text-[16px] text-[11px]">Microsoft</p>
            <p className="lg:text-[16px] text-[11px]">
              <strong>Size: </strong> XL
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
