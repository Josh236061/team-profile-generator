

const Employee = require('./lib/Employee')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = (roster) => {
    // build manager card
    const createManager = (manager) => {
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getOfficeNumber();
        manager.getRole();
        // bootstrap card- template literal- push to array
        return `<div class="card text-white bg-dark mb-3" style="min-width: 18rem;">
  <div class="card-header">${manager.getName()}<br><i class="fas fa-mug-hot"></i> ${manager.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target="null">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>
  </div>
</div>
        `
    }
    // build intern card
    const createIntern = (intern) => {
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
        intern.getRole();
        // bootstrap card- template literal- push to array
        return `
        <div class="card bg-light mb-3" style="min-width: 18rem;">
  <div class="card-header">${intern.getName()}<br><i class="fas fa-user-graduate"></i> ${intern.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target="null">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>
</div>
  </div>
</div>
        `
    }
    // build engineer card
    const createEngineer = (engineer) => {
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGithub();
        engineer.getRole();
        // bootstrap card- temlate literal- push to array
        return `
        <div class="card text-white bg-info mb-3" style="min-width: 18rem;">
  <div class="card-header">${engineer.getName()}<br><i class="fas fa-glasses"></i> ${engineer.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target="null">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="null">${engineer.getGithub()}</a></li>
  </ul>
</div>
  </div>
</div>
        `
}

// filter out diff roles
// .map calls the three functions above
const cardArray = [];

// filter to get mgr, intern, engineer to push cards to this array
cardArray.push(roster
  .filter(item => item.getRole() === 'Manager')
  .map(newManager => createManager(newManager)).join(''));
cardArray.push(roster
  .filter(item => item.getRole() === 'Intern')
  .map(newIntern => createIntern(newIntern)).join(''));
cardArray.push(roster
  .filter(item => item.getRole() === 'Engineer')
  .map(newEngineer => createEngineer(newEngineer)).join(''));

// .join('')
return cardArray.join('');
}

module.exports = roster => {
    return `<!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        <!--fontawesome link-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>

        <!-- my stylesheet -->
        <link rel="stylesheet" href="src/css/style.css">

        <title>Team Profile Generator!</title>
    </head>
    <body>
    <header><h1>My Team</h1></header> 
    <div class='container'>
        <div class="portfolio-container">
            <div class="project-row">
            ${generateHTML(roster)}
            </div>
        </div>
    </div>
        <!-- Optional JavaScript; choose one of the two! -->

        <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
        -->
    </body>
    </html>
    `
};