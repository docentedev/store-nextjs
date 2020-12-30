export default function userHandler(req, res) {
    const {
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(200).json({
                id: 5,
                title: 'DELL Monitor TN 22” FULL HD E2216H',
                description: '> Panel IPS<br>> Entradas DisplayPort + HDMI + VGA<br>> 1920 x 1080 Full HD<br>> Ratio de contraste estático 1000:1',
                price: '$98.990',
                previousPrice: '$100.000',
                discount: '%10',
                image: '/images/91ddmP-VCL._AC_SX679_.jpg',
                images: [
                    '/images/91ddmP-VCL._AC_SX679_.jpg',
                    '/images/dell_24_p2419h_full_hd_1535120460_1430184.jpg',
                    '/images/1535120206_IMG_1053761.png',
                ],
                tags: [{ title: 'Gabinete', key: 'gabinete' }],
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