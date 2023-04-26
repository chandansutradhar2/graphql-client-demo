import { gql, useQuery } from "@apollo/client";

export const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      id
      name
      description
    }
  }
`;

export const GET_COMPANY = gql`
  query GetCompany($id: ID!) {
    company(id: $id) {
      id
      name
      description
    }
  }
`;

export const LOGIN_USER = gql`
  query GetUser($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      id
      email
      name
      type
    }
  }
`;
