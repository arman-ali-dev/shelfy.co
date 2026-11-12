import React from "react";
import { CircularProgress, IconButton, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const WishlistProductCard = ({ item }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
          className="object-cover lg:h-62.5 h-45 rounded-md object-center w-full"
          alt="Aeropostale T-Shirt"
        />
      </div>

      <div className="space-y-1 lg:pt-3 pt-1.5">
        <p className="lg:text-[16px] text-[13px]">Lorem, ipsum dolor.</p>
        <div className="price flex lg:text-[16px] text-[14px] items-center gap-3">
          <span
            className="font-sans text-gray-800 font-medium
          "
          >
            ₹ 499
          </span>
          <span className="thin-line-through text-gray-400">₹ 599</span>
          <span className=" font-semibold">12%</span>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <IconButton className="z-99999">
          {false === item?.id ? (
            <CircularProgress size={13} />
          ) : (
            <CloseIcon sx={{ fontSize: "1.3rem" }} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export const WishlistProductCardSkeleton = () => {
  return (
    <div className="relative">
      <Skeleton
        variant="rectangular"
        className="w-full rounded-md"
        sx={{
          height: { xs: 180, lg: 250 },
        }}
      />

      <div className="space-y-1 lg:pt-3 pt-1.5">
        <Skeleton variant="text" width="80%" height={20} />

        <div className="flex items-center gap-3">
          <Skeleton variant="text" width={50} height={20} />
          <Skeleton variant="text" width={40} height={20} />
          <Skeleton variant="text" width={30} height={20} />
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <Skeleton variant="circular" width={32} height={32} />
      </div>
    </div>
  );
};

export default WishlistProductCard;
