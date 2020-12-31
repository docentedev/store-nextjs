import WooCommerce from '../../backend/woocomerce'

export default function handler(req, res) {
    const {
        query: { include },
        method,
    } = req
    // Get data from your database
    WooCommerce.get(`products?include=${include}`).then(function (result) {
        res.status(200).json(result.data)
    })
}