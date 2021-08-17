


const Navbar=()=> {
  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"blue"}}>
  <div class="container-fluid">
  {/* <i class="fa-solid fa-arrow-left-long"></i>
  <i class="navbar-brand fa-solid fa-arrow-left-long"></i> */}
    <a class="navbar-brand" href="#">HDFC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log out</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
