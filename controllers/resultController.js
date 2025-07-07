const Result = require('../models/Result');

exports.saveResult = async (req, res) => {
  try {
    
    const { email, result } = req.body;

    if (!email || !result) {
      return res.status(400).json({ message: 'Email and result are required' });
    }

    const savedResult = new Result({ email, result });
    await savedResult.save();

    res.status(201).json({ message: 'Result saved successfully', data: savedResult });
  } catch (err) {
    console.error('Error saving result:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getResultsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    
    const results = await Result.find({ email }).sort({ createdAt: -1 });

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch results' });
  }
};
