'use client'

import { useForm } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../_components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../_components/ui/form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../_components/ui/input'
import { Button } from '../_components/ui/button'
import Link from 'next/link'

const loginSchema = z.object({
  email: z.email({ message: 'Endereço de email inválido' }),
  password: z.string().min(8, { message: 'Mínimo de 8 caracteres' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginPage = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginFormValues) => {
    console.log(`Email: ${data.email}`)
    console.log(`Password: ${data.password}`)
  }

  return (
    <>
      <div className="flex min-h-screen min-w-screen items-center justify-center p-4">
        <Card className="flex w-full max-w-sm rounded-2xl p-6 shadow-xl">
          <CardHeader>
            <CardTitle> Entre na sua conta! </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                action=""
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Senha..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-4">
                  <Button className="w-full cursor-pointer">Entrar</Button>
                </div>
              </form>
            </Form>
            <div className="mt-4">
              <Button className="w-full" variant={'outline'}>
                Entrar com google
              </Button>
            </div>

            <div className="mt-4 flex w-full justify-center gap-2 text-center text-sm">
              <p>Ainda não tem uma conta?{''}</p>
              <Link
                href={'/signup'}
                className="text-primary font-medium hover:underline"
              >
                Cadastre-se
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default LoginPage
