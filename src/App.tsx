import * as React from "react";
import Box from "@mui/joy/Box";
// import CardPluto from "./CardPluto";
// import CardPlanTrip from "./CardPlanTrip";
// import CardPlanTrip2 from "./components/CardPlanTrip";
import CardBooking from "./CardBooking";
// import CardPluto2 from "./components/CardPluto";
import CardBlog from "./components/CardBlog";
import CardTravelNorway from "./components/CardTravelNorway";
import CardListProperty from "./components/CardListProperty";


function App() {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, margin: '60px' }}>
      {/* <CardPluto />
      <CardPlanTrip /> */}
      <CardBooking />
      {/* <CardPluto2 /> */}
      {/* <CardPlanTrip />
      <CardPlanTrip2 /> */}
      {/* <CardBlog /> */}
      {/* <CardListProperty />
      <CardListProperty /> */}
      {/* <CardTravelNorway /> */}
      <CardListProperty/>
      {/* <CardListProperty/> */}
    </Box>
  )
}

export default App
