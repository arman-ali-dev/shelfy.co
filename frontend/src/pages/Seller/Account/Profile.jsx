import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const Profile = () => {
  return (
    <>
      <div class="border-gray-300 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
        <h3 class="lg:text-[17px] text-[16px] text-[#353535] font-medium">
          Personal Information
        </h3>

        <form class="mt-5 space-y-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">Name</label>
              <input
                value={"Arman Ali"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                Email
              </label>
              <input
                value={"arman@gmail.com"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Phone Number
              </label>
              <input
                value={"+91 7665407031"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                GSTIN
              </label>
              <input
                value={"29AAACC1206D2ZB"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-2 items-start mt-5">
            {true ? (
              <>
                <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
                <p className="text-[14px] font-medium text-green-600">
                  Verified
                </p>
              </>
            ) : (
              <>
                <CancelIcon color="error" sx={{ fontSize: 18 }} />
                <p className="text-[14px] font-medium text-red-500">
                  Not Verified
                </p>
              </>
            )}
          </div>
        </form>
      </div>

      <div class="border-gray-300 mt-4 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
        <h3 class="lg:text-[17px] text-[16px] text-[#353535] font-medium">
          Business Information
        </h3>

        <form class="mt-5 space-y-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Business Name
              </label>
              <input
                value={"Arman's shop"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                Business Email
              </label>
              <input
                value={"arman@shop.com"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Business Phone Number
              </label>
              <input
                value={"+91 7665407031"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                Business Address
              </label>
              <input
                value={"madina colony jhotwara rajasthan 302012"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="border-gray-300 mt-4 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
        <h3 class="lg:text-[17px] text-[16px] text-[#353535] font-medium">
          Bank Details
        </h3>

        <form class="mt-5 space-y-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Account Holder Name
              </label>
              <input
                value={"Arman Ali"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                Account Number
              </label>
              <input
                value={"123456789345678"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                IFSC Code
              </label>
              <input
                value={"XCVBNM"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="border-gray-300 mt-4 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
        <h3 class="lg:text-[17px] text-[16px] text-[#353535] font-medium">
          Pickup Address
        </h3>

        <form class="mt-5 space-y-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">Name</label>
              <input
                value={"Arman Ali"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px]  font-medium">
                Phone Number
              </label>
              <input
                value={"+91 7662345678"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Pin Code
              </label>
              <input
                value={"302012"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Address
              </label>
              <input
                value={"madina colony"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                Locality
              </label>
              <input
                value={"jhotwara"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">City</label>
              <input
                value={"jaipur"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label class="lg:text-[15px] text-[13px] font-medium">
                State
              </label>
              <input
                value={"Rajasthan"}
                class="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
