import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState("bn-BD");
  const [lang, setLang] = useState("বাংলা");
  let clockTimer;

  useEffect(() => {
    // Anything here is fired on component mount
    clockTimer = setInterval(() => tick(), 1000);

    return () => {
      // Anything here is fired on component unmount
      clearInterval(clockTimer);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  const handleClick = () => {
    if (lang === "বাংলা") {
      setLocale("en-US");
      setLang("eng");
    } else {
      setLocale("bn-BD");
      setLang("বাংলা");
    }
  };

  return (
    <div className="clock">
      <Button text={lang} change={() => handleClick()}>
        {lang}
      </Button>
      <h3> {date.toLocaleTimeString(locale)} </h3>
    </div>
  );
};

/// depricated

// class Clock extends React.Component {
//   state = {
//     date: new Date(),
//     locale: "bn-BD",
//     lang: "বাংলা",
//   };

//   componentDidMount() {
//     this.clockTimer = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.clockTimer);
//   }

//   tick = () => {
//     this.setState({
//       date: new Date(),
//     });
//   };

//   handleClick = () => {
//     if (this.state.lang == "বাংলা") {
//       this.setState({
//         locale: "en-US",
//         lang: "eng",
//       });
//     } else {
//       this.setState({
//         locale: "bn-BD",
//         lang: "বাংলা",
//       });
//     }
//   };

//   render() {
//     const { date, locale, lang } = this.state;
//     return (
//       <div className="clock">
//         <Button text={lang} change={() => this.handleClick()}>
//           {lang}
//         </Button>
//         <h1> {date.toLocaleTimeString(locale)} </h1>
//       </div>
//     );
//   }
// }

export default Clock;
