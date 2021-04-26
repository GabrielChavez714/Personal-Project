module.exports = {
    getAllProduct: async (req, res) => {
        const allProduct = await req.app.get('db').get_all_product();
        return res.status(200).send(allProduct);
    },
    bookProduct: async (req, res) => {

        const db = req.app.get('db');
        const { product_id } = req.body;
        const { cartID } = req.session.user;

        const addedProduct = await req.app.get('db').add_cart_item_to_cart(cartID, product_id);
        return res.status (200).send(addedProduct);
    }
}