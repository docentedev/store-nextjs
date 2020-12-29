const users = [{
    id: 1,
    title: 'Dell Monitor 23,8″ IPS Full HD P2419H',
    price: '$157.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 2,
    title: 'DELL Monitor TN 22” FULL HD E2216H',
    price: '$98.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 3,
    title: 'DRAGSTER GT400 ELECTRIC GREEN',
    price: '$150.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 4,
    title: 'Dell Monitor 23,8″ IPS Full HD P2419H',
    price: '$157.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 5,
    title: 'DELL Monitor TN 22” FULL HD E2216H',
    price: '$98.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 6,
    title: 'DRAGSTER GT400 ELECTRIC GREEN',
    price: '$150.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}]

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(users)
}