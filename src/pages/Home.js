import React from 'react'
import avatar from '../resources/avatar.png'
import netflix from '../resources/subscriptions/netflix.svg'
import spotify from '../resources/subscriptions/spotify.svg'
import hulu from '../resources/subscriptions/hulu.svg'
import appletv from '../resources/subscriptions/apple-tv.svg'
import youtubepremium from '../resources/subscriptions/youtube-premium.svg'
import disneyplus from '../resources/subscriptions/disney+.svg'
import amazonprime from '../resources/subscriptions/amazon-prime.svg'
import netflixapp from '../resources/subscriptionsapp/Netflix.svg'
import india from '../resources/flags/India.svg'

const Home = () => {
  return (
    <div>
      <div className="navbar row d-flex justify-content-between align-items-center mt-1">
        <div className="col ">
          <h2>Hello Devid</h2>
          <div>Track your all subscriptions at one place!</div>
        </div>
        <div className="">
          <button className="btn mx"><img src={india} alt='' />INR</button>
          <button className="btn mx">Add Subscription</button>
          <img className='avatar' src={avatar} alt="" />
        </div>
      </div>
      <div className='d-flex justify-content-end mt-3'>
        <div className='card-mr w-100'>
          <div className="card text-center">
            <div className="row mt-1 mb-1">
              <div className="col">
                <h1>5200 ₹</h1>
                <div>Monthly</div>
              </div>
              <div className="col">
                <h1>25000 ₹</h1>
                <div>Yearly</div>
              </div>
            </div>
            <div className="mb-1">
              <button className="btn mx mt-1">Average</button>
              <button className="btn mx mt-1">Total</button>
              <button className="btn mx mt-1">Pending</button>
            </div>
          </div>
          <div className='card mt-2 mb-1 subscriptions'>
            <ul>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={netflix} alt="" width={40} />
                    <div>
                      <h6>Netflix</h6>
                      <div>Due in 4 weeks</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 April 2022
                  </div>
                  <div className='col text-end'>
                    <h5>649 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={spotify} alt="" width={40} />
                    <div>
                      <h6>Spotify</h6>
                      <div>Due in 4 weeks</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 April 2022
                  </div>
                  <div className='col text-end'>
                    <h5>112 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={amazonprime} alt="" width={40} />
                    <div>
                      <h6>Amazon Prime</h6>
                      <div>Due in 12 months</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 March 2023
                  </div>
                  <div className='col text-end'>
                    <h5>1499 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={disneyplus} alt="" width={40} />
                    <div>
                      <h6>Disney+</h6>
                      <div>Due in 12 months</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 March 2023
                  </div>
                  <div className='col text-end'>
                    <h5>1499 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={appletv} alt="" width={40} />
                    <div>
                      <h6>Apple TV+</h6>
                      <div>Due in 4 weeks</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 April 2022
                  </div>
                  <div className='col text-end'>
                    <h5>99 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={hulu} alt="" width={40} />
                    <div>
                      <h6>Hulu</h6>
                      <div>Due in 4 weeks</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 April 2022
                  </div>
                  <div className='col text-end'>
                    <h5>112 ₹</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col d-flex flex-row'>
                    <img className='sub-icon' src={youtubepremium} alt="" width={40} />
                    <div>
                      <h6>YouTube Premium</h6>
                      <div>Due in 4 weeks</div>
                    </div>
                  </div>
                  <div className='col'>
                    12 March 2022 &#8212; 12 April 2022
                  </div>
                  <div className='col text-end'>
                    <h5>79 ₹</h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='card card-ml news mb-1'>
          <h3>News</h3>
          <div>
            <div className='mt-2 col d-flex flex-row'>
              <img className='sub-icon' src={netflixapp} alt="" width={40} />
              <div>
                <div>26 March 2022</div>
                <h6>Netflix has announced new and reduced prices for plans in India, with the mobile-only plan now starting at Rs 149 per month, instead of the earlier Rs 199 per month.</h6>
              </div>
            </div>
            <div className='mt-2 col d-flex flex-row'>
              <img className='sub-icon' src={amazonprime} alt="" width={40} />
              <div>
                <div>14 March 2022</div>
                <h6>Amazon Prime membership will reportedly see a price hike of up to 50 percent in December. A new screenshot from the Amazon app confirms that the current annual Prime membership plan, priced at Rs. 999, will remain into effect till December 13.</h6>
              </div>
            </div>
            <div className='mt-2 col d-flex flex-row'>
              <img className='sub-icon' src={youtubepremium} alt="" width={40} />
              <div>
                <div>5 February 2022</div>
                <h6>YouTube Music Premium monthly subscriptions start at ₹99 per month, while family plans start at ₹149 per month. Students can avail of monthly subscriptions at ₹59 per month.</h6>
              </div>
            </div>
            <div className='mt-2 col d-flex flex-row'>
              <img className='sub-icon' src={disneyplus} alt="" width={40} />
              <div>
                <div>20 January 2022</div>
                <h6>Disney+ Hotstar will be offering three paid subscription plans to its users. There is a Mobile plan that will cost 499₹ annually, the other is the Super plan that will cost 899₹ annually, the third is the Premium plan that costs 1,499₹ annually.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home