import { gql } from '@apollo/client';

const GET_MENU = gql`
  query {
    menu {
      id
      name
      foodType
      description
    }
  }
`;

const GET_PROFILE = gql`
  query {
    profile {
      id
      bio
    }
  }
`;
export { GET_MENU, GET_PROFILE };
