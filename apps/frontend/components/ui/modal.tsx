import * as React from "react"
import { cn } from "@shared/lib/utils"

const Modal = React.forwardRef<HTMLDialogElement, React.DialogHTMLAttributes<HTMLDialogElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <dialog
                ref={ref}
                className={cn(
                    "backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 m-auto rounded-[12px] border border-border/50 bg-background p-0 text-foreground shadow-xl sm:max-w-lg w-full",
                    className
                )}
                {...props}
            >
                <div className="flex flex-col gap-6 p-6">
                    {children}
                </div>
            </dialog>
        )
    }
)
Modal.displayName = "Modal"

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h2 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />
    )
)
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p ref={ref} className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />
    )
)
ModalDescription.displayName = "ModalDescription"

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 mt-4", className)} {...props} />
)
ModalFooter.displayName = "ModalFooter"

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter }
