import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Rating,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ReviewCard = () => {
  return (
    <>
      <div className="flex justify-between bg-[#FFFFFF] rounded-sm  p-5">
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <div item xs={1}>
              <Box>
                <Avatar
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                  className="text-white"
                  sx={{
                    width: { xs: 40, lg: 47 },
                    height: { xs: 40, lg: 47 },
                    bgcolor: "#000",
                  }}
                />
              </Box>
            </div>

            <div className="mt-1">
              <div className="space-y-1.5">
                <div>
                  <p className="font-semibold text-[14px] lg:text-[16px]">
                    Arman Ali
                  </p>
                </div>

                <div>
                  <Rating
                    readOnly
                    name="size-small"
                    defaultValue={4.5}
                    size="small"
                  />
                  <p className="text-gray-500 text-[14px] lg:text-[15px]">
                    Excellent product
                  </p>

                  <div className="mt-2 flex gap-2">
                    {[
                      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
                    ].map((elem) => (
                      <img
                        className="lg:w-16 w-10 cursor-pointer lg:h-14 h-10 rounded-sm object-cover object-top"
                        src={elem}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <IconButton sx={{ color: "black" }} size="small">
              {false ? (
                <CircularProgress color="black" size={12} />
              ) : (
                <DeleteIcon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export const ReviewCardSkeleton = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-sm flex gap-4">
        <Skeleton variant="circular" width={45} height={45} />

        <div className="flex-1 space-y-2">
          <Skeleton variant="text" height={20} width="30%" />

          <Skeleton variant="rectangular" height={20} width="25%" />

          <Skeleton variant="text" height={18} width="90%" />
          <Skeleton variant="text" height={18} width="80%" />

          <div className="flex gap-2 mt-2">
            <Skeleton variant="rectangular" width={70} height={60} />
            <Skeleton variant="rectangular" width={70} height={60} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
