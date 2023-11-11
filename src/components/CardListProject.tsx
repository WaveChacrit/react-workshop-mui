import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Avatar from "@mui/joy/Avatar";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Divider from "@mui/joy/Divider";

export default function CardListProject() {
  return (
    <Card
      variant="plain"
      sx={{
        width: "400px",
        borderRadius: "1rem",
        height: "fit-content",
        boxShadow: "lg",
      }}
    >
      {/* <CardCover>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
        />
      </CardCover> */}
      <Typography level="title-lg" sx={{ color: "black" }}>
        Recomended
      </Typography>
      <CardContent>
        <CardContent
        orientation="horizontal"
        sx={{ color: "white", justifyContent: "flex-center" }}
      >
          <Avatar
          alt=""
          size="lg"
          src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          // src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          <Typography level="title-lg" sx={{ color: "black" }}>
            App design for a Cypto platfo...
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
