import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PricingCard, { PricingCardSkeleton } from "../Cart/PricingCard";
import { Skeleton } from "@mui/material";
import AddressCard from "./AddressCard";
import { useState } from "react";
import AddressForm from "../Account/Address/AddressForm";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {false ? (
        <CheckoutSkeleton />
      ) : (
        <div className="lg:pt-12 pt-6 px-4 sm:px-10 md:px-14 pb-15 lg:pb-25">
          <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
            <div className="col-span-2 space-y-5">
              <div className="flex justify-between items-start">
                <h1 className="font-semibold text-[14px] lg:text-[18px]">
                  Select Address
                </h1>
                <Button
                  onClick={handleOpen}
                  sx={{
                    fontSize: { xs: 10, md: 13 },
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  <AddIcon sx={{ fontSize: { xs: 12, md: 18 } }} />
                  <span className="font-medium ml-0.5"> Add new Address</span>
                </Button>
              </div>

              <div className="lg:text-sm text-[14px] font-medium space-y-2 lg:space-y-4">
                <p>Saved Addresses</p>
                <div className="lg:space-y-3 space-y-2">
                  {[1, 2, 3].map((a, index) => (
                    <AddressCard />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="py-5 px-5 rounded-md border border-gray-300 mb-4">
                <FormControl fullWidth>
                  <h1 className="font-medium text-center mb-4 lg:text-[16px] text-[14px] ">
                    Choose Payment Gateway
                  </h1>
                  <RadioGroup
                    row
                    value={"RAZORPAY"}
                    className="flex  gap-1 justify-between pr-0 w-full"
                  >
                    <div className="border flex-1 w-full mr-0! border-gray-300 pl-3 pr-2 rounded-md">
                      <FormControlLabel
                        value="RAZORPAY"
                        className="w-35"
                        control={
                          <Radio
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "black",
                              },
                            }}
                          />
                        }
                        label={
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_b7cYDTEaXxYsRDAdsVXYknigIr16CNbZQ&s"
                            alt="RAZORPAY"
                          />
                        }
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="border border-gray-300 rounded-md">
                {true ? (
                  <div className="p-4">
                    <h2 className="font-semibold mb-2 text-lg">
                      Order Summary
                    </h2>

                    <div className="flex gap-3 items-start">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
                          className="w-25 h-30 rounded-sm object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" space-y-1.5 text-[15px]">
                        <p>
                          <strong>Product:</strong>{" "}
                          {"Nike Air Zoom Running Sneakers For Men"
                            ?.split(" ")
                            .slice(0, 2)
                            .join(" ") + "..."}
                        </p>
                        <p>
                          <strong>Size:</strong> XL
                        </p>
                        <p>
                          <strong>Quantity:</strong> 2
                        </p>
                        <p>
                          <strong>Price:</strong> ₹ 499
                        </p>
                      </div>
                    </div>
                    <br />
                    <hr />

                    <Divider />
                    <div className="font-semibold space-y-3 py-3 px-5">
                      <div className="flex justify-between items-center lg:text-[16px] text-[14px]">
                        <span>Total</span>
                        <span>₹999</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <PricingCard />
                )}

                <div className="px-5 py-3">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      py: "8px",
                      textTransform: "capitalize",
                      background: "black",
                      height: "40px",
                    }}
                  >
                    {false ? (
                      <CircularProgress color="white" size={14} />
                    ) : (
                      <span className="font-medium"> checkout</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "100%", lg: 500 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 2, lg: 4 },
            borderRadius: "8px",
          }}
        >
          <AddressForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

const CheckoutSkeleton = () => {
  return (
    <div className="lg:pt-12 pt-6 px-4 sm:px-10 md:px-14 pb-15 lg:pb-25">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
        <div className="col-span-2 space-y-5">
          <div className="flex justify-between items-start">
            <Skeleton variant="text" width={160} height={28} />
            <Skeleton
              variant="rectangular"
              width={140}
              height={36}
              className="rounded-md"
            />
          </div>

          <div className="space-y-3">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <AddressCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-5">
          <div className="py-5 px-5 rounded-md border border-gray-300 mb-4">
            <Skeleton
              variant="text"
              width="60%"
              height={22}
              className="mx-auto mb-4"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              className="rounded-md"
            />
          </div>
          <PricingCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
