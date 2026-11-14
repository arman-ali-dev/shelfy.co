import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddCategory = () => {
  return (
    <div>
      <form className="space-y-4 lg:p-4">
        <div className="flex gap-5 items-center">
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
          />

          <label className="relative" htmlFor="fileInput">
            <span className="lg:w-24 lg:h-24 w-16 h-16 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
              <AddPhotoAlternateIcon
                sx={{ fontSize: { xs: 18, md: 22 } }}
                className="text-gray-700"
              />
            </span>

            {false && (
              <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-white/50 rounded-md">
                <CircularProgress size={28} />
              </div>
            )}
          </label>

          {true && (
            <div className="relative">
              <img
                className="lg:w-24 rounded-lg lg:h-24 w-16 h-16 object-cover border"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
                alt="Category Image"
              />
              <IconButton
                size="small"
                color="error"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <CloseIcon sx={{ fontSize: { xs: "0.5rem", md: "1rem" } }} />
              </IconButton>
            </div>
          )}
        </div>

        <div>
          <TextField
            fullWidth
            name="name"
            label="Name *"
            InputProps={{
              sx: {
                "& .MuiInputBase-input": {
                  fontSize: { xs: "13px", md: "14px" },
                  "&::placeholder": {
                    fontSize: { xs: "13px", md: "14px" },
                    color: "#888",
                    opacity: 1,
                  },
                },
              },
            }}
            InputLabelProps={{
              sx: { fontSize: { xs: "13px", md: "14px" } },
            }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            name="description"
            label="Description *"
            InputProps={{
              sx: {
                "& .MuiInputBase-input": {
                  fontSize: { xs: "13px", md: "14px" },
                  "&::placeholder": {
                    fontSize: { xs: "13px", md: "14px" },
                    color: "#888",
                    opacity: 1,
                  },
                },
              },
            }}
            InputLabelProps={{
              sx: { fontSize: { xs: "13px", md: "14px" } },
            }}
          />
        </div>

        <div>
          <Select
            fullWidth
            name="parentCategoryId"
            displayEmpty
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              height: 53,
              "& .MuiSelect-select": {
                paddingY: "14px",
                fontSize: { xs: "13px", md: "14px" },
              },
              "& .MuiSvgIcon-root": {
                fontSize: "22px",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <MenuItem value={1}>Men</MenuItem>
            <MenuItem value={2}>Women</MenuItem>
            <MenuItem value={3}>Electronics</MenuItem>
          </Select>
        </div>

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
            <CircularProgress color="white" size={18} />
          ) : (
            <span className="font-medium lg:text-[14px] text-[12px]">
              Add Category
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;
