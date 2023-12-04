import { v4 as uuidv4 } from 'uuid';
import LoginImg from "../images/login.jpg"
 import GuessImg from "../images/guess.jpg";
import AgeImg from "../images/Age.jpg";
import ShopImg from "../images/payTax.jpg";
import DiceImg from "../images/dicImg.jpg";
import SnakeImg from "../images/snakeGame.jpg";

const projects = [
  {
    id: uuidv4(),
    name: 'Login Form',
    desc:
   'It is a simple login form ,that use in different web pages for submit.',
    Img: LoginImg,
   demoLink:"https://login-form-ten-beta.vercel.app/",
   githubLink:"https://github.com/SamanaFaizi123/LoginForm"
  },
  {
    id: uuidv4(),
    name: 'Guess Number',
    desc:
    'This is a fun website where the computer randomly generates numbers between 1 and 20 and we have to guess the correct number just like a game.',
    Img: GuessImg,
    demoLink:"https://guess-sand.vercel.app/",
    githubLink:"https://github.com/SamanaFaizi123/third"
  },
  {
    id: uuidv4(),
    name: 'Calculat Age Project',
    desc:
      'This is an amazing app, when you enter a special year this app  compute your year,months,and  your day old .',
    Img:AgeImg ,
    demoLink:"https://app-calaculator.vercel.app/",
    githubLink:"https://github.com/SamanaFaizi123/AppCalaculator"
  },
 
  {
    id: uuidv4(),
    name: 'Dice game',
    desc:
      'This an amazing game site, this is two-player game,when the first player clicks on the roll button ,the game starts,and if he clicks on the hold button,his score is recorded and it is the turn of player2 ,and the game continues in the same way. ',
    Img:DiceImg ,
    demoLink:" https://game-theta-two.vercel.app/",
    githubLink:'https://github.com/SamanaFaizi123/game'
  },

  {
    id: uuidv4(),
    name: 'Snake game',
    desc:
      'This is an interesting and old game that snake is searching the food.  this game  play with arrow keys of key borad . '
     ,
    Img:SnakeImg ,
    demoLink:"https://project3-psi-seven.vercel.app/",
    githubLink:"https://github.com/SamanaFaizi123/project3"
  },
  {
    id: uuidv4(),
    name: "Tax payee",
    desc:
      'This site is about paying the shop tax,when we click on the shop tax detail button ,the shop tax amount is displayed,and when we cilck on pay tax button, the tax is paid.',
    Img: ShopImg,
   demoLink:"https://tax-payy.vercel.app/",
   githubLink:" https://github.com/SamanaFaizi123/taxPayy"
  },
];


export default projects;



