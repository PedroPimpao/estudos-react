'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../_components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../_components/ui/card'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../_components/ui/form'
import { Input } from '../_components/ui/input'
import Link from 'next/link'

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Minimo de 3 caracteres' })
      .max(20, { message: 'Máximo de 20 caracteres' }),
    email: z.email({ message: 'Endereço de email inválido' }),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    confirmPassword: z.string().min(8, { message: 'Minimo de 8 caracteres' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

const SignUpPage = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(`Username: ${data.username}`)
    console.log(`Email: ${data.email}`)
    console.log(`Password: ${data.password}`)
    console.log(`Confirm password: ${data.confirmPassword}`)
  }

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center p-4">
      <Card className="flex w-full max-w-sm rounded-2xl p-6 shadow-xl">
        <CardHeader>
          <CardTitle>Crie sua conta!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Confirme a senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4">
                <Button type="submit" className="w-full cursor-pointer">
                  Criar
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4">
            <Button className="w-full cursor-pointer" variant={'outline'}>
              {' '}
              Entrar com google{' '}
            </Button>
          </div>

          <div className="mt-4 flex w-full justify-center gap-2 text-center text-sm">
            <p>Já tem uma conta?{''}</p>
            <Link
              href={'/login'}
              className="text-primary font-medium hover:underline"
            >
              Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpPage
