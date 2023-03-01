import PageLayout from "@components/PageLayout";
import Container from "@styles/pages/404";

export default function NotFound() {
  return (
    <PageLayout title={"Web3 Working Group"}>
      <Container>
        <h1>404</h1>
        <h2>Page not found</h2>
      </Container>
    </PageLayout>
  );
}
