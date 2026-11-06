import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { CircularProgress } from "@mui/material";

const UserDetails = () => {
  return (
    <>
      <form>
        <div className="border-gray-300 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
          <h3 className="lg:text-[17px] text-[16px] font-medium mb-4">
            Profile Picture
          </h3>

          <div className="flex lg:gap-8 gap-5 items-center">
            <div className="relative">
              <img
                className="lg:w-32.5 lg:h-32.5 w-20 h-20 rounded-full object-cover"
                src={
                  "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt=""
              />

              {false && (
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-[3px] border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                className="bg-black/10 cursor-pointer lg:text-[16px] text-[13px] px-6 py-2.5 gap-1.5 rounded-sm font-medium flex items-center"
              >
                <CameraAltOutlinedIcon />
                Change Photo
              </button>

              <input type="file" accept="image/*" className="hidden" />

              <p className="text-[#676767] lg:text-[11px] text-[8px] mt-1.5 font-medium">
                JPG, GIF or PNG. Max size 2MB.
              </p>
            </div>
          </div>
        </div>
        <div class="border-gray-300 mt-4 border lg:rounded-2xl rounded-md px-6 pt-5 pb-6">
          <h3 class="lg:text-[17px] text-[16px] text-[#353535] font-medium">
            Personal Information
          </h3>

          <div>
            <label className="lg:text-[15px] text-[13px] font-medium">
              Name
            </label>
            <input
              name="fullName"
              className="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
              type="text"
            />
          </div>

          <div>
            <label className="lg:text-[15px] text-[13px] font-medium">
              Email
            </label>
            <input
              name="email"
              className="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
              type="email"
            />
          </div>

          <div>
            <label className="lg:text-[15px] text-[13px] font-medium">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              className="w-full mt-0.5 lg:text-[14px] text-[13px] bg-[#F5F5F5] px-4 py-2.5 rounded-md border-0 outline-none"
              type="text"
            />
          </div>

          <div className="text-right mt-5">
            <button
              type="submit"
              className="bg-black text-white text-[15px] px-6 py-2.5 rounded-sm font-medium mt-3 flex items-center gap-2 cursor-pointer"
            >
              {false ? <CircularProgress size={13} /> : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserDetails;
