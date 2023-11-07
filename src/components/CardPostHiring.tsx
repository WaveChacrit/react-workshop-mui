import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Button from "@mui/joy/Button";
import CardActions from "@mui/joy/CardActions";
import Box from "@mui/material/Box";
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Check } from '@mui/icons-material';

export default function CardPostHiring() {
  return (
    <Card
      variant="plain"
      sx={{
        borderRadius: "2rem",
        boxShadow: "sm",
        width: "400px",
        height: "fit-content",
      }}
    >
      <CardContent
          orientation="horizontal"
          sx={{ color: "white", justifyContent: "flex-center" }}
        >
          <Avatar
            alt=""
            size="lg"
            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Box className="ml-2 mr-auto">
            <Typography
              level="title-md"
              // startDecorator={<Typography level="body-md">by</Typography>}
            >
              Edward Kim
            </Typography>
            <Typography color="neutral" level="body-md">
              Posted 3 hrs ago
            </Typography>
          </Box>
          <IconButton variant="soft">
            <Check />
          </IconButton>
          {/* {heart ?
            <FavoriteIcon onClick={() => setHeart(false)}style={{ color: "red" }} />
            : <FavoriteBorderIcon onClick={() => setHeart(true) } style={{ color: "grey"}}/>
          } */}
        </CardContent>
      <Card variant="plain" orientation="horizontal">
        <CardContent sx={{ color: "white", justifyContent: "flex-end" }}>
          <AvatarGroup>
            <Avatar
              alt=""
              src="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Avatar
              alt=""
              src="https://images.unsplash.com/photo-1462062651745-495db7fa268a?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </AvatarGroup>

          {/* <Typography
          sx={{ color: "#888", fontWeight: 600, letterSpacing: "1px" }}
        >
          TRENDING
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button
            onClick={function () {}}
            variant="solid"
            size="lg"
            sx={{
              ":hover": { backgroundColor: "Aquamarine" },
              color: "Tomato",
              backgroundColor: "PowderBlue",
            }}
          >
            Join
          </Button>
        </CardActions>
      </Card>
    </Card>
  );
}
