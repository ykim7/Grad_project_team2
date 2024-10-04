import Button from "../../components/Button";
import Comment from "../../components/Comment/Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import "./GenericForum.css";

const ForumScrollContentPage = ({ id, name }) => {
    const user = useSelector((state) => state.auth.user);

    const [forum, setForum] = useState({});
    const [author, setAuthor] = useState({});
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState("");
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
    });

    useEffect(() => {
        getForum(id).then((forumData) => {
            if (forumData) {
                getAuthor(forumData.user_id);
                getComments(forumData.id);
            }
        });
    }, [id, name]);

    const getForum = async (forumId) => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_BACKEND_URL + `/${name}/${forumId}`
            );
            const data = response.data;
            setForum(data);

            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    const getAuthor = async (id) => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + `/users/${id}`)
            .then(({ data }) => {
                console.log("Received author data:", data); // 추가된 로그
                setAuthor(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const getComments = async (id) => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + `/comments/${name}/${id}`)
            .then(({ data }) => {
                setComments(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            user_id: user.id,
            content: commentContent,
            forum_id: forum.id,
        };

        try {
            await axios.post(
                process.env.REACT_APP_BACKEND_URL + `/comments/${name}`,
                postData,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );

            setCommentContent("");

            getComments(forum.id);
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    const incrementHelpful = async () => {
        try {
            await axios.put(
                process.env.REACT_APP_BACKEND_URL +
                    `/${name}/incrementHelpful/${id}`
            );
            setForum((prev) => ({
                ...prev,
                num_Helpful: prev.num_Helpful + 1,
            }));
        } catch (error) {
            console.error("Error incrementing helpful count:", error);
        }
    }; 

      const handleCommentDelete = async (comment) => {
        try {
          axios
            .delete(process.env.REACT_APP_BACKEND_URL + `/comments/${comment.id}`)
            .then(() => {
              getComments(forum.id);
            });
        } catch (error) {
          console.error("Error deleting the comment:", error);
        }
      };

    return (
        <>
            <div className="scflex flex-col space-y-5 mx-auto bg-bg-color p-3 h-max scroll-container">
                <div className="flex justify-center forum-scroll-post">
                    <div className="basis-[80%]">
                        {name === "fleaMarkets" ? (
                            <>
                                <div>
                                    <div className="bg-white p-2 font-bold">
                                        <span>Product Name: </span>
                                        <span>{product.name}</span>
                                    </div>
                                    <div className="bg-white p-2 font-bold">
                                        <span>Description: </span>
                                        <span>{product.description}</span>
                                    </div>
                                    <div className="bg-white p-2 font-bold">
                                        <span>Price: </span>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-white p-2 font-bold">
                                    <span>Title: </span>
                                    <span>{forum.subject}</span>
                                </div>
                                {name !== "lectureEvaluations" && (
                                    <>
                                        <div className="flex justify-between items-center h-16">
                                            <span>
                                                <b>Author:</b>{" "}
                                                {author && author.firstName}
                                            </span>
                                            {name !== "roommateFindForum" && (
                                                <div className="flex items-center">
                                                    <Button
                                                        onClick={
                                                            incrementHelpful
                                                        }
                                                        name={"Helpful"}
                                                    />
                                                    <span>
                                                        {forum.num_Helpful}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        {name !== "roommateFindForum" && (
                                            <div className="bg-white p-2 font-bold">
                                                <span>Sub Title: </span>
                                                <span>{forum.subSubject}</span>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        className="basis-[80%] bg-white p-3"
                        style={{ minHeight: 500 }}
                    >
                        {name === "lectureEvaluations" ? (
                            <p className="text-md">
                                <span className="font-bold">
                                    Overall: {"★".repeat(forum.overall_rating)}
                                </span>
                                <br />
                                <span className="font-bold">
                                    Assignment:{" "}
                                    {"★".repeat(forum.assignment_rating)}
                                </span>
                                <br />
                                <span className="font-bold">
                                    Test Difficulty:{" "}
                                    {"★".repeat(forum.test_difficulty_rating)}
                                </span>
                                <br />
                                <span className="font-bold">
                                    Professor Attitude:{" "}
                                    {"★".repeat(
                                        forum.professor_attitude_rating
                                    )}
                                </span>
                                <br />
                                <span className="font-bold">Review:</span>
                                <br />
                                {forum.description}
                            </p>
                        ) : name === "roommateFindForum" ? (
                            <>
                                <div className="bg-white p-2 font-bold">
                                    <span>Location: </span>
                                    <span>{forum.location}</span>
                                </div>
                                <div className="bg-white p-2 font-bold">
                                    <span>Budget: </span>
                                    <span>{forum.budget}</span>
                                </div>
                                <p>{forum.description}</p>
                            </>
                        ) : (
                            <>
                                <p className="text-md">{forum.description}</p>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col space-y-3 basis-[80%] max-w-[80%] p-2 bg-white">
                        <span className="font-bold">Comments:</span>
                        {comments.length === 0 ? (
                            <div>No comments yet...</div>
                        ) : (
                            comments.map((comment, index) => (
                                <Comment
                                key={index}
                                comment={comment}
                                handleCommentDelete={handleCommentDelete}
                              />
                            ))
                        )}
                    </div>
                </div>

                {user && (
                    <form
                        className="flex justify-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="bg-white basis-[80%] flex p-5">
                            <textarea
                                className="w-[80%] bg-bg-color resize-none p-1"
                                name="comment"
                                placeholder="Comments..."
                                value={commentContent}
                                onChange={(e) =>
                                    setCommentContent(e.target.value)
                                }
                            />
                            <div className="w-[20%] flex justify-center items-center">
                                <Button name={"Post"} submit={true} />
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default ForumScrollContentPage;
