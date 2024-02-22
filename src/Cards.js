import React from "react";
import whole from "./whole.png";
import './Cards.css'
import FmdBadIcon from '@mui/icons-material/FmdBad';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';

function Cards() {
  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-9 posts-center position-relative">
              <div class="card mt-lg-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img className="rounded-circle" src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>


              <div class="card mt-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-5">
                <img src={whole} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <h2>...</h2>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="">
                    <div>
                      <img src="https://image.com" alt="Img" />
                    </div>
                  </div>
                </div>
              </div>

            </div>



            <div class="col-3 mt-5">


            <div className="container d-none d-lg-flex flex-column mt-4 ">
             <div className="d-flex d-none d-lg-block justify-content-between">
              <div className="d-flex align-items-center">
                
                <AddLocationAltIcon fontSize="medium" />
                <input type="text" placeholder="Enter Your Location" className="input-text"/>
                <button className="btn">
                <img src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Edit"
                />
                </button>
              </div>     
             </div>
              <hr className="my-1"/>
               
               
                <div className="d-flex align-items-start gap-2 mb-4 mt-4">
                  <div className="d-flex align-item-top">

                     <FmdBadIcon fontSize="medium" />
                  </div>
                    <p className="location_info">Add Location to Get Precise Results</p>
                </div>


                <div className="d-flex align-items-center gap-2 text-capitalize mb-3 mt-5">
                    <div>
                      <ThumbUpIcon fontSize="medium" />
                    </div>   
                      <p className="mt-2 p-1">RECOMMENDED GROUPS</p>
                </div>



                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" 
                      src=""
                      alt="Pic"/>
                      <div className="text-wrapper">
                          Zeya
                      </div>
                    </div>
                    <a className="btn follow rounded-5" href="/">Follow</a>
                  </div>


                

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic"/>
                      <div className="text-wrapper">
                          Mustafa
                      </div>
                    </div>
                    <a className="btn follow rounded-5" href="/">Follow</a>
                  </div>



                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic"/>
                      <div className="text-wrapper">
                          Mohammad
                      </div>
                    </div>
                    <a className="btn follow rounded-5" href="/">Follow</a>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic"/>
                      <div className="text-wrapper">
                          Zain
                      </div>
                    </div>
                    <a className="btn follow rounded-5" href="/">Follow</a>
                  </div>


                </div>




                </div>
              
              <div className="android_modal fixed-bottom d-lg-none">
                <button className=" rounded-circle btn btn-dark">

                <EditIcon fontSize="large" variant ="contained"/>
                </button>
              </div>

              </div>
          
          </div>
        
        
        </div>
      </div>
     
    </div>
  );
}

export default Cards;
