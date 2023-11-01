import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export default function CardTravelNorway() {
  const [value, setValue] = React.useState<number | null>(4.5);
  return (
    <Card sx={{ width: 300, height: 400, borderRadius: "2rem" }}>
      <CardCover>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </CardCover>
      <CardContent sx={{ alignItems: "flex-end" }}>
        <div className="flex justify-center items-center bg-white w-[50px] h-[50px] rounded-full">
          <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />
        </div>
      </CardContent>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h3" sx={{ color: "white" }}>
          Munkebu, Norway
        </Typography>
        <Typography
          level="title-sm"
          sx={{ color: "white" }}
          startDecorator={
            <PlaceOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
          }
        >
          Munkebu, Norway
        </Typography>
        <div className="flex flex-row">
          <Rating
            precision={0.1}
            value={value}
            readOnly
            emptyIcon={
              <StarIcon style={{ color: "white" }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2, color: "white" }}>{value}</Box>
        </div>
      </CardContent>
      {/* <CardContent sx={{justifyContent: "flex-end"}}>
        <Rating precision={0.1} value={value} readOnly />
        <Box sx={{ ml: 2 }}>{value}</Box>
      </CardContent> */}
    </Card>
  );
}
