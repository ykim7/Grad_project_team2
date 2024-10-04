import ForumPage from "../generic/ForumPage";
import ForumContentPage from "../generic/ForumContentPage";
import ForumPostPage from "../generic/ForumPostPage";

const JobForumPage = () => {
  return <ForumPage name={"jobForums"} />;
};

const JobForumContentPage = () => {
  return <ForumContentPage name={"jobForums"} />;
};

const JobForumPostPage = () => {
  return <ForumPostPage name={"jobForums"} />;
};

export { JobForumPage, JobForumContentPage, JobForumPostPage };
