import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const colors = [
  "Red",
  "Blue",
  "Green",
  "Black",
  "White",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
];

const AddProduct = () => {
  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <TextField fullWidth label="Title *" name="name" />
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
            <InputLabel id="category-label" className="mb-1">
              Category *
            </InputLabel>
            <Select fullWidth label="Category" name="category.id">
              <MenuItem value="">Choose Category *</MenuItem>
              {[1, 2, 3].map((cat) => (
                <MenuItem key={cat.id} value={cat.id}></MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mt-6">Variants</h2>

          {[1, 2].map((variant, vIndex) => (
            <div
              key={vIndex}
              className="border rounded-xl mt-4 p-4 space-y-4 relative"
            >
              <div className="absolute top-3 right-3">
                <IconButton size="small" color="error">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>

              <div>
                <label className="block font-medium mb-2">Images</label>

                <div className="flex gap-3 flex-wrap">
                  <label className="relative" htmlFor={`file-${vIndex}`}>
                    <span className="lg:w-24 lg:h-24 w-16 h-16 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                      <AddPhotoAlternateIcon
                        sx={{ fontSize: { xs: 18, md: 22 } }}
                        className="text-gray-700"
                      />
                    </span>

                    {/* <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-white/50 rounded-md">
                      <CircularProgress size={28} />
                    </div> */}
                  </label>

                  <input
                    id={`file-${vIndex}`}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />

                  {[
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
                  ]?.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={img}
                        className="w-20 h-20 rounded-md object-cover"
                      />
                      <div className="absolute top-0 right-0">
                        <IconButton size="small">
                          <CloseIcon sx={{ color: "red" }} fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <TextField fullWidth label="Selling Price *" />

                <TextField fullWidth label="MRP Price *" />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <TextField fullWidth label="Stock *" />
                </div>
                <div className="flex-1">
                  <Select fullWidth displayEmpty>
                    <MenuItem value="">Color *</MenuItem>
                    {colors.map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="flex-1">
                  <TextField fullWidth label="Size *" />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mt-6">Specifications</h2>

                <div className="flex gap-4 mt-4">
                  <TextField fullWidth label="Key" />

                  <TextField fullWidth label="Value" />

                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                {Object.entries(
                  {
                    hello: "world",
                  } || {},
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center p-2 border rounded-md"
                  >
                    <span>
                      {key}: {value}
                    </span>
                    <IconButton size="small">
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-lg font-semibold">Key Features</h2>

                <div className="flex gap-4 mt-4">
                  <TextField fullWidth label="Feature" />
                  <Button variant="contained" sx={{ background: "black" }}>
                    Add
                  </Button>
                </div>
              </div>

              <ul className="list-disc ml-5">
                {[1, 2, 3].map((f, i) => (
                  <li key={i} className="flex justify-between items-center">
                    {f}
                    <IconButton size="small">
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button
          variant="outlined"
          sx={{
            borderColor: "black",
            color: "black",
            textTransform: "capitalize",
            paddingY: "12px",
          }}
          fullWidth
        >
          <span> + Add Variant</span>
        </Button>

        <div className="mt-4">
          <p className="font-medium mb-2">Product Type</p>

          <label className="flex items-center gap-2">
            <input type="radio" name="productType" value="featured" />
            Featured Product
          </label>

          <label className="flex items-center gap-2 mt-2">
            <input type="radio" name="productType" value="bestSeller" />
            Best Seller
          </label>
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "capitalize",
            paddingY: "12px",
            height: "48px",
          }}
          fullWidth
        >
          {false ? (
            <CircularProgress color="white" size={13} />
          ) : (
            <span> + Add Product</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
