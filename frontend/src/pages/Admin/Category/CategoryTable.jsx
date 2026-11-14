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
import EditCategoryForm from "./EditCategoryForm";

const CategoryTable = () => {
  const [openEditModaL, setOpenEditModal] = useState(false);
  const handleClose = () => setOpenEditModal(false);

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
                Image
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Description
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
                    <Skeleton variant="text" width="70%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="90%" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton variant="rectangular" width={60} height={30} />
                  </TableCell>
                </TableRow>
              ))}

            {[1, 2, 3, 4, 5].map((c) => (
              <TableRow
                key={c.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex gap-1">
                    <img
                      className="w-10 h-12 rounded-md object-cover object-top"
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop"
                      alt=""
                    />
                  </div>
                </TableCell>

                <TableCell>
                  {"Nike Air Zoom Running Sneakers For Men"}
                </TableCell>
                <TableCell sx={{ width: "200px" }}>
                  {
                    "Lightweight breathable running shoes with cushioned sole and strong grip for daily training and casual wear"
                  }
                </TableCell>
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
                <TableCell colSpan={4} align="center">
                  No categories found.
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
        <EditCategoryForm handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default CategoryTable;
