import logo from '~/images/logo.png';

import {Layout} from '~/components/Layout';

const indexRoute = () => {
  return (
    <Layout>
      <div className="home-page-title-section">
        <img alt="logo" src={logo}/>
        <h1>Havok's Corner</h1>
        <h3>D&D Homebrew | Tabletop Gaming | Writing</h3>
      </div>
    </Layout>
  );
};

export default indexRoute;
