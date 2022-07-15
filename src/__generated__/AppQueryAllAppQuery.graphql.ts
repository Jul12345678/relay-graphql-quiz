/**
 * @generated SignedSource<<27d38e43c2d6539e99f2e043a25772f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQueryAllAppQuery$variables = {};
export type AppQueryAllAppQuery$data = {
  readonly relayquestionsdisplay: ReadonlyArray<{
    readonly question: string | null;
  } | null> | null;
};
export type AppQueryAllAppQuery = {
  response: AppQueryAllAppQuery$data;
  variables: AppQueryAllAppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "RelayQuestionsDisplay",
    "kind": "LinkedField",
    "name": "relayquestionsdisplay",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQueryAllAppQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQueryAllAppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "279ce9225e6d507fdb6b26f8dc1c6885",
    "id": null,
    "metadata": {},
    "name": "AppQueryAllAppQuery",
    "operationKind": "query",
    "text": "query AppQueryAllAppQuery {\n  relayquestionsdisplay {\n    question\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ac18117f63e54497f15e5a7fdfbcf31";

export default node;
