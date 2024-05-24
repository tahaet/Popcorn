import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// const skills = [
//   {
//     skill: "HTML+CSS",
//     level: "advanced",
//     color: "#2662EA",
//   },
//   {
//     skill: "JavaScript",
//     level: "advanced",
//     color: "#EFD81D",
//   },
//   {
//     skill: "Web Design",
//     level: "advanced",
//     color: "#C3DCAF",
//   },
//   {
//     skill: "Git and GitHub",
//     level: "intermediate",
//     color: "#E84F33",
//   },
//   {
//     skill: "React",
//     level: "advanced",
//     color: "#60DAFB",
//   },
//   {
//     skill: "Svelte",
//     level: "beginner",
//     color: "#FF3B00",
//   },
// ];
// function App() {
//   return (
//     <div className="card ">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// function Avatar() {
//   return <img className="avatar" src="./pizzas/focaccia.jpg" alt="avatar" />;
// }
// function Intro() {
//   return (
//     <div className="data">
//       <h1>Taha Eltohami</h1>
//       <p>
//         Full Stack Dotnet Csharp Developer, In My Spare Time I Play Games, Doing
//         Cooking And Diving
//       </p>
//     </div>
//   );
// }
// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((s) => (
//         <Skill skill={s} />
//       ))}
//     </div>
//   );
// }
// function Skill({ skill }) {
//   return (
//     <div className="skill" style={{ backgroundColor: skill.color }}>
//       <span>{skill.skill}</span>
//       <span>
//         {skill.level === "beginner"
//           ? "✌️"
//           : skill.level === "intermediate"
//           ? "😎"
//           : "💪"}
//       </span>
//     </div>
//   );
// }

// // import StarRating from "./App";
// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <StarRating
// //       maxRating={5}
// //       color={"#589f5c"}
// //       size={48}
// //       className={"test"}
// //       messages={["horrible", "ok", "good", "excellent", "perfect"]}
// //       defaultRating={2}
// //     />
// //     <StarRating maxRating={10} />
// //   </React.StrictMode>
// // );
