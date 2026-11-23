import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Skeleton,
  Pagination,
  CircularProgress,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditCouponForm from "./EditCouponForm";

const CouponCodeTable = () => {
  const [openEditModaL, setOpenEditModal] = useState(false);

  const handleClose = () => {
    setOpenEditModal(false);
  };

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
            <TableRow sx={{ backgroundColor: "#000" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Code
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Discount Type
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Discount Value
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Min. Order Amount
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Usage Limit
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Start Date
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                End Date
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
              Array.from(new Array(7)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton variant="text" width="60%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="70%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="50%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="80%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="50%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="60%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="60%" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton variant="rectangular" width={60} height={30} />
                  </TableCell>
                </TableRow>
              ))}

            {[1, 2, 3].map((c) => (
              <TableRow
                key={c.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>XYZ123</TableCell>
                <TableCell>Percentage</TableCell>
                <TableCell>10</TableCell>
                <TableCell>400</TableCell>
                <TableCell>2</TableCell>
                <TableCell>12 Jul 2026</TableCell>
                <TableCell>18 Jul 2026</TableCell>
                <TableCell align="right">
                  <div className="flex justify-end gap-2">
                    <IconButton
                      onClick={() => setOpenEditModal(true)}
                      color="primary"
                      size="small"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton color="error" size="small">
                      {false ? (
                        <CircularProgress size={17} />
                      ) : (
                        <DeleteIcon fontSize="small" />
                      )}
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {1 === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No coupons found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-10 flex justify-center">
        <Pagination
          count={10}
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

      <Modal open={openEditModaL} onClose={handleClose}>
        <EditCouponForm handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default CouponCodeTable;
