import { Button, CircularProgress, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const inputPropsSX = {
  sx: {
    "& .MuiInputBase-input": {
      fontSize: { xs: "13px", md: "16px" },
      "&::placeholder": {
        fontSize: { xs: "13px", md: "16px" },
        color: "#888",
        opacity: 1,
      },
    },
  },
};

const Register = () => {
  return (
    <>
      <div className="flex justify-center h-[90vh] items-center">
        <div className="py-8  md:w-112.5 w-full rounded-md shadow-lg">
          <div className="py-3">
            <div className="px-5 pt-10">
              <h1 className="text-center font-bold lg:text-3xl text-xl pb-6">
                Signup
              </h1>
              <div className="lg:space-y-5 space-y-3">
                <div>
                  <TextField
                    fullWidth
                    name="fullName"
                    label="Full Name"
                    InputProps={inputPropsSX}
                    InputLabelProps={{
                      sx: { fontSize: { xs: "13px", md: "16px" } },
                    }}
                  />
                </div>

                <div>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    InputProps={inputPropsSX}
                    InputLabelProps={{
                      sx: { fontSize: { xs: "13px", md: "16px" } },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    InputProps={inputPropsSX}
                    InputLabelProps={{
                      sx: { fontSize: { xs: "13px", md: "16px" } },
                    }}
                  />
                </div>

                <div>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    InputProps={inputPropsSX}
                    InputLabelProps={{
                      sx: { fontSize: { xs: "13px", md: "16px" } },
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      py: { xs: "8px", md: "11px" },
                      textTransform: "capitalize",
                      background: "#000",
                    }}
                  >
                    {false ? (
                      <CircularProgress size={22} sx={{ color: "#fff" }} />
                    ) : (
                      <span className="font-medium text-[13px] lg:text-[14px]">
                        Register
                      </span>
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-1 justify-center mt-3">
                  <p className="lg:text-[16px] text-[13px]">Have Account ?</p>
                  <Link
                    to="/login"
                    size="small"
                    className="text-black font-medium cursor-pointer lg:text-[16px] text-[13px]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
