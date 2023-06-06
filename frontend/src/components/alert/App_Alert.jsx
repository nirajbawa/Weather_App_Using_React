import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function App_Alert(props) {

  return (
    <div className="w-full flex justify-center items-center md:justify-end md:px-4 md:py-4 fixed bottom-1 md:bottom-5">
    <Alert
    variant="gradient"
    color="red"
    open={props.open}
    icon={<ExclamationTriangleIcon className="h-6 w-6" />}
    open={props.open}

    className=" md:w-2/4 lg:w-1/3"

    action={
      <Button
        variant="text"
        color="white"
        size="sm"
        className="!absolute top-3 right-3"
        onClick={() => props.setOpen(false)}
      >
        Close
      </Button>
    }
  >
    {props.message}
  </Alert>
  </div>
  )
}
