"use client"
import Form from "next/form"
import { Button } from "@/components/ui/button"
import { deleteCommentId } from "@/lib/action"

const ButtonDelete = ({ id }: { id: number }) => {
  return (
    <Form
      action={async (formData) => {
        await deleteCommentId(formData)
      }}
      className='w-fit flex flex-col  items-start gap-4'
    >
      <input type='hidden' name='id' value={id} />

      <Button size={'icon'} className='w-full bg-transparent hover:border-2 transition-all delay-200'>
        ❌
      </Button>
    </Form>
  )
}
export default ButtonDelete