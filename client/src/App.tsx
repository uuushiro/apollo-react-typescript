import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import {
  ApolloProvider as ApolloHooksProvider,
  useMutation,
  useQuery
} from "@apollo/client";
import { appClient } from "./graphql/client";
import { useUsersQuery, useCreateUserMutation, UsersDocument } from "./gen/graphql-client-api";

interface User {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Users {
  users: User[];
}

const UserList = () => {
  const { data, error, loading } = useUsersQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>
  }

  return (
    <ul>
      {data!.users.map(user => (
        <li key={user?.id}>{user?.name}</li>
      ))}
    </ul>
  );
};

const UserInput = () => {
  const [state, setState] = useState("");
  
  const  [createUser, { error, data }] = useCreateUserMutation({refetchQueries: [{ query: UsersDocument }], variables: { name: state }});

  const onClick = () => {
    createUser();
  };

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" value={state} onChange={onChange}  />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export const App = () => (
<ApolloHooksProvider client={appClient}>
    <UserInput />
    <UserList />
  </ApolloHooksProvider>
);