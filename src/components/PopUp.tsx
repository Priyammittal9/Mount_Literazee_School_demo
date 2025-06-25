import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface PopUpProps {
  btnTxt: string;
}

interface FormProps {
  parentName: string;
  childName: string;
  email?: string;
  phone: string;
  previousSchoolName?: string;
  class: string;
}

const PopUp = ({ btnTxt }: PopUpProps) => {
  const [open, setOpen] = useState(false);

  const schema = z.object({
    parentName: z.string().min(1, "Parent name is required"),
    childName: z.string().min(1, "Child name is required"),
    email: z.string().email("Invalid email").optional(),
    phone: z
      .string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits"),
    previousSchoolName: z.string().optional(),
    class: z.string().min(1, "Class is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormProps) => {
    console.log("Form Data:", data);
    toast.success("Enquiry submitted successfully!");
    reset();
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              {btnTxt}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Admission Enquiry</DialogTitle>
              <DialogDescription>
                Please fill out the enquiry form below, and our admissions team
                will get back to you with further details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="parentName">Parent/Guardian Name</Label>
                <Input
                  id="parentName"
                  {...register("parentName")}
                  placeholder="Parent/Guardian Name"
                />
                {errors.parentName && (
                  <span className="text-sm text-red-600">
                    {errors.parentName.message}
                  </span>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="childName">Child Name</Label>
                <Input
                  id="childName"
                  {...register("childName")}
                  placeholder="Child Name"
                />
                {errors.childName && (
                  <span className="text-sm text-red-600">
                    {errors.childName.message}
                  </span>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" {...register("email")} placeholder="Email" />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <span className="text-sm text-red-600">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="class">Class</Label>
                <Input
                  id="class"
                  {...register("class")}
                  placeholder="Class"
                />
                {errors.class && (
                  <span className="text-sm text-red-600">
                    {errors.class.message}
                  </span>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="previousSchoolName">
                  Previous School Name
                </Label>
                <Input
                  id="previousSchoolName"
                  {...register("previousSchoolName")}
                  placeholder="Previous School Name"
                />
                {errors.previousSchoolName && (
                  <span className="text-sm text-red-600">
                    {errors.previousSchoolName.message}
                  </span>
                )}
              </div>
              <Button type="submit">Submit</Button>
            </div>

            {/* <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              
            </DialogFooter> */}
          </DialogContent>
        </form>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default PopUp;
