import { Skeleton } from "@mui/material";

const ProductDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
      <section className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[15%] flex md:flex-col gap-3">
          {[1, 2, 3, 4].map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={"100%"}
              height={80}
              className="rounded-md"
            />
          ))}
        </div>

        <div className="w-full md:w-[85%]">
          <Skeleton
            variant="rectangular"
            className="rounded-md w-full"
            sx={{
              height: {
                xs: 300,
                sm: 380,
                md: 450,
                lg: 550,
                xl: 600,
              },
            }}
          />
        </div>
      </section>

      <section>
        <Skeleton variant="text" height={30} width={"70%"} />

        <Skeleton variant="text" height={20} width={"90%"} />
        <Skeleton variant="text" height={20} width={"85%"} />

        <div className="mt-4 border border-gray-300 w-37.5 lg:w-45 px-3 py-2">
          <Skeleton variant="text" width={"60%"} height={25} />
        </div>

        <div className="mt-4">
          <Skeleton variant="text" width={"40%"} height={32} />
          <Skeleton variant="text" width={"60%"} height={20} />
        </div>

        <div className="mt-4">
          <Skeleton variant="text" width={80} height={20} className="mb-2" />
          <div className="flex gap-2">
            {[1, 2, 3].map((_, i) => (
              <Skeleton key={i} variant="circular" width={32} height={32} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Skeleton variant="text" width={80} height={20} />
          <div className="flex flex-wrap gap-2 mt-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={70}
                height={35}
                className="rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Skeleton variant="text" width={90} height={24} />

          <div className="flex gap-4 mt-2">
            <Skeleton
              variant="rectangular"
              width={120}
              height={40}
              className="rounded-md"
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={40}
              className="rounded-md"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Skeleton
            variant="rectangular"
            height={50}
            width={"100%"}
            className="rounded-md"
          />
          <Skeleton
            variant="rectangular"
            height={50}
            width={"100%"}
            className="rounded-md"
          />
        </div>

        <div className="flex mt-5 gap-3">
          {[1, 2, 3].map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={220}
              height={110}
              className="rounded-xl"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSkeleton;
