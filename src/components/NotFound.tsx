import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
          color: "red",
        }}
      >
        Page Not Found
      </div>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
          margin: "30px",
        }}
        to="/"
      >
        Go Home
      </Link>
    </>
  );
};

export default NotFound;
