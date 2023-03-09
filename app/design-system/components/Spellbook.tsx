import {
  ISpellbook
} from '../types/types';

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

interface SpellbookProps {
  spellbook?: ISpellbook
}

export const Spellbook = ({
  spellbook
}: SpellbookProps) => {
  if (!spellbook) return null;

  const {
    spellcastingAbility,
    spellcastingBonus,
    spellcastingLevel,
    spellcastingSaveDc,
    cantrips,
    firstLevel,
    secondLevel,
    thirdLevel,
    fourthLevel,
    fifthLevel,
    sixthLevel,
    seventhLevel,
    eighthLevel,
    ninthLevel
  } = spellbook;

  if (
    !cantrips?.length &&
    !firstLevel?.length &&
    !secondLevel?.length &&
    !thirdLevel?.length &&
    !fourthLevel?.length &&
    !fifthLevel?.length &&
    !sixthLevel?.length &&
    !seventhLevel?.length &&
    !eighthLevel?.length &&
    !ninthLevel?.length
  ) return null;

  const spellSlots = SPELLCASTING_TABLE[spellcastingLevel];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Ability</th>
            <th scope="col">Ability Modifier</th>
            <th scope="col">Save DC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{spellcastingLevel}</td>
            <td>{spellcastingAbility}</td>
            <td>{spellcastingBonus}</td>
            <td>{spellcastingSaveDc}</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>
          <strong>Cantrips:</strong> {cantrips?.join(', ')}
        </li>
        <li>
          <strong>1st ({spellSlots[0]}):</strong> {firstLevel?.join(', ')}
        </li>
        <li>
          <strong>2nd ({spellSlots[1]}):</strong> {secondLevel?.join(', ')}
        </li>
        <li>
          <strong>3rd ({spellSlots[2]}):</strong> {thirdLevel?.join(', ')}
        </li>
        <li>
          <strong>4th ({spellSlots[3]}):</strong> {fourthLevel?.join(', ')}
        </li>
        <li>
          <strong>5th ({spellSlots[4]}):</strong> {fifthLevel?.join(', ')}
        </li>
        <li>
          <strong>6th ({spellSlots[5]}):</strong> {sixthLevel?.join(', ')}
        </li>
        <li>
          <strong>7th ({spellSlots[6]}):</strong> {seventhLevel?.join(', ')}
        </li>
        <li>
          <strong>8th ({spellSlots[7]}):</strong> {eighthLevel?.join(', ')}
        </li>
        <li>
          <strong>9th ({spellSlots[8]}):</strong> {ninthLevel?.join(', ')}
        </li>
      </ul>
    </>
  );
};
