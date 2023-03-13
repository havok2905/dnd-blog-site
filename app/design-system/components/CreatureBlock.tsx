import {Card} from './Card';
import {EntityHeader} from './EntityHeader';
import {InlineList} from './InlineList';
import {Spellbook} from './Spellbook';
import {StatBlock} from './StatBlock';

import {
  IAbilityType,
  IAction,
  IAlignment,
  IFeature,
  ILegendaryAction,
  ISkill,
  ISize,
  ISpeed,
  ISpellbook
} from '../types/types';

interface CreatureBlockProps {
  ac: number;
  actions?: IAction[];
  alignment: IAlignment;
  cha: number;
  con: number;
  conditionImmunities?: string[];
  conditionResistances?: string[];
  conditionVulnerabilities?: string[];
  cr: string;
  damageImmunities?: string[];
  damageResistances?: string[];
  damageVulnerabilities?: string[];
  dex: number;
  features?: IFeature[];
  hp: number;
  int: number;
  lairActions?: string[];
  lairActionsText?: string;
  languages?: string[];
  legendaryActions?: ILegendaryAction[];
  legendaryActionsText?: string;
  name: string;
  proficiencyBonus: number;
  saves?: IAbilityType[];
  senses?: string[];
  skills?: ISkill[];
  size: ISize;
  str: number;
  speed: ISpeed[];
  spellbook?: ISpellbook;
  tokenAlt: string;
  tokenSrc: string;
  type: string;
  wis: number;
}

export const CreatureBlock = ({
  ac,
  actions,
  alignment,
  cha,
  con,
  conditionImmunities,
  conditionResistances,
  conditionVulnerabilities,
  cr,
  damageImmunities,
  damageResistances,
  damageVulnerabilities,
  dex,
  features,
  hp,
  int,
  lairActions,
  lairActionsText,
  languages,
  legendaryActions,
  legendaryActionsText,
  name,
  proficiencyBonus,
  saves,
  senses,
  size,
  skills,
  speed,
  spellbook,
  str,
  tokenAlt,
  tokenSrc,
  type,
  wis
}: CreatureBlockProps) => {
  const getActions = (): React.ReactNode | null => {
    if (!actions?.length) return null;

    return (
      <>
        <h4>Actions</h4>
        {
          actions.map(action => {
            const {name, text} = action;

            return (
              <>
                <h5>{name}</h5>
                {text.map(item => <p>{item}</p>)}
              </>
            )
          })
        }
      </>
    );
  };

  const getFeatures = (): React.ReactNode | null => {
    if (!features?.length) return null;

    return (
      <>
        <h4>Features</h4>
        {
          features.map(feature => {
            const {name, text} = feature;

            return (
              <>
                <h5>{name}</h5>
                {text.map(item => <p>{item}</p>)}
              </>
            )
          })
        }
      </>
    );
  };

  const getLairActions = (): React.ReactNode | null => {
    if (!lairActions?.length) return null;

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

  const getLegendaryActions = (): React.ReactNode | null => {
    if (!legendaryActions?.length) return null;

    return (
      <>
        <h4>Legendary Actions</h4>
        {legendaryActionsText && <p>{legendaryActionsText}</p>}
        {
          legendaryActions.map(legendaryAction => {
            const {name, text} = legendaryAction;

            return (
              <>
                <h5>{name}</h5>
                {text.map(item => <p>{item}</p>)}
              </>
            )
          })
        }
      </>
    );
  };

  const getSkills = (): React.ReactNode | null => {
    if (!skills?.length) return null;

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

  return (
    <Card>
      <div className="havok-dnd-creature-block">
        <div className="havok-dnd-creature-block-cr">
          CR {cr}
        </div>
        <EntityHeader
          name={name}
          subtitle={`${size} ${type}, ${alignment}`}
          tokenAlt={tokenAlt}
          tokenSrc={tokenSrc}
        />
        <table>
          <thead>
            <tr>
              <th scope="col">AC</th>
              <th scope="col">HP</th>
              <th scope="col">Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ac}</td>
              <td>{hp}</td>
              <td>{getSpeed()}</td>
            </tr>
          </tbody>
        </table>
        <StatBlock
          cha={cha}
          con={con}
          dex={dex}
          int={int}
          proficiencyBonus={proficiencyBonus}
          saves={saves}
          str={str}
          wis={wis}
        />
        {getSkills()}
        <InlineList collection={senses} name="Senses"/>
        <InlineList collection={languages} name="Languages"/>
        <InlineList collection={conditionImmunities} name="Condition Immunities"/>
        <InlineList collection={conditionResistances} name="Condition Resistances"/>
        <InlineList collection={conditionVulnerabilities} name="Condition Vulnerabilities"/>
        <InlineList collection={damageImmunities} name="Damage Immunities"/>
        <InlineList collection={damageResistances} name="Damage Resistances"/>
        <InlineList collection={damageVulnerabilities} name="Damage Vulnerabilities"/>
        {getFeatures()}
        {getActions()}
        {getLairActions()}
        {getLegendaryActions()}
        {spellbook && <h4>Spellcasting</h4>}
        <Spellbook spellbook={spellbook}/>
      </div>
    </Card>
  );
};
