const { writeFile } = require('node:fs/promises')
const Employee = require('../lib/Employee');

const testEmployee = new Employee('Test', 2, 'me@me.com');

const htmlData =
`
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link href="" <!--want to include font awesome -->>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1 class="text-light text-center bg-danger bg-gradient p-1 m-2">My Team</h1>
        </header>  
       
        <main class="container my-5">
        ${testEmployee.name}
        ${testEmployee.id}
        ${testEmployee.email}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">My team as of ${new Date().getFullYear()} by manager name</h3>
        </footer>
  </body>
  </html>
  `;

  writeFile("./dist/index.html", htmlData);