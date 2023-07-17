import { useEffect, useState } from "react";
import { Breadcrumb, Loader } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="h-full">
        <Breadcrumb />
      </div>
    </>
  );
};

export default Home;
