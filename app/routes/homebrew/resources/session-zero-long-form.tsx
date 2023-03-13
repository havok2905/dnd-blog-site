import {Layout} from '~/components/Layout';

export const meta = {
  attributes: {
    meta: {
      path: 'resources/session-zero-long-form',
      title: "Session Zero - Long Form",
      description: 'The Session Zero is a session designed to create alignment between players and plan out the entirety of the campaign to follow.'
    }
  }
};

export default () => {
  return (
    <Layout>
      <h2>Session Zero - Long Form</h2>
      <p>
        The Session Zero is a session designed to create alignment between players and plan out the entirety of the campaign to follow. TTRPGs take up a significant amount of a participants time, energy, and frequently delve into sensitive topics. Setting time aside to align on expectations early sets the game up for success. It creates a space to iron out agreements between players and clear up any misunderstandings prior to play.
      </p>
      <p>
        A long form Session Zero is designed for campaigns between six months and several years long. In longer games, periodically revisiting the checklist below is recommended. This session should take three to four hours.
      </p>
      <h3>About Me</h3>
      <ul>
        <li>
          <input type="checkbox"/> Explain experience/history as a game master
        </li>
        <li>
          <input type="checkbox"/> Discuss game focus: story, plot, exploration, dungeons crawls
        </li>
        <li>
          <input type="checkbox"/> Discuss communication styles: use of private chat, etiquette, in/out of character discussions
        </li>
        <li>
          <input type="checkbox"/> Inclusion of homebrew content?
        </li>
        <li>
          <input type="checkbox"/> Expectations of players?
        </li>
        <li>
          <input type="checkbox"/> Expectations of game master?
        </li>
      </ul>
      <h3>Scheduling</h3>
      <ul>
        <li>
          <input type="checkbox"/> Announce the system being used; 5e, MOTW, Pathfinder, Blades in the dark
        </li>
        <li>
          <input type="checkbox"/> If there is a cap on party size, discuss this
        </li>
        <li>
          <input type="checkbox"/> Discuss expected campaign length
        </li>
        <li>
          <input type="checkbox"/> Discuss session frequency: how many times per week/month
        </li>
        <li>
          <input type="checkbox"/> Discuss session length: how many hours?
        </li>
        <li>
          <input type="checkbox"/> Discuss session day: set day during the week or scheduled week to week?
        </li>
        <li>
          <input type="checkbox"/> Discuss session time: set hour during the day or scheduled week to week?
        </li>
        <li>
          <input type="checkbox"/> Discuss other ceremonies: leveling up hours, campaign checkup, one-shots, side sessions
        </li>
        <li>
          <input type="checkbox"/> Discuss virtual tooling
          <ul>
            <li>
              <input type="checkbox"/> VTT: roll20, Foundry
            </li>
            <li>
              <input type="checkbox"/> Voice chat
            </li>
            <li>
              <input type="checkbox"/> Text chat
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox"/> Discuss how character sheets will be managed
        </li>
        <li>
          <input type="checkbox"/> Discuss cancellation conditions. <strong>Be explicit about these</strong>
        </li>
      </ul>
      <h3>Pet Peeves</h3>
      <ul>
        <li>
          <input type="checkbox"/> List pet peeves as a game master
        </li>
        <li>
          <input type="checkbox"/> Prompt players to bring up their pet peeves
        </li>
      </ul>
      <p>
        These should drive discussion of Limits and Veils
      </p>
      <h3>Rules, Lines, and Veils</h3>
      <p>
        <strong>Rule:</strong> Procedure around how we engage with the game, mechanics, homebrew adjustments to game system.
      </p>
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
          <input type="checkbox"/> Discuss homebrewed rules. <strong>These should be documented somewhere public</strong>
        </li>
          <li>
          <input type="checkbox"/> Discuss the difference between rules, lines, and veils.
        </li>
          <li>
          <input type="checkbox"/> Discuss rules
          <ul>
            <li>
              <input type="checkbox"/> Leveling, when and how it occurs
            </li>
            <li>
              <input type="checkbox"/> Rules for PVP
            </li>
            <li>
              <input type="checkbox"/> How Inspiration is managed
            </li>
            <li>
              <input type="checkbox"/> Review homebrewed rules
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox"/> Discuss how the X-Card works
        </li>
        <li>
          <input type="checkbox"/> Discuss consequence for intentionally violating veils/limits/rules.
        </li>
        <li>
          <input type="checkbox"/> Review veils
          <ul>
            <li>
              <input type="checkbox"/> Create list together <strong>These should be documented somewhere public</strong>
            </li>
            <li>
              <input type="checkbox"/> Allow players to suggest veils in private
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox"/> Review lines
          <ul>
            <li>
              <input type="checkbox"/> Create list together <strong>These should be documented somewhere public</strong>
            </li>
            <li>
              <input type="checkbox"/> Allow players to suggest lines in private
            </li>
          </ul>
        </li>
      </ul>
      <h3>Game Introduction</h3>
      <ul>
        <li>
          <input type="checkbox"/> Discuss summary of the setting; Location, technology, faith, required history
        </li>
        <li>
          <input type="checkbox"/> Discuss starting location
        </li>
        <li>
          <input type="checkbox"/> Discuss more required context
        </li>
      </ul>
      <h3>Character Creation</h3>
      <ul>
        <li>
          <input type="checkbox"/> Go over stat-rolling; 4d6, standard array, point Buy
        </li>
        <li>
          <input type="checkbox"/> Discuss any alignment requirements
        </li>
        <li>
          <input type="checkbox"/> Discuss homebrew allowances
        </li>
        <li>
          <input type="checkbox"/> Any limits to number of characters owned by a player?
        </li>
        <li>
          <input type="checkbox"/> Introduces characters as a group
        </li>
      </ul>
      <h3>Next</h3>
      <ul>
        <li>
          <input type="checkbox"/> Make all public docs available to players
        </li>
        <li>
          <input type="checkbox"/> Schedule first session
        </li>
      </ul>
    </Layout>
  );
};
