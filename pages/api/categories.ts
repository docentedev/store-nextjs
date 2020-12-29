const users = [{
    id: 1,
    title: 'Computadores',
    query: '?category=computer',
    image: '/svgs/computer.svg',
}, {
    id: 2,
    title: 'Teclados',
    query: '?category=keyboard',
    image: '/svgs/keyboard.svg',
}]

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(users)
}