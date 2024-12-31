import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"about"} text2={"us"}></Title>
          </div>
          <div className="my-10 flex flex-col md:flex-row gap-16">
              <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
              <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex assumenda sit repellat, recusandae vel at est qui omnis sequi a autem soluta doloribus</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui dicta vero similique sed nisi exercitationem culpa doloremque, excepturi ipsam quaerat porro consequatur</p>
                  <b className="text-gray-800 ">Our Mission</b>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum distinctio assumenda molestias at accusantium vitae, temporibus facere quos minus odio, suscipit eveniet</p>
              </div>
          </div>
          <div className="text-4xl py-4">
              <Title text1={'why'} text2={'choose us'}></Title>
          </div>
    </div>
  );
};

export default About;
