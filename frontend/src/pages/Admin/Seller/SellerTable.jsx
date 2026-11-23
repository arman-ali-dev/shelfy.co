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

const SellerTable = () => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          stickyHeader
          sx={{ minWidth: 1200 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Business Name</TableCell>
              <TableCell>GSTIN</TableCell>
              <TableCell>Registered On</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Total Orders</TableCell>
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

                  <TableCell>
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
            {[1, 2, 3].map((s) => (
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Arman Ali</TableCell>
                <TableCell>armanali.dev@gmail.com</TableCell>
                <TableCell>Apprax Solutions</TableCell>
                <TableCell>22AAAAA0000A1Z5</TableCell>
                <TableCell>12 July 2026</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>234</TableCell>
              </TableRow>
            ))}

            {1 === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No sellers found.
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

export default SellerTable;
