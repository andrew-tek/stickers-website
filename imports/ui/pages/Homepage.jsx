import React, {Component} from 'react';
import {Link} from 'react-router';


export default class Homepage extends Component {

  render() {

    return (
      <div className="container">
        <br></br><br></br><br></br><br></br>
        <div className="col-sm-4">
            <img className="img-responsive"   src="https://ih0.redbubble.net/image.195700044.4328/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg"/>
            <br></br>
            <Link to='/Spongebob'>
              <button className="btn btn-primary text-center"> Patrick Mayonaise </button>
            </Link>
        </div>
        <div className="col-sm-4">
            <img className="img-responsive"   src="http://img13.deviantart.net/b8a8/i/2013/108/e/3/lemongrab_by_twillis-d6266g9.png"/>
            <br></br>
            <Link to='/Spongebob'>
              <button className="btn btn-primary text-center"> Lemongrab UNNACCEPTABLE </button>
            </Link>
        </div>
        <div className="col-sm-4">
            <img className="img-responsive"   src="https://ih0.redbubble.net/image.193148693.6385/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg"/>
            <br></br>
            <Link to='/Spongebob'>
              <button className="btn btn-primary text-center"> SpongeBob Smirk </button>
            </Link>
        </div>

      </div>
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg"/>
//               <h2 className="text-center"> Cali Yogo  </h2>
//               <div className="text-center">
                // <Link to='/cali_yogo-strawberry'>
                //   <button className="btn btn-primary text-center"> Buy Now </button>
                // </Link>
//               </div>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/products/salt/mango/0.png"/>
//               <h2 className="text-center"> Mango Salt </h2>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png"/>
//               <h2 className="text-center"> Apple Shake </h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/eliquids/modzilla-_nuclear_fruit_punch.png"/>
//               <h2 className="text-center"> Nuclear Fruit Punch </h2>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/eliquids/steep_vapors-pop_deez.png"/>
//               <h2 className="text-center"> Pop Deez </h2>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/photos/Binary_E_Liquid-Pow.jpg"/>
//               <h2 className="text-center"> Binary E Liquid Pow </h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/photos/high_voltage_vaporz-diode.jpg"/>
//               <h2 className="text-center"> High Voltage Vapor Diode </h2>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/eliquids/mother_nature_vapor-sweet_keffir_lime.jpg"/>
//               <h2 className="text-center"> Lime </h2>
//             </div>
//             <div className="col-sm-4">
//               <img className="img-responsive"   src="https://swchllc.s3.amazonaws.com/eliquids/rich__famous-_atomic_berry.png"/>
//               <h2 className="text-center"> Atomic Berry </h2>
//           </div>
//         </div>
//         </div>
//       </div>
     )
   }
 }
