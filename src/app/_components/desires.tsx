import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

export function Desires() {
  return (
    <>
      <div className="text-center">
        <motion.h1
          className="text-5xl font-secondary mx-auto font-bold text-primary my-7"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.2 }}
        >
          Desejos
        </motion.h1>
      </div>
      <div className="mx-auto grid justify-center gap-3 max-w-full sm:max-w-[70rem] md:grid-cols-2 lg:grid-cols-3 p-2">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Segurança nos Investimentos
                </h3>
                <p className="text-sm text-muted-foreground">
                  O desejo de garantir que o capital estará protegido, mesmo em
                  momentos de instabilidade econômica, é um dos maiores
                  atrativos da renda fixa.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-primary">
                  Atingir a Independência Financeira de Forma Segura
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores desejam alcançar a independência
                  financeira através de investimentos de baixo risco,
                  construindo patrimônio de forma constante sem grandes perdas.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Simplicidade e Clareza nas Explicações
                </h3>
                <p className="text-sm text-muted-foreground">
                  Buscam por conteúdos acessíveis e fáceis de entender, que
                  possibilitem a tomada de decisões rápidas e diretas.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-primary">
                  Diversificação Consciente e Rentabilidade Acessível
                </h3>
                <p className="text-sm text-muted-foreground">
                  Desejam aprender a diversificar os investimentos em renda fixa
                  sem perder a segurança e maximizando a rentabilidade.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Educação Financeira para Autonomia
                </h3>
                <p className="text-sm text-muted-foreground">
                  Os investidores almejam adquirir conhecimento suficiente para
                  tomar decisões financeiras de forma independente, sem depender
                  de bancos ou gerentes.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full p-2 md:max-h-[240px] md:h-[210px]">
            <div className="flex flex-col justify-between h-full rounded-md p-3">
              <div className="space-y-1">
                <h3 className="font-bold text-primary">
                  Facilidade de Acesso e Gestão dos Investimentos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Os investidores desejam plataformas intuitivas e fáceis de
                  usar, que permitam acompanhar e gerir seus investimentos com
                  praticidade, sem complicações ou burocracias, proporcionando
                  uma experiência fluida e acessível.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </>
  );
}
