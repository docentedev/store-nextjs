import WooCommerce from '../../../backend/woocomerce'

export default function userHandler(req, res) {
    const {
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            WooCommerce.get(`products/${id}`).then(function (result) {
                res.status(200).json(result.data)
            })
            break
        case 'PUT':
            // Update or create data in your database
            res.status(200).json({ id, name: name || `User ${id}` })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}