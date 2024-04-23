import Container from "@/components/Container";
import UseGetApi from "@/hooks/UseGetApi";
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
import { Pencil, Trash2 } from "lucide-react";
import useDeleteApi from "@/hooks/useDeleteApi";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

type TRecentEvent = {
  _id: string;
  imageLink: string;
};

const RecentEventsList = () => {
  const url = "https://event-360-server-two.vercel.app/recent-events";
  const {
    data: recentEvents,
    isLoading,
    isError,
  } = UseGetApi(url, "recent-events");

  const deletePost = useDeleteApi("recent-events");

  const handlerDelete = async (id: string) => {
    const deleteUrl = `https://event-360-server-two.vercel.app/recent-event/delete/${id}`;
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
    <div>
      <Container className="mt-20 mx-6 px-6 border rounded-md w-11/12">
        <Table>
          <TableCaption>A list of events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Image link</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(recentEvents?.data) &&
              recentEvents?.data?.map((e: TRecentEvent, i: number) => (
                <TableRow key={e._id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{e.imageLink}</TableCell>
                  <TableCell className="text-right space-x-3">
                    <Link to={`edit/${e._id}`}>
                      <Button variant="outline" size="icon">
                        <Pencil />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handlerDelete(e._id)}
                      className="text-red-500 border-red-500 hover:bg-red-500"
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
      <Toaster />
    </div>
  );
};

export default RecentEventsList;
