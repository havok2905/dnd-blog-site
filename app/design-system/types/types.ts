export type IProficiencyType =
  'Proficient' |
  'Expertise' |
  '' |
  undefined;

export type IAbilityType =
  'Strength' |
  'Dexterity' |
  'Constitution' |
  'Intelligence' |
  'Wisdom' |
  'Charisma';

export type ISkillType =
  'Acrobatics' |
  'Animal Handling' |
  'Arcana' |
  'Athletics' |
  'Deception' |
  'History' |
  'Insight' |
  'Intimidation' |
  'Investigation' |
  'Medicine' |
  'Nature' |
  'Perception' |
  'Performance' |
  'Persuasion' |
  'Religion' |
  'Sleight of Hand' |
  'Stealth' |
  'Survival';

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

export type ISourceType = 'Class' | 'Background' | 'Race';

export interface IClass {
  level: number;
  name: string;
  subclass?: string;
}

export interface IAction {
  name: string;
  text: string[];
}

export interface IFeature {
  name: string;
  sourceName?: string;
  sourceType?: ISourceType;
  text: string[];
}

export interface ILegendaryAction {
  name: string;
  text: string[];
}

export interface ISkillProficiency {
  name: ISkillType;
  proficiencyType: IProficiencyType;
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
  spellcastingAbility: IAbilityType;
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