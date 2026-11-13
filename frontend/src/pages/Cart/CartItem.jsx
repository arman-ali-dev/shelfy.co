import { CircularProgress, Divider, IconButton, Skeleton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const item = {
  id: 1,
  name: "Nike Air Zoom Running Sneakers For Men",
  description:
    "Lightweight breathable running shoes with cushioned sole and strong grip for daily training and casual wear",
  variants: [
    {
      sellingPrice: 2499,
      mrpPrice: 4999,
      discount: 50,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
      ],
    },
  ],
};

const CartItem = () => {
  return (
    <>
      <div className="border rounded-md relative border-gray-300">
        <div className="flex lg:p-5 p-3 gap-3">
          <div>
            <img
              className="lg:w-25 w-30 h-22.5 object-cover object-top lg:h-33.75 rounded-md"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
              alt=""
            />
          </div>
          <div className="lg:space-y-2 space-y-1">
            <h1 className="font-semibold text-[12px] lg:text-[17px]">
              {item?.name}
            </h1>

            <p className="text-gray-600 font-medium text-[10px] lg:text-sm">
              {item?.description?.split(" ").slice(0, 11).join(" ") + " ..."}
            </p>

            <p className="text-gray-500 text-[10px] lg:text-xs">
              Color: {item?.variants?.color}
            </p>

            <p className="text-gray-500 text-[10px] lg:text-xs">
              Size: {item?.variants?.size}
            </p>

            <p className="lg:text-sm text-[11px] text-gray-500 mt-1">
              <strong>Quantity: </strong> {item?.quantity}
            </p>
          </div>

          <Divider />
        </div>

        <div className="lg:px-5 px-3 lg:py-2 py-1.5 flex justify-between items-center w-full border-t border-gray-300">
          <div className="flex items-center gap-2 w-21.5 lg:w-35 justify-between">
            <button
              className={
                `cursor-pointer ` +
                (false || true
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black")
              }
            >
              {false ? (
                <CircularProgress color="black" size={12} />
              ) : (
                <RemoveIcon sx={{ fontSize: 18 }} />
              )}
            </button>

            <span className="lg:text-[16px] text-[14px]">2</span>

            <button className="cursor-pointer">
              {false ? (
                <CircularProgress color="black" size={12} />
              ) : (
                <AddIcon sx={{ fontSize: 18 }} />
              )}
            </button>
          </div>

          <div>
            <p className="text-gray-700 font-medium lg:text-[16px] text-[14px]">
              ₹1999
            </p>
          </div>
        </div>

        <div className="absolute top-0 lg:top-2 right-1 lg:right-3">
          <IconButton>
            {false ? (
              <CircularProgress size={12} color="black" />
            ) : (
              <CloseIcon
                color="primary"
                sx={{ fontSize: 20, color: "black" }}
              />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
};

export function CartItemSkeleton() {
  return (
    <div className="border rounded-md border-gray-300 p-3 lg:p-5">
      <div className="flex gap-3">
        <Skeleton
          variant="rectangular"
          width={100}
          height={130}
          className="rounded-md"
        />

        <div className="flex flex-col w-full gap-2">
          <Skeleton variant="text" width="70%" height={22} />
          <Skeleton variant="text" width="90%" height={18} />
          <Skeleton variant="text" width="40%" height={16} />
          <Skeleton variant="text" width="30%" height={16} />
          <Skeleton variant="text" width="50%" height={18} className="mt-1" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 border-gray-300 border-t  pt-3">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="text" width={25} height={22} />
          <Skeleton variant="circular" width={24} height={24} />
        </div>

        <Skeleton variant="text" width={60} height={22} />
      </div>
    </div>
  );
}

export default CartItem;
