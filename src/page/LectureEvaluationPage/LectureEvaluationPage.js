import ForumPage from "../generic/ForumPage";
import ForumContentPage from "../generic/ForumContentPage";
import ForumPostPage from "../generic/ForumPostPage";

const LectureEvaluationPage = () => {
  return <ForumPage name={"lectureEvaluations"} />;
};

const LectureEvaluationContentPage = () => {
  return <ForumContentPage name={"lectureEvaluations"} />;
};

const LectureEvaluationPostPage = () => {
  return <ForumPostPage name={"lectureEvaluations"} />;
};

export {
  LectureEvaluationPage,
  LectureEvaluationContentPage,
  LectureEvaluationPostPage,
};
