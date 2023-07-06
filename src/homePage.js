import React from "react";
import TopGrossingMovies from "./TopGrossingMovies";
import { connect } from "react-redux";
import { clearUserData } from "./features/counter/counterSlice";
const API_KEY = "e610603c6cabe6d5ac8639490a8f6509";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      topGrossing: [],
      genreHeader: "",
      showTopGrossing: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userName !== state.userName) {
      return {
        userName: props.userName,
      };
    }
    return null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate() {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${
        this.state.genreHeader === "comedy" ? 35 : 10749
      }`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            topGrossing: result.results,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("genreName").innerHTML =
      "Previous Genere:" + prevState.genreHeader;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.genreHeader !== this.state.genreHeader ||
      !this.state.genreHeader
    ) {
      return true;
    } else {
      return false;
    }
  }

  fetchNetflixOrginal() {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.results,
        });
      });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.fetchNetflixOrginal();
    }, 60000);
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          topGrossing: result.results,
        });
      });
    this.fetchNetflixOrginal();
  }

  render() {
    const { items, topGrossing, showTopGrossing } = this.state;
    const { onLogoutPressed, userData, clearUserData } = this.props;
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          overflow: "auto",
          padding: 25,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "72px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={require("./assets/logo.png")}
            alt="Logo"
            width="200px"
            height="72px"
          />
          <span style={{ color: "white", margin: 10 }}>Home</span>
          <span style={{ color: "white", margin: 10 }}>Tv Shows</span>
          <span style={{ color: "white", margin: 10 }}>Movies</span>
          <span style={{ color: "white", margin: 10 }}>News & popular</span>
          <span style={{ color: "white", margin: 10 }}>My List</span>
          <span style={{ color: "white", margin: 10 }}>
            <button
              onClick={() => {
                clearUserData();
                onLogoutPressed();
              }}
            >
              Logout
            </button>
          </span>
        </div>
        <div style={{ color: "white", fontSize: 24, marginTop: "20px" }}>
          Welcome {userData.userName} <br />
          MailId: {userData.mailId} !
        </div>
        <div>
          <h2 style={{ color: "white", marginTop: 100, marginBottom: 20 }}>
            Netflix Original
          </h2>
          <div
            style={{ display: "flex", flexDirection: "row", overflow: "auto" }}
          >
            {items &&
              items.map((item) => {
                return (
                  <div style={{ height: 250, margin: 10 }}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt="Logo"
                      width="200px"
                      height="150px"
                    />
                    <div style={{ color: "white" }}>{item.title}</div>
                  </div>
                );
              })}
          </div>
        </div>
        {showTopGrossing && (
          <div>
            <h2 style={{ color: "white", marginTop: 100, marginBottom: 20 }}>
              Top Movies Today
              <button
                style={{
                  borderRadius: "5px",
                  height: "30px",
                  border: "none",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ genreHeader: "romance" });
                }}
              >
                Romance
              </button>
              <button
                style={{
                  borderRadius: "5px",
                  height: "30px",
                  border: "none",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ genreHeader: "comedy" });
                }}
              >
                Comedy
              </button>
            </h2>
            <TopGrossingMovies topGrossing={topGrossing} />
            <div
              id="genreName"
              style={{ color: "white", marginTop: "20px", fontSize: "20px" }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.counter.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearUserData,
});

export default connect(mapStateToProps, mapDispatchToProps())(HomePage);
