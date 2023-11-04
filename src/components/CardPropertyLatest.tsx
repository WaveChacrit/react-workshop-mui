import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Avatar from "@mui/joy/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export default function CardPropertyLatest() {
  const [heart, setHeart] = useState(false);

  return (
    <Card
      variant="plain"
      sx={{ alignItems: "center" }}
      //   orientation="horizontal"
    >
      <AspectRatio
        flex
        ratio="21/9"
        sx={{ width: "500px", borderRadius: "lg", marginBottom: "-75px" }}
        z-0
      >
        <img
          src="https://images.unsplash.com/photo-1491186520512-d5e2bff29bb4?auto=format&fit=crop&q=80&w=1228&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AspectRatio>
      <Card
        sx={{ width: "450px", borderRadius: "lg"}}
      >
        <CardContent>
          <CardContent
            orientation="horizontal"
            sx={{ color: "white", justifyContent: "flex-center" }}
          >
            <Avatar
              alt=""
              src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Box className="ml-2 mr-auto">
              <Typography
                level="title-md"
                startDecorator={<Typography level="body-md">by</Typography>}
              >
                Chacrit Yaungkaew
              </Typography>
              <Typography color="neutral" level="body-md">
                January 21, 2019
              </Typography>
            </Box>
            {heart ? (
              <FavoriteIcon
                onClick={() => setHeart(false)}
                style={{ color: "red" }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setHeart(true)}
                style={{ color: "grey" }}
              />
            )}
          </CardContent>
          <CardContent
            orientation="vertical"
            sx={{ justifyContent: "flex-end" }}
          >
            <Typography level="h3" sx={{ color: "black" }}>
              Amazing Decoraticve House
            </Typography>
            <Typography level="body-lg" sx={{ color: "Grey" }}>
              Lorem ipsum dolor,consectetur...
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Card>
  );
}
