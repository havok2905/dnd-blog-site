import {Navbar} from '~/design-system/components/Navbar';

import {Page} from '~/design-system/components/Page';

export const meta = {
  attributes: {
    meta: {
      path: 'resources/session-zero-short-form',
      title: "Session Zero - Short Form",
      description: 'The Session Zero is a session designed to create alignment between players and plan out the entirety of the session to follow.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <h2>Session Zero - Short Form</h2>
        <p>
          The Session Zero is a session designed to create alignment between players and plan out the entirety of the session to follow. TTRPGs can be complex and frequently delve into sensitive topics, so setting time aside to align on expectations early sets the session up for success.
        </p>
        <p>
          A short form Session Zero is designed for short adventures and one-shot sessions. This should take up the first 20-30 minutes of your game.
        </p>
        <h3>About the Game</h3>
        <ul>
          <li>
            <input type="checkbox"/> If this is a new group, explain experience/history as a game master
          </li>
          <li>
            <input type="checkbox"/> Discuss a very quick summary of expectations of the game
          </li>
          <li>
            <input type="checkbox"/> Discuss session frequency: how many times per week/month
          </li>
          <li>
            <input type="checkbox"/> Discuss session length: how many hours?
          </li>
        </ul>
        <h3>Lines and Veils</h3>
        <p>
          <strong>Line:</strong> A hard content limit. This content will never appear in the game.
        </p>
        <p>
          <strong>Veil:</strong> A soft content limit. This can appear in the game, but as a fade-to-black moment.
        </p>
        <p>
          <strong>X-Card:</strong> The X-card can be any card or token in a live game. In an online game, players can signal X with their arms or type x into the chat to indicate they are using the X-card, or say “X-Card” out loud. If at any time a player feels uncomfortable with content that is introduced into the game by the GM or by another player, they may use the X-card to veto that content. All other players and the GM must respect what the X-card is for. Once the card is used, the person who used it must indicate what content made them uncomfortable. They do not have to explain why it made them uncomfortable. From there, the content can be changed, faded to black, or a short break can be taken if needed. Under no circumstances should the X-card be ignored when used.
        </p>
        <ul>
          <li>
            <input type="checkbox"/> Review GM veils ( Should be filled out by GM in advance )
          </li>
          <li>
            <input type="checkbox"/> Review GM lines ( Should be filled out by GM in advance )
          </li>
          <li>
            <input type="checkbox"/> Give opportunity to suggest additions to the list of lines and veils
          </li>
        </ul>
        <h3>Game Introduction</h3>
        <ul>
          <li>
            <input type="checkbox"/> Discuss summary of the setting; location, technology, faith, required history
          </li>
          <li>
            <input type="checkbox"/> Quickly discuss starting location
          </li>
        </ul>
        <h3>Next</h3>
        <ul>
          <li>
            <input type="checkbox"/> Take a quick break
          </li>
          <li>
            <input type="checkbox"/> Start session
          </li>
        </ul>
      </Page>
    </>
  );
};
