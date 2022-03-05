import { useSelector } from "react-redux";
import HeadData from "../component/HeadData";

export default function Home() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <HeadData />
      <main>
        <div> Welcome to <a href="http://shahsajib.me/" target="_blank">ShahSajib</a> Template</div>
      </main>
    </div>
  );
}
