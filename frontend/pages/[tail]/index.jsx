import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_TAILS = gql`
  query getTailsData($tail: String!) {
    getTailData(tail: $tail) {
      title
      description
    }
  }
`;

export default function TailPage() {
  const router = useRouter();
  const tail = router.query.tail;

  const { loading, error, data } = useQuery(GET_TAILS, { variables: { tail } });

  console.log(loading, error, data);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>Tail not found</div>;
  }

  if (data) {
    return (
      <div>
        <p>Title: {data.getTailData.title}</p>
        <p>Description: {data.getTailData.description}</p>
      </div>
    );
  }

  return <div>kek</div>;
}
