import "./App.css";

function navigate(url: string): void {
  window.location.href = url;
}

async function auth(): Promise<void> {
  try {
    const response = await fetch(
      "https://stright-deal-api.vercel.app/api/auth/google",
      {
        method: "GET",
      }
    );

    const data = await response.json();

    navigate(data.url);

    if (data.message === "success") {
      console.log("Berhasil");
    }
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}

async function logout() {
  const response = await fetch(
    "https://stright-deal-api.vercel.app/api/auth/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const data = await response.json();
    console.log(data.message);
    return;
  }

  localStorage.removeItem("accessToken");
  console.log("Logout berhasil");
}

function App() {
  return (
    <div>
      <h1>Welcome to Dashboard Google Oauth2</h1>
      <button type="button" onClick={auth}>
        Google Button OAuth2
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default App;
