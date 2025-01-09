const multer = require("multer");

// Set up storage options 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename the file
  },
});

// Initialize Multer with storage options
const upload = multer({ storage: storage });

// Controller to handle file upload
const uploadFile = upload.single("file"); // 'file' is the name of the input field

const handleFileUpload = (req, res) => {
  uploadFile(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Error uploading file",
        error: err.message,
      });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded!" });
    }

    res.status(200).json({
      success: true,
      message: "File uploaded successfully!",
      file: req.file, // Contains file details
    });
  });
};

module.exports = { handleFileUpload };
