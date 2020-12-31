const users = [{
    id: 1,
    title: 'IVIR5AK',
    price: 157990,
    formatPrice: '$157.990',
    image: '/images/CC-9011166-WW-Gallery-SPEC-DELTA-04.png',
}, {
    id: 2,
    title: 'DELL Monitor TN 22” FULL HD E2216H',
    price: 98990,
    formatPrice: '$98.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 3,
    title: 'DRAGSTER GT400 ELECTRIC GREEN',
    price: 15990,
    formatPrice: '$15.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 4,
    title: 'Dell Monitor 23,8″ IPS Full HD P2419H',
    price: 157990,
    formatPrice: '$157.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}, {
    id: 5,
    title: 'DELL Monitor TN 22” FULL HD E2216H',
    price: 90000,
    formatPrice: '$90.000',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
    discount: '10%',
    previousPrice: 100000,
    formatPreviousPrice: '$100.000',
}, {
    id: 6,
    title: 'DRAGSTER GT400 ELECTRIC GREEN',
    price: 15990,
    formatPrice: '$15.990',
    image: '/images/91ddmP-VCL._AC_SX679_.jpg',
}]

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(users)
}