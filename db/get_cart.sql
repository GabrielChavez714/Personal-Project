SELECT cart.user_id, cart.cart_id, users.email FROM cart
JOIN users ON cart.user_id = users.user_id
WHERE user_id = $1;

SELECT * FROM cart_items
JOIN cart ON cart_items.cart_id = cart.cart_id
WHERE cart_id = $1;

SELECT * FROM product
JOIN cart_items ON product.product_id = cart_items.product_id
WHERE product_id = $1;