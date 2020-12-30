const users = [{
    id: 1,
    title: 'Computadores',
    key: 'computer',
    image: '/svgs/computer.svg',
}, {
    id: 2,
    title: 'Teclados',
    key: 'keyboard',
    image: '/svgs/keyboard.svg',
}]

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(users)
}