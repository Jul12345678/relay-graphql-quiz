/**
 * @generated SignedSource<<e85df14f41c4fca698c7b876ab985567>>
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
  readonly callback: string | null;
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
      "name": "callback",
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

(node as any).hash = "94f65d166e2817b3759f90af1b38e40a";

export default node;
