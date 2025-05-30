import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductCard from './common/ProductCard';
import FilterDropDown from './common/FilterDropDown';
import { fetchProducts } from './api';

export default function StoreGrid() {
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState(null);

  React.useEffect(() => { fetchProducts().then(r => setProducts(r.data)); }, []);
  const filtered = filter ? products.filter(p => p.category === filter) : products;

  return (
    <Container maxWidth='lg'>
      <Box sx={{display: 'flex', width: '100%',
      justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant='h4'>Our Products</Typography>
        <FilterDropDown setFilter={setFilter} />
      </Box>
      <Grid container spacing={6} sx={{p: 2}}>
        {filtered.map(p => (
          <Grid size={{xs:12,  sm:6, md:3}} key={p.id}>
            <ProductCard prod={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}