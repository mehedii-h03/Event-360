import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import UseGetApi from "@/hooks/UseGetApi";
import toast, { Toaster } from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useDeleteApi from "@/hooks/useDeleteApi";

type TService = {
  _id: string;
  title: string;
  imageLink: string;
  features: [
    features1: string,
    features2: string,
    features3: string,
    features4: string,
    features5: string
  ];
  description: string;
};

const ServiceList = () => {
  const urlGet = "https://event-360-server-two.vercel.app/services";
  const { data: services, isLoading, isError } = UseGetApi(urlGet, "services");

  const deletePost = useDeleteApi("services");

  const handlerDelete = async (id: string) => {
    const deleteUrl = `https://event-360-server-two.vercel.app/service/delete/${id}`;
    try {
      await deletePost(deleteUrl);
      toast.success("Successfully deleted");
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
    <Container className="mt-20 mx-6 px-6 border rounded-md w-11/12">
      <Table>
        <TableCaption>A list of events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Image link</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(services?.data) &&
            services?.data?.map((s: TService, i: number) => (
              <TableRow key={s._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{s.title}</TableCell>
                <TableCell>{s.imageLink}</TableCell>
                <TableCell>
                  {s.features?.map((f: string, i: number) => (
                    <p key={i}>
                      {i + 1}.{f}
                    </p>
                  ))}
                </TableCell>
                <TableCell >{s.description}</TableCell>
                <TableCell className="text-right space-y-3">
                  <Link to={`edit/${s._id}`}>
                    <Button variant="outline" size="icon">
                      <Pencil />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handlerDelete(s._id)}
                    variant="outline"
                    size="icon"
                    className="text-red-500 border-red-500 hover:bg-red-500"
                  >
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Toaster />
    </Container>
  );
};

export default ServiceList;
