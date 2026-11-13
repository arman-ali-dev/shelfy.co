import ReviewCard, { ReviewCardSkeleton } from "./ReviewCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Skeleton } from "@mui/material";

const Review = () => {
  return false ? (
    <ProductReviewSkeleton />
  ) : (
    <div className="p-4 lg:px-14 pt-4 pb-10 ">
      <IconButton onClick={() => navigate(-1)} sx={{ color: "black" }}>
        <ArrowBackIcon />
      </IconButton>
      <div className="flex mt-4 flex-col md:flex-row lg:gap-8 gap-5">
        <section className="w-full  md:w-1/2 lg:w-[30%] space-y-2">
          <img
            className="rounded-sm w-full object-cover lg:h-137.5 h-75 object-top"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
            alt=""
          />
          <div className="mt-5">
            <div>
              <p className="font-bold lg:text-xl text-md">
                Nike Air Zoom Running Sneakers For Men
              </p>
              <p className="lg:text-[16px] text-sm text-gray-600">
                Lightweight breathable running shoes with cushioned sole and
                strong grip for daily training and casual wear
              </p>
            </div>

            <div className="price flex items-center gap-3 lg:text-xl text-md mt-2 lg:mt-3">
              <span className="font-sans text-gray-800">₹ 499</span>
              <span className="thin-line-through text-gray-400">₹ 599</span>
              <span className="text-[#00927c] font-semibold">10%</span>
            </div>
          </div>
        </section>

        <section className="md:w-[70%] bg-gray-100 px-6 py-8 rounded-md">
          <div className="space-y-3">
            {[1, 2, 3].map((r) => (
              <ReviewCard review={r} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ProductReviewSkeleton = () => {
  return (
    <div className="p-4 lg:px-14 pt-4 pb-10">
      <Skeleton variant="circular" width={35} height={35} />

      <div className="flex mt-4 flex-col md:flex-row lg:gap-8 gap-5">
        <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
          <Skeleton
            variant="rectangular"
            className="w-full rounded-md"
            height={550}
          />

          <Skeleton variant="text" height={30} width="80%" />

          <Skeleton variant="text" height={22} width="95%" />
          <Skeleton variant="text" height={22} width="90%" />

          <div>
            <Skeleton variant="text" height={28} width="40%" />
            <Skeleton variant="text" height={20} width="30%" />
          </div>
        </section>

        <section className="md:w-[70%] bg-gray-100 px-6 py-8 rounded-md">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <ReviewCardSkeleton />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Review;
