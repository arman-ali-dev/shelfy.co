import WishlistProductCard from "./WishlistProductCard";
import { Skeleton } from "@mui/material";
import NoWishlistItems from "./NoWishlistItems";
import { WishlistProductCardSkeleton } from "./WishlistProductCard";

const Wishlist = () => {
  return false ? (
    <WishlistSkeleton />
  ) : 1 === 0 ? (
    <NoWishlistItems />
  ) : (
    <div className=" px-4 py-8 lg:px-14 lg:py-12">
      <section>
        <h1 className="lg:text-[20px] text-[17px]">
          <strong>My Wishlist</strong> {3} Items
        </h1>

        <div className="lg:pt-8 pt-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8 gap-y-6">
          {[1, 2, 3].map((item) => (
            <WishlistProductCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

const WishlistSkeleton = () => {
  const isMobile = window.innerWidth < 768;
  const skeletonCount = isMobile ? 4 : 8;

  return (
    <div className="px-4 py-8 lg:px-14 lg:py-12">
      <section>
        <h1 className="lg:text-[20px] text-[17px]">
          <Skeleton variant="text" width={150} height={20} />
        </h1>

        <div className="lg:pt-8 pt-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8 gap-y-6">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <WishlistProductCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
