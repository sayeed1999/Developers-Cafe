import React from "react";
import Button from "../Button/Button";
import "./Clock.css";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
    lang: "বাংলা",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  handleClick = () => {
    if (this.state.lang == "বাংলা") {
      this.setState({
        locale: "en-US",
        lang: "eng",
      });
    } else {
      this.setState({
        locale: "bn-BD",
        lang: "বাংলা",
      });
    }
  };

  render() {
    const { date, locale, lang } = this.state;
    return (
      <div className="clock">
        <Button text={lang} change={() => this.handleClick()}>
          {lang}
        </Button>
        <h1> {date.toLocaleTimeString(locale)} </h1>
      </div>
    );
  }
}

export default Clock;
