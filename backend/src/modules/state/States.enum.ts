export enum InquiryStates {
  DRAFT = 'draft',
  FOR_REVIEW = 'for review',
  FOR_APPROVAL = 'for approval',
  FOR_OFFER = 'for offer',
  OFFERED = 'offered',
  COMPLETE = 'complete',
  CANCELLED = 'cancelled',
}
/*

ALLOWABLE STATE TRANSITIONS (from -> to [action] <role>]):
new -> draft [save] <Hiring Manager>
new -> for review [submit] <Hiring Manager>

draft -> for review [submit] <Hiring Manager>
draft -> cancelled [cancel] <Hiring Manager>
draft -> draft [save] <Hiring Manager>


for review -> for approval [approve] <Strategic Human Respources>
for review -> cancelled [cancel] <Strategic Human Respources>
for review -> for review [save] <Strategic Human Respources>

for approval -> for offer [approve] <Assistant Deputy Minister>

for offer -> offered [offer] <Hiring Manager>

offered -> complete [accepted] <Hiring Manager>
offered -> cancelled [cancel] <Hiring Manager>

*/
// class HiringProcess {
//   constructor() {
//     this.state = 'new';
//     this.transitions = {
//       new: ['for review'],
//       draft: ['for review', 'cancelled', 'draft'],
//       'for review': ['for approval', 'cancelled', 'for review'],
//       'for approval': ['for offer'],
//       'for offer': ['offered'],
//       offered: ['complete', 'cancelled'],
//     };
//   }

//   transition(action: string) {
//     const nextState = this.transitions[this.state].find((state) => state === action);
//     if (nextState) {
//       this.state = nextState;
//     } else {
//       throw new Error(`Invalid transition from ${this.state} to ${action}`);
//     }
//   }
// }

// const hiringProcess = new HiringProcess();
// hiringProcess.transition('for review'); // transitions from 'new' to 'for review'
// console.log(hiringProcess.state); // 'for review'
// hiringProcess.transition('for approval'); // transitions from 'for review' to 'for approval'
// console.log(hiringProcess.state); // 'for approval'
