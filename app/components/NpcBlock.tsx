type Ability =
  'Strength' |
  'Dexterity' |
  'Constitution' |
  'Intelligence' |
  'Wisdom' |
  'Charisma';

type Alignment =
  'Lawful Good' |
  'Neutral Good' |
  'Chaotic Good' |
  'Lawful Neutral' |
  'Neutral' |
  'Chaotic Neutral' |
  'Lawful Evil' |
  'Neutral Evil' |
  'Chaotic Evil' |
  'Unaligned' ;

interface Action {
  name: string;
  text: string[];
}

interface Feature {
  name: string;
  text: string[];
}

interface LegendaryAction {
  name: string;
  text: string[];
}

type Size =
  'Tiny' |
  'Small' |
  'Medium' |
  'Large' |
  'Huge' |
  'Gargantuan';

interface Skill {
  bonus: number;
  name: string;
}

interface Speed {
  feet: number;
  name: string;
}

interface NpcBlockProps {
  ac: number;
  actions: Action[];
  alignment: Alignment;
  cantrips: string[];
  cha: number;
  con: number;
  cr: string;
  dex: number;
  eighthLevel: string[];
  features: Feature[];
  fifthLevel: string[];
  firstLevel: string[];
  fourthLevel: string[];
  hp: number;
  int: number;
  lairActions: string[];
  lairActionsText: string;
  languages: string[];
  legendaryActions: LegendaryAction[];
  legendaryActionsText: string;
  name: string;
  ninthLevel: string[];
  proficiencyBonus: number;
  saves: Ability[];
  secondLevel: string[];
  senses: string[];
  seventhLevel: string[];
  sixthLevel: string[];
  skills: Skill[];
  size: Size;
  str: number;
  speed: Speed[];
  spellcastingAbility: Ability;
  spellcastingBonus: number;
  spellcastingLevel: number;
  spellcastingSaveDc: number;
  thirdLevel: string[];
  tokenAlt: string;
  tokenSrc: string;
  type: string;
  wis: number;
}

