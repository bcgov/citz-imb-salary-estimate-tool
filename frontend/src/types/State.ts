/**
 * State enum
 * @enum {number}
 * any changes to this enum must also be made in the StatusCell.tsx file
 */
export enum State {
  new = 1,
  draft = 2,
  submitted = 3,
  reviewed = 4,
  approved = 5,
  rejected = 6,
}

export default State;
