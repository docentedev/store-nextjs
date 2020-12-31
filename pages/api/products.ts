import WooCommerce from '../../backend/woocomerce'

export default function handler(req, res) {
    const {
        query: { include },
        method,
    } = req

    let qs = ''
    if(include) qs += `?include=${include}`
    // Get data from your database
    WooCommerce.get(`products${qs}`).then(function (result) {
        res.status(200).json(result.data)
    })
}