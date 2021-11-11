/* eslint-disable import/no-extraneous-dependencies */
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/86f2e91786.js" crossorigin="anonymous"></script>
    <title>To Do List</title>
  </head>
  <body>
    <main>
      <h1>Today's to do</h1>
      <section id="todos" class="main-todos">
        <form id="add" class="add"></form>
        <input type="text" id="text">
        <button id="add">add</button>        
        <ul id="list-todos" class="list-todos">
        
        </ul>
      </section>
      <button id="completed" class="completed">Clear All Completed</button>

      
    </main>
    <script src="./test-1.js"></script>
  </body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;
