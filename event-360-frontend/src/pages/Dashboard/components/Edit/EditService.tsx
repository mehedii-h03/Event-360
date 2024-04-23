import { useParams } from "react-router-dom";
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
import UseGetApi from "@/hooks/UseGetApi";
import UseEditApi from "@/hooks/UseEditApi";

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

const EditService = () => {
  const { id } = useParams();
  const getUrl = `https://event-360-server-two.vercel.app/service/${id}`;
  const editUrl = `https://event-360-server-two.vercel.app/service/edit/${id}`;

  const { data: service, isLoading, isError } = UseGetApi(getUrl, "services");
  const mutateAsync = UseEditApi(editUrl, "services");

  const methods = useForm<TAddServiceForm>({
    resolver: zodResolver(addServiceSchema),
  });
  const { register, handleSubmit, setValue } = methods;

  const onSubmit = async (d: TAddServiceForm) => {
    const updatedServiceInfo = {
      title: d.title === "" ? service?.data.title : d.title,
      imageLink: d.imageLink === "" ? service?.data.imageLink : d.imageLink,
      features: [
        d.feature1 === "" ? service?.data.features[0] : d.feature1,
        d.feature2 === "" ? service?.data.features[1] : d.feature2,
        d.feature3 === "" ? service?.data.features[2] : d.feature3,
        d.feature4 === "" ? service?.data.features[3] : d.feature4,
        d.feature5 === "" ? service?.data.features[4] : d.feature5,
      ],
      description:
        d.description === "" ? service?.data.description : d.description,
    };
    try {
      await mutateAsync(updatedServiceInfo);
      toast.success("Successfully edited!");
      setValue("title", updatedServiceInfo.title || "");
      setValue("imageLink", updatedServiceInfo.imageLink || "");
      setValue("feature1", updatedServiceInfo.features[0] || "");
      setValue("feature2", updatedServiceInfo.features[1] || "");
      setValue("feature3", updatedServiceInfo.features[2] || "");
      setValue("feature4", updatedServiceInfo.features[3] || "");
      setValue("feature5", updatedServiceInfo.features[4] || "");
      setValue("description", updatedServiceInfo.description || "");
    } catch (error) {
      console.log(error);
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
    <div className="mt-10">
      <Card className="w-[650px] mx-auto flex items-center justify-center">
        <div className="">
          <CardHeader>
            <CardTitle>Edit service</CardTitle>
            <CardDescription>Edit your service in one-click.</CardDescription>
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
                      defaultValue={service?.data?.title}
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
                      defaultValue={service?.data?.imageLink}
                    />
                  </div>
                </div>
                {/*Features  */}
                {Array.isArray(service?.data?.features) && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid w-full items-center mt-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Feature 1</Label>
                        <Input
                          id="feature1"
                          placeholder="feature 1"
                          {...register("feature1")}
                          defaultValue={service?.data?.features[0]}
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
                          defaultValue={service?.data?.features[1]}
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
                          defaultValue={service?.data?.features[2]}
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
                          defaultValue={service?.data?.features[3]}
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center mt-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="feature2">Feature 5</Label>
                        <Input
                          id="feature5"
                          placeholder="feature 5"
                          {...register("feature5")}
                          defaultValue={service?.data?.features[4]}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid w-full items-center mt-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Description"
                      {...register("description")}
                      defaultValue={service?.data?.description}
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

export default EditService;
