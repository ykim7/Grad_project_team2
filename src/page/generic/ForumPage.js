import axios from "axios";
import { useEffect, useState } from "react";
import Forum_horizontal from "../../components/Forum_horizontal";
import { ReactComponent as Left } from "../../logos/triangle-left-svgrepo-com.svg";
import { ReactComponent as Right } from "../../logos/triangle-right-svgrepo-com.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const [totalPages, setTotalPages] = useState(0);

  const indexOfLastForum = currentPage * itemsPerPage;
  const indexOfFirstForum = indexOfLastForum - itemsPerPage;
  const currentForums = forums.slice(indexOfFirstForum, indexOfLastForum);

  useEffect(() => {
    getForums();
  }, []);

  const getForums = async () => {
    let apiUrl =
      process.env.REACT_APP_BACKEND_URL +
      `/${name}?page=${currentPage}&itemsPerPage=${itemsPerPage}`;
    await axios
      .get(apiUrl)
      .then(({ data }) => {
        console.log(data);
        setForums(data);
        // setTotalPages(Math.ceil(data.row_count / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let apiUrl =
      process.env.REACT_APP_BACKEND_URL +
      `/${name}?page=${currentPage}&itemsPerPage=${itemsPerPage}`;

    if (searchQuery) {
      apiUrl += `&search=${searchQuery}`;
    }

    try {
      const { data } = await axios.get(apiUrl);
      setForums(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container flex flex-col bg-bg-color p-3 h-full">
        <div className="flex justify-between mb-1">
          <span className="text-2xl font-bold h-[5%] w-[25%]">{title}</span>
          <div className="w-[50%]">
            <form className="w-full h-full" onSubmit={handleSearch}>
              <input
                className="w-4/5 h-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="w-1/5 h-full p-2 bg-button-color text-white">
                Search
              </button>
            </form>
          </div>
          <div className="w-[25%] flex justify-end items-center">
            {user &&
            (((name === "jobForums" || name === "educationalMaterials") &&
              (user.role === "Admin" || user.role === "Professor")) ||
              (name === "lectureEvaluations" && user.role === "Student") ||
              (name !== "jobForums" &&
                name !== "educationalMaterials" &&
                name !== "lectureEvaluations")) ? (
              <Link to={`/${name}Post`}>
                <Button name={"New"} />
              </Link>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 h-[90%]">
          {currentForums.length > 0 ? (
            currentForums.map(
              ({ id, subject, description, title, content, price }, index) => {
                let displayTitle = subject;
                let displayContent = description;

                if (name === "fleaMarkets") {
                  displayTitle = title;
                  displayContent = content;
                }
                return (
                  <div key={index}>
                    <Forum_horizontal
                      id={id}
                      name={name}
                      title={displayTitle}
                      content={displayContent}
                      color={name}
                      price={price}
                    />
                  </div>
                );
              },
            )
          ) : (
            <span>No results</span>
          )}
        </div>
        <div className="flex items-center mt-auto self-center h-[5%]">
          <button
            className="w-10 h-10"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <Left />
          </button>
          <span>{currentPage}</span>
          <button
            className="w-10 h-10"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            data-testid="right"
          >
            <Right />
          </button>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
