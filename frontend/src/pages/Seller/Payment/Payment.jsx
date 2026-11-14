import { Button, Card, Divider } from "@mui/material";

const Payment = () => {
  return (
    <>
      <div className="space-y-5 lg:mt-2 mt-6">
        <Card className="rounded-md lg:space-y-4 space-y-2 lg:p-5 p-3">
          <h1 className="text-gray-600 font-medium lg:text-[16px] text-[14px]">
            Total Earning
          </h1>
          <h1 className="font-bold lg:text-xl text-md pb-1">₹56000</h1>
          <Divider />
          <div className=" lg:pt-4 pt-2 flex justify-between items-center">
            <p className="text-gray-600 font-medium lg:text-[16px] text-[14px]">
              Last Payment: <strong>₹20999</strong>
            </p>

            <Button
              onClick={() => navigate("/seller/transactions")}
              sx={{
                textTransform: "capitalize",
                background: "black",
                paddingX: { xs: 3, md: 4 },

                paddingY: 1,
              }}
              variant="contained"
            >
              <span className="font-medium lg:text-[15px] text-[13px]">
                Transaction
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Payment;
