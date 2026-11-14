import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CloseIcon from "@mui/icons-material/Close";

const EditCategoryForm = ({ handleClose }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
      }}
      component="form"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-[22px] font-medium">Edit Category</h2>
        <IconButton onClick={handleClose}>
          <CancelOutlinedIcon />
        </IconButton>
      </div>

      <div className="flex gap-5 items-center mb-5">
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

        <div className="relative">
          <img
            className="lg:w-24 rounded-lg lg:h-24 w-16 h-16 object-cover border"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
            alt="Category"
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
      </div>

      <div className="space-y-4">
        <div>
          <TextField fullWidth label="Name *" name="name" size="medium" />
        </div>
        <div>
          <TextField
            fullWidth
            label="Description *"
            name="description"
            multiline
            minRows={4}
          />
        </div>
        <div>
          <Select fullWidth name="parentCategory" displayEmpty>
            <MenuItem value="">Select Parent Category</MenuItem>
            <MenuItem value={1}>Men</MenuItem>
            <MenuItem value={2}>Women</MenuItem>
            <MenuItem value={3}>Electronics</MenuItem>
          </Select>
        </div>
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
          <CircularProgress size={18} sx={{ color: "white" }} />
        ) : (
          <span className="font-medium lg:text-[14px] text-[12px]">
            Update Category
          </span>
        )}
      </Button>
    </Box>
  );
};

export default EditCategoryForm;
