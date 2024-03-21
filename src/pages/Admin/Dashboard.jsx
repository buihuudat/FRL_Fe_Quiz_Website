import { useEffect, useState } from "react";
import "./styles.css";
import { quizAttemptApi } from "../../utils/apis/quizAttemptApi";

const Dashboard = () => {
  const [topRank, setTopRank] = useState([]);
  useEffect(() => {
    const getRank = async () => {
      const result = await quizAttemptApi.getAllQuizAttempts();
      setTopRank(result);
    };
    getRank();
  }, []);

  console.log(topRank);

  return (
    <div className="dashboard">
      <div className="boxs">
        <div className="box">
          <p>
            67
            <br />
            <span>Customers</span>
          </p>
          <i className="fa fa-users box-icon"></i>
        </div>
        <div className="box">
          <p>
            88
            <br />
            <span>Quizes</span>
          </p>
          <i className="fa fa-list box-icon"></i>
        </div>
      </div>

      <div className="col-div-8">
        <div className="box-8">
          <div className="content-box">
            <p>
              Top Rank <span>Sell All</span>
            </p>
            <br />
            <table>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Score</th>
              </tr>
              {topRank.map((data) => (
                <tr key={data._id}>
                  <td>{data.user?.username}</td>
                  <td>{data.user?.email}</td>
                  <td>{data?.score}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>

      <div className="col-div-4">
        <div className="box-4">
          <div className="content-box">
            <p>
              Total Users <span>Sell All</span>
            </p>
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"></div>
                </div>
                <div className="mask half">
                  <div className="fill"></div>
                </div>
                <div className="inside-circle"> 70% </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
