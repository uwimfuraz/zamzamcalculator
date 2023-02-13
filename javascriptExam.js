 const http=require("http");

 const express=require("express");

 const app=express();

 const port = 2000; 

 app.listen(port, () => {
     console.log(`Calculator app listening at http://localhost:${port}`); 
});

 app.get('/addition', (req, res) => {
     const numbers = req.query.numbers;
     let sum = 0; for (let i = 0; i < numbers.length; i++) { 
        sum += parseInt(numbers[i]);
     } 
     res.send({ sum }); 


    });

   app.listen(port, () => { 
    console.log(`Calculator app listening at http://localhost:${port}`); 
});

app.get('/addition', (req, res) => { 

    const numbers = req.query.numbers;
     let sum = 0; 
     for (let i = 0; i < numbers.length; i++) { 
        
        sum += parseInt(numbers[i]);
     }

      res.send({ sum });

    });
    
    app.get('/multiplication', (req, res) => { 
        const numbers = req.query.numbers; 
        let product = 1; 
        for (let i = 0; i < numbers.length; i++) {
             product *= parseInt(numbers[i]);

             }
             res.send({ product });
         });

    


