const CardModel = require("./CardModel");

//------------ Handle the card related logic here
function CardController() {

    return {

        //--------- Creating a new card , POST '/cards'

        async create_card(req, res) {
            try {
                // console.log('req.body',req.body);
                const { title, description, link } = req.body;

                if (!title || !description || !link) return res.status(404).json({ success: false, msg: "All fields are required" })

                //Check this card is exist
                const isCardExist = await CardModel.findOne({ title });

                if (isCardExist) return res.status(400).json({ success: false, msg: "Card already exist" })

                //o/w create a new card
                await CardModel.create({ title, description, link });

                return res.status(201).json({ success: true, msg: "Creating a new card successfully" })


            } catch (error) { return res.status(500).json({ success: false, msg: error?.message }) }
        },


        //--------Fetch all cards, 'GET /cards'

        async fetch_all_cards(req, res) {
            try {
                const cards = await CardModel.find();
                return res.status(201).json({ success: true, msg: "Fetch all cards successfully", cards })


            } catch (error) { return res.status(500).json({ success: false, msg: error?.message }) }
        },

        //--------Fetch a new card by title, 'GET /cards/:title'

        async fetch_card(req, res) {
            try {
                let { title } = req.params;
                if (!title) return res.status(400).json({ success: false, msg: "Title is required to processed further" });

                title = title.toLowerCase();

                const isCardExist = await CardModel.findOne({ title });

                if (!isCardExist) return res.status(500).json({ success: false, msg: "Card not found" });

                return res.status(201).json({ success: true, msg: "Fetch card details successfully", card: isCardExist });


            } catch (error) { return res.status(500).json({ success: false, msg: error?.message }) }
        },
        //--------Searching the card data, 'GET /search'

        async search_card(req, res) {
            try {
                let { q } = req.query;
                if (!q) return res.status(400).json({ success: false, msg: "Query is required to search card" });

                q = q.toLowerCase();

                const isCardExist = await CardModel.find({
                    $or: [
                        { title: { $regex: q, $options: 'i' } },  // Case-insensitive search on title
                        { description: { $regex: q, $options: 'i' } }  // Case-insensitive search on description
                      ]
                })

                if (!isCardExist || isCardExist.length == 0) return res.status(500).json({ success: false, msg: "Card not found" });

                return res.status(201).json({ success: true, msg: "Fetch card details successfully", card: isCardExist });


            } catch (error) { return res.status(500).json({ success: false, msg: error?.message }) }
        },

    }
}

module.exports = CardController;