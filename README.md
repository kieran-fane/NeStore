# DigitalNEST Store

Here is a frontend mock-up for an ecommerce store that utilizes a minimal api. This is to showcase my ability to create visually apealing, and well organized frontend applications. 

To run locally use `npm install && npm run dev`.

## Structure

The file structure is as follows:

- /src
    - App.jsx => the main way to get components to render through a MUI router.
    - main.jsx => is where the app is rendered.
    - theme.js => the struct that holds the React theme.
    - appContext.js => initializes the context to be passed between components.
    - /Cart
        - CartDrawer.jsx => the Drawer that displays whats in the cart.
        - CartItem.jsx => each item that should be displayed in the cart.
        - CartItemInc.jsx => increase, decrease and delete a CartItem.
    - /Home
        - StoreGrid.jsx => lists all the products and allows for filtering.
        - FilterDropDown.jsx => allows for filtering through the category of the product.
        - ProductCard.jsx => displays a product on a card.
    - /ProductID
        - ProductDetail.jsx => Displays the page for a certain product.
