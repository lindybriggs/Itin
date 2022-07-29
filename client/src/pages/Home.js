import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {
  return (
    <Card align="center" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome!
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            Quit daydreaming, and take action on those dream vacations!

            Build, brainstorm, and plan your 'Bucket List Trips' NOW.

            Collect ideas for restaurants, hotels, activites, sites to see, etc.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
