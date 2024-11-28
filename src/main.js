// import { createApp } from 'vue'

// import App from './App.vue'

// createApp(App).mount('#app')

// Import plugins and libraries
import { createApp } from "vue";
import "./style.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

// Import icon components
import {
  FaGithub,
  FaGoogle,
  FaMoon,
  FaSun,
  FaLaptop,
  FaEye,
  FaEyeSlash,
  BiFolderFill,
  MdDiscountRound,
  RiMoneyDollarCircleFill,
  HiSolidTrendingUp,
  FaChartPie,
  MdPrecisionmanufacturingRound,
  MdContentpastesearchRound,
  SiBookstack,
  IoPieChart,
  MdSettingssuggestRound,
  MdAddcircleRound,
  MdCheckboxRound,
  MdCheckboxoutlineblank,
  MdClouduploadRound,
  MdCloseRound,
  IoCloseCircle,
  BiPlusCircleFill,
  MdRadiobuttoncheckedTwotone,
  MdRadiobuttonuncheckedTwotone,
  BiGlobe,
  FaTasks,
  MdKeyboardarrowrightRound,
  OiDeviceCameraVideo,
  WiTime3,
  CoPhone,
  FaRegularPlayCircle,
  FaHospitalUser,
  BiLockFill,
  FaBell,
  MdEmergencyRound,
  MdFamilyrestroomRound,
  HiSolidCreditCard,
  MdQuestionmarkRound,
  HiLogout,
  BiCalendarWeek,
  RiFolderAddFill,
  FaClinicMedical,
  FaExternalLinkAlt,
  IoChevronBackOutline,
  CoHamburgerMenu,
  IoCloseOutline,
  MdKeyboardarrowdownRound,
  IoLanguageSharp,
  MdManageaccountsSharp,
  FaStethoscope,
  IoHome,
  IoChatboxEllipses,
  CoPlus,
  HiPlusCircle,
  FaTrashAlt,
  FaShareSquare,
  IoCheckmarkCircleOutline,
  RiArrowLeftSLine,
} from "oh-vue-icons/icons";

// Import main application components
import App from "./App.vue";
import router from "./router/router";

// Setup and configure the app
const app = createApp(App);

// Register icons
addIcons(
  FaGithub,
  FaGoogle,
  FaMoon,
  FaSun,
  FaLaptop,
  FaEye,
  FaEyeSlash,
  BiFolderFill,
  MdDiscountRound,
  RiMoneyDollarCircleFill,
  HiSolidTrendingUp,
  FaChartPie,
  MdPrecisionmanufacturingRound,
  MdContentpastesearchRound,
  SiBookstack,
  IoPieChart,
  MdSettingssuggestRound,
  MdAddcircleRound,
  MdCheckboxRound,
  MdCheckboxoutlineblank,
  MdClouduploadRound,
  MdCloseRound,
  IoCloseCircle,
  BiPlusCircleFill,
  MdRadiobuttoncheckedTwotone,
  MdRadiobuttonuncheckedTwotone,
  BiGlobe,
  FaTasks,
  MdKeyboardarrowrightRound,
  OiDeviceCameraVideo,
  WiTime3,
  CoPhone,
  FaRegularPlayCircle,
  FaHospitalUser,
  BiLockFill,
  FaBell,
  MdEmergencyRound,
  MdFamilyrestroomRound,
  HiSolidCreditCard,
  MdQuestionmarkRound,
  HiLogout,
  BiCalendarWeek,
  RiFolderAddFill,
  FaClinicMedical,
  FaExternalLinkAlt,
  IoChevronBackOutline,
  CoHamburgerMenu,
  IoCloseOutline,
  MdKeyboardarrowdownRound,
  IoLanguageSharp,
  MdManageaccountsSharp,
  FaStethoscope,
  IoHome,
  IoChatboxEllipses,
  CoPlus,
  HiPlusCircle,
  FaTrashAlt,
  FaShareSquare,
  IoCheckmarkCircleOutline,
  RiArrowLeftSLine
);

// Use plugins
app.use(router);

app.component("v-icon", OhVueIcon);

// Mount the app
app.mount("#app");
