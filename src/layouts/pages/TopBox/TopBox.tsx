import"./topBox.scss"
const TopBox = () => {
    return(
        <div className="TopBox">
        <div className="boxInfo">
            <div className="title">
                <img src="public/Image/user (1).svg" alt=""/>
                <span> User pran </span>

            </div>
            <h1> 11.11111</h1>
        </div>
       <div>
        <div className="chartInfo">
            <div className="chart"></div>
            <div className="texts">
                <span className="percentage">45%</span>
                <span className="percentage">this month</span>
            </div>
        </div>
       </div>
   </div>
   )
     
  };
  
  export default TopBox;