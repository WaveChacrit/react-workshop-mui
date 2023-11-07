import * as React from "react";
import Box from "@mui/joy/Box";
import CardPluto from "./CardPluto";
import CardPlanTrip from "./CardPlanTrip";
import CardPlanTrip2 from "./components/CardPlanTrip";
import CardBooking from "./CardBooking";
import CardPluto2 from "./components/CardPluto";
import CardBlog from "./components/CardBlog";
import CardTravelNorway from "./components/CardTravelNorway";
import CardListProperty from "./components/CardListProperty";
import CardPropertyLatest from "./components/CardPropertyLatest";
import CardListActivity from "./components/CardListActivity";
import CardTeamReview from "./components/CardTeamReview";
import CardPostHiring from "./components/CardPostHiring";

function App() {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, margin: '60px' }}>
      <CardPluto />
      <CardPlanTrip />
      <CardBooking />
      <CardPluto2 />
      <CardPlanTrip />
      <CardPlanTrip2 />
      <CardBlog />
      <CardTravelNorway />
      <CardListProperty name={"Chacrit"} profile={"https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/> 
      <CardListProperty name={"Pornthawee"} profile={"https://images.unsplash.com/photo-1497316730643-415fac54a2af?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <CardPropertyLatest/>
      <CardListActivity/>
      <CardTeamReview/>
      <CardPostHiring/>
    </Box>
  )
}

export default App
