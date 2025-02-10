import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SuccessLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");

    console.log("URL Params:", window.location.search);
    console.log("Access Token:", accessToken);

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      console.log("Token saved:", accessToken);
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <p>Processing login...</p>;
}

export default SuccessLogin;
