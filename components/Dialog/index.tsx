import {
  Dialog as ShadCNDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger as ShadCNDialogTrigger,
} from '@/components/ui/dialog';

type DialogProps = {
  open: boolean;
  title: string;
  description?: string;
  DialogTrigger: React.ReactNode;
  Actions?: React.ReactNode;
  children?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  Actions,
  DialogTrigger,
  children,
}: DialogProps) {
  return (
    <ShadCNDialog open={open} onOpenChange={onOpenChange}>
      <ShadCNDialogTrigger asChild>{DialogTrigger}</ShadCNDialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-end">{Actions}</DialogFooter>
      </DialogContent>
    </ShadCNDialog>
  );
}

export default Dialog;
