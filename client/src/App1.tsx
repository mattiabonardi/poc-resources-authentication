import { useState } from "react";

function App() {
  const [imgKey, setImgKey] = useState(0);

  const authenticate = async () => {
    await fetch("/api/app1/authentication");
  };

  const reloadImage = () => {
    setImgKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <button onClick={authenticate}>Authenticate</button>
      <button onClick={reloadImage}>Reload Image</button>
      <img key={imgKey} src="/api/app1/public/image.svg" />
    </>
  );
}

export default App;
