import React from 'react';
import { Drawer, Box, Typography, Button, Divider } from '@mui/material';
import Context from './appContext';
import CartItem from './common/CartItem';
import { fetchProductsByID } from './api';

export default function CartDrawer() {
  const ctx = React.useContext(Context);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const ids = Array.from(ctx.cartItems.keys());
    Promise.all(ids.map(id => fetchProductsByID(id).then(r => ({ ...r.data, quantity: ctx.cartItems.get(id) })))).then(setProducts);
  }, [ctx.cartItems]);

  const total = React.useMemo(() => products.reduce((sum, p) => sum + p.price * p.quantity, 0).toFixed(2), [products]);

  return (
    <Drawer open={ctx.cartOpen} onClose={ctx.toggleDrawer} anchor="right">
      <Box
        sx={{display: 'flex',
          flexDirection: 'column',
          height: '90vh'}}>
        <Box sx={{ p: 2 }}>
          <Button onClick={ctx.toggleDrawer} sx={{ height: '50px', width: '50px' }}>{'>'}</Button>
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2 }}>
          {products.length === 0 ? (
            <Typography>Cart is empty</Typography>
          ) : (
            products.map(p => <CartItem key={p.id} prod={p} />)
          )}
        </Box>
        <Divider/>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h6">Total: ${total}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}