import { Check } from "lucide-react";
import Enrollment from "./enrollment";
import PreEnrollment from "./pre-enrollment";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

function InvestmentSection() {
  return (
    <section
      id="investment"
      className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="font-secondary text-secondary font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Investimento
        </h2>
        <p className="max-w-[85%] leading-normal text-secondary sm:text-2xl sm:leading-7">
          Normalmente, isso tudo custaria 279,00 mas, garantindo a sua vaga
          agora, você tem acesso a uma condição especial...
        </p>
        <p className="opacity-70 max-w-[100%] mt-5 font-secondary text-primary sm:text-sm md:text-lg ">
          O nosso conteúdo reúne todas as estruturas ocultas utilizadas pelos
          maiores players do mercado para alcançar mais de 6 dígitos todos os
          meses.
        </p>
      </div>
      <div>
        <div className="mt-10 flex flex-col gap-4 text-center justify-center mx-auto">
          <div>
            <h1 className="text-secondary font-secondary text-4xl font-bold">
              INSCREVA-SE <br /> AGORA E GARANTA:
            </h1>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-secondary">
              12x
              <br />
              R$<span className="text-6xl font-bold text-primary">97,61</span>
            </h4>
            <h4 className="font-bold text-xl">ou R$ 978,00 à vista</h4>
            {/* <PreEnrollment /> */}
          </div>
          <div>
            <Enrollment />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
