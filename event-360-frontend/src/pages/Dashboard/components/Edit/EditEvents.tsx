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

const addRecentEventSchema = z.object({
  title: z.string(),
  imageLink: z.string(),
});
type TEvent = z.infer<typeof addRecentEventSchema>;

const EditEvents = () => {
  const { id } = useParams();
  const getUrl = `https://event-360-server-two.vercel.app/events/${id}`;
  const editUrl = `https://event-360-server-two.vercel.app/event/edit/${id}`;

  const { data: event, isLoading, isError } = UseGetApi(getUrl, "events");
  const mutateAsync = UseEditApi(editUrl, "events");

  const methods = useForm<TEvent>({
    resolver: zodResolver(addRecentEventSchema),
  });
  const { register, handleSubmit, setValue } = methods;

  const onSubmit = async (formData: TEvent) => {
    const updatedEventInfo = {
      title: formData.title === "" ? event?.data.title : formData.title,
      imageLink:
        formData.imageLink === "" ? event?.data.imageLink : formData.imageLink,
    };

    try {
      await mutateAsync(updatedEventInfo);
      toast.success("Successfully edited!");

      setValue("title", updatedEventInfo.title || "");
      setValue("imageLink", updatedEventInfo.imageLink || "");
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
    <div className="my-20">
      <Card className="w-[350px] h-[350px] mx-auto flex items-center justify-center">
        <div className="">
          <CardHeader>
            <CardTitle>Edit events</CardTitle>
            <CardDescription>Edit your events in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="title"
                      {...register("title")}
                      defaultValue={event?.data.title}
                    />
                  </div>
                </div>
                <div className="grid w-full items-center mt-8">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="imageLink">Image link</Label>
                    <Input
                      id="imageLink"
                      placeholder="image link"
                      {...register("imageLink")}
                      defaultValue={event?.data.imageLink}
                    />
                  </div>
                </div>
                <div className="w-full mt-4">
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

export default EditEvents;
