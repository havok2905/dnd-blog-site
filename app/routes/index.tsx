import {Link} from '@remix-run/react';

import {Navbar} from '~/components/Navbar';

import * as ffxivBurningOfTheGreatwood from "./homebrew/adventures/ffxiv-burning-of-the-greatwood.mdx";

import * as seers from "./homebrew/creatures/seers.mdx";

import * as duineSpirits from "./homebrew/races/duine-spirits.mdx";
import * as dwarves from "./homebrew/races/dwarves.mdx";
import * as halflings from "./homebrew/races/halflings.mdx";
import * as serpentes from "./homebrew/races/serpentes.mdx";
import * as theVidi from "./homebrew/races/the-vidi.mdx";

import * as theWorldOfRunoa from './homebrew/world/the-world-of-runoa.mdx';

import * as sessionZeroLongForm from './resources/session-zero-long-form.mdx';
import * as sessionZeroShortForm from './resources/session-zero-short-form.mdx';

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
      <div>
        <Link to={path}>
          {title}
        </Link>
        <p>
          {description}
        </p>
      </div>
    );
  };

  return (
    <>
      <Navbar/>
      <div className="home-page-title-section">
        <img alt="logo" src={logo}/>
        <h1>Havok's Corner</h1>
      </div>
      <h2>Resources</h2>
      <ul>
        <li>{getPost(sessionZeroLongForm)}</li>
        <li>{getPost(sessionZeroShortForm)}</li>
      </ul>
      <h2>D&D Homebrew</h2>
      <h3>Adventures</h3>
      <ul>
        <li>{getPost(ffxivBurningOfTheGreatwood)}</li>
      </ul>
      <h3>World</h3>
      <ul>
        <li>{getPost(theWorldOfRunoa)}</li>
      </ul>
      <h3>Races</h3>
      <ul>
        <li>{getPost(duineSpirits)}</li>
        <li>{getPost(dwarves)}</li>
        <li>{getPost(halflings)}</li>
        <li>{getPost(theVidi)}</li>
        <li>{getPost(serpentes)}</li>
      </ul>
      <blockquote>
        !!!SPOILER TERRITORY AHEAD!!!
      </blockquote>
      <h3>Creatures</h3>
      <ul>
        <li>{getPost(seers)}</li>
      </ul>
    </>
  );
};

export default indexRoute;
