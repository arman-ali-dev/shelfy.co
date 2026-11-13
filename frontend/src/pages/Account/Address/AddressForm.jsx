import { Box, Button, CircularProgress, TextField } from "@mui/material";

const AddressForm = () => {
  return (
    <>
      <Box sx={{ width: "100%", mx: "auto" }}>
        <p className="text-xl font-bold text-center pb-5">Contact Details</p>

        <form className="space-y-5">
          <div>
            <div>
              <TextField fullWidth name="name" label="Name" />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <TextField fullWidth name="phoneNumber" label="Phone Number" />
            </div>
            <div>
              <TextField fullWidth name="pincode" label="Pincode" />
            </div>
          </div>

          <div>
            <div>
              <TextField fullWidth name="address" label="Address" />
            </div>
          </div>
          <div>
            <div>
              <TextField fullWidth name="locality" label="Locality" />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <TextField fullWidth name="city" label="City" />
            </div>

            <div>
              <TextField fullWidth name="state" label="State" />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                py: "12px",
                textTransform: "capitalize",
                background: "black",
              }}
              fullWidth
            >
              {false ? (
                <CircularProgress size={20} color="white" />
              ) : (
                "add address"
              )}
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default AddressForm;
