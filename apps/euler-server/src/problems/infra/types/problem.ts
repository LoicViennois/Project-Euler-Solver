export enum Status {
  toSolve,
  notAvailable,
}

export type Problem = {
  id: number;
  name: string | null;
  status: Status;
};
