import ForumPage from "../generic/ForumPage";
import ForumContentPage from "../generic/ForumContentPage";
import ForumPostPage from "../generic/ForumPostPage";

const FleaMarketPage = () => {
  return <ForumPage name={"fleaMarkets"} />;
};

const FleaMarketContentPage = () => {
  return <ForumContentPage name={"fleaMarkets"} />;
};

const FleaMarketPostPage = () => {
  return <ForumPostPage name={"fleaMarkets"} />;
};

export { FleaMarketPage, FleaMarketContentPage, FleaMarketPostPage };
