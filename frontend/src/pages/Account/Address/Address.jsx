import { useState } from "react";
import AddressCard from "./AddressCard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, Modal, Skeleton } from "@mui/material";
import NoAddressFound from "./NoAddressFound";
import AddressForm from "./AddressForm";
import EditAddressForm from "./EditAddressForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: 500 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 3, lg: 4 },
  borderRadius: "8px",
};

const Address = () => {
  const [openAddAddressForm, setOpenAddAddressForm] = useState(false);

  const [openEditAddressForm, setOpenEditAddressForm] = useState(false);

  const handleOpenAddAddressForm = () => setOpenAddAddressForm(true);
  const handleCloseAddAddressForm = () => setOpenAddAddressForm(false);

  const handleCloseEditAddressForm = () => setOpenEditAddressForm(false);

  const handleOpenEditAddressForm = () => {
    setOpenEditAddressForm(true);
  };

  return (
    <>
      <div>
        <div className="mb-5 text-right">
          <Button
            onClick={handleOpenAddAddressForm}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "black",
              fontSize: 14,
              paddingY: 1,
              paddingX: 3,
            }}
          >
            <AddIcon />
            <span className="ml-1 text-[13px]">Add Address</span>
          </Button>
        </div>

        {false ? (
          <AddressListSkeleton />
        ) : 1 === 0 ? (
          <NoAddressFound />
        ) : (
          <div className="space-y-3">
            {[1, 2, 3].map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                handleOpenEditAddressForm={handleOpenEditAddressForm}
              />
            ))}
          </div>
        )}
      </div>

      <Modal open={openAddAddressForm} onClose={handleCloseAddAddressForm}>
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>

      <Modal open={openEditAddressForm} onClose={handleCloseEditAddressForm}>
        <Box sx={style}>
          <EditAddressForm />
        </Box>
      </Modal>
    </>
  );
};

const AddressListSkeleton = () => {
  return (
    <Box className="space-y-3">
      {[1, 2, 3].map((i) => (
        <Box key={i} className="border border-gray-300 rounded-md p-4 lg:p-5">
          <Skeleton height={20} width="40%" />
          <Skeleton height={16} width="90%" style={{ marginTop: 10 }} />
          <Skeleton height={16} width="60%" />
          <Skeleton height={16} width="80%" style={{ marginTop: 10 }} />

          <Box className="flex gap-3 mt-5">
            <Skeleton height={35} width={80} />
            <Skeleton height={35} width={80} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Address;
