
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Building2, Factory, Tractor, Pickaxe } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendes',
      position: 'Diretor de Engenharia',
      company: 'Construtora Horizonte',
      icon: Building2,
      rating: 5,
      text: 'A AeroTopo revolucionou nossos projetos de infraestrutura. A precisão dos levantamentos topográficos com drones reduziu nosso tempo de planejamento em 60% e aumentou significativamente a qualidade dos nossos projetos.',
      project: 'Complexo Residencial - 120 hectares'
    },
    {
      id: 2,
      name: 'Ana Silva',
      position: 'Gerente de Projetos',
      company: 'Indústrias Metalúrgicas SA',
      icon: Factory,
      rating: 5,
      text: 'Excelente trabalho na inspeção das nossas estruturas industriais. O relatório detalhado e as imagens de alta resolução nos permitiram identificar problemas que passariam despercebidos por métodos convencionais.',
      project: 'Inspeção de Torres de Resfriamento'
    },
    {
      id: 3,
      name: 'Roberto Santos',
      position: 'Proprietário Rural',
      company: 'Fazenda Santa Clara',
      icon: Tractor,
      rating: 5,
      text: 'O mapeamento multispectral da minha propriedade me ajudou a otimizar a produção agrícola. Com os dados fornecidos, consegui aumentar a produtividade em 25% aplicando agricultura de precisão.',
      project: 'Monitoramento de 500 hectares'
    },
    {
      id: 4,
      name: 'Mariana Costa',
      position: 'Engenheira de Minas',
      company: 'Mineração Vale Verde',
      icon: Pickaxe,
      rating: 5,
      text: 'A cubagem precisa dos nossos estoques de minério tem sido fundamental para o controle de produção. A AeroTopo entrega relatórios mensais com precisão impressionante, essencial para nossa operação.',
      project: 'Controle de Estoque - Mina a Céu Aberto'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que Nossos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clientes
            </span>{' '}
            Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de clientes que transformaram seus projetos 
            com nossa tecnologia de mapeamento aéreo
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Info */}
                <div className="bg-blue-50 rounded-lg p-3 mb-6">
                  <p className="text-sm text-blue-700 font-medium">
                    Projeto: {testimonial.project}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8">Resultados que Falam por Si</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Taxa de Satisfação</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Redução de Tempo</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Clientes Atendidos</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Junte-se aos nossos clientes satisfeitos
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Meu Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
