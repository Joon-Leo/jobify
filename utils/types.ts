import * as z from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

export const createAndEidtJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 charaters",
  }),
  company: z.string().min(2, {
    message: "position must be at least 2 charaters",
  }),
  location: z.string().min(2, {
    message: "position must be at least 2 charaters",
  }),
  status: z.enum(JobStatus),
  mode: z.enum(JobMode),
});

export type CreateAndEditJobType = z.infer<typeof createAndEidtJobSchema>;
