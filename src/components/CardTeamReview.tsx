import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Button from "@mui/joy/Button";
import CardActions from '@mui/joy/CardActions';

export default function CardTeamReview() {
  return (
    <Card
      variant="plain"
      sx={{ borderRadius: "2rem", boxShadow: "sm", width: "350x",height: "fit-content" }}
    >
      {/* <CardCover>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
        />
      </CardCover> */}
      <Typography level="h2" color="neutral">
        Final Design Review with
      </Typography>
      <Typography level="h2" sx={{ color: "black" }}>
        Thomas Lee
      </Typography>
      <Typography level="title-lg" color="neutral">
        Nov 20, 3:00pm
      </Typography>
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
          <Button onClick={function () {}} variant="solid" size="lg">
            Join
          </Button>
        </CardActions>
      </Card>
    </Card>
  );
}
