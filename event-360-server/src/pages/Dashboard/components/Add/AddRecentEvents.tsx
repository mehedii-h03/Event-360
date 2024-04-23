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

const addRecentEventSchema = z.object({
  imageLink: z.string(),
});
type TAddServiceForm = z.infer<typeof addRecentEventSchema>;

const AddRecentEvents = () => {
  const url = "https://event-360-server-two.vercel.app/add-recent-event";
  const mutateAsync = UsePostApi(url, "recent-events");

  const methods = useForm<TAddServiceForm>({
    resolver: zodResolver(addRecentEventSchema),
  });
  const { register, handleSubmit } = methods;

  const onSubmit = async (data: TAddServiceForm) => {
    await mutateAsync(data);
    toast.success("Successfully added!");
    methods.reset();
  };
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

export default AddRecentEvents;
