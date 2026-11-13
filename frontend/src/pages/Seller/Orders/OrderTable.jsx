import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Skeleton,
  Pagination,
  Box,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledTableCell = (props) => (
  <TableCell
    sx={{
      fontSize: { xs: "12px", md: "14px" },
      padding: { xs: "6px 8px", md: "12px 16px" },
    }}
    {...props}
  />
);

const StyledTableRow = (props) => <TableRow {...props} />;

const OrderTable = () => {
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const handleOpenStatusModal = () => {
    setOpenStatusModal(true);
  };

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
  };
  return (
    <div className="w-full overflow-x-auto">
      <TableContainer
        component={Paper}
        className="shadow-md rounded-xl overflow-hidden"
      >
        <Table
          sx={{
            minWidth: { xs: 500, md: 700 },
            "& td, & th": { whiteSpace: "nowrap" },
          }}
          aria-label="responsive order table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000" }}>
              {[
                "Order ID",
                "Product",
                "Shipping Address",
                "Order Status",
                "Update",
              ].map((header) => (
                <StyledTableCell
                  key={header}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "11px", md: "14px" },
                  }}
                  align={
                    header == "Product" || header == "Order ID"
                      ? "left"
                      : "right"
                  }
                >
                  {header}
                </StyledTableCell>
              ))}
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

            {!false &&
              [1, 2, 3].map((order) => (
                <StyledTableRow>
                  <StyledTableCell>1</StyledTableCell>

                  <StyledTableCell>
                    <div className="flex flex-col gap-3">
                      {[1, 2].map((item) => (
                        <div key={item.id} className="flex gap-2 items-center">
                          <img
                            className="w-12 h-16 md:w-20 md:h-24 rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
                            alt=""
                          />

                          <div className="flex flex-col text-xs md:text-sm">
                            <span>Nike Air Zoom Running Sneakers For Men</span>
                            <span>₹499</span>
                            <span>black</span>
                            <span>Qty: 2</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <div className="flex flex-col gap-1 text-xs md:text-sm">
                      <span>Arman Ali</span>
                      <span>madina colony</span>
                      <span>jaipur</span>
                      <span>
                        <strong>Mobile:</strong> +91 7665407031
                      </span>
                    </div>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <span
                      className="px-2 py-1 text-xs md:text-sm border rounded-full"
                      style={{ borderColor: "#00927c", color: "#00927c" }}
                    >
                      PENDING
                    </span>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <Button
                      onClick={handleOpenStatusModal}
                      size="small"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: "10px", md: "13px" },
                        borderColor: "#000",
                        color: "#000",
                        "&:hover": { backgroundColor: "#000", color: "#fff" },
                      }}
                    >
                      Status
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}

            {1 === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-10 flex justify-center">
        <Pagination
          count={5}
          page={1}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>

      <p className="text-xs text-gray-500 text-center mt-2 lg:hidden">
        Scroll horizontally to see full table
      </p>

      <Modal
        keepMounted
        open={openStatusModal}
        onClose={handleCloseStatusModal}
        aria-labelledby="status-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 3,
            boxShadow: 6,
          }}
        >
          <Typography id="status-modal-title" variant="h6" mb={2}>
            Update Order Status
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              "CONFIRMED",
              "SHIPPED",
              "OUT_FOR_DELIVERY",
              "DELIVERED",
              "RETURNED",
              "REFUNDED",
            ].map((status) => (
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  justifyContent: "flex-start",
                  bgcolor: "#000",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                {false ? "Updating..." : status.replaceAll("_", " ")}
              </Button>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderTable;
