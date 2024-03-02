import homeIMG from "../content/home1.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <img src={homeIMG} alt="" style={{ width: "99%" }} />
      </div>
    </>
  );
}

export default Home;
