import { useQuery, gql } from "@apollo/client";
import { GET_COMPANY} from './queries';

export function CompanyDetail( { companyId } ) {
  console.log("companyId: ", companyId);
  const { loading, error, data } = useQuery(GET_COMPANY, {
    variables: { id: companyId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>{data.company.name}</h2>
      <p>{data.company.description}</p>
    </div>
  );
}
