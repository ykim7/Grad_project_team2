import { useEffect, useState } from "react";
import Forum_horizontal from "../components/Forum_horizontal";
import Forum_vertical from "../components/Forum_vertical";
import axios from "axios";

const MainPage = () => {
    const [communityForums, setCommunityForums] = useState([]);
    const [jobForums, setJobForums] = useState([]);
    const [fleaMarkets, setFleaMakrets] = useState([]);
    const itemsPerForum = 5;

    useEffect(() => {
        getCommunityForums();
        getJobForums();
        getfleaMarkets();
    }, []);

    const getCommunityForums = async () => {
        const response = await axios.get(
            process.env.REACT_APP_BACKEND_URL +
                `/communityForums?itemsAmount=${itemsPerForum}`
        );
        setCommunityForums(response.data);
    };
    const getJobForums = async () => {
        const response = await axios.get(
            process.env.REACT_APP_BACKEND_URL +
                `/jobForums?itemsAmount=${itemsPerForum}`
        );
        setJobForums(response.data);
    };
    const getfleaMarkets = async () => {
        const response = await axios.get(
            process.env.REACT_APP_BACKEND_URL +
                `/fleaMarkets?itemsAmount=${itemsPerForum}`
        );
        setFleaMakrets(response.data);
    };
    function getCurrentTermAndYear() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;

        let term, nextTerm, nextYear;

        if (month >= 9) {
            term = "fall";
            nextTerm = "winter";
            nextYear = year + 1;
        } else if (month >= 4) {
            term = "summer";
            nextTerm = "fall";
            nextYear = year;
        } else {
            term = "winter";
            nextTerm = "summer";
            nextYear = year;
        }

        return {
            currentTerm: term,
            currentYear: year,
            nextTerm: nextTerm,
            nextYear: nextYear,
        };
    }

    const { currentTerm, currentYear, nextTerm, nextYear } =
        getCurrentTermAndYear();

    return (
        <div className="container flex flex-col space-y-5 lg:flex-row lg:space-x-5 h-max bg-bg-color p-3">
            {/* Popular post */}
            <div className="flex flex-col w-[65%]">
                <span className="text-2xl font-bold">Popular Post</span>
                <div className="flex flex-col space-y-1">
                    <div className="h-1/3 w-full">
                        <span className="font-bold text-font-color">
                            Community Forum
                        </span>
                        <div className="flex space-x-2 overflow-x-scroll rounded-xl">
                            {communityForums.map(
                                ({ id, subject, description }, index) => {
                                    return (
                                        <div key={index}>
                                            <Forum_horizontal
                                                id={id}
                                                name={"communityForums"}
                                                title={subject}
                                                content={description}
                                                color={"communityForums"}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    <div className="h-1/3">
                        <span className="font-bold text-font-color">
                            Job Forum
                        </span>
                        <div className="flex space-x-2 overflow-x-scroll rounded-xl">
                            {jobForums.map(
                                ({ id, subject, description }, index) => {
                                    return (
                                        <div key={index}>
                                            <Forum_horizontal
                                                id={id}
                                                name={"jobForums"}
                                                title={subject}
                                                content={description}
                                                color={"jobForums"}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    <div className="h-1/3">
                        <span className="font-bold text-font-color">
                            Flea Market
                        </span>
                        <div className="flex space-x-2 overflow-x-scroll rounded-xl">
                            {fleaMarkets.map(
                                (
                                    {
                                        id,
                                        subject,
                                        description,
                                        title,
                                        content,
                                        price,
                                    },
                                    index
                                ) => {
                                    let displayTitle = title;
                                    let displayContent = content;
                                    return (
                                        <div key={index}>
                                            <Forum_horizontal
                                                id={id}
                                                name={"fleaMarkets"}
                                                title={displayTitle}
                                                content={displayContent}
                                                color={"fleaMarkets"}
                                                price={price}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[35%] flex flex-col">
                {/* Important Dates */}
                <div className="h-1/2">
                    <span className="text-2xl font-bold">
                        Important Dates, {currentYear}
                        {"/"}
                        {currentTerm.charAt(0).toUpperCase() +
                            currentTerm.slice(1)}{" "}
                    </span>
                    {/* <Forum_vertical term={"fall"} year="2023" /> */}
                    <Forum_vertical
                        term={currentTerm}
                        year={currentYear.toString()}
                    />
                </div>
                {/* Next Important Dates */}
                <div className="h-1/2">
                    <span className="text-2xl font-bold">
                        Important Dates, {nextYear}
                        {"/"}
                        {nextTerm.charAt(0).toUpperCase() +
                            nextTerm.slice(1)}{" "}
                    </span>
                    {/* <Forum_vertical term={"winter"} year="2024" /> */}
                    <Forum_vertical
                        term={nextTerm}
                        year={nextYear.toString()}
                    />
                </div>
            </div>
        </div>
    );
};
export default MainPage;
