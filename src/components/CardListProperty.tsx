import React from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Avatar from "@mui/joy/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardListProperty() {
  return (
    <Card
      variant="plain"
      orientation="horizontal"
      sx={{
        width: 500,
        resize: "horizontal",
        overflow: "auto",
        borderRadius: "md",
        boxShadow: "lg",
      }}
    >
      <CardOverflow>
        <AspectRatio flex ratio="1" sx={{ minWidth: 160 }}>
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
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
              Pornthawee Thaweesin
            </Typography>
            <Typography color="neutral" level="body-md">
              January 21, 2019
            </Typography>
          </Box>
          <FavoriteIcon style={{ color: "red" }} />
        </CardContent>
        <CardContent orientation="vertical" sx={{ justifyContent: "flex-end" }}>
          <Typography level="h3" sx={{ color: "black" }}>
            Amazing Decoraticve House
          </Typography>
          <Typography level="body-lg" sx={{ color: "Grey" }}>
            Lorem ipsum dolor,consectetur...
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
