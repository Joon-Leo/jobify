import CreateJobForm from "@/components/CreateJobForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

function AddJobPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-4xl">AddJobPage</h1>
      <CreateJobForm />
    </HydrationBoundary>
  );
}

export default AddJobPage;
