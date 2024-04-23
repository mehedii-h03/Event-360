import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UseEditApi from "@/hooks/UseEditApi";
import UseGetApi from "@/hooks/UseGetApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { z } from "zod";

const recentEventSchema = z.object({
  imageLink: z.string(),
});
type TRecentEvent = z.infer<typeof recentEventSchema>;

const EditRecentEvents = () => {
  const { id } = useParams();
  const getUrl = `https://event-360-server-two.vercel.app/recent-events/${id}`;
  const editUrl = `https://event-360-server-two.vercel.app/recent-event/edit/${id}`;

  const {
    data: recentEvent,
    isLoading,
    isError,
  } = UseGetApi(getUrl, "recent-events");
  const mutateAsync = UseEditApi(editUrl, "recent-events");

  const methods = useForm<TRecentEvent>({
    resolver: zodResolver(recentEventSchema),
  });
  const { register, handleSubmit, setValue } = methods;

  const onSubmit = async (data: TRecentEvent) => {
    const updatedRecentEventInfo = {
      imageLink: data.imageLink,
    };
    try {
      await mutateAsync(updatedRecentEventInfo);
      toast.success("Successfully edited!");
      setValue("imageLink", updatedRecentEventInfo.imageLink);
    } catch (error) {
      throw new Error("Something went wrong");
  }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl">Something went wrong.</p>
      </div>
    );
  }

  return (
    <div className="my-20 ">
      <Card className="w-[350px] h-[350px] mx-auto flex items-center justify-center">
        <div className="">
          <CardHeader>
            <CardTitle>Add recent events</CardTitle>
            <CardDescription>
              Add your recent events in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="imageLink">Image link</Label>
                    <Input
                      id="imageLink"
                      placeholder="image link"
                      {...register("imageLink")}
                      defaultValue={recentEvent?.data.imageLink}
                    />
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </FormProvider>
          </CardContent>
        </div>
      </Card>
      <Toaster />
    </div>
  );
};

export default EditRecentEvents;
