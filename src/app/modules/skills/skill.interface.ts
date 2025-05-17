export enum SkillCategory {
  Technical = "Technical",
  Soft = "Soft",
}

export interface ISkill {
  name: string;
  category: SkillCategory;
  image: string;
}
