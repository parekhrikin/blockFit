import { useEffect, useState } from "react";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [isMetaMask, setIsMetaMask] = useState(false);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const navigate = useNavigate();

  // Login with metamask https://docs.metamask.io/wallet/tutorials/react-dapp-local-state/
  const registerUserMetamask = async () => {

  }

  const loginUserMetaMask = async () => {
    
    if (window.ethereum) {

      await window.ethereum.request({

        method: "eth_requestAccounts",

      }).then ((accounts) => {
        
        setWallet({accounts});
        console.log("accounts", accounts)
        localStorage.setItem("userWalletId", accounts[0]);
        navigate("/dash");

      })
      .catch((err) => {

        console.log(err);
      });            
    }
  };

  useEffect(()=>{

    if (wallet[0]) {

      navigate("/dash");

    }

  }, [wallet])

  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMask(window.ethereum.isMetaMask);
    }
  }, [window.ethereum]);

  return (
    <div className="container">
      <ul className="nav nav-tabs" id="account-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="singin-tab"
            data-bs-toggle="tab"
            data-bs-target="#sing-in"
            type="button"
            role="tab"
            aria-controls="sign-in"
            aria-selected="true"
          >
            Sign In
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="register-tab"
            data-bs-toggle="tab"
            data-bs-target="#register"
            type="button"
            role="tab"
            aria-controls="register"
            aria-selected="false"
          >
            Register
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="sing-in"
          role="tabpanel"
          aria-labelledby="signin-tab"
        >
          <h1> Welcome to BlockFit </h1>
          {isMetaMask  && (
            <button
              className="btn btn-outline-success"
              onClick={loginUserMetaMask}
              id="login-button"
            >
              Login with Metamask
            </button>
          )}
          {!isMetaMask && <h2>Download metamask to login</h2>}
        </div>
        <div
          className="tab-pane fade"
          id="register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <form className="form-register text-center">
            <img src="./logo.png" alt="" width="72" height="72" />
            <h3> Register </h3>
            <div className="form-group mb-2">
              <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                className="form-control mb-2"
                id="registerPassword"
                placeholder="Password"
              />
              <label htmlFor="registerRepeatPassword">Repeat password</label>
              <input
                type="password"
                className="form-control"
                id="registerRepeatPassword"
                placeholder="Repeat password"
              />
            </div>

            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>
          <button
            className="btn btn-outline-warning"
            id="register-button"          
            onClick={registerUserMetamask}
          >            
            Register with Metamask
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
