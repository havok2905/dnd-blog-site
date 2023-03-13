import {IAbilityType} from '../types/types'

interface StatBlockProps {
  cha: number,
  con: number,
  dex: number,
  int: number,
  proficiencyBonus: number,
  saves?: IAbilityType[],
  str: number,
  wis: number
}

export const StatBlock = ({
  cha,
  con,
  dex,
  int,
  proficiencyBonus,
  saves,
  str,
  wis
}: StatBlockProps) => {
  const getAbilityMod = (score: number, proficient: boolean): string => {
    const mod = Math.floor((score - 10) / 2);
    const adjusted = proficient ? mod + proficiencyBonus : mod;
    return adjusted < 0 ? adjusted.toString() : `+${adjusted}`;
  };

  const getIsProficient = (ability: IAbilityType): boolean => {
    if (!saves) return false;
    return saves.includes(ability);
  };

  return (
    <table>
      <thead>
        <tr>
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
          <td>{str}</td>
          <td>{dex}</td>
          <td>{con}</td>
          <td>{int}</td>
          <td>{wis}</td>
          <td>{cha}</td>
        </tr>
        <tr>
          <td>{getAbilityMod(str, false)}</td>
          <td>{getAbilityMod(dex, false)}</td>
          <td>{getAbilityMod(con, false)}</td>
          <td>{getAbilityMod(int, false)}</td>
          <td>{getAbilityMod(wis, false)}</td>
          <td>{getAbilityMod(cha, false)}</td>
        </tr>
        <tr>
          <td>{getAbilityMod(str, getIsProficient('Strength'))}</td>
          <td>{getAbilityMod(dex, getIsProficient('Dexterity'))}</td>
          <td>{getAbilityMod(con, getIsProficient('Constitution'))}</td>
          <td>{getAbilityMod(int, getIsProficient('Intelligence'))}</td>
          <td>{getAbilityMod(wis, getIsProficient('Wisdom'))}</td>
          <td>{getAbilityMod(cha, getIsProficient('Charisma'))}</td>
        </tr>
      </tbody>
    </table>
  );
};
