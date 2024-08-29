const routers = require('express').Router();


//-------------- Controllers Specific Stuffs
const CardController = require('./CardController');



//-------------Creating all routes here

routers.post('/cards',CardController().create_card); //Creating a new card, 'POST /cards'
routers.get('/cards',CardController().fetch_all_cards); //Fetch all cards, 'GET /cards'
routers.get('/search',CardController().search_card); //Searching the card data, 'GET /search'
routers.get('/cards/:title',CardController().fetch_card); //Fetch a new card by title, 'GET /cards/:title'


module.exports = routers;