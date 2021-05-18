import '../../styles/sawoli.css';

export default function Login(){
   
        return (
            <form>
                <h3>Welcome back!</h3>
                <center><h6>Sign in to get most out of nuntium</h6></center>

                <div className="form-group">
                <img className='iconadze' src={`${process.env.PUBLIC_URL}/assets/images/User.png`} alt="User"></img>
                    <input type="email" className="form-control"  placeholder="         Username" />
                </div>

                <div className="form-group">
                <img className='iconadze' src={`${process.env.PUBLIC_URL}/assets/images/Key.png`} alt="Key"></img>
                    <input type="password" className="form-control" placeholder="         Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"><p className="logani">Login</p></button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
}
