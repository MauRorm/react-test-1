  import Logo from "../images/home.png";
  import "../App.css";

const Header = () => {
  
    return (
      <header className="App-header">
        <div className="image-and-input-header">
          <img
            src={Logo}
            className="App-logo"
            alt="logo"
            width={"70px"}
            height={"15px"}
          />
        </div>
      </header>
    );
  };

  export default Header;