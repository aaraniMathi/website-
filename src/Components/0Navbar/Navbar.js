import './Navbar.css'

const Navbar=()=>{
    return(
     <div className="container-1">
        <div className="row">
            <div className="col-4">
                <div className="nave">
                    <div className="images">
                        <img src="./image/logo.png" alt="img"></img>
                    </div>
                    <div className="item">
                        <h2>Menu </h2>
                    </div>
                    <div className="col-2">
                    <div className="items">
                        <h2> Deals</h2>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item1">
                       
                        <h4>Sign In</h4>
                    </div>
                    </div>
                  </div>
            </div>
        </div>
     </div>

    )
}
export default Navbar;