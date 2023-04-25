import { useQuery, gql } from "@apollo/client";

const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      id
      name
    }
  }
`;

export function Company({ onCompanySelected }) {
  const { loading, error, data } = useQuery(GET_COMPANIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <select name="company" onChange={onCompanySelected}>
      {data.companies.map((company) => (
        <option key={company.id} value={company.name}>
          {company.name}
        </option>
      ))}
    </select>
  );
}
