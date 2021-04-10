
const Header = () => {
  return (
    
    <header>
      <div className="header-container">
        <a href="http://www.phelangardens.com"><img id="header-logo" src="logo.png" width="120px" height="120px"></img></a>
        <h1>Soil Calculator</h1>
      </div>
      <p>
        Calculate the amount of bags needed to fill a rectangular region. <b>Bag volume must be specified in cubic feet (ft<sup>3</sup>)</b>. Rectangular dimensions may be specified with feet and inches.
      </p>
    </header>
  );
}

export default Header;