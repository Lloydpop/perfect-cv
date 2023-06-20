import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Container from "src/Component/Container/Container";
import Image from "src/Component/Image/Image";
import highschool from "../../Assets/high.png";
import globe from "../../Assets/globe.png";
import college from "../../Assets/college.png";
import { NavLink } from "react-router-dom";
const Education = () => {
  return (
    <div>
      <Heading size={"lg"} my={5}>
        Add School
      </Heading>
      <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={"7"} w={"600px"}>
        <NavLink
          to={"/education/highschool"}
          className={({ isActive }) => (isActive ? "bg-red-500" : "block")}
        >
          <div className="h-[200px] border flex flex-col items-center justify-center gap-7">
            <Image src={highschool} width={"80px"} />
            <p className="text-sm">High School</p>
          </div>
        </NavLink>
        <NavLink
          to={"/education/university"}
          className={({ isActive }) => (isActive ? "bg-red" : "block")}
        >
          <div className="h-[200px] border flex flex-col items-center justify-center gap-7">
            <Image src={college} width={"80px"} />
            <p className="text-sm">College</p>
          </div>
        </NavLink>
        <NavLink
          to={"/education/others"}
          className={({ isActive }) => (isActive ? "bg-red" : "block")}
        >
          <div className="h-[200px] border flex flex-col items-center justify-center gap-7">
            <Image src={globe} width={"80px"} />
            <p className="text-sm">Others</p>
          </div>
        </NavLink>
      </Grid>
    </div>
  );
};

export default Education;
