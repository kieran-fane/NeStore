import React from 'react';
import { Badge, Box, AppBar, ThemeProvider, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Context from './appContext';
import CartDrawer from './Cart/CartDrawer';
import { Outlet } from 'react-router-dom';
import theme from './theme';

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      try {
        return new Map(JSON.parse(saved));
      } catch {
        return new Map();
      }
    }
    return new Map();
  });
  const cartCount = React.useMemo(
    () => Array.from(cartItems.values()).reduce((sum, qty) => sum + qty, 0), [cartItems]);  
  const toggleDrawer = () => setCartOpen(o => !o);
  const updateCartItems = prod => {
    setCartItems(prev => {
      const next = new Map(prev);
      next.set(prod.id, (prev.get(prod.id) || 0) + 1);
      return next;
    });
  };
  const decCartItem = prodId => {
    setCartItems(prev => {
      const next = new Map(prev);
      const qty  = next.get(prodId) || 0;
      if (qty <= 1) next.delete(prodId);
      else          next.set(prodId, qty - 1);
      return next;
    });
  };

  const delCartItem = prodID => {
    setCartItems(prev => {
      const next = new Map(prev);
      next.delete(prodID);
      return next;
    })
  };

  React.useEffect(() => {
    const toStore = JSON.stringify(Array.from(cartItems.entries()));
    localStorage.setItem('cartItems', toStore);
  }, [cartItems]);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{cartOpen, toggleDrawer, cartCount, updateCartItems,
      decCartItem, cartItems, delCartItem}}>
        <Box sx={{ width: '100vw' }}>
          <AppBar position='fixed' sx={{width: '100vw'}}>
            <Toolbar>
              <Typography variant='h4' sx={{ flexGrow: 1, color: '#073763', fontWeight: 'bold' }}>
                DigitalNEST Store
              </Typography>
              <IconButton onClick={toggleDrawer} sx={{width: '50px', height: '50px'}}>
                <Badge badgeContent={cartCount} color='error'>
                  <ShoppingCartIcon fontSize='small'/>
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box sx={{p: 10}}>
            <Outlet />
          </Box>
          <CartDrawer />
        </Box>
      </Context.Provider>
    </ThemeProvider>
  );
}
