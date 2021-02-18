import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusTime: 1500,
      breakTime: 300,
    };
    this.breakTime = 300;
    this.pomodoroStarted = false;
    this.breakStarted = false;
    this.isPaused = false;
    this.dev = false;
    this.audio = new Audio(
      "https://freesound.org/data/previews/421/421960_2193580-lq.mp3"
    );
  }
  stopTimer = (timer) => {
    clearInterval(timer);
    timer = null;
  };

  handleStart = () => {
    if (!this.pomodoroStarted) {
      this.timer = setInterval(() => {
        this.setState({ focusTime: this.state.focusTime - 1 });
      }, 1000);
      this.pomodoroStarted = !this.pomodoroStarted;
    }

    if (!this.focusTime) {
      this.focusTime = this.state.focusTime;
      this.breakTime = this.state.breakTime;
    }
  };

  handlePause = () => {
    if (this.pomodoroStarted) {
      this.isPaused = true;
      this.setState(this.state);
      if (!this.breakStarted) {
        this.stopTimer(this.timer);
      }

      if (this.breakStarted) {
        this.stopTimer(this.breakTimer);
      }
    }
  };

  resume = () => {
    if (this.pomodoroStarted) {
      this.setState(this.state);
      this.isPaused = false;

      if (this.breakStarted) {
        setInterval(() => {
          this.setState({ breakTime: this.state.breakTime - 1 });
        }, 1000);
      }

      if (!this.breakStarted) {
        this.timer = setInterval(() => {
          this.setState({ focusTime: this.state.focusTime - 1 });
        }, 1000);
      }
    }
  };
  incrementFocusTime = () => {
    if (!this.pomodoroStarted) {
      this.setState({ focusTime: this.state.focusTime + 60 });
    }
  };

  incrementBreakTime = () => {
    if (!this.pomodoroStarted) {
      this.breakTime = this.breakTime + 60;
      this.setState({ breakTime: this.state.breakTime + 60 });
    }
  };

  decrementFocusTime = () => {
    if (this.state.focusTime > 60 && !this.pomodoroStarted) {
      this.setState({ focusTime: this.state.focusTime - 60 });
    }
  };

  decrementBreakTime = () => {
    if (this.breakTime > 60 && !this.pomodoroStarted) {
      this.breakTime = this.breakTime - 60;
    }
    if (this.state.breakTime > 60 && !this.pomodoroStarted) {
      this.setState({ breakTime: this.state.breakTime - 60 });
    }
  };
  reset = () => {
    this.setState({
      focusTime: 1500,
      breakTime: 300,
    });
    this.stopTimer(this.timer);
    this.pomodoroStarted = false;
    this.stopTimer(this.breakTimer);
    this.breakStarted = false;
    this.isPaused = false;
    if (this.calculateTime(this.breakTime) !== "05:00") {
      this.breakTime = 300;
    }
  };

  calculateTime = (time) => {
    return `${
      Math.floor(time / 60) < 10
        ? "0" + Math.floor(time / 60)
        : "" + Math.floor(time / 60)
    }:${time % 60 > 9 ? "" + (time % 60) : "0" + (time % 60)}`;
  };

  componentDidUpdate() {
    if (this.state.focusTime < 1) {
      this.audio.play();
      var audio = new Audio(
        "https://freesound.org/data/previews/421/421960_2193580-lq.mp3"
      );
      audio.play();
      this.stopTimer(this.timer);

      this.setState({ focusTime: this.focusTime });
      if (!this.breakStarted) {
        this.startBreak();
        this.breakStarted = true;
      }
    }

    if (this.state.breakTime < 1) {
      this.audio.play();
      this.stopTimer(this.breakTimer);

      this.setState({ breakTime: this.breakTime });
      this.pomodoroStarted = false;
      this.breakStarted = false;
      this.handleStart();
    }
  }
  startBreak() {
    this.breakTimer = setInterval(() => {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title"> Pomodoro </h1>
        <div className="pomodoro">
          <div>
            <button id="session-increment" onClick={this.incrementFocusTime}>
              +
            </button>
            <div className="timer">
              {this.breakStarted
                ? this.calculateTime(this.state.breakTime)
                : this.calculateTime(this.state.focusTime)}
            </div>
            <button id="session-decrement" onClick={this.decrementFocusTime}>
              -
            </button>
          </div>
        </div>
        <div>
          <div className="start-pause-reset">
            <button id="start" onClick={this.handleStart}>
              Start
            </button>
            <button
              id="pause"
              onClick={this.isPaused ? this.resume : this.handlePause}
            >
              {this.isPaused ? "Resume" : "Pause"}
            </button>
            <button id="reset" onClick={this.reset}>
              Reset
            </button>
          </div>
          <div className="break-label">
            <button id="break-increment" onClick={this.incrementBreakTime}>
              +
            </button>
            <div className="break-text">
              {this.calculateTime(this.breakTime)}
            </div>
            <button id="break-decrement" onClick={this.decrementBreakTime}>
              -
            </button>
          </div>
        </div>
        <div>
          {this.dev ? (
            <table>
              <tr>
                <th>State</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>this.state.focusTime:</td>
                <td>{this.state.focusTime}</td>
              </tr>
              <tr>
                <td>this.state.breakTime:</td>
                <td>{this.state.breakTime}</td>
              </tr>
              <tr>
                <td>This.focusTime:</td>
                <td>{this.focusTime}</td>
              </tr>
              <tr>
                <td>This.breakTime:</td>
                <td>{this.breakTime}</td>
              </tr>
              <tr>
                <td>This.pomodoroStarted:</td>
                <td>{this.pomodoroStarted.toString()}</td>
              </tr>
              <tr>
                <td>breakStarted:</td>
                <td>{this.breakStarted.toString()}</td>
              </tr>
              <tr>
                <td>isPaused:</td>
                <td>{this.isPaused.toString()}</td>
              </tr>
              <tr>
                <td>This.timer:</td>
                <td>{this.timer}</td>
              </tr>
              <tr>
                <td>This.breakTimer:</td>
                <td>{this.breakTimer}</td>
              </tr>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
