import { Divider, Skeleton } from "@mui/material";

const PricingCard = () => {
  return (
    <>
      <div>
        <div className=" text-gray-500 space-y-3 py-3 px-5 lg:text-[16px] text-[14px]">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>₹999</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Discount</span>
            <span>₹50%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Platform Fee</span>
            <span>Free</span>
          </div>
        </div>

        <Divider />
        <div className="font-semibold space-y-3 py-3 px-5">
          <div className="flex justify-between items-center lg:text-[16px] text-[14px]">
            <span>Total</span>
            <span>₹499</span>
          </div>
        </div>
      </div>
    </>
  );
};

export function PricingCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-md p-5 space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex justify-between items-center">
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
        </div>
      ))}

      <hr class="border border-gray-300" />

      <div className="flex justify-between items-center pt-2">
        <Skeleton variant="text" width="35%" height={24} />
        <Skeleton variant="text" width="25%" height={24} />
      </div>

      <Skeleton variant="rectangular" height={40} className="rounded-md mt-3" />
    </div>
  );
}

export default PricingCard;
