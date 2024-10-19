import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Link to={"/login"}>Link Login</Link>
    </>
  );
}