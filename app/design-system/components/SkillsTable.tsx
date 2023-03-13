import {
  ISkillProficiency,
  ISkillType
} from '~/design-system/types/types';

import {
  CheckIcon,
  DoubleCheckIcon
} from '~/design-system/components/Icons';

interface SkillsTableProps {
  cha: number;
  con: number;
  dex: number;
  int: number;
  proficiencyBonus: number;
  skills: ISkillProficiency[];
  str: number;
  wis: number;
}

export const SkillsTable = ({
  cha,
  dex,
  int,
  proficiencyBonus,
  skills,
  str,
  wis
}: SkillsTableProps) => {
  const getSkill = (skill: ISkillType) => {
    return skills.find(skillItem => skillItem.name === skill);
  };

  const getProficiencyIcon = (skill: ISkillType) => {
    const foundSkill = getSkill(skill);
    if (foundSkill?.proficiencyType === 'Proficient') return <CheckIcon/>;
    if (foundSkill?.proficiencyType === 'Expertise') return <DoubleCheckIcon/>;
    return foundSkill?.proficiencyType ?? '';
  };

  const getBonus = (skillProficiency: ISkillProficiency | undefined) => {
    if (skillProficiency?.proficiencyType === 'Proficient') return proficiencyBonus;
    if (skillProficiency?.proficiencyType === 'Expertise') return proficiencyBonus * 2;
    return 0;
  };

  const getMod = (score: number, skill: ISkillType): string => {
    const mod = Math.floor((score - 10) / 2);
    const bonus = getBonus(getSkill(skill));
    const total = mod + bonus;
    const label = total < 0 ? '-' : '+';
    return `${label}${total}`;
  };

  return (
    <table className='havok-dnd-skill-table'>
      <thead>
        <tr>
          <th scope="col">Prof</th>
          <th scope="col">Skill</th>
          <th scope="col">Mod</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{getProficiencyIcon('Acrobatics')}</td>
          <td>Acrobatics (DEX)</td>
          <td>{getMod(dex, 'Acrobatics')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Animal Handling')}</td>
          <td>Animal Handling (WIS)</td>
          <td>{getMod(wis, 'Animal Handling')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Arcana')}</td>
          <td>Arcana (INT)</td>
          <td>{getMod(int, 'Arcana')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Athletics')}</td>
          <td>Athletics (STR)</td>
          <td>{getMod(str, 'Athletics')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Deception')}</td>
          <td>Deception (CHA)</td>
          <td>{getMod(cha, 'Deception')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('History')}</td>
          <td>History (INT)</td>
          <td>{getMod(int, 'History')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Insight')}</td>
          <td>Insight (WIS)</td>
          <td>{getMod(wis, 'Insight')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Intimidation')}</td>
          <td>Intimidation (CHA)</td>
          <td>{getMod(cha, 'Intimidation')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Investigation')}</td>
          <td>Investigation (INT)</td>
          <td>{getMod(int, 'Investigation')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Medicine')}</td>
          <td>Medicine (WIS)</td>
          <td>{getMod(wis, 'Medicine')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Nature')}</td>
          <td>Nature (INT)</td>
          <td>{getMod(int, 'Nature')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Perception')}</td>
          <td>Perception (WIS)</td>
          <td>{getMod(wis, 'Perception')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Performance')}</td>
          <td>Performance (CHA)</td>
          <td>{getMod(cha, 'Performance')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Persuasion')}</td>
          <td>Persuasion (CHA)</td>
          <td>{getMod(cha, 'Persuasion')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Religion')}</td>
          <td>Religion (INT)</td>
          <td>{getMod(int, 'Religion')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Sleight of Hand')}</td>
          <td>Sleight of Hand (DEX)</td>
          <td>{getMod(dex, 'Sleight of Hand')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Stealth')}</td>
          <td>Stealth (DEX)</td>
          <td>{getMod(dex, 'Stealth')}</td>
        </tr>
        <tr>
          <td>{getProficiencyIcon('Survival')}</td>
          <td>Survival (WIS)</td>
          <td>{getMod(wis, 'Survival')}</td>
        </tr>
      </tbody>
    </table>
  );
};
