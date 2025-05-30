import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Context from './appContext';
import { fetchProductsByID } from './api';

export default function ProductDetail() {
  const { id } = useParams();
  const [prod, setProd] = React.useState(null);
  const ctx = React.useContext(Context);
  const navigate = useNavigate()
  React.useEffect(() => {
    fetchProductsByID(id).then(r => setProd(r.data));
  }, [id]);

  if (!prod) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{position: 'relative', display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        height: '80vh'}}>
      <Box sx={{ position: { xs: 'static', md: 'absolute' },
          top: { md: 16 }, left: { md: 16 }, zIndex: 1,
          mb: { xs: 2, md: 0 }}}>
        <Button
          onClick={() => navigate('/')}
          startIcon={<ArrowBackIcon />}
          variant="text"
          sx={{height: '10vh', width: '20vw', maxWidth: 200}}>
          Back to products
        </Button>
      </Box>
      <Box sx={{width: 400, height: 400,
          display: 'flex', alignItems: 'center',
          alignSelf: { xs: 'flex-start', md: 'auto' },
          justifyContent: 'center', p: 2}}>
        <CardMedia
          component="img"
          image={prod.image}
          title={prod.name}
          sx={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
      </Box>
      <CardContent
        sx={{display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start', flex: 1, p: 2}}>
        <Typography variant="h4">{prod.name}</Typography>
        <Typography variant="h5">${prod.price.toFixed(2)}</Typography>
        <Typography variant="body1">{prod.description}</Typography>
        <Typography variant="body2">Category: {prod.category}</Typography>

        <Button
          onClick={() => ctx.updateCartItems(prod)}
          variant="contained"
          color="primary"
          sx={{mt: 2, width: '33vw', height: '5vh'}}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}