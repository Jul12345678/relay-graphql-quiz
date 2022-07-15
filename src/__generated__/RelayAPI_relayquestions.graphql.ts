/**
 * @generated SignedSource<<77605c896f7c231c4e9a3a15366b2e48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelayAPI_relayquestions$data = {
  readonly category: string | null;
  readonly correct_answer: string | null;
  readonly difficulty: string | null;
  readonly incorrect_answers: ReadonlyArray<string | null> | null;
  readonly question: string | null;
  readonly type: string | null;
  readonly " $fragmentType": "RelayAPI_relayquestions";
};
export type RelayAPI_relayquestions$key = {
  readonly " $data"?: RelayAPI_relayquestions$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelayAPI_relayquestions">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayAPI_relayquestions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "difficulty",
      "storageKey": null
    },
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
      "name": "correct_answer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "incorrect_answers",
      "storageKey": null
    }
  ],
  "type": "RelayQuestions",
  "abstractKey": null
};

(node as any).hash = "97d3b05ececc1aab0ba94dd338b3575f";

export default node;
