import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForumPostPage = ({ name }) => {
  const user = useSelector((state) => state.auth.user);
  
  //basic Form
  const [subject, setSubject] = useState("");
  const [subSubject, setSubSubject] = useState("");
  const [description, setDescription] = useState("");

  //lectureEvaluation
  const [overallRating, setOverallRating] = useState(1);
  const [assignmentRating, setAssignmentRating] = useState(1);
  const [professorRating, setProfessorRating] = useState(1);
  const [testDifficultyRating, setTestDifficultyRating] = useState(1);
  const [imageBase64, setImageBase64] = useState(""); // 추가: 이미지 상태

  //fleaMarket
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(0);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageBase64(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    console.log("Click submit button");
    e.preventDefault();

    const postData = {
      user_id: user.id,
      subject,
      subSubject,
      description,
      overallRating,
      assignmentRating,
      professorRating,
      testDifficultyRating,
      title,
      content,
      price,
      picture: imageBase64,
      location,
      budget,
    };
        try {
            await axios.post(
                process.env.REACT_APP_BACKEND_URL + `/${name}`,
                postData,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );

            navigate(`/${name}`);
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <>
            {name === "lectureEvaluations" ? (
                <>
                    <div className="container mx-auto bg-bg-color p-3 h-full">
                        <form
                            className="flex flex-col items-center space-y-5 h-full p-3"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex h-[10%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Course Name
                                </span>
                                <input
                                    className="basis-1/2 p-1"
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="flex h-[70%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Review
                                </span>
                                <textarea
                                    className="basis-1/2 resize-none p-1"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <div className="flex h-[10%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Overall Rating
                                </span>
                                <input
                                    className="basis-1/2 p-1"
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={overallRating}
                                    onChange={(e) =>
                                        setOverallRating(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className="flex h-[10%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Assignment Rating
                                </span>
                                <input
                                    className="basis-1/2 p-1"
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={assignmentRating}
                                    onChange={(e) =>
                                        setAssignmentRating(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                            <div className="flex h-[10%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Professor Rating
                                </span>
                                <input
                                    className="basis-1/2 p-1"
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={professorRating}
                                    onChange={(e) =>
                                        setProfessorRating(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                            <div className="flex h-[10%] w-full text-center">
                                <span className="basis-1/4 font-bold">
                                    Test Difficulty Rating
                                </span>
                                <input
                                    className="basis-1/2 p-1"
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={testDifficultyRating}
                                    onChange={(e) =>
                                        setTestDifficultyRating(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                            <div className="flex w-full h-[10%] text-right">
                                <div className="basis-1/4"></div>
                                <div className="basis-1/2">
                                    <button
                                        className="w-24 p-3 bg-gradient-blue font-bold text-white"
                                        type="submit"
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </>
      ): name === "roommateFindForum" ? (
                <div className="container mx-auto bg-bg-color p-3 h-full">
                    <form
                        className="flex flex-col items-center space-y-5 h-full p-3"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex h-[10%] w-full text-center">
                            <span className="basis-1/4 font-bold">Subject</span>
                            <input
                                className="basis-1/2 p-1"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="flex h-[10%] w-full text-center">
                            <span className="basis-1/4 font-bold">
                                location
                            </span>
                            <input
                                className="basis-1/2 p-1"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="flex h-[10%] w-full text-center">
                            <span className="basis-1/4 font-bold">budget</span>
                            <input
                                className="basis-1/2 p-1"
                                type="number"
                                step="100"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                            />
                        </div>
                        <div className="flex h-[70%] w-full text-center">
                            <span className="basis-1/4 font-bold">
                                Description
                            </span>
                            <textarea
                                className="basis-1/2 resize-none p-1"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex w-full h-[10%] text-right">
                            <div className="basis-1/4"></div>
                            <div className="basis-1/2">
                                <button
                                    className="w-24 p-3 bg-gradient-blue font-bold text-white"
                                    type="submit"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            ): name === "fleaMarkets" ? (
        <div className="container mx-auto bg-bg-color p-3 h-full">
          <form
            className="flex flex-col items-center space-y-5 h-full p-3"
            onSubmit={handleSubmit}
          >
                          <div className="flex h-[10%] w-full text-center">
                <span className="basis-1/4 font-bold">Product</span>
                <input
                  className="basis-1/2 p-1"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex h-[70%] w-full text-center">
                <span className="basis-1/4 font-bold">Description</span>
                <textarea
                  className="basis-1/2 resize-none p-1"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            {/* ... other input fields ... */}
            <div className="flex h-[10%] w-full text-center">
              <span className="basis-1/4 font-bold">Photo</span>
              <input
                className="basis-1/2 p-1"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex h-[10%] w-full text-center">
              <span className="basis-1/4 font-bold">Price</span>
              <input
                className="basis-1/2 p-1"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* ... other input fields ... */}
            <div className="flex w-full h-[10%] text-right">
              <div className="basis-1/4"></div>
              <div className="basis-1/2">
                <button
                  className="w-24 p-3 bg-gradient-blue font-bold text-white"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="container mx-auto bg-bg-color p-3 h-full">
          <form
            className="flex flex-col items-center space-y-5 h-full p-3"
            onSubmit={handleSubmit}
          >
            <div className="flex h-[10%] w-full text-center">
              <span className="basis-1/4 font-bold">Subject</span>
              <input
                className="basis-1/2 p-1"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex h-[10%] w-full text-center">
              <span className="basis-1/4 font-bold">Sub Subject</span>
              <input
                className="basis-1/2 p-1"
                type="text"
                value={subSubject}
                onChange={(e) => setSubSubject(e.target.value)}
              />
            </div>
            <div className="flex h-[70%] w-full text-center">
              <span className="basis-1/4 font-bold">Description</span>
              <textarea
                className="basis-1/2 resize-none p-1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex w-full h-[10%] text-right">
              <div className="basis-1/4"></div>
              <div className="basis-1/2">
                <button
                  className="w-24 p-3 bg-gradient-blue font-bold text-white"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ForumPostPage;
