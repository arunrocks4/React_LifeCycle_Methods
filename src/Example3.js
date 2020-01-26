import React, { Component } from "react";
import data from "./data";

class Example3 extends Component {
  render() {
    return (
      <div>
        {data.Skills.map(skill => {
          console.log("jhagdfdshgfdjshag", skill.Area);
          return (
            <div>
              <h1>{skill.Area}</h1>
              <ul>
                {skill.SkillSet.map(skillDetail => {
                  console.log("jhagdfdshgfdjshag", skillDetail.Name);
                  return <li>{skillDetail.Name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Example3;
