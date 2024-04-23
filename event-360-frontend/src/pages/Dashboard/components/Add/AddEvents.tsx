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
import UsePostApi from "@/hooks/UsePostApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const addEventSchema = z.object({
  title: z.string(),
  imageLink: z.string(),
});
type TAddEventForm = z.infer<typeof addEventSchema>;

const AddEvents = () => {
  const url = "https://event-360-server-two.vercel.app/add-event";
  const mutateAsync = UsePostApi(url, "events");
  const methods = useForm<TAddEventForm>({
    resolver: zodResolver(addEventSchema),
  });
  const { register, handleSubmit } = methods;

  const onSubmit = async (data: TAddEventForm) => {
    await mutateAsync(data);
    toast.success("Successfully added!");
    methods.reset();
  };
  return (
    <div className="my-20 ">
      <Card className="w-[350px] h-[350px] mx-auto flex items-center justify-center">
        <div>
          <CardHeader>
            <CardTitle>Add events</CardTitle>
            <CardDescription>Add your events in one-click.</CardDescription>
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

export default AddEvents;
