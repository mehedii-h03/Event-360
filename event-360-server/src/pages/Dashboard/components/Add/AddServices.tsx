import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
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

const addServiceSchema = z.object({
  title: z.string(),
  imageLink: z.string(),
  feature1: z.string(),
  feature2: z.string(),
  feature3: z.string(),
  feature4: z.string(),
  feature5: z.string(),
  description: z.string(),
});
type TAddServiceForm = z.infer<typeof addServiceSchema>;

const AddServices = () => {
  const url = "https://event-360-server-two.vercel.app/add-service";
  const mutateAsync = UsePostApi(url, "services");

  const methods = useForm<TAddServiceForm>({
    resolver: zodResolver(addServiceSchema),
  });
  const { register, handleSubmit } = methods;

  const onSubmit = async (d: TAddServiceForm) => {
    const serviceInfo = {
      title: d.title,
      imageLink: d.imageLink,
      features: [d.feature1, d.feature2, d.feature3, d.feature4, d.feature5],
      description: d.description,
    };
    await mutateAsync(serviceInfo);
    toast.success("Successfully added!");
    methods.reset();
  };

  return (
    <div className="mt-10">
      <Card className="w-[650px] mx-auto flex items-center justify-center">
        <div className="">
          <CardHeader>
            <CardTitle>Add services</CardTitle>
            <CardDescription>Add your services in one-click.</CardDescription>
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
                <div className="grid w-full items-center mt-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="imageLink">Image link</Label>
                    <Input
                      id="imageLink"
                      placeholder="image link"
                      {...register("imageLink")}
                    />
                  </div>
                </div>
                {/*Features  */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid w-full items-center mt-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Feature 1</Label>
                      <Input
                        id="feature1"
                        placeholder="feature 1"
                        {...register("feature1")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center mt-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="feature2">Feature 2</Label>
                      <Input
                        id="feature2"
                        placeholder="feature 2"
                        {...register("feature2")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center mt-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="feature2">Feature 3</Label>
                      <Input
                        id="feature3"
                        placeholder="feature 3"
                        {...register("feature3")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center mt-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="feature4">Feature 4</Label>
                      <Input
                        id="feature4"
                        placeholder="feature 4"
                        {...register("feature4")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center mt-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="feature2">Feature 2</Label>
                      <Input
                        id="feature5"
                        placeholder="feature 5"
                        {...register("feature5")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid w-full items-center mt-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Description"
                      {...register("description")}
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

export default AddServices;
