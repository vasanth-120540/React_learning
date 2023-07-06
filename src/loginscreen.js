import React from "react";
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: 0,
    };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    setTimeout(() => {
      window.scroll(0, prevState.pageHeight);
    }, 1000);
  }

  render() {
    const { onClickPressed } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          background: "black",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => {
            onClickPressed();
          }}
          style={{
            background: "red",
            color: "white",
            width: "150px",
            height: "80px",
            borderRadius: "16px",
          }}
        >
          Login
        </button>
        <div id="addText" style={{ color: "white" }}></div>
        <button
          style={{ margin: 100 }}
          onClick={() => {
            document.getElementById("addText").innerHTML +=
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
            this.setState({
              pageHeight: document.documentElement.scrollHeight,
            });
          }}
        >
          Click here to add para
        </button>
      </div>
    );
  }
}
export default LoginScreen;
