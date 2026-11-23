import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const AddCouponCode = () => {
  return (
    <div>
      <form className="space-y-4 lg:p-4">
        <div className="flex gap-5">
          <TextField fullWidth name="code" label="Code *" />

          <Select
            fullWidth
            name="discountType"
            displayEmpty
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              height: 53,
            }}
          >
            <MenuItem value="FIXED_AMOUNT">Fixed Amount</MenuItem>
            <MenuItem value="PERCENTAGE">Percentage</MenuItem>
          </Select>
        </div>

        <div className="flex gap-5">
          <TextField
            fullWidth
            name="discountValue"
            label="Discount Value *"
            type="number"
          />

          <TextField
            fullWidth
            name="minOrderAmount"
            label="Min. Order Amount *"
            type="number"
            size="medium"
          />
        </div>

        <div className="flex gap-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date *"
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "medium",
                },
              }}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date *"
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "medium",
                },
              }}
            />
          </LocalizationProvider>
        </div>

        <TextField
          fullWidth
          name="usageLimit"
          label="Usage Limit *"
          type="number"
          size="medium"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            textTransform: "capitalize",
            background: "#000",
            marginTop: { xs: 2, md: 5 },
            paddingY: { xs: 1, md: 1.5 },
            height: "48px",
          }}
        >
          {false ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            <span className="font-medium lg:text-[14px] text-[12px]">
              Add Coupon
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default AddCouponCode;
