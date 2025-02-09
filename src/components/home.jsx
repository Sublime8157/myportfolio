import React from "react";

const  home = () => {
    return (
    <div className="p-10 flex flex-col text-white gap-8">
        <div className=" flex flex-row justify-between items-center mx-8">
            <div className="flex flex-col gap-4 w-6/12">
                <h1 className="text-3xl" style={{ color: "#a7a9be" }}>Hello, I'm</h1>
                <h1 className="text-6xl">Joven Miran</h1>
                <p className="text-xl" style={{ color: "#a7a9be" }}>Software Developer</p>
                <p className="" style={{ color: "#a7a9be" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum rerum deserunt! Sequi voluptatum iusto ipsa. Rem tempore id voluptate!</p>                  
                <button className="self-start w-32 py-1 shadow-lg cursor-pointer text-lg rounded" style={{ backgroundColor: "#ff8906", color: "#fffffe" }}>About me</button>
            </div>
            <div className="relative w-[450px] h-[450px] " style={{ clipPath: "circle(75% at 75% 75%)" }}>
                <img className="w-full h-full object-cover" src="../images/profile.png" />
                <span className="absolute bg-orange-700 " style={{ top: "-150px" }}>test</span>
            </div>
        </div>
        </div>
    )
}
export default home;