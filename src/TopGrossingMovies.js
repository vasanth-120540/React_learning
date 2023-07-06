import React from "react";
class TopGrossingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { topGrossing } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {topGrossing &&
          topGrossing.map((item) => {
            return (
              <div style={{ margin: 10 }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Logo"
                  width="200px"
                  height="150px"
                />
                <div style={{ color: "white" }}>{item.name}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
export default TopGrossingMovies;
