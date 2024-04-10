import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function Contact() {
  return (
    <section id='contact' className="w-full py-8 md:py-16">
      <div className="container grid max-w-2xl px-4 gap-10 md:px-6">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center"><span className="text-primary">Contatos</span></h2>
          
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Mensagem..." />
          </div>
          <Button>Enviar</Button>
        </div>
      </div>
    </section>
  )
}