import React from "react";
import Title from "../components/Title";
import contact from "../assets/contact.jpg";
import NewLetterBox from "../components/NewLetterBox";

function Contact() {
    return (
        <div className="w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[100px]">
            <Title text1={"CONTACT"} text2={"US"} />
            <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row md:mb-[0px] -mb-[30px]">
                <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                    <img
                        src={contact}
                        alt=""
                        className="lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm"
                    />
                </div>
                <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]">
                    <p className="lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[19px] text-[16px]">
                        Our Store
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[white] md:text-[17px] text-[14px]">
                        <p>12345 Random Statiom</p>
                        <p>random city , state , India</p>
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[white] md:text-[17px] text-[14px]">
                        <p>tel: +91-9876543210</p>
                        <p>Email: admin@onecart.com</p>
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[19px] mt-[10px] font-bold">
                        Careers at OneCart
                    </p>
                    <p className="lg:w-[80%] w-[100%] text-[white] md:text-[17px] text-[14px]">
                        Learn more about our teams and job openings
                    </p>
                    <button className="px-[20px] py-[15px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md text-[22px] mt-[5px]">
                        Explore Jobs
                    </button>
                </div>
            </div>
            <NewLetterBox />
        </div>
    );
}

export default Contact;
