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
      fetch("https://stright-deal-api.vercel.app/api/auth/get-token-cookies", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          const refreshToken = data.refreshToken;

          console.log("Access Token:", accessToken);
          console.log("Refresh Token:", refreshToken);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      // navigate("/dashboard");
    } else {
      // navigate("/login");
    }
  }, [navigate]);

  return <p>Processing login...</p>;
}

export default SuccessLogin;
