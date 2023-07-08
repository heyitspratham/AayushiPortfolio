import React from "react";
import Hero from "./Hero";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiBodyHeight } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div id="main " className="md:hidden">
        <div className="w-screen  relative sticky top-10 -z-10 md:hidden">
          <div className="w-full h-full  absolute bg-black opacity-70"></div>
          <div className="absolute w-full h-full flex flex-col top-6 items-center text-white ">
            <div className="text-lg">Hi, I am </div>
            <div className="text-3xl underline underline-offset-4">
              Aayushi Shukla
            </div>
          </div>
          <img src={require("../assets/10.jpg")} className="" alt="" />
        </div>
        <div className="flex flex-col bg-white md:hidden rounded-t-lg py-5 px-3  p-3 gap-5  pt-5 font-semibold text-center">
              <div>Name: Aayushi Shukla</div>
              <div> Height: 5'1 </div>
              <div>Age: 19</div>
              <div>Weight: 40Kg</div>
              <div>Bust: 28</div>
              <div>Waist: 26</div>
              <div>Hip: 33</div>
              <div>Skin Tone: Fair</div>
              <div>Eye Colour: black</div>
              <div>City: Hyderabad</div>
              <div>Education- graduation second year</div>
              <div>Dresses- traditional and western</div>
              <div>Experience- runway and shoots in college</div>
              <div>Language known- Hindi English</div>
              <div>
                INTERESTES IN- Acting, print shoot, commercial shoot, ramp show,
                designers shoots
              </div>
              <div>COMFORTABLE WITH- Indian wear, western</div>
            </div>
        <div className="flex flex-col md:grid md:grid-cols-3  bg-white">
          <img
            src={require("../assets/4.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <div></div>
          <img
            src={require("../assets/10.jpg")}
            className="hidden md:block"
            alt=""
          />
          <img
            src={require("../assets/7.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <img
            src={require("../assets/5.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <img
            src={require("../assets/6.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <img
            src={require("../assets/9.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <img
            src={require("../assets/12.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
          <img
            src={require("../assets/13.jpg")}
            className="rounded-lg m-2"
            alt=""
          />
        </div>
      </div>

      <div id="desktop" className="hidden md:block">
        <Hero />
        <div class="grid grid-cols-3 gap-4 px-3 py-5">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/4.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/5.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/6.jpg")}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4 ">
            <div className="flex flex-col  p-3 gap-5  pt-5 font-semibold bg-[#FAF9F6] rounded-md text-center">
              <div>Name: Aayushi Shukla</div>
              <div> Height: 5'1 </div>
              <div>Age: 19</div>
              <div>Weight: 40Kg</div>
              <div>Bust: 28</div>
              <div>Waist: 26</div>
              <div>Hip: 33</div>
              <div>Skin Tone: Fair</div>
              <div>Eye Colour: black</div>
              <div>City: Hyderabad</div>
              <div>Education- graduation second year</div>
              <div>Dresses- traditional and western</div>
              <div>Experience- runway and shoots in college</div>
              <div>Language known- Hindi English</div>
              <div>
                INTERESTES IN- Acting, print shoot, commercial shoot, ramp show,
                designers shoots
              </div>
              <div>COMFORTABLE WITH- Indian wear, western</div>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/7.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/13.jpg")}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/9.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/12.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={require("../assets/10.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
