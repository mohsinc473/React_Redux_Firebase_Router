import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
    console.log("Home==>",props)
  return (
    <div className="App">
      <h1>Home Component</h1>
      <Link to="/about">Go To About Us</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, null)(Home);
