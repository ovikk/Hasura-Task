import { useQuery, gql } from "@apollo/client";

export default function Home() {
  return (
    <div>
      <p>{`Welcome to test task. Use localhost:3000/{tail} i.e.
      (localhost:3000/best-hello-ever etc) to see the title and description on
      the screen.`}</p>
    </div>
  );
}
