import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Avatar from "@mui/joy/Avatar";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Divider from "@mui/joy/Divider";

export default function CardListActivity() {
  const datas = [
    {
      id: 1,
      name: "Wave",
      current: "1 minute ago",
      profile:
        "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "wavech11@Y.com",
    },
    {
      id: 2,
      name: "Obey",
      current: "1 day ago",
      profile:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "Ocet7yannam@T.com",
    },
  ];

  return (
    <Card
      variant="plain"
      sx={{ borderRadius: "lg", boxShadow: "lg", width: "400px" }}
      //   orientation="horizontal"
    >
      <Typography sx={{ color: "black" }} level="h3">
        Activity
      </Typography>
      {datas.map((data, index) => {
        return (
          <CardContent key={data.id}>
            <CardContent
              orientation="horizontal"
              sx={{ color: "white", justifyContent: "flex-center" }}
            >
              <Avatar alt="" src={data.profile} />
              <Box className="ml-2 mr-auto">
                <Typography
                  sx={{ color: "black" }}
                  level="title-md"
                  startDecorator={<Typography level="body-md">by</Typography>}
                >
                  {data.name}
                </Typography>
                <Typography color="neutral" level="body-md">
                  {data.current}
                </Typography>
              </Box>
            </CardContent>
            <CardContent 
              sx={{justifyContent:"end"}}
              orientation="horizontal">
              {index+1 !== datas.length ? (
                <Divider
                  sx={{ marginLeft: "20px", height: "100px" }}
                  orientation="vertical"
                />
              ) : null}

              <Card
                sx={{width : "300px", alignSelf: "center", marginLeft: "30px" }}
                variant="soft"
                color="neutral"
              >
                <Typography level="body-lg" sx={{ color: "black" }}>
                  Reviewed and sent the invoice to
                  <Typography level="body-lg"> {data.email}</Typography>
                </Typography>
              </Card>
            </CardContent>
          </CardContent>
        );
      })}
    </Card>
  );
}
