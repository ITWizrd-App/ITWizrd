export type Choice = {
  text: string;
  nextNodeId: string;
  icon: string;
};

export type Node = {
  id: string;
  title: string;
  content: string;
  choices: Choice[];
};
