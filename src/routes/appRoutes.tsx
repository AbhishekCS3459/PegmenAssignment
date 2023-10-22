
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";


import LooksOneIcon from "@mui/icons-material/LooksOne";
import PartnerInfo from "../pages/partnerinfo/PartnerInfo";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
import FoodPartner from "../pages/partnertime/FoodPartner";
import PhotoUpload from "../pages/photoupload/PhotoUpload";
import GenralInfo from "../pages/generalInformation/GenralInfo";
import UploadDocuments from "../pages/uploaddocuments/UploadDocuments";
import CommissionDetails from "../pages/commissiondetails/CommissionDetails";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/partnerinfo",
    element: <PartnerInfo />,
    state: "partnerinfo",
    sidebarProps: {
      displayText: "Food Partner Information",
      icon: <LooksOneIcon />,
    },
  },

  {
    path: "/partnertime",
    element: <FoodPartner />,
    state: "time_timings",
    sidebarProps: {
      displayText: "Food Partner Type & Timings",
      icon: <LooksTwoIcon />,
    },
  },
  {
    path: "/photoupload",
    element: <PhotoUpload />,
    state: "photoupload",
    sidebarProps: {
      displayText: "Upload_images",
      icon: <Looks3Icon />,
    },
  },
  {
    path: "/generalinformation",
    element: <GenralInfo />,
    state: "general_information",
    sidebarProps: {
      displayText: "General Information",
      icon: <Looks4Icon />,
    },
  },
  {
    path: "/uploaddocuments",
    element: <UploadDocuments />,
    state: "upload_documents",
    sidebarProps: {
      displayText: "Upload Documents",
      icon: <Looks5Icon />,
    },
  },
  {
    path: "/commissiondetails",
    element: <CommissionDetails />,
    state: "commission_details",
    sidebarProps: {
      displayText: "Commission Details",
      icon: <Looks6Icon />,
    },
  },
];

export default appRoutes;