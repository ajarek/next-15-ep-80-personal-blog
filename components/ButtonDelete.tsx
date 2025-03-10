'use client'
import Form from 'next/form'
import { Button } from '@/components/ui/button'

const ButtonDelete = ({
  id,
  deleteElementId,
}: {
  id: number
  deleteElementId: (formData: FormData) => void
}) => {
  return (
    <Form
      action={async (formData) => {
        await deleteElementId(formData)
      }}
      className='w-fit flex flex-col  items-start gap-4'
    >
      <input
        type='hidden'
        name='id'
        value={id}
      />

      <Button
        size={'icon'}
        className='w-full bg-transparent hover:border-2 transition-all delay-200 '
        type='submit'
        aria-label='Usuń'
      >
        ❌
      </Button>
    </Form>
  )
}
export default ButtonDelete
