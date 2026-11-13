import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  CircularProgress,
  IconButton,
  Pagination,
  Skeleton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable() {
  return (
    <div className="w-full overflow-x-auto">
      <TableContainer
        component={Paper}
        className="shadow-md rounded-xl overflow-hidden"
      >
        <Table
          sx={{
            minWidth: 650,
            "& td, & th": { whiteSpace: "nowrap" },
          }}
          aria-label="responsive table"
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#000",
              }}
            >
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Images
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Title
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                MRP
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Selling Price
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Color/Size
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Stock
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {false &&
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton variant="rectangular" width={40} height={40} />
                  </TableCell>

                  <TableCell>
                    <Skeleton variant="text" width="90%" height={80} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="80%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="60%" />
                  </TableCell>

                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>

                  <TableCell align="right">
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Skeleton variant="rectangular" width={60} height={30} />
                    </Box>
                  </TableCell>

                  <TableCell align="right">
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Skeleton variant="rectangular" width={60} height={30} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

            {[1, 2, 3].map((product) =>
              [1, 2].map((variant, index) => (
                <TableRow key={variant.id}>
                  <TableCell>
                    <div className="flex gap-1">
                      {[
                        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
                      ]
                        .slice(0, 3)
                        .map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            className="w-10 h-12 rounded-md object-cover"
                            alt="variant"
                          />
                        ))}
                    </div>
                  </TableCell>

                  <TableCell>
                    {"Nike Air Zoom Running Sneakers For Men"
                      ?.split(" ")
                      .slice(0, 2)
                      .join(" ") +
                      ("Nike Air Zoom Running Sneakers For Men".split(" ")
                        .length > 2
                        ? "..."
                        : "")}
                  </TableCell>

                  <TableCell align="right">{`₹599`}</TableCell>

                  <TableCell align="right">{`₹499`}</TableCell>

                  <TableCell align="right">black / XL</TableCell>

                  <TableCell align="right">45</TableCell>

                  <TableCell align="right">
                    <div className="flex justify-end gap-2">
                      {index === 0 && (
                        <>
                          <IconButton color="primary" size="small">
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton color="error" size="small">
                            {false ? (
                              <CircularProgress size={14} color="black" />
                            ) : (
                              <DeleteIcon fontSize="small" />
                            )}
                          </IconButton>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )),
            )}

            {1 === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-10 flex justify-center">
        <Pagination
          count={4}
          page={1}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>

      <p className="text-xs text-gray-500 text-center mt-2 lg:hidden">
        Scroll horizontally to view more
      </p>
    </div>
  );
}
