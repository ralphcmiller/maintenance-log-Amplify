import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  LogItem: a
    .model({
      id: a.id(),
      date: a.string(),
      mileage: a.string(),
      cost: a.string(),
      task: a.string(),
      optionalInfo: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

