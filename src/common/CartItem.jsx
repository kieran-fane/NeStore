import React from 'react';
import { Box, Card, CardMedia, CardContent, IconButton, Typography } from '@mui/material';
import CartItemInc from './CartItemInc';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Context from '../appContext';

export default function CartItem({ prod }) {
    const ctx = React.useContext(Context);
    return (
        <Card sx={{justifyContent: 'center', margin: '2', 
            display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            <Box sx={{ width: 100, height: 100, display: 'flex',
                alignItems: 'center', justifyContent: 'center', p: 1}}>
                <CardMedia component="img"
                    image={prod.image}
                    title={prod.name}
                    sx={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
            </Box>
            <CardContent sx={{display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', flex: 1, p: 2}}>
                <Typography variant="h6">{prod.name}</Typography>
                <Typography variant="h7 ">${prod.price.toFixed(2)}</Typography>
                <CartItemInc prod={prod} />
                <IconButton onClick={() => ctx.delCartItem(prod.id)} sx={{width: '20%'}}>
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
            </CardContent>
        </Card>
    );
}