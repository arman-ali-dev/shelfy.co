import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 ">
      <div className="text-center space-y-3 max-w-md">
        <div className="flex justify-center">
          <div className="p-6 bg-gray-100 rounded-full">
            <ShoppingCartIcon sx={{ fontSize: 70, color: "#888" }} />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 text-sm lg:text-base">
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link to="/">
          <Button
            variant="contained"
            className="capitalize! bg-black! font-medium"
            sx={{ px: 4, py: 1.2, fontSize: "14px" }}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
