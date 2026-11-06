import OrderItem from "./OrderItem";

const Orders = () => {
  return (
    <div className="text-sm">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p className="capitalize">from anytime</p>
      </div>
      <div className="space-y-4">
        {[1]?.map((order) => (
          <div
            key={order.id}
            className="border border-[#d5d5d5] p-3 rounded-md"
          >
            <h2 className="font-semibold">Order #123</h2>
            <p className="text-[14px]">Total: ₹5000</p>
            <p className="text-[14px] mb-2">Items:</p>

            <div className="space-y-2">
              {[1, 2, 3]?.map((item) => (
                <OrderItem />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
