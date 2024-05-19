import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";

import {
  chartBoxProduct,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      
      <div className="box box4">
        <PieChartBox />
      </div>
      
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      
      
    </div>
  );
};

export default Home;
