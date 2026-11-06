import { useState } from "react";
import AddressCard from "./AddressCard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

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
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleOpenAddAddressForm = () => setOpenAddAddressForm(true);
  const handleCloseAddAddressForm = () => setOpenAddAddressForm(false);

  const handleCloseEditAddressForm = () => setOpenEditAddressForm(false);

  const handleOpenEditAddressForm = (address) => {
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
        <div className="space-y-3">
          {[1, 2, 3]?.map((address) => (
            <AddressCard
              handleOpenEditAddressForm={handleOpenEditAddressForm}
            />
          ))}
        </div>
      </div>

      {/* <Modal open={openAddAddressForm} onClose={handleCloseAddAddressForm}>
        <Box sx={style}>
          <AddressForm handleClose={handleCloseAddAddressForm} />
        </Box>
      </Modal> */}

      {/* <Modal open={openEditAddressForm} onClose={handleCloseEditAddressForm}>
        <Box sx={style}>
          <EditAddressForm
            handleClose={handleCloseEditAddressForm}
            addressData={selectedAddress}
          />
        </Box>
      </Modal> */}
    </>
  );
};

export default Address;
