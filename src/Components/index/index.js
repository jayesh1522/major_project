import Head from "../Header/index";
import MainContent from "./content";

import "./index.css";
import "antd/dist/antd.css";

function Index() {
  return (
    <div className="index-class">
      <Head />
      <MainContent />
    </div>
  );
}

export default Index;
