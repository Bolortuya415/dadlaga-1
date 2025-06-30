    const express = require('express');
    const app = express();
    const port = 3000; // You can choose any available port

    
    app.get('/sayhi', (req, res) => {
      console.log(req.query)
      var result = parseInt(req.query.num) + parseInt(req.query.num2)
      res.send('Hello, hi!' + result);
    });

    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });