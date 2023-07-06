import React from "react";
import "./styles.css";
import LoginScreen from "./loginscreen";
import HomePage from "./homePage";
import { Counter } from "./features/counter/counter";
import { connect } from "react-redux";
import { setUserData } from "./features/counter/counterSlice";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginScreen: true,
    };
  }
  render() {
    const { isLoginScreen } = this.state;
    const { setUserData } = this.props;
    return isLoginScreen ? (
      <>
        <LoginScreen
          onClickPressed={() => {
            this.setState({ isLoginScreen: !isLoginScreen });
            setUserData();
          }}
        />
        <Counter />
      </>
    ) : (
      <HomePage
        onLogoutPressed={() => {
          this.setState({ isLoginScreen: true });
        }}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = () => ({
  setUserData,
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
