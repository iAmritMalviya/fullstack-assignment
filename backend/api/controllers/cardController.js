
const Card =require('../models/Card'); 

// Create a new card
 const createHelpCard = async (req, res) => {
  try {
    const { id,title, content } = req.body;

    // Check if all required fields are provided
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Create a new card
    const newCard = new Card({id, title, content });
    await newCard.save();

    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all cards
 const getAllHelpCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single card by title
 const getHelpCardByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.findOne({ title });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.status(200).json(card);
  } catch (error) {
    console.error('Error fetching card:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a card by title
 const deleteHelpCardByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const result = await Card.deleteOne({ title });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error('Error deleting card:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports={
    getAllHelpCards,
    deleteHelpCardByTitle,
    getHelpCardByTitle,
    createHelpCard
}
