import { useQuery, gql } from "@apollo/client";

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
    }
  }
`;
export function DisplayJobs() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.jobs.map(({ id, title, description }) => (
    <div key={id}>
      <h3 style={{ color: "red" }}>{title}</h3>
      <br />
      <b>About this Jobs:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}
