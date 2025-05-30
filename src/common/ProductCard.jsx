import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ prod }) {
  const nav = useNavigate();
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={() => nav(`/product/${prod.id}`)}>
        <Box>
          {!loaded && <CircularProgress size={40}/>}
          <CardMedia
            component='img'
            image={prod.image}
            title={prod.name}
            onLoad={() => setLoaded(true)}
          />
        </Box>
        <CardContent>
          <Typography variant='h6'>{prod.name}</Typography>
          <Typography variant='subtitle1'>${prod.price.toFixed(2)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}