import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

export function Dores() {
  return (
    <>
      <div className="text-center">
        <motion.h1
          className="text-5xl font-secondary mx-auto font-bold text-primary my-7"
          initial={{ opacity: 0, x: +200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: +200 }}
          transition={{ duration: 1.2 }}
        >
          Dores
        </motion.h1>
      </div>
      <div className="mx-auto grid justify-center gap-3 max-w-full sm:max-w-[70rem] md:grid-cols-2 lg:grid-cols-3 p-6">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between h-full rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-primary ">
                  Falta de Conhecimento e Complexidade dos Produtos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores relatam dificuldade em entender como
                  funcionam os diferentes produtos de renda fixa, como CDB, LCI,
                  LCA, e Tesouro Direto. Eles ficam confusos sobre a escolha
                  ideal, levando a erros, como escolher opções com rentabilidade
                  baixa ou investir sem considerar os custos de liquidez.
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
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Medo de Perder Dinheiro
                </h3>
                <p className="text-sm text-muted-foreground">
                  Apesar da renda fixa ser considerada segura, muitos
                  investidores temem que inflação, taxas de administração e
                  impostos possam afetar seus ganhos. Essa preocupação sobre a
                  rentabilidade real e os custos envolvidos gera insegurança,
                  tornando a decisão de investir em renda fixa menos
                  confortável.
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
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-primary">
                  Dificuldade em Entender a Relação Entre Juros e Rendimento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores têm dificuldade em entender como a
                  variação das taxas de juros afeta os rendimentos,
                  principalmente em títulos de renda fixa. Quando os juros
                  aumentam, o valor dos títulos pode diminuir, gerando dúvidas
                  sobre o impacto nos retornos. Esse cenário de incerteza pode
                  complicar a tomada de decisões financeiras e a gestão eficaz
                  dos investimentos.
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
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Falta de Planejamento Financeiro <br /> de Longo Prazo
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores enfrentam dificuldades ao tentar alinhar
                  seus investimentos em renda fixa com metas de longo prazo,
                  como a aposentadoria ou a compra de um imóvel. A falta de
                  clareza sobre como esses investimentos podem se ajustar ao
                  crescimento esperado do patrimônio a longo prazo cria
                  incertezas.
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
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-primary">
                  Desinformação e Influência <br /> de Gerentes Bancários
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores relatam dificuldade em entender como
                  funcionam os diferentes produtos de renda fixa, como CDB, LCI,
                  LCA, e Tesouro Direto. Eles ficam confusos sobre a escolha
                  ideal, levando a erros, como escolher opções com rentabilidade
                  baixa ou investir sem considerar os custos de liquidez.
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
          <BackgroundGradient className="relative overflow-hidden rounded-3xl border-transparent bg-background w-full md:max-h-[330px] md:h-[300px]">
            <div className="flex flex-col justify-between rounded-md p-5">
              <div className="space-y-1">
                <h3 className="font-bold text-secondary">
                  Falta de Flexibilidade e Acessibilidade nos Investimentos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Muitos investidores se sentem frustrados com a falta de
                  flexibilidade dos produtos de renda fixa, como prazos de
                  resgate longo ou penalizações por liquidez antecipada. Além
                  disso, a complexidade de acessar e movimentar investimentos em
                  plataformas bancárias ou corretoras pode ser desmotivadora
                  para quem busca praticidade e agilidade.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </>
  );
}
