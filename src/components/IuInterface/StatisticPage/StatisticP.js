import React, {useState} from 'react';
import "./mainStatistic.scss"
import Footer from "../Footer";

function StatisticP(props) {

    const [user, setUser] = useState([
        {img:"/images/Avatar (1).png", name:"Neil Sims", email:"email@example.com", price:"$367"},
        {img:"/images/Avatar (2).png", name:"Bonnie Green", email:"email@example.com", price:"$67"},
        {img:"/images/Avatar (3).png", name:"Micheal Gou", email:"email@example.com", price:"$3467"},
        {img:"/images/Avatar (4).png", name:"Thomas Lean", email:"email@example.com", price:"$2367"},
        {img:"/images/Avatar (5).png", name:"Lana Byrd", email:"email@example.com", price:"$367"},
        {img:"/images/Avatar (6).png", name:"Karen Nelson", email:"email@example.com", price:"$1367"},
    ]);

    const [product, setProduct] = useState([
        {name:"Restaurant Booking App", bottomName:"React & Bootstrap Framework", number:"70 sales"},
        {name:"UI Kit", bottomName:"React & Bootstrap Framework", number:"54 sales"},
        {name:"Design System Pro", bottomName:"Bootstrap Framework", number:"47 sales"},
        {name:"Dashboard", bottomName:"Tailwind, React", number:"43 sales"},
        {name:"Glassmorphism UI", bottomName:"Vue Js, Tailwind ", number:"38 sales"},
        {name:"Multipurpose Template", bottomName:"React & Bootstrap Framework", number:"22 sales"},
    ]);
    const [secondProduct, setSecondProduct] = useState([
        {name:"Payment from",secondName:"Bonnie Green", data:"Apr 23 ,2021", price:"$2300", completed:"Completed"},
        {name:"Payment refund to",secondName:"#00910", data:"Apr 23, 2021", price:"-$670", completed:"Completed"},
        {name:"Payment failed from ",secondName:"#087651", data:"Apr 18, 2021", price:"$234", completed:"Cancelled"},
        {name:"Payment from ",secondName:"Bonnie Green", data:"Apr 15, 2021", price:"$5000", completed:"In progress"},
        {name:"Payment from ",secondName:"Jese Leos", data:"Apr 15, 2021", price:"$2300", completed:"In progress"},
        {name:"Payment from ",secondName:"THEMSBERG LLC", data:"Apr 11, 2021", price:"$280", completed:"Completed"},
    ]);
    return (
        <>
           <div className="main-statistic">
               <p className="Sales">
                   Sales
                   <img src="/images/statickCirckle.png" alt=""/>
               </p>
               <div className="all-line">
                   <div className="for-middle-line">
                       <img className="tooltipVerticalLine" src="/images/Tooltip Vertical Line (1).png" alt=""/>
                       <img className="statisticLine" src="/images/statisticLine.png" alt=""/>
                       <img className="tooltip-img" src="/images/Tooltip (1).png" alt=""/>
                   </div>
                   <div className="for-line">
                   <p className="for-in-line-number">240K</p>
                   <div className="for-base-line"></div>
               </div>
                   <div className="for-line">
                       <p className="for-in-line-number">200K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-line">
                       <p className="for-in-line-number">160K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-line">
                       <p className="for-in-line-number">120K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-line">
                       <p className="for-in-line-number">80K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-line">
                       <p className="for-in-line-number">40K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-line">
                       <p className="for-in-line-number">0K</p>
                       <div className="for-base-line"></div>
                   </div>
                   <div className="for-bottom-text">
                       <p className="for-text-bottom">01 Apr</p>
                       <p className="for-text-bottom">02 Apr</p>
                       <p className="for-text-bottom">03 Apr</p>
                       <p className="for-text-bottom">04 Apr</p>
                       <p className="for-text-bottom">05 Apr</p>
                       <p className="for-text-bottom">06 Apr</p>
                       <p className="for-text-bottom">07 Apr</p>
                   </div>
               </div>
           </div>
            <div className="second-static">
                <div className="left-static">
                    <p className="Latest">Latest Customers</p>
                    {user.map((item, index)=>(
                        <div key={index}>
                            <div key={index} className="personal-data">
                                <div className="avatar-image">
                                    <img src={item.img} alt="image"/>
                                </div>
                                <div className="email-name">
                                    <div className="name">{item.name}</div>
                                    <p className="email">{item.email}</p>
                                </div>
                                <div className="price">
                                    {item.price}
                                </div>
                            </div>
                            <div className="for-user-line"></div>
                        </div>

                    ))}
                </div>
                <div className="right-static">
                    <p className="Latest">Top products</p>
                    {product.map((item, index)=>(
                        <div key={index}>
                            <div className="product-data">
                                <div className="all-name">
                                    <div className="name">{item.name}</div>
                                    <div className="bottom-name">{item.bottomName}</div>
                                </div>
                                <div className="numbers">
                                    <strong>{item.number.substring(0,2)}</strong> <span>{item.number.substring(3)}</span>
                                </div>
                            </div>
                        <div className="product-line"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-footer-static">
            <p className="Latest">Transactions</p>
            <p className="this">This is a list of latest transactions.</p>
            <table className="table table-striped">
                <thead className="thead">
                <tr>
                    <th className="th-text th-text1" scope="col">TRANSACTION</th>
                    <th className="th-text" scope="col">DATE & TIME</th>
                    <th className="th-text" scope="col">AMOUNT</th>
                    <th className="th-text th-text2" scope="col">STATUS</th>
                </tr>
                </thead>
                <tbody className="tbody">
                {secondProduct.map((item, index)=>(
                    <tr className="bg-white">
                        <td className="bg-white td-text"><div className="td-in-div"><p>{item.name+" "} </p> <strong>{" "+item.secondName}</strong></div></td>
                        <td className="bg-white td-text2"><p>{item.data}</p></td>
                        <td className="bg-white td-text3"><strong>{item.price}</strong></td>
                        <td className="bg-white td-text4"><p>{item.completed}</p></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
            <div className="for-mobile">
                <div className="top-footer-static">
                    <p className="Latest">Transactions</p>
                    <p className="this">This is a list of latest transactions.</p>
                    <table className="table table-striped">
                        <thead className="thead">
                        <tr>
                            <th className="th-text th-text1" scope="col">TRANSACTION</th>
                            <th className="th-text" scope="col">DATE & TIME</th>
                        </tr>
                        </thead>
                        <tbody className="tbody">
                        {secondProduct.map((item, index)=>(
                            <tr className="bg-white">
                                <td className="bg-white td-text"><div className="td-in-div"><p>{item.name+" "} </p> <strong>{" "+item.secondName}</strong></div></td>
                                <td className="bg-white td-text2"><p>{item.data}</p></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default StatisticP;