const SPELLCASTING_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
  [4, 3, 3, 2, 0, 0, 0, 0, 0],
  [4, 3, 3, 3, 1, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

export const NpcBlock = ({
  ac,
  actions,
  alignment,
  cantrips,
  cha,
  con,
  cr,
  dex,
  eighthLevel,
  features,
  fifthLevel,
  firstLevel,
  fourthLevel,
  hp,
  int,
  lairActions,
  lairActionsText,
  languages,
  legendaryActions,
  legendaryActionsText,
  name,
  ninthLevel,
  proficiencyBonus,
  saves,
  secondLevel,
  senses,
  seventhLevel,
  sixthLevel,
  size,
  skills,
  speed,
  spellcastingAbility,
  spellcastingBonus,
  spellcastingLevel,
  spellcastingSaveDc,
  str,
  thirdLevel,
  tokenAlt,
  tokenSrc,
  type,
  wis
}: NpcBlockProps) => {
  const getAbilityMod = (score: number, proficient: boolean): string => {
    const mod = Math.floor((score - 10) / 2);
    const adjusted = proficient ? mod + proficiencyBonus : mod;
    return adjusted < 0 ? adjusted.toString() : `+${adjusted}`;
  };

  const getActions = (): React.ReactNode | null => {
    if (!actions.length) return null;

    return (
      <>
        <h4>Actions</h4>
        {
          actions.map(action => {
            const {name, text} = action;
            const [firstItem, ...rest] = text;

            return (
              <>
                <p>
                  <strong>{name}:</strong> {firstItem}
                  {rest.map(item => <p>{item}</p>)}
                </p>
              </>
            )
          })
        }
      </>
    );
  };

  const getFeatures = (): React.ReactNode | null => {
    if (!features.length) return null;

    return (
      <>
        <h4>Features</h4>
        {
          features.map(feature => {
            const {name, text} = feature;
            const [firstItem, ...rest] = text;

            return (
              <>
                <p>
                  <strong>{name}:</strong> {firstItem}
                  {rest.map(item => <p>{item}</p>)}
                </p>
              </>
            )
          })
        }
      </>
    );
  };

  const getIsProficient = (ability: Ability): boolean => {
    return saves.includes(ability);
  };

  const getLairActions = (): React.ReactNode | null => {
    if (!lairActions.length) return null;

    return (
      <>
        <h4>Lair Actions</h4>
        {lairActionsText && <p>{lairActionsText}</p>}
        <ul>
          {lairActions.map(lairAction => <li>{lairAction}</li>)}
        </ul>
      </>
    )
  };

  const getLanguages = (): React.ReactNode | null => {
    if (!languages.length) return null;
   
    const languagesString = languages.join(', ');

    return (
      <p>
        <strong>Languages: </strong> {languagesString}
      </p>
    );
  };

  const getLegendaryActions = (): React.ReactNode | null => {
    if (!legendaryActions.length) return null;

    return (
      <>
        <h4>Legendary Actions</h4>
        {legendaryActionsText && <p>{legendaryActionsText}</p>}
        {
          legendaryActions.map(legendaryAction => {
            const {name, text} = legendaryAction;
            const [firstItem, ...rest] = text;

            return (
              <>
                <p>
                  <strong>{name}:</strong> {firstItem}
                  {rest.map(item => <p>{item}</p>)}
                </p>
              </>
            )
          })
        }
      </>
    );
  };

  const getSenses = (): React.ReactNode | null => {
    if (!senses.length) return null;
   
    const sensesString = senses.join(', ');

    return (
      <p>
        <strong>Senses: </strong> {sensesString}
      </p>
    );
  };

  const getSkills = (): React.ReactNode | null => {
    if (!skills.length) return null;

    const skillsString = skills.map(skill => {
      const {bonus, name} = skill;
      return `${name}${bonus < 1 ? '-' : '+'}${bonus}`;
    }).join(', ');

    return (
      <p>
        <strong>Skills: </strong> {skillsString}
      </p>
    );
  }
  
  const getSpeed = (): string => {
    return speed.map(speedItem => {
      const {feet, name} = speedItem;
      return `${name} ${feet}ft.`;
    }).join(', ');
  };

  const getSpellbook = (): React.ReactNode | null => {
    if (
      !cantrips.length &&
      !firstLevel.length &&
      !secondLevel.length &&
      !thirdLevel.length &&
      !fourthLevel.length &&
      !fifthLevel.length &&
      !sixthLevel.length &&
      !seventhLevel.length &&
      !eighthLevel.length &&
      !ninthLevel.length
    ) return null;

    const spellSlots = SPELLCASTING_TABLE[spellcastingLevel];

    return (
      <>
        <h4>Spellcasting</h4>
        <p>
          <strong>Level: </strong>{spellcastingLevel}
        </p>
        <p>
          <strong>Ability: </strong>{spellcastingAbility}
        </p>
        <p>
          <strong>Bonus: </strong>{spellcastingBonus}
        </p>
        <p>
          <strong>Save DC: </strong>{spellcastingSaveDc}
        </p>
        <ul>
          <li>
            <strong>Cantrips:</strong> {cantrips.join(', ')}
          </li>
          <li>
            <strong>1st (${spellSlots[0]}):</strong> {firstLevel.join(', ')}
          </li>
          <li>
            <strong>2nd (${spellSlots[1]}):</strong> {secondLevel.join(', ')}
          </li>
          <li>
            <strong>3rd (${spellSlots[2]}):</strong> {thirdLevel.join(', ')}
          </li>
          <li>
            <strong>4th (${spellSlots[3]}):</strong> {fourthLevel.join(', ')}
          </li>
          <li>
            <strong>5th (${spellSlots[4]}):</strong> {fifthLevel.join(', ')}
          </li>
          <li>
            <strong>6th (${spellSlots[5]}):</strong> {sixthLevel.join(', ')}
          </li>
          <li>
            <strong>7th (${spellSlots[6]}):</strong> {seventhLevel.join(', ')}
          </li>
          <li>
            <strong>8th (${spellSlots[7]}):</strong> {eighthLevel.join(', ')}
          </li>
          <li>
            <strong>9th (${spellSlots[8]}):</strong> {ninthLevel.join(', ')}
          </li>
        </ul>
      </>
    )
  };

  return (
    <div>
      <h3>{name}</h3>
      <img
        alt={tokenAlt}
        src={tokenSrc}/>
      <p>
        <em>{size} {type}, {alignment}</em>
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">CR</th>
            <th scope="col">AC</th>
            <th scope="col">HP</th>
            <th scope="col">Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cr}</td>
            <td>{ac}</td>
            <td>{hp}</td>
            <td>{getSpeed()}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">STR</th>
            <th scope="col">DEX</th>
            <th scope="col">CON</th>
            <th scope="col">INT</th>
            <th scope="col">WIS</th>
            <th scope="col">CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Score</td>
            <td>{str}</td>
            <td>{dex}</td>
            <td>{con}</td>
            <td>{int}</td>
            <td>{wis}</td>
            <td>{cha}</td>
          </tr>
          <tr>
            <td>Mod</td>
            <td>{getAbilityMod(str, false)}</td>
            <td>{getAbilityMod(dex, false)}</td>
            <td>{getAbilityMod(con, false)}</td>
            <td>{getAbilityMod(int, false)}</td>
            <td>{getAbilityMod(wis, false)}</td>
            <td>{getAbilityMod(cha, false)}</td>
          </tr>
          <tr>
            <td>Save</td>
            <td>{getAbilityMod(str, getIsProficient('Strength'))}</td>
            <td>{getAbilityMod(dex, getIsProficient('Dexterity'))}</td>
            <td>{getAbilityMod(con, getIsProficient('Constitution'))}</td>
            <td>{getAbilityMod(int, getIsProficient('Intelligence'))}</td>
            <td>{getAbilityMod(wis, getIsProficient('Wisdom'))}</td>
            <td>{getAbilityMod(cha, getIsProficient('Charisma'))}</td>
          </tr>
        </tbody>
      </table>
      {getSkills()}
      {getSenses()}
      {getLanguages()}
      {getFeatures()}
      {getActions()}
      {getLairActions()}
      {getLegendaryActions()}
      {getSpellbook()}
    </div>
  );
};
