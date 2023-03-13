import {Card} from './Card';
import {EntityHeader} from './EntityHeader';
import {InlineList} from './InlineList';
import {SkillsTable} from './SkillsTable';
import {Spellbook} from './Spellbook';
import {StatBlock} from './StatBlock';

import {
  IAbilityType,
  IAction,
  IAlignment,
  IClass,
  IFeature,
  ISize,
  ISkillProficiency,
  ISpeed,
  ISpellbook
} from '../types/types';

interface CharacterBlockProps {
  ac: number;
  actions?: IAction[];
  age: number;
  alignment: IAlignment;
  armorProficiencies: string[];
  background: string;
  backstory?: string[];
  bonds?: string[];
  cha: number;
  classes: IClass[];
  con: number;
  conditionImmunities?: string[];
  conditionResistances?: string[];
  conditionVulnerabilities?: string[];
  damageImmunities?: string[];
  damageResistances?: string[];
  damageVulnerabilities?: string[];
  dex: number;
  equipment?: string[];
  eyes: string;
  features?: IFeature[];
  flaws?: string[];
  hair: string;
  height: string;
  hp: number;
  ideals?: string[];
  int: number;
  languages?: string[];
  name: string;
  personalityTraits?: string[];
  proficiencyBonus: number;
  race: string;
  saves?: IAbilityType[];
  senses?: string[];
  size: ISize;
  skills: ISkillProficiency[];
  skin: string;
  speed: ISpeed[];
  spellbook?: ISpellbook;
  str: number;
  subrace?: string;
  tokenAlt: string;
  tokenSrc: string;
  toolProficiencies: string[];
  weaponProficiencies: string[];
  wis: number;
}


export const CharacterBlock = ({
  ac,
  actions,
  age,
  alignment,
  armorProficiencies,
  background,
  backstory,
  bonds,
  cha,
  classes,
  con,
  conditionImmunities,
  conditionResistances,
  conditionVulnerabilities,
  damageImmunities,
  damageResistances,
  damageVulnerabilities,
  dex,
  equipment,
  eyes,
  features,
  flaws,
  hair,
  height,
  hp,
  ideals,
  int,
  languages,
  name,
  personalityTraits,
  proficiencyBonus,
  race,
  saves,
  senses,
  size,
  skills,
  skin,
  speed,
  spellbook,
  str,
  subrace,
  tokenAlt,
  tokenSrc,
  toolProficiencies,
  weaponProficiencies,
  wis
}: CharacterBlockProps) => {
  const getActions = (): React.ReactNode | null => {
    if (!actions?.length) return null;

    return  actions.map(action => {
      const {name, text} = action;

      return (
        <>
          <h5>{name}</h5>
          {text.map(item => <p>{item}</p>)}
        </>
      )
    });
  };

  const getClasses = () => {
    return classes.map(classItem => {
      const {level, name, subclass} = classItem;
      const subclassStr = subclass ? ` (${subclass})` : '';

      return (
        <p>
          <strong>{name}{subclassStr}:</strong> {level}
        </p>
      )
    })
  };

  const getEquipment = () => {
    if (!equipment || !equipment.length) return null;

    return (
      <>
        <h4>Equipment</h4>
        <ul>
          {
            equipment.map(item => <li>{item}</li>)
          }
        </ul>
      </>
    )
  };

  const getFeatures = (): React.ReactNode | null => {
    if (!features?.length) return null;

    return features.map(feature => {
      const {name, sourceName, text} = feature;
      const headerName = `${name}${sourceName ? ` - ${sourceName}` : ''}`;

      return (
        <>
          <h5>{headerName}</h5>
          {text.map(item => <p>{item}</p>)}
        </>
      )
    });
  };

  const getSpeed = (): string => {
    return speed.map(speedItem => {
      const {feet, name} = speedItem;
      return `${name} ${feet}ft.`;
    }).join(', ');
  };

  return (
    <Card>
      <EntityHeader
        name={name}
        subtitle={`${race}${subrace && ` (${subrace})`}, ${alignment}`}
        tokenAlt={tokenAlt}
        tokenSrc={tokenSrc}
      />
      {background && <p><strong>Background: </strong>{background}</p>}
      {getClasses()}
      <table>
        <thead>
          <tr>
            <th scope="col">AC</th>
            <th scope="col">HP</th>
            <th scope="col">Size</th>
            <th scope="col">Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ac}</td>
            <td>{hp}</td>
            <td>{size}</td>
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
      <SkillsTable
        cha={cha}
        con={con}
        dex={dex}
        int={int}
        proficiencyBonus={proficiencyBonus}
        skills={skills}
        str={str}
        wis={wis}
      />
      <InlineList collection={senses} name="Senses"/>
      <InlineList collection={languages} name="Languages"/>
      <InlineList collection={armorProficiencies} name="Armor Proficiencies"/>
      <InlineList collection={toolProficiencies} name="Tool Proficiencies"/>
      <InlineList collection={weaponProficiencies} name="Weapon Proficiencies"/>
      <InlineList collection={conditionImmunities} name="Condition Immunities"/>
      <InlineList collection={conditionResistances} name="Condition Resistances"/>
      <InlineList collection={conditionVulnerabilities} name="Condition Vulnerabilities"/>
      <InlineList collection={damageImmunities} name="Damage Immunities"/>
      <InlineList collection={damageResistances} name="Damage Resistances"/>
      <InlineList collection={damageVulnerabilities} name="Damage Vulnerabilities"/>
      {features?.length && <h4>Features</h4>}
      {getFeatures()}
      {actions?.length && <h4>Actions</h4>}
      {getActions()}
      {spellbook && <h4>Spellcasting</h4>}
      <Spellbook spellbook={spellbook}/>
      {getEquipment()}
      <h4>Biography</h4>
      <h5>Description</h5>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Eyes: </strong>{eyes}</p>
      <p><strong>Hair: </strong>{hair}</p>
      <p><strong>Height: </strong>{height}</p>
      <p><strong>Skin: </strong>{skin}</p>
      {personalityTraits?.length && (
        <>
          <h5>Personality Traits</h5>
          <ul>
            {personalityTraits.map(item => <li>{item}</li>)}
          </ul>
        </>
      )}
      {ideals?.length && (
        <>
          <h5>Ideals</h5>
          <ul>
            {ideals.map(item => <li>{item}</li>)}
          </ul>
        </>
      )}
      {bonds?.length && (
        <>
          <h5>Bonds</h5>
          <ul>
            {bonds.map(item => <li>{item}</li>)}
          </ul>
        </>
      )}
      {flaws?.length && (
        <>
          <h5>Flaws</h5>
          <ul>
            {flaws.map(item => <li>{item}</li>)}
          </ul>
        </>
      )}
      {
        backstory?.length && (
          <>
            <h5>Backstory</h5>
            {backstory.map(item => <p>{item}</p>)}
          </>
        )
      }
    </Card>
  );
};
