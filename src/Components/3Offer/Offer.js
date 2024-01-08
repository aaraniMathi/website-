import './Offer.css'

const Offer=()=>{
    return(
   <div className="offer_container">
     
       <div className="offer_container_item">
            <h2>OFFERS & DEALS</h2>
       </div>
    <div className="row">   
    <div className="offer_card">
        <div className="image">
           <img src="./image/CHKZINGER.JPG" alt="img"></img>
         </div> 
       <div className="offer_content">
        <div className="title">
        1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.
        </div>
        <div className="title_text">
        1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.
        </div>

       </div>

    </div>
    <div className="offer_card">
        <div className="image">
           <img src="./image/ADDCHK99.jpg" alt="img"></img>
         </div> 
       <div className="offer_content">
        <div className="title">
        Add 2 Pc  Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.
        </div>
        <div className="title_text">
        Add 2 Pc  Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.
        </div>

       </div>

    </div>
    <div className="offer_card">
        <div className="image">
           <img src="./image/BIGSAVE.jpg" alt="img"></img>
         </div> 
       <div className="offer_content">
        <div className="title">
        Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.
        </div>
        <div className="title_text">
        Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.
        </div>

       </div>

    </div>
    </div>
   
    </div>
    )
}
export default Offer;