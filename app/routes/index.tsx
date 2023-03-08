import {Navbar} from '~/design-system/components/Navbar';

import {Button} from '~/design-system/components/Button';
import {Card} from '~/design-system/components/Card';
import {Page} from '~/design-system/components/Page';

import {meta as seers} from "./homebrew/creatures/seers";

import {meta as duineSpirits} from "./homebrew/races/duine-spirits";
import {meta as dwarves} from "./homebrew/races/dwarves";
import {meta as halflings} from "./homebrew/races/halflings";
import {meta as serpentes} from "./homebrew/races/serpentes";
import {meta as theVidi} from "./homebrew/races/the-vidi";

import {meta as theWorldOfRunoa} from './homebrew/world/the-world-of-runoa';

import {meta as sessionZeroLongForm} from './resources/session-zero-long-form';
import {meta as sessionZeroShortForm} from './resources/session-zero-short-form';

import logo from '~/images/logo.png';

interface IPost {
  attributes: {
    meta: {
      description: string;
      path: string;
      title: string;
    }
  }
}

const indexRoute = () => {
  const getPost = (post: IPost) => {
    const {
      description = '',
      path = '',
      title = ''
    } = post?.attributes?.meta;

    return (
      <Card title={title}>
        <p>
          {description}
        </p>
        <Button
          isAnchor
          path={path}
          text="View" />
      </Card>
    );
  };

  return (
    <>
      <Navbar/>
      <Page>
        <div className="home-page-title-section">
          <img alt="logo" src={logo}/>
          <h1>Havok's Corner</h1>
        </div>
        <h2>Resources</h2>
        {getPost(sessionZeroLongForm)}
        {getPost(sessionZeroShortForm)}
        <h2>D&D Homebrew</h2>
        <h3>World</h3>
        {getPost(theWorldOfRunoa)}
        <h3>Races</h3>
        {getPost(duineSpirits)}
        {getPost(dwarves)}
        {getPost(halflings)}
        {getPost(theVidi)}
        {getPost(serpentes)}
        <Card>
          <p>
            !!!SPOILER TERRITORY AHEAD!!!
          </p>
        </Card>
        <h3>Creatures</h3>
        {getPost(seers)}
      </Page>
    </>
  );
};

export default indexRoute;
