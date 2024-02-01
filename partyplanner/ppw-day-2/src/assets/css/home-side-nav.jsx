import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const generateRandomContent = (eventType) => {
  switch (eventType) {
    case 'Birthday Event':
      return 'Celebrate the joyous occasion with friends and family. Cake, music, and laughter!';
    case 'Marriage Event':
      return 'Join us in celebrating the union of two hearts. Love, joy, and unforgettable moments.';
    case 'Corporate Event':
      return 'An exclusive event for professionals. Networking, presentations, and innovation.';
    default:
      return 'Custom content for your special event. Customize it to make it unique!';
  }
};

const MediaCard = ({ title, imageSrc }) => {
  const content = generateRandomContent(title);

  return (
    <Card sx={{ maxWidth: 475, backgroundColor: 'black', color: 'white' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={imageSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: 'purple' }} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
