import React, { useState } from "react";
const Dashboard = () => {
    const [title , setTitle] = useState('')
    return (
        <div>
            <div className="text-center text-xl">DashBoard Page</div>
            <div className="w-full flex">
               <div className="w-[30%]">
                <div className="p-5 my-4 ml-4" onClick={()=>{setTitle('Page 1')}}>Page 1</div>
                <div className="p-5 my-4 ml-4" onClick={()=>{setTitle('Page 2')}}>Page 2</div>
                <div className="p-5 my-4 ml-4" onClick={()=>{setTitle('Page 3')}}>Page 3</div>
                <div className="p-5 my-4 ml-4" onClick={()=>{setTitle('Page 4')}}>Page 4</div>
               </div>
               <div className="w-[70%] ">
                    <div className="text-center p-5 text-xl">{title}</div>
               </div>
            </div>
        </div>
    )
}

export default Dashboard;