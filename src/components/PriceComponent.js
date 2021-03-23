import React from "react";

function PriceTab() {
  return (
    
      <div className="pricebackground">
        <br />
        <div className="container p-2">
        <div className="row row-content" style={{border: 'none'}}>
          <div className="col-sm-4 p-1">
            <div className="card text-center text-light">
              <div className="card-header bg-dark font-weight-bold ">
                3 MONTH SUBSCRIPTION
              </div>
              <div className="card-body bg-secondary">
                <p className="card-text">Personal Trainer </p>
                <p className="card-text">Diet Guide</p>
                <p className="card-text">Supplement</p>
                <a
                  href="/pricetab" className="btn btn-lg  btn-info font-weight-bold "
                >
                  Join Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-1">
            <div className="card text-center text-light">
              <div className="card-header bg-dark font-weight-bold ">
                6 MONTH SUBSCRIPTION
              </div>
              <div className="card-body bg-secondary">
                <p className="card-text">Personal Trainer </p>
                <p className="card-text">Diet Guide</p>
                <p className="card-text">Supplement</p>
                <a href="/pricetab" className="btn btn-lg  btn-info font-weight-bold ">
                  Join Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 p-1 mb-5 pb-5">
            <div className="card text-center text-light">
              <div className="card-header bg-dark font-weight-bold ">
                1 YEAR SUBSCRIPTION
              </div>
              <div className="card-body bg-secondary">
                <p className="card-text">Personal Trainer </p>
                <p className="card-text">Diet Guide</p>
                <p className="card-text">Supplement</p>
                <a href="/pricetab" className="btn btn-lg btn-info font-weight-bold ">
                  Join Here
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default PriceTab;
