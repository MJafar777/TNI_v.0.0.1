// import { useState } from "react";
// // @mui
// import { MenuItem, Stack, Button } from "@mui/material";
// // locales
// import { useLocales } from "../locales";
// // components
// import Image from "../components/image";
// import MenuPopover from "../components/menu-popover";
// // language icon
// import lanIcon from "/assets/icons/flags/navbar-language-icon.png";

// // arrow icon
// import arrowIcon from "/assets/icons/flags/navbar-arrow-icon.png";

// // ----------------------------------------------------------------------

// export default function LanguagePopover() {
//   const { allLangs, currentLang, onChangeLang } = useLocales();

//   const [openPopover, setOpenPopover] = useState(null);

//   const handleOpenPopover = (event) => {
//     setOpenPopover(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setOpenPopover(null);
//   };

//   const handleChangeLang = (newLang) => {
//     onChangeLang(newLang);
//     handleClosePopover();
//   };
//   const styleButton = {
//     padding: "10px 16px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "202px",
//     height: "48px",

//     boxShadow: "0px 5px 5px rgba(8, 15, 52, 0.04)",
//     backgroundColor: "#FFFFFF",
//     borderRadius: "50px",
//     border: "1px solid #EFF0F7",

//     color: "#585858",
//     textTransform: "initial",

//     fontFamily: "Century Gothic",
//     fontStyle: "normal",
//     fontWeight: "400",
//     fontSize: "14px",
//     lineHeight: "20px",

//     transition: "all .3s ease",
//     ...(openPopover && {
//       bgcolor: "action.selected",
//     }),
//   };
//   return (
//     <div>
//       <Button
//         className="button__language--btn"
//         onClick={handleOpenPopover}
//         sx={styleButton}
//       >
//         <img src={lanIcon} alt="language icon" />

//         <p className="languageText">{currentLang.label}</p>

//         <img className="languageText" src={arrowIcon} alt="language icon" />

//         {/* <Image disabledEffect src={currentLang.icon} alt={currentLang.label} /> */}
//       </Button>

//       <MenuPopover
//         open={openPopover}
//         onClose={handleClosePopover}
//         sx={{
//           width: 180,
//           backgroundColor: "#FFFFFF",
//           color: "#585858",
//           "& .css-1kqnsw0": {
//             backgroundColor: "#FFFFFF",
//           },
//         }}
//       >
//         <Stack spacing={0.75}>
//           {allLangs.map((option) => (
//             <MenuItem
//               key={option.value}
//               selected={option.value === currentLang.value}
//               onClick={() => handleChangeLang(option.value)}
//             >
//               <Image
//                 disabledEffect
//                 alt={option.label}
//                 src={option.icon}
//                 sx={{ width: 28, mr: 2 }}
//               />

//               {option.label}
//             </MenuItem>
//           ))}
//         </Stack>
//       </MenuPopover>
//     </div>
//   );
// }
