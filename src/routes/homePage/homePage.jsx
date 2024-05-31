import "./homePage.scss";

import SearchBar from "../../components/searchBar/searchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Home</h1>
          <p>
            On our homepage, discover a diverse selection of properties to make
            your dream of owning a home a reality. Explore options tailored to
            your lifestyle and desires.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>120</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/public/bg.png" alt="Back Ground image" />
      </div>
    </div>
  );
};

export default HomePage;
