import {Button} from "@/components/ui/button"
import Container from "@/components/Container.jsx";
import CardContainer from "@/components/CardContainer.jsx";
import Footer from "@/components/section/Footer.jsx";
import {Input} from "@/components/ui/input.jsx";
import Link from "@/components/CustomUI/Link.jsx";

export default function App() {
  return (
    <Container>
      <CardContainer>
        <div className={'flex-1 space-y-6'}>
          <h1 className={'font-normal text-5xl'}>Login</h1>
          <p>Gunakan akun google anda</p>
        </div>
        <div className={'flex-1'}>
          <div className={'flex flex-col gap-8 sm:gap-6'}>
            <div>
              <Input className={'py-6'} type="email" placeholder="Email atau nomor telepon"/>
              <div className={'pt-1'}>
                <Button className={'bg-transparent border-0 px-0 font-medium'} variant={'link'} asChild>
                  <a href="/login">Lupa email?</a>
                </Button>
              </div>
            </div>
            <div>
              <div className={'text-sm leading-tight'}>Bukan komputer Anda? Gunakan Private Window untuk login.
                <Button className={'bg-transparent border-0 px-0 font-medium text-wrap'} variant={'link'} asChild>
                  <a href="/login">Pelajari lebih lanjut cara menggunakan mode tamu</a>
                </Button>
              </div>
            </div>
            <div className={'flex justify-between sm:justify-end gap-4'}>
              <Button variant={'secondary'}>Buat akun</Button>
              <Button>Selanjutnya</Button>
            </div>
          </div>
        </div>
      </CardContainer>
      <Footer/>
    </Container>
  )
}