import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Skeleton,
} from "@mui/material";
import OrderStepper from "./OrderStepper";
import PaymentsIcon from "@mui/icons-material/Payments";

const OrderDetails = () => {
  return (
    <>
      <Box>
        <section className="flex flex-col gap-5 justify-center items-center">
          <img
            className="w-25 rounded-md"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
            alt=""
          />
          <div className="text-sm space-y-1 text-center">
            <h1 className="font-bold">Arman's shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugit ea harum asperiores quam maiores dolorum a hic maxime, ex
              exercitationem ab necessitatibus est optio rem error accusamus,
              possimus cum reprehenderit eos. Odit facilis, omnis, quia quidem
              dolores nostrum odio optio mollitia, veritatis quisquam ut sed
              eveniet vel eligendi rem? Explicabo eveniet illum assumenda
              reiciendis quis quod neque consectetur provident dolorem
              laudantium corrupti numquam fuga voluptates, repellat commodi
              exercitationem rem? Hic alias modi dolores doloremque aperiam.
              Praesentium blanditiis similique minima, deleniti natus molestias
              labore nesciunt voluptates eos, ducimus at! Beatae harum officiis
              illum, libero veniam a sapiente suscipit ea unde?
            </p>
            <p>
              <strong>Size: </strong>
              XL
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{ color: "#fff", background: "#000", px: 4 }}
            >
              <span className="font-medium capitalize"> Write Review</span>
            </Button>
          </div>
        </section>
      </Box>

      <section className="border mt-4 p-5 border-gray-300 rounded-md">
        <OrderStepper />
      </section>

      <section className="pt-5">
        <div className="border border-gray-300 p-5">
          <h1 className="font-bold pb-3">Delivery Address</h1>
          <div className="text-sm space-y-2">
            <div className="flex gap-5 font-medium">
              <p>Arman ali</p>
              <Divider flexItem orientation="vertical" />
              <p>+91 7665407031</p>
            </div>

            <p>madina colony, jhotwara, jaipur, rajasthan - 302012</p>
          </div>
        </div>

        <div className="border space-y-4 border-gray-300 mt-5">
          <div className="flex justify-between text-sm pt-5 px-5">
            <div className="space-y-1">
              <p className="font-bold">Total Item Price</p>
              <p>
                You Saved{" "}
                <span className="text-green-500 font-medium text-xs">
                  ₹12.00
                </span>{" "}
                on this item
              </p>
            </div>

            <p className="font-medium">₹1000.00</p>
          </div>

          <div className="px-5">
            <div className="bg-green-50 px-5 py-2 text-xs font-medium flex items-center gap-3 text-green-700">
              <PaymentsIcon sx={{ fontSize: "18px" }} />
              <p>Paid via Stripe</p>
            </div>
          </div>

          <Divider />
          <div className="px-5 py-5">
            <p className="text-xs">
              <strong>Sold By: </strong> Arman's shop
            </p>
          </div>

          <div className="p-10">
            <Button
              color="error"
              sx={{ py: "0.7rem", textTransform: "capitalize" }}
              variant={false ? "contained" : "outlined"}
              fullWidth
            >
              {false ? (
                <div className="flex items-center gap-2">
                  <CircularProgress color="red" size={14} />
                  Canceling...
                </div>
              ) : false ? (
                "Order Canceled"
              ) : (
                "Cancel Order"
              )}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetails;
