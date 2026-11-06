import React, { useState } from "react";
import { Button, Modal, Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ratingPercent = {
    5: 60,
    4: 25,
    3: 10,
    2: 3,
    1: 2,
  };

  const averageRating = 4.5;
  const total = 120;

  return (
    <>
      <div className="bg-gray-100 mt-5 lg:px-6 px-4 py-4 rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold md:text-[18px] text-[13px]">
            Customer Reviews
          </h2>

          <Button
            onClick={handleOpen}
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              paddingX: { xs: 2, md: 4 },
              paddingY: 1,
              background: "#000",
            }}
          >
            <span className="lg:text-[14px] text-[12px]">Write Review</span>
          </Button>
        </div>

        <div className="mt-8 md:flex gap-14 items-center">
          <div className="text-center">
            <h2 className="lg:text-[36px] text-[26px] font-medium">
              {averageRating.toFixed(1)}
            </h2>

            <Rating
              name="simple-uncontrolled"
              readOnly
              value={averageRating}
              precision={0.5}
            />

            <p className="text-[#505050] text-[14px]">{total} reviews</p>
          </div>

          <div className="flex-1 mt-5 md:mt-0">
            <div className="w-full space-y-5">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="font-semibold text-[14px] lg:text-sm">
                    {star}
                  </span>

                  <div className="relative w-full h-3 lg:h-2 bg-gray-200 rounded-full">
                    <div
                      className="absolute left-0 h-3 lg:h-2 bg-black rounded-full"
                      style={{ width: `${ratingPercent[star]}%` }}
                    />
                  </div>

                  <span className="lg:text-sm text-gray-500 text-[14px]">
                    {ratingPercent[star]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <ReviewCard
            review={{
              ratingValue: 5,
              title: "Excellent Product",
              review:
                "Really good quality and value for money. I am very happy with this purchase.",
            }}
          />

          <div className="text-center mt-10 mb-5">
            <Link className="border-gray-700 text-gray-700 font-medium border lg:px-6 px-4 lg:py-2 py-1 rounded-full text-[11px] lg:text-[14px]">
              View All
            </Link>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ReviewForm handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default Reviews;
