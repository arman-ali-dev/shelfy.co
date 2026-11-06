import { Avatar, Box, Rating } from "@mui/material";
import React from "react";

const ReviewCard = () => {
  const review = {
    fullName: "John Doe",
    ratingValue: 5,
    comment:
      "Really good quality and value for money. I am very happy with this purchase.",
    profileImage: "",
    images: [],
  };

  return (
    <div className="flex justify-between bg-[#FFFFFF] rounded-sm p-5">
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <div>
            <Box>
              <Avatar
                src={review.profileImage}
                className="text-white"
                sx={{
                  width: { xs: 40, lg: 47 },
                  height: { xs: 40, lg: 47 },
                  bgcolor: "#000",
                }}
              >
                {!review.profileImage &&
                  review.fullName.charAt(0).toUpperCase()}
              </Avatar>
            </Box>
          </div>

          <div className="mt-1">
            <div className="space-y-1.5">
              <p className="font-semibold text-[14px] lg:text-[16px]">
                {review.fullName}
              </p>

              <div>
                <Rating
                  readOnly
                  name="size-small"
                  value={review.ratingValue}
                  size="small"
                />

                <p className="text-gray-500 text-[14px] lg:text-[15px]">
                  {review.comment}
                </p>

                <div className="mt-2 flex gap-2">
                  {review.images.map((elem, index) => (
                    <img
                      key={index}
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
      </div>
    </div>
  );
};

export default ReviewCard;
