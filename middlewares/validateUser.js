const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: 'Invalid or missing "name". It must be a string.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid or missing "email". It must be a valid email address.',
    });
  }

  next(); // Proceed if validation passes
};

module.exports = { validateUser };
