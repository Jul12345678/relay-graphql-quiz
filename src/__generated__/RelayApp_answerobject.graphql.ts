/**
 * @generated SignedSource<<ea0e133f2c56430981de377251ee6272>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelayApp_answerobject$data = {
  readonly answer: string | null;
  readonly correct: boolean | null;
  readonly correctAnswer: string | null;
  readonly question: string | null;
  readonly " $fragmentType": "RelayApp_answerobject";
};
export type RelayApp_answerobject$key = {
  readonly " $data"?: RelayApp_answerobject$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelayApp_answerobject">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelayApp_answerobject",
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
      "name": "answer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correct",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correctAnswer",
      "storageKey": null
    }
  ],
  "type": "AnswerObject",
  "abstractKey": null
};

(node as any).hash = "108711032789d380ab6303b0cb2e3fe1";

export default node;
