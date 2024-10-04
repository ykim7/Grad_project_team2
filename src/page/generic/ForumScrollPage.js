import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ForumScrollContentPage from "../generic/ForumScrollContentPage";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./GenericForum.css";

const ForumPage = ({ name }) => {
    const titleMap = {
        jobForums: "Job Forum",
        educationalMaterials: "Educational Material",
        communityForums: "Community Forum",
        roommateFindForum: "Roommate Find Forum",
        fleaMarkets: "Flea Market",
        lectureEvaluations: "Lecture Evaluation",
    };

    const title = titleMap[name];
    const user = useSelector((state) => state.auth.user);
    const itemsPerPage = 12;
    const [forums, setForums] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getForums();
    }, [currentPage]);

    const getForums = async () => {
        let apiUrl =
            process.env.REACT_APP_BACKEND_URL +
            `/${name}?page=${currentPage}&itemsPerPage=${itemsPerPage}`;
        if (searchQuery) {
            apiUrl += `&search=${searchQuery}`;
        }
    
        try {
            const { data } = await axios.get(apiUrl);
            setForums((prevForums) => {
                // 새로운 페이지 데이터를 기존 데이터 앞에 추가
                const updatedForums = [...data, ...prevForums];
                // 중복 제거
                return updatedForums.filter((forum, index, self) =>
                    index === self.findIndex((f) => f.id === forum.id)
                );
            });
            setHasMore(data.length === itemsPerPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    return (
        <>
            <div>
                <div className="upperBar flex justify-between items-center mb-1 w-full">
                    <span className="text-2xl font-bold">{title}</span>

                    {user &&
                        (((name === "jobForums" ||
                            name === "educationalMaterials") &&
                            (user.role === "Admin" ||
                                user.role === "Professor")) ||
                        (name === "lectureEvaluations" &&
                            user.role === "Student") ||
                        (name !== "jobForums" &&
                            name !== "educationalMaterials" &&
                            name !== "lectureEvaluations") ? (
                            <Link to={`/${name}Post`}>
                                <Button name={"New"} />
                            </Link>
                        ) : null)}
                </div>

                <InfiniteScroll
                    dataLength={forums.length}
                    next={() => setCurrentPage((prevPage) => prevPage + 1)}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {forums.map(
                        (
                            { id, subject, description, title, content },
                            index
                        ) => {
                            let displayTitle = subject;
                            let displayContent = description;
                            return (
                                <div key={index}>
                                    <ForumScrollContentPage
                                        id={id}
                                        name={name}
                                        title={displayTitle}
                                        content={displayContent}
                                    />
                                </div>
                            );
                        }
                    )}
                </InfiniteScroll>
            </div>
        </>
    );
};

export default ForumPage;
