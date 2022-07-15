/**
 * @generated SignedSource<<9ea9319482cedef3d2e030933a00d471>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelayQuestionsDisplay_relayquestionsdisplay$data = {
  readonly answers: ReadonlyArray<string | null> | null;
  readonly question: string | null;
  readonly questionNr: number | null;
  readonly totalQuestions: number | null;
  readonly " $fragmentType": "RelayQuestionsDisplay_relayquestionsdisplay";
};
export type RelayQuestionsDisplay_relayquestionsdisplay$key = {
  readonly " $data"?: RelayQuestionsDisplay_relayquestionsdisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelayQuestionsDisplay_relayquestionsdisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayQuestionsDisplay_relayquestionsdisplay",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "question",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "answers",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "questionNr",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalQuestions",
      "storageKey": null
    }
  ],
  "type": "RelayQuestionsDisplay",
  "abstractKey": null
};

(node as any).hash = "a3e770bd14acac49a2cc75c97041318d";

export default node;
