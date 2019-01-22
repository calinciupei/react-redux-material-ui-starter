/*!

 =========================================================
 * Material UI Style Configuration
 =========================================================

 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT ()

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// start layout styles
const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
  };

 const container = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "600px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "1280px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1280px"
    }
 };
// end layout styles

 export {
     conatinerFluid,
     container
 };