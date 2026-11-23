import {
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UserTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Registered On</TableCell>
              <TableCell align="right">Total Orders</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {false &&
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton variant="text" width="20%" />
                  </TableCell>

                  <TableCell align="right">
                    <Skeleton variant="text" width="100%" />
                  </TableCell>

                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>

                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                </TableRow>
              ))}
            {[1, 2, 3, 4, 5].map((u) => (
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell align="right">Arman Ali</TableCell>
                <TableCell align="right">armaanali.dev@gmail.com</TableCell>
                <TableCell align="right">12 July 2026</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
            ))}

            {1 === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users found.
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
    </>
  );
};

export default UserTable;
