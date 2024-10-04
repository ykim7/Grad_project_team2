import { Link } from "react-router-dom";

const Forum_horizontal = (props) => {
  var border_color = "";
  if (props.color) {
    if (props.color === "communityForums") {
      border_color = "border-community-color";
    } else if (props.color === "jobForums") {
      border_color = "border-job-color";
    } else if (props.color === "fleaMarkets") {
      border_color = "border-flea-color";
    } else if (props.color === "educationalMaterials") {
      border_color = "border-educational-color";
    }
  }
  return (
    <>
      <Link to={`/${props.name}/${props.id}`}>
        <div
          className={`w-64 h-40 flex flex-col rounded-xl bg-white border-l-8 ${border_color} shadow-lg mt-1 p-3`}
          data-testid="forum-horizontal"
        >
          <div>
            <span className="text-md font-bold">{props.title}</span>
            <p className="text-xs">{props.content}</p>
          </div>
          {props.price && (
            <span className="mt-auto text-xs font-bold text-gradient-blue">
              Price: ${props.price}
            </span>
          )}
        </div>
      </Link>
    </>
  );
};

export default Forum_horizontal;
