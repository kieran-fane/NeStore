import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import Context from '../appContext';

export default function CartItemInc({ prod }) {
  const ctx = React.useContext(Context);
  return (
     <Box sx={{display: 'flex', flexDirection: 'row',
        flex: 1, justifyContent: 'flex-start',
        alignItems: 'center'}}>
      <Button onClick={() => ctx.decCartItem(prod.id)}>-</Button>
      <Box sx={{width: '20%', display: 'flex',
          justifyContent: 'center', alignItems: 'center'}}>
        {ctx.cartItems.get(prod.id) || 0}
      </Box>
      <Button onClick={() => ctx.updateCartItems(prod)}>+</Button>
    </Box>
  );
}