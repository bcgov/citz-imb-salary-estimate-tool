/**
 * State enum
 * @enum {number}
 * new = 1,
 * draft = 2,
 * submitted = 3,
 * reviewed = 4,
 * approved = 5,
 * rejected = 6,
 */
export enum State {
  draft = 1,
  submitted,
  reviewed,
  approved,
  rejected,
}

export default State;
