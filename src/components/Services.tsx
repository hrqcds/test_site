
import React from 'react'
import { motion } from 'framer-motion'
import { Map, Camera, BarChart3, Building, Compass, Layers } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Map,
      title: 'Levantamento Topográfico',
      description: 'Mapeamento detalhado do terreno com precisão centimétrica para projetos de engenharia e arquitetura.',
      features: ['Precisão ±2cm', 'Modelos 3D', 'Curvas de nível', 'MDT/MDS'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Camera,
      title: 'Fotogrametria Aérea',
      description: 'Captura de imagens aéreas de alta resolução para criação de ortomosaicos e modelos tridimensionais.',
      features: ['Alta resolução', 'Ortomosaicos', 'Modelos 3D', 'Análise temporal'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: BarChart3,
      title: 'Cálculo de Volumes',
      description: 'Medição precisa de volumes de terra, agregados e materiais para controle de obras e mineração.',
      features: ['Cubagem precisa', 'Relatórios detalhados', 'Monitoramento', 'Histórico'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Building,
      title: 'Inspeção de Estruturas',
      description: 'Análise detalhada de edificações, pontes, torres e estruturas de difícil acesso.',
      features: ['Segurança', 'Detalhamento', 'Relatórios', 'Monitoramento'],
      color: 'from-orange-500 to-red-400'
    },
    {
      icon: Compass,
      title: 'Georreferenciamento',
      description: 'Posicionamento preciso de propriedades rurais e urbanas conforme normas do INCRA.',
      features: ['INCRA', 'Certificação', 'Marcos geodésicos', 'Memorial descritivo'],
      color: 'from-indigo-500 to-blue-400'
    },
    {
      icon: Layers,
      title: 'Mapeamento Multispectral',
      description: 'Análise avançada da vegetação e solo utilizando sensores especializados.',
      features: ['NDVI', 'Saúde da vegetação', 'Análise do solo', 'Agricultura de precisão'],
      color: 'from-teal-500 to-cyan-400'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Nossos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em mapeamento aéreo com tecnologia de ponta 
            para atender todas as suas necessidades
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
                whileHover={{ x: 5 }}
              >
                Saiba mais →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Precisa de um serviço personalizado?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Conosco
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
