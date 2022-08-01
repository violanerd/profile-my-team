const { writeFile } = require('node:fs/promises')


// this will need logic in index to make sure the right kind of card is called... multiple cards?
const getCard = require("./employee-card");


function htmlData(data) {
    return `
            <!DOCTYPE html> 
            <html lang="en"> 
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>My Team Profile</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/0827a21eea.js" crossorigin="anonymous"></script>
            </head>

            <body>
                <header>
                    <h1 class="text-light text-center bg-danger bg-gradient p-4 m-2">My Team</h1>
                </header>  
            
                <main class="container my-5">
                    <div class="row justify-content-around">
                        ${getCard(data)}
                    </div>
                </main>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">My team as of ${new Date().getFullYear()} by manager name</h3>
                </footer>
        </body>
        </html>
        `;
}

  module.exports = writeFile("./dist/index.html", htmlData());