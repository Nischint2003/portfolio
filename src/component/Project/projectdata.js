import mealsapp from "../../assets/mealsapp.jpg";
import adminpanelapp from "../../assets/adminpanelapp.jpg";
import notesapp from "../../assets/notesapp.jpg";
import tailwind from "../../assets/tailwind.svg";
import CSS3 from "../../assets/CSS3.svg";
import Bootstrap from "../../assets/Bootstrap.svg";
import HTML5 from "../../assets/HTML5.svg";
import MaterialUI from "../../assets/MaterialUI.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Mongoose from "../../assets/Mongoose.js.svg";
import Nodejs from "../../assets/Node.js.svg";
import React from "../../assets/React.svg";
import Sass from "../../assets/Sass.svg";
import TypeScript from "../../assets/TypeScript.svg";
import Express from "../../assets/Express.svg";
const projectdata = [
  {
    image: mealsapp,
    title: "Meals App",
    description:
      "A food deliver app , made using  MERN stack and tailwind CSS .Customer can order food and track their delivery , this app also consists of admin panel for smooth function of the delivery service.   ",
    github: "https://github.com/Nischint2003/Food-DeliveryApp",
    demo: "https://food-deliveryapp-frontend-t0kw.onrender.com/",
    icons: [MongoDB, Express, React, Nodejs, tailwind, CSS3],
  },
  {
    image: adminpanelapp,
    title: "Mordern Admin Panel",
    description:
      "Mordern looking admin panel to track the users and the products brought and on the top of that data visualization of the purchase data with user friendly UI.",
    github: "https://github.com/Nischint2003/react-admin-panel",
    demo: "https://nischint-admin-panel.onrender.com",
    icons: [React, MaterialUI, Sass, TypeScript],
  },
  {
    image: notesapp,
    title: "Notes Nest",
    description:
      "A note making app made with NODE MONGOOSE and EJS , includes authentication and authorization with CRUD operation .",
    github: "https://github.com/Nischint2003/NotesNest",
    demo: "https://notesnest-production.up.railway.app/",
    icons: [Nodejs, MongoDB, Mongoose, Bootstrap, HTML5, CSS3],
  },
];

export default projectdata;
