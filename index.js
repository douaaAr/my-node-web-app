const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files like CSS, images, etc.
app.use(express.static('public'));

// Serve the HTML page when the root URL ("/") is accessed
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloud Computing Information</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
            color: #333;
          }
          header {
            background-color: #0077cc;
            color: white;
            padding: 20px;
            text-align: center;
          }
          section {
            padding: 20px;
          }
          h1 {
            font-size: 2em;
            margin-bottom: 10px;
          }
          p {
            line-height: 1.6;
          }
          footer {
            background-color: #0077cc;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Introduction to Cloud Computing</h1>
        </header>
        <section>
          <h2>What is Cloud Computing?</h2>
          <p>
            Cloud computing is the delivery of computing services such as servers, storage, databases, networking,
            software, and more over the internet ("the cloud"). This eliminates the need for organizations to manage
            physical servers or infrastructure.
          </p>
          <h2>Cloud Storage</h2>
          <p>
            Cloud storage allows users to store and access data online. Popular cloud storage services include
            Google Drive, Dropbox, and Microsoft OneDrive.
          </p>
          <h2>Cloud Providers</h2>
          <p>
            The leading cloud providers include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud. These
            companies offer a wide variety of cloud computing services for developers, businesses, and personal use.
          </p>
        </section>
        <footer>
          <p>&copy; 2025 Cloud Computing Info</p>
        </footer>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
