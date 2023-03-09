export type IAbility =
  'Strength' |
  'Dexterity' |
  'Constitution' |
  'Intelligence' |
  'Wisdom' |
  'Charisma';

export type IAlignment =
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

export interface IAction {
  name: string;
  text: string[];
}

export interface IFeature {
  name: string;
  text: string[];
}

export interface ILegendaryAction {
  name: string;
  text: string[];
}

export type ISize =
  'Tiny' |
  'Small' |
  'Medium' |
  'Large' |
  'Huge' |
  'Gargantuan';

export interface ISkill {
  bonus: number;
  name: string;
}

export interface ISpeed {
  feet: number;
  name: string;
}

export interface ISpellbook {
  spellcastingAbility: IAbility;
  spellcastingBonus: number;
  spellcastingLevel: number;
  spellcastingSaveDc: number;
  cantrips?: string[];
  firstLevel?: string[];
  secondLevel?: string[];
  thirdLevel?: string[];
  fourthLevel?: string[];
  fifthLevel?: string[];
  sixthLevel?: string[];
  seventhLevel?: string[];
  eighthLevel?: string[];
  ninthLevel?: string[];
}