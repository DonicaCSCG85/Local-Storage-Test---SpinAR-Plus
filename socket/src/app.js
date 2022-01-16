const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const items = {};

io.on("connection", socket => {

    // socket.on("getItem", itemTitle => {
    //     socket.join(itemTitle, () => console.log(`Socket ${socket.id} joined room ${itemTitle}`));
    //     socket.emit("item", items[itemTitle]);
    // });

    socket.on("getItems", io.emit(localStorage.getItem('items')));

    socket.on("addItem", item => {
        io.emit(localStorage.setItem('items', item))
    });

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});