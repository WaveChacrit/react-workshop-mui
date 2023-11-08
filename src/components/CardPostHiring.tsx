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
import IconButton from "@mui/joy/IconButton";
// import { Check } from '@mui/icons-material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chip from "@mui/joy/Chip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
export default function CardPostHiring() {
  return (
    <Card
      size="lg"
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
            level="title-lg"
            // startDecorator={<Typography level="body-md">by</Typography>}
          >
            Edward Kim
          </Typography>
          <Typography color="neutral" level="body-md">
            Posted 3 hrs ago
          </Typography>
        </Box>
        <IconButton size="lg" variant="soft" sx={{ height: "fit-content" }}>
          <MoreHorizIcon />
        </IconButton>
        {/* {heart ?
            <FavoriteIcon onClick={() => setHeart(false)}style={{ color: "red" }} />
            : <FavoriteBorderIcon onClick={() => setHeart(true) } style={{ color: "grey"}}/>
          } */}
      </CardContent>
      <CardContent sx={{ columnGap: "20px" }} orientation="horizontal">
        <Chip
          sx={{
            padding: "8px 16px",
            borderColor: "rgb(107 114 128)",
            color: "rgb(107 114 128)",
          }}
          variant="outlined"
        >
          Design
        </Chip>
        <Chip
          sx={{
            padding: "8px 16px",
            borderColor: "rgb(107 114 128)",
            color: "rgb(107 114 128)",
          }}
          variant="outlined"
        >
          Brand
        </Chip>
        <Chip
          sx={{
            padding: "8px 16px",
            borderColor: "rgb(107 114 128)",
            color: "rgb(107 114 128)",
          }}
          variant="outlined"
        >
          Product
        </Chip>
      </CardContent>
      <CardContent>
        <Typography level="title-lg" sx={{ color: "black" }}>
          Looking for a creative designer to build brand guidelines
        </Typography>
        <Typography color="neutral" level="body-sm">
          I'm growing my new startup and require a talented designer to form
          branding essentials for my product.
        </Typography>
      </CardContent>
      <Card orientation="horizontal" variant="soft">
        <CardContent
          sx={{ justifyContent: "space-between" }}
          orientation="horizontal"
        >
          <Typography
            level="h3"
            endDecorator={
              <Typography color="neutral" level="title-lg">
                / hr
              </Typography>
            }
          >
            &#x24; 130
          </Typography>
          <Chip
            sx={{ padding: "8px 16px" }}
            color="primary"
            onClick={function () {}}
            variant="outlined"
          >
            Hourly
          </Chip>
        </CardContent>
      </Card>
      <CardActions>
        <IconButton size="lg" variant="soft" sx={{ height: "fit-content" }}>
          <BookmarkBorderIcon color="primary"></BookmarkBorderIcon>
        </IconButton>
        <Button
          sx={{
            flexGrow: "2",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderRadius: "8px",
          }}
          variant="solid"
        >
          Apply now
        </Button>
      </CardActions>
    </Card>
  );
}
